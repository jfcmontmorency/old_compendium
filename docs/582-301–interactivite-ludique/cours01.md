# Cours 1 - Bienvenue!

## Ordre du jour 🍎

1. Présentations
1. [🧠 Quiz ABCDEF](https://google.com)
1. Révision des notions acquises en JavaScript et retour sur le cours « 420 V11 MO – Programmation interactive »
1. Matière
1. Devoir

## Révision JavaScript

### La base de la base

```js
// Voici un beau commentaire!
/* En voilà un deuxième 🙀 */
console.log("L’enfer, c’est les autres. - Jean-Paul Sartre (Huis Clos)");
```

### Variables

```js
let name = 'JF';
const age = 99;
var isStudent = false;
```

```js
let num = 10;       // Nombre (number)
let str = 'Salut!'; // Chaine de caractères (string)
let isTrue = true;  // Booléen (boolean)
let empty = null;   // Nul (null)
let notDefined;     // Non défini (undefined)
```

### Opérateurs

```js
let sum = 10 + 5;
let difference = 10 - 5;
let product = 10 * 5;
let quotient = 10 / 5;
let remainder = 10 % 3;
```

```js
let isEqual = 5 == '5';           // vrai
let isStrictEqual = 5 === '5';    // faux
let isNotEqual = 5 != '5';        // faux
let isStrictNotEqual = 5 !== '5'; // vrai
let isGreater = 10 5;           // vrai
let isLess = 10 < 5;              // faux
let isGreaterOrEqual = 10 >= 5;   // vrai
let isLessOrEqual = 10 <= 5;      // faux
```

```js
let andOperator = true && false;  // faux
let orOperator = true || false;   // vrai
let notOperator = !true;          // faux
```

### Conditions

```js
let score = 85;

let grade = 'C';
if (score >= 90) {
  grade = 'A';
} else if (score >= 80) {
  grade = 'B';
}

console.log(score);
```

!!! tip "Opérateur ternaire"
    let grade = (score >= 90) ? 'A' : (score >= 80) ? 'B' : 'C';

### Boucles

```js
for (let i = 0; i < 100000; i++) {
  console.log(i + ' $');
}
```
```js
let person = {name: 'JF', age: 99, city: 'Laval'};
for (let key in person) {
  console.log(key + ' : ' + person[key]);
}
```
```js
let fruits = ['apple', 'banana', 'cherry'];
for (let fruit of fruits) {
  console.log(fruit);
}
```
```js
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number);
});
```
```js
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(function(number) {
  return number * 2;
});
```

### Fonctions (function)
### Tableaux et objets ([], {})
### DOM (getElementById, innerHTML, etc.)
### Événements (ex: addEventListener)
### Programmation Asynchrone (promises, async, await, callback)
### Réusinage

## Matière

## Devoir
