webpackHotUpdate_N_E("pages/about",{

/***/ "./components/DropdownNav.js":
/*!***********************************!*\
  !*** ./components/DropdownNav.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _SLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SLink */ \"./components/SLink.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/snakeeye10/portfolio/components/DropdownNav.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display : flex;\\n    flex-direction : column;\\n    padding-left : 0;\\n    list-style : none;\\n    margin-top : 0;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    flex-basis: 100%;\\n    flex-flow : 1;\\n    align-items : center;\\n    transition: height ease 20s;\\n    display: \", \";\\n    height : \", \";\\n\\n    @media (min-width: 900px) {\\n        display : none;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar StyledNav = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].nav(_templateObject(), function (props) {\n  return props.hidden ? \"none\" : \"block\";\n}, function (props) {\n  return props.hidden ? \"0px\" : \"100%\";\n});\n_c = StyledNav;\nvar StyledNavList = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ul(_templateObject2());\n_c2 = StyledNavList;\n\nvar DropdownNav = function DropdownNav(props) {\n  var homeActive = false;\n  var aboutActive = false;\n  var portfolioActive = false;\n  var skillsActive = false;\n  var resumeActive = false;\n  var contactActive = false;\n\n  if (props.page === \"home\") {\n    homeActive = true;\n  }\n\n  if (props.page === \"about\") {\n    aboutActive = true;\n  }\n\n  if (props.page === \"portfolio\") {\n    portfolioActive = true;\n  }\n\n  if (props.page === \"skills\") {\n    skillsActive = true;\n  }\n\n  if (props.page === \"resume\") {\n    resumeActive = true;\n  }\n\n  if (props.page === \"contact\") {\n    contactActive = true;\n  }\n\n  return __jsx(StyledNav, {\n    hidden: props.hidden,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 5\n    }\n  }, __jsx(StyledNavList, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, __jsx(_SLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    url: \"/\",\n    name: \"Home\",\n    active: homeActive,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }), __jsx(_SLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    url: \"/about\",\n    name: \"About\",\n    active: aboutActive,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  }), __jsx(_SLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    url: \"/portfolio\",\n    name: \"Portfolio\",\n    active: portfolioActive,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }\n  }), __jsx(_SLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    url: \"/skills\",\n    name: \"Skills\",\n    active: skillsActive,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }\n  }), __jsx(_SLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    url: \"/pdfs/resume.pdf\",\n    name: \"Resume(PDF)\",\n    active: resumeActive,\n    newTab: \"true\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  }), __jsx(_SLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    url: \"/contact\",\n    name: \"Contact\",\n    active: contactActive,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }\n  })));\n};\n\n_c3 = DropdownNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DropdownNav);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"StyledNav\");\n$RefreshReg$(_c2, \"StyledNavList\");\n$RefreshReg$(_c3, \"DropdownNav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ecm9wZG93bk5hdi5qcz8zNDcwIl0sIm5hbWVzIjpbIlN0eWxlZE5hdiIsInN0eWxlZCIsIm5hdiIsInByb3BzIiwiaGlkZGVuIiwiU3R5bGVkTmF2TGlzdCIsInVsIiwiRHJvcGRvd25OYXYiLCJob21lQWN0aXZlIiwiYWJvdXRBY3RpdmUiLCJwb3J0Zm9saW9BY3RpdmUiLCJza2lsbHNBY3RpdmUiLCJyZXN1bWVBY3RpdmUiLCJjb250YWN0QWN0aXZlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG9CQUtBLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLE1BQU4sR0FBZSxNQUFmLEdBQXdCLE9BQTVCO0FBQUEsQ0FMTCxFQU1BLFVBQUFELEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLE1BQU4sR0FBZSxLQUFmLEdBQXVCLE1BQTNCO0FBQUEsQ0FOTCxDQUFmO0tBQU1KLFM7QUFZTixJQUFNSyxhQUFhLEdBQUdKLHlEQUFNLENBQUNLLEVBQVYsb0JBQW5CO01BQU1ELGE7O0FBU04sSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0osS0FBRCxFQUFXO0FBQzNCLE1BQUlLLFVBQVUsR0FBRyxLQUFqQjtBQUNBLE1BQUlDLFdBQVcsR0FBRyxLQUFsQjtBQUNBLE1BQUlDLGVBQWUsR0FBRyxLQUF0QjtBQUNBLE1BQUlDLFlBQVksR0FBRyxLQUFuQjtBQUNBLE1BQUlDLFlBQVksR0FBRyxLQUFuQjtBQUNBLE1BQUlDLGFBQWEsR0FBRyxLQUFwQjs7QUFFQSxNQUFJVixLQUFLLENBQUNXLElBQU4sS0FBZSxNQUFuQixFQUEwQjtBQUN0Qk4sY0FBVSxHQUFHLElBQWI7QUFDSDs7QUFDRCxNQUFJTCxLQUFLLENBQUNXLElBQU4sS0FBZSxPQUFuQixFQUE0QjtBQUN4QkwsZUFBVyxHQUFHLElBQWQ7QUFDSDs7QUFDRCxNQUFJTixLQUFLLENBQUNXLElBQU4sS0FBZSxXQUFuQixFQUFnQztBQUM1QkosbUJBQWUsR0FBRyxJQUFsQjtBQUNIOztBQUNELE1BQUlQLEtBQUssQ0FBQ1csSUFBTixLQUFlLFFBQW5CLEVBQTZCO0FBQ3pCSCxnQkFBWSxHQUFHLElBQWY7QUFDSDs7QUFDRCxNQUFJUixLQUFLLENBQUNXLElBQU4sS0FBZSxRQUFuQixFQUE2QjtBQUN6QkYsZ0JBQVksR0FBRyxJQUFmO0FBQ0g7O0FBQ0QsTUFBSVQsS0FBSyxDQUFDVyxJQUFOLEtBQWUsU0FBbkIsRUFBOEI7QUFDMUJELGlCQUFhLEdBQUcsSUFBaEI7QUFDSDs7QUFFRCxTQUNBLE1BQUMsU0FBRDtBQUFXLFVBQU0sRUFBRVYsS0FBSyxDQUFDQyxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhDQUFEO0FBQU8sT0FBRyxFQUFDLEdBQVg7QUFBZSxRQUFJLEVBQUMsTUFBcEI7QUFBMkIsVUFBTSxFQUFFSSxVQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLDhDQUFEO0FBQU8sT0FBRyxFQUFDLFFBQVg7QUFBb0IsUUFBSSxFQUFDLE9BQXpCO0FBQWlDLFVBQU0sRUFBRUMsV0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0ksTUFBQyw4Q0FBRDtBQUFPLE9BQUcsRUFBQyxZQUFYO0FBQXdCLFFBQUksRUFBQyxXQUE3QjtBQUF5QyxVQUFNLEVBQUVDLGVBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQUlJLE1BQUMsOENBQUQ7QUFBTyxPQUFHLEVBQUMsU0FBWDtBQUFxQixRQUFJLEVBQUMsUUFBMUI7QUFBbUMsVUFBTSxFQUFFQyxZQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosRUFLSSxNQUFDLDhDQUFEO0FBQU8sT0FBRyxFQUFDLGtCQUFYO0FBQThCLFFBQUksRUFBQyxhQUFuQztBQUFpRCxVQUFNLEVBQUVDLFlBQXpEO0FBQXVFLFVBQU0sRUFBQyxNQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosRUFNSSxNQUFDLDhDQUFEO0FBQU8sT0FBRyxFQUFDLFVBQVg7QUFBc0IsUUFBSSxFQUFDLFNBQTNCO0FBQXFDLFVBQU0sRUFBRUMsYUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLENBREosQ0FEQTtBQVlILENBdkNEOztNQUFNTixXO0FBeUNTQSwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRHJvcGRvd25OYXYuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgU0xpbmsgZnJvbSAnLi9TTGluayc7XG5cbmNvbnN0IFN0eWxlZE5hdiA9IHN0eWxlZC5uYXZgXG4gICAgZmxleC1iYXNpczogMTAwJTtcbiAgICBmbGV4LWZsb3cgOiAxO1xuICAgIGFsaWduLWl0ZW1zIDogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IGhlaWdodCBlYXNlIDIwcztcbiAgICBkaXNwbGF5OiAke3Byb3BzID0+IHByb3BzLmhpZGRlbiA/IFwibm9uZVwiIDogXCJibG9ja1wifTtcbiAgICBoZWlnaHQgOiAke3Byb3BzID0+IHByb3BzLmhpZGRlbiA/IFwiMHB4XCIgOiBcIjEwMCVcIn07XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcbiAgICAgICAgZGlzcGxheSA6IG5vbmU7XG4gICAgfVxuYFxuY29uc3QgU3R5bGVkTmF2TGlzdCA9IHN0eWxlZC51bGBcbiAgICBkaXNwbGF5IDogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbiA6IGNvbHVtbjtcbiAgICBwYWRkaW5nLWxlZnQgOiAwO1xuICAgIGxpc3Qtc3R5bGUgOiBub25lO1xuICAgIG1hcmdpbi10b3AgOiAwO1xuYFxuXG5cbmNvbnN0IERyb3Bkb3duTmF2ID0gKHByb3BzKSA9PiB7XG4gICAgbGV0IGhvbWVBY3RpdmUgPSBmYWxzZTtcbiAgICBsZXQgYWJvdXRBY3RpdmUgPSBmYWxzZTtcbiAgICBsZXQgcG9ydGZvbGlvQWN0aXZlID0gZmFsc2U7XG4gICAgbGV0IHNraWxsc0FjdGl2ZSA9IGZhbHNlO1xuICAgIGxldCByZXN1bWVBY3RpdmUgPSBmYWxzZTtcbiAgICBsZXQgY29udGFjdEFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgaWYgKHByb3BzLnBhZ2UgPT09IFwiaG9tZVwiKXtcbiAgICAgICAgaG9tZUFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChwcm9wcy5wYWdlID09PSBcImFib3V0XCIpIHtcbiAgICAgICAgYWJvdXRBY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAocHJvcHMucGFnZSA9PT0gXCJwb3J0Zm9saW9cIikge1xuICAgICAgICBwb3J0Zm9saW9BY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAocHJvcHMucGFnZSA9PT0gXCJza2lsbHNcIikge1xuICAgICAgICBza2lsbHNBY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAocHJvcHMucGFnZSA9PT0gXCJyZXN1bWVcIikge1xuICAgICAgICByZXN1bWVBY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAocHJvcHMucGFnZSA9PT0gXCJjb250YWN0XCIpIHtcbiAgICAgICAgY29udGFjdEFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICA8U3R5bGVkTmF2IGhpZGRlbj17cHJvcHMuaGlkZGVufT5cbiAgICAgICAgPFN0eWxlZE5hdkxpc3Q+XG4gICAgICAgICAgICA8U0xpbmsgdXJsPVwiL1wiIG5hbWU9XCJIb21lXCIgYWN0aXZlPXtob21lQWN0aXZlfSAvPlxuICAgICAgICAgICAgPFNMaW5rIHVybD1cIi9hYm91dFwiIG5hbWU9XCJBYm91dFwiIGFjdGl2ZT17YWJvdXRBY3RpdmV9IC8+XG4gICAgICAgICAgICA8U0xpbmsgdXJsPVwiL3BvcnRmb2xpb1wiIG5hbWU9XCJQb3J0Zm9saW9cIiBhY3RpdmU9e3BvcnRmb2xpb0FjdGl2ZX0gLz5cbiAgICAgICAgICAgIDxTTGluayB1cmw9XCIvc2tpbGxzXCIgbmFtZT1cIlNraWxsc1wiIGFjdGl2ZT17c2tpbGxzQWN0aXZlfSAvPlxuICAgICAgICAgICAgPFNMaW5rIHVybD1cIi9wZGZzL3Jlc3VtZS5wZGZcIiBuYW1lPVwiUmVzdW1lKFBERilcIiBhY3RpdmU9e3Jlc3VtZUFjdGl2ZX0gbmV3VGFiPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICA8U0xpbmsgdXJsPVwiL2NvbnRhY3RcIiBuYW1lPVwiQ29udGFjdFwiIGFjdGl2ZT17Y29udGFjdEFjdGl2ZX0gLz5cbiAgICAgICAgPC9TdHlsZWROYXZMaXN0PlxuICAgIDwvU3R5bGVkTmF2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25OYXY7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DropdownNav.js\n");

/***/ })

})