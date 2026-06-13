describe("Platzi API Testing", () => {
  it("TC01 Get All Categories", () => {
    cy.request("https://api.escuelajs.co/api/v1/categories").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.length).to.be.greaterThan(0);
    });
  });

  it("TC02 Get Category ID 1", () => {
    cy.request("https://api.escuelajs.co/api/v1/categories/1").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(1);
    });
  });

  it("TC03 Get Category ID 2", () => {
    cy.request("https://api.escuelajs.co/api/v1/categories/2").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(2);
    });
  });

  it("TC04 Get Category ID 3", () => {
    cy.request("https://api.escuelajs.co/api/v1/categories/3").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(3);
    });
  });

  it("TC05 Get Products", () => {
    cy.request("https://api.escuelajs.co/api/v1/products").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.length).to.be.greaterThan(0);
    });
  });

  it("TC06 Get Categories Again", () => {
    cy.request("https://api.escuelajs.co/api/v1/categories").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.length).to.be.greaterThan(0);
    });
  });

  it("TC07 Get Users", () => {
    cy.request("https://api.escuelajs.co/api/v1/users").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.length).to.be.greaterThan(0);
    });
  });

  it("TC08 Get Products List", () => {
    cy.request("https://api.escuelajs.co/api/v1/products").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.length).to.be.greaterThan(0);
    });
  });

  it("TC09 Limit Products", () => {
    cy.request("https://api.escuelajs.co/api/v1/products?offset=0&limit=5").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.length).to.eq(5);
    });
  });

  it("TC10 Get Users", () => {
    cy.request("https://api.escuelajs.co/api/v1/users").then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("TC11 Get User ID 1", () => {
    cy.request("https://api.escuelajs.co/api/v1/users/1").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(1);
    });
  });

  it("TC12 Get User ID 2", () => {
    cy.request("https://api.escuelajs.co/api/v1/users/2").then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
