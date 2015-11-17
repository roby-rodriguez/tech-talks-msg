/**
 * Export module defined by an object
 */
var exp1 = require('./export1');

var SomeObject = {
    someField: 'someValue',
    someFunction: function () {
        console.log('Called some function');
        exp1();
    },
    someCallbackFunction: function (callback) {
        setTimeout(function () {
            console.log('Doing some stuff then calling callback (inside)');
            callback(SomeObject.someField);
        }, 1000);
    },
    someOtherFunction: function () {
        SomeObject.someFunction();
        SomeObject.someCallbackFunction(function (param) {
            console.log('Doing some stuff then calling callback (outside)');
            console.log("Argument value: " + param);
        });
    }
};

module.exports = SomeObject;