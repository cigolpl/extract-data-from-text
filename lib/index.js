var PhoneNumberParser = require('./phone');

module.exports = {
  emails: function(text) {
    var foundEmails = [];
    var emailRegex = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    while (match = emailRegex.exec(text)) {
      foundEmails.push(match[0]);
      text = text.replace(match[0], "");
    }
    return foundEmails;
  },

  phones: function(text) {
    var numbers = new PhoneNumberParser();
    return numbers.parse(text);
  }
};
