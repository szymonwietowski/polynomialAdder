class Term {

    constructor(coefficient, exponent) {
        this.coefficient = coefficient;
        this.exponent = exponent;
    }

    fromString(inputString) {
        let coefficientRes = inputString.match(/^[-+]?\s?\d+/);
        let exponentRes = inputString.match(/[a-zA-Z]-?\d*/);
        let coefficient = coefficientRes != null ? parseInt(coefficientRes[0].replace(' ', '')) : 1;
        let exponent = 0;
        if(exponentRes != null)
            exponent = exponentRes[0].length == 1 ? 1 : parseInt(exponentRes[0].slice(1));
        
        this.coefficient = coefficient;
        this.exponent = exponent;

        return this;
    }

    add(term) {
        if(term.exponent == this.exponent)
            this.coefficient += term.coefficient;
    }

    toString() {
        if(this.coefficient == 0) return '';
        return `${this.coefficient < 0 ? '-' : '+'} ` +
               `${(Math.abs(this.coefficient) == 1 && this.exponent != 0) ? '' : Math.abs(this.coefficient)}` + 
               `${this.exponent == 0 ? '' : 'x'}` +
               `${(this.exponent == 0 || this.exponent == 1) ? '' : this.exponent.toString().sup()} `;
    }
}

module.exports = Term;