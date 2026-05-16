import { COUNTRIES } from "../data/countries.js"

let focusedIndex = -1
let currentCountries = []
let selectedCountry = null

function esc(s) {
  const d = document.createElement("div")
  d.textContent = String(s ?? "")
  return d.innerHTML
}

function getCountryFlag(countryCode) {
  // Simple flag emoji conversion (works for most countries)
  if (!countryCode || countryCode.length !== 2) return "🌍"
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0))
  return String.fromCodePoint(...codePoints)
}

function filterCountries(query) {
  if (!query.trim()) return []

  const normalized = query.toLowerCase().trim()
  const matches = COUNTRIES.filter((country) =>
    country.name.toLowerCase().includes(normalized),
  )

  // Sort exact matches first, then by length
  return matches
    .sort((a, b) => {
      const aExact = a.name.toLowerCase().startsWith(normalized)
      const bExact = b.name.toLowerCase().startsWith(normalized)
      if (aExact && !bExact) return -1
      if (bExact && !aExact) return 1
      return a.name.length - b.name.length
    })
    .slice(0, 8)
}

function renderCountryDropdown(countries, dropdownId) {
  const dropdown = document.getElementById(dropdownId)
  if (!dropdown) return

  if (countries.length === 0) {
    dropdown.classList.add("hidden")
    return
  }

  dropdown.innerHTML = countries
    .map((country, index) => {
      const flag = getCountryFlag(country.code)
      const isActive = index === focusedIndex

      return `
      <li class="px-3 py-2 cursor-pointer hover:bg-gray-50 ${isActive ? "bg-indigo-50" : ""}"
           data-country-index="${index}">
        <span class="text-lg">${flag}</span> ${esc(country.name)}
      </li>
    `
    })
    .join("")

  dropdown.classList.remove("hidden")
  // Position dropdown below input
  const rect = input.getBoundingClientRect()
  dropdown.style.top = `${rect.bottom + window.scrollY}px`
  dropdown.style.left = `${rect.left + window.scrollX}px`
  dropdown.style.width = `${rect.width}px`
  // Add click listeners
  dropdown.querySelectorAll("[data-country-index]").forEach((el) => {
    el.addEventListener("mousedown", () => {
      const index = parseInt(el.dataset.countryIndex)
      selectCountry(countries[index], inputId, dropdownId, onSelect)
    })
  })
}

function selectCountry(country, inputId, dropdownId, onSelect) {
  selectedCountry = country
  const input = document.getElementById(inputId)
  if (input) {
    input.value = country.name
  }
  const dropdown = document.getElementById(dropdownId)
  if (dropdown) {
    dropdown.classList.add("hidden")
  }
  focusedIndex = -1

  if (onSelect) {
    onSelect(country)
  }
}

function hideDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId)
  if (dropdown) {
    dropdown.classList.add("hidden")
  }
  focusedIndex = -1
}

/**
 * Initialize country autocomplete for an input field
 * @param {string} inputId - ID of the input element
 * @param {string} dropdownId - ID of the dropdown element
 * @param {function} onSelect - Callback function when country is selected (country) => {}
 */
export function initCountryAutocomplete(inputId, dropdownId, onSelect) {
  const input = document.getElementById(inputId)
  const dropdown = document.getElementById(dropdownId)

  if (!input || !dropdown) {
    console.error("Country autocomplete: Input or dropdown element not found", {
      inputId,
      dropdownId,
    })
    return
  }

  // Reset state
  selectedCountry = null
  focusedIndex = -1
  currentCountries = []

  // Input event listener
  input.addEventListener("input", (e) => {
    const query = e.target.value
    selectedCountry = null
    focusedIndex = -1

    if (query.trim()) {
      currentCountries = filterCountries(query)
      renderCountryDropdown(currentCountries, dropdownId)
    } else {
      hideDropdown(dropdownId)
    }
  })

  // Keyboard navigation
  input.addEventListener("keydown", (e) => {
    if (currentCountries.length === 0) return

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        focusedIndex = Math.min(focusedIndex + 1, currentCountries.length - 1)
        renderCountryDropdown(currentCountries, dropdownId)
        break

      case "ArrowUp":
        e.preventDefault()
        focusedIndex = Math.max(focusedIndex - 1, -1)
        renderCountryDropdown(currentCountries, dropdownId)
        break

      case "Enter":
        e.preventDefault()
        if (focusedIndex >= 0 && focusedIndex < currentCountries.length) {
          selectCountry(
            currentCountries[focusedIndex],
            inputId,
            dropdownId,
            onSelect,
          )
        }
        break

      case "Escape":
        hideDropdown(dropdownId)
        break
    }
  })

  // Blur event
  input.addEventListener("blur", () => {
    // Delay hiding to allow click events on dropdown items
    setTimeout(() => hideDropdown(dropdownId), 150)
  })

  // Click outside to close
  document.addEventListener("click", (e) => {
    if (
      !e.target.closest(`#${inputId}`) &&
      !e.target.closest(`#${dropdownId}`)
    ) {
      hideDropdown(dropdownId)
    }
  })
}

/**
 * Get the currently selected country
 * @returns {Object|null} The selected country object or null
 */
export function getSelectedCountry() {
  return selectedCountry
}

/**
 * Set the selected country and update the input field
 * @param {Object} country - The country object to select
 * @param {string} inputId - ID of the input element to update
 */
export function setSelectedCountry(country, inputId) {
  selectedCountry = country
  const input = document.getElementById(inputId)
  if (input && country) {
    input.value = country.name
  }
}

/**
 * Clear the autocomplete state
 */
export function clearAutocomplete(inputId, dropdownId) {
  selectedCountry = null
  focusedIndex = -1
  currentCountries = []
  hideDropdown(dropdownId)

  const input = document.getElementById(inputId)
  if (input) {
    input.value = ""
  }
}
