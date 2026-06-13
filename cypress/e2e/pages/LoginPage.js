class LoginPage {
  visit() {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  }

  username(username) {
    cy.get('input[name="username"]').clear().type(username);
  }

  password(password) {
    cy.get('input[name="password"]').clear().type(password);
  }

  loginBtn() {
    cy.get('button[type="submit"]').click();
  }

  forgotPassword() {
    cy.contains("Forgot your password?").click();
  }
}

export default new LoginPage();
