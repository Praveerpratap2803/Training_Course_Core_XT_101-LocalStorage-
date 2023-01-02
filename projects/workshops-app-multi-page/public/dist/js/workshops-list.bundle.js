/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/check-login.js":
/*!*******************************!*\
  !*** ./src/ts/check-login.js ***!
  \*******************************/
/***/ (() => {

eval("if( localStorage.getItem( 'token' ) === null ) {\r\n    window.location = './login.html';\r\n}\n\n//# sourceURL=webpack://workshops-app-sass/./src/ts/check-login.js?");

/***/ }),

/***/ "./src/ts/config.js":
/*!**************************!*\
  !*** ./src/ts/config.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst  Config = {//simply a object is created and exported\r\n    apiBaseUrl:\"http://localhost:3000\"\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Config);\r\n\r\n\r\n\n\n//# sourceURL=webpack://workshops-app-sass/./src/ts/config.js?");

/***/ }),

/***/ "./src/ts/nav.js":
/*!***********************!*\
  !*** ./src/ts/nav.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_auth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.js */ \"./src/ts/services/auth.js\");\n\r\n\r\nconst menuToggler = document.querySelector( '.menu-toggler' );\r\nconst leftNav = document.querySelector( '.left-nav' );\r\nconst logoutBtn = document.querySelector( '#btn-logout' )\r\n\r\nmenuToggler.addEventListener( 'click', function() {\r\n    leftNav.classList.toggle( 'd-sm-none' );\r\n});\r\n\r\nlogoutBtn.addEventListener( 'click', function() {\r\n    (0,_services_auth_js__WEBPACK_IMPORTED_MODULE_0__.logout)();\r\n\r\n    window.location = './login.html';\r\n});\n\n//# sourceURL=webpack://workshops-app-sass/./src/ts/nav.js?");

/***/ }),

/***/ "./src/ts/pages/workshops-list.js":
/*!****************************************!*\
  !*** ./src/ts/pages/workshops-list.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _check_login_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../check-login.js */ \"./src/ts/check-login.js\");\n/* harmony import */ var _check_login_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_check_login_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_workshops_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/workshops.js */ \"./src/ts/services/workshops.js\");\n/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav.js */ \"./src/ts/nav.js\");\n\r\n\r\n\r\n\r\n(function() {\r\n    let allWorkshops = []; // or null\r\n    \r\n    // let us set up for filtering the workshops when use types in search box\r\n    let searchEl;\r\n    let infoMessage;\r\n    \r\n    function showLoadingMessage() {\r\n        infoMessage.textContent = 'Loading workshops...Please wait...';\r\n        infoMessage.classList.remove('hide');\r\n    }\r\n\r\n    // pass on workshops to show, and this function will show it on the page\r\n    function showWorkshops(workshops) {\r\n        const workshopsList = document.querySelector('.workshops-list');\r\n\r\n        let workshopsListStr = '';\r\n\r\n        workshops.forEach(function (workshop) {\r\n            // console.log( workshop.name, workshop.category, workshop.location.city );\r\n\r\n            // workshopsListStr = workshopsListStr + `\r\n            workshopsListStr += `\r\n                <div class=\"workshop p-3\" data-workshopid=\"${workshop.id}\">\r\n                    <img src=\"${workshop.imageUrl}\" alt=\"${workshop.name}\" class=\"img-fluid\" />\r\n                    <h2 class=\"workshop-title\">\r\n                        ${workshop.name}\r\n                    </h2>\r\n                    <div class=\"workshop-duration\">\r\n                        ${workshop.startDate} - ${workshop.endDate}\r\n                    </div>\r\n                    <div class=\"workshop-time\">\r\n                        ${workshop.time}\r\n                    </div>\r\n                    <button class=\"btn-delete\">Delete workshop</button>\r\n                </div>\r\n            `;\r\n        });\r\n\r\n        workshopsList.innerHTML = workshopsListStr;\r\n\r\n        addWorkshopCardListeners(); // we should set up listeners only now (since workshops get added not on page load but after a delay)\r\n    }\r\n\r\n    function addWorkshopCardListeners() {\r\n        const buttons = document.querySelectorAll( '.btn-delete' );\r\n\r\n        console.log( buttons );\r\n\r\n        buttons.forEach(\r\n            function( button ) {\r\n                button.addEventListener( 'click', function() {\r\n                    const workshop = button.closest( '.workshop' );\r\n                    const workshopId = workshop.getAttribute( 'data-workshopid' );\r\n                    console.log( workshopId );\r\n\r\n                    (0,_services_workshops_js__WEBPACK_IMPORTED_MODULE_1__.deleteWorkshop)( workshopId )\r\n                        .then(\r\n                            function( response ) {\r\n                                workshop.remove();\r\n                            }\r\n                        )\r\n                        .catch(\r\n                            function( error ) {\r\n                                alert( error.message );\r\n                            }\r\n                        )\r\n                });\r\n            }\r\n        )\r\n    };\r\n\r\n    function fetchWorkshops() {\r\n        // returns a \"Promise object\"\r\n        // 2 methods of promise object - then / catch\r\n        // the promise will reject if...\r\n        // The network is down\r\n        // The server is down\r\n        (0,_services_workshops_js__WEBPACK_IMPORTED_MODULE_1__.getWorkshops)()\r\n            .then(function (workshops) {\r\n                allWorkshops = workshops;\r\n                return workshops;\r\n                // showWorkshops( workshops );\r\n            })\r\n            .then(showWorkshops)\r\n            .catch(function (error) {\r\n                const errorMessage = document.querySelector('.message-error');\r\n                errorMessage.textContent = error.message;\r\n                errorMessage.classList.remove('hide');\r\n            })\r\n            .finally(function () {\r\n                infoMessage.textContent = '';\r\n                infoMessage.classList.add('hide');\r\n            });\r\n    }\r\n\r\n    function addEventListeners() {\r\n        searchEl.addEventListener('input', function (event) {\r\n            const search = searchEl.value;\r\n\r\n            // let us find the list of workshops that have the search key in their name\r\n            const matchedWorkshops = allWorkshops.filter(function (workshop) {\r\n                // return true if the workshop's name has the search string in it\r\n                return workshop.name.toLowerCase().includes(search.toLowerCase());\r\n            });\r\n\r\n            showWorkshops(matchedWorkshops);\r\n        });\r\n    }\r\n\r\n    window.addEventListener( 'load', function() {\r\n        // let us set up for filtering the workshops when use types in search box\r\n        searchEl = document.querySelector('#search-workshops');\r\n        infoMessage = document.querySelector('.message-info');\r\n\r\n        showLoadingMessage();\r\n        fetchWorkshops();\r\n        addEventListeners();\r\n    });\r\n})();\n\n//# sourceURL=webpack://workshops-app-sass/./src/ts/pages/workshops-list.js?");

/***/ }),

/***/ "./src/ts/services/auth.js":
/*!*********************************!*\
  !*** ./src/ts/services/auth.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getToken\": () => (/* binding */ getToken),\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"logout\": () => (/* binding */ logout)\n/* harmony export */ });\n// credentials = { email: 'john.doe@example.com', password: 'Password123#' }\r\nfunction login( credentials ) {\r\n    return fetch(\r\n        `http://localhost:3000/login`,\r\n        {\r\n            method: 'POST', // better to use ALL CAPS for the method\r\n            body: JSON.stringify( credentials ),\r\n            headers: {\r\n                // Authorization: \"sdkbkjwbejwbveiwbviwb\"\r\n                \"Content-Type\": \"application/json\"\r\n            }\r\n        }\r\n    )\r\n        .then(\r\n            function( response ) {\r\n                if (!response.ok) {\r\n                    // for 404 kind of errors, we should check and explcitly throw an error\r\n                    throw new Error(response.statusText);\r\n                }\r\n\r\n                return response.json();\r\n            }\r\n        )\r\n        .then(\r\n            function( loginResponse ) {\r\n                // store the details in localStorage\r\n                localStorage.setItem( 'email', loginResponse.email );\r\n                localStorage.setItem( 'token', loginResponse.authToken );\r\n                localStorage.setItem( 'role', loginResponse.role );\r\n\r\n                return loginResponse;\r\n            }\r\n        )\r\n}\r\n\r\nfunction getToken() {\r\n    return localStorage.getItem( 'token' );\r\n}\r\n\r\nfunction logout() {\r\n    localStorage.clear();\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://workshops-app-sass/./src/ts/services/auth.js?");

/***/ }),

/***/ "./src/ts/services/workshops.js":
/*!**************************************!*\
  !*** ./src/ts/services/workshops.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addWorkshop\": () => (/* binding */ addWorkshop),\n/* harmony export */   \"deleteWorkshop\": () => (/* binding */ deleteWorkshop),\n/* harmony export */   \"getWorkshops\": () => (/* binding */ getWorkshops)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ \"./src/ts/config.js\");\n/* harmony import */ var _auth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.js */ \"./src/ts/services/auth.js\");\n\r\n\r\nconst {apiBaseUrl}=_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n\r\nconst getWorkshops = function() {\r\n    return fetch(\r\n        // `http://localhost:3000/workshops?_page=1`, // only workshops on page 1 (first 10 workshops)\r\n        `${apiBaseUrl}/workshops?`, // all workshops\r\n        {\r\n            headers: {\r\n                // in meetings app no Bearer string is required as a prefix to the header\r\n                'Authorization': `Bearer ${(0,_auth_js__WEBPACK_IMPORTED_MODULE_1__.getToken)()}`\r\n            }\r\n        }\r\n    )\r\n            .then(function (response) {\r\n                if (!response.ok) {\r\n                    // for 404 kind of errors, we should check and explcitly throw an error\r\n                    throw new Error(response.statusText);\r\n                }\r\n\r\n                return response.json();\r\n            });\r\n};\r\n\r\nconst addWorkshop = function( workshop ) {\r\n    // converts a JS object/array into a JSON-formatted string\r\n    const workshopStr = JSON.stringify( workshop );\r\n    console.log( workshopStr );\r\n\r\n    return fetch(\r\n        `${apiBaseUrl}/workshops`,\r\n        {\r\n            method: 'POST', // better to use ALL CAPS for the method\r\n            body: workshopStr,\r\n            headers: {\r\n                // Authorization: \"sdkbkjwbejwbveiwbviwb\"\r\n                \"Content-Type\": \"application/json\",\r\n                'Authorization': `Bearer ${(0,_auth_js__WEBPACK_IMPORTED_MODULE_1__.getToken)()}`\r\n            }\r\n        }\r\n    )\r\n        .then(\r\n            function( response ) {\r\n                if (!response.ok) {\r\n                    // for 404 kind of errors, we should check and explcitly throw an error\r\n                    throw new Error(response.statusText);\r\n                }\r\n\r\n                return response.json();\r\n            }\r\n        )\r\n};\r\n\r\nconst deleteWorkshop = ( workshopId ) => {\r\n    return fetch( `${apiBaseUrl}/workshops/${workshopId}`,\r\n        {\r\n            method: 'DELETE',\r\n            headers: {\r\n                'Authorization': `Bearer ${(0,_auth_js__WEBPACK_IMPORTED_MODULE_1__.getToken)()}`\r\n            }\r\n        } )\r\n            .then(\r\n                function( response ) {\r\n                    if( !response.ok ) {\r\n                        throw new Error( response.statusText );\r\n                    }\r\n\r\n                    // The response is empty (status code 204). So we do not call response.json() and instead pass on a hard-coded string to indicate success\r\n                    return 'Success';\r\n                }\r\n            )\r\n};\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://workshops-app-sass/./src/ts/services/workshops.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/pages/workshops-list.js");
/******/ 	
/******/ })()
;