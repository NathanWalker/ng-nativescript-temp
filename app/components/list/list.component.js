"use strict";
var core_1 = require("angular2/core");
var router_1 = require("angular2/router");
var ListComponent = (function () {
    function ListComponent(router) {
        this.router = router;
        this.todoList = ["Wash Car", "Clean House"];
    }
    ListComponent.prototype.create = function () {
        this.router.navigate(["Create"]);
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: "list",
            templateUrl: "./components/list/list.xml",
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map