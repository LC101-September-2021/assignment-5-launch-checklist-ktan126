window.addEventListener("load", function() {
  const form = document.querySelector("form");

 let listedPlanets;
 // Set listedPlanetsResponse equal to the value returned by calling myFetch()
 let listedPlanetsResponse = myFetch();

 listedPlanetsResponse.then(function (result) {
     listedPlanets = result;
     //console.log(listedPlanets);

 }).then(function () {
     console.log(listedPlanets);
     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
     let selectedPlanet = pickPlanet(listedPlanets);
  //    console.log(selectedPlanet);
  //    console.log(selectedPlanet.name);

     const planetName = selectedPlanet.name;
     const planetDiameter = selectedPlanet.diameter;
     const planetStar = selectedPlanet.star;
     const planetDist = selectedPlanet.distance;
     const planetMoons = selectedPlanet.moons;
     const planetImg = selectedPlanet.image;


     addDestinationInfo(this.document, planetName, planetDiameter, planetStar, planetDist, planetMoons, planetImg);

 });

 form.addEventListener("submit", event => {
      event.preventDefault();
      
      const pilot = document.getElementById("pilotName").value;
      // const copilot = document.getElementById("copilotName").value;
      const copilot = document.querySelector("input[name=copilotName]").value;
      const fuelLevel = document.getElementById("fuelLevel").value;
      const cargoMass = document.getElementById("cargoMass").value;
      const faultyItems = document.getElementById("faultyItems");

      
       formSubmission(document, faultyItems, pilot, copilot, fuelLevel, cargoMass);
       
  });
 
});