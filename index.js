const cisla = [7, 1, 4, 5, 2, 9, 3, 6, 8];
const zvirata = [
  'pes',
  'kočka',
  'králík',
  'had',
  'andulka',
  'morče',
  'krkavec',
];
const napoje = [
  { nazev: 'Pivo', cena: 12, skladem: true },
  { nazev: 'Rum', cena: 120, skladem: false },
  { nazev: 'Víno', cena: 85, skladem: true },
  { nazev: 'Whisky', cena: 450, skladem: true },
  { nazev: 'Vodka', cena: 280, skladem: false },
  { nazev: 'Becherovka', cena: 210, skladem: true },
  { nazev: 'Kofola', cena: 40, skladem: true },
  { nazev: 'Voda', cena: 15, skladem: false },
];

const mapingNumbers = cisla.map((cislo) => {
  return cislo * 2;
});

console.log(mapingNumbers);

const mapingAnimals = zvirata.map((zvire) => {
  return zvire.length;
});

console.log(mapingAnimals);

const mapingDrink = napoje.map((napoj) => {
  return napoj.nazev;
});

console.log(mapingDrink);

const mapingDrink2 = napoje.map((napoj) => {
  if (napoj.skladem === true) {
    return napoj.nazev;
  } else {
    return 'Není skladem';
  }
});

console.log(mapingDrink2);
