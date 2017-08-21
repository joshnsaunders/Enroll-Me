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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_js__ = __webpack_require__(1);


var keys = Object.keys(__WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */])
var zoomIcons = [null, "hiya!", "hiya!again"]
var sideBarKey = __WEBPACK_IMPORTED_MODULE_0__data_js__["a" /* deft */]

$('#schoolCard').html("<div class=" + sideBarKey["cssName"] + ">" + sideBarKey["link"] + sideBarKey["name"] + "</a>" + '</div>' +

  '<div class="' + sideBarKey["cssIndicator"] + '">' + "<span id='titleDescriptor'>" + "DPS Assigned Grade" + "</span></div>" +

  '<div id="addressGrade"><span id="gradesKeyCard">' + sideBarKey["grades"] + "</span>" +

  "<span id='address'>" + sideBarKey["address"] + "</span>" +

  "<span id='keyPercentage'>" + "DPS<br>Score" + "</span></div>" +

  "<div id='phoneOperatorCard'><span id='phoneCard'>" + sideBarKey["phone"] + "</span>" +

  "<span id='operatorCard'>" + sideBarKey["operator"] + "</span></div>" +

  "<div id='parentSatisfactionCard'>Parent Satisfaction Grade & Percentage</div>" +

  "<div id='equityCard'>" + "Equity Grade & Percentage" + "</div>" +

  "<div id='enrollmentCard'>" + sideBarKey["enrollment"] + "</div>" +

  "<div id='lunchColorCard'><span id='frlCard'>Free or Reduced Lunch</span>" +
  "<span id='socCard'>Students of Color</span></div>" +

  "<div id='ellSpedCard'><span id='ellCard'>English Language Learners</span>" +

  "<span id='spedCard'>Special Education</span></div>" +

  "<div id='dataDate'>Data is from the DPS school performance framework for the 15-16 school year.</div>")



function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {
      lat:39.740318,
      lng:-104.920328,
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  for (var i = 0; i < keys.length; i++) {
    keys[i] = new MarkerWithLabel({
      position: __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][keys[i]]["position"],
      icon: __WEBPACK_IMPORTED_MODULE_0__data_js__["b" /* icons */]["dpsDefaultTiny"],
      draggable: false,
      raiseOnDrag: false,
      map: map,
      labelContent: "school",
      labelAnchor: new google.maps.Point(7.5, 18),
      labelClass: "tiny material-icons",
      labelStyle: {
        opacity: 0.75
      },
      color: __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][keys[i]]["icon"],
      infoBox: new google.maps.InfoWindow({
        content: '<div><strong>' + __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][keys[i]]["name"] + '</strong></div><div>' + __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][keys[i]]["phone"] + '</div>',
      }),
      name: __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][keys[i]]["name"],
      overallPercentage: __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][keys[i]]["percentage"],
      overallDescriptor: __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][keys[i]]["indicator"],
      grades: __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][keys[i]]["grades"],
      address: __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][keys[i]]["address"],
      link: __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][keys[i]]["link"],
      phone: __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][keys[i]]["phone"],
      operator: __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][keys[i]]["operator"],
      parentSatisfactionPercentage: __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][keys[i]]["parentSatisfactionPercentage"],
      parentSatisfactionIndicator: __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][keys[i]]["parentSatisfactionIndicator"],
      equityPercentage: __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][keys[i]]["equityPercentage"],
      equityIndicator: __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][keys[i]]["equityIndicator"],
      enrollment: __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][keys[i]]["enrollment"],
      frl: __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][keys[i]]["frl"],
      soc: __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][keys[i]]["soc"],
      ell: __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][keys[i]]["ell"],
      sped: __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][keys[i]]["sped"],
      cssIndicator: __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][keys[i]]["cssIndicator"],
      cssName: __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][keys[i]]["cssName"],
      smallIcon:__WEBPACK_IMPORTED_MODULE_0__data_js__["b" /* icons */]["dpsDefaultSmall"],
    });
  }

  for (var i = 0; i < keys.length; i++) {
    google.maps.event.addListener(keys[i], 'mouseover', function() {
      this.setIcon(this["color"])
    });
    google.maps.event.addListener(keys[i], 'mouseover', function() {
      this["infoBox"].open(map, this)
    });
    google.maps.event.addListener(keys[i], 'mouseout', function() {
      this["infoBox"].close(map, this)
    });
    google.maps.event.addListener(keys[i], 'mouseout', function() {
      this.setIcon(__WEBPACK_IMPORTED_MODULE_0__data_js__["b" /* icons */]["dpsDefault"]);
    });
    google.maps.event.addListener(keys[i], 'click', function() {

      $('#schoolCard').html(
        "<div class=" + this["cssName"] + ">" + this["link"] + this["name"] + "</a>" + '</div>' +

        '<div class="' + this["cssIndicator"] + '"id="nameCard">' + "<span id='titleDescriptor'>" + this["overallDescriptor"] + "</span></div>" +

        '<div id="addressGrade"><span id="gradesCard">' + this["grades"] + "</span>" +
        "<span id='addressCards'>" + this["address"] + "</span>" +
        "<span id='titlePercentage'>" + this["overallPercentage"] + "</span></div>" +

        "<div id='phoneOperatorCard'><span id='phoneCard'>" + this["phone"] + "</span>" +
        "<span id='operatorCard'>" + this["operator"] + "</span></div>" +

        "<div id='parentSatisfactionCard'>" + "Parent Satisfaction - " + this["parentSatisfactionPercentage"] + this["parentSatisfactionIndicator"] + "</div>" +

        "<div id='equityCard'>" + "Equity - " + this["equityPercentage"] + this["equityIndicator"] + "</div>" +

        "<div id='enrollmentCard'>" + "Enrollment - " + this["enrollment"] + "</div>" +

        "<div id='lunchColorCard'><span id='frlCard'>" + "Free or Reduced Lunch - " + this["frl"] + "</span>" +
        "<span id='socCard'>" + "Students of Color - " + this["soc"] + "</span></div>" +

        "<div id='ellSpedCard'><span id='ellCard'>" + "English Language Learners - " + this["ell"] + "</span>" +
        "<span id='spedCard'>" + "Special Education Students - " + this["sped"] + "</span></div>" +

        "<div id='dataDate'>Data is from the DPS school performance framework for the 15-16 school year.</div>");

      $('.exAll, #sbTitle, #scale').hide()
      $('#schoolCard').show()
    });
  }

  $('body').click(function(){
    var zoomLevel = map.getZoom();
    console.log(zoomLevel);
    for (var i=0;i<keys.length;i++){
      if(zoomLevel>=13){
        keys[i]["icon"] === __WEBPACK_IMPORTED_MODULE_0__data_js__["b" /* icons */]["dps" + "'" + keys[i]["color"] + "'"];
        keys[i].setIcon(__WEBPACK_IMPORTED_MODULE_0__data_js__["b" /* icons */]["dpsDefault"]);
        keys[i]["labelClass"] = "material-icons";
        keys[i]["labelAnchor"] = new google.maps.Point(12, 30);
      } else if(zoomLevel===12){
        keys[i].setIcon(__WEBPACK_IMPORTED_MODULE_0__data_js__["b" /* icons */]["dpsDefaultTiny"]);
        keys[i]["labelClass"] = "tiny material-icons";
        keys[i]["labelAnchor"] = new google.maps.Point(7.5, 18);
      } else if(zoomLevel<=11){
        keys[i].setIcon(__WEBPACK_IMPORTED_MODULE_0__data_js__["b" /* icons */]["dpsDefaultWickedTiny"]);
        keys[i]["labelClass"] = "wickedTiny material-icons";
        keys[i]["labelAnchor"] = new google.maps.Point(4.2,9);
      }
    }
  });

  $('.checkbox').click(function() {
    searchLoop();
    return
  })

  $('#textInput').keydown(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      searchLoop();
      return;
    }
  });

  function searchLoop() {
    var elemArray = [];
    var elemStop = [];

    $('.check').each(function() {
      if ($(this).prop("checked")) {
        elemArray.push($(this).val())
      } else if ($('#formType input:checkbox:checked').length === 0) {
        elemStop.push("jLoopFalse")
      }
    })
    var elemUniq = [...new Set(elemArray)]
    var elemStopUniq = [...new Set(elemStop)]

    var gradesArray = [];
    var gradesStop = [];

    $('.school').each(function() {
      if ($(this).prop("checked")) {
        gradesArray.push($(this).val())
      } else if ($('#formSchool input:checkbox:checked').length === 0) {
        gradesStop.push("kLoopFalse")
      }
    })

    var gradesUniq = [...new Set(gradesArray)]
    var gradesStopUniq = [...new Set(gradesStop)]

    var bFalse = [];
    var bArray = [];
    if ($('#textInput').val().length > 0) {
      bArray.push($('#textInput').val())
    } else if ($('#textInput').text().length === 0) {
      bFalse.push("boxFalse")
    }
    buttonLogic(elemStopUniq, gradesStopUniq, bFalse, elemUniq, gradesUniq, bArray)
    //6 paramters, the stop paramets ,the checked parameters, and the data array for looping over the object.
    return
  }

  function buttonLogic(a, b, c, d, e, f) {
    var schools = Object.keys(__WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */])

    if (a[0] === "jLoopFalse" && b[0] === "kLoopFalse" && c[0] === "boxFalse") {
      for (var i = 0; i < schools.length; i++) {
        keys[i].setVisible(true)
      }
    } else if (a[0] === "jLoopFalse" && b[0] === "kLoopFalse") {
      var textSearch = f[0].toLowerCase();
      for (var i = 0; i < schools.length; i++) {
        if ((__WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][schools[i]]["search"]).some(x => textSearch === x)) {
          keys[i].setVisible(true)
        } else {
          keys[i].setVisible(false)
        }
      }
    } else if (b[0] === "kLoopFalse" && c[0] === "boxFalse") {
      for (var i = 0; i < schools.length; i++) {
        if (d.some(x => __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][schools[i]]["color"] === x)) {
          keys[i].setVisible(true)
        } else {
          keys[i].setVisible(false)
        }
      }
    } else if (a[0] === "jLoopFalse" && c[0] === "boxFalse") {
      for (var i = 0; i < schools.length; i++) {
        if (e.some(x => __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][schools[i]]["elem"] === x)) {
          keys[i].setVisible(true)
        } else if (e.some(x => __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][schools[i]]["middle"] === x)) {
          keys[i].setVisible(true)
        } else if (e.some(x => __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][schools[i]]["high"] === x)) {
          keys[i].setVisible(true)
        } else {
          keys[i].setVisible(false)
        }
      }
    } else if (a[0] === "jLoopFalse") {
      var textSearch = f[0].toLowerCase();
      for (var i = 0; i < schools.length; i++) {
        if ((__WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][schools[i]]["search"]).some(x => textSearch === x) && e.some(x => __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][schools[i]]["elem"] === x)) {
          keys[i].setVisible(true);
        } else if ((__WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][schools[i]]["search"]).some(x => textSearch === x) && e.some(x => __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][schools[i]]["middle"] === x)) {
          keys[i].setVisible(true);
        } else if ((__WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][schools[i]]["search"]).some(x => textSearch === x) && e.some(x => __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][schools[i]]["high"] === x)) {
          keys[i].setVisible(true)
        } else {
          keys[i].setVisible(false)
        }
      }
    } else if (b[0] === "kLoopFalse") {
      var textSearch = f[0].toLowerCase();
      for (var i = 0; i < schools.length; i++) {
        if ((__WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][schools[i]]["search"]).some(x => textSearch === x) && (d.some(x => __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][schools[i]]["color"] === x))) {
          keys[i].setVisible(true)
        } else {
          keys[i].setVisible(false)
        }
      }
    } else if (c[0] === "boxFalse") {
      for (var i = 0; i < schools.length; i++) {
        if (e.some(x => __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][schools[i]]["elem"] === x) && d.some(x => __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][schools[i]]["color"] === x)) {
          keys[i].setVisible(true)
        } else if (e.some(x => __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][schools[i]]["middle"] === x) && d.some(x => __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][schools[i]]["color"] === x)) {
          keys[i].setVisible(true)
        } else if (e.some(x => __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][schools[i]]["high"] === x) && d.some(x => __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][schools[i]]["color"] === x)) {
          keys[i].setVisible(true)
        } else {
          keys[i].setVisible(false)
        }
      }
    } else {
      for (var i = 0; i < schools.length; i++) {
        var textSearch = f[0].toLowerCase();
        if ((__WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][schools[i]]["search"]).some(x => textSearch === x) && (d.some(x => __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][schools[i]]["color"] === x)) && e.some(x => __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][schools[i]]["elem"] === x)) {
          keys[i].setVisible(true)
        } else if ((__WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][schools[i]]["search"]).some(x => textSearch === x) && (d.some(x => __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][schools[i]]["color"] === x)) && e.some(x => __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][schools[i]]["middle"] === x)) {
          keys[i].setVisible(true)
        } else if ((__WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][schools[i]]["search"]).some(x => textSearch === x) && (d.some(x => __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][schools[i]]["color"] === x)) && e.some(x => __WEBPACK_IMPORTED_MODULE_0__data_js__["c" /* schoolData */][schools[i]]["high"] === x)) {
          keys[i].setVisible(true)
        } else {
          keys[i].setVisible(false)
        }
      }
    }
  }
}

window.initMap = initMap;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return icons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return schoolData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deft; });
var icons = {
  dpsDefault: {
    path: 'M22-48h-44v43h16l6 5 6-5h16z',
    fillColor: '#76787c',
    fillOpacity: 0.6,
    strokeColor: '',
    strokeWeight: 0.5,
    scale: 0.7
  },
  dpsDefaultTiny:{
    path: 'M22-48h-44v43h16l6 5 6-5h16z',
    fillColor: '#76787c',
    fillOpacity: 0.6,
    strokeColor: '',
    strokeWeight: 0.5,
    scale: 0.4
  },
  dpsDefaultWickedTiny:{
    path: 'M22-48h-44v43h16l6 5 6-5h16z',
    fillColor: '#76787c',
    fillOpacity: 0.6,
    strokeColor: '',
    strokeWeight: 0.5,
    scale: 0.2
  },
  dpsGray:{
    path: 'M22-48h-44v43h16l6 5 6-5h16z',
    fillColor: '#cecece',
    fillOpacity: 0.6,
    strokeColor: '',
    strokeWeight: 0.5,
    scale: 0.7
  },
  dpsGreen: {
    path: 'M22-48h-44v43h16l6 5 6-5h16z',
    fillColor: '#31bf11',
    fillOpacity: 0.9,
    strokeColor: '',
    strokeWeight: 0.5,
    scale: 0.7,
  },
  dpsBlue: {
    path: 'M22-48h-44v43h16l6 5 6-5h16z',
    fillColor: '#1a57f2',
    fillOpacity: 0.9,
    strokeColor: '',
    strokeWeight: 0.5,
    value: "blue",
    scale: 0.7,
  },
  dpsRed: {
    path: 'M22-48h-44v43h16l6 5 6-5h16z',
    fillColor: '#ea3317',
    fillOpacity: 0.9,
    strokeColor: '',
    strokeWeight: 0.5,
    scale: 0.7,
  },
  dpsYellow: {
    path: 'M22-48h-44v43h16l6 5 6-5h16z',
    fillColor: '#f7f70c',
    fillOpacity: 0.9,
    strokeColor: '',
    strokeWeight: 0.5,
    scale: 0.7,
  },
  dpsOrange: {
    path: 'M22-48h-44v43h16l6 5 6-5h16z',
    fillColor: '#ea8f07',
    fillOpacity: 0.9,
    strokeColor: '',
    strokeWeight: 0.5,
    scale: 0.7,
  },
}

var schoolData = {
    UprepSteele: {
      name: "UPrep Steele St.",
      percentage: "N/A",
      indicator: "No Data Yet",
      grades: "K-5",
      address:"3230 E 38th Ave,<br>Denver, CO 80205",
      link: '<a href = "http://uprepschool.org/campuses/steele-street/" target="_blank">',
      phone: "(303) 329-8412",
      operator: "Public Charter",
      parentSatisfactionPercentage:"N/A",
      parentSatisfactionIndicator:" N/A",
      equityPercentage: "N/A",
      equityIndicator:" N/A",
      enrollment: "363",
      frl: "81.8%",
      soc: "91.7%",
      ell: "23.8%",
      sped: "12.1%",
      operatorSearch: "uprep",
      ece:"n",
      elem: "elem",
      middle: "n",
      high: "n",
      color: "gray",
      position: {
        lat: 39.768974,
        lng: -104.949259
      },
      icon: icons["dpsGray"],
      cssIndicator:"cardIndicator grayIndicator",
      cssName:"cardName",
      search:["uprep steele st.", "uprep steele", "uprepsteele", "uprepsteelest", "uprepsteelest.", "uprepsteele st", "uprep steele st",
    "uprep", "charter"],
    },
  UprepArapahoe: {
    name: "UPrep Arapahoe St.",
    percentage:"82%",
    indicator:"Distinguished",
    grades:"K-5",
    address:"2409 Arapahoe St.,<br>Denver CO 80205",
    link:'<a href="http://uprepschool.org/campuses/arapahoe-street/" target="_blank">',
    phone:"(303) 292-0463",
    operator:"Public Charter",
    parentSatisfactionPercentage:"63%",
    parentSatisfactionIndicator:" Meets",
    equityPercentage:"72%",
    equityIndicator:" Meets",
    enrollment:"363",
    frl:"81.8%",
    soc:"91.7%",
    ell:"23.8%",
    sped:"12.1%",
    ece:"n",
    elem: "elem",
    middle: "n",
    high: "n",
    color: "blue",
    position: {
      lat: 39.755995,
      lng: -104.985700
    },
    icon: icons["dpsBlue"],
    cssIndicator:"cardIndicator blueIndicator",
    cssName:"cardName",
    search:["uprep arapahoe st.", "uprep arapahoe st", "uprep arapahoe", "upreparapahoe st.", "uprep arapahoest.", "upreparapahoest",
  "uprep", "charter"],
  },
  steck_elementary:{
    name:"Steck Elementary",
    percentage:"88.4%",
    indicator:"Distinguished",
    grades:"ECE-5",
    address:"450 Albion St.<br>Denver, CO 80220",
    link:'<a href="http://steck.dpsk12.org/" target="_blank">',
    phone:"(720) 424-3870",
    operator:"Traditional Public",
    parentSatisfactionPercentage:"69%",
    parentSatisfactionIndicator:" Meets",
    equityPercentage:"90%",
    equityIndicator:" Exceeds",
    enrollment:"362",
    frl:"12.2%",
    soc:"25.1",
    ell:"10.3%",
    sped:"5.5%",
    ece:"ece",
    elem:"elem",
    middle:"n",
    high:"n",
    color:"blue",
    position:{
      lat:39.723693,
      lng:-104.938546,
    },
    icon:icons["dpsBlue"],
    cssIndicator:"cardIndicator blueIndicator",
    cssName:"cardName",
    search:["steck", "steck elementary", "dps", "ece"]
  },
  Wyatt: {
    name: "Wyatt Academy",
    percentage:"41.7%",
    indicator:"Accredited On Watch",
    grades:"K-8",
    address:"3620 Franklin St.,<br>Denver CO 80205",
    link:'<a href="http://wyattacademy.org/" target="_blank">',
    phone:"(303) 292-5515",
    operator: "Public Charter",
    parentSatisfactionPercentage:"46%",
    parentSatisfactionIndicator:" Approaching",
    equityPercentage:"36%",
    equityIndicator:" Approaching",
    enrollment:"513",
    frl:"95.5%",
    soc:"98.4%",
    ell:"54.5%",
    sped:"9.7%",
    ece:"n",
    elem: "elem",
    middle: "middle",
    high: "n",
    color: "yellow",
    position: {
      lat: 39.767397,
      lng: -104.967769
    },
    icon: icons["dpsYellow"],
    phone: "(303) 292-5515",
    cssIndicator:"cardIndicator yellowIndicator",
    cssName:"cardName",
    search:["wyatt", "wyat", "wiat", "wyatt academy", "wyat academy", "wiat academy", "charter", "k-8", "k8"]
  },
  Cory_Elementary_School:{
    name:"Cory Elementary",
    percentage:"84.2%",
    indicator:"Distinguished",
    grades:"1-5",
    address:"1550 S. Steele St.<br>Denver, CO 80210",
    link:'<a href="http://cory.dpsk12.org/" target="_blank">',
    phone:"(720) 424-8380",
    operator:"Traditional Public",
    parentSatisfactionPercentage:"81%",
    parentSatisfactionIndicator:" Exceeds",
    equityPercentage:"79%",
    equityIndicator:" Meets",
    enrollment:"382",
    frl:"13.4%",
    soc:"21.2%",
    ell:"9.6%",
    sped:"4.7%",
    ece:"n",
    elem:"elem",
    middle:"n",
    high:"n",
    color:"blue",
    position:{
      lat:39.688684,
      lng:-104.949574,
    },
    icon:icons["dpsBlue"],
    cssIndicator:"cardIndicator blueIndicator",
    cssName:"cardName",
    search:["cory", "cory elementary", "cory elementary school", "dps"]
  },

  creativity_challenge_community_elem:{
    name:"Creativity Challenge Community",
    percentage:"84.1%",
    indicator:"Distinguished",
    grades:"K-5",
    address:"1551 S. Monroe St.<br> Denver, CO 80210",
    link:'<a href="http://c3.dpsk12.org/" target="_blank">',
    phone:"(720) 424-0630",
    operator:"Traditional Public",
    parentSatisfactionPercentage:"75%",
    parentSatisfactionIndicator:" Meets",
    equityPercentage:"63%",
    equityIndicator:" Meets",
    enrollment:"279",
    frl:"13.35",
    soc:"18.35",
    ell:"3.6%",
    sped:"7.2%",
    ece:"n",
    elem:"elem",
    middle:"n",
    high:"n",
    color:"blue",
    position:{
      lat:39.687980,
      lng:-104.945844,
    },
    icon:icons["dpsBlue"],
    cssIndicator:"cardIndicator blueIndicator",
    cssName:"cardName",
    search:["c3", "creativity challenge community", "dps"]
  },
  Swansea: {
    name: "Swansea Elementary",
    percentage:"39.3%",
    indicator:"Accr. on Priority Watch",
    grades:"ECE-5",
    address:"4650 Columbine St,<br>Denver CO 80216",
    link:'<a href="http://swansea.dpsk12.org/" target="_blank">',
    phone:"(720) 424-3630",
    operator: "Traditional Public",
    parentSatisfactionPercentage:"63%",
    parentSatisfactionIndicator:' Meets',
    equityPercentage:"50%",
    equityIndicator:" Approaching",
    enrollment:"526",
    frl:"95.4%",
    soc:"97.7%",
    ell:"58.7%",
    sped:"9.5%",
    operatorSearch:"denver public schools",
    ece:"n",
    elem: "elem",
    middle: "n",
    high: "n",
    color: "orange",
    position: {
      lat: 39.781041,
      lng: -104.956406
    },
    icon: icons["dpsOrange"],
    cssIndicator:"cardIndicator orangeIndicator",
    cssName:"cardName",
    search:["swansea", "swansea elementary", "dps", "ece", "pre-k", "prek", "pre-kindergarten", "prekindergarten"]
  },
  Smith:{
    name:"Smith Elementary",
    percentage:"20.8%",
    indicator:"Accredited on Probation",
    grades:"ECE-5",
    address:"3590 Jasmine St,<br>Denver CO 80207",
    link:'<a href="http://smith.dpsk12.org/" target="_blank">',
    phone:"(720) 424-4000",
    operator:"Traditional Public",
    parentSatisfactionPercentage:"25%",
    parentSatisfactionIndicator:" Does Not Meet",
    equityPercentage:"35%",
    equityIndicator:" Approaching",
    enrollment:"400",
    frl:"93.8%",
    soc:"97.3%",
    ell:"36.1%",
    sped:"10.8%",
    operatorSearch:"denver public schools",
    ece:"y",
    elem:"elem",
    middle:"n",
    high:"n",
    color:"red",
    position:{
      lat:39.767092,
      lng:-104.918310,
    },
    icon:icons["dpsRed"],
    cssIndicator:"cardIndicator redIndicator",
    cssName:"cardName",
    search:["smith", "smith elementary", "smith elem", "dps", "ece", "prek", "pre-k", "prekindergarten", "pre-kindergarten"],
  },
  Park_Hill_Elementary:{
    name:"Park Hill Elementary",
    percentage:"66.7%",
    indicator:"Meets Expectations",
    grades:"ECE-5",
    address:"5050 E. 19th Ave.<br>Denver, CO 80220",
    link:'<a href="http://www.parkhillelementary.org/" target="_blank">',
    phone:"(720) 424-4910",
    operator:"Traditional Public",
    parentSatisfactionPercentage:"75%",
    parentSatisfactionIndicator:" Meets",
    equityPercentage:"18%",
    equityIndicator:" Does Not Meet",
    enrollment:"603",
    frl:"23.5%",
    soc:"36.8%",
    ell:"5.7%",
    sped:"10%",
    operatorSearch:"DPS",
    ece:"y",
    elem:"elem",
    middle:"n",
    high:"n",
    color:"green",
    position:{
      lat:39.745228,
      lng:-104.929281,
    },
    icon:icons["dpsGreen"],
    cssIndicator:"cardIndicator greenIndicator",
    cssName:"cardName",
    search:["park hill", "park hill elementary", "dps", "ece", "pre-k", "prek", "pre-kindergarten", "prekindergarten"]
  },
  Slavens_K8:{
    name:"Slavens K-8 School",
    percentage:"87.7%",
    indicator:"Distinguished",
    grades:"K-8",
    address:"3000 S Clayton St,<br>Denver, CO 80210",
    link:'<a href="http://www.slavens.org/" target="_blank">',
    phone:"(720) 424-4150",
    operator:"Traditional Public",
    parentSatisfactionPercentage:"83%",
    parentSatisfactionIndicator:" Exceeds",
    equityPercentage:"77%",
    equityIndicator:" Meets",
    enrollment:"690",
    frl:"9.1%",
    soc:"17.8%",
    ell:"4.4%",
    sped:"5.7%",
    operatorSearch:"DPS",
    ece:"n",
    elem:"elem",
    middle:"middle",
    high:"n",
    color:"blue",
    position:{
      lat:39.661854,
      lng:-104.955757,
    },
    icon:icons["dpsBlue"],
    cssIndicator:"cardIndicator blueIndicator",
    cssName:"cardName",
    search:["slavens", "slavens school", "slavens k-8", "slavensk-8", "dps", "k-8", "k8"]
  },
  Strive_Prep_Federal:{
    name:"Strive Prep Federal",
    percentage:"75.4%",
    indicator:"Meets Expectations",
    grades:"6-8",
    address:"2626 W. Evans Ave.<br>Denver, CO 80219",
    link:'<a href="http://www.striveprep.org/school/strive-prep-federal/" target="_blank">',
    phone:"(303) 573-2017",
    operator:"Public Charter",
    parentSatisfactionPercentage:"75%",
    parentSatisfactionIndicator:" Meets",
    equityPercentage:"63%",
    equityIndicator:" Meets",
    enrollment:"359",
    frl:"91.1%",
    soc:"99.4%",
    ell:"84.7%",
    sped:"16.2%",
    operatorSearch:"Strive",
    ece:"n",
    elem:"n",
    middle:"middle",
    high:"n",
    color:"green",
    position:{
      lat:39.678327,
      lng:-105.018574,
    },
    icon:icons["dpsGreen"],
    cssIndicator:"cardIndicator greenIndicator",
    cssName:"cardName",
    search:["strive prep federal", "striveprep federal", "strive federal", "prep federal", "charter", "strive"]
  },
  Skinner_Middle_school:{
    name:"Skinner Middle School",
    percentage:"50.4%",
    indicator:"Accredited on Watch",
    grades:"6-8",
    address:"3435 West 40th Ave,<br>Denver, CO 80211",
    link:'<a href="http://skinner.dpsk12.org/" target="_blank">',
    phone:"(720) 424-1420",
    operator:"Traditional Public",
    parentSatisfactionPercentage:"50%",
    parentSatisfactionIndicator:" Meets",
    equityPercentage:"25%",
    equityIndicator:" Does Not Meet",
    enrollment:"614",
    frl:"66.4%",
    soc:"73.1%",
    ell:"21.2%",
    sped:"16.6%",
    operatorSearch:"dps",
    ece:"n",
    elem:"n",
    middle:"middle",
    high:"n",
    color:"yellow",
    position:{
      lat:39.772492,
      lng:-105.031094,
    },
    icon:icons["dpsYellow"],
    cssIndicator:"cardIndicator yellowIndicator",
    cssName:"cardName",
    search:["skinner", "skinner middle", "skinner middle school", "dps"],
  },
  Noel_Community_Arts_School:{
    name:"Noel Community Arts",
    percentage:"39.3%",
    indicator:"Accr. on Priority Watch",
    grades:"6-12",
    address:"5000 Crown Blvd.<br>Denver, CO 80239",
    link:'<a href="http://ncas.dpsk12.org/index.jsp" target="_blank">',
    phone:"(720) 423-5840",
    operator:"Traditional Public",
    parentSatisfactionPercentage:"23%",
    parentSatisfactionIndicator:" Does Not Meet",
    equityPercentage:"40%",
    equityIndicator:" Approaching",
    enrollment:"753",
    frl:"82.1%",
    soc:"94.2%",
    ell:"47.8%",
    sped:"16.3%",
    operatorSearch:"dps",
    ece:"n",
    elem:"n",
    middle:"middle",
    high:"high",
    color:"orange",
    position:{
      lat:39.786523,
      lng:-104.827337,
    },
    icon:icons["dpsOrange"],
    cssIndicator:"cardIndicator orangeIndicator",
    cssName:"cardName",
    search:["ncas", "noel community arts school", "dps", "6-12", "arts", ""],

  },
  Hill_Campus_of_Arts_and_Sciences:{
    name:"Hill Campus of<br>Arts and Sciences",
    percentage:"33.3%",
    indicator:"Accredited on Probation",
    grades:"6-8",
    address:"451 Clermont Street<br>Denver, Colorado 80220",
    link:'<a href="http://hill.dpsk12.org/" target="_blank">',
    phone:"(720) 423-9680",
    operator:"Traditional Public",
    parentSatisfactionPercentage:"31%",
    parentSatisfactionIndicator:" Does Not Meet",
    equityPercentage:"23%",
    equityIndicator:" Does Not Meet",
    enrollment:"720",
    frl:"59.2",
    soc:"65%",
    ell:"31.5%",
    sped:"12.2%",
    ece:"n",
    elem:"n",
    middle:"middle",
    high:"n",
    color:"red",
    position:{
      lat:39.723676,
      lng:-104.935441,
    },
    icon:icons["dpsRed"],
    cssIndicator:"cardIndicator redIndicator",
    cssName:"cardName",
    search:["hill campus of arts and sciences", "hcas", "dps", "arts", "sciences", "arts and sciences"]
  },
  dsst_byers_middle_school:{
    name:"DSST Byers MS",
    percentage:"81.5%",
    indicator:"Distinguished",
    grades:"6-8",
    address:"150 S. Pearl Street<br>Denver, CO 80209",
    link:'<a href="http://www.dsstpublicschools.org/byers-middle-school" target="_blank">',
    phone:"(303) 524-6350",
    operator:"Public Charter",
    parentSatisfactionPercentage:"81%",
    parentSatisfactionIndicator:" Exceeds",
    equityPercentage:"77%",
    equityIndicator:" Meets",
    enrollment:"448",
    frl:"36.8%",
    soc:"45.3%",
    ell:"21.9%",
    sped:"5.8%",
    ece:"n",
    elem:"n",
    middle:"middle",
    high:"n",
    color:"blue",
    position:{
      lat:39.713658,
      lng:-104.979898,
    },
    icon:icons["dpsBlue"],
    cssIndicator:"cardIndicator blueIndicator",
    cssName:"cardName",
    search:["dsst", "dsst byers", "dsst byers middle school", "dsst byers middle", "dsst byers ms", "charter"],

  },

George_Washington_High: {
  name:"George Washington HS",
  percentage:"48.5%",
  indicator:"Accredited on Watch",
  grades:"9-12",
  address:"655 S Monaco Pkwy,<br>Denver, CO 80224",
  link:'<a href="http://gwhs.dpsk12.org/" target="_blank">',
  phone:"(720) 423-8600",
  operator:"Traditional Public",
  parentSatisfactionPercentage:"21%",
  parentSatisfactionIndicator:" Does Not Meet",
  equityPercentage:"50%",
  equityIndicator:" Approaching",
  enrollment:"1,355",
  frl:"56.6%",
  soc:"71.7%",
  ell:"30.7%",
  sped:"10.5%",
  operatorSearch:"DPS",
  ece:"n",
  elem:"n",
  middle:"n",
  high:"high",
  color:"yellow",
  position:{
    lat:39.705486,
    lng:-104.913902,
  },
  icon:icons["dpsYellow"],
  cssIndicator:"cardIndicator yellowIndicator",
  cssName:"cardName",
  search:["George Washington High School", "GWHS", "GW HS", "George", "dps"]
},
North_High_School:{
  name:"North High School",
  percentage:"53.1%",
  indicator:"Meets Expectations",
  grades:"9-12",
  address:"2960 North Speer Blvd<br>Dever, CO 80211",
  link:'<a href="http://north.dpsk12.org/" target="_blank">',
  phone:"(720)423-2700",
  operator:"Traditional Public",
  parentSatisfactionPercentage:"64%",
  parentSatisfactionIndicator:" Meets",
  equityPercentage:"57%",
  equityIndicator:" Meets",
  enrollment:"933",
  frl:"83.3%",
  soc:"90.1%",
  ell:"46.4%",
  sped:"28.2%",
  ece:"n",
  elem:"n",
  middle:"n",
  high:"high",
  color:"green",
  position:{
    lat:39.760727,
    lng:-105.022171,
  },
  icon:icons["dpsGreen"],
  cssIndicator:"cardIndicator greenIndicator",
  cssName:"cardName",
  search:["north", "north high school", "dps"],
},
  kipp_northeast_denver_leadership_academy:{
    name:"KIPP NW Denver Leadership Academy",
    percentage:"87.6%",
    indicator:"Distinguished",
    grades:"9-12",
    address:"18250 E 51st Ave<br>Denver, CO 80249",
    link:'<a href="http://www.kippcolorado.org/kndla/index.cfm" target="_blank">',
    phone:"(720) 452-2570",
    operator:"Traditional Public",
    parentSatisfactionPercentage:"92%",
    parentSatisfactionIndicator:" Exceeds",
    equityPercentage:"76%",
    equityIndicator:" Meets",
    enrollment:"136",
    frl:"86%",
    soc:"94.9%",
    ell:"68.4%",
    sped:"9.6%",
    ece:"n",
    elem:"n",
    middle:"n",
    high:"high",
    color:"blue",
    position:{
      lat:39.789060,
      lng:-104.775029,
    },
    icon:icons["dpsBlue"],
    cssIndicator:"cardIndicator blueIndicator",
    cssName:"cardName",
    search:["kipp", "kipp hs", "kipp northeast denver leadership academy", "kipp ne dla", "charter"]
  },

  dsst_stapleton_high:{
    name:"DSST Stapleton HS",
    percentage:"83.7%",
    indicator:"Distinguished",
    grades:"9-12",
    address:"2000 Valentia St,<br>Denver, CO 80238",
    link:'<a href="http://www.dsstpublicschools.org/stapleton-high-school" target="_blank">',
    phone:"(303) 320-5570",
    operator:"Public Charter",
    parentSatisfactionPercentage:"93%",
    parentSatisfactionIndicator:" Exceeds",
    equityPercentage:"87%",
    equityIndicator:" Exceeds",
    enrollment:"523",
    frl:"53.3",
    soc:"70.7%",
    ell:"37.2%",
    sped:"6.5%",
    ece:"n",
    elem:"n",
    middle:"n",
    high:"high",
    color:"blue",
    position:{
      lat:39.747801,
      lng:-104.890029,
    },
    icon:icons["dpsBlue"],
    cssIndicator:"cardIndicator blueIndicator",
    cssName:"cardName",
    search:["dsst stapleton", "dsst", "dsst stapleton high school", "dsst stapleton hs", "charter", "denver school of science and technology"]
  },
  dsst_college_view_high:{
    name:"DSST College View HS",
    percentage:"91.7%",
    indicator:"Distinguished",
    grades:"9-11",
    address:"3111 W. Dartmouth Ave,<br>Denver, CO 80236",
    link:'<a href="http://www.dsstpublicschools.org/college-view-high-school" target="_blank">',
    phone:"(303) 524-6320",
    operator:"Public Charter",
    parentSatisfactionPercentage:"92%",
    parentSatisfactionIndicator:" Exceeds",
    equityPercentage:"89%",
    equityIndicator:" Exceeds",
    enrollment:"139",
    frl:"84.2%",
    soc:"91.4%",
    ell:"70.5%",
    sped:"3.6%",
    ece:"n",
    elem:"n",
    middle:"n",
    high:"high",
    color:"blue",
    position:{
      lat:39.660360,
      lng:-105.027123,
    },
    icon:icons["dpsBlue"],
    cssIndicator:"cardIndicator blueIndicator",
    cssName:"cardName",
    search:["dsst college view", "dsst college", "dsst view", "dsst collegeview", "dsstcollegeview", "dsst", "dsst cvhs", "dsst cv", "dsstcv", "charter"],
  },
  dsst_Cole_high_school:{
    name:"DSST Cole HS",
    percentage:"80.5%",
    indicator:"Distinguished",
    grades:"9-12",
    address:"3240 Humboldt Street<br>Denver, CO 80205",
    link:'<a href="http://www.dsstpublicschools.org/cole-high-school" target="_blank">',
    phone:"(303) 524-6354",
    operator:"Public Charter",
    parentSatisfactionPercentage:"79%",
    parentSatisfactionIndicator:" Meets",
    equityPercentage:"73%",
    equityIndicator:" Meets",
    enrollment:"280",
    frl:"76.4%",
    soc:"86.8%",
    ell:"47.7%",
    sped:"11.4%",
    ece:"n",
    elem:"n",
    middle:"n",
    high:"high",
    color:"blue",
    position:{
      lat:39.762594,
      lng:-104.969164,
    },
    icon:icons["dpsBlue"],
    cssIndicator:"cardIndicator blueIndicator",
    cssName: "cardName",
    search:["dsst", "dsst cole", "dsst cole hs", "dsst cole high school", "charter"]
  },
  dsst_gvr_high_school:{
    name:"DSST GVR HS",
    percentage:"85.4%",
    indicator:"Distinguished",
    grades:"9-12",
    address:"4800 Telluride St. Bld2<br>Denver, CO 80249",
    link:'<a href="http://www.dsstpublicschools.org/green-valley-ranch-high-school" target="_blank">',
    phone:"(303) 524-6300",
    operator:"Public Charter",
    parentSatisfactionPercentage:"93%",
    parentSatisfactionIndicator:"Exceeds",
    equityPercentage:"88%",
    equityIndicator:"Exceeds",
    enrollment:"518",
    frl:"70.5%",
    soc:"93.4%",
    ell:"52.9%",
    sped:"3.1%",
    ece:"n",
    elem:"n",
    middle:"n",
    high:"high",
    color:"blue",
    position:{
      lat:39.784720,
      lng:-104.780812,
    },
    icon:icons["dpsBlue"],
    cssIndicator:"cardIndicator blueIndicator",
    cssName:"cardName",
    search:["dsst gvr", "dsst gvr hs", "dsst", "dsst green valley ranch hs", "dsst green valley ranch", "charter"]
  },
  Abraham_Lincoln_High:{
    name:"Abraham Lincoln HS",
    percentage:"35.4%",
    indicator:"Accr. on Priority Watch",
    grades:"9-12",
    address:"2285 S Federal Blvd,<br>Denver, CO 80219",
    link:'<a href="http://lincolnlancers.org/" target="_blank">',
    phone:"(720) 423-5000",
    operator:"Traditional Public",
    parentSatisfactionPercentage:"43%",
    parentSatisfactionIndicator:" Approaching",
    equityPercentage:"54%",
    equityIndicator:" Meets",
    enrollment:"1,393",
    frl:"93.2%",
    soc:"97.7%",
    ell:"73.2%",
    sped:"11%",
    operatorSearch:"DPS",
    ece:"n",
    middle:"n",
    high:"high",
    color:"orange",
    position:{
      lat:39.676834,
      lng:-105.026920,
    },
    icon:icons["dpsOrange"],
    cssIndicator:"cardIndicator orangeIndicator",
    cssName:"cardName",
    search:["abraham lincoln high school", "abe lincoln hs", "abraham lincoln hs", "lincoln high", "alhs", "dps"]
  },
  Venture_Prep_High:{
    name:"Venture Prep HS",
    percentage:"30.9%",
    indicator:"Accredited on Probation",
    grades:"9-12",
    address:"2900 Richard Allen Ct,<br>Denver, CO 80205",
    link:'<a href="http://ventureprep.org/" target="_blank">',
    phone:"(303) 893-0805",
    operator:"Public Charter",
    parentSatisfactionPercentage:"57%",
    parentSatisfactionIndicator:" Meets",
    equityPercentage:"45%",
    equityIndicator:" Approaching",
    enrollment:"261",
    frl:"85.4%",
    soc:"93.1%",
    ell:"49.5%",
    sped:"12.3%",
    operatorSearch:"Venture Prep",
    ece:"n",
    elem:"n",
    middle:"n",
    high:"high",
    color:"red",
    position:{
      lat:39.758646,
      lng:-104.942559,
    },
    icon:icons["dpsRed"],
    cssIndicator:"cardIndicator redIndicator",
    cssName:"cardName",
    search:["venture prep high school", "venture prep", "venture", "vphs", "charter"],
    }
}
var deft = {
    name:"Click on a School",
    percentage:"DPS Score",
    indicator:"DPS Assigned Grade",
    grades:"Grades",
    address:"Address",
    link:'<a href = "http://spf.dpsk12.org/wp-content/uploads/2017/01/2016SPF_FinalRatings_Traditional.pdf" target="_blank">',
    phone:"Phone Number",
    operator:"Type of School",
    parentSatisfactionPercentage:"Parent Satisfaction Percentage",
    parentSatisfactionIndicator:"Parent Satisfaction Grade",
    equityPercentage:"Equity Percentage",
    equityIndicator:"Equity Grade",
    enrollment: "Number of Students",
    frl:"Free/Reduced Lunch",
    soc:"Students of Color",
    ell:"English Language Learners",
    sped:"Special Education",
    cssIndicator:"cardIndicator grayIndicator",
    cssName:"cardName",
    color:"gray",
  }


/***/ })
/******/ ]);