var moment = require('moment');
module.exports = function(boutDate) {
  return moment(boutDate.fn(this)).format('dddd, MMMM Do YYYY');
};