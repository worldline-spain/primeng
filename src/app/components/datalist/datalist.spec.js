define(["require", "exports", "@angular/core/testing", "./datalist", "@angular/platform-browser/animations"], function (require, exports, testing_1, datalist_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('DataList', function () {
        var datalist;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    datalist_1.DataList
                ]
            });
            fixture = testing_1.TestBed.createComponent(datalist_1.DataList);
            datalist = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=datalist.spec.js.map