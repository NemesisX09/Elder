/**
 * Created by NemesisX 2022 all rights reserved!
 * Elder is meant to act as a deep down way to 
 * find how evaluation functions work.
 * Bad stuff *MAY* happen if fork...
 */

var i = require('./Elder/math/compiler.js');

while (true) {
  var input = prompt("");

  console.log(i.evaluate(input));
}
