define(["require", "exports", "@angular/core/testing", "./megamenu", "@angular/platform-browser/animations"], function (require, exports, testing_1, megamenu_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('MegaMenu', function () {
        var megamenu;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    megamenu_1.MegaMenu
                ]
            });
            fixture = testing_1.TestBed.createComponent(megamenu_1.MegaMenu);
            megamenu = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=megamenu.spec.js.map