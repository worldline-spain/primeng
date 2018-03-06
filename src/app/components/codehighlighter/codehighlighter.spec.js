define(["require", "exports", "@angular/core/testing", "./codehighlighter", "@angular/platform-browser/animations"], function (require, exports, testing_1, codehighlighter_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('CodeHighlighter', function () {
        var codehighlighter;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    codehighlighter_1.CodeHighlighter
                ]
            });
            fixture = testing_1.TestBed.createComponent(codehighlighter_1.CodeHighlighter);
            codehighlighter = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=codehighlighter.spec.js.map