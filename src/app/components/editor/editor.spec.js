define(["require", "exports", "@angular/core/testing", "./editor", "@angular/platform-browser/animations"], function (require, exports, testing_1, editor_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Editor', function () {
        var editor;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    editor_1.Editor
                ]
            });
            fixture = testing_1.TestBed.createComponent(editor_1.Editor);
            editor = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=editor.spec.js.map