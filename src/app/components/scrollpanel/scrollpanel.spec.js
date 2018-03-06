define(["require", "exports", "@angular/core/testing", "./scrollpanel", "@angular/platform-browser/animations"], function (require, exports, testing_1, scrollpanel_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('ScrollPanel', function () {
        var scrollpanel;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    scrollpanel_1.ScrollPanel
                ]
            });
            fixture = testing_1.TestBed.createComponent(scrollpanel_1.ScrollPanel);
            scrollpanel = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=scrollpanel.spec.js.map