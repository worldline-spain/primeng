define(["require", "exports", "@angular/core/testing", "./keyfilter", "@angular/platform-browser/animations"], function (require, exports, testing_1, keyfilter_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('KeyFilter', function () {
        var keyfilter;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    keyfilter_1.KeyFilter
                ]
            });
            fixture = testing_1.TestBed.createComponent(keyfilter_1.KeyFilter);
            keyfilter = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=keyfilter.spec.js.map