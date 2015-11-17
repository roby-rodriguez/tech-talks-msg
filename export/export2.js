/**
 * Export module defined by means of a constructor function
 */
function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    return "Hi, I'm " + this.name;
};

module.exports = Person;