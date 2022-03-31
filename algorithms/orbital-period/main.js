function calculation(altitude) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let semiMajorAxis = altitude + earthRadius;

  return (Math.round(2 * Math.PI * 
    Math.sqrt(Math.pow(semiMajorAxis, 3) / GM)
  ));
}

function orbitalPeriod(arr) {
  let altitude = arr[0].avgAlt;
  let objOrbPeriod = calculation(altitude);

  const transform = arr.map(obj => {
    return {
      name : obj.name,
      orbitalPeriod : obj.avgAlt = objOrbPeriod,
    };
  });
  console.log(transform)
  return transform;
}

//orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])