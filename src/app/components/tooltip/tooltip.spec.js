define(["require", "exports", "@angular/core/testing", "./tooltip", "@angular/platform-browser/animations"], function (require, exports, testing_1, tooltip_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Tooltip', function () {
        var tooltip;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    tooltip_1.Tooltip
                ]
            });
            fixture = testing_1.TestBed.createComponent(tooltip_1.Tooltip);
            tooltip = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=tooltip.spec.js.map