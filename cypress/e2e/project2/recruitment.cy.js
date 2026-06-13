import RecruitmentPage from "../pages/RecruitmentPage";

describe("Recruitment Feature", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com");

    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();

    RecruitmentPage.openRecruitment();
  });

  it("TC01 Open Recruitment", () => {
    cy.url().should("include", "recruitment");
  });

  it("TC02 Search Candidate", () => {
    cy.intercept("GET", "**/recruitment/**").as("candidate");

    RecruitmentPage.search();

    cy.wait("@candidate");
  });

  it("TC03 Reset Recruitment", () => {
    RecruitmentPage.reset();
  });

  it("TC04 Add Candidate Page", () => {
    RecruitmentPage.addCandidate();

    cy.contains("Add Candidate");
  });

  it("TC05 Refresh Recruitment", () => {
    cy.reload();
  });

  it("TC06 Validasi Recruitment Menu", () => {
    cy.contains("Recruitment");
  });

  it("TC07 Validasi Add Button", () => {
    cy.contains("Add");
  });

  it("TC08 Validasi Search Button", () => {
    cy.contains("Search");
  });
});
