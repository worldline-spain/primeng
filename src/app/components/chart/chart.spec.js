define(["require", "exports", "@angular/core/testing", "./chart", "@angular/platform-browser/animations"], function (require, exports, testing_1, chart_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('UIChart', function () {
        var chart;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    chart_1.UIChart
                ]
            });
            fixture = testing_1.TestBed.createComponent(chart_1.UIChart);
            chart = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=chart.spec.js.map