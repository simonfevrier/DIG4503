const Person = require("./Person.js");

class Simon extends Person {
    constructor(name, colors, bgColors) {
        super(name, colors, bgColors);
    }
}

module.exports = Simon;
