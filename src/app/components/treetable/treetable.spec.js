define(["require", "exports", "@angular/core/testing", "./treetable", "@angular/platform-browser/animations"], function (require, exports, testing_1, treetable_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('TreeTable', function () {
        var treetable;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    treetable_1.TreeTable
                ]
            });
            fixture = testing_1.TestBed.createComponent(treetable_1.TreeTable);
            treetable = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=treetable.spec.js.map