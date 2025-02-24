'use strict';

var Logger = require('dw/system/Logger');

function logInfo(message) {
    Logger.info(message);
}

function logError(message) {
    Logger.error(message);
}

module.exports = {
    logInfo: logInfo,
    logError: logError
};
