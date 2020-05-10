const path = require('path');

const Polynomial = require(path.resolve('./js/polynomial.js'));
const Term = require(path.resolve('./js/term.js'));

function addPolynomials(polynomial1, polynomial2) {

    let result = new Polynomial();
    result.add(polynomial1);
    result.add(polynomial2);
    return result;
}

function sayHello(a,b) {
    let aa = new Polynomial().fromString(a.value);
    let bb = new Polynomial().fromString(b.value);
}

let pol1 = new Polynomial(new Term(2,2), new Term(3,0));
let pol2 = new Polynomial();
pol2.addTerm(new Term(-3,3))
pol2.addTerm(new Term(-2,2))
console.log(addPolynomials(pol1, pol2).toString())
console.log(pol1.toString()) // 3
let pol3 = new Polynomial(new Term(4,0), new Term(-8,-2));
console.log(pol3.toString())
console.log(addPolynomials(pol1, pol3).toString())
console.log(new Term(-1,2).toString())

module.exports = addPolynomials;