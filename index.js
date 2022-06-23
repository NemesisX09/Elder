/**
 * Created by NemesisX 2022 all rights reserved!
 * Elder is meant to act as a deep down way to 
 * find how evaluation functions work. You may not fork! Nu-uh! 
 * Bad stuff *MAY* happen...
 * PS:
 * I don't care about MIT!
 */

var i = require('./Elder/math/compiler.js');

while (true) {
  var input = prompt("");

  console.log(i.evaluate(input));
}