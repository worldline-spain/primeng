define(["require", "exports", "@angular/core/testing", "./contextmenu", "@angular/platform-browser/animations"], function (require, exports, testing_1, contextmenu_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Accordion', function () {
        var contextmenu;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    contextmenu_1.ContextMenu
                ]
            });
            fixture = testing_1.TestBed.createComponent(contextmenu_1.ContextMenu);
            contextmenu = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=contextmenu.spec.js.map