"use strict";
(self["webpackChunkmaterial"] = self["webpackChunkmaterial"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/spinner.component */ 3812);



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_0__.SpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routing */ 6738);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ 7114);
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/full/full.component */ 6729);
/* harmony import */ var _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/full/header/header.component */ 1183);
/* harmony import */ var _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/full/sidebar/sidebar.component */ 2991);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demo-material-module */ 5408);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/spinner.component */ 3812);
/* harmony import */ var _final_smartscale_smartscale_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./final/smartscale/smartscale.component */ 2718);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);


















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_10__.LocationStrategy,
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_10__.PathLocationStrategy
        }
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
        _demo_material_module__WEBPACK_IMPORTED_MODULE_5__.DemoMaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__.FlexLayoutModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_0__.AppRoutes)] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_2__.FullComponent,
        _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_3__.AppHeaderComponent,
        _shared_spinner_component__WEBPACK_IMPORTED_MODULE_7__.SpinnerComponent,
        _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__.AppSidebarComponent,
        _final_smartscale_smartscale_component__WEBPACK_IMPORTED_MODULE_8__.SmartscaleComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
        _demo_material_module__WEBPACK_IMPORTED_MODULE_5__.DemoMaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__.FlexLayoutModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule] }); })();


/***/ }),

/***/ 6738:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutes": () => (/* binding */ AppRoutes)
/* harmony export */ });
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/full/full.component */ 6729);
/* harmony import */ var _final_smartscale_smartscale_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./final/smartscale/smartscale.component */ 2718);


const AppRoutes = [
    {
        path: '',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__.FullComponent,
        children: [
            {
                path: '',
                redirectTo: '/main',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_material-component_material_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./material-component/material.module */ 8877)).then(m => m.MaterialComponentsModule)
            },
            {
                path: 'dashboard',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 4814)).then(m => m.DashboardModule)
            },
            {
                path: 'main', component: _final_smartscale_smartscale_component__WEBPACK_IMPORTED_MODULE_1__.SmartscaleComponent
            }
        ]
    }
];


/***/ }),

/***/ 5408:
/*!*****************************************!*\
  !*** ./src/app/demo-material-module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoMaterialModule": () => (/* binding */ DemoMaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/autocomplete */ 3188);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button-toggle */ 1959);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ 1196);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ 3346);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-bar */ 9782);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/radio */ 8390);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/slider */ 1859);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/sort */ 4316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tabs */ 2379);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/stepper */ 7650);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/badge */ 178);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 3672);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/table */ 3865);
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/accordion */ 3134);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/a11y */ 4128);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/bidi */ 1588);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/overlay */ 4244);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/cdk/platform */ 4390);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/observers */ 5837);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/portal */ 4476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);










































/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
class DemoMaterialModule {
}
DemoMaterialModule.ɵfac = function DemoMaterialModule_Factory(t) { return new (t || DemoMaterialModule)(); };
DemoMaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DemoMaterialModule });
DemoMaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__.MatAutocompleteModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__.MatBottomSheetModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__.MatBadgeModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__.MatSidenavModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__.MatSlideToggleModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__.MatSliderModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__.MatSortModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__.MatStepperModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatNativeDateModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__.CdkTableModule,
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_35__.A11yModule,
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__.BidiModule,
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_37__.CdkAccordionModule,
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_38__.ObserversModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__.OverlayModule,
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_40__.PlatformModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__.PortalModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoMaterialModule, { exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__.MatAutocompleteModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__.MatBottomSheetModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__.MatBadgeModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__.MatSidenavModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__.MatSlideToggleModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__.MatSliderModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__.MatSortModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__.MatStepperModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatNativeDateModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__.CdkTableModule,
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_35__.A11yModule,
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__.BidiModule,
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_37__.CdkAccordionModule,
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_38__.ObserversModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__.OverlayModule,
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_40__.PlatformModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__.PortalModule] }); })();


/***/ }),

/***/ 2718:
/*!**********************************************************!*\
  !*** ./src/app/final/smartscale/smartscale.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmartscaleComponent": () => (/* binding */ SmartscaleComponent)
/* harmony export */ });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chart.js */ 3854);
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chartjs-plugin-datalabels */ 9007);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ 4177);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html2canvas */ 9266);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-device-detector */ 6618);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


// import { error } from 'console';









const _c0 = ["elementToCapture"];
function SmartscaleComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 111)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 112)(3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Cannot build report, No Data Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Please take a Smartscale Reading.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function SmartscaleComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SmartscaleComponent_div_0_div_1_Template, 7, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 4, 5)(4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 7)(6, "span")(7, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Scan QR Code to view your reading in your mobile app");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-card", 10)(11, "mat-card-content", 11)(12, "div", 12)(13, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 15)(18, "div", 16)(19, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Age:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 17)(24, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Height:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 16)(29, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Gender:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 16)(34, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SmartscaleComponent_div_0_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.generatePDF()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Print");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 20)(41, "div", 21)(42, "h3", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Body Composition Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "mat-card", 23)(45, "div", 24)(46, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 27)(49, "div", 28)(50, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Body Fat");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Total fat in your body that include fat around your organs and below your organs and below your skin.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 31)(55, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](57, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 24)(59, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 27)(62, "div", 28)(63, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Fat Free Weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Your muscle, Bone, Body water and other Tissue weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 33)(68, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](70, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 24)(72, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 35)(75, "div", 28)(76, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "Weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "Sum of the above");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 36)(81, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](83, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "h3", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Muscle Fat Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "mat-card", 38)(87, "div", 39)(88, "div", 40)(89, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](91, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 42)(93, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](94, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "Seriously Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div", 43)(98, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](100, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](101, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, "Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "div", 43)(105, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](107, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](108, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "Standard");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 43)(112, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](114, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](115, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "div", 43)(119, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](121, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](122, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, "Exceed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](125, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "div", 40)(127, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](129, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](130, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, "(Skeletal Muscle Mass)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "div", 42)(134, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](135, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "div", 54)(139, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](140);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](141, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](142, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, "Standard");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "div", 54)(146, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](147);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](148, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](149, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](151, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](152, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "div", 40)(154, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](155);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](156, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](157, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](159, " (Body Fat Mass)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "div", 42)(161, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](162, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](164, "Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "div", 57)(166, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](167);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](168, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](169, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](171, "Standard");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "div", 57)(173, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](174);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](175, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](176, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](178, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](179, "div", 57)(180, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](181);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](182, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](183, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](184, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](185, "Exceed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](186, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](187, "h3", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](188, "Obesity Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "mat-card", 38)(190, "div", 39)(191, "div", 40)(192, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](193, " BMI");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](194, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](195, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](196, "(Body Mass Index)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](197, "div", 58)(198, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](199, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](200, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](201, "Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](202, "div", 53)(203, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](204, "18.5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](205, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](206, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](207, "Standard");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](208, "div", 53)(209, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](210, "25.0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](211, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](212, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](213, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](214, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](215, "div", 40)(216, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](217, " PBF");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](218, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](219, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](220, "(Percent Body Fat)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](221, "div", 58)(222, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](223, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](224, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](225, "Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](226, "div", 57)(227, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](228);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](229, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](230, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](231, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](232, "Standard");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](233, "div", 57)(234, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](235);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](236, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](237, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](238, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](239, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](240, "div", 57)(241, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](242);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](243, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](244, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](245, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](246, "Exceed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](247, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](248, "div", 59)(249, "h3", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](250, "Actofit Health Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](251, "mat-card", 23)(252, "div")(253, "div", 60)(254, "div", 61)(255, "div", 62)(256, "div", 63)(257, "h3", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](258);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](259, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](260, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](261, "/100 points");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](262, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](263, "*Total score that reflects the evaluation of body composition. A muscular person may score over 100 points.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](264, "div", 66)(265, "h4", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](266, "Results Interpretation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](267, "div", 68)(268, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](269, "Body Composition Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](270, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](271, "Body weight is the sum of body fat free mass, which is composed of Dry Lean Mass, Total Body Water, Bone Mass & other Tissue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](272, "div", 71)(273, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](274, "Muscle-Fat Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](275, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](276, "The longer the Skeletal Muscle Mass bar is compared to the Body Fat Mass bar, the stronger the body is");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](277, "div", 71)(278, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](279, "Obesity Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](280, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](281, "BMI is an index used to determine obesity by using height and weight. PBF is the percentage of body fat compared to body weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](282, "div", 71)(283, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](284, "Segmental Body Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](285, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](286, "Evaluates whether the amount of muscle and fat is adequetly distributed throughout the body");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](287, "div", 71)(288, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](289, "Body Composition History");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](290, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](291, "Track the history of the body compositional change. Take the Actofit Test periodically to monitor your prgress.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](292, "div", 71)(293, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](294, "Body Fat-Weight Control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](295, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](296, "Body Fat Mass : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](297, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](298, "Standard");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](299, " Weight: +6.60Kg (+) Means to gain fat/ lean mass \u00B7 (-) Means to loose fat/lean mass ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](300, "div", 71)(301, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](302);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](303, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](304, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](305, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](306, "This is the weight of total bone tissue (Bone minerals + Bone matrix) in your body. Higher bone mass indicates better bone health.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](307, "div", 71)(308, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](309);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](310, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](311, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](312, "Standard");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](313, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](314, "It\u2019s the total amount of fluid in the body expressed as % of total weight. Lower body water % affects the essential body processes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](315, "div", 71)(316, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](317);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](318, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](319, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](320, "Visceral fat is located deep in the core abdominal area, surrounding and protecting the vital organs. Healthy level of visceral fat directly reduces the risk of certainn diseases.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](321, "div", 71)(322, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](323);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](324, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](325, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](326, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](327, "It is the proportional weight of fat below the skin to the total body weight. Higher subcutaneous fat value is an indicator of bad physical health.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](328, "div", 71)(329, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](330);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](331, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](332, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](333, "Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](334, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](335, "It is the proportional weight of body protein components to the total body weight. Adequate protein levels are essential for normal body function.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](336, "div", 71)(337, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](338);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](339, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](340, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](341, "It is the predicted age of the metabolism of your body. If your metabolic age higher than your actual age, its an indication that you need to improve metabolic rate.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](342, "div", 71)(343, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](344);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](345, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](346, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](347, "The BMR or Basal Metabolic Rate is daily minimum of energy or calories your body requires when at rest (including sleeping) in order to function effectively");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](348, "div", 80)(349, "div", 81)(350, "h3", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](351, "Segmental Body Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](352, "mat-card", 82)(353, "div", 24)(354, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](355, " Weight ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](356, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](357, "canvas", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](358, "div", 24)(359, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](360, " SMM ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](361, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](362, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](363, "Skeletal Muscle Mass");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](364, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](365, "canvas", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](366, "div", 24)(367, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](368, " BFM");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](369, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](370, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](371, "Body Fat Mass");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](372, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](373, "canvas", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](374, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](375, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](376, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](377, "canvas", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](378, "div", 91)(379, "h3", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](380, "Segmental Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](381, "mat-card", 92)(382, "div", 93)(383, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](384, "To see segmental analysis use Smartscale Pro and Pro Max");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](385, "div", 94)(386, "h4", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](387, "Fat Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](388, "img", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](389, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](390, "img", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](391, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](392, "Right Arm");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](393, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](394, "Fat: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](395, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](396);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](397, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](398, "p", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](399);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](400, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](401, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](402, "img", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](403, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](404, "Left Arm");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](405, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](406, "Fat: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](407, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](408);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](409, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](410, "p", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](411);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](412, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](413, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](414, "img", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](415, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](416, "Trunk");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](417, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](418, "Fat: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](419, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](420);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](421, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](422, "p", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](423);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](424, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](425, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](426, "img", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](427, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](428, "Right Leg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](429, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](430, "Fat: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](431, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](432);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](433, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](434, "p", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](435);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](436, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](437, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](438, "img", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](439, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](440, "Left Leg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](441, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](442, "Fat: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](443, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](444);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](445, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](446, "p", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](447);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](448, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](449, "div", 94)(450, "h4", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](451, "Lean Mass Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](452, "img", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](453, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](454, "img", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](455, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](456, "Right Arm");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](457, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](458, "Fat: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](459, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](460);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](461, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](462, "p", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](463);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](464, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](465, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](466, "img", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](467, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](468, "Left Arm");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](469, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](470, "Fat: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](471, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](472);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](473, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](474, "p", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](475);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](476, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](477, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](478, "img", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](479, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](480, "Trunk");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](481, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](482, "Fat: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](483, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](484);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](485, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](486, "p", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](487);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](488, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](489, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](490, "img", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](491, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](492, "Right Leg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](493, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](494, "Fat: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](495, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](496);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](497, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](498, "p", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](499);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](500, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](501, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](502, "img", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](503, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](504, "Left Leg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](505, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](506, "Fat: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](507, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](508);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](509, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](510, "p", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](511);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](512, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.dataExists);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.userProfile.data.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.age, " yrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.userProfile.data.height, " cm");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.userProfile.data.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.formattedDateNow);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](57, 62, ctx_r0.userdata.body_fat, ".2-2"), "Kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](70, 65, ctx_r0.userdata.fat_free_weight, ".2-2"), "Kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](83, 68, ctx_r0.userdata.weight, ".2-2"), "Kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Weight (", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](91, 71, ctx_r0.userdata.weight, ".2-2"), "Kg) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](100, 74, ctx_r0.sw * 0.8, ".1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](107, 77, ctx_r0.sw * 0.89, ".1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](114, 80, ctx_r0.sw * 1.09, ".1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](121, 83, ctx_r0.sw * 1.2, ".1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("left", ctx_r0.weightslider, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" SMM (", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](129, 86, ctx_r0.userdata.skeletal_muscle, ".2-2"), "%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](141, 89, ctx_r0.smm, ".1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](148, 92, ctx_r0.smm + 10, ".1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("left", ctx_r0.smmslider, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" BFM (", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](156, 95, ctx_r0.userdata.body_fat, ".2-2"), "Kg)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](168, 98, ctx_r0.bfp * ctx_r0.weight / 100, ".1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](175, 101, ctx_r0.bfp * ctx_r0.weight / 100 + 10, ".1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](182, 104, ctx_r0.bfp * ctx_r0.weight / 100 + 15, ".1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("left", ctx_r0.bfmslider, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("left", ctx_r0.bmislider, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](229, 107, ctx_r0.bfp, ".1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](236, 110, ctx_r0.bfp + 10, ".1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](243, 113, ctx_r0.bfp + 15, ".1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("left", ctx_r0.pdfslider, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](259, 116, ctx_r0.userdata.health_score, ".2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Bone Mass: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](303, 119, ctx_r0.userdata.bone_mass, ".2-2"), "Kg ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Body Water: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](310, 122, ctx_r0.userdata.body_water, ".2-2"), "% 33.41 Ltr ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Visceral Fat: ", ctx_r0.userdata.visceral_fat, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Subcutaneous Fat: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](324, 125, ctx_r0.userdata.subcutaneous_fat, ".2-2"), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Protein: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](331, 128, ctx_r0.userdata.protein, ".2-2"), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Metabolic Age: ", ctx_r0.userdata.metabolic_age, " Yrs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Basal Metabolic Rate: ", ctx_r0.userdata.bmr, " kcal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](397, 131, ctx_r0.userdata.right_arm_fat_kg, ".2-2"), " Kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](400, 134, ctx_r0.userdata.right_arm_fat, ".2-2"), "% High");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](409, 137, ctx_r0.userdata.left_arm_fat_kg, ".2-2"), " Kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](412, 140, ctx_r0.userdata.left_arm_fat, ".2-2"), "% High");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](421, 143, ctx_r0.userdata.trunk_fat_kg, ".2-2"), " Kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](424, 146, ctx_r0.userdata.trunk_fat, ".2-2"), "% High");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](433, 149, ctx_r0.userdata.right_leg_fat_kg, ".2-2"), " Kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](436, 152, ctx_r0.userdata.right_leg_fat, ".2-2"), "% High");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](445, 155, ctx_r0.userdata.left_leg_fat_kg, ".2-2"), " Kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](448, 158, ctx_r0.userdata.right_leg_fat, ".2-2"), "% High");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](461, 161, ctx_r0.userdata.right_arm_muscle_mass_kg, ".2-2"), " Kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](464, 164, ctx_r0.userdata.right_arm_muscle_mass, ".2-2"), "% High");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](473, 167, ctx_r0.userdata.left_arm_muscle_mass_kg, ".2-2"), " Kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](476, 170, ctx_r0.userdata.left_arm_muscle_mass, ".2-2"), "% High");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](485, 173, ctx_r0.userdata.trunk_muscle_mass_kg, ".2-2"), " Kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](488, 176, ctx_r0.userdata.trunk_muscle_mass, ".2-2"), "% High");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](497, 179, ctx_r0.userdata.right_leg_muscle_mass_kg, ".2-2"), " Kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](500, 182, ctx_r0.userdata.right_leg_muscle_mass, ".2-2"), "% High");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](509, 185, ctx_r0.userdata.left_leg_muscle_mass_kg, ".2-2"), " Kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](512, 188, ctx_r0.userdata.left_leg_muscle_mass, ".2-2"), "% High");
} }
function SmartscaleComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 111)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 112)(3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Cannot build report, No Data Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Please take a Smartscale Reading.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function SmartscaleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SmartscaleComponent_div_1_div_1_Template, 7, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 4, 5)(4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 7)(6, "span")(7, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Scan QR Code to view your reading in your mobile app");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-card", 10)(11, "mat-card-content", 115)(12, "div", 12)(13, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 15)(18, "div", 16)(19, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Age:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 17)(24, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Height:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 16)(29, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Gender:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 16)(34, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SmartscaleComponent_div_1_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.generatePDF()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Print");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 20)(41, "div", 21)(42, "h3", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Body Composition Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "mat-card", 23)(45, "div", 24)(46, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 27)(49, "div", 28)(50, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Body Fat");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Total fat in your body that include fat around your organs and below your organs and below your skin.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 31)(55, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](57, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 24)(59, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 27)(62, "div", 28)(63, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Fat Free Weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Your muscle, Bone, Body water and other Tissue weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 33)(68, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](70, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 24)(72, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 35)(75, "div", 28)(76, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "Weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "Sum of the above");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 36)(81, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](83, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "h3", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Muscle Fat Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "mat-card", 38)(87, "div", 39)(88, "div", 40)(89, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](91, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 42)(93, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](94, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "Seriously Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div", 43)(98, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](100, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](101, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, "Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "div", 43)(105, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](107, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](108, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "Standard");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 43)(112, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](114, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](115, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "div", 43)(119, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](121, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](122, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, "Exceed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](125, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "div", 40)(127, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](129, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](130, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, "(Skeletal Muscle Mass)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "div", 42)(134, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](135, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "div", 54)(139, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](140);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](141, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](142, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, "Standard");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "div", 54)(146, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](147);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](148, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](149, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](151, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](152, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "div", 40)(154, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](155);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](156, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](157, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](159, " (Body Fat Mass)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "div", 42)(161, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](162, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](164, "Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "div", 57)(166, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](167);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](168, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](169, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](171, "Standard");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "div", 57)(173, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](174);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](175, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](176, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](178, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](179, "div", 57)(180, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](181);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](182, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](183, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](184, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](185, "Exceed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](186, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](187, "h3", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](188, "Obesity Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "mat-card", 38)(190, "div", 39)(191, "div", 40)(192, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](193, " BMI");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](194, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](195, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](196, "(Body Mass Index)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](197, "div", 58)(198, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](199, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](200, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](201, "Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](202, "div", 53)(203, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](204, "18.5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](205, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](206, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](207, "Standard");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](208, "div", 53)(209, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](210, "25.0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](211, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](212, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](213, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](214, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](215, "div", 40)(216, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](217, " PBF");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](218, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](219, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](220, "(Percent Body Fat)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](221, "div", 58)(222, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](223, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](224, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](225, "Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](226, "div", 57)(227, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](228);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](229, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](230, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](231, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](232, "Standard");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](233, "div", 57)(234, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](235);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](236, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](237, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](238, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](239, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](240, "div", 57)(241, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](242);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](243, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](244, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](245, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](246, "Exceed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](247, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](248, "div", 59)(249, "h3", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](250, "Actofit Health Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](251, "mat-card", 23)(252, "div")(253, "div", 60)(254, "div", 61)(255, "div", 62)(256, "div", 63)(257, "h3", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](258);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](259, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](260, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](261, "/100 points");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](262, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](263, "*Total score that reflects the evaluation of body composition. A muscular person may score over 100 points.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](264, "div", 66)(265, "h4", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](266, "Results Interpretation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](267, "div", 68)(268, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](269, "Body Composition Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](270, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](271, "Body weight is the sum of body fat free mass, which is composed of Dry Lean Mass, Total Body Water, Bone Mass & other Tissue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](272, "div", 71)(273, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](274, "Muscle-Fat Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](275, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](276, "The longer the Skeletal Muscle Mass bar is compared to the Body Fat Mass bar, the stronger the body is");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](277, "div", 71)(278, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](279, "Obesity Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](280, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](281, "BMI is an index used to determine obesity by using height and weight. PBF is the percentage of body fat compared to body weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](282, "div", 71)(283, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](284, "Segmental Body Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](285, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](286, "Evaluates whether the amount of muscle and fat is adequetly distributed throughout the body");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](287, "div", 71)(288, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](289, "Body Composition History");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](290, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](291, "Track the history of the body compositional change. Take the Actofit Test periodically to monitor your prgress.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](292, "div", 71)(293, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](294, "Body Fat-Weight Control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](295, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](296, "Body Fat Mass : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](297, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](298, "Standard");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](299, " Weight: +6.60Kg (+) Means to gain fat/ lean mass \u00B7 (-) Means to loose fat/lean mass ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](300, "div", 71)(301, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](302);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](303, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](304, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](305, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](306, "This is the weight of total bone tissue (Bone minerals + Bone matrix) in your body. Higher bone mass indicates better bone health.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](307, "div", 71)(308, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](309);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](310, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](311, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](312, "Standard");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](313, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](314, "It\u2019s the total amount of fluid in the body expressed as % of total weight. Lower body water % affects the essential body processes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](315, "div", 71)(316, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](317);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](318, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](319, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](320, "Visceral fat is located deep in the core abdominal area, surrounding and protecting the vital organs. Healthy level of visceral fat directly reduces the risk of certainn diseases.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](321, "div", 71)(322, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](323);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](324, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](325, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](326, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](327, "It is the proportional weight of fat below the skin to the total body weight. Higher subcutaneous fat value is an indicator of bad physical health.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](328, "div", 71)(329, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](330);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](331, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](332, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](333, "Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](334, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](335, "It is the proportional weight of body protein components to the total body weight. Adequate protein levels are essential for normal body function.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](336, "div", 71)(337, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](338);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](339, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](340, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](341, "It is the predicted age of the metabolism of your body. If your metabolic age higher than your actual age, its an indication that you need to improve metabolic rate.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](342, "div", 71)(343, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](344);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](345, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](346, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](347, "The BMR or Basal Metabolic Rate is daily minimum of energy or calories your body requires when at rest (including sleeping) in order to function effectively");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](348, "div", 80)(349, "div", 81)(350, "h3", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](351, "Segmental Body Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](352, "mat-card", 120)(353, "div", 24)(354, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](355, " Weight ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](356, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](357, "canvas", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](358, "div", 24)(359, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](360, " SMM ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](361, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](362, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](363, "Skeletal Muscle Mass");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](364, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](365, "canvas", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](366, "div", 24)(367, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](368, " BFM");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](369, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](370, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](371, "Body Fat Mass");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](372, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](373, "canvas", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](374, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](375, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](376, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](377, "canvas", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](378, "div", 91)(379, "h3", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](380, "Segmental Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](381, "mat-card", 121)(382, "div", 93)(383, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](384, "To see segmental analysis use Smartscale Pro and Pro Max");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](385, "div", 94)(386, "h4", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](387, "Fat Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](388, "img", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](389, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](390, "img", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](391, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](392, "Right Arm");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](393, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](394, "Fat: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](395, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](396);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](397, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](398, "p", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](399);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](400, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](401, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](402, "img", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](403, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](404, "Left Arm");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](405, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](406, "Fat: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](407, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](408);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](409, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](410, "p", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](411);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](412, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](413, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](414, "img", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](415, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](416, "Trunk");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](417, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](418, "Fat: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](419, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](420);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](421, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](422, "p", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](423);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](424, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](425, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](426, "img", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](427, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](428, "Right Leg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](429, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](430, "Fat: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](431, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](432);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](433, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](434, "p", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](435);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](436, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](437, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](438, "img", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](439, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](440, "Left Leg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](441, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](442, "Fat: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](443, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](444);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](445, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](446, "p", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](447);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](448, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](449, "div", 94)(450, "h4", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](451, "Lean Mass Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](452, "img", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](453, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](454, "img", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](455, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](456, "Right Arm");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](457, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](458, "Fat: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](459, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](460);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](461, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](462, "p", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](463);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](464, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](465, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](466, "img", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](467, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](468, "Left Arm");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](469, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](470, "Fat: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](471, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](472);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](473, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](474, "p", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](475);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](476, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](477, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](478, "img", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](479, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](480, "Trunk");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](481, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](482, "Fat: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](483, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](484);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](485, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](486, "p", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](487);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](488, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](489, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](490, "img", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](491, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](492, "Right Leg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](493, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](494, "Fat: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](495, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](496);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](497, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](498, "p", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](499);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](500, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](501, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](502, "img", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](503, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](504, "Left Leg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](505, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](506, "Fat: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](507, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](508);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](509, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](510, "p", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](511);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](512, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.dataExists);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.userProfile.data.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.age, " yrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.userProfile.data.height, " cm");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.userProfile.data.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.formattedDateNow);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](57, 62, ctx_r1.userdata.body_fat, ".2-2"), "Kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](70, 65, ctx_r1.userdata.fat_free_weight, ".2-2"), "Kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](83, 68, ctx_r1.userdata.weight, ".2-2"), "Kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Weight (", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](91, 71, ctx_r1.userdata.weight, ".2-2"), "Kg) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](100, 74, ctx_r1.sw * 0.8, ".1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](107, 77, ctx_r1.sw * 0.89, ".1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](114, 80, ctx_r1.sw * 1.09, ".1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](121, 83, ctx_r1.sw * 1.2, ".1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("left", ctx_r1.weightslider, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" SMM (", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](129, 86, ctx_r1.userdata.skeletal_muscle, ".2-2"), "%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](141, 89, ctx_r1.smm, ".1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](148, 92, ctx_r1.smm + 10, ".1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("left", ctx_r1.smmslider, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" BFM (", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](156, 95, ctx_r1.userdata.body_fat, ".2-2"), "Kg)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](168, 98, ctx_r1.bfp * ctx_r1.weight / 100, ".1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](175, 101, ctx_r1.bfp * ctx_r1.weight / 100 + 10, ".1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](182, 104, ctx_r1.bfp * ctx_r1.weight / 100 + 15, ".1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("left", ctx_r1.bfmslider, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("left", ctx_r1.bmislider, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](229, 107, ctx_r1.bfp, ".1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](236, 110, ctx_r1.bfp + 10, ".1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](243, 113, ctx_r1.bfp + 15, ".1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("left", ctx_r1.pdfslider, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](259, 116, ctx_r1.userdata.health_score, ".2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Bone Mass: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](303, 119, ctx_r1.userdata.bone_mass, ".2-2"), "Kg ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Body Water: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](310, 122, ctx_r1.userdata.body_water, ".2-2"), "% 33.41 Ltr ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Visceral Fat: ", ctx_r1.userdata.visceral_fat, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Subcutaneous Fat: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](324, 125, ctx_r1.userdata.subcutaneous_fat, ".2-2"), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Protein: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](331, 128, ctx_r1.userdata.protein, ".2-2"), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Metabolic Age: ", ctx_r1.userdata.metabolic_age, " Yrs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Basal Metabolic Rate: ", ctx_r1.userdata.bmr, " kcal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](397, 131, ctx_r1.userdata.right_arm_fat_kg, ".2-2"), " Kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](400, 134, ctx_r1.userdata.right_arm_fat, ".2-2"), "% High");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](409, 137, ctx_r1.userdata.left_arm_fat_kg, ".2-2"), " Kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](412, 140, ctx_r1.userdata.left_arm_fat, ".2-2"), "% High");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](421, 143, ctx_r1.userdata.trunk_fat_kg, ".2-2"), " Kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](424, 146, ctx_r1.userdata.trunk_fat, ".2-2"), "% High");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](433, 149, ctx_r1.userdata.right_leg_fat_kg, ".2-2"), " Kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](436, 152, ctx_r1.userdata.right_leg_fat, ".2-2"), "% High");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](445, 155, ctx_r1.userdata.left_leg_fat_kg, ".2-2"), " Kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](448, 158, ctx_r1.userdata.right_leg_fat, ".2-2"), "% High");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](461, 161, ctx_r1.userdata.right_arm_muscle_mass_kg, ".2-2"), " Kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](464, 164, ctx_r1.userdata.right_arm_muscle_mass, ".2-2"), "% High");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](473, 167, ctx_r1.userdata.left_arm_muscle_mass_kg, ".2-2"), " Kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](476, 170, ctx_r1.userdata.left_arm_muscle_mass, ".2-2"), "% High");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](485, 173, ctx_r1.userdata.trunk_muscle_mass_kg, ".2-2"), " Kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](488, 176, ctx_r1.userdata.trunk_muscle_mass, ".2-2"), "% High");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](497, 179, ctx_r1.userdata.right_leg_muscle_mass_kg, ".2-2"), " Kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](500, 182, ctx_r1.userdata.right_leg_muscle_mass, ".2-2"), "% High");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](509, 185, ctx_r1.userdata.left_leg_muscle_mass_kg, ".2-2"), " Kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](512, 188, ctx_r1.userdata.left_leg_muscle_mass, ".2-2"), "% High");
} }
class SmartscaleComponent {
    constructor(http, par, deviceDetectorService) {
        this.http = http;
        this.par = par;
        this.deviceDetectorService = deviceDetectorService;
        this.headers = { Authorization: "Token " + "0QDNtX8szxHiJ6xDMFGJpZLh03lWQaLD" };
        this.dataExists = false;
        this.isMobile = false;
        chart_js__WEBPACK_IMPORTED_MODULE_4__.Chart.register(...chart_js__WEBPACK_IMPORTED_MODULE_4__.registerables);
        chart_js__WEBPACK_IMPORTED_MODULE_4__.Chart.register(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_0__["default"]);
    }
    getUserProfile() {
        return new Promise((resolve, reject) => {
            this.http.get(this.url, { headers: this.headers }).subscribe((data) => {
                this.userProfile = data;
                this.userDataUrl = `https://nucleus.actofit.com:3000/smartscale/v1/actofit/get_user_data/${this.userProfile.data._id}`;
                this.dataExists = true;
                this.http.get(this.userDataUrl, { headers: this.headers }).subscribe((data2) => {
                    data2.data.sort((a, b) => a.createdAt - b.createdAt);
                    this.userData = data2.data[0];
                    this.fulluserdata = data2.data.slice(0, 5);
                    resolve(this.userData);
                }, error => {
                    reject(error);
                });
            }, error => {
                reject(error);
                console.log("yuay", this.dataExists);
                if (this.dataExists == false) {
                    const preloader = document.querySelector(".preloader");
                    preloader.style.zIndex = "-1";
                }
            });
        });
    }
    getAge(dateOfBirth) {
        const today = new Date();
        const [d, m, y] = dateOfBirth.split('/');
        const dateObj = new Date(`${y}-${m}-${d}`);
        const birthDate = new Date(dateObj);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    // getUserData(): Promise<void> {
    //   return new Promise<void>((resolve, reject) => {
    //     this.userDataUrl = "https://nucleus.actofit.com:3000/smartscale/v1/actofit/get_user_data/5df9cdd21e6e5a43657be0cf"
    //     this.http.get<any>(this.userDataUrl, { headers: this.headers }).subscribe(
    //       (data:any)=> {
    //         this.userData = data.data[0];  
    //         console.log(this.userData);
    //         resolve(this.userData);
    //       },
    //       error =>{
    //         reject(error)
    //         console.log("userdata", error) // Handle the error by rejecting the Promise
    //       }
    //     )
    //   });
    // }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16;
        return __awaiter(this, void 0, void 0, function* () {
            // this.weightslider= 70-
            this.divheight = (_a = document.getElementById("segmental-card")) === null || _a === void 0 ? void 0 : _a.clientHeight;
            yield this.par.queryParams.subscribe((params) => __awaiter(this, void 0, void 0, function* () {
                this.email = params['email'];
                // this.email = "test@yopmail.com"
                console.log(this.email);
                this.url = `https://nucleus.actofit.com:3000/smartscale/v1/actofit/get_profile?email=${this.email}`;
                yield this.getUserProfile();
            }));
            this.isMobile = this.deviceDetectorService.isMobile();
            if (this.isMobile) {
                (_b = document.getElementById("ind-score")) === null || _b === void 0 ? void 0 : _b.classList.add("mobile-ind");
                (_c = document.getElementById("ind-sub")) === null || _c === void 0 ? void 0 : _c.classList.add("mobile-text");
                (_d = document.getElementById("score")) === null || _d === void 0 ? void 0 : _d.classList.add("mobile-less-margin");
            }
            console.log(this.isMobile);
            // if (window.innerWidth < 768) {
            //   this.isMobile= true;
            // }
            //current date and time 
            const now = new Date();
            const options2 = { day: '2-digit', month: '2-digit', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true };
            this.formattedDateNow = now.toLocaleString('en-US', options2);
            this.userdata = yield this.getUserProfile();
            // const newdate = new Date(this.userProfile.data.date_of_birth)
            this.age = this.getAge(this.userProfile.data.date_of_birth);
            // this.userdata = {
            //   "bmr": 21
            // }
            //test variables
            this.testvar = 5;
            this.gender = this.userProfile.data.gender;
            this.bodyheight = 170;
            this.weight = this.userData.weight;
            //body weight scale
            if (this.gender == "male") {
                this.sw = (this.bodyheight - 80) * 0.7;
            }
            else if (this.gender == "female") {
                this.sw = ((this.bodyheight * 1.37) - 110) * 0.45;
            }
            //skeletal muscle mass scale
            if (this.gender == "male") {
                this.smm = 49;
            }
            else if (this.gender == "female") {
                this.smm = 40;
            }
            //body fat% scale
            if (this.gender == "male") {
                this.bfp = 11;
            }
            else if (this.gender == "female") {
                this.bfp = 21;
            }
            //slider position
            //weight
            if (this.weight < this.smm) {
                this.weightslider = this.calculatePointerPosition(15, 0.80 * this.sw, this.weight, 5);
            }
            else if (this.weight < 0.89 * this.sw && this.weight > 0.80 * this.sw) {
                this.weightslider = this.calculatePointerPosition(0.80 * this.sw, 0.89 * this.sw, this.weight, 5) + 20;
            }
            else if (this.weight < 1.09 * this.sw && this.weight > 0.89 * this.sw) {
                this.weightslider = this.calculatePointerPosition(0.89 * this.sw, 1.09 * this.sw, this.weight, 5) + 40;
            }
            else if (this.weight < 1.20 * this.sw && this.weight > 1.09 * this.sw) {
                this.weightslider = this.calculatePointerPosition(1.09 * this.sw, 1.20 * this.sw, this.weight, 5) + 60;
            }
            else if (this.weight > 1.20 * this.sw) {
                this.weightslider = this.calculatePointerPosition(1.20 * this.sw, 250, this.weight, 5) + 80;
            }
            //smm
            if (this.userdata.skeletal_muscle < this.smm) {
                this.smmslider = this.calculatePointerPosition(0, this.smm, this.userdata.skeletal_muscle, 3);
            }
            else if (this.userdata.skeletal_muscle < (this.smm + 10) && this.userdata.skeletal_muscle > this.smm) {
                this.smmslider = this.calculatePointerPosition(this.smm, this.smm + 10, this.userdata.skeletal_muscle, 3) + 33;
            }
            else if (this.userdata.skeletal_muscle > (this.smm + 10)) {
                this.smmslider = this.calculatePointerPosition(this.smm + 10, 100, this.userdata.skeletal_muscle, 3) + 66;
            }
            //bfm
            if (this.userdata.body_fat < this.bfp * this.weight / 100) {
                this.bfmslider = this.calculatePointerPosition(0, this.bfp * this.weight / 100, this.userdata.body_fat, 4);
            }
            else if (this.userdata.body_fat < (this.bfp * this.weight / 100 + 10) && this.userdata.body_fat > this.bfp * this.weight / 100) {
                this.bfmslider = this.calculatePointerPosition(this.bfp * this.weight / 100, this.bfp * this.weight / 100 + 10, this.userdata.body_fat, 4) + 25;
            }
            else if (this.userdata.body_fat < (this.bfp * this.weight / 100 + 15) && this.userdata.body_fat > this.bfp * this.weight / 100 + 10) {
                this.bfmslider = this.calculatePointerPosition(this.bfp * this.weight / 100 + 10, this.bfp * this.weight / 100 + 15, this.userdata.body_fat, 4) + 50;
            }
            else if (this.userdata.body_fat > (this.bfp * this.weight / 100 + 15)) {
                this.bfmslider = this.calculatePointerPosition(this.bfp * this.weight / 100 + 15, this.weight, this.userdata.body_fat, 4) + 75;
            }
            //bfp
            if (this.userdata.body_fat * this.weight / 100 < this.bfp) {
                this.pdfslider = this.calculatePointerPosition(0, this.bfp, this.userdata.body_fat * this.weight / 100, 4);
            }
            else if (this.userdata.body_fat * this.weight / 100 < (this.bfp + 10) && this.userdata.body_fat * this.weight / 100 > this.bfp) {
                this.pdfslider = this.calculatePointerPosition(this.bfp, this.bfp + 10, this.userdata.body_fat * this.weight / 100, 4) + 25;
            }
            else if (this.userdata.body_fat * this.weight / 100 < (this.bfp + 15) && this.userdata.body_fat * this.weight / 100 > this.bfp + 10) {
                this.pdfslider = this.calculatePointerPosition(this.bfp + 10, this.bfp + 15, this.userdata.body_fat * this.weight / 100, 4) + 50;
            }
            else if (this.userdata.body_fat * this.weight / 100 > (this.bfp + 15)) {
                this.pdfslider = this.calculatePointerPosition(this.bfp + 15, this.weight, this.userdata.body_fat * this.weight / 100, 4) + 75;
            }
            //bmi
            if (this.userdata.bmi < 18.5) {
                this.bmislider = this.calculatePointerPosition(5, 18.5, this.userdata.bmi, 3);
            }
            else if (this.userdata.bmi < 25.0 && this.userdata.bmi > 18.5) {
                this.bmislider = this.calculatePointerPosition(25.0, 18.5, this.userdata.bmi, 3) + 33;
            }
            else if (this.userdata.bmi > 25.0) {
                this.bmislider = this.calculatePointerPosition(25.0, 60, this.userdata.bmi, 3) + 66;
            }
            //visceral fat
            if (this.userdata.visceral_fat <= 9) {
                (_e = document.getElementById("visceral-fat")) === null || _e === void 0 ? void 0 : _e.classList.add("standard");
                const element = document.getElementById('visceral-fat');
                element.innerHTML = "Standard";
            }
            else if (this.userdata.visceral_fat > 10 && this.userdata.visceral_fat <= 14) {
                (_f = document.getElementById("visceral-fat")) === null || _f === void 0 ? void 0 : _f.classList.add("not-standard");
                const element = document.getElementById('visceral-fat');
                element.innerHTML = "High";
            }
            else if (this.userdata.visceral_fat > 14) {
                (_g = document.getElementById("visceral-fat")) === null || _g === void 0 ? void 0 : _g.classList.add("not-standard");
                const element = document.getElementById('visceral-fat');
                element.innerHTML = "Seriously High";
            }
            //protein
            if (this.gender == "male") {
                if (this.userdata.protein < 16) {
                    (_h = document.getElementById("protein")) === null || _h === void 0 ? void 0 : _h.classList.add("low");
                    const element = document.getElementById('protein');
                    element.innerHTML = "Low";
                }
                else if (this.userdata.protein >= 16 && this.userdata.protein <= 18) {
                    (_j = document.getElementById("protein")) === null || _j === void 0 ? void 0 : _j.classList.add("standard");
                    const element = document.getElementById('protein');
                    element.innerHTML = "Standard";
                }
                else if (this.userdata.protein > 18) {
                    (_k = document.getElementById("protein")) === null || _k === void 0 ? void 0 : _k.classList.add("standard");
                    const element = document.getElementById('protein');
                    element.innerHTML = "Adequate";
                }
            }
            else if (this.gender == "female") {
                if (this.userdata.protein < 14) {
                    (_l = document.getElementById("protein")) === null || _l === void 0 ? void 0 : _l.classList.add("low");
                    const element = document.getElementById('protein');
                    element.innerHTML = "Low";
                }
                else if (this.userdata.protein >= 14 && this.userdata.protein <= 16) {
                    (_m = document.getElementById("protein")) === null || _m === void 0 ? void 0 : _m.classList.add("standard");
                    const element = document.getElementById('protein');
                    element.innerHTML = "Standard";
                }
                else if (this.userdata.protein > 16) {
                    (_o = document.getElementById("protein")) === null || _o === void 0 ? void 0 : _o.classList.add("standard");
                    const element = document.getElementById('protein');
                    element.innerHTML = "Adequate";
                }
            }
            //subcutaneous fat
            if (this.gender == "male") {
                if (this.userdata.subcutaneous_fat < 8.6) {
                    (_p = document.getElementById("subcutaneous-fat")) === null || _p === void 0 ? void 0 : _p.classList.add("low");
                    const element = document.getElementById('subcutaneous-fat');
                    element.innerHTML = "Low";
                }
                else if (this.userdata.subcutaneous_fat >= 8.6 && this.userdata.subcutaneous_fat <= 16.7) {
                    (_q = document.getElementById("subcutaneous-fat")) === null || _q === void 0 ? void 0 : _q.classList.add("standard");
                    const element = document.getElementById('subcutaneous-fat');
                    element.innerHTML = "Standard";
                }
                else if (this.userdata.subcutaneous_fat > 16.7) {
                    (_r = document.getElementById("subcutaneous-fat")) === null || _r === void 0 ? void 0 : _r.classList.add("not-standard");
                    const element = document.getElementById('subcutaneous-fat');
                    element.innerHTML = "High";
                }
            }
            else if (this.gender == "female") {
                if (this.userdata.subcutaneous_fat < 18.5) {
                    (_s = document.getElementById("subcutaneous-fat")) === null || _s === void 0 ? void 0 : _s.classList.add("low");
                    const element = document.getElementById('subcutaneous-fat');
                    element.innerHTML = "Low";
                }
                else if (this.userdata.subcutaneous_fat >= 18.5 && this.userdata.subcutaneous_fat <= 26.7) {
                    (_t = document.getElementById("subcutaneous-fat")) === null || _t === void 0 ? void 0 : _t.classList.add("standard");
                    const element = document.getElementById('subcutaneous-fat');
                    element.innerHTML = "Standard";
                }
                else if (this.userdata.subcutaneous_fat > 26.7) {
                    (_u = document.getElementById("subcutaneous-fat")) === null || _u === void 0 ? void 0 : _u.classList.add("not-standard");
                    const element = document.getElementById('subcutaneous-fat');
                    element.innerHTML = "High";
                }
            }
            //bone-mass
            if (this.gender == "male") {
                if (this.bodyheight < 60) {
                    if (this.userdata.bone_mass < 2.3) {
                        (_v = document.getElementById("bone-mass")) === null || _v === void 0 ? void 0 : _v.classList.add("low");
                        const element = document.getElementById('bone-mass');
                        element.innerHTML = "Low";
                    }
                    else if (this.userdata.bone_mass >= 2.3 && this.userdata.bone_mass <= 2.7) {
                        (_w = document.getElementById("bone-mass")) === null || _w === void 0 ? void 0 : _w.classList.add("standard");
                        const element = document.getElementById('bone-mass');
                        element.innerHTML = "Standard";
                    }
                    else if (this.userdata.bone_mass > 2.7) {
                        (_x = document.getElementById("bone-mass")) === null || _x === void 0 ? void 0 : _x.classList.add("not-standard");
                        const element = document.getElementById('bone-mass');
                        element.innerHTML = "High";
                    }
                }
                else if (this.bodyheight > 60 && this.bodyheight < 75) {
                    if (this.userdata.bone_mass < 2.7) {
                        (_y = document.getElementById("bone-mass")) === null || _y === void 0 ? void 0 : _y.classList.add("low");
                        const element = document.getElementById('bone-mass');
                        element.innerHTML = "Low";
                    }
                    else if (this.userdata.bone_mass >= 2.7 && this.userdata.bone_mass <= 3.1) {
                        (_z = document.getElementById("bone-mass")) === null || _z === void 0 ? void 0 : _z.classList.add("standard");
                        const element = document.getElementById('bone-mass');
                        element.innerHTML = "Standard";
                    }
                    else if (this.userdata.bone_mass > 3.1) {
                        (_0 = document.getElementById("bone-mass")) === null || _0 === void 0 ? void 0 : _0.classList.add("not-standard");
                        const element = document.getElementById('bone-mass');
                        element.innerHTML = "High";
                    }
                }
                else if (this.bodyheight > 75) {
                    if (this.userdata.bone_mass < 3.0) {
                        (_1 = document.getElementById("bone-mass")) === null || _1 === void 0 ? void 0 : _1.classList.add("low");
                        const element = document.getElementById('bone-mass');
                        element.innerHTML = "Low";
                    }
                    else if (this.userdata.bone_mass >= 3.0 && this.userdata.bone_mass <= 3.4) {
                        (_2 = document.getElementById("bone-mass")) === null || _2 === void 0 ? void 0 : _2.classList.add("standard");
                        const element = document.getElementById('bone-mass');
                        element.innerHTML = "Standard";
                    }
                    else if (this.userdata.bone_mass > 3.4) {
                        (_3 = document.getElementById("bone-mass")) === null || _3 === void 0 ? void 0 : _3.classList.add("not-standard");
                        const element = document.getElementById('bone-mass');
                        element.innerHTML = "High";
                    }
                }
            }
            else if (this.gender == "female") {
                if (this.bodyheight < 45) {
                    if (this.userdata.bone_mass < 1.6) {
                        (_4 = document.getElementById("bone-mass")) === null || _4 === void 0 ? void 0 : _4.classList.add("low");
                        const element = document.getElementById('bone-mass');
                        element.innerHTML = "Low";
                    }
                    else if (this.userdata.bone_mass >= 1.6 && this.userdata.bone_mass <= 2.0) {
                        (_5 = document.getElementById("bone-mass")) === null || _5 === void 0 ? void 0 : _5.classList.add("standard");
                        const element = document.getElementById('bone-mass');
                        element.innerHTML = "Standard";
                    }
                    else if (this.userdata.bone_mass > 2.0) {
                        (_6 = document.getElementById("bone-mass")) === null || _6 === void 0 ? void 0 : _6.classList.add("not-standard");
                        const element = document.getElementById('bone-mass');
                        element.innerHTML = "High";
                    }
                }
                else if (this.bodyheight > 45 && this.bodyheight < 60) {
                    if (this.userdata.bone_mass < 2.0) {
                        (_7 = document.getElementById("bone-mass")) === null || _7 === void 0 ? void 0 : _7.classList.add("low");
                        const element = document.getElementById('bone-mass');
                        element.innerHTML = "Low";
                    }
                    else if (this.userdata.bone_mass >= 2.0 && this.userdata.bone_mass <= 2.4) {
                        (_8 = document.getElementById("bone-mass")) === null || _8 === void 0 ? void 0 : _8.classList.add("standard");
                        const element = document.getElementById('bone-mass');
                        element.innerHTML = "Standard";
                    }
                    else if (this.userdata.bone_mass > 2.4) {
                        (_9 = document.getElementById("bone-mass")) === null || _9 === void 0 ? void 0 : _9.classList.add("not-standard");
                        const element = document.getElementById('bone-mass');
                        element.innerHTML = "High";
                    }
                }
                else if (this.bodyheight > 60) {
                    if (this.userdata.bone_mass < 2.3) {
                        (_10 = document.getElementById("bone-mass")) === null || _10 === void 0 ? void 0 : _10.classList.add("low");
                        const element = document.getElementById('bone-mass');
                        element.innerHTML = "Low";
                    }
                    else if (this.userdata.bone_mass >= 2.3 && this.userdata.bone_mass <= 27) {
                        (_11 = document.getElementById("bone-mass")) === null || _11 === void 0 ? void 0 : _11.classList.add("standard");
                        const element = document.getElementById('bone-mass');
                        element.innerHTML = "Standard";
                    }
                    else if (this.userdata.bone_mass > 2.7) {
                        (_12 = document.getElementById("bone-mass")) === null || _12 === void 0 ? void 0 : _12.classList.add("not-standard");
                        const element = document.getElementById('bone-mass');
                        element.innerHTML = "High";
                    }
                }
            }
            //metabolic age 
            if (this.userdata.metabolic_age <= this.age) {
                (_13 = document.getElementById("metabolic-age")) === null || _13 === void 0 ? void 0 : _13.classList.add("standard");
                const element = document.getElementById('metabolic-age');
                element.innerHTML = "Standard";
            }
            else {
                (_14 = document.getElementById("metabolic-age")) === null || _14 === void 0 ? void 0 : _14.classList.add("not-standard");
                const element = document.getElementById('metabolic-age');
                element.innerHTML = "Not Standard";
            }
            //metabolic rate
            if (this.gender == "male") {
                if (this.age >= 18 && this.age <= 29) {
                    this.smr = this.weight * 24;
                }
                else if (this.age >= 30 && this.age <= 49) {
                    this.smr = this.weight * 22.3;
                }
                else if (this.age >= 50 && this.age <= 69) {
                    this.smr = this.weight * 21.5;
                }
                else if (this.age >= 70) {
                    this.smr = this.weight * 21.5;
                }
                console.log(this.smr);
            }
            else if (this.gender == "female") {
                if (this.age >= 18 && this.age <= 29) {
                    this.smr = this.weight * 23.6;
                }
                else if (this.age >= 30 && this.age <= 49) {
                    this.smr = this.weight * 21.7;
                }
                else if (this.age >= 50 && this.age <= 69) {
                    this.smr = this.weight * 20.7;
                }
                else if (this.age >= 70) {
                    this.smr = this.weight * 20.7;
                }
            }
            if (this.userdata.bmr >= this.smr) {
                console.log("standard");
                (_15 = document.getElementById("bmr")) === null || _15 === void 0 ? void 0 : _15.classList.add("standard");
                const element = document.getElementById('bmr');
                element.innerHTML = "Standard";
            }
            else if (this.userdata.bmr < this.smr) {
                console.log("not standard");
                (_16 = document.getElementById("bmr")) === null || _16 === void 0 ? void 0 : _16.classList.add("not-standard");
                const element = document.getElementById('bmr');
                element.innerHTML = "Not Standard";
            }
            console.log(this.userdata.right_arm_fat);
            //fat analysis
            // if(this.userdata.right_arm_fat == undefined){
            //   document.getElementById("fat-overlay")?.classList.add("show")
            //   console.log("yay")
            // }
            //
            // const data = [
            //   { year: 2010, count: 10 },
            //   { year: 2011, count: 20 },
            //   { year: 2012, count: 15 },
            //   { year: 2013, count: 25 },
            //   { year: 2014, count: 22 },
            //   // { year: 2015, count: 30 },
            //   // { year: 2016, count: 28 },
            // ];
            const weightdata = [
                { year: this.formatDate(this.fulluserdata[4].createdAt), count: this.fulluserdata[4].weight },
                { year: this.formatDate(this.fulluserdata[3].createdAt), count: this.fulluserdata[3].weight },
                { year: this.formatDate(this.fulluserdata[2].createdAt), count: this.fulluserdata[2].weight },
                { year: this.formatDate(this.fulluserdata[1].createdAt), count: this.fulluserdata[1].weight },
                { year: this.formatDate(this.fulluserdata[0].createdAt), count: this.fulluserdata[0].weight },
            ];
            const smmdata = [
                { year: this.formatDate(this.fulluserdata[4].createdAt), count: this.fulluserdata[4].skeletal_muscle },
                { year: this.formatDate(this.fulluserdata[3].createdAt), count: this.fulluserdata[3].skeletal_muscle },
                { year: this.formatDate(this.fulluserdata[2].createdAt), count: this.fulluserdata[2].skeletal_muscle },
                { year: this.formatDate(this.fulluserdata[1].createdAt), count: this.fulluserdata[1].skeletal_muscle },
                { year: this.formatDate(this.fulluserdata[0].createdAt), count: this.fulluserdata[0].skeletal_muscle },
            ];
            const bfmdata = [
                { year: this.formatDate(this.fulluserdata[4].createdAt), count: this.fulluserdata[4].body_fat },
                { year: this.formatDate(this.fulluserdata[3].createdAt), count: this.fulluserdata[3].body_fat },
                { year: this.formatDate(this.fulluserdata[2].createdAt), count: this.fulluserdata[2].body_fat },
                { year: this.formatDate(this.fulluserdata[1].createdAt), count: this.fulluserdata[1].body_fat },
                { year: this.formatDate(this.fulluserdata[0].createdAt), count: this.fulluserdata[0].body_fat },
            ];
            const testdata = [
                { year: this.formatDate(this.fulluserdata[4].createdAt), count: '' },
                { year: this.formatDate(this.fulluserdata[3].createdAt), count: '' },
                { year: this.formatDate(this.fulluserdata[2].createdAt), count: '' },
                { year: this.formatDate(this.fulluserdata[1].createdAt), count: '' },
                { year: this.formatDate(this.fulluserdata[0].createdAt), count: '' },
            ];
            var weightChart = new chart_js__WEBPACK_IMPORTED_MODULE_4__.Chart("weightChart", {
                type: 'line',
                plugins: [chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_0__["default"]],
                options: {
                    borderColor: '#3B8177',
                    plugins: {
                        datalabels: {
                            align: 'start',
                            clip: false,
                            formatter: function (value, context) {
                                return Math.round(value * 100) / 100;
                            }
                        },
                        legend: {
                            display: false
                        },
                    },
                    scales: {
                        y: {
                            display: false,
                        },
                        x: {
                            display: false
                        }
                    },
                    layout: {
                        padding: {
                            bottom: 30,
                            right: 20,
                            left: 20,
                            top: 30
                        }
                    },
                    aspectRatio: 4,
                },
                data: {
                    labels: weightdata.map(row => row.year),
                    datasets: [
                        {
                            label: 'Weight',
                            data: weightdata.map(row => row.count),
                            pointBackgroundColor: '#3B8177',
                        },
                    ],
                }
            });
            var smmChart = new chart_js__WEBPACK_IMPORTED_MODULE_4__.Chart("smmChart", {
                type: 'line',
                plugins: [chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_0__["default"]],
                options: {
                    borderColor: '#3B8177',
                    plugins: {
                        datalabels: {
                            align: 'start',
                            clip: false,
                            formatter: function (value, context) {
                                return Math.round(value * 100) / 100;
                            }
                        },
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            display: false
                        },
                        x: {
                            display: false
                        }
                    },
                    layout: {
                        padding: {
                            bottom: 30,
                            right: 20,
                            left: 20,
                            top: 30
                        }
                    },
                    aspectRatio: 4
                },
                data: {
                    labels: smmdata.map(row => row.year),
                    datasets: [
                        {
                            label: 'Skeletal Muscle Mass',
                            data: smmdata.map(row => row.count),
                            pointBackgroundColor: '#3B8177',
                        }
                    ]
                }
            });
            var testChart = new chart_js__WEBPACK_IMPORTED_MODULE_4__.Chart("testChart", {
                type: 'line',
                plugins: [chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_0__["default"]],
                options: {
                    borderColor: '#3B8177',
                    plugins: {
                        datalabels: {
                            align: 'start',
                            clip: false,
                            formatter: function (value, context) {
                                return Math.round(value * 100) / 100;
                            }
                        },
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            display: false,
                            grid: {
                                display: false
                            },
                        },
                        x: {
                            grid: {
                                display: false
                            },
                        }
                    },
                    layout: {
                        padding: {
                            bottom: 30,
                            right: 20,
                            left: 20,
                        }
                    },
                    aspectRatio: 6
                },
                data: {
                    labels: testdata.map(row => row.year),
                    datasets: [
                        {
                            label: 'Acquisitions by year',
                            data: testdata.map(row => row.count),
                            pointBackgroundColor: '#3B8177',
                            hidden: true
                        }
                    ]
                }
            });
            var bfChart = new chart_js__WEBPACK_IMPORTED_MODULE_4__.Chart("bfChart", {
                type: 'line',
                plugins: [chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_0__["default"]],
                options: {
                    borderColor: '#3B8177',
                    plugins: {
                        datalabels: {
                            align: 'start',
                            clip: false,
                            formatter: function (value, context) {
                                return Math.round(value * 100) / 100;
                            }
                        },
                        legend: {
                            display: false
                        },
                    },
                    scales: {
                        y: {
                            display: false
                        },
                        x: {
                            display: false
                        }
                    },
                    layout: {
                        padding: {
                            bottom: 30,
                            right: 20,
                            left: 20,
                            top: 30
                        }
                    },
                    aspectRatio: 4
                },
                data: {
                    labels: bfmdata.map(row => row.year),
                    datasets: [
                        {
                            label: 'Body Fat Mass',
                            data: bfmdata.map(row => row.count),
                            pointBackgroundColor: '#3B8177',
                        }
                    ]
                }
            });
        });
    }
    // async generatePDF4() {
    //   const browser = await puppeteer.launch();
    //   const page = await browser.newPage();
    //   await page.goto('http://localhost:4200', { waitUntil: 'networkidle0' });
    //   const pdf = await page.pdf({ format: 'A4' });
    //   await browser.close();
    //   const blob = new Blob([pdf], { type: 'application/pdf' });
    //   const url = URL.createObjectURL(blob);
    //   window.open(url);
    // }
    // chart: Configuration = {
    //   // Specify the type of chart and the rest of the config will be typed
    //   type: "Bar",
    //   // Required
    //   data: {
    //     labels: [
    //       'Jan',
    //       'Feb',
    //       'Mar',
    //       'Apr',
    //       'May',
    //       'Jun',
    //       'Jul',
    //       'Aug',
    //       'Sep',
    //       'Oct',
    //       'Nov',
    //       'Dec'
    //     ],
    //     series: [
    //       [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
    //       [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
    //     ]
    //   },
    //   // Optional
    //   options: {
    //           height: '350px',
    //           seriesBarDistance: 21,
    //           axisX: {
    //             showGrid: false, offset: 100
    //           },
    //           axisY: {
    //             scaleMinSpace: 30,
    //           }
    //         },
    //   }
    onPrint() {
        this.printscreen = document.getElementsByTagName("body");
    }
    calculatePointerPosition(minValue, maxValue, value, n) {
        var _a;
        const tickInterval = (maxValue - minValue);
        const tickIndex = (value - minValue) / tickInterval;
        this.markerwidth = (_a = document.querySelector(".slider-dot")) === null || _a === void 0 ? void 0 : _a.clientWidth;
        const pointerPosition = tickIndex * 100 / n;
        return pointerPosition;
    }
    formatDate(isoDate) {
        const date = new Date(isoDate);
        const options = { day: 'numeric', month: 'short' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        return formattedDate;
    }
    // getUserID(url:any, headers:any): Promise<any>{
    //   return new Promise((resolve, reject) => {
    //       this.http.get<any>(url, {headers: headers}).subscribe(
    //         data=>{
    //             this.intuser = data
    //             resolve(data.parent_id)
    //           },
    //         error =>{
    //           reject(error)
    //         }
    //         )
    //   })
    // }
    // getUserData(userid:any, headers: any): Promise<any> {
    //   // var userid = await this.getUserID(headers)
    //   return new Promise((resolve, reject) => {
    //     var url2 = 'https://nucleus.actofit.com:3000/smartscale/v1/actofit/get_user_data/'+userid
    //     this.http.get<any>(url2, {headers: headers}).subscribe(
    //       data => {
    //         // console.log(data.length())
    //         data.data.sort((a:any,b:any)=> a.createdAt - b.createdAt).reverse()
    //         resolve(data.data[0]);
    //       },
    //       error => {
    //         reject(error);
    //       }
    //     );
    //   });
    // }
    generatePDF() {
        window.scrollTo(0, 0);
        // document.querySelector('meta[name=viewport]').setAttribute("content", "width=1200");
        // const element = document.querySelector('#elementToCapture') as HTMLElement;
        const element = document.body;
        html2canvas__WEBPACK_IMPORTED_MODULE_2___default()(element, { scale: 1 }).then(canvas => {
            // create a new PDF document
            const pdf = new jspdf__WEBPACK_IMPORTED_MODULE_1__["default"]('p', 'mm', 'a4');
            // calculate the width and height of the image on the PDF
            const imgWidth = pdf.internal.pageSize.getWidth();
            const imgHeight = canvas.height * imgWidth / canvas.width;
            // add the image to the PDF
            pdf.addImage(canvas.toDataURL(), 'PNG', 2, 5, imgWidth, imgHeight);
            // save the PDF
            const fileName = `Report_${this.userProfile.data.name}.pdf`;
            pdf.save(fileName);
        });
    }
    // generatePDF3() {
    //   var pdf = new jsPDF('p', 'pt', 'letter');
    //   pdf.addHTML(document.getElementById("elementToCapture"), 0 , 0, function () {
    //      pdf.save('Test.pdf');
    //  });
    // }
    // generatePDF2(){
    //   var doc = new jsPDF('portrait', 'pt', 'a4');
    // doc.html(document.body, {
    //    callback: function (doc) {
    //      doc.save("test.pdf");
    //    },
    //    x: 5,
    //    y: 5,
    //    width: doc.internal.pageSize.getWidth() ,
    // });
    // }
    generatePDF2() {
        html2canvas__WEBPACK_IMPORTED_MODULE_2___default()(document.body, { useCORS: true }).then(canvas => {
            // Convert canvas to image data
            const imageData = canvas.toDataURL();
            // Create a link element
            const link = document.createElement('a');
            link.download = 'screenshot.png';
            link.href = imageData;
            // Click the link element to trigger the download
            link.click();
        });
    }
}
SmartscaleComponent.ɵfac = function SmartscaleComponent_Factory(t) { return new (t || SmartscaleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__.DeviceDetectorService)); };
SmartscaleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SmartscaleComponent, selectors: [["app-smartscale"]], viewQuery: function SmartscaleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.elementToCapture = _t.first);
    } }, decls: 2, vars: 2, consts: [["class", "laptop", 4, "ngIf"], ["class", "mobile", 4, "ngIf"], [1, "laptop"], ["class", "overlay-error", 4, "ngIf"], ["id", "elementToCapture"], ["elementToCapture", ""], [1, "header"], ["src", "assets/images/actofit_logo.svg", 2, "place-self", "center", "width", "100%"], ["src", "assets/images/qr.png", 2, "width", "80%", "place-self", "center"], [1, "heading", 2, "place-self", "center"], [1, "text-center", "little-profile", 2, "margin", "0px"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 2, "padding", "10px 25px!important"], ["fxFlex.gt-xs", "25%", "fxFlex", "100", 1, "profile-block"], [1, "profile-head"], [1, "profile-text"], ["fxLayout", "row", "fxLayoutWrap", "wrap", "fxFlex.gt-xs", "75%", 1, "m-t-3"], ["fxFlex.gt-sm", "25%", "fxFlex.gt-xs", "33.33%", "fxFlex", "100", 1, "profile-block"], ["fxFlex.gt-sm", "25%", "fxFlex", "100", 1, "profile-block"], [1, "profile-text", 2, "text-transform", "capitalize"], [1, "print-button", "heading", 3, "click"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 1, "upper-section"], ["fxFlex.gt-sm", "50%", 1, "analysis-section"], [1, "heading"], [1, "card-main"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 1, "table-row"], ["fxFlex.gt-sm", "10%", 1, "bca-img"], ["src", "assets/images/bodyfat.png"], ["fxFlex.gt-sm", "90%", 1, "bca-text"], ["fxFlex.gt-sm", "85%", 1, "bca-details"], [1, "heading", 2, "margin-left", "0px"], [1, "m-0"], ["fxFlex.gt-sm", "15%", 1, "col-2", 2, "background-color", "#F6F9FC", "border-radius", "0rem 1rem 0rem 0rem"], ["src", "assets/images/fatfree.png"], ["fxFlex.gt-sm", "15%", 1, "col-2", 2, "background-color", "#F6F9FC"], ["src", "assets/images/weight.png"], ["fxFlex.gt-sm", "90%", 1, "bca-text", 2, "border", "none"], ["fxFlex.gt-sm", "15%", 1, "col-2", 2, "background-color", "#F6F9FC", "border-radius", "0rem 0rem 1rem 0rem"], [1, "heading", 2, "margin-top", "15px"], [1, "card-main", "mfa"], [1, "table-row"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 1, "table-row-2"], ["fxFlex.gt-sm", "25%", 1, "col-1"], ["fxFlex.gt-sm", "75%", "fxLayout", "row", "fxLayoutWrap", "wrap", 1, "col-2", "m-t-5"], ["fxFlex.gt-sm", "20%", "width", "20%", 1, "slider-section"], [1, "slider", "slider-1"], [1, "slider-text-in"], [1, "slider-text-up"], [1, "slider", "slider-2"], [1, "slider", "slider-3"], [1, "slider", "slider-4"], [1, "slider", "slider-5"], ["src", "assets/images/marker.png", 1, "slider-dot", 2, "width", "15px", "top", "15px"], [1, "sub-text"], ["fxFlex.gt-sm", "33.33%", "width", "33.33%", 1, "slider-section"], ["fxFlex.gt-sm", "33.33%", "width", "33.33%", 1, "slider", "slider-section"], [1, "slider-3"], [1, "slider-4"], ["fxFlex.gt-sm", "25%", "width", "25%", 1, "slider-section"], ["fxFlex.gt-sm", "75%", "fxLayout", "row", "fxLayoutWrap", "wrap", 1, "col-2", "m-t-5", 2, "margin-left", "20px"], ["fxFlex.gt-sm", "50%", 1, "actofit-health"], [1, "score-donut"], [1, "card"], [1, "percent"], [1, "number"], ["id", "score"], [2, "font-style", "italic", "font-family", "'Roboto', sans-serif", "font-size", "0.7rem", "text-align", "center", "border-bottom", "0.45px solid #EAEAEA", "width", "90%", "margin", "auto", "padding-bottom", "15px"], [1, "score-details"], [1, "heading", 2, "margin", "0px 10px 10px 10px"], ["id", "ind-score", 1, "ind-score"], [1, "m-0", "sub-heading"], ["id", "ind-sub", 1, "m-0", "sub-text"], [1, "ind-score"], [1, "m-0", "sub-text"], [1, "standard"], ["id", "bone-mass"], ["id", "visceral-fat"], ["id", "subcutaneous-fat"], ["id", "protein"], ["id", "metabolic-age"], ["id", "bmr"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 1, "analysis-section-1"], ["fxFlex.gt-sm", "50%", 1, "segmental-graph"], [1, "card-main", "sba", 2, "height", "500px"], ["fxFlex.gt-sm", "25%", 1, "col-1", "heading"], ["fxFlex.gt-sm", "75%", 1, "col-2", 2, "border-radius", "0rem 1rem 0rem 0rem"], ["id", "weightChart", 2, "border-radius", "0rem 1rem 0rem 0rem"], ["fxFlex.gt-sm", "75%", 1, "col-2"], ["id", "smmChart"], ["id", "bfChart"], ["fxFlex.gt-sm", "75%", 1, "col-2", 2, "border-radius", "0rem 0rem 1rem 0rem", "background-color", "transparent"], ["id", "testChart", 2, "background-color", "transparent", "border-bottom", "none"], ["fxFlex.gt-sm", "50%", 1, "segmental"], ["fxLayout", "row", "fxLayoutWrap", "wrap", "id", "segmental-card", 1, "card-main", 2, "height", "500px"], ["id", "fat-overlay", 1, "blur-overlay"], ["fxFlex.gt-sm", "50%", 1, "analysiscol"], [1, "heading", 2, "text-align", "center"], ["src", "assets/images/fatanalysis.png", 1, "an-img"], [1, "an-details", "right-arm"], ["src", "assets/images/rightarm.png", 2, "width", "40px"], [1, "head-text"], [1, "head-value"], [1, "percent-value", "high"], [1, "an-details", "left-arm"], ["src", "assets/images/leftarm.png", 2, "width", "40px"], [1, "an-details", "trunk"], ["src", "assets/images/trunk.png", 2, "width", "40px"], [1, "an-details", "right-leg"], ["src", "assets/images/rightleg.png", 2, "width", "40px"], [1, "an-details", "left-leg"], ["src", "assets/images/leftleg.png", 2, "width", "40px"], ["src", "assets/images/leanmass.png", 1, "an-img"], [1, "overlay-error"], ["src", "assets/images/warning.png", 2, "width", "50px"], [1, "mobile"], [1, "heading", 2, "place-self", "center", "font-size", "smaller"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 2, "padding", "10px 25px!important", "font-size", "12px"], [1, "heading", "sec-head"], [1, "heading", "sec-head", 2, "margin-top", "15px"], ["id", "score", 2, "margin", "10px"], [1, "heading", 2, "margin", "0px 10px 10px 10px", "font-size", "7px"], [1, "card-main", "sba", 2, "height", "280px"], ["fxLayout", "row", "fxLayoutWrap", "wrap", "id", "segmental-card", 1, "card-main", 2, "height", "280px"]], template: function SmartscaleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SmartscaleComponent_div_0_Template, 513, 191, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SmartscaleComponent_div_1_Template, 513, 191, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe], styles: ["@page {\r\n    size: A4;\r\n    margin: 0;\r\n  }\r\n  body[_ngcontent-%COMP%] {\r\n    width: 210mm;\r\n    margin: 0 auto;\r\n  }\r\n  .table-row[_ngcontent-%COMP%]{\r\n    position: relative;\r\n}\r\n  .col-1[_ngcontent-%COMP%], .col-2[_ngcontent-%COMP%], .col-3[_ngcontent-%COMP%]{\r\n    \r\n    position: relative;\r\n    place-self: center;\r\n}\r\n  .col-2[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    text-align: center;\r\n    width: 100%;\r\n    padding: 20px 0px;\r\n    overflow: hidden;\r\n}\r\n  .col-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n    text-align: center;\r\n    height: 100%;\r\n    font-family: 'Lexend', sans-serif;\r\n    font-weight: 600;\r\n}\r\n  .heading[_ngcontent-%COMP%]{\r\n    font-weight: 700;\r\n    font-family: 'Lexend', sans-serif;\r\n    margin-left: 16px;\r\n}\r\n  .col-1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n}\r\n  .col-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n  .sub-text[_ngcontent-%COMP%]{\r\n    font-family: 'Roboto', sans-serif;\r\n    font-weight: 300;\r\n    color: #686868;\r\n}\r\n  .sub-heading[_ngcontent-%COMP%]{\r\n    font-family: 'Lexend', sans-serif;\r\n}\r\n  .ind-score[_ngcontent-%COMP%]   .sub-text[_ngcontent-%COMP%]{\r\n    font-size: 11px;\r\n}\r\n  .bca-img[_ngcontent-%COMP%]{\r\n    margin-right: 10px;\r\n    display: grid;\r\n    padding: 20px 0px;\r\n}\r\n  .bca-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    place-self: center;\r\n    width: 30px;\r\n    justify-content: center;\r\n}\r\n  .bca-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color: #686868;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n  .bca-details[_ngcontent-%COMP%]{\r\n    padding: 20px 0px;\r\n}\r\n  .bca-text[_ngcontent-%COMP%]{\r\n    border-bottom: 0.37px solid #D7D7D7;\r\n    \r\n}\r\n  .slider[_ngcontent-%COMP%]{\r\n    margin: 0px 3px;\r\n}\r\n  .slider-1[_ngcontent-%COMP%]{\r\n    background-color: #0065c9;\r\n    height: 10px;\r\n    border-radius: 9999px;\r\n    position: relative;\r\n}\r\n  .slider-2[_ngcontent-%COMP%]{\r\n    background-color: #2b96f8;\r\n    height: 10px;\r\n    border-radius: 9999px;\r\n\r\n}\r\n  .slider-3[_ngcontent-%COMP%]{\r\n    background-color: #02b464;\r\n    height: 10px;\r\n    border-radius: 9999px;\r\n\r\n}\r\n  .slider-4[_ngcontent-%COMP%]{\r\n    background-color: #ffc000;\r\n    height: 10px;\r\n    border-radius: 9999px;\r\n\r\n}\r\n  .slider-5[_ngcontent-%COMP%]{\r\n    background-color: #ff503c;\r\n    height: 10px;\r\n    border-radius: 0px 9999px 9999px 0px;\r\n    border-radius: 9999px;\r\n}\r\n  .slider-text-in[_ngcontent-%COMP%]{\r\n    \r\n    font-family: 'Outfit', sans-serif !important;\r\n    font-weight: 300 !important;\r\n    font-size: small;\r\n    margin: 5px 0px 0px 0px;\r\n}\r\n  .slider-section[_ngcontent-%COMP%]{\r\n    position: relative;\r\n}\r\n  .slider-text-up[_ngcontent-%COMP%]{\r\n    height: -moz-max-content !important;\r\n    height: max-content !important;\r\n    font-family: 'Outfit', sans-serif !important;\r\n    font-weight: 300 !important;\r\n    font-size: small;\r\n    position: absolute;\r\n    top: -35px;\r\n    left: -10px;\r\n}\r\n  #first-text[_ngcontent-%COMP%]{\r\n    left: 18%;\r\n}\r\n  #second-text[_ngcontent-%COMP%]{\r\n    left: 38%;\r\n}\r\n  #third-text[_ngcontent-%COMP%]{\r\n    left: 58%;\r\n}\r\n  #fourth-text[_ngcontent-%COMP%]{\r\n    left: 78%;\r\n}\r\n  .slider-dot[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 12.5px !important;\r\n    top: 26px !important;\r\n}\r\n  .table-row-2[_ngcontent-%COMP%]{\r\n    margin: 30px 0px;\r\n}\r\n  .profile-icon[_ngcontent-%COMP%]{\r\n    width: 40px;\r\n    height: -moz-min-content;\r\n    height: min-content;\r\n    place-self: center;\r\n}\r\n  .profile-head[_ngcontent-%COMP%]{\r\n    color: #858484;\r\n    font-family: 'Lexend', sans-serif;\r\n\r\n}\r\n  .little-profile[_ngcontent-%COMP%]{\r\n    background: #F6F9FC;\r\n    box-shadow: none !important;\r\n    border-top: 0.81px solid #E8E8E8;\r\n    border-radius: none !important;\r\n}\r\n  .profile-text[_ngcontent-%COMP%]{\r\n    \r\n    \r\n    margin-left: 10px;\r\n    font-family: 'Lexend', sans-serif;\r\n    font-weight: 600;\r\n\r\n}\r\n  .profile-block[_ngcontent-%COMP%]{\r\n    display: flex;\r\n}\r\n  .card[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    background-color: #ffffff;\r\n    margin: 0 20px;\r\n    \r\n  }\r\n  .card[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%] {\r\n    position: relative;\r\n  }\r\n  .card[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 210px;\r\n    height: 210px;\r\n    transform: rotate(-90deg);\r\n  }\r\n  .card[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    fill: none;\r\n    stroke: #f0f0f0;\r\n    stroke-width: 10;\r\n    stroke-linecap: round;\r\n  }\r\n  .card[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]:last-of-type {\r\n    stroke-dasharray: 312.5px;\r\n    stroke-dashoffset: calc(312.5px - (312.5px * var(--percent)) / 100);\r\n    stroke: #3498db; \r\n  }\r\n  .card[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\r\n    \r\n    font-family: 'Lexend', sans-serif;\r\n\r\n  }\r\n  .card[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n    font-size: 2rem;\r\n  }\r\n  .card[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n  }\r\n  .card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin: 25px 0 0;\r\n  }\r\n  .card[_ngcontent-%COMP%]:nth-child(1)   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]:last-of-type {\r\n    stroke: #f39c12;\r\n  }\r\n  .card[_ngcontent-%COMP%]:nth-child(2)   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]:last-of-type {\r\n    stroke: #2ecc71;\r\n  }\r\n  .ind-score[_ngcontent-%COMP%]{\r\n    \r\n    padding: 10px;\r\n    \r\n}\r\n  .mobile-ind[_ngcontent-%COMP%]{\r\n    padding: 5px 10px;\r\n}\r\n  .mobile-text[_ngcontent-%COMP%]{\r\n    font-size: 8px !important;\r\n}\r\n  .mobile-less-margin[_ngcontent-%COMP%]{\r\n    margin: 15px !important;\r\n}\r\n  .ind-score[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n}\r\n  \r\n  .score-donut[_ngcontent-%COMP%]{\r\n    place-self: center;\r\n}\r\n  .score-details[_ngcontent-%COMP%]{\r\n    padding: 10px 15px;\r\n}\r\n  .card-main[_ngcontent-%COMP%]{\r\n    border: 0.37px solid #CFCFCF;\r\n    border-radius: 1rem;\r\n}\r\n  .col-1[_ngcontent-%COMP%]{\r\n    \r\n    font-family: 'Lexend', sans-serif;\r\n    font-weight: 600;\r\n    margin-left: 15px;\r\n}\r\n  .mfa[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]{\r\n    background-color: #F6F9FC;\r\n    border: 0.32px solid #E0E0DF;\r\n    border-radius: 1rem;\r\n    padding: 30px 10px 15px 10px;\r\n    margin-right: 15px;\r\n}\r\n  .standard[_ngcontent-%COMP%]{\r\n    color: #22B573; border: 0.4px solid #22B57380; border-radius: 9999px; padding: 2px 5px; font-family: 'Outfit', sans-serif; background: rgba(34, 181, 115, 0.05); font-weight: 600;\r\n    font-size: 10px;\r\n}\r\n  .not-standard[_ngcontent-%COMP%]{\r\n    color: #FA4C4C; border: 0.4px solid rgba(250, 76, 76, 0.5); border-radius: 9999px; padding: 2px 5px; font-family: 'Outfit', sans-serif; background: rgba(250, 76, 76, 0.05); font-weight: 600;\r\n    font-size: 10px;\r\n}\r\n  .low[_ngcontent-%COMP%]{\r\n    color:#2B96F8;\r\n    border: 0.4px solid #2B96F880; border-radius: 9999px; padding: 2px 5px; font-family: 'Outfit', sans-serif; background: rgba(43, 150, 248, 0.05); font-weight: 600;\r\n    font-size: 10px;\r\n}\r\n  .analysiscol[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n    position: relative;\r\n}\r\n  .an-img[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    display: block;\r\n    margin: 100px auto 20px auto;   \r\n}\r\n  .right-arm[_ngcontent-%COMP%]{\r\n    top: 90px;\r\n    left: 30px;\r\n}\r\n  .left-arm[_ngcontent-%COMP%]{\r\n    top: 90px;\r\n    right: 30px;\r\n}\r\n  .trunk[_ngcontent-%COMP%]{\r\ntop: 240px;\r\nleft: 20px;\r\n}\r\n  .right-leg[_ngcontent-%COMP%]{\r\n    bottom: 30px;\r\n    left: 30px;\r\n\r\n}\r\n  .left-leg[_ngcontent-%COMP%]{\r\n    bottom: 30px;\r\n    right: 30px;\r\n\r\n}\r\n  .an-details[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    text-align: center;\r\n}\r\n  .an-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: x-small;\r\n}\r\n  .head-text[_ngcontent-%COMP%]{\r\n    color: #686868;\r\n    font-weight: 500;\r\n}\r\n  .high[_ngcontent-%COMP%]{\r\n    color: #FE6E72;\r\n}\r\n  .norm[_ngcontent-%COMP%]{\r\n    color: #22B573;\r\n}\r\n  canvas[_ngcontent-%COMP%]{\r\n    background-color: #F6F9FC;\r\n    margin: 0;\r\n    border-bottom: 0.4px solid #D7D7D7;\r\n}\r\n  .sba[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]{\r\n    padding: 0px;\r\n    background-color: #F6F9FC;\r\n}\r\n  .header[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    grid-template-columns: 15% 60% 10% 15%;\r\n    position: relative;\r\n    margin-bottom: 20px;\r\n    margin-top: 0px;\r\n}\r\n  .page-content[_ngcontent-%COMP%]{\r\n    padding: 10px !important;\r\n}\r\n  .print-button[_ngcontent-%COMP%]{\r\n    border: 0.37px solid #CFCFCF;\r\n    border-radius: 0.4rem;\r\n    background-color: black;\r\n    padding: 10px 20px;\r\n    color: white;\r\n    font-size: 1.4rem;\r\n    margin-top: 10px;\r\n    position: absolute;\r\n    right: 20px;\r\n    cursor: pointer;\r\n}\r\n  \r\n  #loader[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    z-index: 9999;\r\n    display: none;\r\n  }\r\n  #loader[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    border: 3px solid #f3f3f3;\r\n    border-top: 3px solid #3498db;\r\n    border-radius: 50%;\r\n    width: 20px;\r\n    height: 20px;\r\n    animation: spin 1s linear infinite;\r\n  }\r\n  @keyframes spin {\r\n    0% { transform: translate(-50%, -50%) rotate(0deg); }\r\n    100% { transform: translate(-50%, -50%) rotate(360deg); }\r\n  }\r\n  .overlay-error[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    background-color: white;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 9999;\r\n\r\n}\r\n  .overlay-error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    text-align: center;\r\n}\r\n  .negzindex[_ngcontent-%COMP%]{\r\n    z-index: -1 !important;\r\n}\r\n  .blur-overlay[_ngcontent-%COMP%]{\r\n    \r\n  \r\n  \r\n  position: absolute;\r\n  width: 100%;\r\n  background-color: #F6F5F1;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 100;\r\n  border-radius: 1rem;\r\n  display: none;\r\n}\r\n  .blur-overlay[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-family: 'Lexend', sans-serif;\r\n    font-weight: 600;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    text-align: center;\r\n    transform: translate(-50%, -50%);\r\n    font-size: x-large;\r\n    margin: 0;\r\n    width: 80%;\r\n}\r\n  .show[_ngcontent-%COMP%]{\r\n    display: block !important;\r\n}\r\n  \r\n  .mobile[_ngcontent-%COMP%]   .sec-head[_ngcontent-%COMP%]{\r\n    font-size: 7px;\r\n}\r\n  .mobile[_ngcontent-%COMP%]   .ind-score[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font-size: 4.5px;\r\n    line-height: 9.5px !important;\r\n}\r\n  .mobile[_ngcontent-%COMP%]   .ind-score[_ngcontent-%COMP%]   .sub-text[_ngcontent-%COMP%]{\r\n    font-size: 3.5px;\r\n}\r\n  .mobile[_ngcontent-%COMP%]   .standard[_ngcontent-%COMP%]{\r\n    font-size: 3.5px;\r\n}\r\n  .mobile[_ngcontent-%COMP%]   .low[_ngcontent-%COMP%]{\r\n    font-size: 3.5px;\r\n}\r\n  .mobile[_ngcontent-%COMP%]   .not-standard[_ngcontent-%COMP%]{\r\n    font-size: 3.5px;\r\n}\r\n  .mobile[_ngcontent-%COMP%]   .ind-score[_ngcontent-%COMP%]{\r\n    padding: 0px 10px;\r\n}\r\n  .mobile[_ngcontent-%COMP%]   .bca-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 10px;\r\n}\r\n  .mobile[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 10px;\r\n}\r\n  .mobile[_ngcontent-%COMP%]   .col-1[_ngcontent-%COMP%]{\r\n    font-size: small;\r\n}\r\n  .mobile[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font-size: 1.4rem;\r\n}\r\n  .mobile[_ngcontent-%COMP%]   .card-main[_ngcontent-%COMP%]{\r\n    margin-bottom: 8px;\r\n}\r\n  .mobile[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    line-height: 0px;\r\n}\r\n  .mobile[_ngcontent-%COMP%]   .bca-details[_ngcontent-%COMP%]{\r\n    padding: 5px 0px;\r\n}\r\n  .mobile[_ngcontent-%COMP%]   .bca-details[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n}\r\n  .mobile[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]{\r\n    padding: 5px 0px;\r\n}\r\n  .mobile[_ngcontent-%COMP%]   .bca-img[_ngcontent-%COMP%]{\r\n    padding: 5px 0px;\r\n}\r\n  .mobile[_ngcontent-%COMP%]   .slider-dot[_ngcontent-%COMP%]{\r\n    top: 10px !important;\r\n}\r\n  .mobile[_ngcontent-%COMP%]   .an-img[_ngcontent-%COMP%]{\r\n    margin: 10px auto 10px auto;\r\n}\r\n  .mobile[_ngcontent-%COMP%]   .right-arm[_ngcontent-%COMP%]{\r\n    top: 50px;\r\n    left: 10px;\r\n}\r\n  .mobile[_ngcontent-%COMP%]   .left-arm[_ngcontent-%COMP%]{\r\n    top: 50px;\r\n    right: 10px;\r\n}\r\n  .mobile[_ngcontent-%COMP%]   .trunk[_ngcontent-%COMP%]{\r\n    top: 120px;\r\n    left: 12px;\r\n}\r\n  .mobile[_ngcontent-%COMP%]   .an-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 25px !important;\r\n}\r\n  .mbile[_ngcontent-%COMP%]   .an-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: x-small;\r\n}\r\n  .mobile[_ngcontent-%COMP%]   .right-leg[_ngcontent-%COMP%]{\r\n    bottom: 10px;\r\n}\r\n  .mobile[_ngcontent-%COMP%]   .left-leg[_ngcontent-%COMP%]{\r\n    bottom: 10px;\r\n}\r\n  .mobile[_ngcontent-%COMP%]   .print-button[_ngcontent-%COMP%]{\r\n    font-size: 1.1rem;\r\n}\r\n  .mobile[_ngcontent-%COMP%]   .mfa[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]{\r\n    padding: 15px 0px 5px 0px;\r\n}\r\n  .mobile[_ngcontent-%COMP%]   .slider-text-up[_ngcontent-%COMP%]{\r\n    top: -25px;\r\n}\r\n  .mobile[_ngcontent-%COMP%]   .table-row-2[_ngcontent-%COMP%]{\r\n    margin: 23px 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0c2NhbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFFBQVE7SUFDUixTQUFTO0VBQ1g7RUFDQTtJQUNFLFlBQVk7SUFDWixjQUFjO0VBQ2hCO0VBRUY7SUFDSSxrQkFBa0I7QUFDdEI7RUFFQTtJQUNJLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0VBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0VBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsZ0JBQWdCO0FBQ3BCO0VBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLGlCQUFpQjtBQUNyQjtFQUNBO0lBQ0ksV0FBVztBQUNmO0VBQ0E7SUFDSSxpQ0FBaUM7QUFDckM7RUFDQTtJQUNJLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtFQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDO0VBQ0E7SUFDSSxlQUFlO0FBQ25CO0VBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjtFQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7RUFDQTtJQUNJLGNBQWM7SUFDZCxpQ0FBaUM7QUFDckM7RUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtFQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLDBCQUEwQjtBQUM5QjtFQUNBO0lBQ0ksZUFBZTtBQUNuQjtFQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCO0VBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHFCQUFxQjs7QUFFekI7RUFDQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1oscUJBQXFCOztBQUV6QjtFQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixxQkFBcUI7O0FBRXpCO0VBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxxQkFBcUI7QUFDekI7RUFDQTtJQUNJO2lCQUNhO0lBQ2IsNENBQTRDO0lBQzVDLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCO0VBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7RUFDQTtJQUNJLG1DQUE4QjtJQUE5Qiw4QkFBOEI7SUFDOUIsNENBQTRDO0lBQzVDLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7RUFDQTtJQUNJLFNBQVM7QUFDYjtFQUVBO0lBQ0ksU0FBUztBQUNiO0VBQ0E7SUFDSSxTQUFTO0FBQ2I7RUFDQTtJQUNJLFNBQVM7QUFDYjtFQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixvQkFBb0I7QUFDeEI7RUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtFQUNBO0lBQ0ksV0FBVztJQUNYLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0VBQ0E7SUFDSSxjQUFjO0lBQ2QsaUNBQWlDOztBQUVyQztFQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixnQ0FBZ0M7SUFDaEMsOEJBQThCO0FBQ2xDO0VBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixpQ0FBaUM7SUFDakMsZ0JBQWdCOztBQUVwQjtFQUNBO0lBQ0ksYUFBYTtBQUNqQjtFQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Q7b0JBQ2dCO0VBQ2xCO0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtFQUMzQjtFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixxQkFBcUI7RUFDdkI7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixtRUFBbUU7SUFDbkUsZUFBZTtFQUNqQjtFQUVBO0lBQ0U7Ozt1Q0FHbUM7SUFDbkMsaUNBQWlDOztFQUVuQztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUVBO0lBQ0UsZUFBZTtFQUNqQjtFQUVBO0lBQ0UsZUFBZTtFQUNqQjtFQUVGO0lBQ0ksNkJBQTZCO0lBQzdCLGFBQWE7O0FBRWpCO0VBQ0E7SUFDSSxpQkFBaUI7QUFDckI7RUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtFQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0VBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0VBRUE7O0dBRUc7RUFDSDtJQUNJLGtCQUFrQjtBQUN0QjtFQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0VBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsbUJBQW1CO0FBQ3ZCO0VBRUE7SUFDSSx3QkFBd0I7SUFDeEIsaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7RUFFQTtJQUNJLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixrQkFBa0I7QUFDdEI7RUFFQTtJQUNJLGNBQWMsRUFBRSw2QkFBNkIsRUFBRSxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBRSxpQ0FBaUMsRUFBRSxvQ0FBb0MsRUFBRSxnQkFBZ0I7SUFDakwsZUFBZTtBQUNuQjtFQUNBO0lBQ0ksY0FBYyxFQUFFLDBDQUEwQyxFQUFFLHFCQUFxQixFQUFFLGdCQUFnQixFQUFFLGlDQUFpQyxFQUFFLG1DQUFtQyxFQUFFLGdCQUFnQjtJQUM3TCxlQUFlO0FBQ25CO0VBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCLEVBQUUscUJBQXFCLEVBQUUsZ0JBQWdCLEVBQUUsaUNBQWlDLEVBQUUsb0NBQW9DLEVBQUUsZ0JBQWdCO0lBQ2pLLGVBQWU7QUFDbkI7RUFDQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7RUFDQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsNEJBQTRCO0FBQ2hDO0VBQ0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkO0VBQ0E7SUFDSSxTQUFTO0lBQ1QsV0FBVztBQUNmO0VBQ0E7QUFDQSxVQUFVO0FBQ1YsVUFBVTtBQUNWO0VBQ0E7SUFDSSxZQUFZO0lBQ1osVUFBVTs7QUFFZDtFQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7O0FBRWY7RUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7RUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCO0VBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0VBQ0E7SUFDSSxjQUFjO0FBQ2xCO0VBQ0E7SUFDSSxjQUFjO0FBQ2xCO0VBRUE7SUFDSSx5QkFBeUI7SUFDekIsU0FBUztJQUNULGtDQUFrQztBQUN0QztFQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3QjtFQUNBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7RUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtFQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtBQUNuQjtFQUVBOzs7Ozs7Ozs7R0FTRztFQUVIO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLGFBQWE7RUFDZjtFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQ0FBa0M7RUFDcEM7RUFFQTtJQUNFLEtBQUssNkNBQTZDLEVBQUU7SUFDcEQsT0FBTywrQ0FBK0MsRUFBRTtFQUMxRDtFQUVGO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLE1BQU07SUFDTixPQUFPO0lBQ1AsYUFBYTs7QUFFakI7RUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxrQkFBa0I7QUFDdEI7RUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtFQUVBO0lBQ0ksMkNBQTJDO0VBQzdDLDhDQUE4QztFQUM5Qzt3Q0FDc0M7RUFDdEMsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7RUFFQTtJQUNJLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7QUFDZDtFQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0VBRUEsV0FBVztFQUVYO0lBQ0ksY0FBYztBQUNsQjtFQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDZCQUE2QjtBQUNqQztFQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0VBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7RUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtFQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0VBQ0E7SUFDSSxpQkFBaUI7QUFDckI7RUFFQTtJQUNJLGVBQWU7QUFDbkI7RUFDQTtJQUNJLGVBQWU7QUFDbkI7RUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtFQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0VBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7RUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtFQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0VBQ0E7SUFDSSxlQUFlO0FBQ25CO0VBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7RUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtFQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0VBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7RUFDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7RUFDQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7RUFDQTtJQUNJLFVBQVU7SUFDVixVQUFVO0FBQ2Q7RUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtFQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0VBQ0E7SUFDSSxZQUFZO0FBQ2hCO0VBQ0E7SUFDSSxZQUFZO0FBQ2hCO0VBQ0E7SUFDSSxpQkFBaUI7QUFDckI7RUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtFQUNBO0lBQ0ksVUFBVTtBQUNkO0VBQ0E7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic21hcnRzY2FsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHBhZ2Uge1xyXG4gICAgc2l6ZTogQTQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIGJvZHkge1xyXG4gICAgd2lkdGg6IDIxMG1tO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuLnRhYmxlLXJvd3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNvbC0xLC5jb2wtMiwgLmNvbC0ze1xyXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xyXG59XHJcbi5jb2wtMntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweCAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5jb2wtMiBwe1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogJ0xleGVuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uaGVhZGluZ3tcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LWZhbWlseTogJ0xleGVuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxufVxyXG4uY29sLTEgaW1ne1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbn1cclxuLmNvbC0xIHB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnN1Yi10ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiAjNjg2ODY4O1xyXG59XHJcbi5zdWItaGVhZGluZ3tcclxuICAgIGZvbnQtZmFtaWx5OiAnTGV4ZW5kJywgc2Fucy1zZXJpZjtcclxufVxyXG4uaW5kLXNjb3JlIC5zdWItdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG4uYmNhLWltZ3tcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxufVxyXG4uYmNhLWltZyBpbWd7XHJcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5iY2EtZGV0YWlscyBwe1xyXG4gICAgY29sb3I6ICM2ODY4Njg7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmJjYS1kZXRhaWxze1xyXG4gICAgcGFkZGluZzogMjBweCAwcHg7XHJcbn1cclxuLmJjYS10ZXh0e1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC4zN3B4IHNvbGlkICNEN0Q3RDc7XHJcbiAgICAvKiBwYWRkaW5nLWJvdHRvbTogMTBweDsgKi9cclxufVxyXG4uc2xpZGVye1xyXG4gICAgbWFyZ2luOiAwcHggM3B4O1xyXG59XHJcbi5zbGlkZXItMXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY1Yzk7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnNsaWRlci0ye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiOTZmODtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcclxuXHJcbn1cclxuLnNsaWRlci0ze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyYjQ2NDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcclxuXHJcbn1cclxuLnNsaWRlci00e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzAwMDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcclxuXHJcbn1cclxuLnNsaWRlci01e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTAzYztcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCA5OTk5cHggOTk5OXB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcclxufVxyXG4uc2xpZGVyLXRleHQtaW57XHJcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC00NXB4OyAqL1xyXG4gICAgZm9udC1mYW1pbHk6ICdPdXRmaXQnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgbWFyZ2luOiA1cHggMHB4IDBweCAwcHg7XHJcbn1cclxuLnNsaWRlci1zZWN0aW9ue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zbGlkZXItdGV4dC11cHtcclxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3V0Zml0Jywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTM1cHg7XHJcbiAgICBsZWZ0OiAtMTBweDtcclxufVxyXG4jZmlyc3QtdGV4dHtcclxuICAgIGxlZnQ6IDE4JTtcclxufVxyXG5cclxuI3NlY29uZC10ZXh0e1xyXG4gICAgbGVmdDogMzglO1xyXG59XHJcbiN0aGlyZC10ZXh0e1xyXG4gICAgbGVmdDogNTglO1xyXG59XHJcbiNmb3VydGgtdGV4dHtcclxuICAgIGxlZnQ6IDc4JTtcclxufVxyXG4uc2xpZGVyLWRvdHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMi41cHggIWltcG9ydGFudDtcclxuICAgIHRvcDogMjZweCAhaW1wb3J0YW50O1xyXG59XHJcbi50YWJsZS1yb3ctMntcclxuICAgIG1hcmdpbjogMzBweCAwcHg7XHJcbn1cclxuLnByb2ZpbGUtaWNvbntcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcclxuICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcclxufVxyXG4ucHJvZmlsZS1oZWFke1xyXG4gICAgY29sb3I6ICM4NTg0ODQ7XHJcbiAgICBmb250LWZhbWlseTogJ0xleGVuZCcsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcbi5saXR0bGUtcHJvZmlsZXtcclxuICAgIGJhY2tncm91bmQ6ICNGNkY5RkM7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItdG9wOiAwLjgxcHggc29saWQgI0U4RThFODtcclxuICAgIGJvcmRlci1yYWRpdXM6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4ucHJvZmlsZS10ZXh0e1xyXG4gICAgLyogcGxhY2Utc2VsZjogY2VudGVyOyAqL1xyXG4gICAgLyogZm9udC1zaXplOiBtZWRpdW07ICovXHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGV4ZW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG59XHJcbi5wcm9maWxlLWJsb2Nre1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW46IDAgMjBweDtcclxuICAgIC8qIHdpZHRoOiAyODBweDtcclxuICAgIGhlaWdodDogMzUwcHg7ICovXHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkIC5wZXJjZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLmNhcmQgc3ZnIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAyMTBweDtcclxuICAgIGhlaWdodDogMjEwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gIH1cclxuICBcclxuICAuY2FyZCBzdmcgY2lyY2xlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmlsbDogbm9uZTtcclxuICAgIHN0cm9rZTogI2YwZjBmMDtcclxuICAgIHN0cm9rZS13aWR0aDogMTA7XHJcbiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkIHN2ZyBjaXJjbGU6bGFzdC1vZi10eXBlIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDMxMi41cHg7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogY2FsYygzMTIuNXB4IC0gKDMxMi41cHggKiB2YXIoLS1wZXJjZW50KSkgLyAxMDApO1xyXG4gICAgc3Ryb2tlOiAjMzQ5OGRiOyBcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQgLm51bWJlciB7XHJcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAqL1xyXG4gICAgZm9udC1mYW1pbHk6ICdMZXhlbmQnLCBzYW5zLXNlcmlmO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgLmNhcmQgLm51bWJlciBoMyB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuICBcclxuICAuY2FyZCAubnVtYmVyIGgzIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQgLnRpdGxlIGgyIHtcclxuICAgIG1hcmdpbjogMjVweCAwIDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkOm50aC1jaGlsZCgxKSBzdmcgY2lyY2xlOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICBzdHJva2U6ICNmMzljMTI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkOm50aC1jaGlsZCgyKSBzdmcgY2lyY2xlOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICBzdHJva2U6ICMyZWNjNzE7XHJcbiAgfVxyXG5cclxuLmluZC1zY29yZXtcclxuICAgIC8qIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkOyAqL1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIFxyXG59XHJcbi5tb2JpbGUtaW5ke1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbn1cclxuLm1vYmlsZS10ZXh0e1xyXG4gICAgZm9udC1zaXplOiA4cHggIWltcG9ydGFudDtcclxufVxyXG4ubW9iaWxlLWxlc3MtbWFyZ2lue1xyXG4gICAgbWFyZ2luOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmluZC1zY29yZSBoM3tcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi8qIC5pbmQtc2NvcmUgcHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufSAqL1xyXG4uc2NvcmUtZG9udXR7XHJcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XHJcbn1cclxuLnNjb3JlLWRldGFpbHN7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbn1cclxuLmNhcmQtbWFpbntcclxuICAgIGJvcmRlcjogMC4zN3B4IHNvbGlkICNDRkNGQ0Y7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG59XHJcblxyXG4uY29sLTF7XHJcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXHJcbiAgICBmb250LWZhbWlseTogJ0xleGVuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5tZmEgLmNvbC0ye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjlGQztcclxuICAgIGJvcmRlcjogMC4zMnB4IHNvbGlkICNFMEUwREY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMzBweCAxMHB4IDE1cHggMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuLnN0YW5kYXJke1xyXG4gICAgY29sb3I6ICMyMkI1NzM7IGJvcmRlcjogMC40cHggc29saWQgIzIyQjU3MzgwOyBib3JkZXItcmFkaXVzOiA5OTk5cHg7IHBhZGRpbmc6IDJweCA1cHg7IGZvbnQtZmFtaWx5OiAnT3V0Zml0Jywgc2Fucy1zZXJpZjsgYmFja2dyb3VuZDogcmdiYSgzNCwgMTgxLCAxMTUsIDAuMDUpOyBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbi5ub3Qtc3RhbmRhcmR7XHJcbiAgICBjb2xvcjogI0ZBNEM0QzsgYm9yZGVyOiAwLjRweCBzb2xpZCByZ2JhKDI1MCwgNzYsIDc2LCAwLjUpOyBib3JkZXItcmFkaXVzOiA5OTk5cHg7IHBhZGRpbmc6IDJweCA1cHg7IGZvbnQtZmFtaWx5OiAnT3V0Zml0Jywgc2Fucy1zZXJpZjsgYmFja2dyb3VuZDogcmdiYSgyNTAsIDc2LCA3NiwgMC4wNSk7IGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5sb3d7XHJcbiAgICBjb2xvcjojMkI5NkY4O1xyXG4gICAgYm9yZGVyOiAwLjRweCBzb2xpZCAjMkI5NkY4ODA7IGJvcmRlci1yYWRpdXM6IDk5OTlweDsgcGFkZGluZzogMnB4IDVweDsgZm9udC1mYW1pbHk6ICdPdXRmaXQnLCBzYW5zLXNlcmlmOyBiYWNrZ3JvdW5kOiByZ2JhKDQzLCAxNTAsIDI0OCwgMC4wNSk7IGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuLmFuYWx5c2lzY29se1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmFuLWltZ3tcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMTAwcHggYXV0byAyMHB4IGF1dG87ICAgXHJcbn1cclxuLnJpZ2h0LWFybXtcclxuICAgIHRvcDogOTBweDtcclxuICAgIGxlZnQ6IDMwcHg7XHJcbn1cclxuLmxlZnQtYXJte1xyXG4gICAgdG9wOiA5MHB4O1xyXG4gICAgcmlnaHQ6IDMwcHg7XHJcbn1cclxuLnRydW5re1xyXG50b3A6IDI0MHB4O1xyXG5sZWZ0OiAyMHB4O1xyXG59XHJcbi5yaWdodC1sZWd7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgICBsZWZ0OiAzMHB4O1xyXG5cclxufVxyXG4ubGVmdC1sZWd7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgICByaWdodDogMzBweDtcclxuXHJcbn1cclxuLmFuLWRldGFpbHN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmFuLWRldGFpbHMgcHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxufVxyXG4uaGVhZC10ZXh0e1xyXG4gICAgY29sb3I6ICM2ODY4Njg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5oaWdoe1xyXG4gICAgY29sb3I6ICNGRTZFNzI7XHJcbn1cclxuLm5vcm17XHJcbiAgICBjb2xvcjogIzIyQjU3MztcclxufVxyXG5cclxuY2FudmFze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjlGQztcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlci1ib3R0b206IDAuNHB4IHNvbGlkICNEN0Q3RDc7XHJcbn1cclxuXHJcbi5zYmEgLmNvbC0ye1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjlGQztcclxufVxyXG4uaGVhZGVye1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUlIDYwJSAxMCUgMTUlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG4ucGFnZS1jb250ZW50e1xyXG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5wcmludC1idXR0b257XHJcbiAgICBib3JkZXI6IDAuMzdweCBzb2xpZCAjQ0ZDRkNGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpe1xyXG4gICAgXHJcbiAgICAuc2NvcmUtZGV0YWlscyBoM3tcclxuICAgICAgICBsaW5lLWhlaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmluZC1zY29yZXtcclxuICAgICAgICBwYWRkaW5nOiA3LjZweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbn0gKi9cclxuXHJcbiNsb2FkZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gICNsb2FkZXIgLnNwaW5uZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZjNmM2YzO1xyXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICMzNDk4ZGI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgzNjBkZWcpOyB9XHJcbiAgfVxyXG4gIFxyXG4ub3ZlcmxheS1lcnJvcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuXHJcbn1cclxuLm92ZXJsYXktZXJyb3IgcHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm5lZ3ppbmRleHtcclxuICAgIHotaW5kZXg6IC0xICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ibHVyLW92ZXJsYXl7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDIwOCwgMjA4LCAyMDgsIDAuMTUpOyAqL1xyXG4gIC8qIGJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYmEoOCwgNywgMTYsIDAuNik7ICovXHJcbiAgLyogYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpOyAqL1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNUYxO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uYmx1ci1vdmVybGF5IHB7XHJcbiAgICBmb250LWZhbWlseTogJ0xleGVuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5zaG93e1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogbW9iaWxlICovXHJcblxyXG4ubW9iaWxlIC5zZWMtaGVhZHtcclxuICAgIGZvbnQtc2l6ZTogN3B4O1xyXG59XHJcbi5tb2JpbGUgLmluZC1zY29yZSBoM3tcclxuICAgIGZvbnQtc2l6ZTogNC41cHg7XHJcbiAgICBsaW5lLWhlaWdodDogOS41cHggIWltcG9ydGFudDtcclxufVxyXG4ubW9iaWxlIC5pbmQtc2NvcmUgLnN1Yi10ZXh0e1xyXG4gICAgZm9udC1zaXplOiAzLjVweDtcclxufVxyXG4ubW9iaWxlIC5zdGFuZGFyZHtcclxuICAgIGZvbnQtc2l6ZTogMy41cHg7XHJcbn1cclxuLm1vYmlsZSAubG93e1xyXG4gICAgZm9udC1zaXplOiAzLjVweDtcclxufVxyXG4ubW9iaWxlIC5ub3Qtc3RhbmRhcmR7XHJcbiAgICBmb250LXNpemU6IDMuNXB4O1xyXG59XHJcbi5tb2JpbGUgLmluZC1zY29yZXtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG59XHJcblxyXG4ubW9iaWxlIC5iY2EtZGV0YWlscyBwe1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbi5tb2JpbGUgLmNvbC0yIHB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuLm1vYmlsZSAuY29sLTF7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcbi5tb2JpbGUgLmNhcmQgLm51bWJlciBoM3tcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG59XHJcbi5tb2JpbGUgLmNhcmQtbWFpbntcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG4ubW9iaWxlIGg0e1xyXG4gICAgbGluZS1oZWlnaHQ6IDBweDtcclxufVxyXG4ubW9iaWxlIC5iY2EtZGV0YWlsc3tcclxuICAgIHBhZGRpbmc6IDVweCAwcHg7XHJcbn1cclxuLm1vYmlsZSAuYmNhLWRldGFpbHMgLmhlYWRpbmd7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLm1vYmlsZSAuY29sLTJ7XHJcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xyXG59XHJcbi5tb2JpbGUgLmJjYS1pbWd7XHJcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xyXG59XHJcbi5tb2JpbGUgLnNsaWRlci1kb3R7XHJcbiAgICB0b3A6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4ubW9iaWxlIC5hbi1pbWd7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0byAxMHB4IGF1dG87XHJcbn1cclxuLm1vYmlsZSAucmlnaHQtYXJte1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gICAgbGVmdDogMTBweDtcclxufVxyXG4ubW9iaWxlIC5sZWZ0LWFybXtcclxuICAgIHRvcDogNTBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG59XHJcbi5tb2JpbGUgLnRydW5re1xyXG4gICAgdG9wOiAxMjBweDtcclxuICAgIGxlZnQ6IDEycHg7XHJcbn1cclxuLm1vYmlsZSAuYW4tZGV0YWlscyBpbWd7XHJcbiAgICB3aWR0aDogMjVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYmlsZSAuYW4tZGV0YWlscyBwe1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG59XHJcbi5tb2JpbGUgLnJpZ2h0LWxlZ3tcclxuICAgIGJvdHRvbTogMTBweDtcclxufVxyXG4ubW9iaWxlIC5sZWZ0LWxlZ3tcclxuICAgIGJvdHRvbTogMTBweDtcclxufVxyXG4ubW9iaWxlIC5wcmludC1idXR0b257XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG4ubW9iaWxlIC5tZmEgLmNvbC0ye1xyXG4gICAgcGFkZGluZzogMTVweCAwcHggNXB4IDBweDtcclxufVxyXG4ubW9iaWxlIC5zbGlkZXItdGV4dC11cHtcclxuICAgIHRvcDogLTI1cHg7XHJcbn1cclxuLm1vYmlsZSAudGFibGUtcm93LTJ7XHJcbiAgICBtYXJnaW46IDIzcHggMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 6729:
/*!************************************************!*\
  !*** ./src/app/layouts/full/full.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullComponent": () => (/* binding */ FullComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ 9910);
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/menu-items/menu-items */ 2647);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/spinner.component */ 3812);






/** @title Responsive sidenav */
class FullComponent {
    constructor(changeDetectorRef, media, menuItems) {
        this.menuItems = menuItems;
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    ngAfterViewInit() { }
}
FullComponent.ɵfac = function FullComponent_Factory(t) { return new (t || FullComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__.MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_0__.MenuItems)); };
FullComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FullComponent, selectors: [["app-full-layout"]], decls: 6, vars: 2, consts: [[1, "main-container"], [1, "example-sidenav-container"], [1, "page-wrapper"], [1, "page-content"]], template: function FullComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mat-sidenav-container", 1)(2, "mat-sidenav-content", 2)(3, "div", 3)(4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("margin-top", ctx.mobileQuery.matches ? 0 : 0, "px");
    } }, dependencies: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavContent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_1__.SpinnerComponent], encapsulation: 2 });


/***/ }),

/***/ 1183:
/*!*********************************************************!*\
  !*** ./src/app/layouts/full/header/header.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppHeaderComponent": () => (/* binding */ AppHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ 2796);




class AppHeaderComponent {
}
AppHeaderComponent.ɵfac = function AppHeaderComponent_Factory(t) { return new (t || AppHeaderComponent)(); };
AppHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppHeaderComponent, selectors: [["app-header"]], decls: 22, vars: 1, consts: [["href", "https://wrappixel.com/templates/materialpro-angular-dashboard/", "mat-raised-button", "", "color", "warn", 1, "m-r-20", "hidden-sm-up"], ["mat-icon-button", "", 1, "m-r-5", 3, "matMenuTriggerFor"], ["src", "assets/images/users/1.jpg", "alt", "user", 1, "profile-pic"], [1, "mymegamenu"], ["profile", "matMenu"], ["mat-menu-item", ""]], template: function AppHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Upgrade To Pro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", 3, 4)(6, "button", 5)(7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5)(11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "account_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5)(15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "notifications_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Disable notifications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 5)(19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Sign Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenuTrigger], encapsulation: 2 });


/***/ }),

/***/ 2991:
/*!***********************************************************!*\
  !*** ./src/app/layouts/full/sidebar/sidebar.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSidebarComponent": () => (/* binding */ AppSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ 9910);
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/menu-items/menu-items */ 2647);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/accordion/accordionanchor.directive */ 8094);
/* harmony import */ var _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/accordion/accordionlink.directive */ 7725);
/* harmony import */ var _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/accordion/accordion.directive */ 5903);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);












function AppSidebarComponent_mat_list_item_26_a_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const badge_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("label label-", badge_r5.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](badge_r5.value);
} }
const _c0 = function (a1) { return ["/", a1]; };
function AppSidebarComponent_mat_list_item_26_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 13)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, AppSidebarComponent_mat_list_item_26_a_1_span_6_Template, 2, 4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c0, menuitem_r2.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](menuitem_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](menuitem_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", menuitem_r2.badge);
} }
function AppSidebarComponent_mat_list_item_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AppSidebarComponent_mat_list_item_26_a_1_Template, 7, 6, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("group", menuitem_r2.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuitem_r2.type === "link");
} }
class AppSidebarComponent {
    constructor(changeDetectorRef, media, menuItems) {
        this.menuItems = menuItems;
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
AppSidebarComponent.ɵfac = function AppSidebarComponent_Factory(t) { return new (t || AppSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_0__.MenuItems)); };
AppSidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppSidebarComponent, selectors: [["app-sidebar"]], decls: 27, vars: 2, consts: [[1, "user-profile", 2, "background", "url(assets/images/background/user-info.jpg) no-repeat"], [1, "profile-img"], ["src", "assets/images/users/profile.png", "alt", "user"], [1, "profile-text"], [1, "", 3, "matMenuTriggerFor"], [1, "ti-angle-down", "font-12", "m-l-5"], [1, "mymegamenu"], ["sdprofile", "matMenu"], ["mat-menu-item", ""], ["appAccordion", ""], ["appAccordionLink", "", "routerLinkActive", "selected", 3, "group", 4, "ngFor", "ngForOf"], ["appAccordionLink", "", "routerLinkActive", "selected", 3, "group"], ["class", "", "appAccordionToggle", "", 3, "routerLink", 4, "ngIf"], ["appAccordionToggle", "", 1, "", 3, "routerLink"], ["fxFlex", ""], [3, "class", 4, "ngFor", "ngForOf"]], template: function AppSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Markarn Doe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-menu", 6, 7)(9, "button", 8)(10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 8)(14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "account_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 8)(18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "notifications_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " Disable notifications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "button", 8)(22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " Sign Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-nav-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, AppSidebarComponent_mat_list_item_26_Template, 2, 2, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.menuItems.getMenuitem());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuTrigger, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexDirective, _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_1__.AccordionAnchorDirective, _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__.AccordionLinkDirective, _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_3__.AccordionDirective, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkActive], encapsulation: 2 });


/***/ }),

/***/ 5903:
/*!*********************************************************!*\
  !*** ./src/app/shared/accordion/accordion.directive.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionDirective": () => (/* binding */ AccordionDirective)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class AccordionDirective {
    constructor(router) {
        this.router = router;
        this.navlinks = [];
        setTimeout(() => this.checkOpenLinks());
    }
    closeOtherLinks(selectedLink) {
        this.navlinks.forEach((link) => {
            if (link !== selectedLink) {
                link.selected = false;
            }
        });
    }
    addLink(link) {
        this.navlinks.push(link);
    }
    removeGroup(link) {
        const index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    }
    checkOpenLinks() {
        this.navlinks.forEach((link) => {
            if (link.group) {
                const routeUrl = this.router.url;
                const currentUrl = routeUrl.split('/');
                if (currentUrl.indexOf(link.group) > 0) {
                    link.selected = true;
                    this.closeOtherLinks(link);
                }
            }
        });
    }
    ngAfterContentChecked() {
        this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd))
            .subscribe(e => this.checkOpenLinks());
    }
}
AccordionDirective.ɵfac = function AccordionDirective_Factory(t) { return new (t || AccordionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
AccordionDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: AccordionDirective, selectors: [["", "appAccordion", ""]] });


/***/ }),

/***/ 8094:
/*!***************************************************************!*\
  !*** ./src/app/shared/accordion/accordionanchor.directive.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionAnchorDirective": () => (/* binding */ AccordionAnchorDirective)
/* harmony export */ });
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordionlink.directive */ 7725);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class AccordionAnchorDirective {
    constructor(navlink) {
        this.navlink = navlink;
    }
    onClick(e) {
        this.navlink.toggle();
    }
}
AccordionAnchorDirective.ɵfac = function AccordionAnchorDirective_Factory(t) { return new (t || AccordionAnchorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_accordionlink_directive__WEBPACK_IMPORTED_MODULE_0__.AccordionLinkDirective)); };
AccordionAnchorDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AccordionAnchorDirective, selectors: [["", "appAccordionToggle", ""]], hostBindings: function AccordionAnchorDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccordionAnchorDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });


/***/ }),

/***/ 7725:
/*!*************************************************************!*\
  !*** ./src/app/shared/accordion/accordionlink.directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionLinkDirective": () => (/* binding */ AccordionLinkDirective)
/* harmony export */ });
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion.directive */ 5903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class AccordionLinkDirective {
    constructor(nav) {
        this._selected = false;
        this.nav = nav;
    }
    get selected() {
        return this._selected;
    }
    set selected(value) {
        this._selected = value;
        if (value) {
            this.nav.closeOtherLinks(this);
        }
    }
    ngOnInit() {
        this.nav.addLink(this);
    }
    ngOnDestroy() {
        this.nav.removeGroup(this);
    }
    toggle() {
        this.selected = !this.selected;
    }
}
AccordionLinkDirective.ɵfac = function AccordionLinkDirective_Factory(t) { return new (t || AccordionLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_accordion_directive__WEBPACK_IMPORTED_MODULE_0__.AccordionDirective)); };
AccordionLinkDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AccordionLinkDirective, selectors: [["", "appAccordionLink", ""]], hostVars: 2, hostBindings: function AccordionLinkDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("selected", ctx.selected);
    } }, inputs: { group: "group", selected: "selected" } });


/***/ }),

/***/ 8836:
/*!*******************************************!*\
  !*** ./src/app/shared/accordion/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionAnchorDirective": () => (/* reexport safe */ _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__.AccordionAnchorDirective),
/* harmony export */   "AccordionDirective": () => (/* reexport safe */ _accordion_directive__WEBPACK_IMPORTED_MODULE_2__.AccordionDirective),
/* harmony export */   "AccordionLinkDirective": () => (/* reexport safe */ _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__.AccordionLinkDirective)
/* harmony export */ });
/* harmony import */ var _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordionanchor.directive */ 8094);
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ 7725);
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.directive */ 5903);





/***/ }),

/***/ 2647:
/*!*************************************************!*\
  !*** ./src/app/shared/menu-items/menu-items.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuItems": () => (/* binding */ MenuItems)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

const MENUITEMS = [
    { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'av_timer' },
    { state: 'button', type: 'link', name: 'Buttons', icon: 'crop_7_5' },
    { state: 'grid', type: 'link', name: 'Grid List', icon: 'view_comfy' },
    { state: 'lists', type: 'link', name: 'Lists', icon: 'view_list' },
    { state: 'menu', type: 'link', name: 'Menu', icon: 'view_headline' },
    { state: 'tabs', type: 'link', name: 'Tabs', icon: 'tab' },
    { state: 'stepper', type: 'link', name: 'Stepper', icon: 'web' },
    {
        state: 'expansion',
        type: 'link',
        name: 'Expansion Panel',
        icon: 'vertical_align_center'
    },
    { state: 'chips', type: 'link', name: 'Chips', icon: 'vignette' },
    { state: 'toolbar', type: 'link', name: 'Toolbar', icon: 'voicemail' },
    {
        state: 'progress-snipper',
        type: 'link',
        name: 'Progress snipper',
        icon: 'border_horizontal'
    },
    {
        state: 'progress',
        type: 'link',
        name: 'Progress Bar',
        icon: 'blur_circular'
    },
    {
        state: 'dialog',
        type: 'link',
        name: 'Dialog',
        icon: 'assignment_turned_in'
    },
    { state: 'tooltip', type: 'link', name: 'Tooltip', icon: 'assistant' },
    { state: 'snackbar', type: 'link', name: 'Snackbar', icon: 'adb' },
    { state: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode' },
    {
        state: 'slide-toggle',
        type: 'link',
        name: 'Slide Toggle',
        icon: 'all_inclusive'
    }
];
class MenuItems {
    getMenuitem() {
        return MENUITEMS;
    }
}
MenuItems.ɵfac = function MenuItems_Factory(t) { return new (t || MenuItems)(); };
MenuItems.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenuItems, factory: MenuItems.ɵfac });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _menu_items_menu_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-items/menu-items */ 2647);
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion */ 8836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_0__.MenuItems] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionAnchorDirective,
        _accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionLinkDirective,
        _accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionDirective], exports: [_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionAnchorDirective,
        _accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionLinkDirective,
        _accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionDirective] }); })();


/***/ }),

/***/ 3812:
/*!*********************************************!*\
  !*** ./src/app/shared/spinner.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerComponent": () => (/* binding */ SpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);





function SpinnerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3)(3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
class SpinnerComponent {
    constructor(router, document) {
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationStart) {
                this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationCancel ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationError) {
                this.isSpinnerVisible = false;
            }
        }, () => {
            this.isSpinnerVisible = false;
        });
    }
    ngOnDestroy() {
        this.isSpinnerVisible = false;
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT)); };
SpinnerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], inputs: { backgroundColor: "backgroundColor" }, decls: 1, vars: 1, consts: [["class", "preloader", 4, "ngIf"], [1, "preloader"], [1, "spinner"], [1, "double-bounce1"], [1, "double-bounce2"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 4, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], encapsulation: 2 });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ 5977);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 2340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule)
    .catch(err => console.log(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map