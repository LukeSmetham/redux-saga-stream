"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _getstream = _interopRequireDefault(require("getstream"));

var _feed = _interopRequireDefault(require("./feed"));

// Modules //
var ReduxSagaStream = function ReduxSagaStream(key, token, id) {
  (0, _classCallCheck2.default)(this, ReduxSagaStream);
  this.client = stream.connect(key, token, id);
  this.feed = {
    channel: _feed.default.channel.bind(this)
  };
};

var _default = ReduxSagaStream;
exports.default = _default;