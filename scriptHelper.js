require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    console.log(name);
   // Here is the HTML formatting for our mission target div.
   let missionTarget = document.getElementById("missionTarget");
   missionTarget.innerHTML = `
      <h2>Mission Destination</h2>
         <ol>
           <li>Name: ${name}</li>
           <li>Diameter: ${diameter}</li>
           <li>Star: ${star}</li>
           <li>Distance from Earth: ${distance}</li>
           <li>Number of Moons: ${moons}</li>
         </ol>
           <img src=${imageUrl}>`
   
};

function validateInput(testInput) {
   if (testInput === "") {
    return "Empty";
   } else if (isNaN(Number(testInput))) {
       return "Not a Number";
   } else {
       return "Is a Number";
   }
};

function formSubmission(document, faultyItems, pilot, copilot, fuelLevel, cargoMass) {
     let launchStatus = document.getElementById("launchStatus");
     let pilotGood, copilotGood, fuelGood, cargoGood;

    if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput (cargoMass) === "Empty") {
        window.alert("All fields required");
    };
    
    if (validateInput(pilot) === "Is a Number") {
        window.alert("Please enter a string value for pilot.")
    } else {
       let pilotStatus = document.getElementById("pilotStatus");
       pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`;
       pilotGood = true;
       //console.log(`Pilot ${pilot} is ready for launch.`);
       
    };

    if (validateInput(copilot) === "Is a Number") {
        window.alert("Please enter a string value for copilot.")
    } else {
        let copilotStatus = document.getElementById("copilotStatus");
        copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch.`;
        copilotGood = true;
        //console.log(`Copilot ${copilot} is ready for launch.`);
    };

    if (validateInput(fuelLevel) === "Not a Number") {
        window.alert("Please enter a numeric value for fuel level.")
    } else {
        let fuelStatus = document.getElementById("fuelStatus");
       if(fuelLevel < 10000) {
            faultyItems.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level too low to launch.";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
       } else {
            fuelStatus.innerHTML = "Fuel level sufficient to launch.";
            fuelGood = true;
       }
    };

    if (validateInput(cargoMass) === "Not a Number") {
        window.alert("Please enter a numeric value for cargo level.")
    } else {
    let cargoStatus = document.getElementById("cargoStatus");
       if(cargoMass > 10000) {
            faultyItems.style.visibility = "visible";
            cargoStatus.innerHTML = "Cargo mass too high to launch.";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
       } else {
            cargoStatus.innerHTML = "Cargo mass low enough to launch.";
            cargoGood = true;
       }
   }

   if(pilotGood && copilotGood && fuelGood && cargoGood) {
        launchStatus.innerHTML = "Shuttle Ready for Launch";
        launchStatus.style.color = "green";
        faultyItems.style.visibility = "hidden";
   }
};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });
    //console.log(planetsReturned);
    return planetsReturned;
};

function pickPlanet(planets) {
    let i = Math.floor(Math.random() * 6);
    console.log(i);
    return planets[i];
};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;