class DirectoryPage {
  openDirectory() {
    cy.contains("Directory").click();
  }

  employeeName(name) {
    cy.get('input[placeholder="Type for hints..."]').first().type(name);
  }

  search() {
    cy.contains("Search").click();
  }

  reset() {
    cy.contains("Reset").click();
  }
}

export default new DirectoryPage();
