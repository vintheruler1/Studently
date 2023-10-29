"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/Planner.js":
/*!****************************!*\
  !*** ./src/app/Planner.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nconst Planner = ()=>{\n    _s();\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // Load tasks from cookies when the component mounts\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedTasks = js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"tasks\");\n        if (savedTasks) {\n            const parsedTasks = JSON.parse(savedTasks);\n            setItems(parsedTasks);\n        }\n    }, []);\n    // Function to add a new item to the planner\n    const addItem = ()=>{\n        if (text.trim() === \"\") return;\n        const newItems = [\n            ...items,\n            text\n        ];\n        setItems(newItems);\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"tasks\", JSON.stringify(newItems), {\n            expires: 7\n        }); // Store tasks in cookies for 7 days\n        setText(\"\");\n    };\n    // Function to format the planner items (you can replace this with your own logic)\n    const formatText = ()=>{\n    // Implement your formatting logic here\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4 border rounded bg-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"border rounded p-2 w-full\",\n                        placeholder: \"Add an item...\",\n                        value: text,\n                        onChange: (e)=>setText(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/vinesh/Documents/GitHub/Studently/src/app/Planner.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded\",\n                        onClick: addItem,\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vinesh/Documents/GitHub/Studently/src/app/Planner.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vinesh/Documents/GitHub/Studently/src/app/Planner.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"mb-2\",\n                        style: {\n                            color: \"black\"\n                        },\n                        children: [\n                            item.text,\n                            \" - \",\n                            item.dueDate\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/vinesh/Documents/GitHub/Studently/src/app/Planner.js\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/vinesh/Documents/GitHub/Studently/src/app/Planner.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vinesh/Documents/GitHub/Studently/src/app/Planner.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Planner, \"HpN7MM0XpcbYeTce7vFjtUrQ9PY=\");\n_c = Planner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Planner);\nvar _c;\n$RefreshReg$(_c, \"Planner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvUGxhbm5lci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW1EO0FBQ25CO0FBRWhDLE1BQU1JLFVBQVU7O0lBQ2QsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFDckMsTUFBTSxDQUFDTSxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO0lBRWpDLG9EQUFvRDtJQUNwREMsZ0RBQVNBLENBQUM7UUFDUixNQUFNTyxhQUFhTixpREFBT0EsQ0FBQ08sR0FBRyxDQUFDO1FBQy9CLElBQUlELFlBQVk7WUFDZCxNQUFNRSxjQUFjQyxLQUFLQyxLQUFLLENBQUNKO1lBQy9CSCxTQUFTSztRQUNYO0lBQ0YsR0FBRyxFQUFFO0lBRUwsNENBQTRDO0lBQzVDLE1BQU1HLFVBQVU7UUFDZCxJQUFJUCxLQUFLUSxJQUFJLE9BQU8sSUFBSTtRQUN4QixNQUFNQyxXQUFXO2VBQUlYO1lBQU9FO1NBQUs7UUFDakNELFNBQVNVO1FBQ1RiLGlEQUFPQSxDQUFDYyxHQUFHLENBQUMsU0FBU0wsS0FBS00sU0FBUyxDQUFDRixXQUFXO1lBQUVHLFNBQVM7UUFBRSxJQUFJLG9DQUFvQztRQUNwR1gsUUFBUTtJQUNWO0lBRUEsa0ZBQWtGO0lBQ2xGLE1BQU1ZLGFBQWE7SUFDakIsdUNBQXVDO0lBQ3pDO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUNDQyxNQUFLO3dCQUNMRixXQUFVO3dCQUNWRyxhQUFZO3dCQUNaQyxPQUFPbkI7d0JBQ1BvQixVQUFVLENBQUNDLElBQU1wQixRQUFRb0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7a0NBRXpDLDhEQUFDSTt3QkFDQ1IsV0FBVTt3QkFDVlMsU0FBU2pCO2tDQUNWOzs7Ozs7Ozs7Ozs7MEJBSUgsOERBQUNrQjswQkFDRTNCLE1BQU00QixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2hCLDhEQUFDQzt3QkFBZWQsV0FBVTt3QkFBT2UsT0FBTzs0QkFBRUMsT0FBTzt3QkFBUTs7NEJBQ3RESixLQUFLM0IsSUFBSTs0QkFBQzs0QkFBSTJCLEtBQUtLLE9BQU87O3VCQURwQko7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbkI7R0FyRE0vQjtLQUFBQTtBQXVETiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL1BsYW5uZXIuanM/ZGNlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xuXG5jb25zdCBQbGFubmVyID0gKCkgPT4ge1xuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgLy8gTG9hZCB0YXNrcyBmcm9tIGNvb2tpZXMgd2hlbiB0aGUgY29tcG9uZW50IG1vdW50c1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNhdmVkVGFza3MgPSBDb29raWVzLmdldChcInRhc2tzXCIpO1xuICAgIGlmIChzYXZlZFRhc2tzKSB7XG4gICAgICBjb25zdCBwYXJzZWRUYXNrcyA9IEpTT04ucGFyc2Uoc2F2ZWRUYXNrcyk7XG4gICAgICBzZXRJdGVtcyhwYXJzZWRUYXNrcyk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgLy8gRnVuY3Rpb24gdG8gYWRkIGEgbmV3IGl0ZW0gdG8gdGhlIHBsYW5uZXJcbiAgY29uc3QgYWRkSXRlbSA9ICgpID0+IHtcbiAgICBpZiAodGV4dC50cmltKCkgPT09IFwiXCIpIHJldHVybjtcbiAgICBjb25zdCBuZXdJdGVtcyA9IFsuLi5pdGVtcywgdGV4dF07XG4gICAgc2V0SXRlbXMobmV3SXRlbXMpO1xuICAgIENvb2tpZXMuc2V0KFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkobmV3SXRlbXMpLCB7IGV4cGlyZXM6IDcgfSk7IC8vIFN0b3JlIHRhc2tzIGluIGNvb2tpZXMgZm9yIDcgZGF5c1xuICAgIHNldFRleHQoXCJcIik7XG4gIH07XG5cbiAgLy8gRnVuY3Rpb24gdG8gZm9ybWF0IHRoZSBwbGFubmVyIGl0ZW1zICh5b3UgY2FuIHJlcGxhY2UgdGhpcyB3aXRoIHlvdXIgb3duIGxvZ2ljKVxuICBjb25zdCBmb3JtYXRUZXh0ID0gKCkgPT4ge1xuICAgIC8vIEltcGxlbWVudCB5b3VyIGZvcm1hdHRpbmcgbG9naWMgaGVyZVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyIHJvdW5kZWQgYmctd2hpdGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQgcC0yIHctZnVsbFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYW4gaXRlbS4uLlwiXG4gICAgICAgICAgdmFsdWU9e3RleHR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyLWJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCBteC0yIHJvdW5kZWRcIlxuICAgICAgICAgIG9uQ2xpY2s9e2FkZEl0ZW19XG4gICAgICAgID5cbiAgICAgICAgICBBZGRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bD5cbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibWItMlwiIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+XG4gICAgICAgICAgICB7aXRlbS50ZXh0fSAtIHtpdGVtLmR1ZURhdGV9XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxhbm5lcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ29va2llcyIsIlBsYW5uZXIiLCJpdGVtcyIsInNldEl0ZW1zIiwidGV4dCIsInNldFRleHQiLCJzYXZlZFRhc2tzIiwiZ2V0IiwicGFyc2VkVGFza3MiLCJKU09OIiwicGFyc2UiLCJhZGRJdGVtIiwidHJpbSIsIm5ld0l0ZW1zIiwic2V0Iiwic3RyaW5naWZ5IiwiZXhwaXJlcyIsImZvcm1hdFRleHQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsInVsIiwibWFwIiwiaXRlbSIsImluZGV4IiwibGkiLCJzdHlsZSIsImNvbG9yIiwiZHVlRGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Planner.js\n"));

/***/ })

});