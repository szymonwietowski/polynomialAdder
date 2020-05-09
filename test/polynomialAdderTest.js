const assert = require('assert');
const path = require('path');

const polynomialAdder = require(path.resolve('./js/polynomialAdder.js'));
const Polynomial = require(path.resolve('./js/polynomial.js'));
const Term = require(path.resolve('./js/term.js'));

describe('polynomialAdder tests', () => {
    it('should add two polynomials', () => {
        let poly1 = new Polynomial(new Term(2, 3), new Term(2, 0), new Term(-2, 1), 
                                   new Term(0, 2), new Term(2, -3));
        let poly2 = new Polynomial(new Term(-3, 2), new Term(2, 3), new Term(2, -1), 
                                   new Term(2, -3), new Term(-4, 0));
        let expected = new Polynomial(new Term(4, 3), new Term(-3, 2), new Term(-2, 1), 
                                      new Term(-2, 0), new Term(2, -1), new Term(4, -3));
        let result = polynomialAdder(poly1, poly2);
        assert.deepEqual(result, expected);
    });
});