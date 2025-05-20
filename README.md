# React Clothing E‑Commerce 🛍️

A **React 18** single‑page application that mimics a modern clothing boutique.  Built from scratch with functional components, hooks, and **Sass** styling—perfect for learning component architecture, reusable UI patterns, and responsive design.

> **Status:** Early prototype (category showcase).  Cart, checkout, and user auth are on the roadmap.

---

## ✨ Features (so far)

| Module                 | What it does                                                 | Source                              |
| ---------------------- | ------------------------------------------------------------ | ----------------------------------- |
| **Category Directory** | Renders a responsive grid of shop categories with hover zoom | `src/components/category-directory` |
| **Category Item**      | Individual tile with background image + overlay title        | `src/components/category-item`      |
| **Global Styles**      | Basic flexbox layout & animations, written in **SCSS**       | `src/*.css / *.scss`                |
| **React‑Router ready** | Directory items are set up to navigate to future routes      | `src/App.js`                        |

---

## 🏗️  Stack

* **React 18** w/ functional components & hooks
* **Sass (1.77+)** for nesting + variables
* **Create React App** scaffolding (no eject)

> The goal is to later add **Context API** (or Redux Toolkit) for cart state, **Firebase** for Auth + Firestore, and **Stripe** for payments.

---

## 🚀 Getting Started

```bash
# 1 Clone
 git clone https://github.com/sagarkpatil3/React_Clothing_E_Commerce.git
 cd React_Clothing_E_Commerce

# 2 Install deps
 npm install   # or yarn

# 3 Run dev server
 npm start     # http://localhost:3000
```

> Live‑reload is enabled—edit any component and the browser refreshes automatically.

---

## 🗂️ File Structure (key bits)

```
src/
├── App.js                 # Root component
├── App.css
└── components/
    ├── category-directory/
    │   ├── category-directory.component.jsx
    │   └── category-directory.styles.scss
    └── category-item/
        ├── category-item.component.jsx
        └── category-item.styles.scss
```

---

## 🛣️  Roadmap

* [ ] **Shop pages** – product grid, filters, & pagination
* [ ] **Cart** – Context provider, add/remove items, persisted to `localStorage`
* [ ] **User Auth** – Google sign‑in via Firebase Authentication
* [ ] **Checkout** – Stripe test mode integration
* [ ] **Responsive tweaks** – mobile first media queries & lazy‑loaded images
* [ ] **Unit tests** – React Testing Library & Jest

Pull requests welcome—feel free to fork and improve! 🙌

---

## 📜  License

This project is licensed under the **MIT License**.  See `LICENSE` for details.
