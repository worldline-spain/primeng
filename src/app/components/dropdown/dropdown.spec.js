define(["require", "exports", "@angular/core/testing", "./dropdown", "@angular/platform-browser/animations"], function (require, exports, testing_1, dropdown_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Dropdown', function () {
        var dropdown;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    dropdown_1.Dropdown
                ]
            });
            fixture = testing_1.TestBed.createComponent(dropdown_1.Dropdown);
            dropdown = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=dropdown.spec.js.map