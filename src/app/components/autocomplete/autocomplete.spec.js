define(["require", "exports", "@angular/core/testing", "./autocomplete", "@angular/platform-browser/animations"], function (require, exports, testing_1, autocomplete_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('AutoComplete', function () {
        var autocomplete;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    autocomplete_1.AutoComplete
                ]
            });
            fixture = testing_1.TestBed.createComponent(autocomplete_1.AutoComplete);
            autocomplete = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=autocomplete.spec.js.map