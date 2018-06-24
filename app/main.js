"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
var app_routes_1 = require('./app.routes');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [app_routes_1.appRouterProviders, http_1.HTTP_PROVIDERS]);
/**
 * Inject enableHashRouting const with application to enable Hash routing
 */
// bootstrap(AppComponent,[appRouterProviders,HTTP_PROVIDERS,enableHashRouting]);
//# sourceMappingURL=main.js.map