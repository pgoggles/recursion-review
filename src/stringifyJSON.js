// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

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
    var lastKey = Object.keys(obj)[Object.keys(obj.length - 1)];
    result += '{';
    for (var key in obj) {
      result += '"' + key + '" : ';
      result += stringifyJSON(obj[key]);
      if (key !== lastKey) {
        result += ', ';
      }
    }
    return result += '}';
  }
  return result;
};

// Edgar's Pseudocode
// make a result variable
// check if obj is a primitve value
//    result is = obj
// if obj is array
//    result += '['
//    iterate through array
//    result += invoke stringify on current element
//    when finished looping, result += ']'
// if obj is an Object
//    iterate through keys
//    result += '{'
//    invoke stringify on the values of each key
//    result += '"' + key + ':' + stringifyJSON(value) + ','
//    when finished looping result += '}'

// Praneeth's Pseudocode
// create result string
// if (type===number)
//    result += number.toString (do we need to toString?)
// if (type === boolean)
//    result += boolean
// if (type === string)
//    result += '"' + string + '"' (single or double quotes??)
// if (Array.isArray(obj))
//    result += '['
//    objLength = result.length //store length to determine if last
//    for i=0, i<objLength; i++
//      result += stringifyJSON(obj[objLength])
//      if i !== length - 1
//          result += ',' //add comma if not last
//    result += ']'
// if (type === object)
//    var lastKey = Object.keys(obj)[Object.keys(obj).length - 1] // store lastObject as a variable
//    result += '{'
//    for var key in obj
//        result += stringifyJSON(key) // does this need to be stringified?
//        result += stringifyJSON(obj[key]) // stringify the value
//        if key !== lastKey
//            result += ','
//    result += '}'
// if (type === function or type === undefined)
//    return undefined
// return result