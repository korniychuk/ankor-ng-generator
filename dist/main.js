/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Case; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inflected__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inflected___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inflected__);

var Case = (function () {
    function Case(name, entityType) {
        this.dash = name;
        this.title = __WEBPACK_IMPORTED_MODULE_0_inflected__["titleize"](name);
        this.camel = __WEBPACK_IMPORTED_MODULE_0_inflected__["camelize"](name.replace(/-/g, '_'), false);
        this.class = __WEBPACK_IMPORTED_MODULE_0_inflected__["camelize"](name.replace(/-/g, '_'));
        this.entityType = entityType;
    }
    Object.defineProperty(Case.prototype, "file", {
        get: function () {
            return this.dash + "." + this.entityType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Case.prototype, "fileInDir", {
        get: function () {
            return this.dash + "/" + this.dash + "." + this.entityType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Case.prototype, "classTyped", {
        get: function () {
            return this.class + __WEBPACK_IMPORTED_MODULE_0_inflected__["camelize"](this.entityType);
        },
        enumerable: true,
        configurable: true
    });
    Case.prototype.toString = function () {
        return this.dash;
    };
    Case.for = function (name, entityType) {
        return new Case(name, entityType);
    };
    return Case;
}());



/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "<strong><%= name %> Component</strong>\n"

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Config */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigLoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_find_config__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_find_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_find_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fs__);


var Config = (function () {
    function Config(data) {
        if (data === void 0) { data = {}; }
        this.rootDir = 'src';
        this.outDir = 'dist';
        this.appPrefix = 'app';
        this.indentation = '  ';
        this.styleExt = 'scss';
        this.sharedStylePath = '~styles/shared';
        this.useUnitTests = false;
        this.useE2ETests = false;
        this.sharedModuleEnabled = true;
        this.sharedModulePath = 'app/shared';
        this.debuggerEnabled = true;
        this.debuggerPackage = 'app/core/services';
        Object.assign(this, data);
    }
    Config.prototype.path = function () {
        var relativePath = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            relativePath[_i] = arguments[_i];
        }
        if (!relativePath.length) {
            return process.cwd();
        }
        var parts = [process.cwd()];
        relativePath.forEach(function (item) {
            var path = item instanceof Object
                ? item.toString()
                : item;
            parts.push(path);
        });
        return parts.join('/');
    };
    return Config;
}());

var ConfigLoader = (function () {
    function ConfigLoader() {
        this.findConfig();
    }
    Object.defineProperty(ConfigLoader.prototype, "hasConfig", {
        get: function () {
            return !!this.configPath;
        },
        enumerable: true,
        configurable: true
    });
    ConfigLoader.prototype.load = function () {
        var strConfig = __WEBPACK_IMPORTED_MODULE_1_fs___default.a.readFileSync(this.configPath).toString();
        var jsonConfig = JSON.parse(strConfig);
        if (!jsonConfig) {
            return false;
        }
        this._config = new Config(jsonConfig);
        return true;
    };
    ConfigLoader.prototype.reset = function () {
        if (!this.configPath) {
            this.configPath = process.cwd() + '/' + ConfigLoader.fileName;
        }
        this._config = new Config();
    };
    ConfigLoader.prototype.save = function () {
        var configStr = JSON.stringify(this._config, null, 2);
        __WEBPACK_IMPORTED_MODULE_1_fs___default.a.writeFileSync(this.configPath, configStr);
    };
    Object.defineProperty(ConfigLoader.prototype, "config", {
        get: function () {
            return Object.freeze(this._config || {});
        },
        enumerable: true,
        configurable: true
    });
    ConfigLoader.prototype.findConfig = function () {
        this.configPath = __WEBPACK_IMPORTED_MODULE_0_find_config___default()(ConfigLoader.fileName);
        return !!this.configPath;
    };
    return ConfigLoader;
}());

ConfigLoader.fileName = '.ng-generator.json';


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Di; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_services_fs_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_string_service__ = __webpack_require__(19);


var Di = (function () {
    function Di(prog, config) {
        this.prog = prog;
        this.config = config;
    }
    Di.prototype.init = function () {
        this.fs = new __WEBPACK_IMPORTED_MODULE_0_app_services_fs_service__["a" /* FsService */](this);
        this.str = new __WEBPACK_IMPORTED_MODULE_1_app_services_string_service__["a" /* StringService */](this);
    };
    return Di;
}());



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_common_options__ = __webpack_require__(9);

/* harmony default export */ __webpack_exports__["default"] = (function (di) {
    // Entities with common options
    [
        __webpack_require__(10).default(di),
        __webpack_require__(11).default(di),
        __webpack_require__(12).default(di),
        __webpack_require__(13).default(di),
        __webpack_require__(15).default(di),
        __webpack_require__(16).default(di),
        __webpack_require__(17).default(di),
    ]
        .forEach(function (prog) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_app_common_options__["a" /* commonOptions */])(prog); });
    __webpack_require__(14).default(di);
});;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {
	"name": "ankor-ng-generator",
	"version": "0.0.4",
	"description": "Angular 4 Entities Generator.",
	"main": "dist/main.js",
	"bin": {
		"ngg": "./bin/ngg"
	},
	"scripts": {
		"prod": "webpack",
		"dev": "webpack --watch",
		"start": "npm run dev",
		"test": "echo \"Error: no test specified\" && exit 1"
	},
	"author": "Anton Korniychuk <dev@korniychuk.pro>",
	"license": "MIT",
	"dependencies": {
		"find-config": "^1.0.0",
		"inflected": "^2.0.1",
		"lodash": "^4.17.4",
		"caporal": "~0.6.0",
		"chalk": "~1.1.3"
	},
	"devDependencies": {
		"@types/webpack": "^2.2.15",
		"@types/node": "^6.0.0",
		"@types/chalk": "^0.4.31",
		"@types/inflected": "^1.1.29",
		"@types/lodash": "^4.14.65",
		"webpack": "~2.6.1",
		"webpack-node-externals": "~1.6.0",
		"typescript": "~2.3.4",
		"tslib": "~1.7.1",
		"json-loader": "~0.5.4",
		"raw-loader": "~0.5.1",
		"awesome-typescript-loader": "~3.1.3"
	}
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("caporal");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = commonOptions;
function commonOptions(prog) {
    return prog
        .option('-d, --debug', 'Enable/Disable inject debug service', prog.BOOL)
        .option('-m, --description', 'Class description');
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_case__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["default"] = (function (_a) {
    var prog = _a.prog, fs = _a.fs, config = _a.config, str = _a.str;
    return prog
        .command('component', 'Generates angular component')
        .argument('<name>', 'Component name')
        .option('-d, --directory', 'Create or no directory for the component', prog.BOOL)
        .option('-t, --inline-template')
        .option('-s, --inline-style')
        .action(function (args, opts, logger) {
        var name = __WEBPACK_IMPORTED_MODULE_0_app_case__["a" /* Case */].for(args.name, 'component');
        var hasDir = opts.directory !== undefined
            ? opts.direction
            : (!opts.inlineStyle || !opts.inlineTemplate);
        str.labelCreation(name);
        //
        // 1. Make dir
        //
        if (hasDir) {
            fs.dir(name.dash);
        }
        //
        // 2. Make index.ts file
        //
        //
        // 3. HTML template
        //
        var templateVars = {
            name: name.title,
        };
        var template, templateFile;
        if (opts.inlineTemplate) {
            template = str.indent(fs.tplAsStr(__webpack_require__(2), templateVars), 2);
        }
        else {
            fs.tpl((hasDir ? name.fileInDir : name.file) + ".html", __webpack_require__(2), templateVars);
            templateFile = name.file + ".html";
        }
        //
        // 4. Style file
        //
        var styleVars = {
            sharedStylePath: config.sharedStylePath,
        };
        var style, styleFile;
        if (opts.inlineStyle) {
            style = str.indent(fs.tplAsStr(__webpack_require__(21), styleVars), 2);
        }
        else {
            fs.tpl((hasDir ? name.fileInDir : name.file) + "." + config.styleExt, __webpack_require__(22), styleVars);
            styleFile = name.file + "." + config.styleExt;
        }
        //
        // 5. The component
        //
        var tsVars = {
            selector: config.appPrefix + "-" + name.dash,
            className: name.classTyped,
            debug: opts.debug || (opts.debug === undefined && config.debuggerEnabled)
                ? config.debuggerPackage
                : null,
            description: opts.description,
            style: style, styleFile: styleFile,
            template: template, templateFile: templateFile,
        };
        fs.tpl((hasDir ? name.fileInDir : name.file) + ".ts", __webpack_require__(23), tsVars);
        //
        // 6. Unit-test
        //
        //
        // 7. e2e test
        //
        str.labelDone();
    });
});;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_case__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["default"] = (function (_a) {
    var prog = _a.prog, fs = _a.fs, config = _a.config, str = _a.str;
    return prog
        .command('directive', 'Generates angular directive')
        .argument('<name>', 'Directive name')
        .action(function (args, opts, logger) {
        var name = __WEBPACK_IMPORTED_MODULE_0_app_case__["a" /* Case */].for(args.name, 'directive');
        str.labelCreation(name);
        //
        // 1. Create the directive file
        //
        fs.tpl(name.file + ".ts", __webpack_require__(24), {
            selector: "" + config.appPrefix + name.class,
            className: name.classTyped,
            debug: opts.debug || (opts.debug === undefined && config.debuggerEnabled)
                ? config.debuggerPackage
                : null,
            description: opts.description,
        });
        str.labelDone();
    });
});;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_case__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["default"] = (function (_a) {
    var prog = _a.prog, fs = _a.fs, config = _a.config, str = _a.str;
    return prog
        .command('guard', 'Generates angular guard service')
        .argument('<name>', 'Guard service name')
        .action(function (args, opts, logger) {
        var name = __WEBPACK_IMPORTED_MODULE_0_app_case__["a" /* Case */].for(args.name, 'component');
        str.labelCreation(name);
        //
        // 1.
        //
        str.labelDone();
    });
});;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_case__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["default"] = (function (_a) {
    var prog = _a.prog, fs = _a.fs, config = _a.config, str = _a.str;
    return prog
        .command('model', 'Generates angular model')
        .argument('<name>', 'Model name')
        .action(function (args, opts, logger) {
        var name = __WEBPACK_IMPORTED_MODULE_0_app_case__["a" /* Case */].for(args.name, 'component');
        str.labelCreation(name);
        //
        // 1.
        //
        str.labelDone();
    });
});;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_case__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["default"] = (function (_a) {
    var prog = _a.prog, fs = _a.fs, config = _a.config, str = _a.str;
    return prog
        .command('module', 'Generates angular module')
        .option('-s, --shared', 'Import shared module', prog.BOOL)
        .argument('<name>', 'Module name')
        .action(function (args, opts, logger) {
        var name = __WEBPACK_IMPORTED_MODULE_0_app_case__["a" /* Case */].for(args.name, 'module');
        str.labelCreation(name);
        //
        // 1. The module file
        //
        fs.tpl(name.file + ".ts", __webpack_require__(25), {
            className: name.classTyped,
            humanTitle: name.title,
            shared: (opts.shared !== undefined ? opts.shared : config.sharedModuleEnabled)
                ? config.sharedModulePath
                : null,
        });
        str.labelDone();
    });
});;


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_case__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["default"] = (function (_a) {
    var prog = _a.prog, fs = _a.fs, config = _a.config, str = _a.str;
    return prog
        .command('page', 'Generates angular module')
        .option('-s, --shared', 'Import shared module', prog.BOOL)
        .option('-i, --inline-routes', 'If true separate routes file will be not created', prog.BOOL, true)
        .option('-c, --component-route', 'If true route of future component and component declaration will be added to the module', prog.BOOL, true)
        .option('-u, --url', 'Specify component route url', null, '')
        .argument('<name>', 'Page name')
        .action(function (args, opts, logger) {
        var name = __WEBPACK_IMPORTED_MODULE_0_app_case__["a" /* Case */].for(args.name, 'module');
        str.labelCreation(name, 'page module');
        //
        // 1. Create page directory
        //
        fs.dir("+" + name);
        //
        // 2. Create index file
        //
        var indexTpl = "export { " + name.classTyped + " } from './" + name.file + "';\n";
        fs.file("+" + name + "/index.ts", indexTpl);
        var routeObjectTpl = fs.tplAsStr(__webpack_require__(27), {
            componentClass: name.class + "Component",
            url: opts.url,
        });
        //
        // 3. Routes file
        //
        if (!opts.inlineRoutes) {
            fs.tpl("+" + name + "/" + name + ".routes.ts", __webpack_require__(28), {
                componentFile: opts.componentRoute ? name.dash + ".component.ts" : null,
                componentClass: name.class + "Component",
                routeObject: str.indent(routeObjectTpl),
            });
        }
        //
        // 4. The module file
        //
        fs.tpl("+" + name.fileInDir + ".ts", __webpack_require__(26), {
            className: name.classTyped,
            componentFile: opts.componentRoute ? name.dash + ".component.ts" : null,
            componentClass: name.class + "Component",
            routeObject: str.indent(routeObjectTpl, 3),
            routesFile: name + ".routes.ts",
            inlineRoutes: opts.inlineRoutes,
            humanTitle: name.title,
            shared: (opts.shared !== undefined ? opts.shared : config.sharedModuleEnabled)
                ? config.sharedModulePath
                : null,
        });
        //
        // 5. Change working directory to the created module directory
        // ... doesn't work
        //
        // fs.cd(`./+${name}`);
        str.labelDone();
    });
});;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_case__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["default"] = (function (_a) {
    var prog = _a.prog, fs = _a.fs, config = _a.config, str = _a.str;
    return prog
        .command('pipe', 'Generates angular pipe')
        .argument('<name>', 'Pipe name')
        .action(function (args, opts, logger) {
        var name = __WEBPACK_IMPORTED_MODULE_0_app_case__["a" /* Case */].for(args.name, 'pipe');
        str.labelCreation(name);
        //
        // 1. Create the pipe file
        //
        fs.tpl(name.file + ".ts", __webpack_require__(29), {
            selector: "" + config.appPrefix + name.class,
            className: name.classTyped,
            debug: opts.debug || (opts.debug === undefined && config.debuggerEnabled)
                ? config.debuggerPackage
                : null,
            description: opts.description,
        });
        str.labelDone();
    });
});;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_case__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["default"] = (function (_a) {
    var prog = _a.prog, fs = _a.fs, config = _a.config, str = _a.str;
    return prog
        .command('service', 'Generates angular service')
        .argument('<name>', 'Service name')
        .option('-i, --init-method', 'Create init method')
        .action(function (args, opts, logger) {
        var name = __WEBPACK_IMPORTED_MODULE_0_app_case__["a" /* Case */].for(args.name, 'service');
        str.labelCreation(name);
        //
        // 1. Create the service file
        //
        fs.tpl(name.file + ".ts", __webpack_require__(30), {
            className: name.classTyped,
            camelName: name.camel,
            debug: opts.debug || (opts.debug === undefined && config.debuggerEnabled)
                ? config.debuggerPackage
                : null,
            description: opts.description,
            hasInit: opts.initMethod,
        });
        str.labelDone();
    });
});;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chalk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chalk__);



var FsService = (function () {
    function FsService(_a) {
        var config = _a.config;
        this.path = config.path();
    }
    FsService.prototype.dir = function (dirName) {
        if (__WEBPACK_IMPORTED_MODULE_0_fs___default.a.existsSync(this.fullPath(dirName))) {
            console.log("%s:  " + dirName + " ...", __WEBPACK_IMPORTED_MODULE_2_chalk___default.a.cyan('Dir'), __WEBPACK_IMPORTED_MODULE_2_chalk___default.a.yellow("EXISTS"));
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_fs___default.a.mkdirSync(this.fullPath(dirName));
            console.log("%s:  " + dirName + " ... ", __WEBPACK_IMPORTED_MODULE_2_chalk___default.a.cyan('Dir'), __WEBPACK_IMPORTED_MODULE_2_chalk___default.a.green("OK"));
        }
    };
    FsService.prototype.tplAsStr = function (rawTpl, vars) {
        if (vars === void 0) { vars = {}; }
        var compiler = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.template(rawTpl);
        var compiledTpl = compiler(vars);
        return compiledTpl;
    };
    FsService.prototype.tpl = function (fileName, rawTpl, vars) {
        if (vars === void 0) { vars = {}; }
        this.file(fileName, this.tplAsStr(rawTpl, vars));
    };
    FsService.prototype.file = function (fileName, content) {
        var path = this.fullPath(fileName);
        var exists = __WEBPACK_IMPORTED_MODULE_0_fs___default.a.existsSync(path);
        __WEBPACK_IMPORTED_MODULE_0_fs___default.a.writeFileSync(path, content);
        console.log("%s: " + fileName + " ... ", __WEBPACK_IMPORTED_MODULE_2_chalk___default.a.cyan('File'), exists ? __WEBPACK_IMPORTED_MODULE_2_chalk___default.a.yellow('OVERWROTE') : __WEBPACK_IMPORTED_MODULE_2_chalk___default.a.green('OK'));
    };
    FsService.prototype.cd = function (path) {
        process.chdir(path);
    };
    FsService.prototype.fullPath = function (name) {
        return this.path + "/" + name;
    };
    return FsService;
}());



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chalk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chalk__);

var StringService = (function () {
    function StringService(_a) {
        var config = _a.config;
        this.indentation = config.indentation;
    }
    StringService.prototype.indent = function (text, size) {
        var _this = this;
        if (size === void 0) { size = 1; }
        if (typeof text !== 'string') {
            return '';
        }
        var res = text
            .split('\n')
            .map(function (line) {
            return /^\s*$/.test(line) // is space only string?
                ? ''
                : _this.indentation.repeat(size) + line;
        })
            .join('\n');
        return this.trimRight(res);
    };
    /*
    public repeat(str: string, number: number): string {
      let res = String(str);
  
      for (let i = 0, ilen = number - 2; i < ilen; i++) {
        res += str;
      }
  
      return res;
    }
    */
    StringService.prototype.trimRight = function (str) {
        return str.replace(/[\s]+(?!\n)$/gm, '');
    };
    StringService.prototype.labelCreation = function (name, entityType) {
        console.log('\nCreation %s: "%s"\n', entityType ? entityType : name.entityType, __WEBPACK_IMPORTED_MODULE_0_chalk___default.a.blue.bold(name.dash));
    };
    StringService.prototype.labelDone = function () {
        console.log(__WEBPACK_IMPORTED_MODULE_0_chalk___default.a.green('\nDone!\n'));
    };
    return StringService;
}());



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_caporal__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_caporal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_caporal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chalk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chalk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_config_loader__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_di__ = __webpack_require__(5);




var configLoader = new __WEBPACK_IMPORTED_MODULE_2_app_config_loader__["a" /* ConfigLoader */]();
var isConfigOk = configLoader.hasConfig && configLoader.load();
if (!isConfigOk && process.argv[2] !== 'init') {
    console.warn(__WEBPACK_IMPORTED_MODULE_1_chalk___default.a.red("\nError: Can not load config file."));
}
var version = __webpack_require__(7).version;
__WEBPACK_IMPORTED_MODULE_0_caporal___default.a
    .version(version)
    .command('init', 'Create\\Reset configuration file')
    .action(function (args, opts, logger) {
    configLoader.reset();
    configLoader.save();
    logger.info(__WEBPACK_IMPORTED_MODULE_1_chalk___default.a.green('Done!'));
});
if (isConfigOk) {
    var di = new __WEBPACK_IMPORTED_MODULE_3_app_di__["a" /* Di */](__WEBPACK_IMPORTED_MODULE_0_caporal___default.a, configLoader.config);
    di.init();
    __webpack_require__(6).default(di);
}
__WEBPACK_IMPORTED_MODULE_0_caporal___default.a.parse(process.argv);


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = ":host {\n\n}\n"

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "@import '<%= sharedStylePath %>';\n\n:host {\n\n}\n"

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';<% if (debug) { %>\n\nimport { DebugService, DebugLevel } from '<%= debug %>';<% } %>\n\n/**\n * <% if (description) print(description); else { %>The component description ...<% } %>\n *\n * @example\n *\n *     <<%= selector %>\n *     ></<%= selector %>>\n *\n */\n@Component({\n  selector: '<%= selector %>',<% if (templateFile) { %>\n  templateUrl: './<%= templateFile %>',<% } %><% if (template) { %>\n\n  template: `\n<%= template %>\n  `,<% } %><% if (styleFile) { %>\n  styleUrls: [ './<%= styleFile %>' ],<% } %><% if (style) { %>\n\n  styles:   [ `\n<%= style %>\n  ` ],<% } %>\n})\nexport class <%= className %> implements OnInit {<% if (debug) { %>\n\n  private debug: DebugService;\n<% } %>\n  public constructor(<% if (debug) { %>\n    debug: DebugService,<% } %>\n  ) {<% if (debug) { %>\n    this.debug = debug.factory(new.target.name, DebugLevel.All);<% } %>\n  }\n\n  public ngOnInit() {\n  }\n\n}\n"

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "import { Directive, ElementRef, Renderer } from '@angular/core';<% if (debug) { %>\n\nimport { DebugLevel, DebugService } from '<%= debug %>';<% } %>\n\n/**\n * <% if (description) print(description); else { %>The directive description ...<% } %>\n *\n * Usage:\n *\n *    <div <%= selector %>></div>\n *\n */\n@Directive({\n  selector: '[<%= selector %>]',\n})\nexport class <%= className %> {<% if (debug) { %>\n\n  private debug: DebugService;<% } %>\n\n  public constructor(\n    private el: ElementRef,\n    private renderer: Renderer,<% if (debug) { %>\n    debug: DebugService,<% } %>\n  ) {<% if (debug) { %>\n    this.debug = debug.factory(new.target.name, DebugLevel.All);<% } %>\n    this.init();\n  }\n\n  public init(): void {\n\n  }\n\n}\n"

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "import { NgModule } from '@angular/core';<% if (shared) { %>\n\nimport { SharedModule } from '<%= shared %>';<% } %>\n\nconsole.log('%c`<%= humanTitle %>` bundle loaded asynchronously', 'color: gray');\n\n@NgModule({\n  imports: [<% if (shared) { %>\n    SharedModule,<% } %>\n  ],\n  exports: [\n  ],\n  declarations: [\n  ],\n  providers: [\n  ],\n})\nexport class <%= className %> {\n}\n"

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "import { NgModule } from '@angular/core';\nimport { RouterModule } from '@angular/router';<% if (shared) { %>\n\nimport { SharedModule } from '<%= shared %>';<% } %><% if (!inlineRoutes || componentFile) { %>\n<% } %><% if (!inlineRoutes) { %>\nimport { ROUTES } from './<%= routesFile %>';<% } %><% if (componentFile) { %>\nimport { <%= componentClass %> } from './<%= componentFile %>';<% } %>\n\nconsole.log('%c`<%= humanTitle %>` page bundle loaded asynchronously', 'color: gray');\n\n@NgModule({\n  imports: [\n    RouterModule.forChild(<% if (!inlineRoutes) print('ROUTES'); else { %>[<% if (componentFile) { %>\n<%= routeObject %><% } %>\n    ]<% } %>),<% if (shared) { %>\n    SharedModule,<% } %>\n  ],\n  exports: [\n  ],\n  declarations: [<% if (componentFile) { %>\n    <%= componentClass %>,<% } %>\n  ],\n  providers: [\n  ],\n})\nexport class <%= className %> {\n}\n"

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "{\n  path: '<%= url %>',\n  component: <%= componentClass %>,\n},\n"

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "import { Routes } from '@angular/router';<% if (componentFile) { %>\n\nimport { <%= componentClass %> } from './<%= componentFile %>';<% } %>\n\nexport const ROUTES: Routes = [<% if (componentFile) { %>\n<%= routeObject %><% } %>\n];\n"

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "import { Pipe, PipeTransform } from '@angular/core';<% if (debug) { %>\n\nimport { DebugService, DebugLevel } from '<%= debug %>';<% } %>\n\n/**\n * <% if (description) print(description); else { %>The pipe description ...<% } %>\n *\n * Usage:\n *\n *     value | <%= selector %>: 'argument'\n *\n * @example\n *\n *     {{ 'input value' | <%= selector %>: 'argument' }}\n *     formats to: result value at here\n *\n */\n@Pipe({\n  name: '<%= selector %>',\n})\nexport class <%= className %> implements PipeTransform {<% if (debug) { %>\n\n  private debug: DebugService;<% } %>\n\n  public constructor(<% if (debug) { %>\n    debug: DebugService,<% } %>\n  ) {<% if (debug) { %>\n    this.debug = debug.factory(new.target.name, DebugLevel.All);<% } %>\n  }\n\n  public transform(value: any, ...args: any[]): any {\n    return null;\n  }\n\n}\n"

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "import { Injectable } from '@angular/core';<% if (debug) { %>\n\nimport { DebugLevel, DebugService } from '<%= debug %>';<% } %>\n\n/**\n * <% if (description) print(description); else { %>The service description ...<% } %>\n *\n * @example\n *\n *     class ... {\n *       constructor(private <%= camelName %>: <%= className %>) {\n *\n *       }\n *     }\n *\n */\n@Injectable()\nexport class <%= className %> {<% if (debug) { %>\n\n  private debug: DebugService;<% } %>\n\n  public constructor(<% if (debug) { %>\n    debug: DebugService,<% } %>\n  ) {<% if (debug) { %>\n    this.debug = debug.factory(new.target.name, DebugLevel.All);<% } %><% if (hasInit) { %>\n    this.init();<% } %>\n  }<% if (hasInit) { %>\n\n  private init(): void {\n\n  }<% } %>\n\n}\n"

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("find-config");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("inflected");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ })
/******/ ]);