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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CurrencyConvertor_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CurrencyConvertor.module.css */ \"./src/Components/CurrencyConvertor/CurrencyConvertor.module.css\");\n/* harmony import */ var _CurrencyConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CurrencyConvertor_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Loading_Loading_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Loading/Loading.tsx */ \"./src/Components/CurrencyConvertor/Loading/Loading.tsx\");\n/* harmony import */ var _FilterCheckbox_FilterCheckbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../FilterCheckbox/FilterCheckbox */ \"./src/Components/CurrencyConvertor/FilterCheckbox/FilterCheckbox.tsx\");\n/* harmony import */ var _hooks_useCurrencyRates_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/useCurrencyRates.ts */ \"./src/hooks/useCurrencyRates.ts\");\n/* harmony import */ var _hooks_useCurrencyConverter_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useCurrencyConverter.ts */ \"./src/hooks/useCurrencyConverter.ts\");\n/* harmony import */ var _CurrencyInput_CurrencyInput_tsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../CurrencyInput/CurrencyInput.tsx */ \"./src/Components/CurrencyConvertor/CurrencyInput/CurrencyInput.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction CurrencyConvertor() {\n    _s();\n    const { rates, currencyDesc, isLoading, error } = (0,_hooks_useCurrencyRates_ts__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const convertCurrency = (0,_hooks_useCurrencyConverter_ts__WEBPACK_IMPORTED_MODULE_6__.useCurrencyConverter)(rates);\n    const [leftValue, setLeftValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"1\");\n    const [rightValue, setRightValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"1\");\n    const [leftCurrency, setLeftCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"USD\");\n    const [rightCurrency, setRightCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"USD\");\n    const [leftFilterActive, setLeftFilterActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [rightFilterActive, setRightFilterActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleCurrencyChange = (currency, side)=>{\n        if (side === \"left\") {\n            setLeftCurrency(currency);\n            setRightValue(convertCurrency(Number(leftValue), currency, rightCurrency));\n        } else {\n            setRightCurrency(currency);\n            setLeftValue(convertCurrency(Number(rightValue), currency, leftCurrency));\n        }\n    };\n    const handleInputChange = (value, side)=>{\n        if (side === \"left\") {\n            setLeftValue(value);\n            setRightValue(convertCurrency(Number(value), leftCurrency, rightCurrency));\n        } else {\n            setRightValue(value);\n            console.log(convertCurrency(Number(value), leftCurrency, rightCurrency));\n            setLeftValue(convertCurrency(Number(value), rightCurrency, rightCurrency));\n        }\n    };\n    console.log(currencyDesc);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Loading_Loading_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyConvertor\\\\CurrencyConvertor.tsx\",\n            lineNumber: 54,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_CurrencyConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().body_background),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_CurrencyConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().partWrapper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CurrencyInput_CurrencyInput_tsx__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        value: leftValue,\n                        currency: leftCurrency,\n                        onValueChange: handleInputChange,\n                        onCurrencyChange: handleCurrencyChange,\n                        side: \"left\",\n                        filterActive: leftFilterActive,\n                        currencyDesc: currencyDesc\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyConvertor\\\\CurrencyConvertor.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_CurrencyConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().checkboxWrapper),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterCheckbox_FilterCheckbox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            label: \"Ручной поиск валюты\",\n                            checked: leftFilterActive,\n                            onChange: ()=>setLeftFilterActive(!leftFilterActive)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyConvertor\\\\CurrencyConvertor.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyConvertor\\\\CurrencyConvertor.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyConvertor\\\\CurrencyConvertor.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (_CurrencyConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().conversion_equals),\n                children: \" = \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyConvertor\\\\CurrencyConvertor.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_CurrencyConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().partWrapper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CurrencyInput_CurrencyInput_tsx__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        value: rightValue,\n                        currency: rightCurrency,\n                        onValueChange: handleInputChange,\n                        onCurrencyChange: handleCurrencyChange,\n                        side: \"right\",\n                        filterActive: rightFilterActive,\n                        currencyDesc: currencyDesc\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyConvertor\\\\CurrencyConvertor.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_CurrencyConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().checkboxWrapper),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterCheckbox_FilterCheckbox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            label: \"Ручной поиск валюты\",\n                            checked: rightFilterActive,\n                            onChange: ()=>setRightFilterActive(!rightFilterActive)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyConvertor\\\\CurrencyConvertor.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyConvertor\\\\CurrencyConvertor.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyConvertor\\\\CurrencyConvertor.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\alexa\\\\OneDrive\\\\Desktop\\\\web\\\\pet\\\\front\\\\src\\\\Components\\\\CurrencyConvertor\\\\CurrencyConvertor\\\\CurrencyConvertor.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(CurrencyConvertor, \"TdL1L4L3JD/Q+VVZvdSvABV+a1Y=\", false, function() {\n    return [\n        _hooks_useCurrencyRates_ts__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        _hooks_useCurrencyConverter_ts__WEBPACK_IMPORTED_MODULE_6__.useCurrencyConverter\n    ];\n});\n_c = CurrencyConvertor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CurrencyConvertor);\nvar _c;\n$RefreshReg$(_c, \"CurrencyConvertor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9DdXJyZW5jeUNvbnZlcnRvci9DdXJyZW5jeUNvbnZlcnRvci9DdXJyZW5jeUNvbnZlcnRvci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFFRTtBQUNSO0FBQ21CO0FBRUU7QUFDWTtBQUNmO0FBRy9ELFNBQVNROztJQUNQLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxZQUFZLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxFQUFFLEdBQUdQLHNFQUFnQkE7SUFDbEUsTUFBTVEsa0JBQWtCUCxvRkFBb0JBLENBQUNHO0lBRTdDLE1BQU0sQ0FBQ0ssV0FBV0MsYUFBYSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNlLFlBQVlDLGNBQWMsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2lCLGNBQWNDLGdCQUFnQixHQUFHbEIsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDbUIsZUFBZUMsaUJBQWlCLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNxQixrQkFBa0JDLG9CQUFvQixHQUFHdEIsK0NBQVFBLENBQUM7SUFDekQsTUFBTSxDQUFDdUIsbUJBQW1CQyxxQkFBcUIsR0FBR3hCLCtDQUFRQSxDQUFDO0lBRTNELE1BQU15Qix1QkFBdUIsQ0FBQ0MsVUFBa0JDO1FBQzlDLElBQUlBLFNBQVMsUUFBUTtZQUNuQlQsZ0JBQWdCUTtZQUNoQlYsY0FDRUosZ0JBQWdCZ0IsT0FBT2YsWUFBWWEsVUFBVVA7UUFFakQsT0FBTztZQUNMQyxpQkFBaUJNO1lBQ2pCWixhQUFhRixnQkFBZ0JnQixPQUFPYixhQUFhVyxVQUFVVDtRQUM3RDtJQUNGO0lBRUEsTUFBTVksb0JBQW9CLENBQUNDLE9BQWVIO1FBQ3hDLElBQUlBLFNBQVMsUUFBUTtZQUNuQmIsYUFBYWdCO1lBRWJkLGNBQ0VKLGdCQUFnQmdCLE9BQU9FLFFBQVFiLGNBQWNFO1FBRWpELE9BQU87WUFDTEgsY0FBY2M7WUFDZEMsUUFBUUMsR0FBRyxDQUFDcEIsZ0JBQWdCZ0IsT0FBT0UsUUFBUWIsY0FBY0U7WUFDekRMLGFBQ0VGLGdCQUFnQmdCLE9BQU9FLFFBQVFYLGVBQWVBO1FBRWxEO0lBQ0Y7SUFFQVksUUFBUUMsR0FBRyxDQUFDdkI7SUFFWixJQUFJQyxXQUFXO1FBQ2IscUJBQU8sOERBQUNSLDREQUFPQTs7Ozs7SUFDakI7SUFFQSxxQkFDRSw4REFBQytCO1FBQUlDLFdBQVdqQyxzRkFBc0I7OzBCQUNwQyw4REFBQ2dDO2dCQUFJQyxXQUFXakMsa0ZBQWtCOztrQ0FDaEMsOERBQUNLLHdFQUFhQTt3QkFDWndCLE9BQU9qQjt3QkFDUGEsVUFBVVQ7d0JBQ1ZvQixlQUFlUjt3QkFDZlMsa0JBQWtCYjt3QkFDbEJFLE1BQUs7d0JBQ0xZLGNBQWNsQjt3QkFDZFosY0FBY0E7Ozs7OztrQ0FFaEIsOERBQUN3Qjt3QkFBSUMsV0FBV2pDLHNGQUFzQjtrQ0FDcEMsNEVBQUNFLHNFQUFjQTs0QkFDYnNDLE9BQU07NEJBQ05DLFNBQVNyQjs0QkFDVHNCLFVBQVUsSUFBTXJCLG9CQUFvQixDQUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSzNDLDhEQUFDdUI7Z0JBQUtWLFdBQVdqQyx3RkFBd0I7MEJBQUU7Ozs7OzswQkFDM0MsOERBQUNnQztnQkFBSUMsV0FBV2pDLGtGQUFrQjs7a0NBQ2hDLDhEQUFDSyx3RUFBYUE7d0JBQ1p3QixPQUFPZjt3QkFDUFcsVUFBVVA7d0JBQ1ZrQixlQUFlUjt3QkFDZlMsa0JBQWtCYjt3QkFDbEJFLE1BQUs7d0JBQ0xZLGNBQWNoQjt3QkFDZGQsY0FBY0E7Ozs7OztrQ0FFaEIsOERBQUN3Qjt3QkFBSUMsV0FBV2pDLHNGQUFzQjtrQ0FDcEMsNEVBQUNFLHNFQUFjQTs0QkFDYnNDLE9BQU07NEJBQ05DLFNBQVNuQjs0QkFDVG9CLFVBQVUsSUFBTW5CLHFCQUFxQixDQUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbEQ7R0F2RlNoQjs7UUFDMkNILGtFQUFnQkE7UUFDMUNDLGdGQUFvQkE7OztLQUZyQ0U7QUF5RlQsK0RBQWVBLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvQ29tcG9uZW50cy9DdXJyZW5jeUNvbnZlcnRvci9DdXJyZW5jeUNvbnZlcnRvci9DdXJyZW5jeUNvbnZlcnRvci50c3g/NzEzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY3VycmVuY3lUcmFuc2xhdGUgZnJvbSBcIi4uLy4uLy4uL2RhdGEvY3VycmVuY3lUcmFuc2xhdGUudHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vQ3VycmVuY3lDb252ZXJ0b3IubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vTG9hZGluZy9Mb2FkaW5nLnRzeFwiO1xyXG5pbXBvcnQgRmlsdGVyQ2hlY2tib3ggZnJvbSBcIi4vLi4vRmlsdGVyQ2hlY2tib3gvRmlsdGVyQ2hlY2tib3hcIjtcclxuXHJcbmltcG9ydCB1c2VDdXJyZW5jeVJhdGVzIGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2VDdXJyZW5jeVJhdGVzLnRzXCI7XHJcbmltcG9ydCB7IHVzZUN1cnJlbmN5Q29udmVydGVyIH0gZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZUN1cnJlbmN5Q29udmVydGVyLnRzXCI7XHJcbmltcG9ydCBDdXJyZW5jeUlucHV0IGZyb20gXCIuLi9DdXJyZW5jeUlucHV0L0N1cnJlbmN5SW5wdXQudHN4XCI7XHJcbmltcG9ydCB7IGMgfSBmcm9tIFwidml0ZS9kaXN0L25vZGUvdHlwZXMuZC1BS3prRDh2ZFwiO1xyXG5cclxuZnVuY3Rpb24gQ3VycmVuY3lDb252ZXJ0b3IoKSB7XHJcbiAgY29uc3QgeyByYXRlcywgY3VycmVuY3lEZXNjLCBpc0xvYWRpbmcsIGVycm9yIH0gPSB1c2VDdXJyZW5jeVJhdGVzKCk7XHJcbiAgY29uc3QgY29udmVydEN1cnJlbmN5ID0gdXNlQ3VycmVuY3lDb252ZXJ0ZXIocmF0ZXMpO1xyXG5cclxuICBjb25zdCBbbGVmdFZhbHVlLCBzZXRMZWZ0VmFsdWVdID0gdXNlU3RhdGUoXCIxXCIpO1xyXG4gIGNvbnN0IFtyaWdodFZhbHVlLCBzZXRSaWdodFZhbHVlXSA9IHVzZVN0YXRlKFwiMVwiKTtcclxuICBjb25zdCBbbGVmdEN1cnJlbmN5LCBzZXRMZWZ0Q3VycmVuY3ldID0gdXNlU3RhdGUoXCJVU0RcIik7XHJcbiAgY29uc3QgW3JpZ2h0Q3VycmVuY3ksIHNldFJpZ2h0Q3VycmVuY3ldID0gdXNlU3RhdGUoXCJVU0RcIik7XHJcbiAgY29uc3QgW2xlZnRGaWx0ZXJBY3RpdmUsIHNldExlZnRGaWx0ZXJBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyaWdodEZpbHRlckFjdGl2ZSwgc2V0UmlnaHRGaWx0ZXJBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDdXJyZW5jeUNoYW5nZSA9IChjdXJyZW5jeTogc3RyaW5nLCBzaWRlOiBzdHJpbmcpID0+IHtcclxuICAgIGlmIChzaWRlID09PSBcImxlZnRcIikge1xyXG4gICAgICBzZXRMZWZ0Q3VycmVuY3koY3VycmVuY3kpO1xyXG4gICAgICBzZXRSaWdodFZhbHVlKFxyXG4gICAgICAgIGNvbnZlcnRDdXJyZW5jeShOdW1iZXIobGVmdFZhbHVlKSwgY3VycmVuY3ksIHJpZ2h0Q3VycmVuY3kpXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRSaWdodEN1cnJlbmN5KGN1cnJlbmN5KTtcclxuICAgICAgc2V0TGVmdFZhbHVlKGNvbnZlcnRDdXJyZW5jeShOdW1iZXIocmlnaHRWYWx1ZSksIGN1cnJlbmN5LCBsZWZ0Q3VycmVuY3kpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9ICh2YWx1ZTogc3RyaW5nLCBzaWRlOiBzdHJpbmcpID0+IHtcclxuICAgIGlmIChzaWRlID09PSBcImxlZnRcIikge1xyXG4gICAgICBzZXRMZWZ0VmFsdWUodmFsdWUpO1xyXG5cclxuICAgICAgc2V0UmlnaHRWYWx1ZShcclxuICAgICAgICBjb252ZXJ0Q3VycmVuY3koTnVtYmVyKHZhbHVlKSwgbGVmdEN1cnJlbmN5LCByaWdodEN1cnJlbmN5KVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0UmlnaHRWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNvbnZlcnRDdXJyZW5jeShOdW1iZXIodmFsdWUpLCBsZWZ0Q3VycmVuY3ksIHJpZ2h0Q3VycmVuY3kpKTtcclxuICAgICAgc2V0TGVmdFZhbHVlKFxyXG4gICAgICAgIGNvbnZlcnRDdXJyZW5jeShOdW1iZXIodmFsdWUpLCByaWdodEN1cnJlbmN5LCByaWdodEN1cnJlbmN5KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnNvbGUubG9nKGN1cnJlbmN5RGVzYyk7XHJcblxyXG4gIGlmIChpc0xvYWRpbmcpIHtcclxuICAgIHJldHVybiA8TG9hZGluZyAvPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHlfYmFja2dyb3VuZH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFydFdyYXBwZXJ9PlxyXG4gICAgICAgIDxDdXJyZW5jeUlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17bGVmdFZhbHVlfVxyXG4gICAgICAgICAgY3VycmVuY3k9e2xlZnRDdXJyZW5jeX1cclxuICAgICAgICAgIG9uVmFsdWVDaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgb25DdXJyZW5jeUNoYW5nZT17aGFuZGxlQ3VycmVuY3lDaGFuZ2V9XHJcbiAgICAgICAgICBzaWRlPVwibGVmdFwiXHJcbiAgICAgICAgICBmaWx0ZXJBY3RpdmU9e2xlZnRGaWx0ZXJBY3RpdmV9XHJcbiAgICAgICAgICBjdXJyZW5jeURlc2M9e2N1cnJlbmN5RGVzY31cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2tib3hXcmFwcGVyfT5cclxuICAgICAgICAgIDxGaWx0ZXJDaGVja2JveFxyXG4gICAgICAgICAgICBsYWJlbD1cItCg0YPRh9C90L7QuSDQv9C+0LjRgdC6INCy0LDQu9GO0YLRi1wiXHJcbiAgICAgICAgICAgIGNoZWNrZWQ9e2xlZnRGaWx0ZXJBY3RpdmV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRMZWZ0RmlsdGVyQWN0aXZlKCFsZWZ0RmlsdGVyQWN0aXZlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udmVyc2lvbl9lcXVhbHN9PiA9IDwvc3Bhbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYXJ0V3JhcHBlcn0+XHJcbiAgICAgICAgPEN1cnJlbmN5SW5wdXRcclxuICAgICAgICAgIHZhbHVlPXtyaWdodFZhbHVlfVxyXG4gICAgICAgICAgY3VycmVuY3k9e3JpZ2h0Q3VycmVuY3l9XHJcbiAgICAgICAgICBvblZhbHVlQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgIG9uQ3VycmVuY3lDaGFuZ2U9e2hhbmRsZUN1cnJlbmN5Q2hhbmdlfVxyXG4gICAgICAgICAgc2lkZT1cInJpZ2h0XCJcclxuICAgICAgICAgIGZpbHRlckFjdGl2ZT17cmlnaHRGaWx0ZXJBY3RpdmV9XHJcbiAgICAgICAgICBjdXJyZW5jeURlc2M9e2N1cnJlbmN5RGVzY31cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2tib3hXcmFwcGVyfT5cclxuICAgICAgICAgIDxGaWx0ZXJDaGVja2JveFxyXG4gICAgICAgICAgICBsYWJlbD1cItCg0YPRh9C90L7QuSDQv9C+0LjRgdC6INCy0LDQu9GO0YLRi1wiXHJcbiAgICAgICAgICAgIGNoZWNrZWQ9e3JpZ2h0RmlsdGVyQWN0aXZlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0UmlnaHRGaWx0ZXJBY3RpdmUoIXJpZ2h0RmlsdGVyQWN0aXZlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VycmVuY3lDb252ZXJ0b3I7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiTG9hZGluZyIsIkZpbHRlckNoZWNrYm94IiwidXNlQ3VycmVuY3lSYXRlcyIsInVzZUN1cnJlbmN5Q29udmVydGVyIiwiQ3VycmVuY3lJbnB1dCIsIkN1cnJlbmN5Q29udmVydG9yIiwicmF0ZXMiLCJjdXJyZW5jeURlc2MiLCJpc0xvYWRpbmciLCJlcnJvciIsImNvbnZlcnRDdXJyZW5jeSIsImxlZnRWYWx1ZSIsInNldExlZnRWYWx1ZSIsInJpZ2h0VmFsdWUiLCJzZXRSaWdodFZhbHVlIiwibGVmdEN1cnJlbmN5Iiwic2V0TGVmdEN1cnJlbmN5IiwicmlnaHRDdXJyZW5jeSIsInNldFJpZ2h0Q3VycmVuY3kiLCJsZWZ0RmlsdGVyQWN0aXZlIiwic2V0TGVmdEZpbHRlckFjdGl2ZSIsInJpZ2h0RmlsdGVyQWN0aXZlIiwic2V0UmlnaHRGaWx0ZXJBY3RpdmUiLCJoYW5kbGVDdXJyZW5jeUNoYW5nZSIsImN1cnJlbmN5Iiwic2lkZSIsIk51bWJlciIsImhhbmRsZUlucHV0Q2hhbmdlIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiYm9keV9iYWNrZ3JvdW5kIiwicGFydFdyYXBwZXIiLCJvblZhbHVlQ2hhbmdlIiwib25DdXJyZW5jeUNoYW5nZSIsImZpbHRlckFjdGl2ZSIsImNoZWNrYm94V3JhcHBlciIsImxhYmVsIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwic3BhbiIsImNvbnZlcnNpb25fZXF1YWxzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/CurrencyConvertor/CurrencyConvertor/CurrencyConvertor.tsx\n"));

/***/ })

});