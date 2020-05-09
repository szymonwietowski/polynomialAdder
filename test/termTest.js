const assert = require('assert');
const path = require('path');

const Term = require(path.resolve('./js/term.js'));

describe('Term tests', () => {
    describe('constructor', () => {
        it('should return new object with positive values', () => {
            let term = new Term(2, 5);
            assert.equal(term.coefficient, 2);
            assert.equal(term.exponent, 5);
        });

        it('should return new object with negative values', () => {
            let term = new Term(-2, -5);
            assert.equal(term.coefficient, -2);
            assert.equal(term.exponent, -5);
        });
    });

    describe('add method', () => {
        it('should increment coefficient in first one and not change in second one', () => {
            let term1 = new Term(2, 5);
            let term2 = new Term(3, 5);
            term1.add(term2);
            assert.equal(term1.coefficient, 5);
            assert.equal(term2.coefficient, 3);
        });

        it('should increment coefficient in first one and not change in second one', () => {
            let term1 = new Term(2, 5);
            let term2 = new Term(-3, 5);
            term1.add(term2);
            assert.equal(term1.coefficient, -1);
            assert.equal(term2.coefficient, -3);
        });

        it('should not increment coefficient if terms have different exponents', () => {
            let term1 = new Term(2, 4);
            let term2 = new Term(3, 5);
            term1.add(term2);
            assert.equal(term1.coefficient, 2);
        });        
    });

    describe('toString method', () => {
        it('should return "+ 2x<sup>2</sup> "', () => {
            let term = new Term(2, 2);
            assert.equal(term.toString(), '+ 2x<sup>2</sup> ');
        });

        it('should return "- 2x<sup>-2</sup> "', () => {
            let term = new Term(-2, -2);
            assert.equal(term.toString(), '- 2x<sup>-2</sup> ');
        });

        it('should return "" ', () => {
            let term = new Term(0, 2);
            assert.equal(term.toString(), '');
        });

        it('should return "+ x<sup>2</sup> "', () => {
            let term = new Term(1, 2);
            assert.equal(term.toString(), '+ x<sup>2</sup> ');
        });

        it('should return "- x<sup>2</sup> "', () => {
            let term = new Term(-1, 2);
            assert.equal(term.toString(), '- x<sup>2</sup> ');
        });

        it('should return "+ 2 "', () => {
            let term = new Term(2, 0);
            assert.equal(term.toString(), '+ 2 ');
        });

        it('should return "+ 2x "', () => {
            let term = new Term(2, 1);
            assert.equal(term.toString(), '+ 2x ');
        });

        it('should return "+ 2x<sup>-1</sup> "', () => {
            let term = new Term(2, -1);
            assert.equal(term.toString(), '+ 2x<sup>-1</sup> ');
        });
    });
});