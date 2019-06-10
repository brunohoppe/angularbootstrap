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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div>\n   <app-invest></app-invest>\n </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/invest/invest-action/invest-action.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/invest/invest-action/invest-action.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"invest-action\">\n\t<div class=\"invest-title\">\n\t\t<div class=\"balance\">\n\t\t\t<span>Balance Available</span><b>R$ 16.249,38</b>\n\t\t</div>\n\n\t</div>\n\t<div class=\"invest-content\">\n\t\t<div class=\"slider-content\">\n\t\t\t<div class=\"slider-parent\">\n\t\t\t\t<div class=\"slidecontainer\">\n\t\t\t\t\t<input type=\"range\" min=\"1\" max=\"100\" value=\"50\" class=\"slider\" id=\"myRange\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"slider-calc\">R$ 10.987,99</div>\n\t\t</div>\n\t\t<div class=\"invest-info\">\n\t\t\t<span>{{ text }}: R$ 16.249</span>\n\t\t\t<span>35.7%</span>\n\t\t</div>\n\t\t<div class=\"invest-confirm\">\n\t\t\t<div class=\"text\">\n\t\t\t\tYou can set the value using the slider or typing the sum\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<button class=\"btn btn-primary\">{{ buttonTitle }}</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/invest/invest.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/invest/invest.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"invest\">\n\t<h4 class=\"titles\">\n\t\t<span class=\"title-1\">NEW MODULE BTC</span>\n\t\t<span class=\"title-2\">/ BRL</span>\n\t</h4>\n\t<div class=\"row no-gutters mb-4 invest-top\">\n\t\t<div class=\"col-md-3 col-sm-6\">\n\t\t\t<app-ring-chart></app-ring-chart>\n\t\t</div>\n\t\t<div class=\"col-md-3 col-sm-6\">\n\t\t\t<div class=\"card description\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<span class=\"title-works\">How it works?</span>\n\t\t\t\t\t<div class=\"description-text\">Liveable exercitation elegant emerging ea.\n\t\t\t\t\t\tOfficia proident ex alluring. Exercitation id liveable impeccable velit\n\t\t\t\t\t\texclusive, pintxos Airbus A380 consequat ANA ut Beams. Magna in hand-crafted\n\t\t\t\t\t\tanim cupidatat delightful. Business class first-class essential ullamco airport global exclusive ea id dolore mollit boulevard.\n\t\t\t\t\t\tIncididunt business class voluptate officia proident,\n\t\t\t\t\t\tboutique non pariatur Sunspel exclusive Nordic. Duis exercitation\n\t\t\t\t\t\tToto cillum. Extraordinary Muji craftsmanship, occaecat lovely\n\t\t\t\t\t\tclassic Ginza airport Ettinger. Elegant id Sunspel Boeing 787\n\t\t\t\t\t\tWinkreative sharp Zürich.\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-6 col-sm-12\">\n\t\t\t<div class=\"card line-chart-btc\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"chart-container-btc\">\n\t\t\t\t\t\t<h4 class=\"title-chart\">Fluctuation</h4>\n\t\t\t\t\t\t<ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t<a class=\"nav-link active\" (click)=\"tabChart = 'Year'\" id=\"year-tab\" data-toggle=\"tab\" role=\"tab\" aria-controls=\"year\" aria-selected=\"true\">Year</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t<a class=\"nav-link\" (click)=\"tabChart = 'Month'\" id=\"month-tab\" data-toggle=\"tab\"  role=\"tab\" aria-controls=\"month\" aria-selected=\"false\">Monthly</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t<a class=\"nav-link\" (click)=\"tabChart = 'Day'\" id=\"day-tab\" data-toggle=\"tab\"  role=\"tab\" aria-controls=\"day\" aria-selected=\"false\">Daily</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<div class=\"tab-content\" id=\"tab-i\">\n\t\t\t\t\t\t\t<div class=\"tab-pane fade\"  [class.show]=\"tabChart === 'Year'\" [class.active]=\"tabChart === 'Year'\"  id=\"year-tab\" role=\"tabpanel\" aria-labelledby=\"year-tab\">\n                  <div style=\"display: flex; flex: 1 1 100%\">\n                <ngx-charts-line-chart\n                *ngIf=\"chartType === 'line-chart'\"\n                [view]=\"view\"\n                [scheme]=\"colorScheme\"\n                [schemeType]=\"schemeType\"\n                [results]=\"dataResult\"\n                [animations]=\"animations\"\n                [legend]=\"showLegend\"\n                [legendTitle]=\"legendTitle\"\n                [legendPosition]=\"legendPosition\"\n                (legendLabelClick)=\"onLegendLabelClick($event)\"\n                [gradient]=\"gradient\"\n                [xAxis]=\"showXAxis\"\n                [yAxis]=\"showYAxis\"\n                [showXAxisLabel]=\"showXAxisLabel\"\n                [showYAxisLabel]=\"showYAxisLabel\"\n                [xAxisLabel]=\"xAxisLabel\"\n                [yAxisLabel]=\"yAxisLabel\"\n                [autoScale]=\"autoScale\"\n                [xScaleMin]=\"xScaleMin\"\n                [xScaleMax]=\"xScaleMax\"\n                [yScaleMin]=\"yScaleMin\"\n                [yScaleMax]=\"yScaleMax\"\n                [timeline]=\"timeline\"\n                [showGridLines]=\"showGridLines\"\n                [curve]=\"curve\"\n                [rangeFillOpacity]=\"rangeFillOpacity\"\n                [roundDomains]=\"roundDomains\"\n                [tooltipDisabled]=\"tooltipDisabled\"\n                [trimXAxisTicks]=\"trimXAxisTicks\"\n                [trimYAxisTicks]=\"trimYAxisTicks\"\n                [rotateXAxisTicks]=\"rotateXAxisTicks\"\n                [maxXAxisTickLength]=\"maxXAxisTickLength\"\n                [maxYAxisTickLength]=\"maxYAxisTickLength\"\n                (select)=\"select($event)\"\n              >\n              </ngx-charts-line-chart>\n                  </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"tab-pane fade\"  [class.show]=\"tabChart === 'Month'\" [class.active]=\"tabChart === 'Month'\" id=\"month-tab\" role=\"tabpanel\" aria-labelledby=\"month-tab\">\n\t\t\t\t\t\t\t\tGráfico2\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"tab-pane fade\" [class.show]=\"tabChart === 'Day'\" [class.active]=\"tabChart === 'Day'\" id=\"day-tab\" role=\"tabpanel\" aria-labelledby=\"day-tab\">\n\t\t\t\t\t\t\t\tGráfico3\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\t<div class=\"row no-gutters invest-bottom\">\n\t\t<div class=\"col-md-4 mb-4\">\n\t\t\t<div class=\"card action\">\n\t\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t\t<ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t<a class=\"nav-link active\" id=\"invest-tab\" data-toggle=\"tab\" href=\"#invest\" role=\"tab\" aria-controls=\"invest\" aria-selected=\"true\">Invest</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t<a class=\"nav-link\" id=\"retrieve-tab\" data-toggle=\"tab\" href=\"#retrieve\" role=\"tab\" aria-controls=\"retrieve\" aria-selected=\"false\">Retrieve</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<div class=\"tab-content\" id=\"myTabContent\">\n\t\t\t\t\t\t<div class=\"tab-pane fade show active\" id=\"invest\" role=\"tabpanel\" aria-labelledby=\"invest-tab\">\n\t\t\t\t\t\t\t<app-invest-action buttonTitle=\"Invest\"></app-invest-action>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"tab-pane fade\" id=\"retrieve\" role=\"tabpanel\" aria-labelledby=\"retrieve-tab\">\n\t\t\t\t\t\t\t<app-invest-action buttonTitle=\"Retrieve\" text=\"Retrieving\"></app-invest-action>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-8 mb-4\">\n\t\t\t<div class=\"card historic\">\n\t\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t\t<div class=\"invest-historic\">\n\t\t\t\t\t\t<ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n\t\t\t\t\t\t\t<li class=\"nav-item\" *ngFor=\"let item of months\">\n\t\t\t\t\t\t\t\t<a class=\"nav-link\" [class.active]=\"selectedMonth === item\" (click)=\"selectedMonth = item\" [class] id=\"t-tab\" data-toggle=\"tab-t\" role=\"tab\" aria-controls=\"invest\" aria-selected=\"true\">{{ item }}</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<div class=\"dropdown mobile\">\n\t\t\t\t\t\t\t<button class=\"btn btn-link dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t\t{{ selectedMonth }}\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" >\n\t\t\t\t\t\t\t\t<a class=\"dropdown-item\" (click)=\"selectedMonth = item\" *ngFor=\"let item of months\">{{ item }}</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"dropdown\">\n\t\t\t\t\t\t\t<button class=\"btn btn-link dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t\t{{ selectedYear }}\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" >\n\t\t\t\t\t\t\t\t<a class=\"dropdown-item\" (click)=\"selectedYear = year\" *ngFor=\"let year of years\">{{ year }}</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<table class=\"table table-striped table-responsive table-bordered\">\n\t\t\t\t\t\t<thead class=\"d-flex header\">\n\t\t\t\t\t\t\t<tr class=\"d-flex flex-grow-1\">\n\t\t\t\t\t\t\t\t<th class=\"col-3\">Date</th>\n\t\t\t\t\t\t\t\t<th class=\"col-3\">Fluctuation</th>\n\t\t\t\t\t\t\t\t<th class=\"col-6 text-right\">Value</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody class=\"d-flex flex-column\">\n\t\t\t\t\t\t\t<tr class=\"d-flex flex-grow-1\">\n\t\t\t\t\t\t\t\t<td class=\"col-3\">16 Aug 2019</td>\n\t\t\t\t\t\t\t\t<td class=\"col-3\">18%</td>\n\t\t\t\t\t\t\t\t<td class=\"col-6 text-right\">$ 1492,00</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"d-flex flex-grow-1\">\n\t\t\t\t\t\t\t\t<td class=\"col-3\">16 Aug 2019</td>\n\t\t\t\t\t\t\t\t<td class=\"col-3\">18%</td>\n\t\t\t\t\t\t\t\t<td class=\"col-6 text-right\">$ 1492,00</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"d-flex flex-grow-1\">\n\t\t\t\t\t\t\t\t<td class=\"col-3\">16 Aug 2019</td>\n\t\t\t\t\t\t\t\t<td class=\"col-3\">18%</td>\n\t\t\t\t\t\t\t\t<td class=\"col-6 text-right\">$ 1492,00</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"d-flex flex-grow-1\">\n\t\t\t\t\t\t\t\t<td class=\"col-3\">16 Aug 2019</td>\n\t\t\t\t\t\t\t\t<td class=\"col-3\">18%</td>\n\t\t\t\t\t\t\t\t<td class=\"col-6 text-right\">$ 1492,00</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ring-chart/ring-chart.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ring-chart/ring-chart.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card ring-chart\">\n\t<div class=\"card-body\">\n\t\t<svg viewBox=\"0 0 36 36\" class=\"svg\">\n\t\t\t<path class=\"circle1\" stroke-dasharray=\"100, 100\" d=\"M18 2.0845\n            a 15.9155 15.9155 0 0 1 0 31.831\n            a 15.9155 15.9155 0 0 1 0 -31.831\" />\n\t\t\t<path class=\"circle2\" stroke-dasharray=\"80, 100\" d=\"M18 2.0845\n            a 15.9155 15.9155 0 0 1 0 31.831\n            a 15.9155 15.9155 0 0 1 0 -31.831\" />\n\t\t</svg>\n\t\t<div class=\"subtitle\">\n\t\t\t<div class=\"subtitle-item\">\n\t\t\t\t<div class=\"label-btc\"></div>\n\t\t\t\t<span>Bitcoin</span>\n\t\t\t</div>\n\t\t\t<div class=\"subtitle-item\">\n\t\t\t\t<div class=\"label-real\"></div>\n\t\t\t\t<span>Real</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"box-summary\">\n\t\t<div class=\"balance\">\n\t\t\t<span class=\"p-label\">\n\t\t\t\tAllocated balance\n\t\t\t</span>\n\t\t\t<span>\n\t\t\t\tR$ 16.249,38\n\t\t\t</span>\n\t\t</div>\n\t</div>\n\t<div class=\"box-est\">\n\t\t<div>\n\t\t\t<span class=\"p-label\">\n\t\t\t\tAccumulated Earning\n\t\t\t</span>\n\t\t</div>\n\t</div>\n\t<div class=\"box-est text-class\">\n\t\t<div class=\"d-flex justify-content-between box-in\">\n\t\t\t<span>\n\t\t\t\t7 Days\n\t\t\t</span>\n\t\t\t<span>\n\t\t\t\t4%\n\t\t\t</span>\n\t\t</div>\n\t\t<div class=\"d-flex justify-content-between box-in\">\n\t\t\t<span>\n\t\t\t\t30 Days\n\t\t\t</span>\n\t\t\t<span>\n\t\t\t\t41%\n\t\t\t</span>\n\t\t</div>\n\t\t<div class=\"d-flex justify-content-between box-in\">\n\t\t\t<span>\n\t\t\t\t365 Days\n\t\t\t</span>\n\t\t\t<span>\n\t\t\t\t378%\n\t\t\t</span>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'bitrecifefreela';
    }
    ngOnInit() {
        // const testValues = [ 0, 6, 8, 7, 5, 6, 5 ];
        // this.drawGraph( testValues );
    }
    drawGraph(dataArr) {
        this.canvas = document.getElementById('testCanvas');
        const context = this.canvas.getContext('2d');
        const GRAPH_TOP = 25;
        const GRAPH_BOTTOM = 375;
        const GRAPH_LEFT = 25;
        const GRAPH_RIGHT = 475;
        const GRAPH_HEIGHT = 350;
        const GRAPH_WIDTH = 450;
        const arrayLen = dataArr.length;
        let largest = 0;
        for (let i = 0; i < arrayLen; i++) {
            if (dataArr[i] > largest) {
                largest = dataArr[i];
            }
        }
        context.clearRect(0, 0, 500, 400);
        // set font for fillText()
        context.font = '16px Arial';
        // draw X and Y axis
        context.beginPath();
        context.moveTo(GRAPH_LEFT, GRAPH_BOTTOM);
        context.lineTo(GRAPH_RIGHT, GRAPH_BOTTOM);
        context.lineTo(GRAPH_RIGHT, GRAPH_TOP);
        context.stroke();
        // draw reference line
        context.beginPath();
        context.strokeStyle = '#BBB';
        context.moveTo(GRAPH_LEFT, GRAPH_TOP);
        context.lineTo(GRAPH_RIGHT, GRAPH_TOP);
        // draw reference value for hours
        context.fillText(largest, GRAPH_RIGHT + 15, GRAPH_TOP);
        context.stroke();
        // draw reference line
        context.beginPath();
        context.moveTo(GRAPH_LEFT, (GRAPH_HEIGHT) / 4 * 3 + GRAPH_TOP);
        context.lineTo(GRAPH_RIGHT, (GRAPH_HEIGHT) / 4 * 3 + GRAPH_TOP);
        // draw reference value for hours
        context.fillText(largest / 4, GRAPH_RIGHT + 15, (GRAPH_HEIGHT) / 4 * 3 + GRAPH_TOP);
        context.stroke();
        // draw reference line
        context.beginPath();
        context.moveTo(GRAPH_LEFT, (GRAPH_HEIGHT) / 2 + GRAPH_TOP);
        context.lineTo(GRAPH_RIGHT, (GRAPH_HEIGHT) / 2 + GRAPH_TOP);
        // draw reference value for hours
        context.fillText(largest / 2, GRAPH_RIGHT + 15, (GRAPH_HEIGHT) / 2 + GRAPH_TOP);
        context.stroke();
        // draw reference line
        context.beginPath();
        context.moveTo(GRAPH_LEFT, (GRAPH_HEIGHT) / 4 + GRAPH_TOP);
        context.lineTo(GRAPH_RIGHT, (GRAPH_HEIGHT) / 4 + GRAPH_TOP);
        // draw reference value for hours
        context.fillText(largest / 4 * 3, GRAPH_RIGHT + 15, (GRAPH_HEIGHT) / 4 + GRAPH_TOP);
        context.stroke();
        // draw titles
        // context.fillText( 'Day of the week', GRAPH_RIGHT / 3, GRAPH_BOTTOM + 50);
        // context.fillText( 'Hours', GRAPH_RIGHT + 30, GRAPH_HEIGHT / 2);
        context.beginPath();
        context.lineJoin = 'round';
        context.strokeStyle = 'black';
        context.moveTo(GRAPH_LEFT, (GRAPH_HEIGHT - dataArr[0] / largest * GRAPH_HEIGHT) + GRAPH_TOP);
        // draw reference value for day of the week
        context.fillText('1', 15, GRAPH_BOTTOM + 25);
        for (let i = 1; i < arrayLen; i++) {
            context.lineTo(GRAPH_RIGHT / arrayLen * i + GRAPH_LEFT, (GRAPH_HEIGHT - dataArr[i] / largest * GRAPH_HEIGHT) + GRAPH_TOP);
            // draw reference value for day of the week
            context.fillText((i + 5), GRAPH_RIGHT / arrayLen * i, GRAPH_BOTTOM + 25);
        }
        context.stroke();
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _invest_invest_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invest/invest.module */ "./src/app/invest/invest.module.ts");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _invest_invest_module__WEBPACK_IMPORTED_MODULE_5__["InvestModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/invest/invest-action/invest-action.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/invest/invest-action/invest-action.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invest-action {\n  display: flex;\n  flex-direction: column;\n}\n.invest-action .invest-title {\n  padding: 0.5rem 1rem;\n  display: flex;\n  justify-content: space-between;\n  background-color: #d8d8d8;\n}\n.invest-action .invest-title .balance {\n  display: flex;\n  flex: 1 1 100%;\n  justify-content: space-between;\n  font-family: HelveticaNeue;\n}\n.invest-action .invest-info {\n  display: flex;\n  justify-content: space-between;\n  flex: 1;\n  background-color: #62c370;\n  padding: 0.5rem 1rem;\n  font-family: HelveticaBold;\n  color: #fff;\n  position: relative;\n}\n.invest-action .invest-info:after {\n  content: \"\";\n  display: block;\n  width: 0;\n  height: 0;\n  border-top: 12px solid #62c370;\n  border-bottom: 12px solid transparent;\n  border-left: 12px solid transparent;\n  border-right: 12px solid transparent;\n  position: absolute;\n  top: 32px;\n  right: 75px;\n}\n.invest-action .invest-confirm {\n  display: flex;\n  padding: 1rem 1rem;\n  font-size: 0.6rem;\n  justify-content: space-between;\n}\n.invest-action .invest-confirm .btn-primary {\n  background-color: #26a745;\n  border-radius: 19px;\n  min-width: 147px;\n  height: 40px;\n  border: none;\n}\n.invest-action .invest-confirm .text {\n  padding-right: 3rem;\n}\n.invest-action .invest-content .slider-content {\n  display: flex;\n  justify-content: space-between;\n  padding: 2rem 1rem;\n}\n.invest-action .invest-content .slider-calc {\n  padding: 0 5px;\n  margin: 0 0 0 5px;\n  border: 1px solid #cacaca;\n  line-height: 25px;\n  font-family: HelveticaNeue;\n}\n.invest-action .slider-parent {\n  flex: 1;\n  /* Mouse-over effects */\n  /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */\n}\n.invest-action .slider-parent .slidecontainer {\n  width: 100%;\n  /* Width of the outside container */\n}\n.invest-action .slider-parent .slider {\n  -webkit-appearance: none;\n  /* Override default CSS styles */\n  -moz-appearance: none;\n       appearance: none;\n  width: 100%;\n  /* Full-width */\n  height: 5px;\n  /* Specified height */\n  background: #d3d3d3;\n  /* Grey background */\n  outline: none;\n  /* Remove outline */\n  opacity: 0.7;\n  /* Set transparency (for mouse-over effects on hover) */\n  /* 0.2 seconds transition on hover */\n  transition: opacity 0.2s;\n}\n.invest-action .slider-parent .slider:hover {\n  opacity: 1;\n  /* Fully shown on mouse-over */\n}\n.invest-action .slider-parent .slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  /* Override default look */\n  appearance: none;\n  width: 15px;\n  /* Set a specific slider handle width */\n  height: 15px;\n  /* Slider handle height */\n  background: #007bff;\n  /* Blue background */\n  cursor: pointer;\n  /* Cursor on hover */\n  border-radius: 50%;\n}\n.invest-action .slider-parent .slider::-moz-range-thumb {\n  width: 15px;\n  /* Set a specific slider handle width */\n  height: 15px;\n  /* Slider handle height */\n  background: #007bff;\n  /* Blue background */\n  cursor: pointer;\n  /* Cursor on hover */\n  border-radius: 50%;\n}\n@media (min-width: 768px) and (max-width: 1092px) {\n  .invest-action .invest-confirm {\n    font-size: 0.5rem;\n  }\n  .invest-action .invest-confirm .text {\n    padding-right: 1rem;\n  }\n  .invest-action .invest-confirm .btn-primary {\n    min-width: 100px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JydW5vL3Byb2pldG9zL2JpdHJlY2lmZWZyZWVsYW5jZXIvc3JjL2FwcC9pbnZlc3QvaW52ZXN0LWFjdGlvbi9pbnZlc3QtYWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbnZlc3QvaW52ZXN0LWFjdGlvbi9pbnZlc3QtYWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0FDQ0Q7QURFRTtFQUNDLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7QUNBSDtBREVHO0VBQ0MsYUFBQTtFQUNBLGNBQUE7RUFDSSw4QkFBQTtFQUNBLDBCQUFBO0FDQVI7QURLRTtFQUNDLGFBQUE7RUFDQSw4QkFBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNISDtBRE1FO0VBQ0MsV0FBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0pIO0FET0U7RUFDQyxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNHLDhCQUFBO0FDTE47QURPRztFQUNDLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDTEo7QURPTTtFQUNFLG1CQUFBO0FDTFI7QURVSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FDUk47QURXSTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQ1ROO0FEWUU7RUFDRSxPQUFBO0VBMEJBLHVCQUFBO0VBTUEsZ0hBQUE7QUN4Q0o7QURVSTtFQUNFLFdBQUE7RUFDQSxtQ0FBQTtBQ1JOO0FEV0k7RUFDRSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7T0FBQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx1REFBQTtFQUVBLG9DQUFBO0VBQ0Esd0JBQUE7QUNUTjtBRGFJO0VBQ0UsVUFBQTtFQUNBLDhCQUFBO0FDWE47QURlSTtFQUNFLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDZE47QURrQkE7RUFFSTtJQUNFLGlCQUFBO0VDaEJKO0VEaUJJO0lBQ0UsbUJBQUE7RUNmTjtFRGlCSTtJQUNFLGdCQUFBO0VDZk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2ludmVzdC9pbnZlc3QtYWN0aW9uL2ludmVzdC1hY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW52ZXN0LWFjdGlvbiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC8vIG1pbi13aWR0aDogMzUwcHg7O1xuXHQuaW52ZXN0IHtcblx0XHQmLXRpdGxlIHtcblx0XHRcdHBhZGRpbmc6IC41cmVtIDFyZW07XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2Q4ZDhkODtcblxuXHRcdFx0LmJhbGFuY2Uge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRmbGV4OiAxIDEgMTAwJTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZTtcblxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCYtaW5mbyB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0ZmxleDogMTtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICM2MmMzNzA7XG5cdFx0XHRwYWRkaW5nOiAuNXJlbSAxcmVtO1xuXHRcdFx0Zm9udC1mYW1pbHk6IEhlbHZldGljYUJvbGQ7XG5cdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR9XG5cblx0XHQmLWluZm86YWZ0ZXIge1xuXHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0d2lkdGg6IDA7XG5cdFx0XHRoZWlnaHQ6IDA7XG5cdFx0XHRib3JkZXItdG9wOiAxMnB4IHNvbGlkICM2MmMzNzA7XG5cdFx0XHRib3JkZXItYm90dG9tOiAxMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRcdFx0Ym9yZGVyLWxlZnQ6IDEycHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdFx0XHRib3JkZXItcmlnaHQ6IDEycHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHR0b3A6IDMycHg7XG5cdFx0XHRyaWdodDogNzVweDtcblx0XHR9XG5cblx0XHQmLWNvbmZpcm0ge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdHBhZGRpbmc6IDFyZW0gMXJlbTtcblx0XHRcdGZvbnQtc2l6ZTogLjZyZW07XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBcblx0XHRcdC5idG4tcHJpbWFyeSB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMyNmE3NDU7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDE5cHg7XG5cdFx0XHRcdG1pbi13aWR0aDogMTQ3cHg7XG5cdFx0XHRcdGhlaWdodDogNDBweDtcblx0XHRcdFx0Ym9yZGVyOiBub25lO1xuICAgICAgfVxuICAgICAgLnRleHQge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xuICAgICAgfVxuXHRcdH1cbiAgfVxuICAuaW52ZXN0LWNvbnRlbnQge1xuICAgIC5zbGlkZXItY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgcGFkZGluZzogMnJlbSAxcmVtO1xuICAgIH1cbiAgXG4gICAgLnNsaWRlci1jYWxjIHtcbiAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgbWFyZ2luOiAwIDAgMCA1cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xuICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZTtcbiAgICB9XG4gIH1cbiAgLnNsaWRlci1wYXJlbnQge1xuICAgIGZsZXg6IDE7XG4gIFxuICAgIC5zbGlkZWNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC8qIFdpZHRoIG9mIHRoZSBvdXRzaWRlIGNvbnRhaW5lciAqL1xuICAgIH1cbiAgXG4gICAgLnNsaWRlciB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAvKiBPdmVycmlkZSBkZWZhdWx0IENTUyBzdHlsZXMgKi9cbiAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC8qIEZ1bGwtd2lkdGggKi9cbiAgICAgIGhlaWdodDogNXB4O1xuICAgICAgLyogU3BlY2lmaWVkIGhlaWdodCAqL1xuICAgICAgYmFja2dyb3VuZDogI2QzZDNkMztcbiAgICAgIC8qIEdyZXkgYmFja2dyb3VuZCAqL1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIC8qIFJlbW92ZSBvdXRsaW5lICovXG4gICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAvKiBTZXQgdHJhbnNwYXJlbmN5IChmb3IgbW91c2Utb3ZlciBlZmZlY3RzIG9uIGhvdmVyKSAqL1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XG4gICAgICAvKiAwLjIgc2Vjb25kcyB0cmFuc2l0aW9uIG9uIGhvdmVyICovXG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycztcbiAgICB9XG4gIFxuICAgIC8qIE1vdXNlLW92ZXIgZWZmZWN0cyAqL1xuICAgIC5zbGlkZXI6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIC8qIEZ1bGx5IHNob3duIG9uIG1vdXNlLW92ZXIgKi9cbiAgICB9XG4gIFxuICAgIC8qIFRoZSBzbGlkZXIgaGFuZGxlICh1c2UgLXdlYmtpdC0gKENocm9tZSwgT3BlcmEsIFNhZmFyaSwgRWRnZSkgYW5kIC1tb3otIChGaXJlZm94KSB0byBvdmVycmlkZSBkZWZhdWx0IGxvb2spICovXG4gICAgLnNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgLyogT3ZlcnJpZGUgZGVmYXVsdCBsb29rICovXG4gICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAvKiBTZXQgYSBzcGVjaWZpYyBzbGlkZXIgaGFuZGxlIHdpZHRoICovXG4gICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAvKiBTbGlkZXIgaGFuZGxlIGhlaWdodCAqL1xuICAgICAgYmFja2dyb3VuZDogIzAwN2JmZjtcbiAgICAgIC8qIEJsdWUgYmFja2dyb3VuZCAqL1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgLyogQ3Vyc29yIG9uIGhvdmVyICovXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICBcbiAgICAuc2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHtcbiAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgLyogU2V0IGEgc3BlY2lmaWMgc2xpZGVyIGhhbmRsZSB3aWR0aCAqL1xuICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgLyogU2xpZGVyIGhhbmRsZSBoZWlnaHQgKi9cbiAgICAgIGJhY2tncm91bmQ6ICMwMDdiZmY7XG4gICAgICAvKiBCbHVlIGJhY2tncm91bmQgKi9cbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIC8qIEN1cnNvciBvbiBob3ZlciAqL1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDkycHgpe1xuICAuaW52ZXN0LWFjdGlvbiB7XG4gICAgLmludmVzdC1jb25maXJtIHtcbiAgICAgIGZvbnQtc2l6ZTogMC41cmVtO1xuICAgICAgLnRleHQge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgICAgfVxuICAgICAgLmJ0bi1wcmltYXJ5IHtcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuIiwiLmludmVzdC1hY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmludmVzdC1hY3Rpb24gLmludmVzdC10aXRsZSB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGQ4ZDg7XG59XG4uaW52ZXN0LWFjdGlvbiAuaW52ZXN0LXRpdGxlIC5iYWxhbmNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMSAxIDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWU7XG59XG4uaW52ZXN0LWFjdGlvbiAuaW52ZXN0LWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MmMzNzA7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhQm9sZDtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pbnZlc3QtYWN0aW9uIC5pbnZlc3QtaW5mbzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItdG9wOiAxMnB4IHNvbGlkICM2MmMzNzA7XG4gIGJvcmRlci1ib3R0b206IDEycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiAxMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDEycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMnB4O1xuICByaWdodDogNzVweDtcbn1cbi5pbnZlc3QtYWN0aW9uIC5pbnZlc3QtY29uZmlybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcbiAgZm9udC1zaXplOiAwLjZyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5pbnZlc3QtYWN0aW9uIC5pbnZlc3QtY29uZmlybSAuYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZhNzQ1O1xuICBib3JkZXItcmFkaXVzOiAxOXB4O1xuICBtaW4td2lkdGg6IDE0N3B4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5pbnZlc3QtYWN0aW9uIC5pbnZlc3QtY29uZmlybSAudGV4dCB7XG4gIHBhZGRpbmctcmlnaHQ6IDNyZW07XG59XG4uaW52ZXN0LWFjdGlvbiAuaW52ZXN0LWNvbnRlbnQgLnNsaWRlci1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAycmVtIDFyZW07XG59XG4uaW52ZXN0LWFjdGlvbiAuaW52ZXN0LWNvbnRlbnQgLnNsaWRlci1jYWxjIHtcbiAgcGFkZGluZzogMCA1cHg7XG4gIG1hcmdpbjogMCAwIDAgNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWU7XG59XG4uaW52ZXN0LWFjdGlvbiAuc2xpZGVyLXBhcmVudCB7XG4gIGZsZXg6IDE7XG4gIC8qIE1vdXNlLW92ZXIgZWZmZWN0cyAqL1xuICAvKiBUaGUgc2xpZGVyIGhhbmRsZSAodXNlIC13ZWJraXQtIChDaHJvbWUsIE9wZXJhLCBTYWZhcmksIEVkZ2UpIGFuZCAtbW96LSAoRmlyZWZveCkgdG8gb3ZlcnJpZGUgZGVmYXVsdCBsb29rKSAqL1xufVxuLmludmVzdC1hY3Rpb24gLnNsaWRlci1wYXJlbnQgLnNsaWRlY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIFdpZHRoIG9mIHRoZSBvdXRzaWRlIGNvbnRhaW5lciAqL1xufVxuLmludmVzdC1hY3Rpb24gLnNsaWRlci1wYXJlbnQgLnNsaWRlciB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLyogT3ZlcnJpZGUgZGVmYXVsdCBDU1Mgc3R5bGVzICovXG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBGdWxsLXdpZHRoICovXG4gIGhlaWdodDogNXB4O1xuICAvKiBTcGVjaWZpZWQgaGVpZ2h0ICovXG4gIGJhY2tncm91bmQ6ICNkM2QzZDM7XG4gIC8qIEdyZXkgYmFja2dyb3VuZCAqL1xuICBvdXRsaW5lOiBub25lO1xuICAvKiBSZW1vdmUgb3V0bGluZSAqL1xuICBvcGFjaXR5OiAwLjc7XG4gIC8qIFNldCB0cmFuc3BhcmVuY3kgKGZvciBtb3VzZS1vdmVyIGVmZmVjdHMgb24gaG92ZXIpICovXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycztcbiAgLyogMC4yIHNlY29uZHMgdHJhbnNpdGlvbiBvbiBob3ZlciAqL1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG59XG4uaW52ZXN0LWFjdGlvbiAuc2xpZGVyLXBhcmVudCAuc2xpZGVyOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbiAgLyogRnVsbHkgc2hvd24gb24gbW91c2Utb3ZlciAqL1xufVxuLmludmVzdC1hY3Rpb24gLnNsaWRlci1wYXJlbnQgLnNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC8qIE92ZXJyaWRlIGRlZmF1bHQgbG9vayAqL1xuICBhcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMTVweDtcbiAgLyogU2V0IGEgc3BlY2lmaWMgc2xpZGVyIGhhbmRsZSB3aWR0aCAqL1xuICBoZWlnaHQ6IDE1cHg7XG4gIC8qIFNsaWRlciBoYW5kbGUgaGVpZ2h0ICovXG4gIGJhY2tncm91bmQ6ICMwMDdiZmY7XG4gIC8qIEJsdWUgYmFja2dyb3VuZCAqL1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8qIEN1cnNvciBvbiBob3ZlciAqL1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uaW52ZXN0LWFjdGlvbiAuc2xpZGVyLXBhcmVudCAuc2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHtcbiAgd2lkdGg6IDE1cHg7XG4gIC8qIFNldCBhIHNwZWNpZmljIHNsaWRlciBoYW5kbGUgd2lkdGggKi9cbiAgaGVpZ2h0OiAxNXB4O1xuICAvKiBTbGlkZXIgaGFuZGxlIGhlaWdodCAqL1xuICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xuICAvKiBCbHVlIGJhY2tncm91bmQgKi9cbiAgY3Vyc29yOiBwb2ludGVyO1xuICAvKiBDdXJzb3Igb24gaG92ZXIgKi9cbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDkycHgpIHtcbiAgLmludmVzdC1hY3Rpb24gLmludmVzdC1jb25maXJtIHtcbiAgICBmb250LXNpemU6IDAuNXJlbTtcbiAgfVxuICAuaW52ZXN0LWFjdGlvbiAuaW52ZXN0LWNvbmZpcm0gLnRleHQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gIH1cbiAgLmludmVzdC1hY3Rpb24gLmludmVzdC1jb25maXJtIC5idG4tcHJpbWFyeSB7XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/invest/invest-action/invest-action.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/invest/invest-action/invest-action.component.ts ***!
  \*****************************************************************/
/*! exports provided: InvestActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestActionComponent", function() { return InvestActionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InvestActionComponent = class InvestActionComponent {
    constructor() {
        this.buttonTitle = 'Invest';
        this.text = 'Investing';
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InvestActionComponent.prototype, "buttonTitle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InvestActionComponent.prototype, "text", void 0);
InvestActionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invest-action',
        template: __webpack_require__(/*! raw-loader!./invest-action.component.html */ "./node_modules/raw-loader/index.js!./src/app/invest/invest-action/invest-action.component.html"),
        styles: [__webpack_require__(/*! ./invest-action.component.scss */ "./src/app/invest/invest-action/invest-action.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InvestActionComponent);



/***/ }),

/***/ "./src/app/invest/invest.component.scss":
/*!**********************************************!*\
  !*** ./src/app/invest/invest.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".description {\n  border: none;\n}\n.description .title-works {\n  font-size: 1rem;\n  color: #40af92;\n  font-weight: bold;\n  font-family: SFUIDisplayBold;\n}\n.description .description-text {\n  font-size: 0.7rem;\n  color: #9b9b9b;\n}\n.line-chart-btc {\n  border: none;\n}\n.line-chart-btc .chart-container-btc {\n  border: 1px solid #e3e3e3;\n  position: relative;\n  font-family: SFUIDisplayBold;\n  padding-top: 15px;\n}\n.line-chart-btc .chart-container-btc .title-chart {\n  position: absolute;\n  top: 0px;\n  left: 30%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background-color: #fff;\n  padding: 7px 15px;\n  color: #40af92;\n  font-size: 1.2rem;\n}\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0;\n}\n.no-gutters > .col > [class*=col-] {\n  padding-right: 0;\n  padding-left: 0;\n}\n.title-1 {\n  color: #40af92;\n  font-size: 1.2rem;\n  font-family: SFUIDisplayBold;\n}\n.title-2 {\n  color: #6b5ca5;\n  font-size: 1.2rem;\n  font-family: SFUIDisplayBold;\n}\n.text-class {\n  /* font-family: HelveticaNeue; */\n  font-size: 0.8rem;\n  margin-bottom: 15px;\n}\n.invest {\n  font-size: 0.8rem;\n  padding: 3rem;\n  margin-left: 72px;\n  margin-top: 84px;\n}\n.invest .card {\n  height: 100%;\n  border: none;\n}\n.invest .card .card-body .nav-item a {\n  color: #495057;\n  font-family: SFUIDisplayBold;\n}\n.invest .card .card-body a.nav-link.active {\n  color: #437fac;\n  border: none;\n  border-bottom: 2px solid #8ed095;\n  font-weight: bold;\n  font-family: SFUIDisplayBold;\n}\n.invest .invest-top {\n  box-shadow: -3px 4px 10px 0px #e4e2e2;\n}\n.invest .invest-bottom {\n  background-color: #fafbfb;\n}\n.invest .invest-bottom .card {\n  border-radius: 0;\n  box-shadow: -3px 4px 10px 0px #e4e2e2;\n}\n.invest .invest-bottom .card.action {\n  margin-right: 10px;\n}\n.invest .invest-bottom .card.historic {\n  margin-left: 10px;\n}\n@media (max-width: 375px) {\n  .invest {\n    margin: 0;\n    padding: 1rem;\n  }\n}\n.table .header {\n  background-color: #d8d8d8;\n}\n.table thead th {\n  border-bottom: none;\n}\n.table td {\n  border-top: none;\n}\n.invest-historic {\n  display: flex;\n}\n.invest-historic .nav {\n  flex: 1;\n  border-right: 1px solid #e9e9e9;\n  border-bottom: none;\n}\n.invest-historic .dropdown .btn-link {\n  font-weight: 700;\n  color: #437fac;\n  line-height: 20px;\n}\n.invest-historic .dropdown .btn-link:focus {\n  text-decoration: none;\n}\n.invest-historic .dropdown .dropdown-menu {\n  min-width: 1rem;\n}\n.invest-historic .mobile {\n  border-right: 1px solid #e9e9e9;\n  display: none;\n}\n@media (max-width: 1050px) {\n  .description .description-text {\n    font-size: 0.6rem;\n  }\n}\n@media (max-width: 860px) {\n  .invest-historic ul {\n    display: none;\n  }\n  .invest-historic .mobile {\n    flex: 1;\n    display: block;\n  }\n}\n@media (max-width: 768px) {\n  .invest .invest-bottom .card.action {\n    margin-right: 0;\n  }\n  .invest .invest-bottom .card.historic {\n    margin-left: 0;\n  }\n}\n.ngx-charts {\n  float: left;\n  overflow: visible;\n}\n.ngx-charts .circle,\n.ngx-charts .bar,\n.ngx-charts .arc {\n  cursor: pointer;\n}\n.ngx-charts .bar.active, .ngx-charts .bar:hover,\n.ngx-charts .cell.active,\n.ngx-charts .cell:hover,\n.ngx-charts .arc.active,\n.ngx-charts .arc:hover,\n.ngx-charts .card.active,\n.ngx-charts .card:hover {\n  opacity: 0.8;\n  transition: opacity 100ms ease-in-out;\n}\n.ngx-charts .bar:focus,\n.ngx-charts .cell:focus,\n.ngx-charts .arc:focus,\n.ngx-charts .card:focus {\n  outline: none;\n}\n.ngx-charts .bar.hidden,\n.ngx-charts .cell.hidden,\n.ngx-charts .arc.hidden,\n.ngx-charts .card.hidden {\n  display: none;\n}\n.ngx-charts g:focus {\n  outline: none;\n}\n.ngx-charts .line-series.inactive,\n.ngx-charts .line-series-range.inactive,\n.ngx-charts .polar-series-path.inactive,\n.ngx-charts .polar-series-area.inactive,\n.ngx-charts .area-series.inactive {\n  transition: opacity 100ms ease-in-out;\n  opacity: 0.2;\n}\n.ngx-charts .line-highlight {\n  display: none;\n}\n.ngx-charts .line-highlight.active {\n  display: block;\n}\n.ngx-charts .area {\n  opacity: 0.6;\n}\n.ngx-charts .circle:hover {\n  cursor: pointer;\n}\n.ngx-charts .label {\n  font-size: 12px;\n  font-weight: normal;\n}\n.ngx-charts .tooltip-anchor {\n  fill: black;\n}\n.ngx-charts .gridline-path {\n  stroke: #ddd;\n  stroke-width: 1;\n  fill: none;\n}\n.ngx-charts .refline-path {\n  stroke: #a8b2c7;\n  stroke-width: 1;\n  stroke-dasharray: 5;\n  stroke-dashoffset: 5;\n}\n.ngx-charts .refline-label {\n  font-size: 9px;\n}\n.ngx-charts .reference-area {\n  fill-opacity: 0.05;\n  fill: #000;\n}\n.ngx-charts .gridline-path-dotted {\n  stroke: #ddd;\n  stroke-width: 1;\n  fill: none;\n  stroke-dasharray: 1, 20;\n  stroke-dashoffset: 3;\n}\n.ngx-charts .grid-panel rect {\n  fill: none;\n}\n.ngx-charts .grid-panel.odd rect {\n  fill: rgba(0, 0, 0, 0.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JydW5vL3Byb2pldG9zL2JpdHJlY2lmZWZyZWVsYW5jZXIvc3JjL2FwcC9pbnZlc3QvaW52ZXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbnZlc3QvaW52ZXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsWUFBQTtBQ0FGO0FEQ0M7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBUEs7QUNRUDtBREVDO0VBQ0MsaUJBQUE7RUFDQSxjQUFBO0FDQUY7QURHQTtFQUNDLFlBQUE7QUNBRDtBRENDO0VBQ0MseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQXBCSztFQXFCTCxpQkFBQTtBQ0NGO0FEQUU7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNFSDtBRElBO0VBQ0MsZUFBQTtFQUNBLGNBQUE7QUNERDtBRElBO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0FDREQ7QURLQTtFQUNDLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQWxETTtBQ2dEUDtBREtBO0VBQ0MsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBeERNO0FDc0RQO0FES0E7RUFDQyxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNGRDtBREtBO0VBQ0MsaUJBQUE7RUFDQSxhQUFBO0VBRUEsaUJBQUE7RUFDQyxnQkFBQTtBQ0hGO0FES0M7RUFDQyxZQUFBO0VBQ0UsWUFBQTtBQ0hKO0FETUk7RUFDQyxjQUFBO0VBQ0EsNEJBL0VFO0FDMkVQO0FEVUk7RUFDQyxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkExRkU7QUNrRlA7QURhRTtFQUNFLHFDQUFBO0FDWEo7QURhQztFQUNDLHlCQUFBO0FDWEY7QURZRTtFQUNDLGdCQUFBO0VBQ0EscUNBQUE7QUNWSDtBRFlHO0VBQ0Msa0JBQUE7QUNWSjtBRFlHO0VBQ0MsaUJBQUE7QUNWSjtBRGVBO0VBQ0U7SUFDRSxTQUFBO0lBQ0EsYUFBQTtFQ1pGO0FBQ0Y7QURlQztFQUNDLHlCQUFBO0FDYkY7QURlQztFQUNDLG1CQUFBO0FDYkY7QURlQztFQUNDLGdCQUFBO0FDYkY7QURnQkE7RUFDQyxhQUFBO0FDYkQ7QURjQztFQUNDLE9BQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0FDWkY7QURlRTtFQUNDLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDYkg7QURlRTtFQUNDLHFCQUFBO0FDYkg7QURlRTtFQUNDLGVBQUE7QUNiSDtBRGdCQztFQUNDLCtCQUFBO0VBQ0EsYUFBQTtBQ2RGO0FEaUJBO0VBRUU7SUFDQyxpQkFBQTtFQ2ZEO0FBQ0Y7QURrQkE7RUFHSTtJQUNFLGFBQUE7RUNsQko7RURvQkE7SUFDQyxPQUFBO0lBQ0EsY0FBQTtFQ2xCRDtBQUNGO0FEcUJBO0VBTUk7SUFDQyxlQUFBO0VDeEJIO0VEMEJFO0lBQ0MsY0FBQTtFQ3hCSDtBQUNGO0FEK0JBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDN0JGO0FEK0JFOzs7RUFHRSxlQUFBO0FDN0JKO0FEb0NJOzs7Ozs7O0VBRUUsWUFBQTtFQUNBLHFDQUFBO0FDN0JOO0FEZ0NJOzs7O0VBQ0UsYUFBQTtBQzNCTjtBRDZCSTs7OztFQUNFLGFBQUE7QUN4Qk47QUQ2Qkk7RUFDRSxhQUFBO0FDM0JOO0FEb0NJOzs7OztFQUNFLHFDQUFBO0VBQ0EsWUFBQTtBQzlCTjtBRGtDRTtFQUNFLGFBQUE7QUNoQ0o7QURrQ0k7RUFDRSxjQUFBO0FDaENOO0FEb0NFO0VBQ0UsWUFBQTtBQ2xDSjtBRHNDSTtFQUNFLGVBQUE7QUNwQ047QUR3Q0U7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUN0Q0o7QUR5Q0U7RUFDRSxXQUFBO0FDdkNKO0FEMENFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDeENKO0FEMkNFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDekNKO0FENENFO0VBQ0UsY0FBQTtBQzFDSjtBRDZDRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQzNDSjtBRDhDRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUM1Q0o7QURnREk7RUFDRSxVQUFBO0FDOUNOO0FEa0RNO0VBQ0UseUJBQUE7QUNoRFIiLCJmaWxlIjoic3JjL2FwcC9pbnZlc3QvaW52ZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHNmdWk6IFNGVUlEaXNwbGF5Qm9sZDtcbi5kZXNjcmlwdGlvbiB7XG4gIGJvcmRlcjogbm9uZTtcblx0LnRpdGxlLXdvcmtzIHtcblx0XHRmb250LXNpemU6IDEuMHJlbTtcblx0XHRjb2xvcjogIzQwYWY5Mjtcblx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRmb250LWZhbWlseTogJHNmdWk7XG5cdH1cblxuXHQuZGVzY3JpcHRpb24tdGV4dCB7XG5cdFx0Zm9udC1zaXplOiAwLjdyZW07XG5cdFx0Y29sb3I6ICM5YjliOWI7XG5cdH1cbn1cbi5saW5lLWNoYXJ0LWJ0YyB7XG5cdGJvcmRlcjogbm9uZTtcblx0LmNoYXJ0LWNvbnRhaW5lci1idGMge1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNlM2UzZTM7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdGZvbnQtZmFtaWx5OiAkc2Z1aTtcblx0XHRwYWRkaW5nLXRvcDogMTVweDtcblx0XHQudGl0bGUtY2hhcnQge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0dG9wOiAwcHg7XG5cdFx0XHRsZWZ0OiAzMCU7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdFx0XHRwYWRkaW5nOiA3cHggMTVweDtcblx0XHRcdGNvbG9yOiAjNDBhZjkyO1xuXHRcdFx0Zm9udC1zaXplOiAxLjJyZW07XG4gICAgfVxuXG5cdH1cbn1cblxuLm5vLWd1dHRlcnMge1xuXHRtYXJnaW4tcmlnaHQ6IDA7XG5cdG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4ubm8tZ3V0dGVycz4uY29sPltjbGFzcyo9XCJjb2wtXCJdIHtcblx0cGFkZGluZy1yaWdodDogMDtcblx0cGFkZGluZy1sZWZ0OiAwO1xuXG59XG5cbi50aXRsZS0xIHtcblx0Y29sb3I6ICM0MGFmOTI7XG5cdGZvbnQtc2l6ZTogMS4ycmVtO1xuXHRmb250LWZhbWlseTogJHNmdWk7XG59XG5cbi50aXRsZS0yIHtcblx0Y29sb3I6ICM2YjVjYTU7XG5cdGZvbnQtc2l6ZTogMS4ycmVtO1xuXHRmb250LWZhbWlseTogJHNmdWk7XG59XG5cbi50ZXh0LWNsYXNzIHtcblx0LyogZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWU7ICovXG5cdGZvbnQtc2l6ZTogMC44cmVtO1xuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uaW52ZXN0IHtcblx0Zm9udC1zaXplOiAwLjhyZW07XG5cdHBhZGRpbmc6IDNyZW07XG5cdC8vIFNpbXVsYW5kbyBtZW51IGUgbmF2YmFyXG5cdG1hcmdpbi1sZWZ0OiA3MnB4O1xuICBtYXJnaW4tdG9wOiA4NHB4O1xuXG5cdC5jYXJkIHtcblx0XHRoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuXHRcdC5jYXJkLWJvZHkge1xuXHRcdFx0Lm5hdi1pdGVtIHtcblx0XHRcdFx0YSB7XG5cdFx0XHRcdFx0Y29sb3I6ICM0OTUwNTc7XG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICRzZnVpO1xuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0YSB7XG5cdFx0XHRcdCYubmF2LWxpbmsuYWN0aXZlIHtcblx0XHRcdFx0XHRjb2xvcjogIzQzN2ZhYztcblx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM4ZWQwOTU7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICRzZnVpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuICB9XG4gIC5pbnZlc3QtdG9wIHtcbiAgICBib3gtc2hhZG93OiAtM3B4IDRweCAxMHB4IDBweCAjZTRlMmUyO1xuXHR9XG5cdC5pbnZlc3QtYm90dG9tIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYmZiO1xuXHRcdC5jYXJkIHtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDA7XG5cdFx0XHRib3gtc2hhZG93OiAtM3B4IDRweCAxMHB4IDBweCAjZTRlMmUyO1xuXG5cdFx0XHQmLmFjdGlvbiB7XG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMTBweDtcblx0XHRcdH1cblx0XHRcdCYuaGlzdG9yaWMge1xuXHRcdFx0XHRtYXJnaW4tbGVmdDogMTBweDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbkBtZWRpYShtYXgtd2lkdGg6IDM3NXB4KXtcbiAgLmludmVzdCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cbn1cbi50YWJsZSB7XG5cdC5oZWFkZXIge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNkOGQ4ZDg7XG5cdH1cblx0dGhlYWQgdGgge1xuXHRcdGJvcmRlci1ib3R0b206IG5vbmU7XG5cdH1cblx0dGQge1xuXHRcdGJvcmRlci10b3A6IG5vbmU7XG5cdH1cbn1cbi5pbnZlc3QtaGlzdG9yaWMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHQubmF2IHtcblx0XHRmbGV4OiAxO1xuXHRcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlOWU5ZTk7XG5cdFx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcblx0fVxuXHQuZHJvcGRvd24ge1xuXHRcdC5idG4tbGluayB7XG5cdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0Y29sb3I6ICM0MzdmYWM7XG5cdFx0XHRsaW5lLWhlaWdodDogMjBweDtcblx0XHR9XG5cdFx0LmJ0bi1saW5rOmZvY3VzIHtcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHR9XG5cdFx0LmRyb3Bkb3duLW1lbnUge1xuXHRcdFx0bWluLXdpZHRoOiAxcmVtO1xuXHRcdH1cblx0fVxuXHQubW9iaWxlIHtcblx0XHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTllOWU5O1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDUwcHgpe1xuXHQuZGVzY3JpcHRpb24ge1xuXHRcdC5kZXNjcmlwdGlvbi10ZXh0IHtcblx0XHRcdGZvbnQtc2l6ZTogMC42cmVtO1xuXHRcdH1cblx0fVxufVxuQG1lZGlhKG1heC13aWR0aDogODYwcHgpe1xuICAuaW52ZXN0LWhpc3RvcmljIHtcblx0XHRcbiAgICB1bCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuXHRcdH1cblx0XHQubW9iaWxlIHtcblx0XHRcdGZsZXg6IDE7XG5cdFx0XHRkaXNwbGF5OiBibG9ja1xuXHRcdH1cbiAgfVxufVxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpe1xuXHQuaW52ZXN0IHtcblx0XHQuaW52ZXN0LWJvdHRvbSB7XG5cdFxuXHRcdFx0LmNhcmQge1xuXHRcblx0XHRcdFx0Ji5hY3Rpb24ge1xuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMDtcblx0XHRcdFx0fVxuXHRcdFx0XHQmLmhpc3RvcmljIHtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG59XG5cbi5uZ3gtY2hhcnRzIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuXG4gIC5jaXJjbGUsXG4gIC5iYXIsXG4gIC5hcmMge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5iYXIsXG4gIC5jZWxsLFxuICAuYXJjLFxuICAuY2FyZCB7XG4gICAgJi5hY3RpdmUsXG4gICAgJjpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEwMG1zIGVhc2UtaW4tb3V0O1xuICAgIH1cblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gICAgJi5oaWRkZW4ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICBnIHtcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLmxpbmUtc2VyaWVzLFxuICAubGluZS1zZXJpZXMtcmFuZ2UsXG4gIC5wb2xhci1zZXJpZXMtcGF0aCxcbiAgLnBvbGFyLXNlcmllcy1hcmVhLFxuICAuYXJlYS1zZXJpZXMge1xuICAgICYuaW5hY3RpdmUge1xuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxMDBtcyBlYXNlLWluLW91dDtcbiAgICAgIG9wYWNpdHk6IC4yXG4gICAgfVxuICB9XG5cbiAgLmxpbmUtaGlnaGxpZ2h0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgJi5hY3RpdmUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG5cbiAgLmFyZWEge1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfVxuXG4gIC5jaXJjbGUge1xuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuXG4gIC5sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cblxuICAudG9vbHRpcC1hbmNob3Ige1xuICAgIGZpbGw6IHJnYigwLDAsMCk7XG4gIH1cblxuICAuZ3JpZGxpbmUtcGF0aCB7XG4gICAgc3Ryb2tlOiAjZGRkO1xuICAgIHN0cm9rZS13aWR0aDogMTtcbiAgICBmaWxsOiBub25lO1xuICB9XG5cbiAgLnJlZmxpbmUtcGF0aCB7XG4gICAgc3Ryb2tlOiAjYThiMmM3O1xuICAgIHN0cm9rZS13aWR0aDogMTtcbiAgICBzdHJva2UtZGFzaGFycmF5OiA1O1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiA1O1xuICB9XG5cbiAgLnJlZmxpbmUtbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICB9XG5cbiAgLnJlZmVyZW5jZS1hcmVhIHtcbiAgICBmaWxsLW9wYWNpdHk6IDAuMDU7XG4gICAgZmlsbDogIzAwMDtcbiAgfVxuXG4gIC5ncmlkbGluZS1wYXRoLWRvdHRlZCB7XG4gICAgc3Ryb2tlOiAjZGRkO1xuICAgIHN0cm9rZS13aWR0aDogMTtcbiAgICBmaWxsOiBub25lO1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEsIDIwO1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAzO1xuICB9XG5cbiAgLmdyaWQtcGFuZWwge1xuICAgIHJlY3Qge1xuICAgICAgZmlsbDogbm9uZTtcbiAgICB9XG5cbiAgICAmLm9kZCB7XG4gICAgICByZWN0IHtcbiAgICAgICAgZmlsbDogcmdiYSgwLDAsMCwwLjA1KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufSIsIi5kZXNjcmlwdGlvbiB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5kZXNjcmlwdGlvbiAudGl0bGUtd29ya3Mge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjNDBhZjkyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFNGVUlEaXNwbGF5Qm9sZDtcbn1cbi5kZXNjcmlwdGlvbiAuZGVzY3JpcHRpb24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBjb2xvcjogIzliOWI5Yjtcbn1cblxuLmxpbmUtY2hhcnQtYnRjIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLmxpbmUtY2hhcnQtYnRjIC5jaGFydC1jb250YWluZXItYnRjIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UzZTNlMztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogU0ZVSURpc3BsYXlCb2xkO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbi5saW5lLWNoYXJ0LWJ0YyAuY2hhcnQtY29udGFpbmVyLWJ0YyAudGl0bGUtY2hhcnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAzMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA3cHggMTVweDtcbiAgY29sb3I6ICM0MGFmOTI7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4ubm8tZ3V0dGVycyB7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5uby1ndXR0ZXJzID4gLmNvbCA+IFtjbGFzcyo9Y29sLV0ge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi50aXRsZS0xIHtcbiAgY29sb3I6ICM0MGFmOTI7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LWZhbWlseTogU0ZVSURpc3BsYXlCb2xkO1xufVxuXG4udGl0bGUtMiB7XG4gIGNvbG9yOiAjNmI1Y2E1O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC1mYW1pbHk6IFNGVUlEaXNwbGF5Qm9sZDtcbn1cblxuLnRleHQtY2xhc3Mge1xuICAvKiBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZTsgKi9cbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5pbnZlc3Qge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgcGFkZGluZzogM3JlbTtcbiAgbWFyZ2luLWxlZnQ6IDcycHg7XG4gIG1hcmdpbi10b3A6IDg0cHg7XG59XG4uaW52ZXN0IC5jYXJkIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG59XG4uaW52ZXN0IC5jYXJkIC5jYXJkLWJvZHkgLm5hdi1pdGVtIGEge1xuICBjb2xvcjogIzQ5NTA1NztcbiAgZm9udC1mYW1pbHk6IFNGVUlEaXNwbGF5Qm9sZDtcbn1cbi5pbnZlc3QgLmNhcmQgLmNhcmQtYm9keSBhLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjNDM3ZmFjO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjOGVkMDk1O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFNGVUlEaXNwbGF5Qm9sZDtcbn1cbi5pbnZlc3QgLmludmVzdC10b3Age1xuICBib3gtc2hhZG93OiAtM3B4IDRweCAxMHB4IDBweCAjZTRlMmUyO1xufVxuLmludmVzdCAuaW52ZXN0LWJvdHRvbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZiZmI7XG59XG4uaW52ZXN0IC5pbnZlc3QtYm90dG9tIC5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm94LXNoYWRvdzogLTNweCA0cHggMTBweCAwcHggI2U0ZTJlMjtcbn1cbi5pbnZlc3QgLmludmVzdC1ib3R0b20gLmNhcmQuYWN0aW9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmludmVzdCAuaW52ZXN0LWJvdHRvbSAuY2FyZC5oaXN0b3JpYyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgLmludmVzdCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cbn1cbi50YWJsZSAuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDhkODtcbn1cbi50YWJsZSB0aGVhZCB0aCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4udGFibGUgdGQge1xuICBib3JkZXItdG9wOiBub25lO1xufVxuXG4uaW52ZXN0LWhpc3RvcmljIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5pbnZlc3QtaGlzdG9yaWMgLm5hdiB7XG4gIGZsZXg6IDE7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlOWU5ZTk7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4uaW52ZXN0LWhpc3RvcmljIC5kcm9wZG93biAuYnRuLWxpbmsge1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzQzN2ZhYztcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4uaW52ZXN0LWhpc3RvcmljIC5kcm9wZG93biAuYnRuLWxpbms6Zm9jdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uaW52ZXN0LWhpc3RvcmljIC5kcm9wZG93biAuZHJvcGRvd24tbWVudSB7XG4gIG1pbi13aWR0aDogMXJlbTtcbn1cbi5pbnZlc3QtaGlzdG9yaWMgLm1vYmlsZSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlOWU5ZTk7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDUwcHgpIHtcbiAgLmRlc2NyaXB0aW9uIC5kZXNjcmlwdGlvbi10ZXh0IHtcbiAgICBmb250LXNpemU6IDAuNnJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDg2MHB4KSB7XG4gIC5pbnZlc3QtaGlzdG9yaWMgdWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmludmVzdC1oaXN0b3JpYyAubW9iaWxlIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmludmVzdCAuaW52ZXN0LWJvdHRvbSAuY2FyZC5hY3Rpb24ge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuICAuaW52ZXN0IC5pbnZlc3QtYm90dG9tIC5jYXJkLmhpc3RvcmljIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuLm5neC1jaGFydHMge1xuICBmbG9hdDogbGVmdDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4ubmd4LWNoYXJ0cyAuY2lyY2xlLFxuLm5neC1jaGFydHMgLmJhcixcbi5uZ3gtY2hhcnRzIC5hcmMge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubmd4LWNoYXJ0cyAuYmFyLmFjdGl2ZSwgLm5neC1jaGFydHMgLmJhcjpob3Zlcixcbi5uZ3gtY2hhcnRzIC5jZWxsLmFjdGl2ZSxcbi5uZ3gtY2hhcnRzIC5jZWxsOmhvdmVyLFxuLm5neC1jaGFydHMgLmFyYy5hY3RpdmUsXG4ubmd4LWNoYXJ0cyAuYXJjOmhvdmVyLFxuLm5neC1jaGFydHMgLmNhcmQuYWN0aXZlLFxuLm5neC1jaGFydHMgLmNhcmQ6aG92ZXIge1xuICBvcGFjaXR5OiAwLjg7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTAwbXMgZWFzZS1pbi1vdXQ7XG59XG4ubmd4LWNoYXJ0cyAuYmFyOmZvY3VzLFxuLm5neC1jaGFydHMgLmNlbGw6Zm9jdXMsXG4ubmd4LWNoYXJ0cyAuYXJjOmZvY3VzLFxuLm5neC1jaGFydHMgLmNhcmQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLm5neC1jaGFydHMgLmJhci5oaWRkZW4sXG4ubmd4LWNoYXJ0cyAuY2VsbC5oaWRkZW4sXG4ubmd4LWNoYXJ0cyAuYXJjLmhpZGRlbixcbi5uZ3gtY2hhcnRzIC5jYXJkLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubmd4LWNoYXJ0cyBnOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5uZ3gtY2hhcnRzIC5saW5lLXNlcmllcy5pbmFjdGl2ZSxcbi5uZ3gtY2hhcnRzIC5saW5lLXNlcmllcy1yYW5nZS5pbmFjdGl2ZSxcbi5uZ3gtY2hhcnRzIC5wb2xhci1zZXJpZXMtcGF0aC5pbmFjdGl2ZSxcbi5uZ3gtY2hhcnRzIC5wb2xhci1zZXJpZXMtYXJlYS5pbmFjdGl2ZSxcbi5uZ3gtY2hhcnRzIC5hcmVhLXNlcmllcy5pbmFjdGl2ZSB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTAwbXMgZWFzZS1pbi1vdXQ7XG4gIG9wYWNpdHk6IDAuMjtcbn1cbi5uZ3gtY2hhcnRzIC5saW5lLWhpZ2hsaWdodCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubmd4LWNoYXJ0cyAubGluZS1oaWdobGlnaHQuYWN0aXZlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubmd4LWNoYXJ0cyAuYXJlYSB7XG4gIG9wYWNpdHk6IDAuNjtcbn1cbi5uZ3gtY2hhcnRzIC5jaXJjbGU6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubmd4LWNoYXJ0cyAubGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4ubmd4LWNoYXJ0cyAudG9vbHRpcC1hbmNob3Ige1xuICBmaWxsOiBibGFjaztcbn1cbi5uZ3gtY2hhcnRzIC5ncmlkbGluZS1wYXRoIHtcbiAgc3Ryb2tlOiAjZGRkO1xuICBzdHJva2Utd2lkdGg6IDE7XG4gIGZpbGw6IG5vbmU7XG59XG4ubmd4LWNoYXJ0cyAucmVmbGluZS1wYXRoIHtcbiAgc3Ryb2tlOiAjYThiMmM3O1xuICBzdHJva2Utd2lkdGg6IDE7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDU7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiA1O1xufVxuLm5neC1jaGFydHMgLnJlZmxpbmUtbGFiZWwge1xuICBmb250LXNpemU6IDlweDtcbn1cbi5uZ3gtY2hhcnRzIC5yZWZlcmVuY2UtYXJlYSB7XG4gIGZpbGwtb3BhY2l0eTogMC4wNTtcbiAgZmlsbDogIzAwMDtcbn1cbi5uZ3gtY2hhcnRzIC5ncmlkbGluZS1wYXRoLWRvdHRlZCB7XG4gIHN0cm9rZTogI2RkZDtcbiAgc3Ryb2tlLXdpZHRoOiAxO1xuICBmaWxsOiBub25lO1xuICBzdHJva2UtZGFzaGFycmF5OiAxLCAyMDtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDM7XG59XG4ubmd4LWNoYXJ0cyAuZ3JpZC1wYW5lbCByZWN0IHtcbiAgZmlsbDogbm9uZTtcbn1cbi5uZ3gtY2hhcnRzIC5ncmlkLXBhbmVsLm9kZCByZWN0IHtcbiAgZmlsbDogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/invest/invest.component.ts":
/*!********************************************!*\
  !*** ./src/app/invest/invest.component.ts ***!
  \********************************************/
/*! exports provided: InvestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestComponent", function() { return InvestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");



let InvestComponent = class InvestComponent {
    constructor() {
        this.years = ['2018', '2019', '2020'];
        this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.selectedMonth = 'Jan';
        this.selectedYear = '2019';
        this.tabChart = 'Year';
        this.version = '1';
        this.theme = 'dark';
        this.chartType = 'line-chart';
        this.realTimeData = false;
        this.linearScale = false;
        this.range = false;
        this.width = 700;
        this.height = 300;
        this.fitContainer = false;
        // options
        this.showXAxis = true;
        this.showYAxis = false;
        this.gradient = false;
        this.showLegend = false;
        this.legendTitle = 'Legend';
        this.legendPosition = 'right';
        this.showXAxisLabel = false;
        this.tooltipDisabled = false;
        this.showText = true;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = false;
        this.yAxisLabel = 'GDP Per Capita';
        this.showGridLines = true;
        this.innerPadding = '10%';
        this.barPadding = 8;
        this.groupPadding = 16;
        this.roundDomains = false;
        this.showSeriesOnHover = true;
        this.roundEdges = true;
        this.animations = true;
        this.showDataLabel = false;
        this.noBarWhenZero = true;
        this.trimXAxisTicks = true;
        this.trimYAxisTicks = true;
        this.rotateXAxisTicks = true;
        this.maxXAxisTickLength = 16;
        this.maxYAxisTickLength = 16;
        this.curve = d3_shape__WEBPACK_IMPORTED_MODULE_2__["curveLinear"];
        this.schemeType = 'ordinal';
        this.rangeFillOpacity = 0.15;
        // line, area
        this.autoScale = true;
        this.timeline = false;
        this.dataResult = [
            {
                "name": "",
                "series": [
                    {
                        "value": 26249.38,
                        "name": "Jan"
                    },
                    {
                        "value": 20249.38,
                        "name": "Feb"
                    },
                    {
                        "value": 6249.38,
                        "name": "Mar"
                    },
                    {
                        "value": 13249.38,
                        "name": "Apr"
                    },
                    {
                        "value": 10249.38,
                        "name": "May"
                    },
                    {
                        "value": 13249.38,
                        "name": "Jun"
                    },
                    {
                        "value": 20000.38,
                        "name": "Jul"
                    },
                    {
                        "value": 11456.38,
                        "name": "Aug"
                    },
                    {
                        "value": 16834.38,
                        "name": "Sep"
                    },
                    {
                        "value": 11456.38,
                        "name": "Oct"
                    },
                    {
                        "value": 16834.38,
                        "name": "Nov"
                    },
                    {
                        "value": 16834.38,
                        "name": "Dec"
                    }
                ]
            }
        ];
        // margin
        this.margin = false;
        this.marginTop = 40;
        this.marginRight = 40;
        this.marginBottom = 40;
        this.marginLeft = 40;
        this.showRightYAxisLabel = true;
        // yAxisLabelRight: string = 'Utilization';
        // demos
        this.totalSales = 0;
        this.salePrice = 100;
        this.personnelCost = 100;
        this.mathText = '3 - 1.5*sin(x) + cos(2*x) - 1.5*abs(cos(x))';
        this.treemapPath = [];
        this.sumBy = 'Size';
        // Reference lines
        this.showRefLines = true;
        this.showRefLabels = true;
        this.setColorScheme('cool');
    }
    ngOnInit() {
        // this.applyDimensions();
    }
    setColorScheme(name) {
        this.selectedColorScheme = name;
        this.colorScheme = {
            name: 'cool',
            selectable: true,
            group: 'Ordinal',
            domain: [
                '#a27ec0'
            ]
        };
    }
    applyDimensions() {
        this.view = [this.width, this.height];
    }
    select(data) {
        console.log('Item clicked', data);
    }
};
InvestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invest',
        template: __webpack_require__(/*! raw-loader!./invest.component.html */ "./node_modules/raw-loader/index.js!./src/app/invest/invest.component.html"),
        styles: [__webpack_require__(/*! ./invest.component.scss */ "./src/app/invest/invest.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InvestComponent);



/***/ }),

/***/ "./src/app/invest/invest.module.ts":
/*!*****************************************!*\
  !*** ./src/app/invest/invest.module.ts ***!
  \*****************************************/
/*! exports provided: InvestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestModule", function() { return InvestModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _invest_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invest.component */ "./src/app/invest/invest.component.ts");
/* harmony import */ var _ring_chart_ring_chart_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ring-chart/ring-chart.module */ "./src/app/ring-chart/ring-chart.module.ts");
/* harmony import */ var _invest_action_invest_action_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invest-action/invest-action.component */ "./src/app/invest/invest-action/invest-action.component.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");








let InvestModule = class InvestModule {
};
InvestModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _invest_component__WEBPACK_IMPORTED_MODULE_3__["InvestComponent"],
            _invest_action_invest_action_component__WEBPACK_IMPORTED_MODULE_5__["InvestActionComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ring_chart_ring_chart_module__WEBPACK_IMPORTED_MODULE_4__["RingChartModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__["NgxChartsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
        ],
        exports: [
            _invest_component__WEBPACK_IMPORTED_MODULE_3__["InvestComponent"]
        ]
    })
], InvestModule);



/***/ }),

/***/ "./src/app/ring-chart/ring-chart.component.scss":
/*!******************************************************!*\
  !*** ./src/app/ring-chart/ring-chart.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ring-chart {\n  border: none;\n}\n.ring-chart .card-body {\n  display: flex;\n  border-bottom: solid 1px #dadada7d;\n}\n.ring-chart .card-body .svg {\n  flex: 2;\n}\n.ring-chart .subtitle {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex: 1;\n}\n.ring-chart .subtitle-item {\n  padding: 0.5rem;\n}\n.ring-chart .subtitle-item .label-btc, .ring-chart .subtitle-item .label-real {\n  width: 20px;\n  height: 4px;\n  border-radius: 2px;\n}\n.ring-chart .subtitle-item .label-btc {\n  background-color: #6b5ca5;\n}\n.ring-chart .subtitle-item .label-real {\n  background-color: #62c370;\n}\n.circle1 {\n  stroke: #6b5ca5;\n  fill: none;\n  stroke-width: 4.3;\n  margin: 5px;\n  /* stroke-linecap: round; */\n  -webkit-animation: progress 1s ease-out forwards;\n          animation: progress 1s ease-out forwards;\n}\n.circle2 {\n  stroke: #62c370;\n  fill: none;\n  stroke-width: 4.3;\n  margin: 5px;\n  /* stroke-linecap: round; */\n  -webkit-animation: progress 1s ease-out forwards;\n          animation: progress 1s ease-out forwards;\n}\n@-webkit-keyframes progress {\n  0% {\n    stroke-dasharray: 0 100;\n  }\n}\n@keyframes progress {\n  0% {\n    stroke-dasharray: 0 100;\n  }\n}\n.circular-chart.orange .circle {\n  stroke: #ff9f00;\n}\n.circular-chart.green .circle {\n  stroke: #4CC790;\n}\n.circular-chart.blue .circle {\n  stroke: #3c9ee5;\n}\n.percentage {\n  fill: #666;\n  font-family: sans-serif;\n  font-size: 0.5em;\n  text-anchor: middle;\n}\n.box-est {\n  padding: 5px 20px 5px 20px;\n}\n.box-est .box-in {\n  padding: 5px 0 5px 0;\n  border-bottom: dashed 1px #cacaca;\n}\n.box-est .box-in:last-child {\n  border: none;\n}\n.box-summary {\n  border-bottom: solid 1px #dadada7d;\n  padding: 10px 20px 10px 20px;\n}\n.box-summary .balance {\n  display: flex;\n  justify-content: space-between;\n}\n.box-summary .balance .p-label {\n  color: #40af92;\n}\n.card-style {\n  border-bottom: solid 1px #cacaca;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JydW5vL3Byb2pldG9zL2JpdHJlY2lmZWZyZWVsYW5jZXIvc3JjL2FwcC9yaW5nLWNoYXJ0L3JpbmctY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JpbmctY2hhcnQvcmluZy1jaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjtBREFFO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0FDRUo7QURESTtFQUNFLE9BQUE7QUNHTjtBREFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxPQUFBO0FDRUo7QURBSTtFQUNFLGVBQUE7QUNFTjtBREFRO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0VWO0FEQVE7RUFDRSx5QkFBQTtBQ0VWO0FEQVE7RUFDRSx5QkFBQTtBQ0VWO0FESUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsZ0RBQUE7VUFBQSx3Q0FBQTtBQ0RGO0FER0M7RUFDQyxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsZ0RBQUE7VUFBQSx3Q0FBQTtBQ0FGO0FER0M7RUFDQztJQUNFLHVCQUFBO0VDQUY7QUFDRjtBREhDO0VBQ0M7SUFDRSx1QkFBQTtFQ0FGO0FBQ0Y7QURHQztFQUNDLGVBQUE7QUNERjtBRElDO0VBQ0MsZUFBQTtBQ0RGO0FESUM7RUFDQyxlQUFBO0FDREY7QURJQztFQUNDLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNERjtBRElDO0VBQ0MsMEJBQUE7QUNERjtBREVFO0VBQ0Usb0JBQUE7RUFDQSxpQ0FBQTtBQ0FKO0FEQ0k7RUFDRSxZQUFBO0FDQ047QURHQztFQUNDLGtDQUFBO0VBQ0EsNEJBQUE7QUNBRjtBRENFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDQ0o7QURBSTtFQUNFLGNBQUE7QUNFTjtBREVDO0VBQ0MsZ0NBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3JpbmctY2hhcnQvcmluZy1jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yaW5nLWNoYXJ0IHtcbiAgYm9yZGVyOiBub25lO1xuICAuY2FyZC1ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZGFkYWRhN2Q7XG4gICAgLnN2ZyB7XG4gICAgICBmbGV4OiAyO1xuICAgIH1cbiAgfVxuICAuc3VidGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4OiAxO1xuXG4gICAgJi1pdGVtIHtcbiAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgLmxhYmVsIHtcbiAgICAgICAgJi1idGMsICYtcmVhbCB7XG4gICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICB9XG4gICAgICAgICYtYnRjIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI1Y2E1O1xuICAgICAgICB9XG4gICAgICAgICYtcmVhbCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYyYzM3MDsgICAgICAgIFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4uY2lyY2xlMSB7XG4gIHN0cm9rZTogIzZiNWNhNTtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlLXdpZHRoOiA0LjM7XG4gIG1hcmdpbjogNXB4O1xuICAvKiBzdHJva2UtbGluZWNhcDogcm91bmQ7ICovXG4gIGFuaW1hdGlvbjogcHJvZ3Jlc3MgMXMgZWFzZS1vdXQgZm9yd2FyZHM7XG4gfVxuIC5jaXJjbGUyIHtcbiAgc3Ryb2tlOiAjNjJjMzcwO1xuICBmaWxsOiBub25lO1xuICBzdHJva2Utd2lkdGg6IDQuMztcbiAgbWFyZ2luOiA1cHg7XG4gIC8qIHN0cm9rZS1saW5lY2FwOiByb3VuZDsgKi9cbiAgYW5pbWF0aW9uOiBwcm9ncmVzcyAxcyBlYXNlLW91dCBmb3J3YXJkcztcbiB9XG4gXG4gQGtleWZyYW1lcyBwcm9ncmVzcyB7XG4gIDAlIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAwIDEwMDtcbiAgfVxuIH1cbiBcbiAuY2lyY3VsYXItY2hhcnQub3JhbmdlIC5jaXJjbGUge1xuICBzdHJva2U6ICNmZjlmMDA7XG4gfVxuIFxuIC5jaXJjdWxhci1jaGFydC5ncmVlbiAuY2lyY2xlIHtcbiAgc3Ryb2tlOiAjNENDNzkwO1xuIH1cbiBcbiAuY2lyY3VsYXItY2hhcnQuYmx1ZSAuY2lyY2xlIHtcbiAgc3Ryb2tlOiAjM2M5ZWU1O1xuIH1cbiBcbiAucGVyY2VudGFnZSB7XG4gIGZpbGw6ICM2NjY7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuNWVtO1xuICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xuIH1cblxuIC5ib3gtZXN0IHtcbiAgcGFkZGluZzogNXB4IDIwcHggNXB4IDIwcHg7XG4gIC5ib3gtaW4ge1xuICAgIHBhZGRpbmc6IDVweCAwIDVweCAwO1xuICAgIGJvcmRlci1ib3R0b206IGRhc2hlZCAxcHggI2NhY2FjYTtcbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgfVxuIH1cbiAuYm94LXN1bW1hcnkge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2RhZGFkYTdkO1xuICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xuICAuYmFsYW5jZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLnAtbGFiZWwge1xuICAgICAgY29sb3I6ICM0MGFmOTI7XG4gICAgfVxuICB9XG59XG4gLmNhcmQtc3R5bGUge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NhY2FjYTtcbiB9IiwiLnJpbmctY2hhcnQge1xuICBib3JkZXI6IG5vbmU7XG59XG4ucmluZy1jaGFydCAuY2FyZC1ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNkYWRhZGE3ZDtcbn1cbi5yaW5nLWNoYXJ0IC5jYXJkLWJvZHkgLnN2ZyB7XG4gIGZsZXg6IDI7XG59XG4ucmluZy1jaGFydCAuc3VidGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleDogMTtcbn1cbi5yaW5nLWNoYXJ0IC5zdWJ0aXRsZS1pdGVtIHtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuLnJpbmctY2hhcnQgLnN1YnRpdGxlLWl0ZW0gLmxhYmVsLWJ0YywgLnJpbmctY2hhcnQgLnN1YnRpdGxlLWl0ZW0gLmxhYmVsLXJlYWwge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5yaW5nLWNoYXJ0IC5zdWJ0aXRsZS1pdGVtIC5sYWJlbC1idGMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI1Y2E1O1xufVxuLnJpbmctY2hhcnQgLnN1YnRpdGxlLWl0ZW0gLmxhYmVsLXJlYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjJjMzcwO1xufVxuXG4uY2lyY2xlMSB7XG4gIHN0cm9rZTogIzZiNWNhNTtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlLXdpZHRoOiA0LjM7XG4gIG1hcmdpbjogNXB4O1xuICAvKiBzdHJva2UtbGluZWNhcDogcm91bmQ7ICovXG4gIGFuaW1hdGlvbjogcHJvZ3Jlc3MgMXMgZWFzZS1vdXQgZm9yd2FyZHM7XG59XG5cbi5jaXJjbGUyIHtcbiAgc3Ryb2tlOiAjNjJjMzcwO1xuICBmaWxsOiBub25lO1xuICBzdHJva2Utd2lkdGg6IDQuMztcbiAgbWFyZ2luOiA1cHg7XG4gIC8qIHN0cm9rZS1saW5lY2FwOiByb3VuZDsgKi9cbiAgYW5pbWF0aW9uOiBwcm9ncmVzcyAxcyBlYXNlLW91dCBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBwcm9ncmVzcyB7XG4gIDAlIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAwIDEwMDtcbiAgfVxufVxuLmNpcmN1bGFyLWNoYXJ0Lm9yYW5nZSAuY2lyY2xlIHtcbiAgc3Ryb2tlOiAjZmY5ZjAwO1xufVxuXG4uY2lyY3VsYXItY2hhcnQuZ3JlZW4gLmNpcmNsZSB7XG4gIHN0cm9rZTogIzRDQzc5MDtcbn1cblxuLmNpcmN1bGFyLWNoYXJ0LmJsdWUgLmNpcmNsZSB7XG4gIHN0cm9rZTogIzNjOWVlNTtcbn1cblxuLnBlcmNlbnRhZ2Uge1xuICBmaWxsOiAjNjY2O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgdGV4dC1hbmNob3I6IG1pZGRsZTtcbn1cblxuLmJveC1lc3Qge1xuICBwYWRkaW5nOiA1cHggMjBweCA1cHggMjBweDtcbn1cbi5ib3gtZXN0IC5ib3gtaW4ge1xuICBwYWRkaW5nOiA1cHggMCA1cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogZGFzaGVkIDFweCAjY2FjYWNhO1xufVxuLmJveC1lc3QgLmJveC1pbjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uYm94LXN1bW1hcnkge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2RhZGFkYTdkO1xuICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xufVxuLmJveC1zdW1tYXJ5IC5iYWxhbmNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmJveC1zdW1tYXJ5IC5iYWxhbmNlIC5wLWxhYmVsIHtcbiAgY29sb3I6ICM0MGFmOTI7XG59XG5cbi5jYXJkLXN0eWxlIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjYWNhY2E7XG59Il19 */"

/***/ }),

/***/ "./src/app/ring-chart/ring-chart.component.ts":
/*!****************************************************!*\
  !*** ./src/app/ring-chart/ring-chart.component.ts ***!
  \****************************************************/
/*! exports provided: RingChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RingChartComponent", function() { return RingChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RingChartComponent = class RingChartComponent {
    constructor() { }
    ngOnInit() {
    }
};
RingChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ring-chart',
        template: __webpack_require__(/*! raw-loader!./ring-chart.component.html */ "./node_modules/raw-loader/index.js!./src/app/ring-chart/ring-chart.component.html"),
        styles: [__webpack_require__(/*! ./ring-chart.component.scss */ "./src/app/ring-chart/ring-chart.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RingChartComponent);



/***/ }),

/***/ "./src/app/ring-chart/ring-chart.module.ts":
/*!*************************************************!*\
  !*** ./src/app/ring-chart/ring-chart.module.ts ***!
  \*************************************************/
/*! exports provided: RingChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RingChartModule", function() { return RingChartModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ring_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ring-chart.component */ "./src/app/ring-chart/ring-chart.component.ts");




let RingChartModule = class RingChartModule {
};
RingChartModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ring_chart_component__WEBPACK_IMPORTED_MODULE_3__["RingChartComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _ring_chart_component__WEBPACK_IMPORTED_MODULE_3__["RingChartComponent"]
        ]
    })
], RingChartModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bruno/projetos/bitrecifefreelancer/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map