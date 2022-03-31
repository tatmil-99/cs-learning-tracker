function calculation(semiMajorAxis, GM) {
  return (Math.round(2 * Math.PI * 
    Math.sqrt(Math.pow(semiMajorAxis, 3) / GM)
  ));
}

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const altitude = arr[0].avgAlt;
  const semiMajorAxis = altitude + earthRadius;

  console.log(calculation(semiMajorAxis, GM));
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);