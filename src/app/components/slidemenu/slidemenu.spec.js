define(["require", "exports", "@angular/core/testing", "./slidemenu", "@angular/platform-browser/animations"], function (require, exports, testing_1, slidemenu_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('SlideMenu', function () {
        var slidemenu;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    slidemenu_1.SlideMenu
                ]
            });
            fixture = testing_1.TestBed.createComponent(slidemenu_1.SlideMenu);
            slidemenu = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=slidemenu.spec.js.map