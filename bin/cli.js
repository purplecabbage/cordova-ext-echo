#!/usr/bin/env node

(function(){
    
    var pluginstall = require('pluginstall');
    var pkg = require('../package');
    var fs = require('fs');
    var path = require('path');
    var args = process.argv.slice();
    var firstArgIndex = 0;

    // note: windows expands node to the full node.exe path
    if (args[0] == "node" || args[0].indexOf("node.exe") > 0) {
        firstArgIndex++;
    }

    firstArgIndex++;

    if (args.length == firstArgIndex) {
        console.log('Usage: ' + pkg.name + ' [platform] [project directory]');
    } 
    else if (args[firstArgIndex] === '-v') {
        console.log(pkg.name + ' version ' + pkg.version);
    } 
    else {
    
        var platform = args[firstArgIndex];
        var projectDir = args[firstArgIndex+1];
        var pkgPath = require.resolve(pkg.name); // find yourself little one!
        var extSrcDir = path.dirname(pkgPath);
        var config = pluginstall.init(platform, projectDir, extSrcDir);
        var plugin = pluginstall.parseXml(config);

        pluginstall.installPlugin(config, plugin, function (err) {
            if (err) {
                console.error(err);
            } else {
                console.log('plugin installed for platform::' + platform);
            }
        });    
    }

})();
