define(["require", "exports", "@angular/core/testing", "./menubar", "@angular/platform-browser/animations"], function (require, exports, testing_1, menubar_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Menubar', function () {
        var menubar;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    menubar_1.Menubar
                ]
            });
            fixture = testing_1.TestBed.createComponent(menubar_1.Menubar);
            menubar = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=menubar.spec.js.map