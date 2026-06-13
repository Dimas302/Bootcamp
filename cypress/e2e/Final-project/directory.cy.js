import LoginPage from "../pages/LoginPage";
import DirectoryPage from "../pages/DirectoryPage";
import data from "../../fixtures/directoryData.json";

describe("Directory Feature", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com");

    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();

    DirectoryPage.openDirectory();
  });

  it("TC01 Open Directory", () => {
    cy.url().should("include", "directory");
  });

  it("TC02 Search Employee 1", () => {
    cy.intercept("GET", "**/directory/**").as("directory1");

    DirectoryPage.employeeName(data.employee1);
    DirectoryPage.search();

    cy.wait("@directory1");
  });

  it("TC03 Search Employee 2", () => {
    cy.intercept("GET", "**/directory/**").as("directory2");

    DirectoryPage.employeeName(data.employee2);
    DirectoryPage.search();

    cy.wait("@directory2");
  });

  it("TC04 Search Kosong", () => {
    cy.intercept("GET", "**/directory/**").as("directory3");

    DirectoryPage.search();

    cy.wait("@directory3");
  });

  it("TC05 Reset Filter", () => {
    DirectoryPage.reset();
  });

  it("TC06 Refresh Directory", () => {
    cy.reload();
  });

  it("TC07 Validasi Menu Directory", () => {
    cy.contains("Directory").should("exist");
  });

  it("TC08 Validasi Search Button", () => {
    cy.contains("Search").should("exist");
  });
});
