/**
 * Created by NemesisX 2022 all rights reserved!
 * Pear is meant to act as a deep down way to 
 * find how evaluation functions work. You may not fork! Nu-uh! 
 * Bad stuff *MAY* happen...
 * PS:
 * I don't care about MIT!
 */

var i = require('./Pear/math/compiler.js');
var input = "3*7+3^3";

console.log(i.evaluate(input));