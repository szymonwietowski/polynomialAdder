const path = require('path');

const Polynomial = require(path.resolve('./js/polynomial.js'));
const Term = require(path.resolve('./js/term.js'));

function addPolynomials(polynomial1, polynomial2) {

    let result = new Polynomial();
    result.add(polynomial1);
    result.add(polynomial2);
    return result;
}

function addPolynomialsFromInput(input1, input2) {
    let poly1 = new Polynomial().fromString(input1.value);
    let poly2 = new Polynomial().fromString(input2.value);

    document.getElementById('result').innerHTML = addPolynomials(poly1, poly2).toString();
}

module.exports = addPolynomials;