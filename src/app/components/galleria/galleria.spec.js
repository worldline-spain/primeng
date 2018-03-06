define(["require", "exports", "@angular/core/testing", "./galleria", "@angular/platform-browser/animations"], function (require, exports, testing_1, galleria_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Galleria', function () {
        var galleria;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    galleria_1.Galleria
                ]
            });
            fixture = testing_1.TestBed.createComponent(galleria_1.Galleria);
            galleria = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=galleria.spec.js.map