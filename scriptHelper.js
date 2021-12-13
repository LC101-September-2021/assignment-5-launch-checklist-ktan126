// // Write your helper functions here!
// require("isomorphic-fetch");

// function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
//   const div = document.getElementById("missionTarget");
//   div.innerHTML = `
//         <h2>Mission Destination</h2>
//           <ul>
//             <li>Name: ${name}</li>
//             <li>Diameter: ${diameter}</li>
//             <li>Star: ${star}</li>
//             <li>Distance from Earth: ${distance}</li>
//             <li>Number of Moons: ${moons}</li>
//           </ul>
//             <img src="${imageUrl}"></img>
//         `;
// }

// function validateInput(testInput) {
//   if (testInput === Number) {
//     return "Is a Number";
//   } else if (isNaN(testInput) === true) {
//     return "Not a Number";
//   } else if (testInput === "") {
//     return "Empty";
//   }
// }

// function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
//   let fuelLow = fuelLevel.value < 10000;
//   let cargoHigh = cargoLevel.value > 10000;

//   if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoLevel.value === "") {
//         alert("All fields required!");
//         document.querySelector("faultyItems").style.visibility = "hidden";
//         event.preventDefault();
//   } else if (isNaN(fuel.value) || isNaN(cargo.value)) {
//         alert("Information invalid!");
//         document.querySelector("faultyItems").style.visibility = "hidden";
//         event.preventDefault();
//   } else {
//         document.getElementById("pilotStatus").style.visibility = "visible";
//         document.getElementById("copilotStatus").style.visibility = "visible";
//         document.getElementById("pilotStatus").innerHTML = `${pilotInput.value} is ready for launch.`;
//         document.getElementById("copilotStatus").innerHTML = `${copilotInput.value} is ready for launch.`;
//   } if (fuelLow) {
//         document.getElementById("fuelStatus").style.visibility = "visible";
//         document.getElementById("cargoStatus").style.visibility = "visible";
//         document.getElementById("fuelStatus").innerHTML = "Not enough fuel for launch!";
//         document.getElementById("fuelStatus").style.color = "red";
//         document.querySelector("h2").innerHTML = "Shuttle not ready for launch";
//         document.querySelector("h2").style.color = "red";
//   } if (cargoHigh) {
//         document.getElementById("cargoStatus").style.visibility = "visible";
//         document.getElementById("fuelStatus").style.visibility = "visible";
//         document.getElementById("cargoStatus").innerHTML = "Too much mass for take off!";
//         document.getElementById("cargoStatus").style.color = "red";
//         document.querySelector("h2").innerHTML = "Shuttle not ready for launch";
//         document.querySelector("h2").style.color = "red";
//   } if (!fuelLow && !cargoHigh) {
//         document.querySelector("h2").innerHTML = "Shuttle is ready for launch";
//         document.querySelector("h2").style.color = "green";
//         document.getElementById("cargoStatus").innerHTML = "Cargo weight low enough for launch";
//         document.getElementById("cargoStatus").style.color = "black";
//         document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
//         document.getElementById("fuelStatus").style.color = "black";
//   }
// }

// async function myFetch() {
//   let planetsReturned;

//   planetsReturned = await fetch(
//     "https://handlers.education.launchcode.org/static/planets.json"
//   );
//   planetsReturned = await planetsReturned.json();

//   return planetsReturned;
// }

// function pickPlanet(planets) {
//   return Math.floor(Math.random() * planets.length);
// }

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet;
// module.exports.myFetch = myFetch;


// Write your helper functions here!
require("isomorphic-fetch");
function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  let div = document.getElementById("missionTarget");
  div.innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">
    `;
}
function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  } else if (Number(isNaN(testInput))) {
    return "Not a Number";
  } else {
    return "Is a Number";
  }
}
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
  pilotStatus = document.getElementById("pilotStatus");
  copilotStatus = document.getElementById("copilotStatus");
  fuelStatus = document.getElementById("fuelStatus");
  cargoStatus = document.getElementById("cargoStatus");
  launchStatus = document.getElementById("launchStatus");
  if (
    validateInput(pilot) === "Empty" ||
    validateInput(copilot) === "Empty" ||
    validateInput(fuelLevel) === "Empty" ||
    validateInput(cargoMass) === "Empty"
  ) {
    alert("All fields are required!");
  } else if (
    validateInput(pilot) === "Is a Number" ||
    validateInput(copilot) === "Is a Number" ||
    validateInput(fuelLevel) === "Not a Number" ||
    validateInput(cargoMass) === "Not a Number"
  ) {
    alert("Make sure to enter valid information for each field!");
  } else {
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    list.style.visibility = "visible";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "rgb(199, 37, 78)";
    if (cargoMass > 10000 && fuelLevel < 10000) {
      cargoStatus.innerHTML = "Cargo mass too heavy for launch";
      fuelStatus.innerHTML = "Fuel level too low for launch";
    } else if (fuelLevel < 10000) {
      console.log("Fuel");
      fuelStatus.innerHTML = "Fuel level too low for launch";
    } else if (cargoMass > 10000) {
      console.log("cargoMass");
      cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    } else {
      console.log("else");
      launchStatus.innerHTML = "Shuttle is Ready for Launch";
      launchStatus.style.color = "rgb(65, 159, 106)";
    }
  }
}
async function myFetch() {
  let planetsReturned;
  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });
  return planetsReturned;
}
function pickPlanet(planets) {
  let chosenPlanet = Math.floor(Math.random() * planets.length);
  return planets[chosenPlanet];
}
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
