window.addEventListener("load", function() {
  const form = this.document.querySelector("form");

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

  //    console.log(planetName);
  //    console.log(planetDiameter);
  //    console.log(planetStar);
  //    console.log(planetDist);
  //    console.log(planetMoons);
  //    console.log(planetImg);

     addDestinationInfo(this.document, planetName, planetDiameter, planetStar, planetDist, planetMoons, planetImg);

 });

 form.addEventListener("submit", event => {
      event.preventDefault();
      
      const pilot = this.document.getElementById("pilotName").value;
      const copilot = this.document.getElementById("copilotName").value;
      const fuelLevel = this.document.getElementById("fuelLevel").value;
      const cargoMass = this.document.getElementById("cargoMass").value;
      const faultyItems = this.document.getElementById("faultyItems");
      
       formSubmission(this.document, faultyItems, pilot, copilot, fuelLevel, cargoMass);
       
  });
 
});