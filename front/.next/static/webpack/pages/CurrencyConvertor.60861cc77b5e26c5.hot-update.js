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

/***/ "./src/Components/CurrencyConvertor/CurrencyConvertor/CurrencyConvertor.tsx":
/*!**********************************************************************************!*\
  !*** ./src/Components/CurrencyConvertor/CurrencyConvertor/CurrencyConvertor.tsx ***!
  \**********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CurrencyConvertor_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CurrencyConvertor.module.css */ \"./src/Components/CurrencyConvertor/CurrencyConvertor.module.css\");\n/* harmony import */ var _CurrencyConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CurrencyConvertor_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Loading_Loading_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Loading/Loading.tsx */ \"./src/Components/CurrencyConvertor/Loading/Loading.tsx\");\n/* harmony import */ var _FilterCheckbox_FilterCheckbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../FilterCheckbox/FilterCheckbox */ \"./src/Components/CurrencyConvertor/FilterCheckbox/FilterCheckbox.tsx\");\n/* harmony import */ var _hooks_useCurrencyRates_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/useCurrencyRates.ts */ \"./src/hooks/useCurrencyRates.ts\");\n/* harmony import */ var _hooks_useCurrencyConverter_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useCurrencyConverter.ts */ \"./src/hooks/useCurrencyConverter.ts\");\n/* harmony import */ var _CurrencyInput_CurrencyInput_tsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../CurrencyInput/CurrencyInput.tsx */ \"./src/Components/CurrencyConvertor/CurrencyInput/CurrencyInput.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction CurrencyConvertor() {\n    _s();\n    const { rates, currencyDesc, isLoading, error } = (0,_hooks_useCurrencyRates_ts__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const convertCurrency = (0,_hooks_useCurrencyConverter_ts__WEBPACK_IMPORTED_MODULE_6__.useCurrencyConverter)(rates);\n    const [leftValue, setLeftValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"1\");\n    const [rightValue, setRightValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"1\");\n    const [leftCurrency, setLeftCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"USD\");\n    const [rightCurrency, setRightCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"USD\");\n    const [leftFilterActive, setLeftFilterActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [rightFilterActive, setRightFilterActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleCurrencyChange = (currency, side)=>{\n        if (side === \"left\") {\n            setLeftCurrency(currency);\n            setRightValue(convertCurrency(Number(leftValue), currency, rightCurrency));\n        } else {\n            setRightCurrency(currency);\n            setLeftValue(convertCurrency(Number(rightValue), currency, leftCurrency));\n        }\n    };\n    const handleInputChange = (value, side)=>{\n        if (side === \"left\") {\n            setLeftValue(value);\n            setRightValue(convertCurrency(Number(value), leftCurrency, rightCurrency));\n        } else {\n            setRightValue(value);\n            setLeftValue(convertCurrency(Number(value), rightCurrency, leftCurrency));\n        }\n    };\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Loading_Loading_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyConvertor\\\\CurrencyConvertor.tsx\",\n            lineNumber: 46,\n            columnNumber: 12\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Loading_Loading_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyConvertor\\\\CurrencyConvertor.tsx\",\n            lineNumber: 50,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_CurrencyConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().body_background),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_CurrencyConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().partWrapper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CurrencyInput_CurrencyInput_tsx__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        value: leftValue,\n                        currency: leftCurrency,\n                        onValueChange: handleInputChange,\n                        onCurrencyChange: handleCurrencyChange,\n                        side: \"left\",\n                        filterActive: leftFilterActive,\n                        currencyDesc: currencyDesc\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyConvertor\\\\CurrencyConvertor.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_CurrencyConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().checkboxWrapper),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterCheckbox_FilterCheckbox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            label: \"Ручной поиск валюты\",\n                            checked: leftFilterActive,\n                            onChange: ()=>setLeftFilterActive(!leftFilterActive)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyConvertor\\\\CurrencyConvertor.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyConvertor\\\\CurrencyConvertor.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyConvertor\\\\CurrencyConvertor.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (_CurrencyConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().conversion_equals),\n                children: \" = \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyConvertor\\\\CurrencyConvertor.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_CurrencyConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().partWrapper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CurrencyInput_CurrencyInput_tsx__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        value: rightValue,\n                        currency: rightCurrency,\n                        onValueChange: handleInputChange,\n                        onCurrencyChange: handleCurrencyChange,\n                        side: \"right\",\n                        filterActive: rightFilterActive,\n                        currencyDesc: currencyDesc\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyConvertor\\\\CurrencyConvertor.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_CurrencyConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().checkboxWrapper),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterCheckbox_FilterCheckbox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            label: \"Ручной поиск валюты\",\n                            checked: rightFilterActive,\n                            onChange: ()=>setRightFilterActive(!rightFilterActive)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyConvertor\\\\CurrencyConvertor.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyConvertor\\\\CurrencyConvertor.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyConvertor\\\\CurrencyConvertor.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyConvertor\\\\CurrencyConvertor.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(CurrencyConvertor, \"TdL1L4L3JD/Q+VVZvdSvABV+a1Y=\", false, function() {\n    return [\n        _hooks_useCurrencyRates_ts__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        _hooks_useCurrencyConverter_ts__WEBPACK_IMPORTED_MODULE_6__.useCurrencyConverter\n    ];\n});\n_c = CurrencyConvertor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CurrencyConvertor);\nvar _c;\n$RefreshReg$(_c, \"CurrencyConvertor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9DdXJyZW5jeUNvbnZlcnRvci9DdXJyZW5jeUNvbnZlcnRvci9DdXJyZW5jeUNvbnZlcnRvci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDYTtBQUNSO0FBQ21CO0FBRUU7QUFDWTtBQUNmO0FBRS9ELFNBQVNROztJQUNQLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxZQUFZLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxFQUFFLEdBQUdQLHNFQUFnQkE7SUFDbEUsTUFBTVEsa0JBQWtCUCxvRkFBb0JBLENBQUNHO0lBRTdDLE1BQU0sQ0FBQ0ssV0FBV0MsYUFBYSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNlLFlBQVlDLGNBQWMsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2lCLGNBQWNDLGdCQUFnQixHQUFHbEIsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDbUIsZUFBZUMsaUJBQWlCLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNxQixrQkFBa0JDLG9CQUFvQixHQUFHdEIsK0NBQVFBLENBQUM7SUFDekQsTUFBTSxDQUFDdUIsbUJBQW1CQyxxQkFBcUIsR0FBR3hCLCtDQUFRQSxDQUFDO0lBRTNELE1BQU15Qix1QkFBdUIsQ0FBQ0MsVUFBa0JDO1FBQzlDLElBQUlBLFNBQVMsUUFBUTtZQUNuQlQsZ0JBQWdCUTtZQUNoQlYsY0FDRUosZ0JBQWdCZ0IsT0FBT2YsWUFBWWEsVUFBVVA7UUFFakQsT0FBTztZQUNMQyxpQkFBaUJNO1lBQ2pCWixhQUFhRixnQkFBZ0JnQixPQUFPYixhQUFhVyxVQUFVVDtRQUM3RDtJQUNGO0lBRUEsTUFBTVksb0JBQW9CLENBQUNDLE9BQWVIO1FBQ3hDLElBQUlBLFNBQVMsUUFBUTtZQUNuQmIsYUFBYWdCO1lBQ2JkLGNBQ0VKLGdCQUFnQmdCLE9BQU9FLFFBQVFiLGNBQWNFO1FBRWpELE9BQU87WUFDTEgsY0FBY2M7WUFDZGhCLGFBQWFGLGdCQUFnQmdCLE9BQU9FLFFBQVFYLGVBQWVGO1FBQzdEO0lBQ0Y7SUFFQSxJQUFJUCxXQUFXO1FBQ2IscUJBQU8sOERBQUNSLDREQUFPQTs7Ozs7SUFDakI7SUFFQSxJQUFJUyxPQUFPO1FBQ1QscUJBQU8sOERBQUNULDREQUFPQTs7Ozs7SUFDakI7SUFFQSxxQkFDRSw4REFBQzZCO1FBQUlDLFdBQVcvQixzRkFBc0I7OzBCQUNwQyw4REFBQzhCO2dCQUFJQyxXQUFXL0Isa0ZBQWtCOztrQ0FDaEMsOERBQUNLLHdFQUFhQTt3QkFDWndCLE9BQU9qQjt3QkFDUGEsVUFBVVQ7d0JBQ1ZrQixlQUFlTjt3QkFDZk8sa0JBQWtCWDt3QkFDbEJFLE1BQUs7d0JBQ0xVLGNBQWNoQjt3QkFDZFosY0FBY0E7Ozs7OztrQ0FFaEIsOERBQUNzQjt3QkFBSUMsV0FBVy9CLHNGQUFzQjtrQ0FDcEMsNEVBQUNFLHNFQUFjQTs0QkFDYm9DLE9BQU07NEJBQ05DLFNBQVNuQjs0QkFDVG9CLFVBQVUsSUFBTW5CLG9CQUFvQixDQUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSzNDLDhEQUFDcUI7Z0JBQUtWLFdBQVcvQix3RkFBd0I7MEJBQUU7Ozs7OzswQkFDM0MsOERBQUM4QjtnQkFBSUMsV0FBVy9CLGtGQUFrQjs7a0NBQ2hDLDhEQUFDSyx3RUFBYUE7d0JBQ1p3QixPQUFPZjt3QkFDUFcsVUFBVVA7d0JBQ1ZnQixlQUFlTjt3QkFDZk8sa0JBQWtCWDt3QkFDbEJFLE1BQUs7d0JBQ0xVLGNBQWNkO3dCQUNkZCxjQUFjQTs7Ozs7O2tDQUVoQiw4REFBQ3NCO3dCQUFJQyxXQUFXL0Isc0ZBQXNCO2tDQUNwQyw0RUFBQ0Usc0VBQWNBOzRCQUNib0MsT0FBTTs0QkFDTkMsU0FBU2pCOzRCQUNUa0IsVUFBVSxJQUFNakIscUJBQXFCLENBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1sRDtHQXJGU2hCOztRQUMyQ0gsa0VBQWdCQTtRQUMxQ0MsZ0ZBQW9CQTs7O0tBRnJDRTtBQXVGVCwrREFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL0N1cnJlbmN5Q29udmVydG9yL0N1cnJlbmN5Q29udmVydG9yL0N1cnJlbmN5Q29udmVydG9yLnRzeD83MTM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9DdXJyZW5jeUNvbnZlcnRvci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9Mb2FkaW5nL0xvYWRpbmcudHN4XCI7XHJcbmltcG9ydCBGaWx0ZXJDaGVja2JveCBmcm9tIFwiLi8uLi9GaWx0ZXJDaGVja2JveC9GaWx0ZXJDaGVja2JveFwiO1xyXG5cclxuaW1wb3J0IHVzZUN1cnJlbmN5UmF0ZXMgZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZUN1cnJlbmN5UmF0ZXMudHNcIjtcclxuaW1wb3J0IHsgdXNlQ3VycmVuY3lDb252ZXJ0ZXIgfSBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlQ3VycmVuY3lDb252ZXJ0ZXIudHNcIjtcclxuaW1wb3J0IEN1cnJlbmN5SW5wdXQgZnJvbSBcIi4uL0N1cnJlbmN5SW5wdXQvQ3VycmVuY3lJbnB1dC50c3hcIjtcclxuXHJcbmZ1bmN0aW9uIEN1cnJlbmN5Q29udmVydG9yKCkge1xyXG4gIGNvbnN0IHsgcmF0ZXMsIGN1cnJlbmN5RGVzYywgaXNMb2FkaW5nLCBlcnJvciB9ID0gdXNlQ3VycmVuY3lSYXRlcygpO1xyXG4gIGNvbnN0IGNvbnZlcnRDdXJyZW5jeSA9IHVzZUN1cnJlbmN5Q29udmVydGVyKHJhdGVzKTtcclxuXHJcbiAgY29uc3QgW2xlZnRWYWx1ZSwgc2V0TGVmdFZhbHVlXSA9IHVzZVN0YXRlKFwiMVwiKTtcclxuICBjb25zdCBbcmlnaHRWYWx1ZSwgc2V0UmlnaHRWYWx1ZV0gPSB1c2VTdGF0ZShcIjFcIik7XHJcbiAgY29uc3QgW2xlZnRDdXJyZW5jeSwgc2V0TGVmdEN1cnJlbmN5XSA9IHVzZVN0YXRlKFwiVVNEXCIpO1xyXG4gIGNvbnN0IFtyaWdodEN1cnJlbmN5LCBzZXRSaWdodEN1cnJlbmN5XSA9IHVzZVN0YXRlKFwiVVNEXCIpO1xyXG4gIGNvbnN0IFtsZWZ0RmlsdGVyQWN0aXZlLCBzZXRMZWZ0RmlsdGVyQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcmlnaHRGaWx0ZXJBY3RpdmUsIHNldFJpZ2h0RmlsdGVyQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ3VycmVuY3lDaGFuZ2UgPSAoY3VycmVuY3k6IHN0cmluZywgc2lkZTogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAoc2lkZSA9PT0gXCJsZWZ0XCIpIHtcclxuICAgICAgc2V0TGVmdEN1cnJlbmN5KGN1cnJlbmN5KTtcclxuICAgICAgc2V0UmlnaHRWYWx1ZShcclxuICAgICAgICBjb252ZXJ0Q3VycmVuY3koTnVtYmVyKGxlZnRWYWx1ZSksIGN1cnJlbmN5LCByaWdodEN1cnJlbmN5KVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0UmlnaHRDdXJyZW5jeShjdXJyZW5jeSk7XHJcbiAgICAgIHNldExlZnRWYWx1ZShjb252ZXJ0Q3VycmVuY3koTnVtYmVyKHJpZ2h0VmFsdWUpLCBjdXJyZW5jeSwgbGVmdEN1cnJlbmN5KSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAodmFsdWU6IHN0cmluZywgc2lkZTogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAoc2lkZSA9PT0gXCJsZWZ0XCIpIHtcclxuICAgICAgc2V0TGVmdFZhbHVlKHZhbHVlKTtcclxuICAgICAgc2V0UmlnaHRWYWx1ZShcclxuICAgICAgICBjb252ZXJ0Q3VycmVuY3koTnVtYmVyKHZhbHVlKSwgbGVmdEN1cnJlbmN5LCByaWdodEN1cnJlbmN5KVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0UmlnaHRWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgIHNldExlZnRWYWx1ZShjb252ZXJ0Q3VycmVuY3koTnVtYmVyKHZhbHVlKSwgcmlnaHRDdXJyZW5jeSwgbGVmdEN1cnJlbmN5KSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxMb2FkaW5nIC8+O1xyXG4gIH1cclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICByZXR1cm4gPExvYWRpbmcgLz47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5X2JhY2tncm91bmR9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhcnRXcmFwcGVyfT5cclxuICAgICAgICA8Q3VycmVuY3lJbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e2xlZnRWYWx1ZX1cclxuICAgICAgICAgIGN1cnJlbmN5PXtsZWZ0Q3VycmVuY3l9XHJcbiAgICAgICAgICBvblZhbHVlQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgIG9uQ3VycmVuY3lDaGFuZ2U9e2hhbmRsZUN1cnJlbmN5Q2hhbmdlfVxyXG4gICAgICAgICAgc2lkZT1cImxlZnRcIlxyXG4gICAgICAgICAgZmlsdGVyQWN0aXZlPXtsZWZ0RmlsdGVyQWN0aXZlfVxyXG4gICAgICAgICAgY3VycmVuY3lEZXNjPXtjdXJyZW5jeURlc2N9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoZWNrYm94V3JhcHBlcn0+XHJcbiAgICAgICAgICA8RmlsdGVyQ2hlY2tib3hcclxuICAgICAgICAgICAgbGFiZWw9XCLQoNGD0YfQvdC+0Lkg0L/QvtC40YHQuiDQstCw0LvRjtGC0YtcIlxyXG4gICAgICAgICAgICBjaGVja2VkPXtsZWZ0RmlsdGVyQWN0aXZlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0TGVmdEZpbHRlckFjdGl2ZSghbGVmdEZpbHRlckFjdGl2ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbnZlcnNpb25fZXF1YWxzfT4gPSA8L3NwYW4+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFydFdyYXBwZXJ9PlxyXG4gICAgICAgIDxDdXJyZW5jeUlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17cmlnaHRWYWx1ZX1cclxuICAgICAgICAgIGN1cnJlbmN5PXtyaWdodEN1cnJlbmN5fVxyXG4gICAgICAgICAgb25WYWx1ZUNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICBvbkN1cnJlbmN5Q2hhbmdlPXtoYW5kbGVDdXJyZW5jeUNoYW5nZX1cclxuICAgICAgICAgIHNpZGU9XCJyaWdodFwiXHJcbiAgICAgICAgICBmaWx0ZXJBY3RpdmU9e3JpZ2h0RmlsdGVyQWN0aXZlfVxyXG4gICAgICAgICAgY3VycmVuY3lEZXNjPXtjdXJyZW5jeURlc2N9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoZWNrYm94V3JhcHBlcn0+XHJcbiAgICAgICAgICA8RmlsdGVyQ2hlY2tib3hcclxuICAgICAgICAgICAgbGFiZWw9XCLQoNGD0YfQvdC+0Lkg0L/QvtC40YHQuiDQstCw0LvRjtGC0YtcIlxyXG4gICAgICAgICAgICBjaGVja2VkPXtyaWdodEZpbHRlckFjdGl2ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldFJpZ2h0RmlsdGVyQWN0aXZlKCFyaWdodEZpbHRlckFjdGl2ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1cnJlbmN5Q29udmVydG9yO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkxvYWRpbmciLCJGaWx0ZXJDaGVja2JveCIsInVzZUN1cnJlbmN5UmF0ZXMiLCJ1c2VDdXJyZW5jeUNvbnZlcnRlciIsIkN1cnJlbmN5SW5wdXQiLCJDdXJyZW5jeUNvbnZlcnRvciIsInJhdGVzIiwiY3VycmVuY3lEZXNjIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJjb252ZXJ0Q3VycmVuY3kiLCJsZWZ0VmFsdWUiLCJzZXRMZWZ0VmFsdWUiLCJyaWdodFZhbHVlIiwic2V0UmlnaHRWYWx1ZSIsImxlZnRDdXJyZW5jeSIsInNldExlZnRDdXJyZW5jeSIsInJpZ2h0Q3VycmVuY3kiLCJzZXRSaWdodEN1cnJlbmN5IiwibGVmdEZpbHRlckFjdGl2ZSIsInNldExlZnRGaWx0ZXJBY3RpdmUiLCJyaWdodEZpbHRlckFjdGl2ZSIsInNldFJpZ2h0RmlsdGVyQWN0aXZlIiwiaGFuZGxlQ3VycmVuY3lDaGFuZ2UiLCJjdXJyZW5jeSIsInNpZGUiLCJOdW1iZXIiLCJoYW5kbGVJbnB1dENoYW5nZSIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwiYm9keV9iYWNrZ3JvdW5kIiwicGFydFdyYXBwZXIiLCJvblZhbHVlQ2hhbmdlIiwib25DdXJyZW5jeUNoYW5nZSIsImZpbHRlckFjdGl2ZSIsImNoZWNrYm94V3JhcHBlciIsImxhYmVsIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwic3BhbiIsImNvbnZlcnNpb25fZXF1YWxzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/CurrencyConvertor/CurrencyConvertor/CurrencyConvertor.tsx\n"));

/***/ })

});