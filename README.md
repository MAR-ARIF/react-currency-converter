# Currency Converter

A responsive currency converter app built with React and Tailwind CSS.

Live demo: [mar-arif.github.io/react-currency-converter](https://mar-arif.github.io/react-currency-converter/)

---

## What it does

- Convert between 150+ world currencies using live exchange rates
- Swap the FROM and TO currencies with one click
- Automatically updates rates whenever you change the currency
- Glassmorphism UI — frosted glass card over a background image

---

## Tech used

| Tech | Why |
|------|-----|
| React 18 | UI and state management |
| Tailwind CSS | Styling |
| Vite | Build tool |
| @fawazahmed0 Currency API | Free live exchange rates, no API key needed |

---

## Project structure

```
src/
├── assets/
│   └── bg.jpg                  background image
├── components/
│   └── InputBox.jsx            reusable input + currency dropdown
├── hooks/
│   └── useCurrencyInfo.js      custom hook for fetching rates
├── App.jsx                     main component, owns all state
├── main.jsx                    entry point
└── index.css                   tailwind directives
```

---

## Things I learned building this

- How to write and use a custom React hook
- How props and callbacks work together — lifting state up
- How to reuse a single component with different props
- Tailwind utility classes — glassmorphism, flexbox layout, responsive sizing
- Why `e.preventDefault()` is needed on form submit
- How `Object.keys()` turns an API response into a dropdown list

---

## API

This project uses the [@fawazahmed0 Currency API](https://github.com/fawazahmed0/exchange-api). It is free, requires no API key, and supports 150+ currencies.

Primary URL:
```
https://latest.currency-api.pages.dev/v1/currencies/{currency}.json
```

Backup URL (if primary is down):
```
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{currency}.json
```
