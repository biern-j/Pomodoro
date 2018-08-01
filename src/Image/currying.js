//import _ from 'lodash'
// const dragons = [
//     {name: "jefray", type: "small"},
//     {name: "boy", type: "small"},
//     {name: "bory", type: "big"},
//     {name: "boyt", type: "small"},
//     {name: "boye", type: "big"},
//     {name: "boyy", type: "small"}
// ];
//
// const filterDragons = (element) => (obj) => obj.type === element;
//
// const smallDragons = dragons.filter(filterDragons("small"));
// console.log('małe smoki', smallDragons);


// const dragons = (name, size, element) =>
//     name + 'is a' +
//     size + 'size, and' +
//     element + '!';
//
// dragons =_.curry(dragons);
//
// const dragonName = dragons("Bob");
// const dragonSize = dragonName("big");
// const dragonEl = dragonSize("boy");
//
// console.log("mój smok", dragonEl);

// T: (item) => liczba

const number = [1,2,3]; // 2,4,6

const mul = (a) => (b) => a * b;
const mulNumbers = [2,3,4,5,6];

const superList = mulNumbers.map(n => number.map(mul(n)));

console.log('super list', superList);
// console.log('mul', mul(4, 5));