define(["require", "exports", "@angular/core", "@angular/common", "../dom/domhandler"], function (require, exports, core_1, common_1, domhandler_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DeferredLoader = (function () {
        function DeferredLoader(el, domHandler, renderer, viewContainer) {
            this.el = el;
            this.domHandler = domHandler;
            this.renderer = renderer;
            this.viewContainer = viewContainer;
            this.onLoad = new core_1.EventEmitter();
        }
        DeferredLoader.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (this.shouldLoad()) {
                this.load();
            }
            this.documentScrollListener = this.renderer.listen('window', 'scroll', function () {
                if (_this.shouldLoad()) {
                    _this.load();
                    _this.documentScrollListener();
                    _this.documentScrollListener = null;
                }
            });
        };
        DeferredLoader.prototype.shouldLoad = function () {
            var rect = this.el.nativeElement.getBoundingClientRect();
            var docElement = document.documentElement;
            var scrollTop = (window.pageYOffset || document.documentElement.scrollTop);
            var winHeight = docElement.clientHeight;
            return (winHeight >= rect.top);
        };
        DeferredLoader.prototype.load = function () {
            this.view = this.viewContainer.createEmbeddedView(this.template);
            this.onLoad.emit();
        };
        DeferredLoader.prototype.ngOnDestroy = function () {
            this.view = null;
            if (this.documentScrollListener) {
                this.documentScrollListener();
            }
        };
        return DeferredLoader;
    }());
    DeferredLoader.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[pDefer]',
                    host: {},
                    providers: [domhandler_1.DomHandler]
                },] },
    ];
    /** @nocollapse */
    DeferredLoader.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: domhandler_1.DomHandler, },
        { type: core_1.Renderer2, },
        { type: core_1.ViewContainerRef, },
    ]; };
    DeferredLoader.propDecorators = {
        'onLoad': [{ type: core_1.Output },],
        'template': [{ type: core_1.ContentChild, args: [core_1.TemplateRef,] },],
    };
    exports.DeferredLoader = DeferredLoader;
    var DeferModule = (function () {
        function DeferModule() {
        }
        return DeferModule;
    }());
    DeferModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    exports: [DeferredLoader],
                    declarations: [DeferredLoader]
                },] },
    ];
    /** @nocollapse */
    DeferModule.ctorParameters = function () { return []; };
    exports.DeferModule = DeferModule;
});
//# sourceMappingURL=defer.js.map