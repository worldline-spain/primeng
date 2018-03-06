define(["require", "exports", "@angular/core/testing", "./growl", "@angular/platform-browser/animations"], function (require, exports, testing_1, growl_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Growl', function () {
        var growl;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    growl_1.Growl
                ]
            });
            fixture = testing_1.TestBed.createComponent(growl_1.Growl);
            growl = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=growl.spec.js.map