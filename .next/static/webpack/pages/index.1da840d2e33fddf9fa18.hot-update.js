webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SLink.js":
/*!*****************************!*\
  !*** ./components/SLink.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/snakeeye10/portfolio/components/SLink.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: block;\\n    padding: .5rem 1rem;\\n    margin-bottom: -1px;\\n    border-width: 1px;\\n    border-style: solid;\\n    border-right-color : \", \";\\n    border-left-color : \", \";\\n    border-top-color : \", \";\\n    border-bottom-color : \\\"transparent\\\";\\n    border-radius: .25rem;\\n    text-decoration : none;\\n    background-color : \", \";\\n    color: rgba(0,0,0,.5);\\n\\n    &:hover {\\n        border: 1px solid black;\\n        text-decoration: none;\\n        background-color : #0086c3;\\n        color: rgba($color: #000000, $alpha: 0.5);\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].a(_templateObject(), function (props) {\n  return props.active ? \"black\" : \"transparent\";\n}, function (props) {\n  return props.active ? \"black\" : \"transparent\";\n}, function (props) {\n  return props.active ? \"black\" : \"transparent\";\n}, function (props) {\n  return props.active ? \"#73e8ff\" : \"transparent\";\n});\n_c = StyledLink;\n\nvar SLink = function SLink(props) {\n  var target = null;\n\n  if (props.newTab) {\n    target = \"_blank\";\n  }\n\n  return __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: props.url,\n    passHref: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, __jsx(StyledLink, {\n    target: target,\n    active: props.active,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 17\n    }\n  }, props.name)));\n};\n\n_c2 = SLink;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SLink);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"StyledLink\");\n$RefreshReg$(_c2, \"SLink\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TTGluay5qcz9jMDhkIl0sIm5hbWVzIjpbIlN0eWxlZExpbmsiLCJzdHlsZWQiLCJhIiwicHJvcHMiLCJhY3RpdmUiLCJTTGluayIsInRhcmdldCIsIm5ld1RhYiIsInVybCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsQ0FBVixvQkFNVyxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxNQUFOLEdBQWUsT0FBZixHQUF5QixhQUE3QjtBQUFBLENBTmhCLEVBT1UsVUFBQUQsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsTUFBTixHQUFlLE9BQWYsR0FBeUIsYUFBN0I7QUFBQSxDQVBmLEVBUVMsVUFBQUQsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsTUFBTixHQUFlLE9BQWYsR0FBeUIsYUFBN0I7QUFBQSxDQVJkLEVBWVMsVUFBQUQsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsTUFBTixHQUFlLFNBQWYsR0FBMkIsYUFBL0I7QUFBQSxDQVpkLENBQWhCO0tBQU1KLFU7O0FBdUJOLElBQU1LLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNGLEtBQUQsRUFBVztBQUNyQixNQUFJRyxNQUFNLEdBQUcsSUFBYjs7QUFDQSxNQUFJSCxLQUFLLENBQUNJLE1BQVYsRUFBaUI7QUFDYkQsVUFBTSxHQUFHLFFBQVQ7QUFDSDs7QUFDRCxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFSCxLQUFLLENBQUNLLEdBQWxCO0FBQXVCLFlBQVEsTUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsVUFBRDtBQUFZLFVBQU0sRUFBRUYsTUFBcEI7QUFBNEIsVUFBTSxFQUFFSCxLQUFLLENBQUNDLE1BQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbURELEtBQUssQ0FBQ00sSUFBekQsQ0FESixDQURKLENBREo7QUFPSCxDQVpEOztNQUFNSixLO0FBY1NBLG9FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TTGluay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cblxuY29uc3QgU3R5bGVkTGluayA9IHN0eWxlZC5hYFxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1yaWdodC1jb2xvciA6ICR7cHJvcHMgPT4gcHJvcHMuYWN0aXZlID8gXCJibGFja1wiIDogXCJ0cmFuc3BhcmVudFwifTtcbiAgICBib3JkZXItbGVmdC1jb2xvciA6ICR7cHJvcHMgPT4gcHJvcHMuYWN0aXZlID8gXCJibGFja1wiIDogXCJ0cmFuc3BhcmVudFwifTtcbiAgICBib3JkZXItdG9wLWNvbG9yIDogJHtwcm9wcyA9PiBwcm9wcy5hY3RpdmUgPyBcImJsYWNrXCIgOiBcInRyYW5zcGFyZW50XCJ9O1xuICAgIGJvcmRlci1ib3R0b20tY29sb3IgOiBcInRyYW5zcGFyZW50XCI7XG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICAgIHRleHQtZGVjb3JhdGlvbiA6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvciA6ICR7cHJvcHMgPT4gcHJvcHMuYWN0aXZlID8gXCIjNzNlOGZmXCIgOiBcInRyYW5zcGFyZW50XCIgfTtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNSk7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciA6ICMwMDg2YzM7XG4gICAgICAgIGNvbG9yOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjUpO1xuICAgIH1cbmBcblxuY29uc3QgU0xpbmsgPSAocHJvcHMpID0+IHtcbiAgICBsZXQgdGFyZ2V0ID0gbnVsbDtcbiAgICBpZiAocHJvcHMubmV3VGFiKXtcbiAgICAgICAgdGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvcHMudXJsfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICA8U3R5bGVkTGluayB0YXJnZXQ9e3RhcmdldH0gYWN0aXZlPXtwcm9wcy5hY3RpdmV9Pntwcm9wcy5uYW1lfTwvU3R5bGVkTGluaz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNMaW5rOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SLink.js\n");

/***/ })

})