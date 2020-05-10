const assert = require('assert');
const path = require('path');

const Polynomial = require(path.resolve('./js/polynomial.js'));
const Term = require(path.resolve('./js/term.js'));

describe('Polynomial tests', () => {
    describe('constructor', () => {
        it('should return new empty object', () => {
            let polynomial = new Polynomial();
            assert.equal(polynomial.terms.size, 0);
        });

        it('should return new object with terms', () => {
            let polynomial = new Polynomial(new Term(2, 3), new Term(3, 1));
            assert.equal(polynomial.terms.size, 2);
            assert.ok(polynomial.terms.has(3));
            assert.ok(polynomial.terms.has(1));
        });
    });

    describe('addTerm method', () => {
        it('should add term to polynomial', () => {
            let poly = new Polynomial(new Term(2, 3), new Term(3, 1));
            let term = new Term(-4, 1);
            poly.addTerm(term);
            let expected = new Polynomial(new Term(2, 3), new Term(-1, 1));
            assert.deepEqual(poly, expected);
        });

        it('should add term to polynomial', () => {
            let poly = new Polynomial(new Term(2, 3), new Term(3, 1));
            let term = new Term(7, 2);
            poly.addTerm(term);
            let expected = new Polynomial(new Term(2, 3), new Term(7, 2), new Term(3, 1));
            assert.deepEqual(poly, expected);
        });
    }); 

    describe('add method', () => {
        it('should add another polynomial to existing', () => {
            let poly1 = new Polynomial(new Term(2, 3));
            let poly2 = new Polynomial(new Term(3, 1));
            let expected = new Polynomial(new Term(2, 3), new Term(3, 1));
            poly1.add(poly2);
            assert.deepEqual(poly1, expected);
        });

        it('should add another polynomial to existing', () => {
            let poly1 = new Polynomial(new Term(0, 3), new Term(2, -2));
            let poly2 = new Polynomial(new Term(-2, 3), new Term(1, 0));
            let expected = new Polynomial(new Term(-2, 3), new Term(2, -2), new Term(1, 0));
            poly1.add(poly2);
            assert.deepEqual(poly1, expected);
        });

        it('should add another polynomial to existing', () => {
            let poly1 = new Polynomial(new Term(-3, 3), new Term(-4, -2), new Term(3, 0));
            let poly2 = new Polynomial(new Term(2, 1), new Term(-2, 0));
            let expected = new Polynomial(new Term(-3, 3), new Term(-4, -2), new Term(1, 0), new Term(2, 1));
            poly1.add(poly2);
            assert.deepEqual(poly1, expected);
        });
    });

    describe('toString method', () => {
        it('should return "2x<sup>3</sup> + 3x"', () => {
            let poly = new Polynomial(new Term(2, 3), new Term(3, 1));
            assert.equal(poly.toString(), '2x<sup>3</sup> + 3x');
        });

        it('should return "-3x<sup>4</sup> + 2x<sup>-3</sup>"', () => {
            let poly = new Polynomial(new Term(2, -3), new Term(-3, 4));
            assert.equal(poly.toString(), '-3x<sup>4</sup> + 2x<sup>-3</sup>');
        });

        it('should return "-3 + 2x<sup>-1</sup>"', () => {
            let poly = new Polynomial(new Term(0, 3), new Term(2, -1), new Term(-3, 0));
            assert.equal(poly.toString(), '-3 + 2x<sup>-1</sup>');
        });

        it('should return "-3x<sup>3</sup> + 2x<sup>1</sup> + 1 - 4x<sup>-2</sup>"', () => {
            let poly = new Polynomial(new Term(-3, 3), new Term(-4, -2), new Term(1, 0), new Term(2, 1));
            assert.equal(poly.toString(), '-3x<sup>3</sup> + 2x + 1 - 4x<sup>-2</sup>');
        });
    });
});