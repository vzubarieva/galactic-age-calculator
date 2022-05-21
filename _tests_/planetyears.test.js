import PlanetYears from "../src/js/planetyears.js";

describe("PlanerYears", () => {
  test("should correctly create a planetYears object with age", () => {
    const planetYears = new PlanetYears(15);
    expect(planetYears.age).toEqual(15);
  });

  test("should correctly determine the age on Mercury", () => {
    const planetYears = new PlanetYears(15);
    expect(planetYears.getMercuryAge()).toEqual(3.5999999999999996);
  });

  test("should correctly determine the age on Venus", () => {
    const planetYears = new PlanetYears(15);
    expect(planetYears.getVenusAge()).toEqual(9.3);
  });

  test("should correctly determine the age on Mars", () => {
    const planetYears = new PlanetYears(15);
    expect(planetYears.getMarsAge()).toEqual(28.2);
  });

  test("should correctly determine the age on Jupiter", () => {
    const planetYears = new PlanetYears(15);
    expect(planetYears.getJupiterAge()).toEqual(177.89999999999998);
  });

});