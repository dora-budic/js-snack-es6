const bikes = [
  {
    name: 'Bmx',
    weight: 3
  },
  {
    name: 'Graziella',
    weight: 5
  },
  {
    name: 'Mountain bike',
    weight: 2
  }
];

let lightBike = bikes[0];

for (let i = 1; i < bikes.length; i++) {
  if (bikes[i].weight < lightBike.weight) {
    lightBike = bikes[i];
  }
}

let {name,weight} = lightBike;

$('#result').text(`The bike that weights less is ${lightBike.name} and it weights ${weight}kg.`);
