(function(window){
    
    window.echo = function(str, callback) {
        cordova.exec(callback, function(err) {
            callback('Nothing to echo.');
        }, "org.apache.cordova.plugins.Echo", "echo", [str]);
    };    
    
})(window);

