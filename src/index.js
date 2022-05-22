import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import PlanetYears from './js/planetyears.js';

$(function () {
  $('form').on("submit", function (event) {
    event.preventDefault();

    // get input values
    const age = parseInt($('#userAge').val());
    const lifeExpectancy = parseInt($('#lifeExpectancy').val());
    const planetName = $("input[name=planetName]:checked").val();

    // validate input values
    if (!age || !lifeExpectancy) {
      $("#response").html("");
      $('#response').append(`<li class="text-danger">Please enter your age and life expectancy</li>`);
      return;
    }

    let planetYears = new PlanetYears(age, lifeExpectancy);
    let planetAge = 0;
    let yearsToLive = 0;
    if (planetName === "Mercury") {
      planetAge = planetYears.getMercuryAge();
      yearsToLive = planetYears.getMercuryYearsToLive();
    } else if (planetName === "Venus") {
      planetAge = planetYears.getVenusAge();
      yearsToLive = planetYears.getVenusYearsToLive();
    } else if (planetName === "Mars") {
      planetAge = planetYears.getMarsAge();
      yearsToLive = planetYears.getMarsYearsToLive();
    } else {
      planetAge = planetYears.getJupiterAge();
      yearsToLive = planetYears.getJupiterYearsToLive();
    }
    $("#response").html("");
    $('#response').append(`<li>Your ${planetName} age is ${planetAge}</li>`);
    if (lifeExpectancy >= age) {
      $("#response").append(`<li>And you will live <b>${yearsToLive}</b> more years!</li>`);
      $("#response").append(`<div class="progress">
        <div class="progress-bar" role="progressbar" style="width: ${age / lifeExpectancy * 100}%" aria-valuenow="${age}" aria-valuemin="0" aria-valuemax="${lifeExpectancy}"></div>
      </div>`);
    } else {
      $("#response").append(`<li>And you have lived <b>${yearsToLive}</b> years past your life expectancy!</li>`);
      $("#response").append(`<div class="progress">
        <div class="progress-bar" role="progressbar" style="width: ${lifeExpectancy / age * 100}%" aria-valuenow="${age}" aria-valuemin="0" aria-valuemax="${age}"></div>
        <div class="progress-bar bg-success" role="progressbar" style="width: ${(age - lifeExpectancy) / age * 100}%" aria-valuenow="${age - lifeExpectancy}" aria-valuemin="0" aria-valuemax="${age}"></div>
      </div>`);
    }
  });
});

