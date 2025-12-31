# GITHUB BADGES

![Cypress](https://img.shields.io/badge/Cypress-Automation-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![POM](https://img.shields.io/badge/Design-POM-orange)
![Status](https://img.shields.io/badge/Status-Interview%20Ready-success)

## This framework is designed and maintained by **Md Aquil** for interview preparation and real-world automation use cases.

---

# Cypress Automation Framework (POM – JavaScript)

A scalable and maintainable UI automation framework built using **Cypress + JavaScript**, following **Page Object Model (POM)** with clearly separated **locators**, **test data (fixtures)**, and **environment-based configuration**.

---

## 🚀 Why this Framework?

- Designed for **real-world Cypress automation projects**
- Clean separation of concerns:
  - Locators
  - Page actions
  - Test data (fixtures)
  - Test specs
- Secure handling of credentials using **environment variables**
- Easy to maintain when UI changes
- Suitable for **mid-level to senior-level QA interviews**
- Migrated from Playwright to Cypress (demonstrates tool flexibility)

---

## 🛠 Tech Stack

- **Cypress**
- **JavaScript (ES6)**
- **Page Object Model (POM)**
- **Fixtures for test data**
- **dotenv for environment variables**
- **Cross-browser testing (Chrome, Edge, Electron)**

---

## 📁 Project Structure

```text
cypress-pom-framework/
│
├── cypress/
│   ├── e2e/                 # Test specs (*.cy.js)
│   ├── fixtures/            # Test data (JSON)
│   ├── support/
│   │   ├── pages/           # Page Object classes
│   │   ├── locators/        # Page-wise locators
│   │   ├── commands.js      # Custom Cypress commands
│   │   └── e2e.js           # Global hooks/support
│
├── cypress.config.js        # Cypress configuration
├── .env                     # Environment variables
├── package.json
└── README.md

```

## 🔧 Installation & Setup

1️⃣ Clone the repository
git clone https://github.com/yourusername/cypress-pom-framework.git
cd cypress-pom-framework

2️⃣ Install dependencies
npm install

3️⃣ Configure environment variables

## Create a .env file in the root directory:

BASE_URL=https://www.saucedemo.com
USER_EMAIL=standard_user
USER_PASSWORD=secret_sauce

4️⃣ Open Cypress Test Runner
npx cypress open

5️⃣ Run tests in headless mode
npx cypress run

## ▶️ Cypress Commands
## Run all tests
npx cypress run

## Open Cypress UI
npx cypress open

## Run specific spec
npx cypress run --spec cypress/e2e/login.cy.js

## 🐞 Reports & Debugging

Screenshots → Auto-captured on failure
Videos → Recorded during headless runs
Time-travel debugging → Cypress UI
Retry support → Configurable in Cypress

## Debug mode:

npx cypress open

## 🧠 Framework Highlights (Interview Points)

Page Object Model implemented in Cypress
Test data separated using fixtures
Environment-based credential handling
Clean locator strategy
Cypress async handling without async/await


## 🤝 Contributing

Contributions are welcome.
Feel free to open an issue or submit a pull request.

## 👤 Author

Md Aquil
QA Automation Engineer | Cypress | Playwright | JavaScript

Designed and developed this Cypress automation framework from scratch
Migrated an existing Playwright framework to Cypress (JS)
Focused on scalability, maintainability, and interview readiness
Actively maintaining and improving the framework

GitHub:
https://github.com/Aquil1401

## 📄 License

This project is licensed under the MIT License.