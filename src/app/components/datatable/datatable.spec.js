define(["require", "exports", "@angular/core/testing", "./datatable", "@angular/platform-browser/animations"], function (require, exports, testing_1, datatable_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('DataTable', function () {
        var datatable;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    datatable_1.DataTable
                ]
            });
            fixture = testing_1.TestBed.createComponent(datatable_1.DataTable);
            datatable = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=datatable.spec.js.map