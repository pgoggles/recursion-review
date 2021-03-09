// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
// []
var stringifyJSON = function(obj) {
  var result = '';
  if (typeof obj === 'undefined' || typeof obj === 'function') {
    return result;
  }
  if (obj === null) {
    return result += null;
  }
  if (typeof obj === 'number' || typeof obj === 'boolean' || typeof obj === 'bigint') {
    return result += obj;
  }
  if (typeof obj === 'string') {
    return result += '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return result += '[]';
    }
    result += '[';
    for (var i = 0; i < obj.length; i++) {
      if (i !== obj.length - 1) {
        result += stringifyJSON(obj[i]) + ',';
      } else {
        return result += stringifyJSON(obj[i]) + ']';
      }
    }
  }

  if (typeof obj === 'object') {
    var lastKey = Object.keys(obj)[Object.keys(obj).length - 1];
    result += '{';
    for (var key in obj) {
      if (typeof obj[key] !== 'undefined' && typeof obj[key] !== 'function') {
        result += '"' + key + '":';
        result += stringifyJSON(obj[key]);
        if (key !== lastKey) {
          result += ',';
        }
      }
    }
    return result += '}';
  }
  return result;
};