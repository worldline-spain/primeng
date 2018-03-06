define(["require", "exports", "@angular/core/testing", "./picklist", "@angular/platform-browser/animations"], function (require, exports, testing_1, picklist_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('PickList', function () {
        var picklist;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    picklist_1.PickList
                ]
            });
            fixture = testing_1.TestBed.createComponent(picklist_1.PickList);
            picklist = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=picklist.spec.js.map