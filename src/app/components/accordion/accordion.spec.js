define(["require", "exports", "@angular/core/testing", "./accordion", "@angular/platform-browser/animations"], function (require, exports, testing_1, accordion_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Accordion', function () {
        var accordion;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    accordion_1.Accordion
                ]
            });
            fixture = testing_1.TestBed.createComponent(accordion_1.Accordion);
            accordion = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=accordion.spec.js.map