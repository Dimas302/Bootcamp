class RecruitmentPage {
  openRecruitment() {
    cy.contains("Recruitment").click();
  }

  search() {
    cy.contains("Search").click();
  }

  reset() {
    cy.contains("Reset").click();
  }

  addCandidate() {
    cy.contains("Add").click();
  }
}

export default new RecruitmentPage();
