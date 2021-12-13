// Write your JavaScript code here!
document = window.document;
  let list = "";
  //this does not prompt anything


window.addEventListener("load", function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    let pilot = document.querySelector("input[name=pilotName]");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoLevel = document.querySelector("input[name=cargoMass]");
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel); {
    // alert("All fields required");
    // event.preventDefault();
    }
  });

  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

      // Pick random planet from json
      let index = pickPlanet(listedPlanets);
      // Plug in json object and random planet
      addDestinationInfo(
        document,
        listedPlanets[index].name,
        listedPlanets[index].diameter,
        listedPlanets[index].star,
        listedPlanets[index].distance,
        listedPlanets[index].moons,
        listedPlanets[index].image
      );
      console.log(listedPlanets[index], index);
    });
});