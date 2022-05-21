import PlanetYears from "../src/js/planetyears.js";

describe("PlanerYears", () => {
  test("should correctly create a planetYears object", () => {
    const planetYears = new PlanetYears(15);
    expect(planetYears.age).toEqual(15);
  });

});