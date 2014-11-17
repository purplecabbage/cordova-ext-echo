> Cordova plugin exemplifying simplest possible functionality: echoing a
> string.

# Why?

As a beginner to cordova plugin development, I tried almost all available `echo`
plugins but none worked with the latest cordova 4.0.0 (I was testing on iOS)!
I guess those are all built for old versions of cordova.

This is just a working version with cordova 4.0.0. I did the changes blindly following
existing working plugins.

# Usage

1. `cordova plugin add <url to this repo>`
2. In your code, write something like:
```
    onDeviceReady: function() {
        var Echo = cordova.require('org.apache.cordova.plugins.echo.Echo');
        Echo.echo('hello,world', function(v) {
          alert(v);
        });
    }
```

# License
Apache 2.0 License
