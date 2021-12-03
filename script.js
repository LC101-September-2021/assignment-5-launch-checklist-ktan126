const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

// Write your JavaScript code here!
let list = "";
let pilot = document.querySelector("input[name=pilotName]");
let copilot = document.querySelector("input[name=copilotName]");
let fuelLevel = document.querySelector("input[name=fuelLevel]");
let cargoLevel = document.querySelector("input[name=cargoMass]");

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        alert("All fields required");
        event.preventDefault()
    }
    ) 

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

       let index = pickPlanet(listedPlanets);
       addDestinationInfo(document, listedPlanets[index].name, listedPlanets[index].diameter, listedPlanets[index].star, listedPlanets[index].distance, listedPlanets[index].image, listedPlanets[index].moons);
       console.log(listedPlanets[index], index);
   })
   
});