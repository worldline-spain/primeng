define(["require", "exports", "@angular/core/testing", "./listbox", "@angular/platform-browser/animations"], function (require, exports, testing_1, listbox_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Listbox', function () {
        var listbox;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    listbox_1.Listbox
                ]
            });
            fixture = testing_1.TestBed.createComponent(listbox_1.Listbox);
            listbox = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=listbox.spec.js.map