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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CurrencyConvertor_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CurrencyConvertor.module.css */ \"./src/Components/CurrencyConvertor/CurrencyConvertor.module.css\");\n/* harmony import */ var _CurrencyConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CurrencyConvertor_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Loading_Loading_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Loading/Loading.tsx */ \"./src/Components/CurrencyConvertor/Loading/Loading.tsx\");\n/* harmony import */ var _FilterCheckbox_FilterCheckbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../FilterCheckbox/FilterCheckbox */ \"./src/Components/CurrencyConvertor/FilterCheckbox/FilterCheckbox.tsx\");\n/* harmony import */ var _hooks_useCurrencyRates_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/useCurrencyRates.ts */ \"./src/hooks/useCurrencyRates.ts\");\n/* harmony import */ var _hooks_useCurrencyConverter_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useCurrencyConverter.ts */ \"./src/hooks/useCurrencyConverter.ts\");\n/* harmony import */ var _CurrencyInput_CurrencyInput_tsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../CurrencyInput/CurrencyInput.tsx */ \"./src/Components/CurrencyConvertor/CurrencyInput/CurrencyInput.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction CurrencyConvertor() {\n    _s();\n    const { rates, currencyDesc, isLoading, error } = (0,_hooks_useCurrencyRates_ts__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const convertCurrency = (0,_hooks_useCurrencyConverter_ts__WEBPACK_IMPORTED_MODULE_6__.useCurrencyConverter)(rates);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n    const [leftValue, setLeftValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"1\");\n    const [rightValue, setRightValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"1\");\n    const [leftCurrency, setLeftCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"USD\");\n    const [rightCurrency, setRightCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"USD\");\n    const [leftFilterActive, setLeftFilterActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [rightFilterActive, setRightFilterActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleCurrencyChange = (currency, side)=>{\n        if (side === \"left\") {\n            setLeftCurrency(currency);\n            setRightValue(convertCurrency(Number(leftValue), currency, rightCurrency));\n        } else {\n            setRightCurrency(currency);\n            setLeftValue(convertCurrency(Number(rightValue), currency, leftCurrency));\n        }\n    };\n    const handleInputChange = (value, side)=>{\n        if (side === \"left\") {\n            setLeftValue(value);\n            setRightValue(convertCurrency(Number(value), leftCurrency, rightCurrency));\n        } else {\n            setRightValue(value);\n            setLeftValue(convertCurrency(Number(value), rightCurrency, leftCurrency));\n        }\n    };\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Loading_Loading_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyConvertor\\\\CurrencyConvertor.tsx\",\n            lineNumber: 50,\n            columnNumber: 12\n        }, this);\n    }\n    if (error) {\n        router.replace(\"/Calculator\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_CurrencyConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().body_background),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_CurrencyConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().partWrapper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CurrencyInput_CurrencyInput_tsx__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        value: leftValue,\n                        currency: leftCurrency,\n                        onValueChange: handleInputChange,\n                        onCurrencyChange: handleCurrencyChange,\n                        side: \"left\",\n                        filterActive: leftFilterActive,\n                        currencyDesc: currencyDesc\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyConvertor\\\\CurrencyConvertor.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_CurrencyConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().checkboxWrapper),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterCheckbox_FilterCheckbox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            label: \"Ручной поиск валюты\",\n                            checked: leftFilterActive,\n                            onChange: ()=>setLeftFilterActive(!leftFilterActive)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyConvertor\\\\CurrencyConvertor.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyConvertor\\\\CurrencyConvertor.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyConvertor\\\\CurrencyConvertor.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (_CurrencyConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().conversion_equals),\n                children: \" = \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyConvertor\\\\CurrencyConvertor.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_CurrencyConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().partWrapper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CurrencyInput_CurrencyInput_tsx__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        value: rightValue,\n                        currency: rightCurrency,\n                        onValueChange: handleInputChange,\n                        onCurrencyChange: handleCurrencyChange,\n                        side: \"right\",\n                        filterActive: rightFilterActive,\n                        currencyDesc: currencyDesc\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyConvertor\\\\CurrencyConvertor.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_CurrencyConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().checkboxWrapper),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterCheckbox_FilterCheckbox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            label: \"Ручной поиск валюты\",\n                            checked: rightFilterActive,\n                            onChange: ()=>setRightFilterActive(!rightFilterActive)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyConvertor\\\\CurrencyConvertor.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyConvertor\\\\CurrencyConvertor.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyConvertor\\\\CurrencyConvertor.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyConvertor\\\\CurrencyConvertor.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_s(CurrencyConvertor, \"5NGW2cBHCN8Uq6NZTMXtVgp77po=\", false, function() {\n    return [\n        _hooks_useCurrencyRates_ts__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        _hooks_useCurrencyConverter_ts__WEBPACK_IMPORTED_MODULE_6__.useCurrencyConverter,\n        next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter\n    ];\n});\n_c = CurrencyConvertor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CurrencyConvertor);\nvar _c;\n$RefreshReg$(_c, \"CurrencyConvertor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9DdXJyZW5jeUNvbnZlcnRvci9DdXJyZW5jeUNvbnZlcnRvci9DdXJyZW5jeUNvbnZlcnRvci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNhO0FBQ1I7QUFDbUI7QUFFRTtBQUNZO0FBQ2Y7QUFDdkI7QUFFeEMsU0FBU1M7O0lBQ1AsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFlBQVksRUFBRUMsU0FBUyxFQUFFQyxLQUFLLEVBQUUsR0FBR1Isc0VBQWdCQTtJQUNsRSxNQUFNUyxrQkFBa0JSLG9GQUFvQkEsQ0FBQ0k7SUFDN0MsTUFBTUssU0FBU1Asc0RBQVNBO0lBSXhCLE1BQU0sQ0FBQ1EsV0FBV0MsYUFBYSxHQUFHaEIsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDaUIsWUFBWUMsY0FBYyxHQUFHbEIsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDbUIsY0FBY0MsZ0JBQWdCLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNxQixlQUFlQyxpQkFBaUIsR0FBR3RCLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQ3VCLGtCQUFrQkMsb0JBQW9CLEdBQUd4QiwrQ0FBUUEsQ0FBQztJQUN6RCxNQUFNLENBQUN5QixtQkFBbUJDLHFCQUFxQixHQUFHMUIsK0NBQVFBLENBQUM7SUFFM0QsTUFBTTJCLHVCQUF1QixDQUFDQyxVQUFrQkM7UUFDOUMsSUFBSUEsU0FBUyxRQUFRO1lBQ25CVCxnQkFBZ0JRO1lBQ2hCVixjQUNFTCxnQkFBZ0JpQixPQUFPZixZQUFZYSxVQUFVUDtRQUVqRCxPQUFPO1lBQ0xDLGlCQUFpQk07WUFDakJaLGFBQWFILGdCQUFnQmlCLE9BQU9iLGFBQWFXLFVBQVVUO1FBQzdEO0lBQ0Y7SUFFQSxNQUFNWSxvQkFBb0IsQ0FBQ0MsT0FBZUg7UUFDeEMsSUFBSUEsU0FBUyxRQUFRO1lBQ25CYixhQUFhZ0I7WUFDYmQsY0FDRUwsZ0JBQWdCaUIsT0FBT0UsUUFBUWIsY0FBY0U7UUFFakQsT0FBTztZQUNMSCxjQUFjYztZQUNkaEIsYUFBYUgsZ0JBQWdCaUIsT0FBT0UsUUFBUVgsZUFBZUY7UUFDN0Q7SUFDRjtJQUVBLElBQUlSLFdBQVc7UUFDYixxQkFBTyw4REFBQ1QsNERBQU9BOzs7OztJQUNqQjtJQUVBLElBQUlVLE9BQU87UUFDVEUsT0FBT21CLE9BQU8sQ0FBQztJQUVqQjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXbEMsc0ZBQXNCOzswQkFDcEMsOERBQUNpQztnQkFBSUMsV0FBV2xDLGtGQUFrQjs7a0NBQ2hDLDhEQUFDSyx3RUFBYUE7d0JBQ1owQixPQUFPakI7d0JBQ1BhLFVBQVVUO3dCQUNWbUIsZUFBZVA7d0JBQ2ZRLGtCQUFrQlo7d0JBQ2xCRSxNQUFLO3dCQUNMVyxjQUFjakI7d0JBQ2RiLGNBQWNBOzs7Ozs7a0NBRWhCLDhEQUFDd0I7d0JBQUlDLFdBQVdsQyxzRkFBc0I7a0NBQ3BDLDRFQUFDRSxzRUFBY0E7NEJBQ2J1QyxPQUFNOzRCQUNOQyxTQUFTcEI7NEJBQ1RxQixVQUFVLElBQU1wQixvQkFBb0IsQ0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUszQyw4REFBQ3NCO2dCQUFLVixXQUFXbEMsd0ZBQXdCOzBCQUFFOzs7Ozs7MEJBQzNDLDhEQUFDaUM7Z0JBQUlDLFdBQVdsQyxrRkFBa0I7O2tDQUNoQyw4REFBQ0ssd0VBQWFBO3dCQUNaMEIsT0FBT2Y7d0JBQ1BXLFVBQVVQO3dCQUNWaUIsZUFBZVA7d0JBQ2ZRLGtCQUFrQlo7d0JBQ2xCRSxNQUFLO3dCQUNMVyxjQUFjZjt3QkFDZGYsY0FBY0E7Ozs7OztrQ0FFaEIsOERBQUN3Qjt3QkFBSUMsV0FBV2xDLHNGQUFzQjtrQ0FDcEMsNEVBQUNFLHNFQUFjQTs0QkFDYnVDLE9BQU07NEJBQ05DLFNBQVNsQjs0QkFDVG1CLFVBQVUsSUFBTWxCLHFCQUFxQixDQUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbEQ7R0F6RlNqQjs7UUFDMkNKLGtFQUFnQkE7UUFDMUNDLGdGQUFvQkE7UUFDN0JFLGtEQUFTQTs7O0tBSGpCQztBQTJGVCwrREFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL0N1cnJlbmN5Q29udmVydG9yL0N1cnJlbmN5Q29udmVydG9yL0N1cnJlbmN5Q29udmVydG9yLnRzeD83MTM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9DdXJyZW5jeUNvbnZlcnRvci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9Mb2FkaW5nL0xvYWRpbmcudHN4XCI7XHJcbmltcG9ydCBGaWx0ZXJDaGVja2JveCBmcm9tIFwiLi8uLi9GaWx0ZXJDaGVja2JveC9GaWx0ZXJDaGVja2JveFwiO1xyXG5cclxuaW1wb3J0IHVzZUN1cnJlbmN5UmF0ZXMgZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZUN1cnJlbmN5UmF0ZXMudHNcIjtcclxuaW1wb3J0IHsgdXNlQ3VycmVuY3lDb252ZXJ0ZXIgfSBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlQ3VycmVuY3lDb252ZXJ0ZXIudHNcIjtcclxuaW1wb3J0IEN1cnJlbmN5SW5wdXQgZnJvbSBcIi4uL0N1cnJlbmN5SW5wdXQvQ3VycmVuY3lJbnB1dC50c3hcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5mdW5jdGlvbiBDdXJyZW5jeUNvbnZlcnRvcigpIHtcclxuICBjb25zdCB7IHJhdGVzLCBjdXJyZW5jeURlc2MsIGlzTG9hZGluZywgZXJyb3IgfSA9IHVzZUN1cnJlbmN5UmF0ZXMoKTtcclxuICBjb25zdCBjb252ZXJ0Q3VycmVuY3kgPSB1c2VDdXJyZW5jeUNvbnZlcnRlcihyYXRlcyk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgXHJcblxyXG5cclxuICBjb25zdCBbbGVmdFZhbHVlLCBzZXRMZWZ0VmFsdWVdID0gdXNlU3RhdGUoXCIxXCIpO1xyXG4gIGNvbnN0IFtyaWdodFZhbHVlLCBzZXRSaWdodFZhbHVlXSA9IHVzZVN0YXRlKFwiMVwiKTtcclxuICBjb25zdCBbbGVmdEN1cnJlbmN5LCBzZXRMZWZ0Q3VycmVuY3ldID0gdXNlU3RhdGUoXCJVU0RcIik7XHJcbiAgY29uc3QgW3JpZ2h0Q3VycmVuY3ksIHNldFJpZ2h0Q3VycmVuY3ldID0gdXNlU3RhdGUoXCJVU0RcIik7XHJcbiAgY29uc3QgW2xlZnRGaWx0ZXJBY3RpdmUsIHNldExlZnRGaWx0ZXJBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyaWdodEZpbHRlckFjdGl2ZSwgc2V0UmlnaHRGaWx0ZXJBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDdXJyZW5jeUNoYW5nZSA9IChjdXJyZW5jeTogc3RyaW5nLCBzaWRlOiBzdHJpbmcpID0+IHtcclxuICAgIGlmIChzaWRlID09PSBcImxlZnRcIikge1xyXG4gICAgICBzZXRMZWZ0Q3VycmVuY3koY3VycmVuY3kpO1xyXG4gICAgICBzZXRSaWdodFZhbHVlKFxyXG4gICAgICAgIGNvbnZlcnRDdXJyZW5jeShOdW1iZXIobGVmdFZhbHVlKSwgY3VycmVuY3ksIHJpZ2h0Q3VycmVuY3kpXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRSaWdodEN1cnJlbmN5KGN1cnJlbmN5KTtcclxuICAgICAgc2V0TGVmdFZhbHVlKGNvbnZlcnRDdXJyZW5jeShOdW1iZXIocmlnaHRWYWx1ZSksIGN1cnJlbmN5LCBsZWZ0Q3VycmVuY3kpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9ICh2YWx1ZTogc3RyaW5nLCBzaWRlOiBzdHJpbmcpID0+IHtcclxuICAgIGlmIChzaWRlID09PSBcImxlZnRcIikge1xyXG4gICAgICBzZXRMZWZ0VmFsdWUodmFsdWUpO1xyXG4gICAgICBzZXRSaWdodFZhbHVlKFxyXG4gICAgICAgIGNvbnZlcnRDdXJyZW5jeShOdW1iZXIodmFsdWUpLCBsZWZ0Q3VycmVuY3ksIHJpZ2h0Q3VycmVuY3kpXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRSaWdodFZhbHVlKHZhbHVlKTtcclxuICAgICAgc2V0TGVmdFZhbHVlKGNvbnZlcnRDdXJyZW5jeShOdW1iZXIodmFsdWUpLCByaWdodEN1cnJlbmN5LCBsZWZ0Q3VycmVuY3kpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPExvYWRpbmcgLz47XHJcbiAgfVxyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJvdXRlci5yZXBsYWNlKFwiL0NhbGN1bGF0b3JcIik7IFxyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHlfYmFja2dyb3VuZH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFydFdyYXBwZXJ9PlxyXG4gICAgICAgIDxDdXJyZW5jeUlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17bGVmdFZhbHVlfVxyXG4gICAgICAgICAgY3VycmVuY3k9e2xlZnRDdXJyZW5jeX1cclxuICAgICAgICAgIG9uVmFsdWVDaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgb25DdXJyZW5jeUNoYW5nZT17aGFuZGxlQ3VycmVuY3lDaGFuZ2V9XHJcbiAgICAgICAgICBzaWRlPVwibGVmdFwiXHJcbiAgICAgICAgICBmaWx0ZXJBY3RpdmU9e2xlZnRGaWx0ZXJBY3RpdmV9XHJcbiAgICAgICAgICBjdXJyZW5jeURlc2M9e2N1cnJlbmN5RGVzY31cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2tib3hXcmFwcGVyfT5cclxuICAgICAgICAgIDxGaWx0ZXJDaGVja2JveFxyXG4gICAgICAgICAgICBsYWJlbD1cItCg0YPRh9C90L7QuSDQv9C+0LjRgdC6INCy0LDQu9GO0YLRi1wiXHJcbiAgICAgICAgICAgIGNoZWNrZWQ9e2xlZnRGaWx0ZXJBY3RpdmV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRMZWZ0RmlsdGVyQWN0aXZlKCFsZWZ0RmlsdGVyQWN0aXZlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udmVyc2lvbl9lcXVhbHN9PiA9IDwvc3Bhbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYXJ0V3JhcHBlcn0+XHJcbiAgICAgICAgPEN1cnJlbmN5SW5wdXRcclxuICAgICAgICAgIHZhbHVlPXtyaWdodFZhbHVlfVxyXG4gICAgICAgICAgY3VycmVuY3k9e3JpZ2h0Q3VycmVuY3l9XHJcbiAgICAgICAgICBvblZhbHVlQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgIG9uQ3VycmVuY3lDaGFuZ2U9e2hhbmRsZUN1cnJlbmN5Q2hhbmdlfVxyXG4gICAgICAgICAgc2lkZT1cInJpZ2h0XCJcclxuICAgICAgICAgIGZpbHRlckFjdGl2ZT17cmlnaHRGaWx0ZXJBY3RpdmV9XHJcbiAgICAgICAgICBjdXJyZW5jeURlc2M9e2N1cnJlbmN5RGVzY31cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2tib3hXcmFwcGVyfT5cclxuICAgICAgICAgIDxGaWx0ZXJDaGVja2JveFxyXG4gICAgICAgICAgICBsYWJlbD1cItCg0YPRh9C90L7QuSDQv9C+0LjRgdC6INCy0LDQu9GO0YLRi1wiXHJcbiAgICAgICAgICAgIGNoZWNrZWQ9e3JpZ2h0RmlsdGVyQWN0aXZlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0UmlnaHRGaWx0ZXJBY3RpdmUoIXJpZ2h0RmlsdGVyQWN0aXZlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VycmVuY3lDb252ZXJ0b3I7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiTG9hZGluZyIsIkZpbHRlckNoZWNrYm94IiwidXNlQ3VycmVuY3lSYXRlcyIsInVzZUN1cnJlbmN5Q29udmVydGVyIiwiQ3VycmVuY3lJbnB1dCIsInVzZVJvdXRlciIsIkN1cnJlbmN5Q29udmVydG9yIiwicmF0ZXMiLCJjdXJyZW5jeURlc2MiLCJpc0xvYWRpbmciLCJlcnJvciIsImNvbnZlcnRDdXJyZW5jeSIsInJvdXRlciIsImxlZnRWYWx1ZSIsInNldExlZnRWYWx1ZSIsInJpZ2h0VmFsdWUiLCJzZXRSaWdodFZhbHVlIiwibGVmdEN1cnJlbmN5Iiwic2V0TGVmdEN1cnJlbmN5IiwicmlnaHRDdXJyZW5jeSIsInNldFJpZ2h0Q3VycmVuY3kiLCJsZWZ0RmlsdGVyQWN0aXZlIiwic2V0TGVmdEZpbHRlckFjdGl2ZSIsInJpZ2h0RmlsdGVyQWN0aXZlIiwic2V0UmlnaHRGaWx0ZXJBY3RpdmUiLCJoYW5kbGVDdXJyZW5jeUNoYW5nZSIsImN1cnJlbmN5Iiwic2lkZSIsIk51bWJlciIsImhhbmRsZUlucHV0Q2hhbmdlIiwidmFsdWUiLCJyZXBsYWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiYm9keV9iYWNrZ3JvdW5kIiwicGFydFdyYXBwZXIiLCJvblZhbHVlQ2hhbmdlIiwib25DdXJyZW5jeUNoYW5nZSIsImZpbHRlckFjdGl2ZSIsImNoZWNrYm94V3JhcHBlciIsImxhYmVsIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwic3BhbiIsImNvbnZlcnNpb25fZXF1YWxzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/CurrencyConvertor/CurrencyConvertor/CurrencyConvertor.tsx\n"));

/***/ })

});