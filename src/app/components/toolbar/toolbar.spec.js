define(["require", "exports", "@angular/core/testing", "./toolbar", "@angular/platform-browser/animations"], function (require, exports, testing_1, toolbar_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Toolbar', function () {
        var toolbar;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    toolbar_1.Toolbar
                ]
            });
            fixture = testing_1.TestBed.createComponent(toolbar_1.Toolbar);
            toolbar = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=toolbar.spec.js.map