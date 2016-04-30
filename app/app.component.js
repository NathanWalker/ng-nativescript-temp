"use strict";
var core_1 = require("angular2/core");
var router_1 = require("angular2/router");
var router_2 = require("nativescript-angular/router");
var list_component_1 = require("./components/list/list.component");
var create_component_1 = require("./components/create/create.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            directives: [router_2.NS_ROUTER_DIRECTIVES],
            providers: [router_2.NS_ROUTER_PROVIDERS],
            template: "<page-router-outlet></page-router-outlet>"
        }),
        router_1.RouteConfig([
            { path: "/list", component: list_component_1.ListComponent, name: "List", useAsDefault: true },
            { path: "/create", component: create_component_1.CreateComponent, name: "Create" },
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map