'use strict';

var Debugger = require('dw/system/Debugger');

function startDebugging() {
    Debugger.start();
}

function stopDebugging() {
    Debugger.stop();
}

module.exports = {
    startDebugging: startDebugging,
    stopDebugging: stopDebugging
};
