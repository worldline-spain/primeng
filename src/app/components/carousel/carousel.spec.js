define(["require", "exports", "@angular/core/testing", "./carousel", "@angular/platform-browser/animations"], function (require, exports, testing_1, carousel_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Carousel', function () {
        var carousel;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    carousel_1.Carousel
                ]
            });
            fixture = testing_1.TestBed.createComponent(carousel_1.Carousel);
            carousel = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=carousel.spec.js.map