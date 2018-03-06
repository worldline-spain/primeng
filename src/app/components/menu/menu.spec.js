define(["require", "exports", "@angular/core/testing", "./menu", "@angular/platform-browser/animations"], function (require, exports, testing_1, menu_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Menu', function () {
        var menu;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    menu_1.Menu
                ]
            });
            fixture = testing_1.TestBed.createComponent(menu_1.Menu);
            menu = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=menu.spec.js.map