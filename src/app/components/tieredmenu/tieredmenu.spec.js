define(["require", "exports", "@angular/core/testing", "./tieredmenu", "@angular/platform-browser/animations"], function (require, exports, testing_1, tieredmenu_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('TieredMenu', function () {
        var tieredmenu;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    tieredmenu_1.TieredMenu
                ]
            });
            fixture = testing_1.TestBed.createComponent(tieredmenu_1.TieredMenu);
            tieredmenu = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=tieredmenu.spec.js.map