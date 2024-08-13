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
  exports.id = "pages/api/user/login";
  exports.ids = ["pages/api/user/login"];
  exports.modules = {
    /***/ "@prisma/client":
      /*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
      /***/ (module) => {
        module.exports = require("@prisma/client");

        /***/
      },

    /***/ bcrypt:
      /*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
      /***/ (module) => {
        module.exports = require("bcrypt");

        /***/
      },

    /***/ cookie:
      /*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
      /***/ (module) => {
        module.exports = require("cookie");

        /***/
      },

    /***/ jsonwebtoken:
      /*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
      /***/ (module) => {
        module.exports = require("jsonwebtoken");

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

    /***/ "(api)/./pages/api/user/login.ts":
      /*!*********************************!*\
  !*** ./pages/api/user/login.ts ***!
  \*********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Login)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../lib/prisma */ "(api)/./lib/prisma.ts");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ "bcrypt");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie */ "cookie");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Login(req, res) {\n    if (req.method === "POST") {\n        const user = req.body.user;\n        if (!user) return;\n        LoginUser(user, res);\n    }\n}\nasync function LoginUser(user, res) {\n    try {\n        const secret = "12345";\n        const userCheck = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__["default"].user.findFirst({\n            where: {\n                email: user.email\n            }\n        });\n        if (!userCheck) res.status(400).json("Email kh\\xf4ng hợp lệ");\n        const validPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default().compare(user.password, String(userCheck?.password));\n        if (!validPassword) res.status(400).json("Mật khẩu kh\\xf4ng đ\\xfang");\n        if (userCheck && validPassword) {\n            const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({\n                id: userCheck?.id,\n                email: userCheck?.email,\n                firstName: userCheck?.firstName,\n                lastName: userCheck?.lastName,\n                admin: userCheck?.admin\n            }, secret);\n            res.setHeader("Set-Cookie", (0,cookie__WEBPACK_IMPORTED_MODULE_3__.serialize)("token", token, {\n                path: "/"\n            }));\n            res.status(200).json({\n                id: userCheck?.id,\n                email: userCheck?.email,\n                name: userCheck?.lastName,\n                admin: userCheck?.admin\n            });\n        }\n    } catch (error) {\n        res.status(500).json(error);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci9sb2dpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUUyQztBQUNmO0FBQ0c7QUFDSTtBQUdwQixTQUFTSSxNQUNwQkMsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ3RCO0lBQ0UsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDdkIsTUFBTUMsT0FBT0gsSUFBSUksSUFBSSxDQUFDRCxJQUFJO1FBQzFCLElBQUksQ0FBQ0EsTUFBTTtRQUNYRSxVQUFVRixNQUFNRjtJQUNwQixDQUFDO0FBQ0wsQ0FBQztBQUVELGVBQWVJLFVBQVVGLElBQVUsRUFBRUYsR0FBb0IsRUFBRTtJQUN2RCxJQUFJO1FBQ0EsTUFBTUssU0FBUztRQUNmLE1BQU1DLFlBQVksTUFBTVosa0VBQXFCLENBQUM7WUFDMUNjLE9BQU87Z0JBQ0hDLE9BQU9QLEtBQUtPLEtBQUs7WUFDckI7UUFDSjtRQUNBLElBQUksQ0FBQ0gsV0FDRE4sSUFBSVUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUV6QixNQUFNQyxnQkFBZ0IsTUFBTWpCLHFEQUFjLENBQ3RDTyxLQUFLWSxRQUFRLEVBQ2JDLE9BQU9ULFdBQVdRO1FBRXRCLElBQUksQ0FBQ0YsZUFDRFosSUFBSVUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUV6QixJQUFJTCxhQUFhTSxlQUFlO1lBQzVCLE1BQU1JLFFBQVFwQix3REFBUSxDQUNsQjtnQkFDSXNCLElBQUlaLFdBQVdZO2dCQUNmVCxPQUFPSCxXQUFXRztnQkFDbEJVLFdBQVdiLFdBQVdhO2dCQUN0QkMsVUFBVWQsV0FBV2M7Z0JBQ3JCQyxPQUFPZixXQUFXZTtZQUN0QixHQUNBaEI7WUFFSkwsSUFBSXNCLFNBQVMsQ0FBQyxjQUFjekIsaURBQVNBLENBQUMsU0FBU21CLE9BQU87Z0JBQUVPLE1BQU07WUFBSTtZQUVsRXZCLElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQ2pCTyxJQUFJWixXQUFXWTtnQkFDZlQsT0FBT0gsV0FBV0c7Z0JBQ2xCZSxNQUFNbEIsV0FBV2M7Z0JBQ2pCQyxPQUFPZixXQUFXZTtZQUN0QjtRQUNKLENBQUM7SUFDTCxFQUFFLE9BQU9JLE9BQU87UUFDWnpCLElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNjO0lBQ3pCO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lLWNvbWJhLy4vcGFnZXMvYXBpL3VzZXIvbG9naW4udHM/ZDg4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy91c2VyJztcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi8uLi8uLi8uLi9saWIvcHJpc21hJztcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5pbXBvcnQgeyBzZXJpYWxpemUgfSBmcm9tIFwiY29va2llXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oXG4gICAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgICByZXM6IE5leHRBcGlSZXNwb25zZVxuKSB7XG4gICAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgICAgIGNvbnN0IHVzZXIgPSByZXEuYm9keS51c2VyXG4gICAgICAgIGlmICghdXNlcikgcmV0dXJuXG4gICAgICAgIExvZ2luVXNlcih1c2VyLCByZXMpXG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBMb2dpblVzZXIodXNlcjogVXNlciwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBzZWNyZXQgPSAnMTIzNDUnXG4gICAgICAgIGNvbnN0IHVzZXJDaGVjayA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGlmICghdXNlckNoZWNrKVxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oJ0VtYWlsIGtow7RuZyBo4bujcCBs4buHJylcblxuICAgICAgICBjb25zdCB2YWxpZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUoXG4gICAgICAgICAgICB1c2VyLnBhc3N3b3JkLFxuICAgICAgICAgICAgU3RyaW5nKHVzZXJDaGVjaz8ucGFzc3dvcmQpXG4gICAgICAgICk7XG4gICAgICAgIGlmICghdmFsaWRQYXNzd29yZClcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKFwiTeG6rXQga2jhuql1IGtow7RuZyDEkcO6bmdcIik7XG5cbiAgICAgICAgaWYgKHVzZXJDaGVjayAmJiB2YWxpZFBhc3N3b3JkKSB7XG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHVzZXJDaGVjaz8uaWQsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyQ2hlY2s/LmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IHVzZXJDaGVjaz8uZmlyc3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZTogdXNlckNoZWNrPy5sYXN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgYWRtaW46IHVzZXJDaGVjaz8uYWRtaW5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNlY3JldFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJlcy5zZXRIZWFkZXIoXCJTZXQtQ29va2llXCIsIHNlcmlhbGl6ZShcInRva2VuXCIsIHRva2VuLCB7IHBhdGg6IFwiL1wiIH0pKTtcblxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgIGlkOiB1c2VyQ2hlY2s/LmlkLFxuICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyQ2hlY2s/LmVtYWlsLFxuICAgICAgICAgICAgICAgIG5hbWU6IHVzZXJDaGVjaz8ubGFzdE5hbWUsXG4gICAgICAgICAgICAgICAgYWRtaW46IHVzZXJDaGVjaz8uYWRtaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyb3IpXG4gICAgfVxufSJdLCJuYW1lcyI6WyJwcmlzbWEiLCJiY3J5cHQiLCJqd3QiLCJzZXJpYWxpemUiLCJMb2dpbiIsInJlcSIsInJlcyIsIm1ldGhvZCIsInVzZXIiLCJib2R5IiwiTG9naW5Vc2VyIiwic2VjcmV0IiwidXNlckNoZWNrIiwiZmluZEZpcnN0Iiwid2hlcmUiLCJlbWFpbCIsInN0YXR1cyIsImpzb24iLCJ2YWxpZFBhc3N3b3JkIiwiY29tcGFyZSIsInBhc3N3b3JkIiwiU3RyaW5nIiwidG9rZW4iLCJzaWduIiwiaWQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImFkbWluIiwic2V0SGVhZGVyIiwicGF0aCIsIm5hbWUiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/login.ts\n'
        );

        /***/
      },
  };
  // load runtime
  var __webpack_require__ = require("../../../webpack-api-runtime.js");
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_exec__("(api)/./pages/api/user/login.ts");
  module.exports = __webpack_exports__;
})();
