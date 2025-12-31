import { loginLocators } from "../locators/login.locators";

class LoginPage {
  navigate() {
    cy.visit("/");
  }

  loginWithEnvCredentials() {
    cy.get(loginLocators.usernameInput).type(Cypress.env("username"));
    cy.get(loginLocators.passwordInput).type(Cypress.env("password"));
    cy.get(loginLocators.loginButton).click();
  }

  login(username, password) {
    cy.get(loginLocators.usernameInput).type(username);
    cy.get(loginLocators.passwordInput).type(password);
    cy.get(loginLocators.loginButton).click();
  }

  verifyLoginSuccess(expectedTitle) {
    cy.get(loginLocators.title).should("have.text", expectedTitle);
  }

  verifyLoginError(message) {
    cy.get(loginLocators.errorMessage).should("have.text", message);
  }
}

export default LoginPage;
