define(["require", "exports", "@angular/core/testing", "./slider", "@angular/platform-browser/animations"], function (require, exports, testing_1, slider_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Slider', function () {
        var slider;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    slider_1.Slider
                ]
            });
            fixture = testing_1.TestBed.createComponent(slider_1.Slider);
            slider = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=slider.spec.js.map