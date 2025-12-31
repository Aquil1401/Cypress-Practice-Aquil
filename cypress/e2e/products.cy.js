import LoginPage from "../support/pages/LoginPage";
import ProductsPage from "../support/pages/ProductsPage";

describe("Products Tests", () => {
  const loginPage = new LoginPage();
  const productsPage = new ProductsPage();

  beforeEach(() => {
    loginPage.navigate();
    loginPage.loginWithEnvCredentials();

    cy.fixture("products").then((data) => {
      loginPage.verifyLoginSuccess(data.title);
    });
  });

  it("Verify products & sorting", () => {
    cy.fixture("products").then((data) => {
      productsPage.verifyProductsCount(data.productCount);
      productsPage.sortBy(data.sortLowToHigh);
      productsPage.verifySortedLowToHigh();
    });
  });
});
