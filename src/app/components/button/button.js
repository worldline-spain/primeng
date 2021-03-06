define(["require", "exports", "@angular/core", "../dom/domhandler", "@angular/common"], function (require, exports, core_1, domhandler_1, common_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ButtonDirective = (function () {
        function ButtonDirective(el, domHandler) {
            this.el = el;
            this.domHandler = domHandler;
            this.iconPos = 'left';
            this.cornerStyleClass = 'ui-corner-all';
        }
        ButtonDirective.prototype.ngAfterViewInit = function () {
            this.domHandler.addMultipleClasses(this.el.nativeElement, this.getStyleClass());
            if (this.icon) {
                var iconElement = document.createElement("span");
                var iconPosClass = (this.iconPos == 'right') ? 'ui-button-icon-right' : 'ui-button-icon-left';
                iconElement.className = iconPosClass + ' ui-clickable fa fa-fw ' + this.icon;
                this.el.nativeElement.appendChild(iconElement);
            }
            var labelElement = document.createElement("span");
            labelElement.className = 'ui-button-text ui-clickable';
            labelElement.appendChild(document.createTextNode(this.label || 'ui-btn'));
            this.el.nativeElement.appendChild(labelElement);
            this.initialized = true;
        };
        ButtonDirective.prototype.getStyleClass = function () {
            var styleClass = 'ui-button ui-widget ui-state-default ' + this.cornerStyleClass;
            if (this.icon) {
                if (this.label != null && this.label != undefined) {
                    if (this.iconPos == 'left')
                        styleClass = styleClass + ' ui-button-text-icon-left';
                    else
                        styleClass = styleClass + ' ui-button-text-icon-right';
                }
                else {
                    styleClass = styleClass + ' ui-button-icon-only';
                }
            }
            else {
                if (this.label) {
                    styleClass = styleClass + ' ui-button-text-only';
                }
                else {
                    styleClass = styleClass + ' ui-button-text-empty';
                }
            }
            return styleClass;
        };
        Object.defineProperty(ButtonDirective.prototype, "label", {
            get: function () {
                return this._label;
            },
            set: function (val) {
                this._label = val;
                if (this.initialized) {
                    this.domHandler.findSingle(this.el.nativeElement, '.ui-button-text').textContent = this._label;
                    if (!this.icon) {
                        if (this._label) {
                            this.domHandler.removeClass(this.el.nativeElement, 'ui-button-text-empty');
                            this.domHandler.addClass(this.el.nativeElement, 'ui-button-text-only');
                        }
                        else {
                            this.domHandler.addClass(this.el.nativeElement, 'ui-button-text-empty');
                            this.domHandler.removeClass(this.el.nativeElement, 'ui-button-text-only');
                        }
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ButtonDirective.prototype, "icon", {
            get: function () {
                return this._icon;
            },
            set: function (val) {
                this._icon = val;
                if (this.initialized) {
                    var iconPosClass = (this.iconPos == 'right') ? 'ui-button-icon-right' : 'ui-button-icon-left';
                    this.domHandler.findSingle(this.el.nativeElement, '.fa').className =
                        iconPosClass + ' ui-clickable fa fa-fw ' + this.icon;
                }
            },
            enumerable: true,
            configurable: true
        });
        ButtonDirective.prototype.ngOnDestroy = function () {
            while (this.el.nativeElement.hasChildNodes()) {
                this.el.nativeElement.removeChild(this.el.nativeElement.lastChild);
            }
            this.initialized = false;
        };
        return ButtonDirective;
    }());
    ButtonDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[pButton]',
                    providers: [domhandler_1.DomHandler]
                },] },
    ];
    /** @nocollapse */
    ButtonDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: domhandler_1.DomHandler, },
    ]; };
    ButtonDirective.propDecorators = {
        'iconPos': [{ type: core_1.Input },],
        'cornerStyleClass': [{ type: core_1.Input },],
        'label': [{ type: core_1.Input },],
        'icon': [{ type: core_1.Input },],
    };
    exports.ButtonDirective = ButtonDirective;
    var Button = (function () {
        function Button() {
            this.type = 'button';
            this.iconPos = 'left';
            this.onClick = new core_1.EventEmitter();
            this.onFocus = new core_1.EventEmitter();
            this.onBlur = new core_1.EventEmitter();
        }
        return Button;
    }());
    Button.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'p-button',
                    template: "\n        <button [attr.type]=\"type\" [class]=\"styleClass\" [style]=\"style\" [disabled]=\"disabled\"\n            [ngClass]=\"{'ui-button ui-widget ui-state-default ui-corner-all':true,\n                        'ui-button-icon-only': (icon && !label),\n                        'ui-button-text-icon-left': (icon && label && iconPos === 'left'),\n                        'ui-button-text-icon-right': (icon && label && iconPos === 'right'),\n                        'ui-button-text-only': (!icon && label),\n                        'ui-button-text-empty': (!icon && !label),\n                        'ui-state-disabled': disabled}\"\n                        (click)=\"onClick.emit($event)\" (focus)=\"onFocus.emit($event)\" (blur)=\"onBlur.emit($event)\">\n            <span [ngClass]=\"{'ui-clickable': true,\n                        'ui-button-icon-left': (iconPos === 'left'), \n                        'ui-button-icon-right': (iconPos === 'right')}\"\n                        [class]=\"icon\" *ngIf=\"icon\"></span>\n            <span class=\"ui-button-text ui-clickable\">{{label||'ui-btn'}}</span>\n        </button>\n    "
                },] },
    ];
    /** @nocollapse */
    Button.ctorParameters = function () { return []; };
    Button.propDecorators = {
        'type': [{ type: core_1.Input },],
        'iconPos': [{ type: core_1.Input },],
        'icon': [{ type: core_1.Input },],
        'label': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'style': [{ type: core_1.Input },],
        'styleClass': [{ type: core_1.Input },],
        'onClick': [{ type: core_1.Output },],
        'onFocus': [{ type: core_1.Output },],
        'onBlur': [{ type: core_1.Output },],
    };
    exports.Button = Button;
    var ButtonModule = (function () {
        function ButtonModule() {
        }
        return ButtonModule;
    }());
    ButtonModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    exports: [ButtonDirective, Button],
                    declarations: [ButtonDirective, Button]
                },] },
    ];
    /** @nocollapse */
    ButtonModule.ctorParameters = function () { return []; };
    exports.ButtonModule = ButtonModule;
});
//# sourceMappingURL=button.js.map