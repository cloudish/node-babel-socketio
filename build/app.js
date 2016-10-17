'use strict';

require("babel-polyfill");

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var server = require('http').Server(app);
var port = 8080;

app.use(_express2.default.static(_path2.default.join(__dirname, "public")));

server.listen(port, function () {
    console.log('Listing on port ' + port);
});
//# sourceMappingURL=app.js.map