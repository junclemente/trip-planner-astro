/**
 * Calculates the minimum set of transactions to settle debts among trip members.
 *
 * @param {Array<{id: string}>} members
 * @param {Array<{amount: number, paidBy: string, splitBetween: string[], customAmounts?: Record<string,number>}>} expenses
 * @returns {Array<{from: string, to: string, amount: number}>}
 */
export function calculateSettlements(members, expenses) {
  if (!expenses.length || !members.length) return [];

  const balances = {};
  members.forEach(m => { balances[m.id] = 0; });

  expenses.forEach(expense => {
    if (!(expense.paidBy in balances)) balances[expense.paidBy] = 0;
    balances[expense.paidBy] += expense.amount;
    (expense.splitBetween ?? []).forEach(personId => {
      if (!(personId in balances)) balances[personId] = 0;
      const share = expense.customAmounts?.[personId] != null
        ? expense.customAmounts[personId]
        : expense.amount / (expense.splitBetween?.length || 1);
      balances[personId] -= share;
    });
  });

  const creditors = Object.entries(balances)
    .filter(([, v]) => v > 0.005)
    .map(([id, amount]) => ({ id, amount }))
    .sort((a, b) => b.amount - a.amount);
  const debtors = Object.entries(balances)
    .filter(([, v]) => v < -0.005)
    .map(([id, amount]) => ({ id, amount: -amount }))
    .sort((a, b) => b.amount - a.amount);

  const transactions = [];
  let ci = 0, di = 0;
  while (ci < creditors.length && di < debtors.length) {
    const credit = creditors[ci], debt = debtors[di];
    const amount = Math.min(credit.amount, debt.amount);
    transactions.push({ from: debt.id, to: credit.id, amount: Math.round(amount * 100) / 100 });
    credit.amount -= amount;
    debt.amount -= amount;
    if (credit.amount < 0.005) ci++;
    if (debt.amount < 0.005) di++;
  }
  return transactions;
}
