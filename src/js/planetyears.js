export default class PlanetYears {
  constructor(age) {
    this.age = age;
  }

  getMercuryAge() {
    return this.age * 0.24;
  }

  getVenusAge() {
    return this.age * 0.62;
  }

  getMarsAge() {

  }
}
