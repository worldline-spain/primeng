define(["require", "exports", "@angular/core/testing", "./breadcrumb", "@angular/platform-browser/animations"], function (require, exports, testing_1, breadcrumb_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Breadcrumb', function () {
        var breadcrumb;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    breadcrumb_1.Breadcrumb
                ]
            });
            fixture = testing_1.TestBed.createComponent(breadcrumb_1.Breadcrumb);
            breadcrumb = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=breadcrumb.spec.js.map