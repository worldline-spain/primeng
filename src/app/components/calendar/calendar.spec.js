define(["require", "exports", "@angular/core/testing", "./calendar", "@angular/platform-browser/animations"], function (require, exports, testing_1, calendar_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Calendar', function () {
        var calendar;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    calendar_1.Calendar
                ]
            });
            fixture = testing_1.TestBed.createComponent(calendar_1.Calendar);
            calendar = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=calendar.spec.js.map