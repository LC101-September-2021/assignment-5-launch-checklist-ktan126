// Write your helper functions here!
require("isomorphic-fetch");

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  const div = document.getElementById("missionTarget");
  div.innerHTML = `\
        <h2>Mission Destination</h2>
          <ul>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
          </ul>
            <img src="${imageUrl}"></img>
        `;
}

function validateInput(testInput) {
  if (testInput === Number) {
    return "Is a Number";
  } else if (isNaN(testInput) === true) {
    return "Not a Number";
  } else if (testInput === "") {
    return "Empty";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let fuelLow = fuelLevel.value < 10000 ? true : false;
  let cargoHigh = cargoMass.value > 10000 ? true : false;

  if (
    pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoLevel.value === "") {
        alert("All fields required!");
        document.querySelector("faultyItems").style.visibility = "hidden";
        event.preventDefault();
  } else if (isNaN(fuel.value) || isNaN(cargo.value)) {
        alert("Information invalid!");
        document.querySelector("faultyItems").style.visibility = "hidden";
        event.preventDefault();
  } else {
        document.getElementById("pilotStatus").style.visibility = "visible";
        document.getElementById("copilotStatus").style.visibility = "visible";
        document.getElementById("pilotStatus").innerHTML = `${pilotInput.value} is ready for launch.`;
        document.getElementById("copilotStatus").innerHTML = `${copilotInput.value} is ready for launch.`;
  }
  if (fuelLow) {
        document.getElementById("fuelStatus").style.visibility = "visible";
        document.getElementById("cargoStatus").style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML = "Not enough fuel for launch!";
        document.getElementById("fuelStatus").style.color = "red";
        document.querySelector("h2").innerHTML = "Shuttle not ready for launch";
        document.querySelector("h2").style.color = "red";
  }
  if (cargoHigh) {
        document.getElementById("cargoStatus").style.visibility = "visible";
        document.getElementById("fuelStatus").style.visibility = "visible";
        document.getElementById("cargoStatus").innerHTML = "Too much mass for take off!";
        document.getElementById("cargoStatus").style.color = "red";
        document.querySelector("h2").innerHTML = "Shuttle not ready for launch";
        document.querySelector("h2").style.color = "red";
  }
  if (!fuelLow && !cargoHigh) {
        document.querySelector("h2").innerHTML = "Shuttle is ready for launch";
        document.querySelector("h2").style.color = "green";
        document.getElementById("cargoStatus").innerHTML = "Cargo weight low enough for launch";
        document.getElementById("cargoStatus").style.color = "black";
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
        document.getElementById("fuelStatus").style.color = "black";
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  );
  planetsReturned = await planetsReturned.json();

  return planetsReturned;
}

function pickPlanet(planets) {
  return Math.floor(Math.random() * planets.length);
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;