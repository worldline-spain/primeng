define(["require", "exports", "@angular/core/testing", "./inputmask", "@angular/platform-browser/animations"], function (require, exports, testing_1, inputmask_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('InputMask', function () {
        var inputmask;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    inputmask_1.InputMask
                ]
            });
            fixture = testing_1.TestBed.createComponent(inputmask_1.InputMask);
            inputmask = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=inputmask.spec.js.map