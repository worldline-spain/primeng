define(["require", "exports", "@angular/core", "@angular/common"], function (require, exports, core_1, common_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Toolbar = (function () {
        function Toolbar(el) {
            this.el = el;
        }
        Toolbar.prototype.getBlockableElement = function () {
            return this.el.nativeElement.children[0];
        };
        return Toolbar;
    }());
    Toolbar.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'p-toolbar',
                    template: "\n        <div [ngClass]=\"'ui-toolbar ui-widget ui-widget-header ui-corner-all ui-helper-clearfix'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <ng-content></ng-content>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    Toolbar.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    Toolbar.propDecorators = {
        'style': [{ type: core_1.Input },],
        'styleClass': [{ type: core_1.Input },],
    };
    exports.Toolbar = Toolbar;
    var ToolbarModule = (function () {
        function ToolbarModule() {
        }
        return ToolbarModule;
    }());
    ToolbarModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    exports: [Toolbar],
                    declarations: [Toolbar]
                },] },
    ];
    /** @nocollapse */
    ToolbarModule.ctorParameters = function () { return []; };
    exports.ToolbarModule = ToolbarModule;
});
//# sourceMappingURL=toolbar.js.map