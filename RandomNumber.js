"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ButtonComponent = () => {
  const [random, setRandom] = _react.default.useState(0);

  const data = {
    "name": "Miracle",
    "n": "d"
  };
  console.log("lodash pick function result is ", JSON.stringify((0, _lodash.pick)(data, ["name"])));
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: "primary",
    onClick: () => setRandom(Math.floor(Math.random() * 100 + 1))
  }, "Primary"), "Random number is ", random, /*#__PURE__*/_react.default.createElement("br", null), "Lodash pick example is consoled");
};

var _default = ButtonComponent;
exports.default = _default;
