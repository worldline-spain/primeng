define(["require", "exports", "@angular/core/testing", "./inputtext", "@angular/platform-browser/animations"], function (require, exports, testing_1, inputtext_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('InputText', function () {
        var inputtext;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    inputtext_1.InputText
                ]
            });
            fixture = testing_1.TestBed.createComponent(inputtext_1.InputText);
            inputtext = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=inputtext.spec.js.map