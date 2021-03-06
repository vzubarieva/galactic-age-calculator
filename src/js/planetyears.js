export default class PlanetYears {
  constructor(age, averageLifeExpectancy) {
    this.age = age;
    this.averageLifeExpectancy = averageLifeExpectancy;
  }

  getMercuryAge() {
    return this.age * 0.24;
  }

  getVenusAge() {
    return this.age * 0.62;
  }

  getMarsAge() {
    return this.age * 1.88;
  }

  getJupiterAge() {
    return this.age * 11.86;
  }

  getMercuryYearsToLive() {
    return Math.abs((this.averageLifeExpectancy - this.age) * 0.24);
  }

  getVenusYearsToLive() {
    return Math.abs((this.averageLifeExpectancy - this.age) * 0.62);
  }

  getMarsYearsToLive() {
    return Math.abs((this.averageLifeExpectancy - this.age) * 1.88);
  }

  getJupiterYearsToLive() {
    return Math.abs((this.averageLifeExpectancy - this.age) * 11.86);
  }
}
