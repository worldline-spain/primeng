define(["require", "exports", "@angular/core", "rxjs/Subject"], function (require, exports, core_1, Subject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ConfirmationService = (function () {
        function ConfirmationService() {
            this.requireConfirmationSource = new Subject_1.Subject();
            this.acceptConfirmationSource = new Subject_1.Subject();
            this.requireConfirmation$ = this.requireConfirmationSource.asObservable();
            this.accept = this.acceptConfirmationSource.asObservable();
        }
        ConfirmationService.prototype.confirm = function (confirmation) {
            this.requireConfirmationSource.next(confirmation);
            return this;
        };
        ConfirmationService.prototype.onAccept = function () {
            this.acceptConfirmationSource.next();
        };
        return ConfirmationService;
    }());
    ConfirmationService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    ConfirmationService.ctorParameters = function () { return []; };
    exports.ConfirmationService = ConfirmationService;
});
//# sourceMappingURL=confirmationservice.js.map