// MILESTONE 1
// Creare un array di oggetti
const cats = [
  {
    name: 'Duchess',
    age: 10,
    color: 'white',
    sex: 'Female'
  },
  {
    name: "Thomas O'Malley",
    age: 12,
    color: 'brown',
    sex: 'Male'
  },
  {
    name: 'Toulouse ',
    age: 4,
    color: 'brown',
    sex: 'Male'
  },
  {
    name: 'Marie ',
    age: 3,
    color: 'white',
    sex: 'Female'
  },
  {
    name: 'Berlioz ',
    age: 2,
    color: 'black',
    sex: 'Male'
  }
];

// Stampare gli oggetti - colore, nome
cats.forEach((item) => {
  $('#cats').append(`<li>${item.name} has ${item.color} fur.</li>`)
});

// MILESTONE 2
// Dividere gli oggetti in 2 array in base al sesso, aggiungere a fianco un fiocco colorato
const male = cats.filter((item) => item.sex == 'Male');
const female = cats.filter((item) => item.sex == 'Female');

male.forEach((item) => {
  if (item.age < 10) {
    item['opacity'] = item.age / 10;
  } else {
    item['opacity'] = 1;
  }
  $('#male').append(`<li>${item.name}<i class="fas fa-ribbon"></i></li>`);
});

female.forEach((item) => {
  if (item.age < 10) {
    item['opacity'] = item.age / 10;
  } else {
    item['opacity'] = 1;
  }
  $('#female').append(`<li>${item.name}<i class="fas fa-ribbon"></i></li>`)
});

// MILESTONE 3
// Creo array con prima i gatti femmina e poi i gatti maschio
const allCats = [...female,...male];

// Nel nuovo array inserisco solo nome, colore e opacity
const newCats = allCats.map((element) => {
  let {name, color, opacity} = element;
  let obj = {
    name,
    color,
    opacity
  }
  return obj;
});

console.log(newCats);
