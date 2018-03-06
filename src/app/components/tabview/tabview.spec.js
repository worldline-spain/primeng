define(["require", "exports", "@angular/core/testing", "./tabview", "@angular/platform-browser/animations"], function (require, exports, testing_1, tabview_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('TabView', function () {
        var tabview;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    tabview_1.TabView
                ]
            });
            fixture = testing_1.TestBed.createComponent(tabview_1.TabView);
            tabview = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=tabview.spec.js.map