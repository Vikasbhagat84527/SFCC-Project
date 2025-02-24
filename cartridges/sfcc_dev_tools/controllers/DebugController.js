'use strict';

var server = require('server');
var debugService = require('*/cartridge/scripts/debugService');

server.get('StartDebug', function (req, res, next) {
    debugService.startDebugging();
    res.render('debug/debuggingStarted');
    next();
});

server.get('StopDebug', function (req, res, next) {
    debugService.stopDebugging();
    res.render('debug/debuggingStopped');
    next();
});

module.exports = server.exports();
