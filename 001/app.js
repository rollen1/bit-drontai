function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const cats = [
    {name: 'Kerry', weight: 4},
    {name: 'Johnny', weight: 7},
    {name: 'Judy', weight: 3}
];

const cats2 = cats.map(c => ({...c, weight: c.weight + 1}));

const weight = [...cats].map(mass => mass.weight + 1);

console.log(cats2);

console.log(weight);

// console.log(rand(5, 10));

const mas = [...Array(5)].map(_ => rand(100, 999));

console.log(mas);

// console.log(...Array(10));

const fe = mas.forEach(e => 1);
const map = mas.map(e => e + 1);

console.log(fe);
console.log(map);

// const a = [4, 8, 7];

// const naujasA = [...a];

// const tasPatA = a;

// naujasA.push(77);
// tasPatA.push(77);

// console.log('A', a);
// console.log(naujasA);
// console.log(tasPatA);