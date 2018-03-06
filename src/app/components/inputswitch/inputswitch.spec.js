define(["require", "exports", "@angular/core/testing", "./inputswitch", "@angular/platform-browser/animations"], function (require, exports, testing_1, inputswitch_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('InputSwitch', function () {
        var inputswitch;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    inputswitch_1.InputSwitch
                ]
            });
            fixture = testing_1.TestBed.createComponent(inputswitch_1.InputSwitch);
            inputswitch = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=inputswitch.spec.js.map