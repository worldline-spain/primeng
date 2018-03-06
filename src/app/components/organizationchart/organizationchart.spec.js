define(["require", "exports", "@angular/core/testing", "./organizationchart", "@angular/platform-browser/animations"], function (require, exports, testing_1, organizationchart_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('OrganizationChart', function () {
        var organizationchart;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    organizationchart_1.OrganizationChart
                ]
            });
            fixture = testing_1.TestBed.createComponent(organizationchart_1.OrganizationChart);
            organizationchart = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=organizationchart.spec.js.map