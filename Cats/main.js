// Milestone 1
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
