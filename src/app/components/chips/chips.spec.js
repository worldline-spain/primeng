define(["require", "exports", "@angular/core/testing", "./chips", "@angular/platform-browser/animations"], function (require, exports, testing_1, chips_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Chips', function () {
        var chips;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    chips_1.Chips
                ]
            });
            fixture = testing_1.TestBed.createComponent(chips_1.Chips);
            chips = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=chips.spec.js.map