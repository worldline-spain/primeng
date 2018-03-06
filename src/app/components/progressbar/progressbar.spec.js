define(["require", "exports", "@angular/core/testing", "./progressbar", "@angular/platform-browser/animations"], function (require, exports, testing_1, progressbar_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('ProgressBar', function () {
        var progressbar;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    progressbar_1.ProgressBar
                ]
            });
            fixture = testing_1.TestBed.createComponent(progressbar_1.ProgressBar);
            progressbar = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=progressbar.spec.js.map