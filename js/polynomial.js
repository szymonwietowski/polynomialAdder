const path = require('path');

const Term = require(path.resolve('./js/term.js'));

class Polynomial {

    constructor(...terms) {
        this.terms = new Map();
        terms.forEach(term => this.addTerm(term));
    }

    fromString(inputString) {
        let termStrings = inputString.match(/[+-]?\s?\d+[a-zA-Z]?-?\d*/g);
        termStrings.forEach(termString => this.addTerm(new Term().fromString(termString)));
        return this;
    }

    add(polymonial) {
        for(let term of polymonial.terms.values())
            this.addTerm(term);
    }

    addTerm(term) {
        if(this.terms.has(term.exponent)) this.terms.get(term.exponent).add(term);
        else this.terms.set(term.exponent, new Term(term.coefficient, term.exponent));
    }

    toString() {
        let sortedTerms = [...this.terms.values()].sort((a, b) => a.exponent < b.exponent ? 1 : -1);

        let resultString = '';
        for(let term of sortedTerms)
            resultString += term.toString();
        
        if(resultString.indexOf('+') == 0) 
            resultString = resultString.slice(2, resultString.length-1)
        else if(resultString.indexOf('-') == 0)
            resultString = '-' + resultString.slice(2, resultString.length-1)

        return resultString;
    }
}

module.exports = Polynomial;