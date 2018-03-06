define(["require", "exports", "@angular/core/testing", "./dragdrop", "@angular/platform-browser/animations"], function (require, exports, testing_1, dragdrop_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Draggable', function () {
        var draggable;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    dragdrop_1.Draggable
                ]
            });
            fixture = testing_1.TestBed.createComponent(dragdrop_1.Draggable);
            draggable = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=dragdrop.spec.js.map