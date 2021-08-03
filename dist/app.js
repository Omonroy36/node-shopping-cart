"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _require = require('express'),
    express = _require.express,
    json = _require.json;

var app = express(); //middlewares

app.use(json());
var _default = app;
exports["default"] = _default;