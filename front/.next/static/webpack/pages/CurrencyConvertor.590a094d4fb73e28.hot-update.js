"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/CurrencyConvertor",{

/***/ "./src/Components/CurrencyConvertor/CurrencyInput/CurrencyInput.tsx":
/*!**************************************************************************!*\
  !*** ./src/Components/CurrencyConvertor/CurrencyInput/CurrencyInput.tsx ***!
  \**************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Input/Input */ \"./src/Components/CurrencyConvertor/Input/Input.tsx\");\n/* harmony import */ var _CurrencyConvertor_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CurrencyConvertor.module.css */ \"./src/Components/CurrencyConvertor/CurrencyConvertor.module.css\");\n/* harmony import */ var _CurrencyConvertor_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CurrencyConvertor_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data_currencyTranslate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/currencyTranslate */ \"./src/data/currencyTranslate.ts\");\n\n\n\n\n\nconst CurrencyInput = (param)=>{\n    let { value, currency, onValueChange, onCurrencyChange, side, filterActive, currencyDesc } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_CurrencyConvertor_module_css__WEBPACK_IMPORTED_MODULE_3___default().part_main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Input_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                value: value,\n                onInput: (value)=>{\n                    console.log(\"value = \", value);\n                    onValueChange(value, side);\n                },\n                className: (_CurrencyConvertor_module_css__WEBPACK_IMPORTED_MODULE_3___default().input_style)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyInput\\\\CurrencyInput.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            filterActive ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        list: \"\".concat(side, \"-currencies\"),\n                        value: currency,\n                        onChange: (e)=>onCurrencyChange(e.target.value, side),\n                        className: (_CurrencyConvertor_module_css__WEBPACK_IMPORTED_MODULE_3___default().dropdown_style),\n                        placeholder: \"Введите сюда название валюты\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyInput\\\\CurrencyInput.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"datalist\", {\n                        id: \"\".concat(side, \"-currencies\"),\n                        children: Object.entries(currencyDesc).map((param)=>{\n                            let [code, _] = param;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: code,\n                                children: [\n                                    code,\n                                    \" (\",\n                                    _data_currencyTranslate__WEBPACK_IMPORTED_MODULE_4__[\"default\"][currencyDesc[code]],\n                                    \")\"\n                                ]\n                            }, code, true, {\n                                fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyInput\\\\CurrencyInput.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 15\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyInput\\\\CurrencyInput.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                value: currency,\n                onChange: (e)=>onCurrencyChange(e.target.value, side),\n                className: (_CurrencyConvertor_module_css__WEBPACK_IMPORTED_MODULE_3___default().dropdown_style),\n                children: Object.entries(currencyDesc).map((param)=>{\n                    let [code, _] = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: code,\n                        children: [\n                            code,\n                            \" (\",\n                            _data_currencyTranslate__WEBPACK_IMPORTED_MODULE_4__[\"default\"][currencyDesc[code]],\n                            \")\"\n                        ]\n                    }, code, true, {\n                        fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyInput\\\\CurrencyInput.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyInput\\\\CurrencyInput.tsx\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyInput\\\\CurrencyInput.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CurrencyInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CurrencyInput);\nvar _c;\n$RefreshReg$(_c, \"CurrencyInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9DdXJyZW5jeUNvbnZlcnRvci9DdXJyZW5jeUlucHV0L0N1cnJlbmN5SW5wdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDUztBQUNrQjtBQUVXO0FBWWhFLE1BQU1JLGdCQUE4QztRQUFDLEVBQ25EQyxLQUFLLEVBQ0xDLFFBQVEsRUFDUkMsYUFBYSxFQUNiQyxnQkFBZ0IsRUFDaEJDLElBQUksRUFDSkMsWUFBWSxFQUNaQyxZQUFZLEVBQ2I7SUFDQyxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV1gsZ0ZBQWdCOzswQkFDOUIsOERBQUNELG9EQUFLQTtnQkFDSkksT0FBT0E7Z0JBQ1BVLFNBQVMsQ0FBQ1Y7b0JBQ1JXLFFBQVFDLEdBQUcsQ0FBQyxZQUFZWjtvQkFDeEJFLGNBQWNGLE9BQU9JO2dCQUN2QjtnQkFDQUksV0FBV1gsa0ZBQWtCOzs7Ozs7WUFFOUJRLDZCQUNDOztrQ0FDRSw4REFBQ1M7d0JBQ0NDLE1BQU0sR0FBUSxPQUFMWCxNQUFLO3dCQUNkSixPQUFPQzt3QkFDUGUsVUFBVSxDQUFDQyxJQUFNZCxpQkFBaUJjLEVBQUVDLE1BQU0sQ0FBQ2xCLEtBQUssRUFBRUk7d0JBQ2xESSxXQUFXWCxxRkFBcUI7d0JBQ2hDdUIsYUFBWTs7Ozs7O2tDQUVkLDhEQUFDQzt3QkFBU0MsSUFBSSxHQUFRLE9BQUxsQixNQUFLO2tDQUNuQm1CLE9BQU9DLE9BQU8sQ0FBQ2xCLGNBQWNtQixHQUFHLENBQUM7Z0NBQUMsQ0FBQ0MsTUFBTUMsRUFBRTtpREFDMUMsOERBQUNDO2dDQUFrQjVCLE9BQU8wQjs7b0NBQ3ZCQTtvQ0FBSztvQ0FBRzVCLCtEQUFpQixDQUFDUSxZQUFZLENBQUNvQixLQUFLLENBQUM7b0NBQUM7OytCQURwQ0E7Ozs7Ozs7Ozs7Ozs2Q0FPbkIsOERBQUNHO2dCQUNDN0IsT0FBT0M7Z0JBQ1BlLFVBQVUsQ0FBQ0MsSUFBTWQsaUJBQWlCYyxFQUFFQyxNQUFNLENBQUNsQixLQUFLLEVBQUVJO2dCQUNsREksV0FBV1gscUZBQXFCOzBCQUUvQjBCLE9BQU9DLE9BQU8sQ0FBQ2xCLGNBQWNtQixHQUFHLENBQUM7d0JBQUMsQ0FBQ0MsTUFBTUMsRUFBRTt5Q0FDMUMsOERBQUNDO3dCQUFrQjVCLE9BQU8wQjs7NEJBQ3ZCQTs0QkFBSzs0QkFBRzVCLCtEQUFpQixDQUFDUSxZQUFZLENBQUNvQixLQUFLLENBQUM7NEJBQUM7O3VCQURwQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXpCO0tBbkRNM0I7QUFxRE4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvQ3VycmVuY3lDb252ZXJ0b3IvQ3VycmVuY3lJbnB1dC9DdXJyZW5jeUlucHV0LnRzeD85OTVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9JbnB1dC9JbnB1dFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9DdXJyZW5jeUNvbnZlcnRvci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IGN1cnJlbmN5RGVzYyB9IGZyb20gXCIuLi8uLi9AdHlwZXMvdHlwZXNcIjtcclxuaW1wb3J0IGN1cnJlbmN5VHJhbnNsYXRlIGZyb20gXCIuLi8uLi8uLi9kYXRhL2N1cnJlbmN5VHJhbnNsYXRlXCI7XHJcblxyXG5pbnRlcmZhY2UgQ3VycmVuY3lJbnB1dFByb3BzIHtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG4gIGN1cnJlbmN5OiBzdHJpbmc7XHJcbiAgb25WYWx1ZUNoYW5nZTogKHZhbHVlOiBzdHJpbmcsIHNpZGU6IHN0cmluZykgPT4gdm9pZDtcclxuICBvbkN1cnJlbmN5Q2hhbmdlOiAoY3VycmVuY3k6IHN0cmluZywgc2lkZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gIHNpZGU6IFwibGVmdFwiIHwgXCJyaWdodFwiO1xyXG4gIGZpbHRlckFjdGl2ZTogYm9vbGVhbjtcclxuICBjdXJyZW5jeURlc2M6IGN1cnJlbmN5RGVzYztcclxufVxyXG5cclxuY29uc3QgQ3VycmVuY3lJbnB1dDogUmVhY3QuRkM8Q3VycmVuY3lJbnB1dFByb3BzPiA9ICh7XHJcbiAgdmFsdWUsXHJcbiAgY3VycmVuY3ksXHJcbiAgb25WYWx1ZUNoYW5nZSxcclxuICBvbkN1cnJlbmN5Q2hhbmdlLFxyXG4gIHNpZGUsXHJcbiAgZmlsdGVyQWN0aXZlLFxyXG4gIGN1cnJlbmN5RGVzYyxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhcnRfbWFpbn0+XHJcbiAgICAgIDxJbnB1dFxyXG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICBvbklucHV0PXsodmFsdWUpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwidmFsdWUgPSBcIiwgdmFsdWUpO1xyXG4gICAgICAgICAgb25WYWx1ZUNoYW5nZSh2YWx1ZSwgc2lkZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9zdHlsZX1cclxuICAgICAgLz5cclxuICAgICAge2ZpbHRlckFjdGl2ZSA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGxpc3Q9e2Ake3NpZGV9LWN1cnJlbmNpZXNgfVxyXG4gICAgICAgICAgICB2YWx1ZT17Y3VycmVuY3l9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DdXJyZW5jeUNoYW5nZShlLnRhcmdldC52YWx1ZSwgc2lkZSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRyb3Bkb3duX3N0eWxlfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INGB0Y7QtNCwINC90LDQt9Cy0LDQvdC40LUg0LLQsNC70Y7RgtGLXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGF0YWxpc3QgaWQ9e2Ake3NpZGV9LWN1cnJlbmNpZXNgfT5cclxuICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKGN1cnJlbmN5RGVzYykubWFwKChbY29kZSwgX10pID0+IChcclxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Y29kZX0gdmFsdWU9e2NvZGV9PlxyXG4gICAgICAgICAgICAgICAge2NvZGV9ICh7Y3VycmVuY3lUcmFuc2xhdGVbY3VycmVuY3lEZXNjW2NvZGVdXX0pXHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kYXRhbGlzdD5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICB2YWx1ZT17Y3VycmVuY3l9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ3VycmVuY3lDaGFuZ2UoZS50YXJnZXQudmFsdWUsIHNpZGUpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZHJvcGRvd25fc3R5bGV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge09iamVjdC5lbnRyaWVzKGN1cnJlbmN5RGVzYykubWFwKChbY29kZSwgX10pID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2NvZGV9IHZhbHVlPXtjb2RlfT5cclxuICAgICAgICAgICAgICB7Y29kZX0gKHtjdXJyZW5jeVRyYW5zbGF0ZVtjdXJyZW5jeURlc2NbY29kZV1dfSlcclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXJyZW5jeUlucHV0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbnB1dCIsInN0eWxlcyIsImN1cnJlbmN5VHJhbnNsYXRlIiwiQ3VycmVuY3lJbnB1dCIsInZhbHVlIiwiY3VycmVuY3kiLCJvblZhbHVlQ2hhbmdlIiwib25DdXJyZW5jeUNoYW5nZSIsInNpZGUiLCJmaWx0ZXJBY3RpdmUiLCJjdXJyZW5jeURlc2MiLCJkaXYiLCJjbGFzc05hbWUiLCJwYXJ0X21haW4iLCJvbklucHV0IiwiY29uc29sZSIsImxvZyIsImlucHV0X3N0eWxlIiwiaW5wdXQiLCJsaXN0Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZHJvcGRvd25fc3R5bGUiLCJwbGFjZWhvbGRlciIsImRhdGFsaXN0IiwiaWQiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwiY29kZSIsIl8iLCJvcHRpb24iLCJzZWxlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/CurrencyConvertor/CurrencyInput/CurrencyInput.tsx\n"));

/***/ })

});