define(["require", "exports", "@angular/core/testing", "./overlaypanel", "@angular/platform-browser/animations"], function (require, exports, testing_1, overlaypanel_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('OverlayPanel', function () {
        var overlaypanel;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    overlaypanel_1.OverlayPanel
                ]
            });
            fixture = testing_1.TestBed.createComponent(overlaypanel_1.OverlayPanel);
            overlaypanel = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=overlaypanel.spec.js.map