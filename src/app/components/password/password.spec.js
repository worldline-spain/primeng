define(["require", "exports", "@angular/core/testing", "./password", "@angular/platform-browser/animations"], function (require, exports, testing_1, password_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Password', function () {
        var password;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    password_1.Password
                ]
            });
            fixture = testing_1.TestBed.createComponent(password_1.Password);
            password = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=password.spec.js.map