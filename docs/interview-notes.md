# Cypress Interview Notes (Q&A – JavaScript)

This document contains commonly asked **Cypress automation interview questions** with clear, practical, and real-world answers.
It is prepared to demonstrate **strong Cypress fundamentals, framework design, and testing best practices**.

---

## 1. What framework architecture have you used?

I have used **Page Object Model (POM)** with a strict separation of concerns.
- Test files contain only business flows
- Page files contain actions and assertions
- Locators are maintained separately
- Test data is stored in fixtures

This approach improves readability and long-term maintainability.

---

## 2. Why did you choose Page Object Model (POM)?

POM reduces duplication and makes tests easier to maintain.
If the UI changes, updates are limited to page or locator files instead of modifying every test.

---

## 3. Why are locators kept in separate files?

Keeping locators separate provides a **single source of truth**.
When UI selectors change, only one file needs updating, which prevents widespread test failures.

---

## 4. How do you manage sensitive data like credentials?

Sensitive data such as usernames and passwords are managed using **environment variables** through `.env` and `cypress.config.js`.
The `.env` file is gitignored to ensure credentials are never committed to the repository.

---

## 5. Why not keep credentials in fixtures?

Fixtures are version-controlled and shared across the team.
Credentials are sensitive and should never be exposed in repositories, so environment variables are the safest and cleanest option.

---

## 6. What kind of data goes into fixtures?

Only **non-sensitive and configurable data**, such as:
- Expected UI text
- Error messages
- Product counts
- Sorting options

This keeps test logic clean and reusable.

---

## 7. How do you handle common actions like login?

Common actions are abstracted into **Page Object methods** and reused across tests.
In addition, `beforeEach` hooks are used to avoid repetition and keep tests focused on validation logic.

---

## 8. How do you ensure tests are independent?

Cypress automatically resets the application state between tests.
Each test runs independently and does not rely on the execution result of another test.

---

## 9. How do you validate sorting functionality?

I extract values (like prices) from the UI, convert them into numbers, and compare them with a sorted version of the same array.
This validates real business behavior instead of just UI changes.

---

## 10. How do you debug failed Cypress tests?

I use:
- Cypress Test Runner (time-travel debugging)
- Screenshots and videos
- Console logs and assertions

The interactive UI makes debugging faster and more visual.

---

## 11. How are screenshots and videos handled?

Screenshots are automatically captured on failure.
Videos are recorded during headless execution, which helps in CI debugging.

---

## 12. How does Cypress handle waiting?

Cypress has **automatic waiting** built-in.
It waits for elements to exist, become visible, and actionable before interacting, reducing the need for explicit waits.

---

## 13. How do you handle flaky tests?

I avoid hard waits and rely on:
- Cypress auto-waiting
- Proper assertions
- Stable locators
This significantly reduces flaky test behavior.

---

## 14. How do you configure different environments?

Base URL and credentials are controlled using environment variables.
This allows easy switching between QA, UAT, and PROD without changing test code.

---

## 15. What browsers are supported in your Cypress framework?

The framework supports:
- Chrome
- Edge
- Electron

These cover most modern web application testing needs.

---

## 16. How is Cypress different from Selenium?

Cypress runs inside the browser and provides automatic waits and time-travel debugging.
Selenium uses WebDriver, requires explicit waits, and is generally slower to debug.

---

## 17. Why did you choose Cypress over Selenium?

Cypress provides faster execution, better debugging experience, and simpler setup for modern web applications.
It allows quicker feedback and higher test stability.

---

## 18. How do you handle retries in your framework?

Retries are configured at the framework level and are typically enabled only in CI environments to reduce false failures.

---

## 19. How do you ensure framework scalability?

By maintaining strict separation between:
- Tests
- Pages
- Locators
- Fixtures
- Configuration

the framework remains scalable and easy to extend.

---

## 20. What type of assertions do you prefer?

I prefer **business-level assertions** instead of simple visibility checks.
This ensures the application behavior is validated, not just UI presence.

---

## 21. How do you structure your Cypress configuration?

The configuration includes:
- Base URL
- Environment variables
- Retry strategy
- Screenshot and video settings

This makes the framework CI-ready and production-friendly.

---

## 22. How do you handle negative test scenarios?

Negative scenarios such as invalid login are validated by asserting exact error messages to ensure correct application behavior.

---

## 23. How do you make tests readable for new team members?

Tests are short and descriptive.
Complex logic is abstracted into page objects, keeping test files easy to understand.

---

## 24. How do you explain this framework in an interview?

I explain:
1. Framework architecture (POM)
2. Data separation using fixtures
3. Environment and security handling
4. Cypress features used for stability and debugging

---

## 25. What makes this framework interview-ready?

It demonstrates:
- Real-world Cypress practices
- Clean architecture
- Secure configuration
- Maintainability and scalability
- Strong automation fundamentals

---

