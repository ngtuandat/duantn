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
  exports.id = "pages/api/user/profile";
  exports.ids = ["pages/api/user/profile"];
  exports.modules = {
    /***/ "@prisma/client":
      /*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
      /***/ (module) => {
        module.exports = require("@prisma/client");

        /***/
      },

    /***/ "(api)/./lib/prisma.ts":
      /*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// lib/prisma.ts\n\nlet prisma;\nif (false) {} else {\n    let globalWithPrisma = global;\n    if (!globalWithPrisma.prisma) {\n        globalWithPrisma.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = globalWithPrisma.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdCQUFnQjtBQUM4QjtBQUU5QyxJQUFJQztBQUVKLElBQUlDLEtBQXFDLEVBQUUsRUFFMUMsTUFBTTtJQUNILElBQUlDLG1CQUFtQkM7SUFHdkIsSUFBSSxDQUFDRCxpQkFBaUJGLE1BQU0sRUFBRTtRQUMxQkUsaUJBQWlCRixNQUFNLEdBQUcsSUFBSUQsd0RBQVlBO0lBQzlDLENBQUM7SUFDREMsU0FBU0UsaUJBQWlCRixNQUFNO0FBQ3BDLENBQUM7QUFFRCxpRUFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2UtY29tYmEvLi9saWIvcHJpc21hLnRzPzk4MjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL3ByaXNtYS50c1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmxldCBwcmlzbWE6IFByaXNtYUNsaWVudDtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbn0gZWxzZSB7XG4gICAgbGV0IGdsb2JhbFdpdGhQcmlzbWEgPSBnbG9iYWwgYXMgdHlwZW9mIGdsb2JhbFRoaXMgJiB7XG4gICAgICAgIHByaXNtYTogUHJpc21hQ2xpZW50O1xuICAgIH07XG4gICAgaWYgKCFnbG9iYWxXaXRoUHJpc21hLnByaXNtYSkge1xuICAgICAgICBnbG9iYWxXaXRoUHJpc21hLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgICB9XG4gICAgcHJpc21hID0gZ2xvYmFsV2l0aFByaXNtYS5wcmlzbWE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByaXNtYTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJwcm9jZXNzIiwiZ2xvYmFsV2l0aFByaXNtYSIsImdsb2JhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n'
        );

        /***/
      },

    /***/ "(api)/./pages/api/user/profile.ts":
      /*!***********************************!*\
  !*** ./pages/api/user/profile.ts ***!
  \***********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Profile)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../lib/prisma */ "(api)/./lib/prisma.ts");\n\nfunction Profile(req, res) {\n    if (req.method === "GET") {\n        const email = req.query.email;\n        if (!email) return;\n        profileUser(res, String(email));\n    }\n    if (req.method === "PUT") {\n        const profileUpdate = req.body.profileUpdate;\n        if (!profileUpdate) return;\n        updateProfile(res, profileUpdate);\n    }\n}\nasync function profileUser(res, email) {\n    try {\n        const profile = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__["default"].user.findFirst({\n            where: {\n                email: email\n            },\n            include: {\n                profile: true\n            }\n        });\n        res.status(200).json({\n            profile\n        });\n    } catch (error) {\n        res.status(500).json(error);\n    }\n}\nasync function updateProfile(res, profileUpdate) {\n    try {\n        await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__["default"].user.update({\n            where: {\n                email: profileUpdate.email\n            },\n            data: {\n                firstName: profileUpdate.firstName,\n                lastName: profileUpdate.lastName,\n                profile: {\n                    update: {\n                        address: profileUpdate.address,\n                        avatar: profileUpdate.avatar,\n                        birthDay: profileUpdate.birthDay && new Date(profileUpdate.birthDay),\n                        city: profileUpdate.city,\n                        phoneNumber: profileUpdate.phone,\n                        sex: profileUpdate.sex\n                    }\n                }\n            }\n        });\n        res.status(200).json("Update Successful");\n    } catch (error) {\n        res.status(500).json(error);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci9wcm9maWxlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRTJDO0FBRzVCLFNBQVNDLFFBQ3BCQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDdEI7SUFDRSxJQUFJRCxJQUFJRSxNQUFNLEtBQUssT0FBTztRQUN0QixNQUFNQyxRQUFRSCxJQUFJSSxLQUFLLENBQUNELEtBQUs7UUFDN0IsSUFBRyxDQUFDQSxPQUFPO1FBQ1hFLFlBQVlKLEtBQUtLLE9BQU9IO0lBQzVCLENBQUM7SUFFRCxJQUFJSCxJQUFJRSxNQUFNLEtBQUssT0FBTztRQUN0QixNQUFNSyxnQkFBZ0JQLElBQUlRLElBQUksQ0FBQ0QsYUFBYTtRQUM1QyxJQUFHLENBQUNBLGVBQWU7UUFDbkJFLGNBQWNSLEtBQUtNO0lBQ3ZCLENBQUM7QUFDTCxDQUFDO0FBRUQsZUFBZUYsWUFBWUosR0FBb0IsRUFBRUUsS0FBYSxFQUFFO0lBQzVELElBQUk7UUFDQSxNQUFNTyxVQUFVLE1BQU1aLGtFQUFxQixDQUFDO1lBQ3hDZSxPQUFPO2dCQUNIVixPQUFPQTtZQUNYO1lBQ0FXLFNBQVM7Z0JBQ0xKLFNBQVMsSUFBSTtZQUNqQjtRQUNKO1FBQ0FULElBQUljLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRU47UUFBUTtJQUNuQyxFQUFFLE9BQU9PLE9BQU87UUFDWmhCLElBQUljLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNDO0lBQ3pCO0FBQ0o7QUFFQSxlQUFlUixjQUFjUixHQUFvQixFQUFFTSxhQUE0QixFQUFFO0lBQzdFLElBQUk7UUFDQSxNQUFNVCwrREFBa0IsQ0FBQztZQUNyQmUsT0FBTztnQkFDSFYsT0FBT0ksY0FBY0osS0FBSztZQUM5QjtZQUNBZ0IsTUFBTTtnQkFDRkMsV0FBV2IsY0FBY2EsU0FBUztnQkFDbENDLFVBQVVkLGNBQWNjLFFBQVE7Z0JBQ2hDWCxTQUFTO29CQUNMUSxRQUFRO3dCQUNKSSxTQUFTZixjQUFjZSxPQUFPO3dCQUM5QkMsUUFBUWhCLGNBQWNnQixNQUFNO3dCQUM1QkMsVUFBVWpCLGNBQWNpQixRQUFRLElBQUksSUFBSUMsS0FBS2xCLGNBQWNpQixRQUFRO3dCQUNuRUUsTUFBTW5CLGNBQWNtQixJQUFJO3dCQUN4QkMsYUFBYXBCLGNBQWNxQixLQUFLO3dCQUNoQ0MsS0FBS3RCLGNBQWNzQixHQUFHO29CQUMxQjtnQkFDSjtZQUNKO1FBQ0o7UUFDQTVCLElBQUljLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7SUFDekIsRUFBRSxPQUFPQyxPQUFPO1FBQ1poQixJQUFJYyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDQztJQUN6QjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZS1jb21iYS8uL3BhZ2VzL2FwaS91c2VyL3Byb2ZpbGUudHM/NGUyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgUHJvZmlsZVVwZGF0ZSB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvdXNlcic7XG5pbXBvcnQgcHJpc21hIGZyb20gJy4vLi4vLi4vLi4vbGliL3ByaXNtYSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZShcbiAgICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICAgIHJlczogTmV4dEFwaVJlc3BvbnNlXG4pIHtcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgICAgICBjb25zdCBlbWFpbCA9IHJlcS5xdWVyeS5lbWFpbFxuICAgICAgICBpZighZW1haWwpIHJldHVyblxuICAgICAgICBwcm9maWxlVXNlcihyZXMsIFN0cmluZyhlbWFpbCkpXG4gICAgfVxuXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQVVQnKSB7XG4gICAgICAgIGNvbnN0IHByb2ZpbGVVcGRhdGUgPSByZXEuYm9keS5wcm9maWxlVXBkYXRlXG4gICAgICAgIGlmKCFwcm9maWxlVXBkYXRlKSByZXR1cm5cbiAgICAgICAgdXBkYXRlUHJvZmlsZShyZXMsIHByb2ZpbGVVcGRhdGUpXG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBwcm9maWxlVXNlcihyZXM6IE5leHRBcGlSZXNwb25zZSwgZW1haWw6IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHByb2ZpbGUgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xuICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgICBlbWFpbDogZW1haWxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAgcHJvZmlsZTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHByb2ZpbGUgfSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbihlcnJvcilcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2ZpbGUocmVzOiBOZXh0QXBpUmVzcG9uc2UsIHByb2ZpbGVVcGRhdGU6IFByb2ZpbGVVcGRhdGUpIHtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBwcmlzbWEudXNlci51cGRhdGUoe1xuICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgICBlbWFpbDogcHJvZmlsZVVwZGF0ZS5lbWFpbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IHByb2ZpbGVVcGRhdGUuZmlyc3ROYW1lLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiBwcm9maWxlVXBkYXRlLmxhc3ROYW1lLFxuICAgICAgICAgICAgICAgIHByb2ZpbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBwcm9maWxlVXBkYXRlLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI6IHByb2ZpbGVVcGRhdGUuYXZhdGFyLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmlydGhEYXk6IHByb2ZpbGVVcGRhdGUuYmlydGhEYXkgJiYgbmV3IERhdGUocHJvZmlsZVVwZGF0ZS5iaXJ0aERheSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjaXR5OiBwcm9maWxlVXBkYXRlLmNpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjogcHJvZmlsZVVwZGF0ZS5waG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNleDogcHJvZmlsZVVwZGF0ZS5zZXhcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oXCJVcGRhdGUgU3VjY2Vzc2Z1bFwiKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycm9yKVxuICAgIH1cbn0iXSwibmFtZXMiOlsicHJpc21hIiwiUHJvZmlsZSIsInJlcSIsInJlcyIsIm1ldGhvZCIsImVtYWlsIiwicXVlcnkiLCJwcm9maWxlVXNlciIsIlN0cmluZyIsInByb2ZpbGVVcGRhdGUiLCJib2R5IiwidXBkYXRlUHJvZmlsZSIsInByb2ZpbGUiLCJ1c2VyIiwiZmluZEZpcnN0Iiwid2hlcmUiLCJpbmNsdWRlIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwidXBkYXRlIiwiZGF0YSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiYWRkcmVzcyIsImF2YXRhciIsImJpcnRoRGF5IiwiRGF0ZSIsImNpdHkiLCJwaG9uZU51bWJlciIsInBob25lIiwic2V4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/profile.ts\n'
        );

        /***/
      },
  };
  // load runtime
  var __webpack_require__ = require("../../../webpack-api-runtime.js");
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_exec__(
    "(api)/./pages/api/user/profile.ts"
  );
  module.exports = __webpack_exports__;
})();
