define(["require", "exports", "@angular/core/testing", "./tabmenu", "@angular/platform-browser/animations"], function (require, exports, testing_1, tabmenu_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('TabMenu', function () {
        var tabmenu;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    tabmenu_1.TabMenu
                ]
            });
            fixture = testing_1.TestBed.createComponent(tabmenu_1.TabMenu);
            tabmenu = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=tabmenu.spec.js.map