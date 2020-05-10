class Term {

    constructor(coefficient, exponent) {
        this.coefficient = coefficient;
        this.exponent = exponent;
    }

    fromString(inputString) {
        console.log(inputString)
    }

    add(term) {
        if(term.exponent == this.exponent)
            this.coefficient += term.coefficient;
    }

    toString() {
        if(this.coefficient == 0) return '';
        return `${this.coefficient < 0 ? '-' : '+'} ` +
               `${Math.abs(this.coefficient) != 1 ? Math.abs(this.coefficient) : ''}` + 
               `${this.exponent == 0 ? '' : 'x'}` +
               `${(this.exponent == 0 || this.exponent == 1) ? '' : this.exponent.toString().sup()} `;
    }
}

module.exports = Term;