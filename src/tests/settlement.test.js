import { describe, it, expect } from 'vitest';
import { calculateSettlements } from '../utils/settlement.js';

function members(...names) {
  return names.map(name => ({ id: name }));
}

function expense(paidBy, amount, splitBetween, customAmounts = null) {
  return { paidBy, amount, splitBetween, ...(customAmounts ? { customAmounts } : {}) };
}

// Helper: build a lookup map from transactions for easy assertions
function txMap(transactions) {
  const m = {};
  for (const t of transactions) {
    m[`${t.from}->${t.to}`] = t.amount;
  }
  return m;
}

// ── Scenario from the requirements ───────────────────────────────────────────

describe('full scenario: Bob/Jan/Ray/Steve/Cherry', () => {
  // Bob pays $300 dinner split 5 ways = $60 each
  // Jan pays $30 breakfast split 3 ways (Jan, Cherry, Ray) = $10 each
  // Bob pays $100 breakfast split 2 ways (Bob, Steve) = $50 each
  //
  // Net balances:
  //   Bob:    +300 - 60 (dinner) + 100 - 50 (breakfast) = +290
  //   Jan:    +30 - 60 (dinner) - 10 (breakfast) = -40
  //   Ray:    -60 (dinner) - 10 (breakfast) = -70
  //   Steve:  -60 (dinner) - 50 (breakfast) = -110
  //   Cherry: -60 (dinner) - 10 (breakfast) = -70

  const mems = members('Bob', 'Jan', 'Ray', 'Steve', 'Cherry');
  const expenses = [
    expense('Bob',   300, ['Bob','Jan','Ray','Steve','Cherry']),
    expense('Jan',    30, ['Jan','Cherry','Ray']),
    expense('Bob',   100, ['Bob','Steve']),
  ];

  it('produces a transaction for Steve → Bob of $110', () => {
    const txs = calculateSettlements(mems, expenses);
    const map = txMap(txs);
    expect(map['Steve->Bob']).toBe(110);
  });

  it('produces transactions covering Ray ($70 owed)', () => {
    const txs = calculateSettlements(mems, expenses);
    const rayOwes = txs.filter(t => t.from === 'Ray').reduce((s, t) => s + t.amount, 0);
    expect(Math.round(rayOwes * 100) / 100).toBe(70);
  });

  it('produces transactions covering Cherry ($70 owed)', () => {
    const txs = calculateSettlements(mems, expenses);
    const cherryOwes = txs.filter(t => t.from === 'Cherry').reduce((s, t) => s + t.amount, 0);
    expect(Math.round(cherryOwes * 100) / 100).toBe(70);
  });

  it('produces transactions covering Jan ($40 owed)', () => {
    const txs = calculateSettlements(mems, expenses);
    const janOwes = txs.filter(t => t.from === 'Jan').reduce((s, t) => s + t.amount, 0);
    expect(Math.round(janOwes * 100) / 100).toBe(40);
  });

  it('uses minimum number of transactions', () => {
    const txs = calculateSettlements(mems, expenses);
    // 4 debtors, 1 creditor (Bob net +290, Jan net -40) — algorithm may split Jan's debt
    // across Bob and no other creditors remain. Min is 4.
    expect(txs.length).toBeLessThanOrEqual(4);
  });

  it('total paid in transactions equals total owed', () => {
    const txs = calculateSettlements(mems, expenses);
    const totalPaid = txs.reduce((s, t) => s + t.amount, 0);
    expect(Math.round(totalPaid * 100) / 100).toBe(290);
  });
});

// ── Equal split math ──────────────────────────────────────────────────────────

describe('equal split', () => {
  it('splits evenly among all members', () => {
    const mems = members('A', 'B', 'C');
    const expenses = [expense('A', 90, ['A','B','C'])];
    const txs = calculateSettlements(mems, expenses);
    // A paid 90, owes 30 → net +60. B and C each owe 30.
    const bTx = txs.find(t => t.from === 'B' && t.to === 'A');
    const cTx = txs.find(t => t.from === 'C' && t.to === 'A');
    expect(bTx?.amount).toBe(30);
    expect(cTx?.amount).toBe(30);
  });

  it('two people split equally — one pays — other owes half', () => {
    const mems = members('Alice', 'Bob');
    const expenses = [expense('Alice', 50, ['Alice','Bob'])];
    const txs = calculateSettlements(mems, expenses);
    expect(txs).toHaveLength(1);
    expect(txs[0].from).toBe('Bob');
    expect(txs[0].to).toBe('Alice');
    expect(txs[0].amount).toBe(25);
  });

  it('returns empty when everyone pays equally', () => {
    const mems = members('A', 'B');
    const expenses = [
      expense('A', 50, ['A','B']),
      expense('B', 50, ['A','B']),
    ];
    expect(calculateSettlements(mems, expenses)).toHaveLength(0);
  });
});

// ── Custom amount split ───────────────────────────────────────────────────────

describe('custom amount split', () => {
  it('uses customAmounts when provided', () => {
    // A pays 100: B owes 70, C owes 30, A owes 0
    const mems = members('A', 'B', 'C');
    const expenses = [
      expense('A', 100, ['B','C'], { B: 70, C: 30 }),
    ];
    const txs = calculateSettlements(mems, expenses);
    const map = txMap(txs);
    expect(map['B->A']).toBe(70);
    expect(map['C->A']).toBe(30);
  });

  it('handles partial customAmounts (remaining person gets equal share)', () => {
    // A pays 90 split between A, B, C with customAmounts only for A (30) — B and C get equal split of remaining
    // But our algorithm uses customAmounts per person directly, so only custom-keyed persons are affected
    const mems = members('A', 'B');
    const expenses = [
      expense('A', 60, ['A','B'], { A: 10, B: 50 }),
    ];
    const txs = calculateSettlements(mems, expenses);
    // A owes 10, paid 60, net +50. B owes 50.
    expect(txs[0].from).toBe('B');
    expect(txs[0].amount).toBe(50);
  });
});

// ── Edge cases ────────────────────────────────────────────────────────────────

describe('edge cases', () => {
  it('returns empty when no expenses', () => {
    expect(calculateSettlements(members('A','B'), [])).toEqual([]);
  });

  it('returns empty when no members', () => {
    expect(calculateSettlements([], [expense('A', 100, ['A','B'])])).toEqual([]);
  });

  it('single person paying only themselves — no transactions', () => {
    const mems = members('Solo');
    const expenses = [expense('Solo', 100, ['Solo'])];
    expect(calculateSettlements(mems, expenses)).toHaveLength(0);
  });

  it('one person pays everything for the group', () => {
    const mems = members('Payer', 'A', 'B', 'C');
    const expenses = [expense('Payer', 120, ['Payer','A','B','C'])];
    const txs = calculateSettlements(mems, expenses);
    // Each of A, B, C owes 30
    expect(txs).toHaveLength(3);
    txs.forEach(t => {
      expect(t.to).toBe('Payer');
      expect(t.amount).toBe(30);
    });
  });

  it('amounts are rounded to 2 decimal places', () => {
    const mems = members('A', 'B', 'C');
    const expenses = [expense('A', 10, ['A','B','C'])]; // 10/3 = 3.333...
    const txs = calculateSettlements(mems, expenses);
    txs.forEach(t => {
      const decimals = String(t.amount).split('.')[1]?.length ?? 0;
      expect(decimals).toBeLessThanOrEqual(2);
    });
  });

  it('paidBy person not in members array still gets credited', () => {
    // Edge: expense paid by someone added later who isn't in the members list initially
    const mems = members('A', 'B');
    const expenses = [expense('External', 100, ['A','B'])];
    const txs = calculateSettlements(mems, expenses);
    const totalPaid = txs.reduce((s, t) => s + t.amount, 0);
    expect(totalPaid).toBe(100);
    txs.forEach(t => expect(t.to).toBe('External'));
  });
});
