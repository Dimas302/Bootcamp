describe("OrangeHRM Login Feature", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  });

  it("TC-001 Login sukses dengan username dan password valid", () => {
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/dashboard");
  });

  it("TC-002 Login gagal dengan username salah", () => {
    cy.get('input[name="username"]').type("AdminSalah");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();

    cy.contains("Invalid credentials").should("be.visible");
  });

  it("TC-003 Login gagal dengan password salah", () => {
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin125");
    cy.get('button[type="submit"]').click();

    cy.contains("Invalid credentials").should("be.visible");
  });

  it("TC-004 Username kosong", () => {
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();

    cy.contains("Required").should("be.visible");
  });

  it("TC-005 Password kosong", () => {
    cy.get('input[name="username"]').type("Admin");
    cy.get('button[type="submit"]').click();

    cy.contains("Required").should("be.visible");
  });
});
