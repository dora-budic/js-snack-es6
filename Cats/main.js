// MILESTONE 1
// Creare un array di oggetti
const cats = [
  {
    name: 'Duchess',
    age: 12,
    color: 'white',
    sex: 'Female'
  },
  {
    name: "Thomas O'Malley",
    age: 16,
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
// cats.forEach((item) => {
//   $('#cats').append(`<li>${item.name} has ${item.color} fur.</li>`);
// });


// MILESTONE 2
// Aggiungere a fianco un fiocco colorato
cats.forEach((item) => {
  let color;
  if (item.sex == 'Male') {
    color = 'blue';
  } else {
    color = 'pink';
  }
  $('#cats').append(`<li class="${color}">${item.name} has ${item.color} fur.<i class="fas fa-ribbon"></i></li>`);
});

// Dividere gli oggetti in 2 array in base al sesso
const male = cats.filter((item) => item.sex == 'Male');
const female = cats.filter((item) => item.sex == 'Female');


// Aggiungere opacity ad ogni oggetto
male.forEach((item,index) => {
  if (item.age < 10) {
    item['opacity'] = item.age / 10;
  } else if (item.age > 10 && item.age < 15) {
    item['opacity'] = 0.95;
  } else {
    item['opacity'] = 1;
  }

  $('#male').append(`<li class="blue">${item.name}<i class="fas fa-ribbon"></i></li>`);

  // Cambio il colore del fiocco in base all'opacity
  let listElement = $('#male li');
  listElement.children('i').eq(index).css('opacity', item.opacity);
});

console.log(male);

female.forEach((item, index) => {
  if (item.age < 10) {
    item['opacity'] = item.age / 10;
  } else if (item.age > 10 && item.age < 15) {
    item['opacity'] = 0.95;
  } else {
    item['opacity'] = 1;
  }

  $('#female').append(`<li class="pink">${item.name}<i class="fas fa-ribbon"></i></li>`);

  let listElement = $('#female li');
  listElement.children('i').eq(index).css('opacity', item.opacity);
});

console.log(female);

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
