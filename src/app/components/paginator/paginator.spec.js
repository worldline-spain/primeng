define(["require", "exports", "@angular/core/testing", "./paginator", "@angular/platform-browser/animations"], function (require, exports, testing_1, paginator_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Paginator', function () {
        var paginator;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    paginator_1.Paginator
                ]
            });
            fixture = testing_1.TestBed.createComponent(paginator_1.Paginator);
            paginator = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=paginator.spec.js.map