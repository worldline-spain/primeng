define(["require", "exports", "@angular/core/testing", "./message", "@angular/platform-browser/animations"], function (require, exports, testing_1, message_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('UIMessage', function () {
        var message;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    message_1.UIMessage
                ]
            });
            fixture = testing_1.TestBed.createComponent(message_1.UIMessage);
            message = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=message.spec.js.map