define(["require", "exports", "@angular/core/testing", "./schedule", "@angular/platform-browser/animations"], function (require, exports, testing_1, schedule_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Schedule', function () {
        var schedule;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    schedule_1.Schedule
                ]
            });
            fixture = testing_1.TestBed.createComponent(schedule_1.Schedule);
            schedule = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=schedule.spec.js.map