define(["require", "exports", "@angular/core/testing", "./datascroller", "@angular/platform-browser/animations"], function (require, exports, testing_1, datascroller_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('DataScroller', function () {
        var datascroller;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    datascroller_1.DataScroller
                ]
            });
            fixture = testing_1.TestBed.createComponent(datascroller_1.DataScroller);
            datascroller = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=datascroller.spec.js.map