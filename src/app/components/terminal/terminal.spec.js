define(["require", "exports", "@angular/core/testing", "./terminal", "@angular/platform-browser/animations"], function (require, exports, testing_1, terminal_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Terminal', function () {
        var terminal;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    terminal_1.Terminal
                ]
            });
            fixture = testing_1.TestBed.createComponent(terminal_1.Terminal);
            terminal = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=terminal.spec.js.map