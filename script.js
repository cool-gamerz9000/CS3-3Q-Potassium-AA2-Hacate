var Po=initialpopulation;
var r=rateofgrowth;
var t=timeinhours;
function Population(r) {
    return parseFloat(r)*Po*e*r*t*Math.PI;
  }
document.Population('m-m-1').innerHTML = Math.round(r);