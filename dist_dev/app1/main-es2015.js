(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-topo></app-topo>\r\n\r\n<div *ngIf=\"jogoEmAndamento; else fimDejogo\">\r\n    <app-painel (encerrarJogo)=\"encerrarJogo($event)\"></app-painel>\r\n</div>\r\n<ng-template #fimDejogo>\r\n    <div *ngIf=\"tipoEncerramento === 'Derrota'; else fimDeJogoVitoria\" class=\"container\" style=\"margin-top: 50px\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <h3 style=\"color: red\">Fim de Jogo! Perdeste :( </h3>\r\n                <button class=\"btn btn-outline-primary\" (click)=\"reiniciarJogo()\">New Game</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <footer class=\"card-footer text-muted fixed-bottom\">\r\n            <div>\r\n                <p>Copyright &copy; 2019 |\r\n                <a href=\"mailto:jennybekadutra@gmail.com?Subject=Hello%20\" target=\"_top\">  Jennyfer Rebeka Dutra</a></p>\r\n            </div>\r\n    </footer>\r\n</ng-template>\r\n\r\n<ng-template #fimDeJogoVitoria>\r\n    <div class=\"container\" style=\"margin-top: 50px\">\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <h3 style=\"color: green\">Fim de Jogo! Ganhaste :D </h3>\r\n                    <button class=\"btn btn-outline-primary\" (click)=\"reiniciarJogo()\">New Game</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <footer class=\"card-footer text-muted fixed-bottom\">\r\n                <div>\r\n                    <p>Copyright &copy; 2019 |\r\n                    <a href=\"mailto:jennybekadutra@gmail.com?Subject=Hello%20\" target=\"_top\">  Jennyfer Rebeka Dutra</a></p>\r\n                </div>\r\n            </footer>\r\n</ng-template>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/painel/painel.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/painel/painel.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"div container\"><!--INICIO CONTAINER-->\n    <div class=\"jumbotron\"><!--inicio JUMBOTRON -->\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <app-progresso [progresso]=\"progresso\"></app-progresso>   \n            </div>\n            <div class=\"col-sm-6\">\n                <div class=\"d-flex justify-content-end\">\n                    <app-tentativas [tentativas]=\"tentativas\"></app-tentativas>\n                </div>      \n            </div>\n        </div><!--FIM DO row -->\n\n        <div class=\"row\">\n            <div class=\"col\">\n               <h6>{{ instrucao }}</h6>\n               <p>{{ rodadaFrase.fraseEng }}</p> <!--recuperando os dados do array de forma dinamica -->\n\n               <div class=\"form-group\">\n                    <textarea \n                        class=\"form-control\" \n                        rows=\"3\"\n                        (input)=\"atualizaResposta($event)\" \n                        [value] =\"resposta\"\n                    ></textarea><!--$event captura o estado do elemento html assim que ele é disparado  -->\n               </div>\n            </div>\n        </div><!--FIM DO row -->\n\n        <DIV class=\"ROW\">\n            <div class=\"col\">\n                <div class=\"d-flex justify-content-end\"> <!--div para justificar o button -->\n                    <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"verificarResposta()\">Verificar</button>\n                </div><!--FIM da div para justificar o button -->\n            </div>\n            \n        </DIV>\n\n    </div><!--FIM JUMBOTRON -->\n </div> <!--FIM DO container -->\n <footer class=\"card-footer text-muted fixed-bottom\">\n    <div>\n        <p>Copyright &copy; 2019 |\n        <a href=\"mailto:jennybekadutra@gmail.com?Subject=Hello%20\" target=\"_top\">  Jennyfer Rebeka Dutra</a></p>\n    </div>\n</footer>\n   \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/progresso/progresso.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/progresso/progresso.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <div class=\"progress\"> <!--Representa a barra completa -->\n    <div class=\"progress-bar progress-bar-striped w-{{ progresso }}\"></div><!--o quanto falta encher da barra antes era w-50 mas tornamos dinamico -->\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tentativas/tentativas.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tentativas/tentativas.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <img [src]=\"coracaoVazio\">   property binding de um atributo [src] \n<img [src]=\"coracaoVazio\" alt=\"coração\">\n<img [src]=\"coracaoVazio\" alt=\"coração\"> -->\n\n <!-- diretiva estrutural -->\n\n <img *ngFor=\"let coracao of coracoes\" [src]=\"coracao.exibeCoracao()\"/>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/topo/topo.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/topo/topo.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-inverse bg-faded\">\n    <h1 class=\"navbar-brand mb-0\">{{ titulo }}</h1> \n</nav>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-footer {\r\n    position:fixed;\r\n    bottom:0;\r\n    width:100%;\r\n    padding:0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsUUFBUTtJQUNSLFVBQVU7SUFDVixTQUFTO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIGJvdHRvbTowO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHBhZGRpbmc6MDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.jogoEmAndamento = true;
    }
    encerrarJogo(tipo) {
        this.jogoEmAndamento = false;
        this.tipoEncerramento = tipo;
    }
    reiniciarJogo() {
        this.jogoEmAndamento = true;
        this.tipoEncerramento = undefined;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_topo_topo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/topo/topo.component */ "./src/app/components/topo/topo.component.ts");
/* harmony import */ var _components_painel_painel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/painel/painel.component */ "./src/app/components/painel/painel.component.ts");
/* harmony import */ var _components_tentativas_tentativas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/tentativas/tentativas.component */ "./src/app/components/tentativas/tentativas.component.ts");
/* harmony import */ var _components_progresso_progresso_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/progresso/progresso.component */ "./src/app/components/progresso/progresso.component.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _components_topo_topo_component__WEBPACK_IMPORTED_MODULE_4__["TopoComponent"],
            _components_painel_painel_component__WEBPACK_IMPORTED_MODULE_5__["PainelComponent"],
            _components_tentativas_tentativas_component__WEBPACK_IMPORTED_MODULE_6__["TentativasComponent"],
            _components_progresso_progresso_component__WEBPACK_IMPORTED_MODULE_7__["ProgressoComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/painel/frases-mock.ts":
/*!**************************************************!*\
  !*** ./src/app/components/painel/frases-mock.ts ***!
  \**************************************************/
/*! exports provided: FRASES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRASES", function() { return FRASES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const FRASES = [
    { fraseEng: 'I Like to learn', frasePtBr: 'Eu gosto de aprender' },
    { fraseEng: 'I Watch tv', frasePtBr: 'Eu assisto tv' },
    { fraseEng: 'How are you?', frasePtBr: 'Como vai você?' },
    { fraseEng: 'I eat bread', frasePtBr: 'Eu como pão' }
];


/***/ }),

/***/ "./src/app/components/painel/painel.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/painel/painel.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".jumbotron {\r\n    margin-top: 20px;\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n}\r\n\r\n.card-footer {\r\n    position:fixed;\r\n    bottom:0;\r\n    width:100%;\r\n    padding:0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWluZWwvcGFpbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFpbmVsL3BhaW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1bWJvdHJvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmNhcmQtZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgYm90dG9tOjA7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgcGFkZGluZzowO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/painel/painel.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/painel/painel.component.ts ***!
  \*******************************************************/
/*! exports provided: PainelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelComponent", function() { return PainelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _frases_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frases-mock */ "./src/app/components/painel/frases-mock.ts");


 //feito o export da FRASES
let PainelComponent = class PainelComponent {
    constructor() {
        this.frases = _frases_mock__WEBPACK_IMPORTED_MODULE_2__["FRASES"]; //frases recebe os objetos do array Frase
        this.instrucao = 'Traduza a Frase:';
        this.resposta = ''; //guardar o value da escrita no input// se nao iniciar como vazia uma string da o valor de undefined
        this.rodada = 0;
        this.progresso = 0;
        this.tentativas = 3;
        this.encerrarJogo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); //decorado para ser exposto para elem pais
        this.atualizaRodada();
        // (tiramos esse codigo repedito e encapsulamos)
        //this.rodadaFrase = this.frases[this.rodada]//this.frases[0] assim seria estatico. 
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    atualizaResposta(resposta) {
        this.resposta = resposta.target.value;
        // console.log(this.resposta) //desta forma podemos acessar o elem target apartir do disparo
    }
    verificarResposta() {
        if (this.rodadaFrase.frasePtBr == this.resposta) {
            //trocar a pergunta da rodada
            this.rodada++;
            //progresso
            this.progresso = this.progresso + (100 / this.frases.length); //ou + 25 porque só temos 4 frases
            //confirmar se ganhou
            if (this.rodada === 4) {
                this.encerrarJogo.emit('Vitória'); //
            }
            //atualiza o objeto rodadaFrase
            this.atualizaRodada();
            //trocar >>>>>>this.rodadaFrase = this.frases[this.rodada]
        }
        else {
            //diminuir a variavel tentativas
            this.tentativas--;
            if (this.tentativas === -1) {
                this.encerrarJogo.emit('Derrota');
            }
        }
    }
    atualizaRodada() {
        //define a frase da rodada com base em alguma logica
        this.rodadaFrase = this.frases[this.rodada];
        //limpar resposta
        this.resposta = '';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PainelComponent.prototype, "encerrarJogo", void 0);
PainelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-painel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./painel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/painel/painel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./painel.component.css */ "./src/app/components/painel/painel.component.css")).default]
    })
], PainelComponent);



/***/ }),

/***/ "./src/app/components/progresso/progresso.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/progresso/progresso.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".progress{\r\n    background: #EEF8EA;\r\n    border: solid 1px #99CE28;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9ncmVzc28vcHJvZ3Jlc3NvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9ncmVzc28vcHJvZ3Jlc3NvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZ3Jlc3N7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUVGOEVBO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzk5Q0UyODtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/progresso/progresso.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/progresso/progresso.component.ts ***!
  \*************************************************************/
/*! exports provided: ProgressoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressoComponent", function() { return ProgressoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProgressoComponent = class ProgressoComponent {
    constructor() {
        this.progresso = 0; //decorar com @Input para transferir de pai para filho dados (adicionar ao core
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProgressoComponent.prototype, "progresso", void 0);
ProgressoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-progresso',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./progresso.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/progresso/progresso.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./progresso.component.css */ "./src/app/components/progresso/progresso.component.css")).default]
    })
], ProgressoComponent);



/***/ }),

/***/ "./src/app/components/tentativas/tentativas.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/tentativas/tentativas.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVudGF0aXZhcy90ZW50YXRpdmFzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/tentativas/tentativas.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/tentativas/tentativas.component.ts ***!
  \***************************************************************/
/*! exports provided: TentativasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TentativasComponent", function() { return TentativasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_coracao_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/coracao.model */ "./src/app/shared/coracao.model.ts");



let TentativasComponent = class TentativasComponent {
    constructor() {
        this.coracoes = [
            new _shared_coracao_model__WEBPACK_IMPORTED_MODULE_2__["Coracao"](true), new _shared_coracao_model__WEBPACK_IMPORTED_MODULE_2__["Coracao"](true), new _shared_coracao_model__WEBPACK_IMPORTED_MODULE_2__["Coracao"](true) //(true, 'A' , 'B') seriam assim passando os demais parametros, mas os parametros possuem um default
        ];
    }
    ngOnChanges() {
        //this.tentativas
        //this.coracoes.length
        if (this.tentativas !== this.coracoes.length) {
            let indice = this.coracoes.length - this.tentativas;
            this.coracoes[indice - 1].cheio = false;
        }
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TentativasComponent.prototype, "tentativas", void 0);
TentativasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tentativas',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tentativas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tentativas/tentativas.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tentativas.component.css */ "./src/app/components/tentativas/tentativas.component.css")).default]
    })
], TentativasComponent);



/***/ }),

/***/ "./src/app/components/topo/topo.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/topo/topo.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar {\r\n    background: #1CB0F6;\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b3BvL3RvcG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b3BvL3RvcG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xyXG4gICAgYmFja2dyb3VuZDogIzFDQjBGNjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/topo/topo.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/topo/topo.component.ts ***!
  \***************************************************/
/*! exports provided: TopoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopoComponent", function() { return TopoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TopoComponent = class TopoComponent {
    constructor() {
        this.titulo = 'Aprendendo Inglês';
    }
    ngOnInit() {
    }
};
TopoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-topo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./topo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/topo/topo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./topo.component.css */ "./src/app/components/topo/topo.component.css")).default]
    }) //decorar a classe pra informar que a classe existe
], TopoComponent);



/***/ }),

/***/ "./src/app/shared/coracao.model.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/coracao.model.ts ***!
  \*****************************************/
/*! exports provided: Coracao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coracao", function() { return Coracao; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Coracao {
    //podemos fazer os atributos dentro do contrutor pra diminuir o codigo
    constructor(cheio, ulrCoracaoCheio = '/assets/coracao_cheio.png', ulrCoracaoVazio = '/assets/coracao_vazio.png') {
        this.cheio = cheio;
        this.ulrCoracaoCheio = ulrCoracaoCheio;
        this.ulrCoracaoVazio = ulrCoracaoVazio;
    }
    exibeCoracao() {
        if (this.cheio) {
            return this.ulrCoracaoCheio;
        }
        else {
            return this.ulrCoracaoVazio;
        }
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Curso Udemy -Typescript, angular\Angular\projeto1\app1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map