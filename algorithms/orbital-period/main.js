function calculation(altitude) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const semiMajorAxis = altitude + earthRadius;
  
  return (Math.round(2 * Math.PI * 
    Math.sqrt(Math.pow(semiMajorAxis, 3) / GM)
  ));
}

function orbitalPeriod(arr) {
  const altitude = arr[0].avgAlt;
  const objOrbPeriod = calculation(altitude);
  console.log(objOrbPeriod); 
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);