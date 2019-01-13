'use strict';

exports.ok = function(values, res) {
  var data = {
      'response': values
  };
  res.json(data);
  res.end();
};