define(["require", "exports", "@angular/core/testing", "./colorpicker", "@angular/platform-browser/animations"], function (require, exports, testing_1, colorpicker_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('ColorPicker', function () {
        var colorpicker;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    colorpicker_1.ColorPicker
                ]
            });
            fixture = testing_1.TestBed.createComponent(colorpicker_1.ColorPicker);
            colorpicker = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=colorpicker.spec.js.map