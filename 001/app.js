console.log('Labutis');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const cats = [
    {name: 'Pilkis', weight: 4},
    {name: 'Murka', weight: 7},
    {name: 'Keris', weight: 3}
];

// console.log(rand(5, 10));

const mas = [...Array(5)].map(_ => rand(100, 999));

console.log(mas);

const fe = mas.forEach(e => 1);
const map = mas.map(e => e + 1);

console.log(fe);
console.log(map);

// const a = [4, 8, 7];

// const naujasA = {...a};

// const tasPatA = a;

// naujasA.push(99);
// tasPatA.push(77);
// a.push(77);

// console.log('A', a);
// console.log(naujasA);
// console.log(tasPatA);

const cats2 = cats.map(c =>  ({...c, weight: c.weight + 1})  );

const cats3 = cats.map(c =>  ({...c, weight: rand(3, 10)})  );

const cats4 = cats.map(c =>  ({...c, takesPill: rand(0, 1) ? 'yes' : 'no'}) );

// const weight = [...cats].map(mass => mass.weight + 1)

// console.log(cats);
console.log(cats4);