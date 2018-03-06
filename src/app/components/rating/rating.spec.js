define(["require", "exports", "@angular/core/testing", "./rating", "@angular/platform-browser/animations"], function (require, exports, testing_1, rating_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Rating', function () {
        var rating;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    rating_1.Rating
                ]
            });
            fixture = testing_1.TestBed.createComponent(rating_1.Rating);
            rating = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=rating.spec.js.map