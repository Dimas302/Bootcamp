class LoginPage {
  usernameInput = 'input[name="username"]';
  passwordInput = 'input[name="password"]';
  loginButton = 'button[type="submit"]';

  visit() {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  }

  inputUsername(username) {
    cy.get(this.usernameInput).type(username);
  }

  inputPassword(password) {
    cy.get(this.passwordInput).type(password);
  }

  clickLogin() {
    cy.get(this.loginButton).click();
  }

  login(username, password) {
    this.inputUsername(username);
    this.inputPassword(password);
    this.clickLogin();
  }
}

export default LoginPage;
