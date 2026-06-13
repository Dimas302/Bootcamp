import LoginPage from "../../pages/LoginPage";

describe("OrangeHRM Login POM", () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it("TC-001 Login sukses", () => {
    loginPage.login("Admin", "admin123");

    cy.url().should("include", "/dashboard");
  });

  it("TC-002 Username salah", () => {
    loginPage.login("AdminSalah", "admin123");

    cy.contains("Invalid credentials").should("be.visible");
  });

  it("TC-003 Password salah", () => {
    loginPage.login("Admin", "salah123");

    cy.contains("Invalid credentials").should("be.visible");
  });

  it("TC-004 Username kosong", () => {
    loginPage.inputPassword("admin123");
    loginPage.clickLogin();

    cy.contains("Required").should("be.visible");
  });

  it("TC-005 Password kosong", () => {
    loginPage.inputUsername("Admin");
    loginPage.clickLogin();

    cy.contains("Required").should("be.visible");
  });
});
