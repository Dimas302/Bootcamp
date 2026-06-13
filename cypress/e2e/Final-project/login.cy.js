import LoginPage from "../pages/LoginPage";
import data from "../../fixtures/loginData.json";

describe("Login Feature", () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it("TC01 Login Valid", () => {
    cy.intercept("POST", "**/auth/validate").as("login");

    LoginPage.username(data.validUser);
    LoginPage.password(data.validPass);
    LoginPage.loginBtn();

    cy.wait("@login");
    cy.url().should("include", "dashboard");
  });

  it("TC02 Username Salah", () => {
    cy.intercept("POST", "**/auth/validate").as("wronguser");

    LoginPage.username(data.wrongUser);
    LoginPage.password(data.validPass);
    LoginPage.loginBtn();

    cy.wait("@wronguser");
    cy.contains("Invalid credentials");
  });

  it("TC03 Password Salah", () => {
    cy.intercept("POST", "**/auth/validate").as("wrongpass");

    LoginPage.username(data.validUser);
    LoginPage.password(data.wrongPass);
    LoginPage.loginBtn();

    cy.wait("@wrongpass");
    cy.contains("Invalid credentials");
  });

  it("TC04 Username Kosong", () => {
    LoginPage.password(data.validPass);
    LoginPage.loginBtn();

    cy.contains("Required");
  });

  it("TC05 Password Kosong", () => {
    LoginPage.username(data.validUser);
    LoginPage.loginBtn();

    cy.contains("Required");
  });

  it("TC06 Semua Kosong", () => {
    LoginPage.loginBtn();

    cy.contains("Required");
  });

  it("TC07 Forgot Password", () => {
    cy.intercept("GET", "**/requestPasswordResetCode").as("forgot");

    LoginPage.forgotPassword();

    cy.wait("@forgot");
  });

  it("TC08 Password Masked", () => {
    cy.get('input[name="password"]').should("have.attr", "type", "password");
  });
});
