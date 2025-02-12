function populationCalculation(){
  let initialPopulation = parseFloat(prompt("What is the initial population"));
  let rateOfGrowth = parseFloat(prompt("What is the rate of growth"));
  let timeInHours = parseFloat(prompt("What is the time in hours"));
  let populationCalculation = Math.round(initialPopulation*Math.pow(Math.E,(rateOfGrowth*timeInHours)));

  let region = prompt("What way of region").toUpperCase();
  let nameOfMonster = prompt("What name of monster").toUpperCase();


  document.getElementById("result").innerHTML = "After "+timeInHours+" hours, the population of "+region+" "+nameOfMonster+" has increased to "+populationCalculation+"!";
}
