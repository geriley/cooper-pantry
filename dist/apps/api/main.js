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


let AppController = class AppController {
    getData() {
        return { message: 'hello' };
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('hello'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], AppController.prototype, "getData", null);
AppController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])()
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
/* harmony import */ var pg_connection_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pg-connection-string */ "pg-connection-string");
/* harmony import */ var pg_connection_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pg_connection_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./entities */ "./apps/api/src/app/entities/index.ts");
/* harmony import */ var _controllers_modules__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controllers/modules */ "./apps/api/src/app/controllers/modules/index.ts");









const databaseUrl = process.env.DATABASE_URL;
const connectionOptions = databaseUrl ? pg_connection_string__WEBPACK_IMPORTED_MODULE_6__["parse"](databaseUrl) : undefined;
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
                    ..._entities__WEBPACK_IMPORTED_MODULE_7__["entities"],
                ],
                synchronize: true,
            }),
            ..._controllers_modules__WEBPACK_IMPORTED_MODULE_8__["controllerModules"],
        ],
        controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_5__["AppController"]],
    })
], AppModule);



/***/ }),

/***/ "./apps/api/src/app/common/base-resource.service.ts":
/*!**********************************************************!*\
  !*** ./apps/api/src/app/common/base-resource.service.ts ***!
  \**********************************************************/
/*! exports provided: ResourceServiceHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceServiceHelper", function() { return ResourceServiceHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let ResourceServiceHelper = class ResourceServiceHelper {
    mapToDTOListPayload(resourceType, { entities, attributeMapper }) {
        return {
            data: entities
                .filter((e) => e !== undefined)
                .map((entity) => ({
                id: entity.id.toString(),
                type: resourceType,
                attributes: attributeMapper(entity)
            }))
        };
    }
    mapToDTOPayload(resourceType, { entity, attributeMapper }) {
        return {
            data: entity ? {
                id: entity.id.toString(),
                type: resourceType,
                attributes: attributeMapper(entity)
            } : undefined,
        };
    }
    addRequestedResources(request, addMethod) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = Array.isArray(request) ? request : [request];
            const entities = [];
            for (const d of data.filter((de) => de !== undefined && de !== null)) {
                const p = yield addMethod(d);
                entities.push(p);
            }
            return entities;
        });
    }
};
ResourceServiceHelper = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ResourceServiceHelper);



/***/ }),

/***/ "./apps/api/src/app/common/index.ts":
/*!******************************************!*\
  !*** ./apps/api/src/app/common/index.ts ***!
  \******************************************/
/*! exports provided: ResourceServiceHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_resource_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-resource.service */ "./apps/api/src/app/common/base-resource.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResourceServiceHelper", function() { return _base_resource_service__WEBPACK_IMPORTED_MODULE_0__["ResourceServiceHelper"]; });




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
/* harmony import */ var _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cooper/api-interfaces */ "./libs/api-interfaces/src/index.ts");
var _a, _b, _c;




let CommunicationsController = class CommunicationsController {
    constructor(twilioService) {
        this.twilioService = twilioService;
    }
    getChatAccessToken(req) {
        return {
            jwt: this.twilioService.generateChatAccessToken(req)
        };
    }
    addChatBot(req) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.twilioService.addBotToChannel(req);
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('chatAccessToken'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Object)
], CommunicationsController.prototype, "getChatAccessToken", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('addBot'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_3__["IAddBotRequestDTO"] !== "undefined" && _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_3__["IAddBotRequestDTO"]) === "function" ? _a : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], CommunicationsController.prototype, "addChatBot", null);
CommunicationsController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('communications'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _services_twilio_twilio_service__WEBPACK_IMPORTED_MODULE_2__["TwilioService"] !== "undefined" && _services_twilio_twilio_service__WEBPACK_IMPORTED_MODULE_2__["TwilioService"]) === "function" ? _c : Object])
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
/* harmony import */ var _user_http_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-http.module */ "./apps/api/src/app/controllers/modules/user-http.module.ts");




const controllerModules = [
    _pantry_http_module__WEBPACK_IMPORTED_MODULE_0__["PantryHttpModule"],
    _survey_response_http_module__WEBPACK_IMPORTED_MODULE_1__["SurveyResponseHttpModule"],
    _communication_http_module__WEBPACK_IMPORTED_MODULE_2__["CommunicationHttpModule"],
    _user_http_module__WEBPACK_IMPORTED_MODULE_3__["UserHttpModule"]
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

/***/ "./apps/api/src/app/controllers/modules/user-http.module.ts":
/*!******************************************************************!*\
  !*** ./apps/api/src/app/controllers/modules/user-http.module.ts ***!
  \******************************************************************/
/*! exports provided: UserHttpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHttpModule", function() { return UserHttpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _entities_modules_user_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../entities/modules/user.module */ "./apps/api/src/app/entities/modules/user.module.ts");
/* harmony import */ var _services_resource_user_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/resource/user-resource.service */ "./apps/api/src/app/services/resource/user-resource.service.ts");
/* harmony import */ var _services_repository_user_repo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/repository/user-repo.service */ "./apps/api/src/app/services/repository/user-repo.service.ts");
/* harmony import */ var _user_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.controller */ "./apps/api/src/app/controllers/user.controller.ts");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_base_resource_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/base-resource.service */ "./apps/api/src/app/common/base-resource.service.ts");







let UserHttpModule = class UserHttpModule {
};
UserHttpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_5__["Module"])({
        imports: [_entities_modules_user_module__WEBPACK_IMPORTED_MODULE_1__["UserModule"]],
        providers: [_services_resource_user_resource_service__WEBPACK_IMPORTED_MODULE_2__["UserResourceService"], _services_repository_user_repo_service__WEBPACK_IMPORTED_MODULE_3__["UserRepoService"], _common_base_resource_service__WEBPACK_IMPORTED_MODULE_6__["ResourceServiceHelper"]],
        controllers: [_user_controller__WEBPACK_IMPORTED_MODULE_4__["UserController"]]
    })
], UserHttpModule);



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
/* harmony import */ var _services_resource_pantry_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/resource/pantry-resource.service */ "./apps/api/src/app/services/resource/pantry-resource.service.ts");
/* harmony import */ var _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cooper/api-interfaces */ "./libs/api-interfaces/src/index.ts");
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_b = typeof _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_3__["IPayload"] !== "undefined" && _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_3__["IPayload"]) === "function" ? _b : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], PantriesController.prototype, "post", null);
PantriesController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('pantries'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_d = typeof _services_resource_pantry_resource_service__WEBPACK_IMPORTED_MODULE_2__["PantryResourceService"] !== "undefined" && _services_resource_pantry_resource_service__WEBPACK_IMPORTED_MODULE_2__["PantryResourceService"]) === "function" ? _d : Object])
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

/***/ "./apps/api/src/app/controllers/user.controller.ts":
/*!*********************************************************!*\
  !*** ./apps/api/src/app/controllers/user.controller.ts ***!
  \*********************************************************/
/*! exports provided: UserController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserController", function() { return UserController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/resource */ "./apps/api/src/app/services/resource/index.ts");
/* harmony import */ var _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cooper/api-interfaces */ "./libs/api-interfaces/src/index.ts");
var _a, _b, _c, _d, _e, _f, _g;




let UserController = class UserController {
    constructor(service) {
        this.service = service;
    }
    getById(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const user = yield this.service.getById(parseInt(params.id, 10));
                if (!user.data) {
                    throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["NotFoundException"]({
                        errors: [
                            {
                                status: '404',
                                title: 'Not Found'
                            }
                        ]
                    });
                }
                else {
                    return user;
                }
            }
            catch (err) {
                if (err && err.message && err.message.errors) {
                    return err.message;
                }
                return {
                    errors: [{
                            status: '500',
                            title: 'Failed to fetch user.'
                        }]
                };
            }
        });
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
                            title: 'Failed to fetch users.'
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
                            title: 'Failed to post users.'
                        }]
                };
            }
        });
    }
    put(pantry) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return this.service.upsert(pantry);
            }
            catch (err) {
                return {
                    errors: [{
                            status: '500',
                            title: 'Failed to update users.'
                        }]
                };
            }
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(':id'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], UserController.prototype, "getById", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], UserController.prototype, "get", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_3__["IPayload"] !== "undefined" && _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_3__["IPayload"]) === "function" ? _c : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], UserController.prototype, "post", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Put"])(':id'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_e = typeof _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_3__["IPayload"] !== "undefined" && _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_3__["IPayload"]) === "function" ? _e : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], UserController.prototype, "put", null);
UserController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('users'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_g = typeof _services_resource__WEBPACK_IMPORTED_MODULE_2__["UserResourceService"] !== "undefined" && _services_resource__WEBPACK_IMPORTED_MODULE_2__["UserResourceService"]) === "function" ? _g : Object])
], UserController);



/***/ }),

/***/ "./apps/api/src/app/entities/index.ts":
/*!********************************************!*\
  !*** ./apps/api/src/app/entities/index.ts ***!
  \********************************************/
/*! exports provided: PantryModule, SurveyResponseModule, UserModule, Pantry, SurveyResponse, User, entities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entities", function() { return entities; });
/* harmony import */ var _pantry_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pantry.entity */ "./apps/api/src/app/entities/pantry.entity.ts");
/* harmony import */ var _survey_response_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./survey-response.entity */ "./apps/api/src/app/entities/survey-response.entity.ts");
/* harmony import */ var _user_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.entity */ "./apps/api/src/app/entities/user.entity.ts");
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules */ "./apps/api/src/app/entities/modules/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PantryModule", function() { return _modules__WEBPACK_IMPORTED_MODULE_3__["PantryModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyResponseModule", function() { return _modules__WEBPACK_IMPORTED_MODULE_3__["SurveyResponseModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return _modules__WEBPACK_IMPORTED_MODULE_3__["UserModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pantry", function() { return _pantry_entity__WEBPACK_IMPORTED_MODULE_0__["Pantry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyResponse", function() { return _survey_response_entity__WEBPACK_IMPORTED_MODULE_1__["SurveyResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user_entity__WEBPACK_IMPORTED_MODULE_2__["User"]; });








const entities = [
    _pantry_entity__WEBPACK_IMPORTED_MODULE_0__["Pantry"],
    _survey_response_entity__WEBPACK_IMPORTED_MODULE_1__["SurveyResponse"],
    _user_entity__WEBPACK_IMPORTED_MODULE_2__["User"]
];


/***/ }),

/***/ "./apps/api/src/app/entities/modules/index.ts":
/*!****************************************************!*\
  !*** ./apps/api/src/app/entities/modules/index.ts ***!
  \****************************************************/
/*! exports provided: PantryModule, SurveyResponseModule, UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pantry_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pantry.module */ "./apps/api/src/app/entities/modules/pantry.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PantryModule", function() { return _pantry_module__WEBPACK_IMPORTED_MODULE_0__["PantryModule"]; });

/* harmony import */ var _survey_response_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./survey-response.module */ "./apps/api/src/app/entities/modules/survey-response.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyResponseModule", function() { return _survey_response_module__WEBPACK_IMPORTED_MODULE_1__["SurveyResponseModule"]; });

/* harmony import */ var _user_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.module */ "./apps/api/src/app/entities/modules/user.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return _user_module__WEBPACK_IMPORTED_MODULE_2__["UserModule"]; });






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

/***/ "./apps/api/src/app/entities/modules/user.module.ts":
/*!**********************************************************!*\
  !*** ./apps/api/src/app/entities/modules/user.module.ts ***!
  \**********************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.entity */ "./apps/api/src/app/entities/user.entity.ts");




let UserModule = class UserModule {
};
UserModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Module"])({
        imports: [_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_1__["TypeOrmModule"].forFeature([_user_entity__WEBPACK_IMPORTED_MODULE_3__["User"]])],
        exports: [_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_1__["TypeOrmModule"]]
    })
], UserModule);



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

/***/ "./apps/api/src/app/entities/user.entity.ts":
/*!**************************************************!*\
  !*** ./apps/api/src/app/entities/user.entity.ts ***!
  \**************************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);


let User = class User {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryGeneratedColumn"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], User.prototype, "id", void 0);
User = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])()
], User);



/***/ }),

/***/ "./apps/api/src/app/services/repository/index.ts":
/*!*******************************************************!*\
  !*** ./apps/api/src/app/services/repository/index.ts ***!
  \*******************************************************/
/*! exports provided: PantryRepoService, SurveyResponseRepoService, UserRepoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pantry_repo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pantry-repo.service */ "./apps/api/src/app/services/repository/pantry-repo.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PantryRepoService", function() { return _pantry_repo_service__WEBPACK_IMPORTED_MODULE_0__["PantryRepoService"]; });

/* harmony import */ var _survey_responses_repo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./survey-responses-repo.service */ "./apps/api/src/app/services/repository/survey-responses-repo.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyResponseRepoService", function() { return _survey_responses_repo_service__WEBPACK_IMPORTED_MODULE_1__["SurveyResponseRepoService"]; });

/* harmony import */ var _user_repo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-repo.service */ "./apps/api/src/app/services/repository/user-repo.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserRepoService", function() { return _user_repo_service__WEBPACK_IMPORTED_MODULE_2__["UserRepoService"]; });






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

/***/ "./apps/api/src/app/services/repository/user-repo.service.ts":
/*!*******************************************************************!*\
  !*** ./apps/api/src/app/services/repository/user-repo.service.ts ***!
  \*******************************************************************/
/*! exports provided: UserRepoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRepoService", function() { return UserRepoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../entities */ "./apps/api/src/app/entities/index.ts");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_4__);
var _a;





let UserRepoService = class UserRepoService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    getById(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.userRepo.findOne(id);
        });
    }
    findAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.userRepo.find();
        });
    }
    add(pantry) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.userRepo.save(pantry);
        });
    }
};
UserRepoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__["InjectRepository"])(_entities__WEBPACK_IMPORTED_MODULE_1__["User"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof typeorm__WEBPACK_IMPORTED_MODULE_4__["Repository"] !== "undefined" && typeorm__WEBPACK_IMPORTED_MODULE_4__["Repository"]) === "function" ? _a : Object])
], UserRepoService);



/***/ }),

/***/ "./apps/api/src/app/services/resource/index.ts":
/*!*****************************************************!*\
  !*** ./apps/api/src/app/services/resource/index.ts ***!
  \*****************************************************/
/*! exports provided: PantryResourceService, SurveyResponseResourceService, UserResourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pantry_resource_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pantry-resource.service */ "./apps/api/src/app/services/resource/pantry-resource.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PantryResourceService", function() { return _pantry_resource_service__WEBPACK_IMPORTED_MODULE_0__["PantryResourceService"]; });

/* harmony import */ var _survey_responses_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./survey-responses.service */ "./apps/api/src/app/services/resource/survey-responses.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyResponseResourceService", function() { return _survey_responses_service__WEBPACK_IMPORTED_MODULE_1__["SurveyResponseResourceService"]; });

/* harmony import */ var _user_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-resource.service */ "./apps/api/src/app/services/resource/user-resource.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserResourceService", function() { return _user_resource_service__WEBPACK_IMPORTED_MODULE_2__["UserResourceService"]; });






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

/***/ "./apps/api/src/app/services/resource/user-resource.service.ts":
/*!*********************************************************************!*\
  !*** ./apps/api/src/app/services/resource/user-resource.service.ts ***!
  \*********************************************************************/
/*! exports provided: UserResourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResourceService", function() { return UserResourceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../repository */ "./apps/api/src/app/services/repository/index.ts");
/* harmony import */ var _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cooper/api-interfaces */ "./libs/api-interfaces/src/index.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common */ "./apps/api/src/app/common/index.ts");
var _a, _b;





let UserResourceService = class UserResourceService {
    constructor(userRepo, helper) {
        this.userRepo = userRepo;
        this.helper = helper;
        this.resourceType = _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_3__["CooperResourceType"].User;
    }
    getById(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield this.userRepo.getById(id);
            return this.helper.mapToDTOPayload(this.resourceType, { entity: user, attributeMapper: (e) => this.mapEntityToResource(e) });
        });
    }
    get() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const users = yield this.userRepo.findAll();
            return this.helper.mapToDTOListPayload(this.resourceType, { entities: users, attributeMapper: (e) => this.mapEntityToResource(e) });
        });
    }
    upsert(request) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = Array.isArray(request.data) ? request.data : [request.data];
            const requestData = data.filter(d => d !== undefined).map((d) => this.mapPayloadToEntity(d));
            const addedEntities = yield this.helper.addRequestedResources(requestData, (e) => this.userRepo.add(e));
            return Array.isArray(request.data) ? this.helper.mapToDTOListPayload(this.resourceType, { entities: addedEntities, attributeMapper: (e) => this.mapEntityToResource(e) }) : this.helper.mapToDTOPayload(this.resourceType, { entity: addedEntities[0], attributeMapper: (e) => this.mapEntityToResource(e) });
        });
    }
    mapPayloadToEntity(data) {
        return {
            id: data.id ? parseInt(data.id, 10) : undefined,
        };
    }
    mapEntityToResource(e) {
        return {};
    }
};
UserResourceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _repository__WEBPACK_IMPORTED_MODULE_2__["UserRepoService"] !== "undefined" && _repository__WEBPACK_IMPORTED_MODULE_2__["UserRepoService"]) === "function" ? _a : Object, typeof (_b = typeof _common__WEBPACK_IMPORTED_MODULE_4__["ResourceServiceHelper"] !== "undefined" && _common__WEBPACK_IMPORTED_MODULE_4__["ResourceServiceHelper"]) === "function" ? _b : Object])
], UserResourceService);



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
    addBotToChannel(req) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const twilioAccountSid = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production ? process.env.TWILIO_ACCOUNT_SID : _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].twilioAccount;
            const twilioAuthToken = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production ? process.env.TWILIO_AUTH_TOKEN : _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].twilioAuthToken;
            const serviceSid = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production ? process.env.TWILIO_CHAT_SERVICE_SID : _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].twilioChatSid;
            const url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production ? process.env.TWILIO_CHAT_AUTOPILOT_URL : _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].twilioChatAutopilotUrl;
            const client = new twilio__WEBPACK_IMPORTED_MODULE_3__["Twilio"](twilioAccountSid, twilioAuthToken);
            const channel = yield client.chat.services(serviceSid)
                .channels(req.channelSid);
            const list = yield channel
                .webhooks.list();
            const hasWebhookAlready = list.some((i) => i.url === url);
            client.chat.services(serviceSid)
                .channels(req.channelSid)
                .webhooks
                .create({
                configuration: {
                    url: url,
                    method: 'POST',
                    filters: ['onMessageSent'],
                },
                type: 'webhook'
            });
        });
    }
};
TwilioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TwilioService);



/***/ }),

/***/ "./apps/api/src/environments/enviornment.dev.ts":
/*!******************************************************!*\
  !*** ./apps/api/src/environments/enviornment.dev.ts ***!
  \******************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    twilioAccount: 'AC0fc66dbfb5ee5ba9712500f82845c0f7',
    twilioAuthToken: '6bd5e3407d81cd1771e5da6453d266d8',
    twilioChatSid: 'IS83bcbe672cbe47f3baae43897155f782',
    twilioChatApiKey: 'SKaf6201047e5c624370653b99fbbe793e',
    twilioChatApiSecret: 'wEqVs8o2YUi6CNdhoW7wTNqJNp0euA30',
    twilioChatAutopilotUrl: 'https://channels.autopilot.twilio.com/v1/AC0fc66dbfb5ee5ba9712500f82845c0f7/UAc78b3ffb4ed74a094563c315b43e5c68/twilio-chat',
};


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
/* harmony import */ var _enviornment_dev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enviornment.dev */ "./apps/api/src/environments/enviornment.dev.ts");

const environment = {
    production: false,
    twilioAccount: _enviornment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"] ? _enviornment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].twilioAccount : 'AC##',
    twilioAuthToken: _enviornment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"] ? _enviornment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].twilioAuthToken : 'auth_token',
    twilioChatSid: _enviornment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"] ? _enviornment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].twilioChatSid : 'IS##',
    twilioChatApiKey: _enviornment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"] ? _enviornment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].twilioChatApiKey : 'SK##',
    twilioChatApiSecret: _enviornment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"] ? _enviornment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].twilioChatApiSecret : '##',
    twilioChatAutopilotUrl: _enviornment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"] ? _enviornment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].twilioChatAutopilotUrl : 'https://channels.autopilot.twilio.com/v1/##',
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
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./libs/api-interfaces/src/lib/api-interfaces.ts":
/*!*******************************************************!*\
  !*** ./libs/api-interfaces/src/lib/api-interfaces.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resource_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource-types.enum */ "./libs/api-interfaces/src/lib/resource-types.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CooperResourceType", function() { return _resource_types_enum__WEBPACK_IMPORTED_MODULE_0__["CooperResourceType"]; });

/* harmony import */ var _dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dto */ "./libs/api-interfaces/src/lib/dto/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _dto__WEBPACK_IMPORTED_MODULE_1__) if(["CooperResourceType","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _dto__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _request_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request-dto */ "./libs/api-interfaces/src/lib/request-dto/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _request_dto__WEBPACK_IMPORTED_MODULE_2__) if(["CooperResourceType","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _request_dto__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));





/***/ }),

/***/ "./libs/api-interfaces/src/lib/dto/index.ts":
/*!**************************************************!*\
  !*** ./libs/api-interfaces/src/lib/dto/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _payload_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payload.model */ "./libs/api-interfaces/src/lib/dto/payload.model.ts");
/* harmony import */ var _payload_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_payload_model__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _payload_model__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _payload_model__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _pantry_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pantry.model */ "./libs/api-interfaces/src/lib/dto/pantry.model.ts");
/* harmony import */ var _pantry_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pantry_model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _pantry_model__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _pantry_model__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.model */ "./libs/api-interfaces/src/lib/dto/user.model.ts");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_user_model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _user_model__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _user_model__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));





/***/ }),

/***/ "./libs/api-interfaces/src/lib/dto/pantry.model.ts":
/*!*********************************************************!*\
  !*** ./libs/api-interfaces/src/lib/dto/pantry.model.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./libs/api-interfaces/src/lib/dto/payload.model.ts":
/*!**********************************************************!*\
  !*** ./libs/api-interfaces/src/lib/dto/payload.model.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./libs/api-interfaces/src/lib/dto/user.model.ts":
/*!*******************************************************!*\
  !*** ./libs/api-interfaces/src/lib/dto/user.model.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./libs/api-interfaces/src/lib/request-dto/add-bot-dto.interface.ts":
/*!**************************************************************************!*\
  !*** ./libs/api-interfaces/src/lib/request-dto/add-bot-dto.interface.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./libs/api-interfaces/src/lib/request-dto/index.ts":
/*!**********************************************************!*\
  !*** ./libs/api-interfaces/src/lib/request-dto/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_bot_dto_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-bot-dto.interface */ "./libs/api-interfaces/src/lib/request-dto/add-bot-dto.interface.ts");
/* harmony import */ var _add_bot_dto_interface__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_add_bot_dto_interface__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _add_bot_dto_interface__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _add_bot_dto_interface__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./libs/api-interfaces/src/lib/resource-types.enum.ts":
/*!************************************************************!*\
  !*** ./libs/api-interfaces/src/lib/resource-types.enum.ts ***!
  \************************************************************/
/*! exports provided: CooperResourceType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CooperResourceType", function() { return CooperResourceType; });
var CooperResourceType;
(function (CooperResourceType) {
    CooperResourceType["Pantry"] = "pantry";
    CooperResourceType["SurveyResponse"] = "survey-response";
    CooperResourceType["User"] = "user";
})(CooperResourceType || (CooperResourceType = {}));


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