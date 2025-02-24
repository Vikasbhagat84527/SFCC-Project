'use strict';

var Performance = require('dw/system/Performance');

function startMonitoring() {
    Performance.start();
}

function stopMonitoring() {
    Performance.stop();
}

module.exports = {
    startMonitoring: startMonitoring,
    stopMonitoring: stopMonitoring
};
