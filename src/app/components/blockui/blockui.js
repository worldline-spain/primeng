define(["require", "exports", "@angular/core", "@angular/common", "../dom/domhandler"], function (require, exports, core_1, common_1, domhandler_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BlockUI = (function () {
        function BlockUI(el, domHandler) {
            this.el = el;
            this.domHandler = domHandler;
            this.autoZIndex = true;
            this.baseZIndex = 0;
        }
        Object.defineProperty(BlockUI.prototype, "blocked", {
            get: function () {
                return this._blocked;
            },
            set: function (val) {
                this._blocked = val;
                if (this.mask.nativeElement) {
                    if (this._blocked)
                        this.block();
                    else
                        this.unblock();
                }
            },
            enumerable: true,
            configurable: true
        });
        BlockUI.prototype.ngAfterViewInit = function () {
            if (this.target && !this.target.getBlockableElement) {
                throw 'Target of BlockUI must implement BlockableUI interface';
            }
        };
        BlockUI.prototype.block = function () {
            if (this.target) {
                this.target.getBlockableElement().appendChild(this.mask.nativeElement);
                var style = this.target.style || {};
                style.position = 'relative';
                this.target.style = style;
            }
            else {
                document.body.appendChild(this.mask.nativeElement);
            }
            if (this.autoZIndex) {
                this.mask.nativeElement.style.zIndex = String(this.baseZIndex + (++domhandler_1.DomHandler.zindex));
            }
        };
        BlockUI.prototype.unblock = function () {
            this.el.nativeElement.appendChild(this.mask.nativeElement);
        };
        BlockUI.prototype.ngOnDestroy = function () {
            this.unblock();
        };
        return BlockUI;
    }());
    BlockUI.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'p-blockUI',
                    template: "\n        <div #mask class=\"ui-blockui ui-widget-overlay\" [ngClass]=\"{'ui-blockui-document':!target}\" [ngStyle]=\"{display: blocked ? 'block' : 'none'}\">\n            <ng-content></ng-content>\n        </div>\n    ",
                    providers: [domhandler_1.DomHandler]
                },] },
    ];
    /** @nocollapse */
    BlockUI.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: domhandler_1.DomHandler, },
    ]; };
    BlockUI.propDecorators = {
        'target': [{ type: core_1.Input },],
        'autoZIndex': [{ type: core_1.Input },],
        'baseZIndex': [{ type: core_1.Input },],
        'mask': [{ type: core_1.ViewChild, args: ['mask',] },],
        'blocked': [{ type: core_1.Input },],
    };
    exports.BlockUI = BlockUI;
    var BlockUIModule = (function () {
        function BlockUIModule() {
        }
        return BlockUIModule;
    }());
    BlockUIModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    exports: [BlockUI],
                    declarations: [BlockUI]
                },] },
    ];
    /** @nocollapse */
    BlockUIModule.ctorParameters = function () { return []; };
    exports.BlockUIModule = BlockUIModule;
});
//# sourceMappingURL=blockui.js.map