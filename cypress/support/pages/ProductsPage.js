import { productsLocators } from "../locators/products.locators";

class ProductsPage {
  verifyProductsCount(expected) {
    cy.get(productsLocators.inventoryItem)
      .should("have.length", expected);
  }

  sortBy(value) {
    cy.get(productsLocators.sortDropdown)
      .select(value);
  }

  verifySortedLowToHigh() {
    const prices = [];

    cy.get(productsLocators.inventoryPrice)
      .each(($el) => {
        const priceText = $el.text().replace("$", "");
        prices.push(Number(priceText));
      })
      .then(() => {
        const sorted = [...prices].sort((a, b) => a - b);
        expect(prices).to.deep.equal(sorted);
      });
  }
}

export default ProductsPage;
