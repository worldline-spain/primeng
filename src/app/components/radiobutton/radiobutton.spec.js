define(["require", "exports", "@angular/core/testing", "./radiobutton", "@angular/platform-browser/animations"], function (require, exports, testing_1, radiobutton_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('RadioButton', function () {
        var radiobutton;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    radiobutton_1.RadioButton
                ]
            });
            fixture = testing_1.TestBed.createComponent(radiobutton_1.RadioButton);
            radiobutton = fixture.componentInstance;
        });
        it('should display active state initially when checked by default', function () {
            radiobutton.checked = true;
            fixture.detectChanges();
            var boxEl = fixture.nativeElement.querySelector('.ui-radiobutton-box');
            expect(boxEl.class).toContain('ui-state-active');
        });
    });
});
//# sourceMappingURL=radiobutton.spec.js.map