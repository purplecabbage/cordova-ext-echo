#!/usr/bin/env node

var pluginstall = require('pluginstall');

var args = process.argv.slice();
var firstArgIndex = 0;

// note: windows expands node to the full node.exe path
if (args[0] == "node" || args[0].indexOf("node.exe") > 0) {
    firstArgIndex++;
}

//args.shift() // skip "cli.js"
firstArgIndex++;

//console.log("args.length = " + args.length + " : " + firstArgIndex + " " + args);

if (args.length == firstArgIndex) {
    console.log('Usage: cordova-ext-barcodescanner [platform] [project directory]');
} 
else if (args[firstArgIndex] === '-v') {
    console.log('pluginstall version ' + require('./package').version);
} 
else 
{
    platform = args[firstArgIndex];
    projectDir = args[firstArgIndex+1];
    
    console.log("platform = " + platform);
    console.log("projectDir = " + projectDir);

    // console.log("platform = " + platform);
    // console.log("projectDir = " + projectDir);

    // config = pluginstall.init(platform, projectDir);
    // plugin = pluginstall.parseXml(config);
    // 
    // pluginstall.installPlugin(config, plugin, function (err) {
    //     if (err) {
    //         console.error(err);
    //     } else {
    //         console.log('plugin installed for platform::' + platform);
    //     }
    // });
}