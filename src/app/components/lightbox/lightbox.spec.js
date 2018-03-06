define(["require", "exports", "@angular/core/testing", "./lightbox", "@angular/platform-browser/animations"], function (require, exports, testing_1, lightbox_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Lightbox', function () {
        var lightbox;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    lightbox_1.Lightbox
                ]
            });
            fixture = testing_1.TestBed.createComponent(lightbox_1.Lightbox);
            lightbox = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=lightbox.spec.js.map