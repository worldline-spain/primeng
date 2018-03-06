define(["require", "exports", "@angular/core/testing", "./progressspinner", "@angular/platform-browser/animations"], function (require, exports, testing_1, progressspinner_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('ProgressSpinner', function () {
        var progressspinner;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    progressspinner_1.ProgressSpinner
                ]
            });
            fixture = testing_1.TestBed.createComponent(progressspinner_1.ProgressSpinner);
            progressspinner = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=progressspinner.spec.js.map