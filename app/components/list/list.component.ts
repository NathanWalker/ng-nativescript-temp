import {Component} from "angular2/core";
import {Router} from "angular2/router";

@Component({
    selector: "list",
    templateUrl: "./components/list/list.xml",
})
export class ListComponent {
    router: Router;
    todoList: Array<string>;

    constructor(router: Router) {
        this.router = router;
        this.todoList = ["Wash Car", "Clean House"];
    }

    public create() {
        this.router.navigate(["Create"]);
    }

}
