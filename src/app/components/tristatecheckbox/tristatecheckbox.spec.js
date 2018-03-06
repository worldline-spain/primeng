define(["require", "exports", "@angular/core/testing", "./tristatecheckbox", "@angular/platform-browser/animations"], function (require, exports, testing_1, tristatecheckbox_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('TriStateCheckbox', function () {
        var tristate;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    tristatecheckbox_1.TriStateCheckbox
                ]
            });
            fixture = testing_1.TestBed.createComponent(tristatecheckbox_1.TriStateCheckbox);
            tristate = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=tristatecheckbox.spec.js.map