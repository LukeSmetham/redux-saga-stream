"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_getstream=_interopRequireDefault(require("getstream")),_feed=_interopRequireDefault(require("./feed")),ReduxSagaStream=function a(b,c,d){(0,_classCallCheck2.default)(this,a),this.client=stream.connect(b,c,d),this.feed={addActivity:_feed.default.addActivity.bind(this),createFeedChannel:_feed.default.createFeedChannel.bind(this)}},_default=ReduxSagaStream;exports.default=_default;