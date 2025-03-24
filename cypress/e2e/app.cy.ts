import { AirportInterface } from "@/lib/interfaces/Airports.interface";

describe("Home page", () => {
  beforeEach(() => {
    cy.viewport(1330, 800);
  });

  it("should show the loading component correctly", () => {
    cy.intercept("GET", "http://localhost:3000/api/airports?page=0").as(
      "airportsFetch"
    );

    cy.visit("http://localhost:3000/");

    cy.get("div[data-testid='loading-spinner']").should("exist");
    cy.wait("@airportsFetch");

    cy.get("div[data-testid='loading-spinner']").should("not.exist");
  });

  it("Should show the paginated airports correctly", () => {
    cy.intercept("GET", "http://localhost:3000/api/airports?page=0").as(
      "airportsFetch"
    );

    cy.visit("http://localhost:3000/");

    cy.wait("@airportsFetch").then((e) => {
      if (e.response?.body) {
        const paginatedAirports = e.response?.body.splice(0, 10);

        paginatedAirports.forEach((airport: AirportInterface) => {
          cy.get(`div[data-testid='airport-card-${airport.iata_code}']`).should(
            "exist"
          );
        });
      }
    });
  });

  it("Should show the filtered airports correctly when a search is applied", () => {
    cy.intercept("GET", "http://localhost:3000/api/airports?page=0").as(
      "airportsFetch"
    );

    const termToSearch = "ARA";

    cy.visit("http://localhost:3000/");

    cy.wait("@airportsFetch").then((e) => {
      if (e.response?.body) {
        const input = cy.get("[data-testid='search-input']");

        input.type(termToSearch);

        const filteredAirports = e.response?.body.filter(
          (airport: AirportInterface) =>
            airport.iata_code
              .toLowerCase()
              .startsWith(termToSearch.toLowerCase()) ||
            airport.airport_name
              .toLowerCase()
              .includes(termToSearch.toLowerCase())
        );

        cy.get("[data-testid='search-button']").click();

        if (filteredAirports.length > 0) {
          filteredAirports.forEach((airport: AirportInterface) => {
            cy.get(
              `div[data-testid='airport-card-${airport.iata_code}']`
            ).should("exist");
          });
        }
      }
    });
  });

  it("Should show the text to go back if the result is empty and clean the filter", () => {
    cy.intercept("GET", "http://localhost:3000/api/airports?page=0").as(
      "airportsFetch"
    );

    const termToSearch = "TERM THAT DOES NOT EXIST";

    cy.visit("http://localhost:3000/");

    cy.wait("@airportsFetch").then((e) => {
      if (e.response?.body) {
        const input = cy.get("[data-testid='search-input']");

        input.type(termToSearch);

        const filteredAirports = e.response?.body.filter(
          (airport: AirportInterface) =>
            airport.iata_code
              .toLowerCase()
              .startsWith(termToSearch.toLowerCase()) ||
            airport.airport_name
              .toLowerCase()
              .includes(termToSearch.toLowerCase())
        );

        cy.get("[data-testid='search-button']").click();

        if (filteredAirports.length === 0) {
          cy.get("[data-testid='refresh-airports-component']").should("exist");
          cy.get("[data-testid='refresh-airports-button']").click();
          const paginatedAirports = e.response?.body.splice(0, 10);

          paginatedAirports.forEach((airport: AirportInterface) => {
            cy.get(
              `div[data-testid='airport-card-${airport.iata_code}']`
            ).should("exist");
          });
        }
      }
    });
  });
});

describe("Airport detail page", () => {
  beforeEach(() => {
    cy.viewport(1330, 800);
  });
  it("should show the loading component correctly", () => {
    cy.intercept("GET", "http://localhost:3000/api/airports?page=0").as(
      "airportsFetch"
    );

    cy.visit("http://localhost:3000/");

    cy.wait("@airportsFetch").then((e) => {
      if (e.response?.body) {
        const randomAirport: AirportInterface =
          e.response?.body[Math.floor(Math.random() * 10)];

        cy.get(
          `div[data-testid='airport-card-${randomAirport.iata_code}']`
        ).click();

        cy.url().should("include", `/airport/${randomAirport.id}`);

        cy.get("p").contains(randomAirport.airport_name).should("exist");
        cy.get("p").contains(randomAirport.city_iata_code).should("exist");
        cy.get("p")
          .contains(randomAirport.country_name ?? "No disponible")
          .should("exist");
        cy.get("p")
          .contains(randomAirport.phone_number ?? "No disponible")
          .should("exist");
      }
    });
  });
});
