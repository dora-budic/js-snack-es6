const teams = [
  {
    name: 'Inter',
    points: 0,
    fouls: 0
  },
  {
    name: 'Juventus',
    points: 0,
    fouls: 0
  },
  {
    name: 'Atalanta',
    points: 0,
    fouls: 0
  }
];

for (let i = 0; i < teams.length; i++) {
  teams[i].points = randomNumber(0,100);
  teams[i].fouls = randomNumber(0,100);
}

console.log(teams);

const newTeams = [];

for (let i = 0; i < teams.length; i++) {
  let {name, fouls} = teams[i];
  newTeams.push(
    {
      name,
      fouls
    }
  );
}

console.log(newTeams);


// FUNCTIONS
function randomNumber(min,max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Not a number");
  } else {
    var genNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return genNumber;
  }
}
