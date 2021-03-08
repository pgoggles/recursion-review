// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  // functions and undefined: {}
  // number: 3
  // strings: "string"
  // boolean: true
  // arrays: '[2, 3]'
  // objects: '{"string":3}'

  // make result variable
  // if string result += string
  // if number result += number
  // if boolean result += boolean
  // if array:
  //   write '['
  //   iterate through array and pass into stringifyJSON
  //   write ']'
  // if object:
  //   write '{'
  //   iterate through object and pass into stringifyJSON
  //   write '}'
  // if function or undefined return {}

  // return result
};


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