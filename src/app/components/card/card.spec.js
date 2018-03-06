define(["require", "exports", "@angular/core/testing", "./card", "@angular/platform-browser/animations"], function (require, exports, testing_1, card_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Card', function () {
        var card;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    card_1.Card
                ]
            });
            fixture = testing_1.TestBed.createComponent(card_1.Card);
            card = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=card.spec.js.map