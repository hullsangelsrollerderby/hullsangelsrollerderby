var moment = require('moment');

module.exports = function(dateString, options) {
  if(moment(dateString).subtract(1, 'day').isAfter(moment())){
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

