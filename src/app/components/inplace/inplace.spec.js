define(["require", "exports", "@angular/core/testing", "./inplace", "@angular/platform-browser/animations"], function (require, exports, testing_1, inplace_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Inplace', function () {
        var inplace;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    inplace_1.Inplace
                ]
            });
            fixture = testing_1.TestBed.createComponent(inplace_1.Inplace);
            inplace = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=inplace.spec.js.map