define(["require", "exports", "@angular/core", "@angular/forms", "@angular/common"], function (require, exports, core_1, forms_1, common_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var InputText = (function () {
        function InputText(el, ngModel) {
            this.el = el;
            this.ngModel = ngModel;
        }
        InputText.prototype.ngDoCheck = function () {
            this.updateFilledState();
        };
        //To trigger change detection to manage ui-state-filled for material labels when there is no value binding
        InputText.prototype.onInput = function (e) {
            this.updateFilledState();
        };
        InputText.prototype.updateFilledState = function () {
            this.filled = (this.el.nativeElement.value && this.el.nativeElement.value.length) ||
                (this.ngModel && this.ngModel.model);
        };
        return InputText;
    }());
    InputText.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[pInputText]',
                    host: {
                        '[class.ui-inputtext]': 'true',
                        '[class.ui-corner-all]': 'true',
                        '[class.ui-state-default]': 'true',
                        '[class.ui-widget]': 'true',
                        '[class.ui-state-filled]': 'filled'
                    }
                },] },
    ];
    /** @nocollapse */
    InputText.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: forms_1.NgModel, decorators: [{ type: core_1.Optional },] },
    ]; };
    InputText.propDecorators = {
        'onInput': [{ type: core_1.HostListener, args: ['input', ['$event'],] },],
    };
    exports.InputText = InputText;
    var InputTextModule = (function () {
        function InputTextModule() {
        }
        return InputTextModule;
    }());
    InputTextModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    exports: [InputText],
                    declarations: [InputText]
                },] },
    ];
    /** @nocollapse */
    InputTextModule.ctorParameters = function () { return []; };
    exports.InputTextModule = InputTextModule;
});
//# sourceMappingURL=inputtext.js.map