define(["require", "exports", "@angular/core/testing", "./inputtextarea", "@angular/platform-browser/animations"], function (require, exports, testing_1, inputtextarea_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('InputTextarea', function () {
        var inputtextarea;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    inputtextarea_1.InputTextarea
                ]
            });
            fixture = testing_1.TestBed.createComponent(inputtextarea_1.InputTextarea);
            inputtextarea = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=inputtextarea.spec.js.map