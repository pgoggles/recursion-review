// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];
  var checkForClassName = function (element) {
    var classList = element.classList;
    var childNodes = element.childNodes;
    if (classList !== undefined) {
      for (var i = 0; i < classList.length; i++) {
        if (classList[i] === className) {
          result.push(element);
        }
      }
    }
    for (var key in childNodes) {
      checkForClassName(childNodes[key]);
    }
  };
  checkForClassName(document.body);
  return result;
};

