define(["require", "exports", "@angular/core/testing", "./multiselect", "@angular/platform-browser/animations"], function (require, exports, testing_1, multiselect_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('MultiSelect', function () {
        var multiselect;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    multiselect_1.MultiSelect
                ]
            });
            fixture = testing_1.TestBed.createComponent(multiselect_1.MultiSelect);
            multiselect = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=multiselect.spec.js.map