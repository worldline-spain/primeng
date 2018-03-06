define(["require", "exports", "@angular/core/testing", "./confirmdialog", "@angular/platform-browser/animations"], function (require, exports, testing_1, confirmdialog_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('ConfirmDialog', function () {
        var confirmdialog;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    confirmdialog_1.ConfirmDialog
                ]
            });
            fixture = testing_1.TestBed.createComponent(confirmdialog_1.ConfirmDialog);
            confirmdialog = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=confirmdialog.spec.js.map