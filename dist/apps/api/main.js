(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/api/src/app/app.controller.ts":
/*!********************************************!*\
  !*** ./apps/api/src/app/app.controller.ts ***!
  \********************************************/
/*! exports provided: AppController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppController", function() { return AppController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cooper/api-interfaces */ "./libs/api-interfaces/src/index.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.service */ "./apps/api/src/app/app.service.ts");
var _a, _b;




let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('hello'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_a = typeof _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["Message"] !== "undefined" && _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["Message"]) === "function" ? _a : Object)
], AppController.prototype, "getData", null);
AppController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_b = typeof _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] !== "undefined" && _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]) === "function" ? _b : Object])
], AppController);



/***/ }),

/***/ "./apps/api/src/app/app.module.ts":
/*!****************************************!*\
  !*** ./apps/api/src/app/app.module.ts ***!
  \****************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_serve_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/serve-static */ "@nestjs/serve-static");
/* harmony import */ var _nestjs_serve_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_serve_static__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.controller */ "./apps/api/src/app/app.controller.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.service */ "./apps/api/src/app/app.service.ts");
/* harmony import */ var pg_connection_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pg-connection-string */ "pg-connection-string");
/* harmony import */ var pg_connection_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pg_connection_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./entities */ "./apps/api/src/app/entities/index.ts");
/* harmony import */ var _controllers_modules__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controllers/modules */ "./apps/api/src/app/controllers/modules/index.ts");










const databaseUrl = process.env.DATABASE_URL;
const connectionOptions = databaseUrl ? pg_connection_string__WEBPACK_IMPORTED_MODULE_7__["parse"](databaseUrl) : undefined;
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_serve_static__WEBPACK_IMPORTED_MODULE_2__["ServeStaticModule"].forRoot({
                rootPath: Object(path__WEBPACK_IMPORTED_MODULE_4__["join"])(__dirname, '..', 'pantry'),
                exclude: ['/api*']
            }),
            _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__["TypeOrmModule"].forRoot({
                type: 'postgres',
                host: connectionOptions ? connectionOptions.host : 'localhost',
                port: connectionOptions ? parseInt(connectionOptions.port, 10) : 5432,
                username: connectionOptions ? connectionOptions.user : 'postgres',
                password: connectionOptions ? connectionOptions.password : 'demo',
                database: connectionOptions ? connectionOptions.database : 'cooper-pantry',
                entities: [
                    ..._entities__WEBPACK_IMPORTED_MODULE_8__["entities"],
                ],
                synchronize: true,
            }),
            ..._controllers_modules__WEBPACK_IMPORTED_MODULE_9__["controllerModules"]
        ],
        controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_5__["AppController"]],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]]
    })
], AppModule);



/***/ }),

/***/ "./apps/api/src/app/app.service.ts":
/*!*****************************************!*\
  !*** ./apps/api/src/app/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let AppService = class AppService {
    getData() {
        return { message: 'Welcome to api!' };
    }
};
AppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppService);



/***/ }),

/***/ "./apps/api/src/app/common/index.ts":
/*!******************************************!*\
  !*** ./apps/api/src/app/common/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ "./apps/api/src/app/common/models/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _models__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _models__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./apps/api/src/app/common/models/index.ts":
/*!*************************************************!*\
  !*** ./apps/api/src/app/common/models/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _payload_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payload.model */ "./apps/api/src/app/common/models/payload.model.ts");
/* harmony import */ var _payload_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_payload_model__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _payload_model__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _payload_model__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./apps/api/src/app/common/models/payload.model.ts":
/*!*********************************************************!*\
  !*** ./apps/api/src/app/common/models/payload.model.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./apps/api/src/app/controllers/communication.controller.ts":
/*!******************************************************************!*\
  !*** ./apps/api/src/app/controllers/communication.controller.ts ***!
  \******************************************************************/
/*! exports provided: CommunicationsController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationsController", function() { return CommunicationsController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_twilio_twilio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/twilio/twilio.service */ "./apps/api/src/app/services/twilio/twilio.service.ts");
var _a;



let CommunicationsController = class CommunicationsController {
    constructor(twilioService) {
        this.twilioService = twilioService;
    }
    getChatAccessToken(req) {
        return this.twilioService.generateChatAccessToken(req);
    }
    addChatBot() {
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('chatAccessToken'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", String)
], CommunicationsController.prototype, "getChatAccessToken", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('addBot'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], CommunicationsController.prototype, "addChatBot", null);
CommunicationsController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('communications'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _services_twilio_twilio_service__WEBPACK_IMPORTED_MODULE_2__["TwilioService"] !== "undefined" && _services_twilio_twilio_service__WEBPACK_IMPORTED_MODULE_2__["TwilioService"]) === "function" ? _a : Object])
], CommunicationsController);



/***/ }),

/***/ "./apps/api/src/app/controllers/modules/communication-http.module.ts":
/*!***************************************************************************!*\
  !*** ./apps/api/src/app/controllers/modules/communication-http.module.ts ***!
  \***************************************************************************/
/*! exports provided: CommunicationHttpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationHttpModule", function() { return CommunicationHttpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_twilio_twilio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/twilio/twilio.service */ "./apps/api/src/app/services/twilio/twilio.service.ts");
/* harmony import */ var _communication_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../communication.controller */ "./apps/api/src/app/controllers/communication.controller.ts");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);




let CommunicationHttpModule = class CommunicationHttpModule {
};
CommunicationHttpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__["Module"])({
        providers: [_services_twilio_twilio_service__WEBPACK_IMPORTED_MODULE_1__["TwilioService"]],
        controllers: [_communication_controller__WEBPACK_IMPORTED_MODULE_2__["CommunicationsController"]]
    })
], CommunicationHttpModule);



/***/ }),

/***/ "./apps/api/src/app/controllers/modules/index.ts":
/*!*******************************************************!*\
  !*** ./apps/api/src/app/controllers/modules/index.ts ***!
  \*******************************************************/
/*! exports provided: controllerModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controllerModules", function() { return controllerModules; });
/* harmony import */ var _pantry_http_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pantry-http.module */ "./apps/api/src/app/controllers/modules/pantry-http.module.ts");
/* harmony import */ var _survey_response_http_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./survey-response-http.module */ "./apps/api/src/app/controllers/modules/survey-response-http.module.ts");
/* harmony import */ var _communication_http_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./communication-http.module */ "./apps/api/src/app/controllers/modules/communication-http.module.ts");



const controllerModules = [
    _pantry_http_module__WEBPACK_IMPORTED_MODULE_0__["PantryHttpModule"],
    _survey_response_http_module__WEBPACK_IMPORTED_MODULE_1__["SurveyResponseHttpModule"],
    _communication_http_module__WEBPACK_IMPORTED_MODULE_2__["CommunicationHttpModule"]
];


/***/ }),

/***/ "./apps/api/src/app/controllers/modules/pantry-http.module.ts":
/*!********************************************************************!*\
  !*** ./apps/api/src/app/controllers/modules/pantry-http.module.ts ***!
  \********************************************************************/
/*! exports provided: PantryHttpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PantryHttpModule", function() { return PantryHttpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../entities */ "./apps/api/src/app/entities/index.ts");
/* harmony import */ var _services_resource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/resource */ "./apps/api/src/app/services/resource/index.ts");
/* harmony import */ var _pantry_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pantry.controller */ "./apps/api/src/app/controllers/pantry.controller.ts");
/* harmony import */ var _services_repository_pantry_repo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/repository/pantry-repo.service */ "./apps/api/src/app/services/repository/pantry-repo.service.ts");






let PantryHttpModule = class PantryHttpModule {
};
PantryHttpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_entities__WEBPACK_IMPORTED_MODULE_2__["PantryModule"]],
        providers: [_services_resource__WEBPACK_IMPORTED_MODULE_3__["PantryResourceService"], _services_repository_pantry_repo_service__WEBPACK_IMPORTED_MODULE_5__["PantryRepoService"]],
        controllers: [_pantry_controller__WEBPACK_IMPORTED_MODULE_4__["PantriesController"]]
    })
], PantryHttpModule);



/***/ }),

/***/ "./apps/api/src/app/controllers/modules/survey-response-http.module.ts":
/*!*****************************************************************************!*\
  !*** ./apps/api/src/app/controllers/modules/survey-response-http.module.ts ***!
  \*****************************************************************************/
/*! exports provided: SurveyResponseHttpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyResponseHttpModule", function() { return SurveyResponseHttpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../entities */ "./apps/api/src/app/entities/index.ts");
/* harmony import */ var _services_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/repository */ "./apps/api/src/app/services/repository/index.ts");
/* harmony import */ var _services_resource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/resource */ "./apps/api/src/app/services/resource/index.ts");
/* harmony import */ var _survey_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../survey.controller */ "./apps/api/src/app/controllers/survey.controller.ts");






let SurveyResponseHttpModule = class SurveyResponseHttpModule {
};
SurveyResponseHttpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_entities__WEBPACK_IMPORTED_MODULE_2__["SurveyResponseModule"]],
        providers: [_services_repository__WEBPACK_IMPORTED_MODULE_3__["SurveyResponseRepoService"], _services_resource__WEBPACK_IMPORTED_MODULE_4__["SurveyResponseResourceService"]],
        controllers: [_survey_controller__WEBPACK_IMPORTED_MODULE_5__["SurveyResponsesController"]]
    })
], SurveyResponseHttpModule);



/***/ }),

/***/ "./apps/api/src/app/controllers/pantry.controller.ts":
/*!***********************************************************!*\
  !*** ./apps/api/src/app/controllers/pantry.controller.ts ***!
  \***********************************************************/
/*! exports provided: PantriesController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PantriesController", function() { return PantriesController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common */ "./apps/api/src/app/common/index.ts");
/* harmony import */ var _services_resource_pantry_resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/resource/pantry-resource.service */ "./apps/api/src/app/services/resource/pantry-resource.service.ts");
var _a, _b, _c, _d;




let PantriesController = class PantriesController {
    constructor(service) {
        this.service = service;
    }
    get() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return this.service.get();
            }
            catch (err) {
                return {
                    errors: [{
                            status: '500',
                            title: 'Failed to fetch pantries.'
                        }]
                };
            }
        });
    }
    post(pantry) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return this.service.upsert(pantry);
            }
            catch (err) {
                return {
                    errors: [{
                            status: '500',
                            title: 'Failed to fetch pantries.'
                        }]
                };
            }
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], PantriesController.prototype, "get", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_b = typeof _common__WEBPACK_IMPORTED_MODULE_2__["IPayload"] !== "undefined" && _common__WEBPACK_IMPORTED_MODULE_2__["IPayload"]) === "function" ? _b : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], PantriesController.prototype, "post", null);
PantriesController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('pantries'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_d = typeof _services_resource_pantry_resource_service__WEBPACK_IMPORTED_MODULE_3__["PantryResourceService"] !== "undefined" && _services_resource_pantry_resource_service__WEBPACK_IMPORTED_MODULE_3__["PantryResourceService"]) === "function" ? _d : Object])
], PantriesController);



/***/ }),

/***/ "./apps/api/src/app/controllers/survey.controller.ts":
/*!***********************************************************!*\
  !*** ./apps/api/src/app/controllers/survey.controller.ts ***!
  \***********************************************************/
/*! exports provided: SurveyResponsesController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyResponsesController", function() { return SurveyResponsesController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/resource */ "./apps/api/src/app/services/resource/index.ts");
var _a, _b, _c;



let SurveyResponsesController = class SurveyResponsesController {
    constructor(service) {
        this.service = service;
    }
    post(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.service.addBotSurveyResponse(response);
            return Promise.resolve({
                actions: [
                    {
                        redirect: {
                            uri: "task://complete_survey"
                        }
                    }
                ]
            });
        });
    }
    get() {
        return this.service.get();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], SurveyResponsesController.prototype, "post", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], SurveyResponsesController.prototype, "get", null);
SurveyResponsesController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('survey-responses'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _services_resource__WEBPACK_IMPORTED_MODULE_2__["SurveyResponseResourceService"] !== "undefined" && _services_resource__WEBPACK_IMPORTED_MODULE_2__["SurveyResponseResourceService"]) === "function" ? _c : Object])
], SurveyResponsesController);



/***/ }),

/***/ "./apps/api/src/app/entities/index.ts":
/*!********************************************!*\
  !*** ./apps/api/src/app/entities/index.ts ***!
  \********************************************/
/*! exports provided: PantryModule, SurveyResponseModule, Pantry, SurveyResponse, entities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entities", function() { return entities; });
/* harmony import */ var _pantry_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pantry.entity */ "./apps/api/src/app/entities/pantry.entity.ts");
/* harmony import */ var _survey_response_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./survey-response.entity */ "./apps/api/src/app/entities/survey-response.entity.ts");
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules */ "./apps/api/src/app/entities/modules/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PantryModule", function() { return _modules__WEBPACK_IMPORTED_MODULE_2__["PantryModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyResponseModule", function() { return _modules__WEBPACK_IMPORTED_MODULE_2__["SurveyResponseModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pantry", function() { return _pantry_entity__WEBPACK_IMPORTED_MODULE_0__["Pantry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyResponse", function() { return _survey_response_entity__WEBPACK_IMPORTED_MODULE_1__["SurveyResponse"]; });






const entities = [
    _pantry_entity__WEBPACK_IMPORTED_MODULE_0__["Pantry"],
    _survey_response_entity__WEBPACK_IMPORTED_MODULE_1__["SurveyResponse"]
];


/***/ }),

/***/ "./apps/api/src/app/entities/modules/index.ts":
/*!****************************************************!*\
  !*** ./apps/api/src/app/entities/modules/index.ts ***!
  \****************************************************/
/*! exports provided: PantryModule, SurveyResponseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pantry_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pantry.module */ "./apps/api/src/app/entities/modules/pantry.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PantryModule", function() { return _pantry_module__WEBPACK_IMPORTED_MODULE_0__["PantryModule"]; });

/* harmony import */ var _survey_response_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./survey-response.module */ "./apps/api/src/app/entities/modules/survey-response.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyResponseModule", function() { return _survey_response_module__WEBPACK_IMPORTED_MODULE_1__["SurveyResponseModule"]; });





/***/ }),

/***/ "./apps/api/src/app/entities/modules/pantry.module.ts":
/*!************************************************************!*\
  !*** ./apps/api/src/app/entities/modules/pantry.module.ts ***!
  \************************************************************/
/*! exports provided: PantryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PantryModule", function() { return PantryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pantry_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pantry.entity */ "./apps/api/src/app/entities/pantry.entity.ts");




let PantryModule = class PantryModule {
};
PantryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Module"])({
        imports: [_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_1__["TypeOrmModule"].forFeature([_pantry_entity__WEBPACK_IMPORTED_MODULE_3__["Pantry"]])],
        exports: [_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_1__["TypeOrmModule"]]
    })
], PantryModule);



/***/ }),

/***/ "./apps/api/src/app/entities/modules/survey-response.module.ts":
/*!*********************************************************************!*\
  !*** ./apps/api/src/app/entities/modules/survey-response.module.ts ***!
  \*********************************************************************/
/*! exports provided: SurveyResponseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyResponseModule", function() { return SurveyResponseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _survey_response_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../survey-response.entity */ "./apps/api/src/app/entities/survey-response.entity.ts");




let SurveyResponseModule = class SurveyResponseModule {
};
SurveyResponseModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Module"])({
        imports: [_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_1__["TypeOrmModule"].forFeature([_survey_response_entity__WEBPACK_IMPORTED_MODULE_3__["SurveyResponse"]])],
        exports: [_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_1__["TypeOrmModule"]]
    })
], SurveyResponseModule);



/***/ }),

/***/ "./apps/api/src/app/entities/pantry.entity.ts":
/*!****************************************************!*\
  !*** ./apps/api/src/app/entities/pantry.entity.ts ***!
  \****************************************************/
/*! exports provided: Pantry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pantry", function() { return Pantry; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);


let Pantry = class Pantry {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryGeneratedColumn"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], Pantry.prototype, "id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Pantry.prototype, "name", void 0);
Pantry = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])()
], Pantry);



/***/ }),

/***/ "./apps/api/src/app/entities/survey-response.entity.ts":
/*!*************************************************************!*\
  !*** ./apps/api/src/app/entities/survey-response.entity.ts ***!
  \*************************************************************/
/*! exports provided: SurveyResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyResponse", function() { return SurveyResponse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);


let SurveyResponse = class SurveyResponse {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryGeneratedColumn"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], SurveyResponse.prototype, "id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('jsonb'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SurveyResponse.prototype, "response", void 0);
SurveyResponse = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])()
], SurveyResponse);



/***/ }),

/***/ "./apps/api/src/app/services/repository/index.ts":
/*!*******************************************************!*\
  !*** ./apps/api/src/app/services/repository/index.ts ***!
  \*******************************************************/
/*! exports provided: PantryRepoService, SurveyResponseRepoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pantry_repo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pantry-repo.service */ "./apps/api/src/app/services/repository/pantry-repo.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PantryRepoService", function() { return _pantry_repo_service__WEBPACK_IMPORTED_MODULE_0__["PantryRepoService"]; });

/* harmony import */ var _survey_responses_repo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./survey-responses-repo.service */ "./apps/api/src/app/services/repository/survey-responses-repo.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyResponseRepoService", function() { return _survey_responses_repo_service__WEBPACK_IMPORTED_MODULE_1__["SurveyResponseRepoService"]; });





/***/ }),

/***/ "./apps/api/src/app/services/repository/pantry-repo.service.ts":
/*!*********************************************************************!*\
  !*** ./apps/api/src/app/services/repository/pantry-repo.service.ts ***!
  \*********************************************************************/
/*! exports provided: PantryRepoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PantryRepoService", function() { return PantryRepoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../entities */ "./apps/api/src/app/entities/index.ts");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_4__);
var _a;





let PantryRepoService = class PantryRepoService {
    constructor(pantryRepo) {
        this.pantryRepo = pantryRepo;
    }
    findAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.pantryRepo.find();
        });
    }
    add(pantry) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.pantryRepo.save(pantry);
        });
    }
};
PantryRepoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["InjectRepository"])(_entities__WEBPACK_IMPORTED_MODULE_3__["Pantry"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof typeorm__WEBPACK_IMPORTED_MODULE_4__["Repository"] !== "undefined" && typeorm__WEBPACK_IMPORTED_MODULE_4__["Repository"]) === "function" ? _a : Object])
], PantryRepoService);



/***/ }),

/***/ "./apps/api/src/app/services/repository/survey-responses-repo.service.ts":
/*!*******************************************************************************!*\
  !*** ./apps/api/src/app/services/repository/survey-responses-repo.service.ts ***!
  \*******************************************************************************/
/*! exports provided: SurveyResponseRepoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyResponseRepoService", function() { return SurveyResponseRepoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../entities */ "./apps/api/src/app/entities/index.ts");
var _a;





let SurveyResponseRepoService = class SurveyResponseRepoService {
    constructor(pantryRepo) {
        this.pantryRepo = pantryRepo;
    }
    findAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.pantryRepo.find();
        });
    }
    add(pantry) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.pantryRepo.save(pantry);
        });
    }
};
SurveyResponseRepoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["InjectRepository"])(_entities__WEBPACK_IMPORTED_MODULE_4__["SurveyResponse"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof typeorm__WEBPACK_IMPORTED_MODULE_3__["Repository"] !== "undefined" && typeorm__WEBPACK_IMPORTED_MODULE_3__["Repository"]) === "function" ? _a : Object])
], SurveyResponseRepoService);



/***/ }),

/***/ "./apps/api/src/app/services/resource/index.ts":
/*!*****************************************************!*\
  !*** ./apps/api/src/app/services/resource/index.ts ***!
  \*****************************************************/
/*! exports provided: PantryResourceService, SurveyResponseResourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pantry_resource_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pantry-resource.service */ "./apps/api/src/app/services/resource/pantry-resource.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PantryResourceService", function() { return _pantry_resource_service__WEBPACK_IMPORTED_MODULE_0__["PantryResourceService"]; });

/* harmony import */ var _survey_responses_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./survey-responses.service */ "./apps/api/src/app/services/resource/survey-responses.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyResponseResourceService", function() { return _survey_responses_service__WEBPACK_IMPORTED_MODULE_1__["SurveyResponseResourceService"]; });





/***/ }),

/***/ "./apps/api/src/app/services/resource/pantry-resource.service.ts":
/*!***********************************************************************!*\
  !*** ./apps/api/src/app/services/resource/pantry-resource.service.ts ***!
  \***********************************************************************/
/*! exports provided: PantryResourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PantryResourceService", function() { return PantryResourceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../repository */ "./apps/api/src/app/services/repository/index.ts");
var _a;



let PantryResourceService = class PantryResourceService {
    constructor(pantryRepo) {
        this.pantryRepo = pantryRepo;
        this.resourceType = 'pantry';
    }
    get() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const pantries = yield this.pantryRepo.findAll();
            return {
                data: pantries.map((p) => ({
                    type: this.resourceType,
                    id: p.id.toString(),
                    attributes: this.mapPantryEntityToResource(p)
                }))
            };
        });
    }
    upsert(request) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = Array.isArray(request.data) ? request.data : [request.data];
            const createdEntities = [];
            for (const d of data.filter((de) => de !== undefined && de !== null)) {
                const newResource = {
                    id: d.id ? parseInt(d.id, 10) : undefined,
                    name: d.attributes.name,
                };
                const p = yield this.pantryRepo.add(newResource);
                createdEntities.push(p);
            }
            const mappedEntities = createdEntities.map((e) => ({
                id: e.id.toString(),
                type: this.resourceType,
                attributes: this.mapPantryEntityToResource(e)
            }));
            return {
                data: Array.isArray(request.data)
                    ? mappedEntities
                    : (mappedEntities.length === 1 ? mappedEntities[0] : undefined)
            };
        });
    }
    mapPantryEntityToResource(pantry) {
        return {
            name: pantry.name
        };
    }
};
PantryResourceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _repository__WEBPACK_IMPORTED_MODULE_2__["PantryRepoService"] !== "undefined" && _repository__WEBPACK_IMPORTED_MODULE_2__["PantryRepoService"]) === "function" ? _a : Object])
], PantryResourceService);



/***/ }),

/***/ "./apps/api/src/app/services/resource/survey-responses.service.ts":
/*!************************************************************************!*\
  !*** ./apps/api/src/app/services/resource/survey-responses.service.ts ***!
  \************************************************************************/
/*! exports provided: SurveyResponseResourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyResponseResourceService", function() { return SurveyResponseResourceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../repository */ "./apps/api/src/app/services/repository/index.ts");
var _a;



let SurveyResponseResourceService = class SurveyResponseResourceService {
    constructor(repo) {
        this.repo = repo;
    }
    addBotSurveyResponse(response) {
        const entity = { id: undefined, response: response };
        return this.repo.add(entity);
    }
    get() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const entities = yield this.repo.findAll();
            return {
                data: entities.map((e) => ({
                    type: 'survey-response',
                    id: e.id.toString(),
                    attributes: Object.assign({}, e.response)
                }))
            };
        });
    }
};
SurveyResponseResourceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _repository__WEBPACK_IMPORTED_MODULE_2__["SurveyResponseRepoService"] !== "undefined" && _repository__WEBPACK_IMPORTED_MODULE_2__["SurveyResponseRepoService"]) === "function" ? _a : Object])
], SurveyResponseResourceService);



/***/ }),

/***/ "./apps/api/src/app/services/twilio/twilio.service.ts":
/*!************************************************************!*\
  !*** ./apps/api/src/app/services/twilio/twilio.service.ts ***!
  \************************************************************/
/*! exports provided: TwilioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwilioService", function() { return TwilioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./apps/api/src/environments/environment.ts");
/* harmony import */ var twilio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! twilio */ "twilio");
/* harmony import */ var twilio__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(twilio__WEBPACK_IMPORTED_MODULE_3__);




let TwilioService = class TwilioService {
    generateChatAccessToken(req) {
        const twilioAccountSid = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production ? process.env.TWILIO_ACCOUNT_SID : _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].twilioAccount;
        const twilioApiKey = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production ? process.env.TWILIO_API_KEY : _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].twilioChatApiKey;
        const twilioApiSecret = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production ? process.env.TWILIO_CHAT_API_SECRET : _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].twilioChatApiSecret;
        const serviceSid = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production ? process.env.TWILIO_CHAT_SERVICE_SID : _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].twilioChatSid;
        const chatGrant = new twilio__WEBPACK_IMPORTED_MODULE_3__["jwt"].AccessToken.ChatGrant({
            serviceSid: serviceSid,
        });
        const token = new twilio__WEBPACK_IMPORTED_MODULE_3__["jwt"].AccessToken(twilioAccountSid, twilioApiKey, twilioApiSecret, { identity: req.identity });
        token.addGrant(chatGrant);
        return token.toJwt();
    }
};
TwilioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TwilioService);



/***/ }),

/***/ "./apps/api/src/environments/environment.ts":
/*!**************************************************!*\
  !*** ./apps/api/src/environments/environment.ts ***!
  \**************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    twilioAccount: 'AC##',
    twilioChatSid: 'IS##',
    twilioChatApiKey: 'SK##',
    twilioChatApiSecret: '##',
};


/***/ }),

/***/ "./apps/api/src/main.ts":
/*!******************************!*\
  !*** ./apps/api/src/main.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./apps/api/src/app/app.module.ts");
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */



function bootstrap() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_1__["NestFactory"].create(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
        const globalPrefix = 'api';
        app.enableCors();
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3333;
        yield app.listen(port, () => {
            console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
        });
    });
}
bootstrap();


/***/ }),

/***/ "./libs/api-interfaces/src/index.ts":
/*!******************************************!*\
  !*** ./libs/api-interfaces/src/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/api-interfaces */ "./libs/api-interfaces/src/lib/api-interfaces.ts");
/* harmony import */ var _lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./libs/api-interfaces/src/lib/api-interfaces.ts":
/*!*******************************************************!*\
  !*** ./libs/api-interfaces/src/lib/api-interfaces.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./apps/api/src/main.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Gabrielle2\Development\Web\cooper-pantry\cooper\apps\api\src\main.ts */"./apps/api/src/main.ts");


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/serve-static":
/*!***************************************!*\
  !*** external "@nestjs/serve-static" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/serve-static");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "pg-connection-string":
/*!***************************************!*\
  !*** external "pg-connection-string" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pg-connection-string");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),

/***/ "twilio":
/*!*************************!*\
  !*** external "twilio" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("twilio");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typeorm");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map