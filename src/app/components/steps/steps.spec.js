define(["require", "exports", "@angular/core/testing", "./steps", "@angular/platform-browser/animations"], function (require, exports, testing_1, steps_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Steps', function () {
        var steps;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    steps_1.Steps
                ]
            });
            fixture = testing_1.TestBed.createComponent(steps_1.Steps);
            steps = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=steps.spec.js.map