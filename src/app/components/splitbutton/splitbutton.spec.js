define(["require", "exports", "@angular/core/testing", "./splitbutton", "@angular/platform-browser/animations"], function (require, exports, testing_1, splitbutton_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('SplitButton', function () {
        var splitbutton;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    splitbutton_1.SplitButton
                ]
            });
            fixture = testing_1.TestBed.createComponent(splitbutton_1.SplitButton);
            splitbutton = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=splitbutton.spec.js.map