define(["require", "exports", "@angular/core/testing", "./tree", "@angular/platform-browser/animations"], function (require, exports, testing_1, tree_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Tree', function () {
        var tree;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    tree_1.Tree
                ]
            });
            fixture = testing_1.TestBed.createComponent(tree_1.Tree);
            tree = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=tree.spec.js.map