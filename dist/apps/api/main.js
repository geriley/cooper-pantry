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
/******/ 	return __webpack_require__(__webpack_require__.s = 56);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("typeorm");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony reexport (checked) */ if(__webpack_require__.o(_lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__, "CooperResourceType")) __webpack_require__.d(__webpack_exports__, "CooperResourceType", function() { return _lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__["CooperResourceType"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__, "IAddBotRequestDTO")) __webpack_require__.d(__webpack_exports__, "IAddBotRequestDTO", function() { return _lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__["IAddBotRequestDTO"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__, "IPayload")) __webpack_require__.d(__webpack_exports__, "IPayload", function() { return _lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__["IPayload"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__, "SurveyResultLevel")) __webpack_require__.d(__webpack_exports__, "SurveyResultLevel", function() { return _lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__["SurveyResultLevel"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__, "SurveyTypeDTO")) __webpack_require__.d(__webpack_exports__, "SurveyTypeDTO", function() { return _lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__["SurveyTypeDTO"]; });




/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
const environment = {
    production: true
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return entities; });
/* harmony import */ var _pantry_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _survey_response_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _user_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _address_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _modules__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _modules__WEBPACK_IMPORTED_MODULE_4__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _pantry_entity__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _survey_response_entity__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _user_entity__WEBPACK_IMPORTED_MODULE_2__["a"]; });









const entities = [
    _pantry_entity__WEBPACK_IMPORTED_MODULE_0__[/* Pantry */ "a"],
    _survey_response_entity__WEBPACK_IMPORTED_MODULE_1__[/* SurveyResponse */ "a"],
    _address_entity__WEBPACK_IMPORTED_MODULE_3__[/* Address */ "a"],
    _user_entity__WEBPACK_IMPORTED_MODULE_2__[/* User */ "a"],
];


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pantry_repo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _pantry_repo_service__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _survey_responses_repo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _survey_responses_repo_service__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _user_repo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _user_repo_service__WEBPACK_IMPORTED_MODULE_2__["a"]; });






/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pantry_resource_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _pantry_resource_service__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _survey_responses_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _survey_responses_service__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _user_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _user_resource_service__WEBPACK_IMPORTED_MODULE_2__["a"]; });






/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _address_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
var _a;



let User = class User {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryColumn"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], User.prototype, "id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({ nullable: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], User.prototype, "givenName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({ nullable: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], User.prototype, "familyName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["OneToOne"])(type => _address_entity__WEBPACK_IMPORTED_MODULE_2__[/* Address */ "a"], { cascade: true }),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["JoinColumn"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _address_entity__WEBPACK_IMPORTED_MODULE_2__[/* Address */ "a"] !== "undefined" && _address_entity__WEBPACK_IMPORTED_MODULE_2__[/* Address */ "a"]) === "function" ? _a : Object)
], User.prototype, "residentialAddress", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({ nullable: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], User.prototype, "mobilePhone", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], User.prototype, "userRole", void 0);
User = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])()
], User);



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Address; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);


let Address = class Address {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryGeneratedColumn"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], Address.prototype, "id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Address.prototype, "address1", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({ nullable: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Address.prototype, "address2", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Address.prototype, "city", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Address.prototype, "state", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Address.prototype, "zipcode", void 0);
Address = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])()
], Address);



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pantry; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyResponse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
var _a;



let SurveyResponse = class SurveyResponse {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryGeneratedColumn"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], SurveyResponse.prototype, "id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({ nullable: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], SurveyResponse.prototype, "userId", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["ManyToOne"])(type => _user_entity__WEBPACK_IMPORTED_MODULE_2__[/* User */ "a"]),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["JoinColumn"])({ name: 'userId', referencedColumnName: 'id' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _user_entity__WEBPACK_IMPORTED_MODULE_2__[/* User */ "a"] !== "undefined" && _user_entity__WEBPACK_IMPORTED_MODULE_2__[/* User */ "a"]) === "function" ? _a : Object)
], SurveyResponse.prototype, "user", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('jsonb'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SurveyResponse.prototype, "response", void 0);
SurveyResponse = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])()
], SurveyResponse);



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PantryResourceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
var _a;




let PantryResourceService = class PantryResourceService {
    constructor(pantryRepo) {
        this.pantryRepo = pantryRepo;
        this.resourceType = _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_3__["CooperResourceType"].Pantry;
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _repository__WEBPACK_IMPORTED_MODULE_2__[/* PantryRepoService */ "a"] !== "undefined" && _repository__WEBPACK_IMPORTED_MODULE_2__[/* PantryRepoService */ "a"]) === "function" ? _a : Object])
], PantryResourceService);



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyResponseResourceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
var _a, _b;





let SurveyResponseResourceService = class SurveyResponseResourceService {
    constructor(repo, helper) {
        this.repo = repo;
        this.helper = helper;
    }
    addBotSurveyResponse(response) {
        const response2 = JSON.parse(response);
        const entity = { id: undefined, userId: parseInt(response2.twilio.chat.From, 10), response: response };
        return this.repo.add(entity);
    }
    getScores(criteria) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const entities = yield this.repo.findAll(criteria);
            return {
                data: entities.map((e) => {
                    const response = JSON.parse(e.response);
                    const task = Object.keys(response.twilio.collected_data)[0];
                    const answers = response.twilio.collected_data[task].answers;
                    const score = this.helper.calculate(task, answers);
                    return {
                        type: _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_1__["CooperResourceType"].SurveyResponse,
                        id: e.id.toString(),
                        attributes: Object.assign({}, score),
                        relationships: {
                            'user': { id: e.userId.toString(), type: _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_1__["CooperResourceType"].User }
                        }
                    };
                })
            };
        });
    }
};
SurveyResponseResourceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _repository__WEBPACK_IMPORTED_MODULE_4__[/* SurveyResponseRepoService */ "b"] !== "undefined" && _repository__WEBPACK_IMPORTED_MODULE_4__[/* SurveyResponseRepoService */ "b"]) === "function" ? _a : Object, typeof (_b = typeof _helper__WEBPACK_IMPORTED_MODULE_3__[/* SurveyScoreService */ "a"] !== "undefined" && _helper__WEBPACK_IMPORTED_MODULE_3__[/* SurveyScoreService */ "a"]) === "function" ? _b : Object])
], SurveyResponseResourceService);



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _survey_score_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _survey_score_service__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwilioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var twilio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);
/* harmony import */ var twilio__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(twilio__WEBPACK_IMPORTED_MODULE_3__);




let TwilioService = class TwilioService {
    generateChatAccessToken(req) {
        const twilioAccountSid = _environments_environment__WEBPACK_IMPORTED_MODULE_2__[/* environment */ "a"].production ? process.env.TWILIO_ACCOUNT_SID : _environments_environment__WEBPACK_IMPORTED_MODULE_2__[/* environment */ "a"].twilioAccount;
        const twilioApiKey = _environments_environment__WEBPACK_IMPORTED_MODULE_2__[/* environment */ "a"].production ? process.env.TWILIO_API_KEY : _environments_environment__WEBPACK_IMPORTED_MODULE_2__[/* environment */ "a"].twilioChatApiKey;
        const twilioApiSecret = _environments_environment__WEBPACK_IMPORTED_MODULE_2__[/* environment */ "a"].production ? process.env.TWILIO_CHAT_API_SECRET : _environments_environment__WEBPACK_IMPORTED_MODULE_2__[/* environment */ "a"].twilioChatApiSecret;
        const serviceSid = _environments_environment__WEBPACK_IMPORTED_MODULE_2__[/* environment */ "a"].production ? process.env.TWILIO_CHAT_SERVICE_SID : _environments_environment__WEBPACK_IMPORTED_MODULE_2__[/* environment */ "a"].twilioChatSid;
        const chatGrant = new twilio__WEBPACK_IMPORTED_MODULE_3__["jwt"].AccessToken.ChatGrant({
            serviceSid: serviceSid,
        });
        const token = new twilio__WEBPACK_IMPORTED_MODULE_3__["jwt"].AccessToken(twilioAccountSid, twilioApiKey, twilioApiSecret, { identity: req.identity });
        token.addGrant(chatGrant);
        return token.toJwt();
    }
    addBotToChannel(req) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const twilioAccountSid = _environments_environment__WEBPACK_IMPORTED_MODULE_2__[/* environment */ "a"].production ? process.env.TWILIO_ACCOUNT_SID : _environments_environment__WEBPACK_IMPORTED_MODULE_2__[/* environment */ "a"].twilioAccount;
            const twilioAuthToken = _environments_environment__WEBPACK_IMPORTED_MODULE_2__[/* environment */ "a"].production ? process.env.TWILIO_AUTH_TOKEN : _environments_environment__WEBPACK_IMPORTED_MODULE_2__[/* environment */ "a"].twilioAuthToken;
            const serviceSid = _environments_environment__WEBPACK_IMPORTED_MODULE_2__[/* environment */ "a"].production ? process.env.TWILIO_CHAT_SERVICE_SID : _environments_environment__WEBPACK_IMPORTED_MODULE_2__[/* environment */ "a"].twilioChatSid;
            const url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__[/* environment */ "a"].production ? process.env.TWILIO_CHAT_AUTOPILOT_URL : _environments_environment__WEBPACK_IMPORTED_MODULE_2__[/* environment */ "a"].twilioChatAutopilotUrl;
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
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _address_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);





let UserModule = class UserModule {
};
UserModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_address_module__WEBPACK_IMPORTED_MODULE_4__[/* AddressModule */ "a"], _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["TypeOrmModule"].forFeature([_user_entity__WEBPACK_IMPORTED_MODULE_3__[/* User */ "a"]])],
        exports: [_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["TypeOrmModule"]]
    })
], UserModule);



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _address_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__);




let AddressModule = class AddressModule {
};
AddressModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Module"])({
        imports: [_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__["TypeOrmModule"].forFeature([_address_entity__WEBPACK_IMPORTED_MODULE_1__[/* Address */ "a"]])],
        exports: [_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__["TypeOrmModule"]]
    })
], AddressModule);



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PantryRepoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["InjectRepository"])(_entities__WEBPACK_IMPORTED_MODULE_3__[/* Pantry */ "a"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof typeorm__WEBPACK_IMPORTED_MODULE_4__["Repository"] !== "undefined" && typeorm__WEBPACK_IMPORTED_MODULE_4__["Repository"]) === "function" ? _a : Object])
], PantryRepoService);



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRepoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_4__);
var _a;





let UserRepoService = class UserRepoService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    getById(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.userRepo.findOne(id, { relations: ['residentialAddress'] });
        });
    }
    findAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.userRepo.find({ relations: ['residentialAddress'] });
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__["InjectRepository"])(_entities__WEBPACK_IMPORTED_MODULE_1__[/* User */ "e"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof typeorm__WEBPACK_IMPORTED_MODULE_4__["Repository"] !== "undefined" && typeorm__WEBPACK_IMPORTED_MODULE_4__["Repository"]) === "function" ? _a : Object])
], UserRepoService);



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SurveyTask */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyScoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);



var SurveyTask;
(function (SurveyTask) {
    SurveyTask["ShortFoodSecurityTask"] = "short_fss_answers";
})(SurveyTask || (SurveyTask = {}));
let SurveyScoreService = class SurveyScoreService {
    calculate(task, answers) {
        switch (task) {
            case SurveyTask.ShortFoodSecurityTask: {
                return this.calcShortFormFSS(answers);
            }
            default: {
                return {
                    score: 0,
                    surveyResultLevel: _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["SurveyResultLevel"].Info,
                    surveyType: undefined,
                };
            }
        }
    }
    calcShortFormFSS(answers) {
        const affirmativeAnswers = ['yes', 'often', 'sometimes'];
        const shortFoodSecurityScore = [...Object.values(answers)].filter((a) => affirmativeAnswers.some((aa) => a.answer.toLowerCase())).length;
        const taskAttributes = {
            surveyType: _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["SurveyTypeDTO"].ShortFoodSecurity,
            score: shortFoodSecurityScore,
            surveyResultLevel: (shortFoodSecurityScore >= 5)
                ? _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["SurveyResultLevel"].Critical
                : (shortFoodSecurityScore >= 2 ? _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["SurveyResultLevel"].Warning
                    : _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["SurveyResultLevel"].Info)
        };
        return taskAttributes;
    }
};
SurveyScoreService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SurveyScoreService);



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserResourceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26);
/* harmony import */ var _survey_responses_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
var _a, _b, _c;






let UserResourceService = class UserResourceService {
    constructor(userRepo, scoresService, helper) {
        this.userRepo = userRepo;
        this.scoresService = scoresService;
        this.helper = helper;
        this.resourceType = _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_3__["CooperResourceType"].User;
    }
    getById(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield this.userRepo.getById(id);
            return this.helper.mapToDTOPayload(this.resourceType, { entity: user, attributeMapper: (e) => this.mapEntityToResource(e) });
        });
    }
    get(criteria) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const users = yield this.userRepo.findAll();
            const userIds = users.map((u) => u.id);
            const scoreRelationships = yield this.scoresService.getScores({ userIds });
            const score = scoreRelationships.data.map((s) => ({
                id: s.id,
                userId: s.relationships['user'].id
            })).reduce((acc, next) => {
                const userId = parseInt(next.userId, 10);
                const curr = acc[userId];
                return (curr)
                    ? Object.assign(Object.assign({}, acc), { [userId]: [...curr, next.id] }) : Object.assign(Object.assign({}, acc), { [userId]: [next.id] });
            }, {});
            const userData = this.helper.mapToDTOListPayload(this.resourceType, { entities: users, attributeMapper: (e) => this.mapEntityToResource(e) });
            const dto = {
                data: userData.data.map((ud) => this.helper.addRelationships(ud, {
                    ids: score[ud.id],
                    relationshipName: _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_3__["CooperResourceType"].SurveyResponse,
                    relationshipType: _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_3__["CooperResourceType"].SurveyResponse,
                }))
            };
            if (criteria && criteria.include && criteria.include.some((i) => i === _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_3__["CooperResourceType"].SurveyResponse)) {
                return Object.assign(Object.assign({}, dto), { included: scoreRelationships.data });
            }
            else
                return dto;
        });
    }
    upsert(request) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = Array.isArray(request.data) ? request.data : [request.data];
            const requestData = data.filter(d => d !== undefined).map((d) => this.mapPayloadToEntity(d));
            const addedEntities = yield this.helper.addRequestedResources(requestData, (e) => {
                return this.userRepo.getById(e === null || e === void 0 ? void 0 : e.id).then((u) => {
                    var _a;
                    const addressId = (_a = u === null || u === void 0 ? void 0 : u.residentialAddress) === null || _a === void 0 ? void 0 : _a.id;
                    e.residentialAddress = Object.assign(Object.assign({}, e.residentialAddress), { id: addressId });
                    return this.userRepo.add(e);
                });
            });
            return Array.isArray(request.data) ? this.helper.mapToDTOListPayload(this.resourceType, { entities: addedEntities, attributeMapper: (e) => this.mapEntityToResource(e) }) : this.helper.mapToDTOPayload(this.resourceType, { entity: addedEntities[0], attributeMapper: (e) => this.mapEntityToResource(e) });
        });
    }
    mapPayloadToEntity(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        return {
            id: data.id ? data.id : undefined,
            givenName: data.attributes.firstName,
            familyName: data.attributes.lastName,
            userRole: data.attributes.userRole,
            residentialAddress: {
                id: undefined,
                zipcode: (_b = (_a = data === null || data === void 0 ? void 0 : data.attributes) === null || _a === void 0 ? void 0 : _a.address) === null || _b === void 0 ? void 0 : _b.zipcode,
                address1: (_d = (_c = data === null || data === void 0 ? void 0 : data.attributes) === null || _c === void 0 ? void 0 : _c.address) === null || _d === void 0 ? void 0 : _d.address1,
                address2: (_f = (_e = data === null || data === void 0 ? void 0 : data.attributes) === null || _e === void 0 ? void 0 : _e.address) === null || _f === void 0 ? void 0 : _f.address2,
                city: (_h = (_g = data === null || data === void 0 ? void 0 : data.attributes) === null || _g === void 0 ? void 0 : _g.address) === null || _h === void 0 ? void 0 : _h.city,
                state: (_k = (_j = data === null || data === void 0 ? void 0 : data.attributes) === null || _j === void 0 ? void 0 : _j.address) === null || _k === void 0 ? void 0 : _k.state,
            },
            mobilePhone: (_l = data === null || data === void 0 ? void 0 : data.attributes) === null || _l === void 0 ? void 0 : _l.mobilePhone,
        };
    }
    mapEntityToResource(e) {
        var _a, _b, _c, _d, _e;
        return {
            firstName: e.givenName,
            lastName: e.familyName,
            address: {
                zipcode: (_a = e === null || e === void 0 ? void 0 : e.residentialAddress) === null || _a === void 0 ? void 0 : _a.zipcode,
                address1: (_b = e === null || e === void 0 ? void 0 : e.residentialAddress) === null || _b === void 0 ? void 0 : _b.address1,
                address2: (_c = e === null || e === void 0 ? void 0 : e.residentialAddress) === null || _c === void 0 ? void 0 : _c.address2,
                city: (_d = e === null || e === void 0 ? void 0 : e.residentialAddress) === null || _d === void 0 ? void 0 : _d.city,
                state: (_e = e === null || e === void 0 ? void 0 : e.residentialAddress) === null || _e === void 0 ? void 0 : _e.state,
            },
            userRole: e.userRole,
            mobilePhone: e === null || e === void 0 ? void 0 : e.mobilePhone
        };
    }
};
UserResourceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _repository__WEBPACK_IMPORTED_MODULE_2__[/* UserRepoService */ "c"] !== "undefined" && _repository__WEBPACK_IMPORTED_MODULE_2__[/* UserRepoService */ "c"]) === "function" ? _a : Object, typeof (_b = typeof _survey_responses_service__WEBPACK_IMPORTED_MODULE_5__[/* SurveyResponseResourceService */ "a"] !== "undefined" && _survey_responses_service__WEBPACK_IMPORTED_MODULE_5__[/* SurveyResponseResourceService */ "a"]) === "function" ? _b : Object, typeof (_c = typeof _common__WEBPACK_IMPORTED_MODULE_4__[/* ResourceServiceHelper */ "a"] !== "undefined" && _common__WEBPACK_IMPORTED_MODULE_4__[/* ResourceServiceHelper */ "a"]) === "function" ? _c : Object])
], UserResourceService);



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceServiceHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
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
    addRelationships(resource, relationships) {
        if (relationships && relationships.ids && relationships.ids.length > 0) {
            return Object.assign(Object.assign({}, resource), { relationships: Object.assign(Object.assign({}, resource.relationships), { [relationships.relationshipName]: relationships.ids.length > 0 ? { id: relationships.ids[0].toString(), type: relationships.relationshipType } : [
                        ...relationships.ids.map((id) => ({ id: id.toString(), type: relationships.relationshipType }))
                    ] }) });
        }
        else
            return Object.assign({}, resource);
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
/* 25 */
/***/ (function(module, exports) {

module.exports = require("twilio");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _base_resource_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _base_resource_service__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pantry_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _pantry_module__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _survey_response_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _survey_response_module__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _user_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _address_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);






/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PantryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pantry_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);




let PantryModule = class PantryModule {
};
PantryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Module"])({
        imports: [_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_1__["TypeOrmModule"].forFeature([_pantry_entity__WEBPACK_IMPORTED_MODULE_3__[/* Pantry */ "a"]])],
        exports: [_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_1__["TypeOrmModule"]]
    })
], PantryModule);



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyResponseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _survey_response_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);




let SurveyResponseModule = class SurveyResponseModule {
};
SurveyResponseModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Module"])({
        imports: [_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_1__["TypeOrmModule"].forFeature([_survey_response_entity__WEBPACK_IMPORTED_MODULE_3__[/* SurveyResponse */ "a"]])],
        exports: [_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_1__["TypeOrmModule"]]
    })
], SurveyResponseModule);



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyResponseRepoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
var _a;





let SurveyResponseRepoService = class SurveyResponseRepoService {
    constructor(pantryRepo) {
        this.pantryRepo = pantryRepo;
    }
    findAll(criteria) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (criteria.userIds) {
                return this.pantryRepo.find({
                    where: {
                        userId: Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["In"])(criteria.userIds)
                    }
                });
            }
            else
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["InjectRepository"])(_entities__WEBPACK_IMPORTED_MODULE_4__[/* SurveyResponse */ "c"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof typeorm__WEBPACK_IMPORTED_MODULE_3__["Repository"] !== "undefined" && typeorm__WEBPACK_IMPORTED_MODULE_3__["Repository"]) === "function" ? _a : Object])
], SurveyResponseRepoService);



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _resource_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CooperResourceType", function() { return _resource_types_enum__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony reexport (checked) */ if(__webpack_require__.o(_dto__WEBPACK_IMPORTED_MODULE_1__, "IAddBotRequestDTO")) __webpack_require__.d(__webpack_exports__, "IAddBotRequestDTO", function() { return _dto__WEBPACK_IMPORTED_MODULE_1__["IAddBotRequestDTO"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_dto__WEBPACK_IMPORTED_MODULE_1__, "IPayload")) __webpack_require__.d(__webpack_exports__, "IPayload", function() { return _dto__WEBPACK_IMPORTED_MODULE_1__["IPayload"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_dto__WEBPACK_IMPORTED_MODULE_1__, "SurveyResultLevel")) __webpack_require__.d(__webpack_exports__, "SurveyResultLevel", function() { return _dto__WEBPACK_IMPORTED_MODULE_1__["SurveyResultLevel"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_dto__WEBPACK_IMPORTED_MODULE_1__, "SurveyTypeDTO")) __webpack_require__.d(__webpack_exports__, "SurveyTypeDTO", function() { return _dto__WEBPACK_IMPORTED_MODULE_1__["SurveyTypeDTO"]; });

/* harmony import */ var _request_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony reexport (checked) */ if(__webpack_require__.o(_request_dto__WEBPACK_IMPORTED_MODULE_2__, "IAddBotRequestDTO")) __webpack_require__.d(__webpack_exports__, "IAddBotRequestDTO", function() { return _request_dto__WEBPACK_IMPORTED_MODULE_2__["IAddBotRequestDTO"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_request_dto__WEBPACK_IMPORTED_MODULE_2__, "IPayload")) __webpack_require__.d(__webpack_exports__, "IPayload", function() { return _request_dto__WEBPACK_IMPORTED_MODULE_2__["IPayload"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_request_dto__WEBPACK_IMPORTED_MODULE_2__, "SurveyResultLevel")) __webpack_require__.d(__webpack_exports__, "SurveyResultLevel", function() { return _request_dto__WEBPACK_IMPORTED_MODULE_2__["SurveyResultLevel"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_request_dto__WEBPACK_IMPORTED_MODULE_2__, "SurveyTypeDTO")) __webpack_require__.d(__webpack_exports__, "SurveyTypeDTO", function() { return _request_dto__WEBPACK_IMPORTED_MODULE_2__["SurveyTypeDTO"]; });






/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CooperResourceType; });
var CooperResourceType;
(function (CooperResourceType) {
    CooperResourceType["Pantry"] = "pantry";
    CooperResourceType["SurveyResponse"] = "survey-response";
    CooperResourceType["User"] = "user";
})(CooperResourceType || (CooperResourceType = {}));


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _payload_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _payload_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_payload_model__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_payload_model__WEBPACK_IMPORTED_MODULE_0__, "IAddBotRequestDTO")) __webpack_require__.d(__webpack_exports__, "IAddBotRequestDTO", function() { return _payload_model__WEBPACK_IMPORTED_MODULE_0__["IAddBotRequestDTO"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_payload_model__WEBPACK_IMPORTED_MODULE_0__, "IPayload")) __webpack_require__.d(__webpack_exports__, "IPayload", function() { return _payload_model__WEBPACK_IMPORTED_MODULE_0__["IPayload"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_payload_model__WEBPACK_IMPORTED_MODULE_0__, "SurveyResultLevel")) __webpack_require__.d(__webpack_exports__, "SurveyResultLevel", function() { return _payload_model__WEBPACK_IMPORTED_MODULE_0__["SurveyResultLevel"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_payload_model__WEBPACK_IMPORTED_MODULE_0__, "SurveyTypeDTO")) __webpack_require__.d(__webpack_exports__, "SurveyTypeDTO", function() { return _payload_model__WEBPACK_IMPORTED_MODULE_0__["SurveyTypeDTO"]; });

/* harmony import */ var _pantry_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _pantry_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pantry_model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_pantry_model__WEBPACK_IMPORTED_MODULE_1__, "IAddBotRequestDTO")) __webpack_require__.d(__webpack_exports__, "IAddBotRequestDTO", function() { return _pantry_model__WEBPACK_IMPORTED_MODULE_1__["IAddBotRequestDTO"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_pantry_model__WEBPACK_IMPORTED_MODULE_1__, "IPayload")) __webpack_require__.d(__webpack_exports__, "IPayload", function() { return _pantry_model__WEBPACK_IMPORTED_MODULE_1__["IPayload"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_pantry_model__WEBPACK_IMPORTED_MODULE_1__, "SurveyResultLevel")) __webpack_require__.d(__webpack_exports__, "SurveyResultLevel", function() { return _pantry_model__WEBPACK_IMPORTED_MODULE_1__["SurveyResultLevel"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_pantry_model__WEBPACK_IMPORTED_MODULE_1__, "SurveyTypeDTO")) __webpack_require__.d(__webpack_exports__, "SurveyTypeDTO", function() { return _pantry_model__WEBPACK_IMPORTED_MODULE_1__["SurveyTypeDTO"]; });

/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony import */ var _survey_score_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyResultLevel", function() { return _survey_score_model__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyTypeDTO", function() { return _survey_score_model__WEBPACK_IMPORTED_MODULE_3__["b"]; });

/* harmony import */ var _address_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);
/* harmony import */ var _address_model__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_address_model__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_address_model__WEBPACK_IMPORTED_MODULE_4__, "IAddBotRequestDTO")) __webpack_require__.d(__webpack_exports__, "IAddBotRequestDTO", function() { return _address_model__WEBPACK_IMPORTED_MODULE_4__["IAddBotRequestDTO"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_address_model__WEBPACK_IMPORTED_MODULE_4__, "IPayload")) __webpack_require__.d(__webpack_exports__, "IPayload", function() { return _address_model__WEBPACK_IMPORTED_MODULE_4__["IPayload"]; });








/***/ }),
/* 34 */
/***/ (function(module, exports) {



/***/ }),
/* 35 */
/***/ (function(module, exports) {



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UserRole */
var UserRole;
(function (UserRole) {
    UserRole["PantryAdmin"] = "PANTRY ADMIN";
    UserRole["Customer"] = "CUSTOMER";
})(UserRole || (UserRole = {}));


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SurveyTypeDTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyResultLevel; });
var SurveyTypeDTO;
(function (SurveyTypeDTO) {
    SurveyTypeDTO[SurveyTypeDTO["ShortFoodSecurity"] = 0] = "ShortFoodSecurity";
})(SurveyTypeDTO || (SurveyTypeDTO = {}));
var SurveyResultLevel;
(function (SurveyResultLevel) {
    SurveyResultLevel[SurveyResultLevel["Info"] = 0] = "Info";
    SurveyResultLevel[SurveyResultLevel["Warning"] = 1] = "Warning";
    SurveyResultLevel[SurveyResultLevel["Critical"] = 2] = "Critical";
})(SurveyResultLevel || (SurveyResultLevel = {}));


/***/ }),
/* 38 */
/***/ (function(module, exports) {



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _add_bot_dto_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _add_bot_dto_interface__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_add_bot_dto_interface__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_add_bot_dto_interface__WEBPACK_IMPORTED_MODULE_0__, "IAddBotRequestDTO")) __webpack_require__.d(__webpack_exports__, "IAddBotRequestDTO", function() { return _add_bot_dto_interface__WEBPACK_IMPORTED_MODULE_0__["IAddBotRequestDTO"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_add_bot_dto_interface__WEBPACK_IMPORTED_MODULE_0__, "IPayload")) __webpack_require__.d(__webpack_exports__, "IPayload", function() { return _add_bot_dto_interface__WEBPACK_IMPORTED_MODULE_0__["IPayload"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_add_bot_dto_interface__WEBPACK_IMPORTED_MODULE_0__, "SurveyResultLevel")) __webpack_require__.d(__webpack_exports__, "SurveyResultLevel", function() { return _add_bot_dto_interface__WEBPACK_IMPORTED_MODULE_0__["SurveyResultLevel"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_add_bot_dto_interface__WEBPACK_IMPORTED_MODULE_0__, "SurveyTypeDTO")) __webpack_require__.d(__webpack_exports__, "SurveyTypeDTO", function() { return _add_bot_dto_interface__WEBPACK_IMPORTED_MODULE_0__["SurveyTypeDTO"]; });




/***/ }),
/* 40 */
/***/ (function(module, exports) {



/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_serve_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);
/* harmony import */ var _nestjs_serve_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_serve_static__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45);
/* harmony import */ var pg_connection_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46);
/* harmony import */ var pg_connection_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pg_connection_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7);
/* harmony import */ var _controllers_modules__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47);









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
                    ..._entities__WEBPACK_IMPORTED_MODULE_7__[/* entities */ "f"],
                ],
                synchronize: true,
            }),
            ..._controllers_modules__WEBPACK_IMPORTED_MODULE_8__[/* controllerModules */ "a"],
        ],
        controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_5__[/* AppController */ "a"]],
    })
], AppModule);



/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/serve-static");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
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
/* 46 */
/***/ (function(module, exports) {

module.exports = require("pg-connection-string");

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return controllerModules; });
/* harmony import */ var _pantry_http_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _survey_response_http_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50);
/* harmony import */ var _communication_http_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52);
/* harmony import */ var _user_http_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54);




const controllerModules = [
    _pantry_http_module__WEBPACK_IMPORTED_MODULE_0__[/* PantryHttpModule */ "a"],
    _survey_response_http_module__WEBPACK_IMPORTED_MODULE_1__[/* SurveyResponseHttpModule */ "a"],
    _communication_http_module__WEBPACK_IMPORTED_MODULE_2__[/* CommunicationHttpModule */ "a"],
    _user_http_module__WEBPACK_IMPORTED_MODULE_3__[/* UserHttpModule */ "a"]
];


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PantryHttpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _services_resource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _pantry_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49);
/* harmony import */ var _services_repository_pantry_repo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);






let PantryHttpModule = class PantryHttpModule {
};
PantryHttpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_entities__WEBPACK_IMPORTED_MODULE_2__[/* PantryModule */ "b"]],
        providers: [_services_resource__WEBPACK_IMPORTED_MODULE_3__[/* PantryResourceService */ "a"], _services_repository_pantry_repo_service__WEBPACK_IMPORTED_MODULE_5__[/* PantryRepoService */ "a"]],
        controllers: [_pantry_controller__WEBPACK_IMPORTED_MODULE_4__[/* PantriesController */ "a"]]
    })
], PantryHttpModule);



/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PantriesController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_resource_pantry_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_4__);
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
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_4__["ApiBody"])({}),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_b = typeof _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_3__["IPayload"] !== "undefined" && _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_3__["IPayload"]) === "function" ? _b : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], PantriesController.prototype, "post", null);
PantriesController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('pantries'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_d = typeof _services_resource_pantry_resource_service__WEBPACK_IMPORTED_MODULE_2__[/* PantryResourceService */ "a"] !== "undefined" && _services_resource_pantry_resource_service__WEBPACK_IMPORTED_MODULE_2__[/* PantryResourceService */ "a"]) === "function" ? _d : Object])
], PantriesController);



/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyResponseHttpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _services_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _services_resource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _survey_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51);
/* harmony import */ var _services_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16);







let SurveyResponseHttpModule = class SurveyResponseHttpModule {
};
SurveyResponseHttpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_entities__WEBPACK_IMPORTED_MODULE_2__[/* SurveyResponseModule */ "d"]],
        providers: [_services_repository__WEBPACK_IMPORTED_MODULE_3__[/* SurveyResponseRepoService */ "b"], _services_resource__WEBPACK_IMPORTED_MODULE_4__[/* SurveyResponseResourceService */ "b"], _services_helper__WEBPACK_IMPORTED_MODULE_6__[/* SurveyScoreService */ "a"]],
        controllers: [_survey_controller__WEBPACK_IMPORTED_MODULE_5__[/* SurveyResponsesController */ "a"]]
    })
], SurveyResponseHttpModule);



/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyResponsesController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_resource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
var _a, _b, _c;




let SurveyResponsesController = class SurveyResponsesController {
    constructor(service) {
        this.service = service;
    }
    post(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(response);
            this.service.addBotSurveyResponse(response.Memory);
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
        return this.service.getScores({});
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(),
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_2__["ApiBody"])({}),
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _services_resource__WEBPACK_IMPORTED_MODULE_3__[/* SurveyResponseResourceService */ "b"] !== "undefined" && _services_resource__WEBPACK_IMPORTED_MODULE_3__[/* SurveyResponseResourceService */ "b"]) === "function" ? _c : Object])
], SurveyResponsesController);



/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunicationHttpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_twilio_twilio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _communication_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);




let CommunicationHttpModule = class CommunicationHttpModule {
};
CommunicationHttpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__["Module"])({
        providers: [_services_twilio_twilio_service__WEBPACK_IMPORTED_MODULE_1__[/* TwilioService */ "a"]],
        controllers: [_communication_controller__WEBPACK_IMPORTED_MODULE_2__[/* CommunicationsController */ "a"]]
    })
], CommunicationHttpModule);



/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunicationsController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_twilio_twilio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_4__);
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
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_4__["ApiBody"])({}),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_3__["IAddBotRequestDTO"] !== "undefined" && _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_3__["IAddBotRequestDTO"]) === "function" ? _a : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], CommunicationsController.prototype, "addChatBot", null);
CommunicationsController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('communications'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _services_twilio_twilio_service__WEBPACK_IMPORTED_MODULE_2__[/* TwilioService */ "a"] !== "undefined" && _services_twilio_twilio_service__WEBPACK_IMPORTED_MODULE_2__[/* TwilioService */ "a"]) === "function" ? _c : Object])
], CommunicationsController);



/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserHttpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_base_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _entities_modules_user_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var _services_helper_survey_score_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22);
/* harmony import */ var _services_repository__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _services_repository_user_repo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);
/* harmony import */ var _services_resource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9);
/* harmony import */ var _services_resource_user_resource_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23);
/* harmony import */ var _user_controller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55);











let UserHttpModule = class UserHttpModule {
};
UserHttpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_entities_modules_user_module__WEBPACK_IMPORTED_MODULE_4__[/* UserModule */ "a"], _entities__WEBPACK_IMPORTED_MODULE_3__[/* SurveyResponseModule */ "d"]],
        providers: [_services_resource_user_resource_service__WEBPACK_IMPORTED_MODULE_9__[/* UserResourceService */ "a"], _services_repository_user_repo_service__WEBPACK_IMPORTED_MODULE_7__[/* UserRepoService */ "a"], _common_base_resource_service__WEBPACK_IMPORTED_MODULE_2__[/* ResourceServiceHelper */ "a"], _services_resource__WEBPACK_IMPORTED_MODULE_8__[/* SurveyResponseResourceService */ "b"], _services_repository__WEBPACK_IMPORTED_MODULE_6__[/* SurveyResponseRepoService */ "b"], _services_helper_survey_score_service__WEBPACK_IMPORTED_MODULE_5__[/* SurveyScoreService */ "a"]],
        controllers: [_user_controller__WEBPACK_IMPORTED_MODULE_10__[/* UserController */ "a"]]
    })
], UserHttpModule);



/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_resource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
var _a, _b, _c, _d, _e, _f, _g, _h;





let UserController = class UserController {
    constructor(service) {
        this.service = service;
    }
    getById(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const user = yield this.service.getById(params.id);
                if (!user.data) {
                    throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_2__["NotFoundException"]({
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
    get(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return this.service.get({
                    include: params && params.include ? params.include.split(',') : []
                });
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
                console.log(pantry);
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
    getUserSurveys() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            throw Error();
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Get"])(':id'),
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__["ApiParam"])({ name: 'id' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Param"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], UserController.prototype, "getById", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Get"])(),
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__["ApiQuery"])({ name: 'include' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Query"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], UserController.prototype, "get", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Post"])(),
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__["ApiBody"])({}),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_1__["IPayload"] !== "undefined" && _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_1__["IPayload"]) === "function" ? _c : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], UserController.prototype, "post", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Put"])(':id'),
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__["ApiParam"])({ name: 'id' }),
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__["ApiBody"])({}),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_e = typeof _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_1__["IPayload"] !== "undefined" && _cooper_api_interfaces__WEBPACK_IMPORTED_MODULE_1__["IPayload"]) === "function" ? _e : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], UserController.prototype, "put", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Get"])('survey-scores'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], UserController.prototype, "getUserSurveys", null);
UserController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Controller"])('users'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_h = typeof _services_resource__WEBPACK_IMPORTED_MODULE_4__[/* UserResourceService */ "c"] !== "undefined" && _services_resource__WEBPACK_IMPORTED_MODULE_4__[/* UserResourceService */ "c"]) === "function" ? _h : Object])
], UserController);



/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(57);


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42);
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */




function bootstrap() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_1__["NestFactory"].create(_app_app_module__WEBPACK_IMPORTED_MODULE_3__[/* AppModule */ "a"]);
        const globalPrefix = 'api';
        app.enableCors();
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3333;
        const options = new _nestjs_swagger__WEBPACK_IMPORTED_MODULE_2__["DocumentBuilder"]()
            .setTitle('Cooper Pantry')
            .setDescription('Cooper Pantry API Documentation')
            .setVersion('1.0')
            .build();
        const document = _nestjs_swagger__WEBPACK_IMPORTED_MODULE_2__["SwaggerModule"].createDocument(app, options);
        _nestjs_swagger__WEBPACK_IMPORTED_MODULE_2__["SwaggerModule"].setup('api', app, document);
        yield app.listen(port, () => {
            console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
        });
    });
}
bootstrap();


/***/ })
/******/ ])));
//# sourceMappingURL=main.js.map