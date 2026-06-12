describe("OrangeHRM Login Feature With Intercept", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  });

  it("TC-001 Login sukses dengan kredensial valid", () => {
    cy.intercept("POST", "**/auth/validate").as("loginSuccess");

    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();

    cy.wait("@loginSuccess").its("response.statusCode").should("eq", 302);

    cy.url().should("include", "/dashboard");
  });

  it("TC-002 Login gagal dengan username salah", () => {
    cy.intercept("POST", "**/auth/validate").as("invalidUsername");

    cy.get('input[name="username"]').type("AdminSalah");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();

    cy.wait("@invalidUsername");

    cy.contains("Invalid credentials").should("be.visible");
  });

  it("TC-003 Login gagal dengan password salah", () => {
    cy.intercept("POST", "**/auth/validate").as("invalidPassword");

    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("salah123");
    cy.get('button[type="submit"]').click();

    cy.wait("@invalidPassword");

    cy.contains("Invalid credentials").should("be.visible");
  });

  it("TC-004 Validasi username kosong", () => {
    cy.intercept("**").as("allRequests");

    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();

    cy.contains("Required").should("be.visible");
  });

  it("TC-005 Forgot Password", () => {
    cy.intercept("GET", "**/auth/requestPasswordResetCode").as("forgotPassword");

    cy.contains("Forgot your password?").click();

    cy.wait("@forgotPassword").its("response.statusCode").should("eq", 200);

    cy.url().should("include", "requestPasswordResetCode");
  });
});
