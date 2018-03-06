define(["require", "exports", "@angular/core", "rxjs/Subject"], function (require, exports, core_1, Subject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TerminalService = (function () {
        function TerminalService() {
            this.commandSource = new Subject_1.Subject();
            this.responseSource = new Subject_1.Subject();
            this.commandHandler = this.commandSource.asObservable();
            this.responseHandler = this.responseSource.asObservable();
        }
        TerminalService.prototype.sendCommand = function (command) {
            if (command) {
                this.commandSource.next(command);
            }
        };
        TerminalService.prototype.sendResponse = function (response) {
            if (response) {
                this.responseSource.next(response);
            }
        };
        return TerminalService;
    }());
    TerminalService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    TerminalService.ctorParameters = function () { return []; };
    exports.TerminalService = TerminalService;
});
//# sourceMappingURL=terminalservice.js.map