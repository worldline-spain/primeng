define(["require", "exports", "@angular/core/testing", "./sidebar", "@angular/platform-browser/animations"], function (require, exports, testing_1, sidebar_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Sidebar', function () {
        var sidebar;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    sidebar_1.Sidebar
                ]
            });
            fixture = testing_1.TestBed.createComponent(sidebar_1.Sidebar);
            sidebar = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=sidebar.spec.js.map