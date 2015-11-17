var exp1 = require('./export/export1');
var Person = require('./export/export2');
var SomeObject = require('./export/export3');

/**
 * Example of using modules in node
 *
 * As a hint, `require` caches the value of module.exports
 * based on the absolute file path of the required file and
 * therefore returns the same value for subsequent calls
 */

// use export defined as an anonymous function
console.log(exp1());

// use export defined as a constructor function
var Jane = new Person('Jane');
console.log(Jane.sayHello());

// use export defined as an object
SomeObject.someOtherFunction();