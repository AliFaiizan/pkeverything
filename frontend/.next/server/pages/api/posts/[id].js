"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/posts/[id]";
exports.ids = ["pages/api/posts/[id]"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\n// import { Storage } from 'megajs';\n// const megaOptions = {\n//   email: process.env.MEGA_EMAIL,\n//   password: process.env.MEGA_PASS,\n// };\n// const storage = new Storage(megaOptions, () => {\n// });\n// const storagePromise = storage.ready;\n// storage.once('ready', () => {\n//   // User is now logged in\n//   console.log('storege is loggedin');\n// });\n// storage.once('error', (error) => {\n//   // Some error happened\n//   console.log('there was an error while logging in mega', error);\n// });\nif (!process.env.MONGODB_URI) {\n    throw new Error('Invalid environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGODB_URI;\nconst options = {\n    useNewUrlParser: true,\n    useUnifiedTopology: true\n};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Please add your Mongo URI to .env.local\");\n}\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global.mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global.mongoClientPromise = client.connect();\n    }\n    clientPromise = global.mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\nconst dbPromise = clientPromise;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    dbPromise\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ3NDO0FBQ3RDLG9DQUFvQztBQUVwQyx3QkFBd0I7QUFDeEIsbUNBQW1DO0FBQ25DLHFDQUFxQztBQUNyQyxLQUFLO0FBRUwsbURBQW1EO0FBRW5ELE1BQU07QUFDTix3Q0FBd0M7QUFFeEMsZ0NBQWdDO0FBQ2hDLDZCQUE2QjtBQUM3Qix3Q0FBd0M7QUFDeEMsTUFBTTtBQUVOLHFDQUFxQztBQUNyQywyQkFBMkI7QUFDM0Isb0VBQW9FO0FBQ3BFLE1BQU07QUFFTixJQUFJLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFO0lBQzVCLE1BQU0sSUFBSUMsTUFBTSwrQ0FBK0M7QUFDakUsQ0FBQztBQUVELE1BQU1DLE1BQU1KLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztBQUNuQyxNQUFNRyxVQUFVO0lBQ2RDLGlCQUFpQixJQUFJO0lBQ3JCQyxvQkFBb0IsSUFBSTtBQUMxQjtBQUVBLElBQUlDO0FBQ0osSUFBSUM7QUFFSixJQUFJLENBQUNULFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFO0lBQzVCLE1BQU0sSUFBSUMsTUFBTSwyQ0FBMkM7QUFDN0QsQ0FBQztBQUVELElBQUlILElBQXlCLEVBQWU7SUFDMUMsK0RBQStEO0lBQy9ELDZFQUE2RTtJQUM3RSxJQUFJLENBQUNVLE9BQU9DLGtCQUFrQixFQUFFO1FBQzlCSCxTQUFTLElBQUlULGdEQUFXQSxDQUFDSyxLQUFLQztRQUM5QkssT0FBT0Msa0JBQWtCLEdBQUdILE9BQU9JLE9BQU87SUFDNUMsQ0FBQztJQUNESCxnQkFBZ0JDLE9BQU9DLGtCQUFrQjtBQUMzQyxPQUFPLEVBSU47QUFFRCxpRUFBaUU7QUFDakUsOERBQThEO0FBQzlELE1BQU1FLFlBQVlKO0FBQ2xCLGlFQUFlO0lBQUVJO0FBQVUsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlqbGl3YWxhLy4vbGliL2luZGV4LmpzP2E4ZDkiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XHJcbi8vIGltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdtZWdhanMnO1xyXG5cclxuLy8gY29uc3QgbWVnYU9wdGlvbnMgPSB7XHJcbi8vICAgZW1haWw6IHByb2Nlc3MuZW52Lk1FR0FfRU1BSUwsXHJcbi8vICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52Lk1FR0FfUEFTUyxcclxuLy8gfTtcclxuXHJcbi8vIGNvbnN0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZShtZWdhT3B0aW9ucywgKCkgPT4ge1xyXG5cclxuLy8gfSk7XHJcbi8vIGNvbnN0IHN0b3JhZ2VQcm9taXNlID0gc3RvcmFnZS5yZWFkeTtcclxuXHJcbi8vIHN0b3JhZ2Uub25jZSgncmVhZHknLCAoKSA9PiB7XHJcbi8vICAgLy8gVXNlciBpcyBub3cgbG9nZ2VkIGluXHJcbi8vICAgY29uc29sZS5sb2coJ3N0b3JlZ2UgaXMgbG9nZ2VkaW4nKTtcclxuLy8gfSk7XHJcblxyXG4vLyBzdG9yYWdlLm9uY2UoJ2Vycm9yJywgKGVycm9yKSA9PiB7XHJcbi8vICAgLy8gU29tZSBlcnJvciBoYXBwZW5lZFxyXG4vLyAgIGNvbnNvbGUubG9nKCd0aGVyZSB3YXMgYW4gZXJyb3Igd2hpbGUgbG9nZ2luZyBpbiBtZWdhJywgZXJyb3IpO1xyXG4vLyB9KTtcclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZW52aXJvbm1lbnQgdmFyaWFibGU6IFwiTU9OR09EQl9VUklcIicpO1xyXG59XHJcblxyXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcclxuY29uc3Qgb3B0aW9ucyA9IHtcclxuICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG59O1xyXG5cclxubGV0IGNsaWVudDtcclxubGV0IGNsaWVudFByb21pc2U7XHJcblxyXG5pZiAoIXByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgYWRkIHlvdXIgTW9uZ28gVVJJIHRvIC5lbnYubG9jYWwnKTtcclxufVxyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXHJcbiAgLy8gaXMgcHJlc2VydmVkIGFjcm9zcyBtb2R1bGUgcmVsb2FkcyBjYXVzZWQgYnkgSE1SIChIb3QgTW9kdWxlIFJlcGxhY2VtZW50KS5cclxuICBpZiAoIWdsb2JhbC5tb25nb0NsaWVudFByb21pc2UpIHtcclxuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xyXG4gICAgZ2xvYmFsLm1vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XHJcbiAgfVxyXG4gIGNsaWVudFByb21pc2UgPSBnbG9iYWwubW9uZ29DbGllbnRQcm9taXNlO1xyXG59IGVsc2Uge1xyXG4gIC8vIEluIHByb2R1Y3Rpb24gbW9kZSwgaXQncyBiZXN0IHRvIG5vdCB1c2UgYSBnbG9iYWwgdmFyaWFibGUuXHJcbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XHJcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XHJcbn1cclxuXHJcbi8vIEV4cG9ydCBhIG1vZHVsZS1zY29wZWQgTW9uZ29DbGllbnQgcHJvbWlzZS4gQnkgZG9pbmcgdGhpcyBpbiBhXHJcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXHJcbmNvbnN0IGRiUHJvbWlzZSA9IGNsaWVudFByb21pc2U7XHJcbmV4cG9ydCBkZWZhdWx0IHsgZGJQcm9taXNlIH07XHJcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsIkVycm9yIiwidXJpIiwib3B0aW9ucyIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJnbG9iYWwiLCJtb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0IiwiZGJQcm9taXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/index.js\n");

/***/ }),

/***/ "(api)/./pages/api/posts/[id].js":
/*!*********************************!*\
  !*** ./pages/api/posts/[id].js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib */ \"(api)/./lib/index.js\");\n// import formidable from 'formidable';\n\n\nasync function handler(req, res) {\n    const client = await _lib__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dbPromise;\n    const db = client.db(\"bijliwala\");\n    const { id  } = req.query;\n    const post = await db.collection(\"posts\").findOne({\n        _id: new mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId(id)\n    });\n    // This will get all the posts\n    console.log(id);\n    res.json(post);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdHMvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsdUNBQXVDO0FBQ0o7QUFDRDtBQUVuQixlQUFlRSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNQyxTQUFTLE1BQU1KLHNEQUFnQjtJQUVyQyxNQUFNTSxLQUFLRixPQUFPRSxFQUFFLENBQUM7SUFDckIsTUFBTSxFQUFFQyxHQUFFLEVBQUUsR0FBR0wsSUFBSU0sS0FBSztJQUN4QixNQUFNQyxPQUFPLE1BQU1ILEdBQUdJLFVBQVUsQ0FBQyxTQUFTQyxPQUFPLENBQUM7UUFBRUMsS0FBSyxJQUFJYiw2Q0FBUUEsQ0FBQ1E7SUFBSTtJQUMxRSw4QkFBOEI7SUFDOUJNLFFBQVFDLEdBQUcsQ0FBQ1A7SUFDWkosSUFBSVksSUFBSSxDQUFDTjtBQUNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWpsaXdhbGEvLi9wYWdlcy9hcGkvcG9zdHMvW2lkXS5qcz82MjAyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBmb3JtaWRhYmxlIGZyb20gJ2Zvcm1pZGFibGUnO1xyXG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gJ21vbmdvZGInO1xyXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4uLy4uLy4uL2xpYic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgQ29uZmlnLmRiUHJvbWlzZTtcclxuXHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoJ2Jpamxpd2FsYScpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJlcS5xdWVyeTtcclxuICBjb25zdCBwb3N0ID0gYXdhaXQgZGIuY29sbGVjdGlvbigncG9zdHMnKS5maW5kT25lKHsgX2lkOiBuZXcgT2JqZWN0SWQoaWQpIH0pO1xyXG4gIC8vIFRoaXMgd2lsbCBnZXQgYWxsIHRoZSBwb3N0c1xyXG4gIGNvbnNvbGUubG9nKGlkKTtcclxuICByZXMuanNvbihwb3N0KTtcclxufVxyXG4iXSwibmFtZXMiOlsiT2JqZWN0SWQiLCJDb25maWciLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY2xpZW50IiwiZGJQcm9taXNlIiwiZGIiLCJpZCIsInF1ZXJ5IiwicG9zdCIsImNvbGxlY3Rpb24iLCJmaW5kT25lIiwiX2lkIiwiY29uc29sZSIsImxvZyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/posts/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/posts/[id].js"));
module.exports = __webpack_exports__;

})();