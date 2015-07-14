var exec = cordova.require('cordova/exec');

var Echo = function(){

};

Echo.echo = function(str, callback) {
  exec(callback, function(err) {
      callback('Nothing to echo.');
  }, "Echo", "echo", [str]);
};

module.exports = Echo;
