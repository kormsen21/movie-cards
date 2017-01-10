/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	(0, _jquery2.default)(document).ready(function () {

	    (0, _jquery2.default)('ul.tabs li').click(function () {
	        var tabID = (0, _jquery2.default)(this).attr('data-tab');
	        (0, _jquery2.default)('ul.tabs li').removeClass('current');
	        (0, _jquery2.default)('.block').removeClass('current');
	        (0, _jquery2.default)(this).addClass('current');
	        (0, _jquery2.default)("#" + tabID).addClass('current');
	        (0, _jquery2.default)('.container').css("background-image", "url('assets/" + tabID + "-bg.jpg')");
	    });

	    function ratingSystem(name) {
	        this.stars = (0, _jquery2.default)('#' + name + ' #user-rating span');
	        this.rating = null;
	        this.stars.each(function (i, star) {
	            (0, _jquery2.default)(star).attr("data-count", i);
	            (0, _jquery2.default)(star).on('mouseenter', this.starsEntered.bind(this));
	            (0, _jquery2.default)(star).on('mouseleave', this.starsExited.bind(this));
	            (0, _jquery2.default)(star).on('click', this.starsClicked.bind(this));
	        }.bind(this));
	        // $('#user-rating').on('mouseleave', this.starsExited.bind(this));
	    };

	    ratingSystem.prototype.starsEntered = function (e) {
	        this.fillStars(e.target);
	    };

	    ratingSystem.prototype.starsExited = function (e) {
	        this.fillStars(this.rating);
	    };

	    ratingSystem.prototype.starsClicked = function (e) {
	        this.rating = e.target;
	    };

	    ratingSystem.prototype.fillStars = function (el) {
	        this.stars.each(function (i, star) {
	            if (el == null || (0, _jquery2.default)(star).attr('data-count') > (0, _jquery2.default)(el).attr('data-count')) {
	                (0, _jquery2.default)(star).removeClass('hover');
	            } else {
	                (0, _jquery2.default)(star).addClass('hover');
	            }
	        });
	    };

	    var starWarsRating = new ratingSystem("star-wars");
	    var starTrekRating = new ratingSystem("pulp-fiction");
	    var starTrekRating = new ratingSystem("chopper");
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = $;

/***/ }
/******/ ]);