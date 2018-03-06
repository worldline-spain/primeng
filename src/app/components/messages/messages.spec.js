define(["require", "exports", "@angular/core/testing", "./messages", "@angular/platform-browser/animations"], function (require, exports, testing_1, messages_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Messages', function () {
        var messages;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    messages_1.Messages
                ]
            });
            fixture = testing_1.TestBed.createComponent(messages_1.Messages);
            messages = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=messages.spec.js.map