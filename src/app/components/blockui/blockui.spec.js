define(["require", "exports", "@angular/core/testing", "./blockui", "@angular/platform-browser/animations"], function (require, exports, testing_1, blockui_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('BlockUI', function () {
        var blockui;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    blockui_1.BlockUI
                ]
            });
            fixture = testing_1.TestBed.createComponent(blockui_1.BlockUI);
            blockui = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=blockui.spec.js.map