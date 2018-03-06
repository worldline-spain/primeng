define(["require", "exports", "@angular/core/testing", "./captcha", "@angular/platform-browser/animations"], function (require, exports, testing_1, captcha_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Captcha', function () {
        var captcha;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    captcha_1.Captcha
                ]
            });
            fixture = testing_1.TestBed.createComponent(captcha_1.Captcha);
            captcha = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=captcha.spec.js.map