// special thanks to https://austinfrance.wordpress.com/2012/04/04/javascript-code-to-find-all-phone-numbers-in-a-string-and-return-them-as-a-list/
var PhoneNumberParser = function() {

  var minimum = 9;
  this.items = [];

  var public = PhoneNumberParser.prototype;
  public.parse = function(str) {
    var items = this.items = [];

    var i = 0, n = '', min = minimum;

    while(i < str.length) {
      switch(str[i]) {
        case '+':
          if (n.length >= min) items.push(n);
        n = str[i];
        min = minimum + 2;
        break;
        case '-': case '.': case '(': case ')':
          break;
        case ' ':
          if (n.length >= min) {
          items.push(n);
          n = '';
        }
        break;
        default:
          if (str[i].match(/[0-9]/)) {
          n += str[i];
          if (n.length == 1 && n != '0') {
            min = 3;
          }
        } else {
          if (n.length >= min) {
            items.push(n);
          }
          n = '';
        }
        break;
      }
      i++;
    }

    if (n.length >= min) {
      items.push(n);
    }

    return items;
  }
};

module.exports = PhoneNumberParser;
