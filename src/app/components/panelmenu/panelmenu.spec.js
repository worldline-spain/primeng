define(["require", "exports", "@angular/core/testing", "./panelmenu", "@angular/platform-browser/animations"], function (require, exports, testing_1, panelmenu_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('PanelMenu', function () {
        var panelmenu;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    panelmenu_1.PanelMenu
                ]
            });
            fixture = testing_1.TestBed.createComponent(panelmenu_1.PanelMenu);
            panelmenu = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=panelmenu.spec.js.map