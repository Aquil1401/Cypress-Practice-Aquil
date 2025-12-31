import LoginPage from "../support/pages/LoginPage";

describe("Login Tests", () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.navigate();
  });

  it("Login with valid credentials (ENV)", () => {
    cy.fixture("products").then((data) => {
      loginPage.loginWithEnvCredentials();
      loginPage.verifyLoginSuccess(data.title);
    });
  });

  it("Login with invalid credentials", () => {
    cy.fixture("login").then((users) => {
      const invalidUser = users.invalidUser;

      loginPage.login(
        invalidUser.username,
        invalidUser.password
      );

      loginPage.verifyLoginError(invalidUser.error);
    });
  });
});
