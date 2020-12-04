SYS_EN-ES_trans.js
var greeting = "Hello";

String.prototype.translate = function() {
    try{
        if(this.toString() === "Hello") {
            return "Hola";
        }
        else if(this.toString() === "Goodbye") {
            return "Adiós";
        }
    }
    catch(error) {
        console.log('Sorry, this does not have a translation yet', error);
    }
};

var greeting = 'Hello';

console.log(greeting.translate());