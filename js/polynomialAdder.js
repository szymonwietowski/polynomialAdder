const path = require('path');

const Polynomial = require(path.resolve('./js/polynomial.js'));
const Term = require(path.resolve('./js/term.js'));

function addPolynomials(polynomial1, polynomial2) {

    let result = new Polynomial();
    result.add(polynomial1);
    result.add(polynomial2);
    return result;
}

// Change parameters to test
let poly1 = new Polynomial(new Term(2,2), new Term(3,0));
let poly2 = new Polynomial(new Term(3,3), new Term(1,2));
console.log(addPolynomials(poly1, poly2).toString())
// End test

module.exports = addPolynomials;