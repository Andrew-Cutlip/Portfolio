webpackHotUpdate_N_E("pages/portfolio",{

/***/ "./components/Carousel.js":
/*!********************************!*\
  !*** ./components/Carousel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/snakeeye10/portfolio/components/Carousel.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width : 2rem;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width : 100%;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width: 100%;\\n    display: flex;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar StyledCarousel = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject());\n_c = StyledCarousel;\nvar StyledCarouselItem = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2());\n_c2 = StyledCarouselItem;\nvar StyledCarouselButton = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject3());\n_c3 = StyledCarouselButton;\n\nvar Carousel = function Carousel(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      itemIndex = _useState[0],\n      setItemIndex = _useState[1];\n\n  var nextItem = function nextItem() {\n    if (itemIndex < items.length - 1) {\n      setItemIndex(itemIndex + 1);\n    } else {\n      setItemIndex(0);\n    }\n\n    displayedItem = items[itemIndex];\n  };\n\n  var prevItem = function prevItem() {\n    if (itemIndex > 0) {\n      setItemIndex(itemIndex - 1);\n    } else {\n      setItemIndex(items.length - 1);\n    }\n\n    displayedItem = items[itemIndex];\n  };\n\n  var items = null;\n  var displayedItem = null;\n\n  if (props.items) {\n    items = props.items;\n    displayedItem = items[itemIndex];\n  }\n\n  return __jsx(StyledCarousel, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, __jsx(StyledCarouselButton, {\n    onClick: prevItem,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }, \"Prev\"), __jsx(StyledCarouselItem, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }, displayedItem), __jsx(StyledCarouselButton, {\n    onClick: nextItem,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, \"Next\"));\n};\n\n_s(Carousel, \"LAI50L1SO5CQ7fBX4VrmLPaCw7U=\");\n\n_c4 = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"StyledCarousel\");\n$RefreshReg$(_c2, \"StyledCarouselItem\");\n$RefreshReg$(_c3, \"StyledCarouselButton\");\n$RefreshReg$(_c4, \"Carousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC5qcz83M2IzIl0sIm5hbWVzIjpbIlN0eWxlZENhcm91c2VsIiwic3R5bGVkIiwiZGl2IiwiU3R5bGVkQ2Fyb3VzZWxJdGVtIiwiU3R5bGVkQ2Fyb3VzZWxCdXR0b24iLCJidXR0b24iLCJDYXJvdXNlbCIsInByb3BzIiwidXNlU3RhdGUiLCJpdGVtSW5kZXgiLCJzZXRJdGVtSW5kZXgiLCJuZXh0SXRlbSIsIml0ZW1zIiwibGVuZ3RoIiwiZGlzcGxheWVkSXRlbSIsInByZXZJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBcEI7S0FBTUYsYztBQUtOLElBQU1HLGtCQUFrQixHQUFHRix5REFBTSxDQUFDQyxHQUFWLG9CQUF4QjtNQUFNQyxrQjtBQUlOLElBQU1DLG9CQUFvQixHQUFHSCx5REFBTSxDQUFDSSxNQUFWLG9CQUExQjtNQUFNRCxvQjs7QUFJTixJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDUUMsc0RBQVEsQ0FBQyxDQUFELENBRGhCO0FBQUEsTUFDbkJDLFNBRG1CO0FBQUEsTUFDUkMsWUFEUTs7QUFHeEIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNuQixRQUFJRixTQUFTLEdBQUdHLEtBQUssQ0FBQ0MsTUFBTixHQUFjLENBQTlCLEVBQWdDO0FBQzVCSCxrQkFBWSxDQUFDRCxTQUFTLEdBQUcsQ0FBYixDQUFaO0FBQ0gsS0FGRCxNQUdLO0FBQ0RDLGtCQUFZLENBQUMsQ0FBRCxDQUFaO0FBQ0g7O0FBQ0RJLGlCQUFhLEdBQUdGLEtBQUssQ0FBQ0gsU0FBRCxDQUFyQjtBQUNILEdBUkQ7O0FBVUEsTUFBTU0sUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNuQixRQUFJTixTQUFTLEdBQUcsQ0FBaEIsRUFBa0I7QUFDZEMsa0JBQVksQ0FBQ0QsU0FBUyxHQUFHLENBQWIsQ0FBWjtBQUNILEtBRkQsTUFHSztBQUNEQyxrQkFBWSxDQUFDRSxLQUFLLENBQUNDLE1BQU4sR0FBZSxDQUFoQixDQUFaO0FBQ0g7O0FBQ0RDLGlCQUFhLEdBQUdGLEtBQUssQ0FBQ0gsU0FBRCxDQUFyQjtBQUNILEdBUkQ7O0FBVUEsTUFBSUcsS0FBSyxHQUFHLElBQVo7QUFDQSxNQUFJRSxhQUFhLEdBQUcsSUFBcEI7O0FBQ0EsTUFBSVAsS0FBSyxDQUFDSyxLQUFWLEVBQWlCO0FBQ2JBLFNBQUssR0FBR0wsS0FBSyxDQUFDSyxLQUFkO0FBQ0FFLGlCQUFhLEdBQUdGLEtBQUssQ0FBQ0gsU0FBRCxDQUFyQjtBQUNIOztBQUNELFNBQ0ksTUFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG9CQUFEO0FBQXNCLFdBQU8sRUFBRU0sUUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLEVBRUksTUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXFCRCxhQUFyQixDQUZKLEVBR0ksTUFBQyxvQkFBRDtBQUFzQixXQUFPLEVBQUVILFFBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixDQURKO0FBT0gsQ0FwQ0Q7O0dBQU1MLFE7O01BQUFBLFE7QUFzQ1NBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJvdXNlbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU3R5bGVkQ2Fyb3VzZWwgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG5gXG5cbmNvbnN0IFN0eWxlZENhcm91c2VsSXRlbSA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGggOiAxMDAlO1xuYFxuXG5jb25zdCBTdHlsZWRDYXJvdXNlbEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gICAgd2lkdGggOiAycmVtO1xuYFxuXG5jb25zdCBDYXJvdXNlbCA9IChwcm9wcykgPT4ge1xuICAgIGxldCBbaXRlbUluZGV4LCBzZXRJdGVtSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgICBjb25zdCBuZXh0SXRlbSA9ICgpID0+IHtcbiAgICAgICAgaWYgKGl0ZW1JbmRleCA8IGl0ZW1zLmxlbmd0aCAtMSl7XG4gICAgICAgICAgICBzZXRJdGVtSW5kZXgoaXRlbUluZGV4ICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRJdGVtSW5kZXgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgZGlzcGxheWVkSXRlbSA9IGl0ZW1zW2l0ZW1JbmRleF07XG4gICAgfVxuXG4gICAgY29uc3QgcHJldkl0ZW0gPSAoKSA9PiB7XG4gICAgICAgIGlmIChpdGVtSW5kZXggPiAwKXtcbiAgICAgICAgICAgIHNldEl0ZW1JbmRleChpdGVtSW5kZXggLSAxKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldEl0ZW1JbmRleChpdGVtcy5sZW5ndGggLSAxKTtcbiAgICAgICAgfVxuICAgICAgICBkaXNwbGF5ZWRJdGVtID0gaXRlbXNbaXRlbUluZGV4XTtcbiAgICB9XG5cbiAgICBsZXQgaXRlbXMgPSBudWxsO1xuICAgIGxldCBkaXNwbGF5ZWRJdGVtID0gbnVsbDtcbiAgICBpZiAocHJvcHMuaXRlbXMpIHtcbiAgICAgICAgaXRlbXMgPSBwcm9wcy5pdGVtcztcbiAgICAgICAgZGlzcGxheWVkSXRlbSA9IGl0ZW1zW2l0ZW1JbmRleF07XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRDYXJvdXNlbD5cbiAgICAgICAgICAgIDxTdHlsZWRDYXJvdXNlbEJ1dHRvbiBvbkNsaWNrPXtwcmV2SXRlbX0+UHJldjwvU3R5bGVkQ2Fyb3VzZWxCdXR0b24+XG4gICAgICAgICAgICA8U3R5bGVkQ2Fyb3VzZWxJdGVtPntkaXNwbGF5ZWRJdGVtfTwvU3R5bGVkQ2Fyb3VzZWxJdGVtPlxuICAgICAgICAgICAgPFN0eWxlZENhcm91c2VsQnV0dG9uIG9uQ2xpY2s9e25leHRJdGVtfT5OZXh0PC9TdHlsZWRDYXJvdXNlbEJ1dHRvbj5cbiAgICAgICAgPC9TdHlsZWRDYXJvdXNlbD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Carousel.js\n");

/***/ })

})