// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  //
  // var classList = element.classList;
  // var childNodes = element.childNodes;
  var result = [];
  var element = document.body;
  // for (var key in classList) {
  //   if (classList[key] === className) {
  //     result.push(classList[key]);
  //   }
  // }

  var checkForClassName = function (element) {
    var classList = element.classList;
    var childNodes = element.childNodes;
    for (var key in classList) {
      if (classList[key] === className) {
        result.push(classList[key]);
      }
    }
    for (var key in childNodes) {
      checkForClassName(childNodes[key]);
    }
  };

  checkForClassName(element);
  console.log(result);
  return result;
};



// var checkChildNodes (passing in an object)
// loop thru childNodes
//    define each childNode = childnodes[key]
//    check classlist of childNode
//      if we match array.push(childNode)
//    check if childNodes has children of its own
//      if has children invoke checkChildNodes(childNode)
