define(["require", "exports", "@angular/core/testing", "./button", "@angular/platform-browser/animations"], function (require, exports, testing_1, button_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Button', function () {
        var button;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    button_1.Button
                ]
            });
            fixture = testing_1.TestBed.createComponent(button_1.Button);
            button = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=button.spec.js.map