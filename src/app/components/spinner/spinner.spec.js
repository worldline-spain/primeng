define(["require", "exports", "@angular/core/testing", "./spinner", "@angular/platform-browser/animations"], function (require, exports, testing_1, spinner_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Spinner', function () {
        var spinner;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    spinner_1.Spinner
                ]
            });
            fixture = testing_1.TestBed.createComponent(spinner_1.Spinner);
            spinner = fixture.componentInstance;
        });
        var triggerEvent = function (el, type) {
            var e = document.createEvent('HTMLEvents');
            e.initEvent(type, false, true);
            el.dispatchEvent(e);
        };
        it('should have value as 3 when up clicked 3 times', function () {
            fixture.detectChanges();
            var spinnerUp = fixture.nativeElement.querySelector('.ui-spinner-up');
            triggerEvent(spinnerUp, 'mousedown');
            triggerEvent(spinnerUp, 'mousedown');
            triggerEvent(spinnerUp, 'mousedown');
            fixture.detectChanges();
            expect(spinner.value).toBe(3);
            expect(spinner.valueAsString).toBe('3');
        });
        it('should have value as -3 when down clicked 3 times', function () {
            fixture.detectChanges();
            var spinnerDown = fixture.nativeElement.querySelector('.ui-spinner-down');
            triggerEvent(spinnerDown, 'mousedown');
            triggerEvent(spinnerDown, 'mousedown');
            triggerEvent(spinnerDown, 'mousedown');
            fixture.detectChanges();
            expect(spinner.value).toBe(-3);
            expect(spinner.valueAsString).toBe('-3');
        });
        it('Should display the spinner value 0.75  ', function () {
            spinner.step = 0.25;
            fixture.detectChanges();
            var spinnerUp = fixture.nativeElement.querySelector('.ui-spinner-up');
            triggerEvent(spinnerUp, 'mousedown');
            triggerEvent(spinnerUp, 'mousedown');
            triggerEvent(spinnerUp, 'mousedown');
            expect(spinner.value).toEqual(0.75);
            expect(spinner.valueAsString).toEqual('0.75');
        });
    });
});
//# sourceMappingURL=spinner.spec.js.map