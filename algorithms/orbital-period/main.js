function calculation(altitude) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const semiMajorAxis = altitude + earthRadius;

  return (Math.round(2 * Math.PI * 
    Math.sqrt(Math.pow(semiMajorAxis, 3) / GM)
  ));
}

function orbitalPeriod(arr) {
  for (let obj of arr) {
    obj.orbitalPeriod = obj.avgAlt;
    obj.orbitalPeriod = calculation(obj.avgAlt);
    delete obj.avgAlt;
  }
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])