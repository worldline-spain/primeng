define(["require", "exports", "@angular/core", "rxjs/Subject"], function (require, exports, core_1, Subject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TreeDragDropService = (function () {
        function TreeDragDropService() {
            this.dragStartSource = new Subject_1.Subject();
            this.dragStopSource = new Subject_1.Subject();
            this.dragStart$ = this.dragStartSource.asObservable();
            this.dragStop$ = this.dragStopSource.asObservable();
        }
        TreeDragDropService.prototype.startDrag = function (event) {
            this.dragStartSource.next(event);
        };
        TreeDragDropService.prototype.stopDrag = function (event) {
            this.dragStopSource.next(event);
        };
        return TreeDragDropService;
    }());
    TreeDragDropService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    TreeDragDropService.ctorParameters = function () { return []; };
    exports.TreeDragDropService = TreeDragDropService;
});
//# sourceMappingURL=treedragdropservice.js.map