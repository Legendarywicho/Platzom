'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
function platzom(str) {
  var translation = str;
  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };
  var minMay = function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true;
    for (var i = 0; i < length; i++) {
      var char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }
  };
  // Si la palabra original es un palimodro, se devuelve la misma palabra
  if (str == reverse(str)) {
    return minMay(str);
  }
  // Si la palabra termina en "ar", se le quitan los dos caracteres
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2);
  }

  // Si la palabra inicia con Z, se le añade "Pe" al final
  if (str.toLowerCase().startsWith("z")) {
    translation += 'pe';
  }

  // Si la palabra traducida tiene 10 o mas letras, se debe partir a la mitad
  var lenghtOfWord = translation.length;
  if (lenghtOfWord >= 10) {
    var firstHalf = translation.slice(0, Math.round(lenghtOfWord / 2));
    var secondHalf = translation.slice(Math.round(lenghtOfWord / 2));
    translation = firstHalf + '-' + secondHalf;
  }

  return translation;
}