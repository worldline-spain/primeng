define(["require", "exports", "@angular/core", "@angular/common"], function (require, exports, core_1, common_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CodeHighlighter = (function () {
        function CodeHighlighter(el) {
            this.el = el;
        }
        CodeHighlighter.prototype.ngOnInit = function () {
            if (window['Prism']) {
                window['Prism'].highlightElement(this.el.nativeElement);
            }
        };
        return CodeHighlighter;
    }());
    CodeHighlighter.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[pCode]'
                },] },
    ];
    /** @nocollapse */
    CodeHighlighter.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    exports.CodeHighlighter = CodeHighlighter;
    var CodeHighlighterModule = (function () {
        function CodeHighlighterModule() {
        }
        return CodeHighlighterModule;
    }());
    CodeHighlighterModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    exports: [CodeHighlighter],
                    declarations: [CodeHighlighter]
                },] },
    ];
    /** @nocollapse */
    CodeHighlighterModule.ctorParameters = function () { return []; };
    exports.CodeHighlighterModule = CodeHighlighterModule;
});
//# sourceMappingURL=codehighlighter.js.map