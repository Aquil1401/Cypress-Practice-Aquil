# Framework Architecture

This Cypress automation framework is designed using the **Page Object Model (POM)** pattern with a clear and strict separation of responsibilities.
The goal is to keep tests **readable, maintainable, and scalable** for real-world projects.

---

## 🧱 Architecture Layers

### 1️⃣ Tests (E2E Specs)
- Located in: `cypress/e2e/`
- Contain **business flows only**
- No selectors, no test data, no low-level logic
- Focus on **WHAT** is being tested, not **HOW**

Example:
- Login flow
- Product verification flow
- End-to-end user journeys

---

### 2️⃣ Pages (Page Objects)
- Located in: `cypress/support/pages/`
- Encapsulate **page-level actions and assertions**
- Act as a bridge between tests and UI
- Reusable across multiple test cases

Responsibilities:
- Page navigation
- User actions (click, type, select)
- Page-specific validations

---

### 3️⃣ Locators
- Located in: `cypress/support/locators/`
- Contain **only UI selectors**
- No Cypress commands or logic
- Central place to update selectors when UI changes

Benefits:
- Single source of truth for selectors
- Minimal test breakage on UI updates

---

### 4️⃣ Test Data (Fixtures)
- Located in: `cypress/fixtures/`
- Store **non-sensitive test data** in JSON format
- Examples:
  - User credentials (invalid users)
  - Expected UI text
  - Product counts and sort options

Benefits:
- Clear separation of test logic and data
- Easy data reuse across multiple tests

---

### 5️⃣ Environment Configuration (ENV)
- Managed via:
  - `.env` file
  - `cypress.config.js`
- Used for **sensitive data** such as:
  - Base URL
  - Login credentials

Principles:
- No hardcoded secrets in tests
- Environment-specific configuration support
- Fail-fast validation in CI (optional)

---

## 🔁 Execution Flow

1. Cypress loads configuration and environment variables
2. Tests trigger high-level business flows
3. Tests call Page Objects
4. Page Objects use Locators for UI interaction
5. Test data is read from Fixtures
6. Assertions validate expected behavior

---

## ✅ Benefits of This Architecture

- ✅ Easy maintenance when UI changes
- ✅ Highly readable and clean test cases
- ✅ Scalable for large Cypress projects
- ✅ Encourages best automation practices
- ✅ Interview-ready and production-friendly
- ✅ Clear separation of concerns

---

## 🎯 Design Philosophy

> Tests should describe user behavior,
> Pages should handle UI interaction,
> Locators should define selectors,
> Data should live outside test logic.

This philosophy ensures long-term maintainability and team collaboration.
