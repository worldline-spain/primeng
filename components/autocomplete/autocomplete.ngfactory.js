"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./autocomplete");
var i2 = require("@angular/common");
var i3 = require("../inputtext/inputtext");
var i4 = require("../button/button");
var i5 = require("../common/shared");
var i6 = require("../dom/domhandler");
var i7 = require("@angular/forms");
var i8 = require("../utils/objectutils");
exports.AutoCompleteModuleNgFactory = i0.ɵcmf(i1.AutoCompleteModule, [], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(512, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(512, i3.InputTextModule, i3.InputTextModule, []), i0.ɵmpd(512, i4.ButtonModule, i4.ButtonModule, []),
        i0.ɵmpd(512, i5.SharedModule, i5.SharedModule, []), i0.ɵmpd(512, i1.AutoCompleteModule, i1.AutoCompleteModule, [])]);
});
var styles_AutoComplete = [];
exports.RenderType_AutoComplete = i0.ɵcrt({ encapsulation: 2, styles: styles_AutoComplete,
    data: {} });
function View_AutoComplete_1(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, [[1, 0], ['in', 1]], null, 2, 'input', [['autocomplete',
                'off']], [[1, 'type', 0], [1, 'id', 0], [1, 'required', 0], [8, 'value', 0], [1, 'placeholder',
                0], [1, 'size', 0], [1, 'maxlength', 0], [1, 'tabindex', 0], [8, 'readOnly', 0], [8, 'disabled',
                0]], [[null, 'click'], [null, 'input'], [null, 'keydown'],
            [null, 'keyup'], [null, 'focus'], [null, 'blur'], [null,
                'change']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.onInputClick($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('input' === en)) {
                var pd_1 = (_co.onInput($event) !== false);
                ad = (pd_1 && ad);
            }
            if (('keydown' === en)) {
                var pd_2 = (_co.onKeydown($event) !== false);
                ad = (pd_2 && ad);
            }
            if (('keyup' === en)) {
                var pd_3 = (_co.onKeyup($event) !== false);
                ad = (pd_3 && ad);
            }
            if (('focus' === en)) {
                var pd_4 = (_co.onInputFocus($event) !== false);
                ad = (pd_4 && ad);
            }
            if (('blur' === en)) {
                var pd_5 = (_co.onInputBlur($event) !== false);
                ad = (pd_5 && ad);
            }
            if (('change' === en)) {
                var pd_6 = (_co.onInputChange($event) !== false);
                ad = (pd_6 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers,
            i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0, 'klass'], ngClass: [1,
                'ngClass'] }, null), i0.ɵdid(278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers,
            i0.ElementRef, i0.Renderer], { ngStyle: [0, 'ngStyle'] }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_10 = _co.inputStyleClass;
        var currVal_11 = 'ui-inputtext ui-widget ui-state-default ui-corner-all ui-autocomplete-input';
        _ck(_v, 1, 0, currVal_10, currVal_11);
        var currVal_12 = _co.inputStyle;
        _ck(_v, 2, 0, currVal_12);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.type;
        var currVal_1 = _co.inputId;
        var currVal_2 = _co.required;
        var currVal_3 = _co.inputFieldValue;
        var currVal_4 = _co.placeholder;
        var currVal_5 = _co.size;
        var currVal_6 = _co.maxlength;
        var currVal_7 = _co.tabindex;
        var currVal_8 = _co.readonly;
        var currVal_9 = _co.disabled;
        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9);
    });
}
function View_AutoComplete_4(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 0, 'span', [['class',
                'ui-autocomplete-token-icon fa fa-fw fa-close']], null, [[null,
                'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.removeItem(i0.ɵnov(_v.parent, 0)) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null))], null, null);
}
function View_AutoComplete_5(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'span', [['class',
                'ui-autocomplete-token-label']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', '']))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = (_co.field ? _co.objectUtils.resolveFieldData(_v.parent.context.$implicit, _co.field) : _v.parent.context.$implicit);
        _ck(_v, 1, 0, currVal_0);
    });
}
function View_AutoComplete_6(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 0, null, null, null, null, null, null, null))], null, null);
}
function View_AutoComplete_3(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, [['token', 1]], null, 11, 'li', [['class',
                'ui-autocomplete-token ui-state-highlight ui-corner-all']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])),
        (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AutoComplete_4)),
        i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n                    '])),
        (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AutoComplete_5)),
        i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n                    '])),
        (_l()(), i0.ɵand(16777216, null, null, 2, null, View_AutoComplete_6)),
        i0.ɵdid(540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0,
                'ngTemplateOutletContext'], ngTemplateOutlet: [1, 'ngTemplateOutlet'] }, null),
        i0.ɵpod({ $implicit: 0 }), (_l()(), i0.ɵted(null, ['\n                ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = !_co.disabled;
        _ck(_v, 3, 0, currVal_0);
        var currVal_1 = !_co.selectedItemTemplate;
        _ck(_v, 6, 0, currVal_1);
        var currVal_2 = _ck(_v, 10, 0, _v.context.$implicit);
        var currVal_3 = _co.selectedItemTemplate;
        _ck(_v, 9, 0, currVal_2, currVal_3);
    }, null);
}
function View_AutoComplete_2(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, [[4, 0], ['multiContainer', 1]], null, 12, 'ul', [['class', 'ui-autocomplete-multiple-container ui-widget ui-inputtext ui-state-default ui-corner-all']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i0.ɵnov(_v, 9).focus() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers,
            i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0, 'klass'], ngClass: [1,
                'ngClass'] }, null), i0.ɵpod({ 'ui-state-disabled': 0, 'ui-state-focus': 1 }),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AutoComplete_3)), i0.ɵdid(802816, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵeld(0, null, null, 4, 'li', [['class', 'ui-autocomplete-input-token']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, [[2, 0], ['multiIn', 1]], null, 1, 'input', [['autocomplete', 'off']], [[1,
                'type', 0], [1, 'id', 0], [8, 'disabled', 0], [1, 'placeholder', 0], [1, 'tabindex',
                0], [8, 'className', 0]], [[null, 'input'], [null, 'click'],
            [null, 'keydown'], [null, 'keyup'], [null, 'focus'],
            [null, 'blur']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('input' === en)) {
                var pd_0 = (_co.onInput($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                var pd_1 = (_co.onInputClick($event) !== false);
                ad = (pd_1 && ad);
            }
            if (('keydown' === en)) {
                var pd_2 = (_co.onKeydown($event) !== false);
                ad = (pd_2 && ad);
            }
            if (('keyup' === en)) {
                var pd_3 = (_co.onKeyup($event) !== false);
                ad = (pd_3 && ad);
            }
            if (('focus' === en)) {
                var pd_4 = (_co.onInputFocus($event) !== false);
                ad = (pd_4 && ad);
            }
            if (('blur' === en)) {
                var pd_5 = (_co.onInputBlur($event) !== false);
                ad = (pd_5 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { ngStyle: [0, 'ngStyle'] }, null),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵted(null, ['\n            ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = 'ui-autocomplete-multiple-container ui-widget ui-inputtext ui-state-default ui-corner-all';
        var currVal_1 = _ck(_v, 2, 0, _co.disabled, _co.focus);
        _ck(_v, 1, 0, currVal_0, currVal_1);
        var currVal_2 = _co.value;
        _ck(_v, 5, 0, currVal_2);
        var currVal_9 = _co.inputStyle;
        _ck(_v, 10, 0, currVal_9);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_3 = _co.type;
        var currVal_4 = _co.inputId;
        var currVal_5 = _co.disabled;
        var currVal_6 = ((_co.value && _co.value.length) ? null : _co.placeholder);
        var currVal_7 = _co.tabindex;
        var currVal_8 = _co.inputStyleClass;
        _ck(_v, 9, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);
    });
}
function View_AutoComplete_7(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 0, 'i', [['class',
                'ui-autocomplete-loader fa fa-circle-o-notch fa-spin fa-fw']], null, null, null, null, null))], null, null);
}
function View_AutoComplete_8(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, [[5, 0], ['ddBtn', 1]], null, 2, 'button', [['class', 'ui-autocomplete-dropdown'], ['icon', 'fa-fw fa-caret-down'], ['pButton',
                ''], ['type', 'button']], [[8, 'disabled', 0]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.handleDropdownClick($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵprd(512, null, i6.DomHandler, i6.DomHandler, []), i0.ɵdid(4341760, null, 0, i4.ButtonDirective, [i0.ElementRef,
            i6.DomHandler], { icon: [0, 'icon'] }, null)], function (_ck, _v) {
        var currVal_1 = 'fa-fw fa-caret-down';
        _ck(_v, 2, 0, currVal_1);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.disabled;
        _ck(_v, 0, 0, currVal_0);
    });
}
function View_AutoComplete_11(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(),
            i0.ɵted(null, ['', '']))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = (_co.field ? _co.objectUtils.resolveFieldData(_v.parent.context.$implicit, _co.field) : _v.parent.context.$implicit);
        _ck(_v, 1, 0, currVal_0);
    });
}
function View_AutoComplete_12(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 0, null, null, null, null, null, null, null))], null, null);
}
function View_AutoComplete_10(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 10, 'li', [], null, [[null, 'mouseenter'], [null, 'mouseleave'], [null,
                'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('mouseenter' === en)) {
                var pd_0 = ((_co.highlightOption = _v.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            if (('mouseleave' === en)) {
                var pd_1 = ((_co.highlightOption = null) !== false);
                ad = (pd_1 && ad);
            }
            if (('click' === en)) {
                var pd_2 = (_co.selectItem(_v.context.$implicit) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers,
            i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { ngClass: [0, 'ngClass'] }, null),
        i0.ɵpod({ 'ui-autocomplete-list-item ui-corner-all': 0, 'ui-state-highlight': 1 }),
        (_l()(), i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AutoComplete_11)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n                        '])),
        (_l()(), i0.ɵand(16777216, null, null, 2, null, View_AutoComplete_12)),
        i0.ɵdid(540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0,
                'ngTemplateOutletContext'], ngTemplateOutlet: [1, 'ngTemplateOutlet'] }, null),
        i0.ɵpod({ $implicit: 0, index: 1 }), (_l()(), i0.ɵted(null, ['\n                    ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _ck(_v, 2, 0, true, (_co.highlightOption == _v.context.$implicit));
        _ck(_v, 1, 0, currVal_0);
        var currVal_1 = !_co.itemTemplate;
        _ck(_v, 5, 0, currVal_1);
        var currVal_2 = _ck(_v, 9, 0, _v.context.$implicit, _v.context.index);
        var currVal_3 = _co.itemTemplate;
        _ck(_v, 8, 0, currVal_2, currVal_3);
    }, null);
}
function View_AutoComplete_13(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'li', [['class',
                'ui-autocomplete-list-item ui-corner-all']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', '']))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.emptyMessage;
        _ck(_v, 1, 0, currVal_0);
    });
}
function View_AutoComplete_9(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 7, 'ul', [['class',
                'ui-autocomplete-items ui-autocomplete-list ui-widget-content ui-widget ui-corner-all ui-helper-reset']], null, null, null, null, null)), (_l()(),
            i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AutoComplete_10)), i0.ɵdid(802816, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i0.ɵted(null, ['\n                    '])),
        (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AutoComplete_13)),
        i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n                ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.suggestions;
        _ck(_v, 3, 0, currVal_0);
        var currVal_1 = (_co.noResults && _co.emptyMessage);
        _ck(_v, 6, 0, currVal_1);
    }, null);
}
function View_AutoComplete_0(_l) {
    return i0.ɵvid(0, [i0.ɵqud(671088640, 1, { inputEL: 0 }), i0.ɵqud(671088640, 2, { multiInputEL: 0 }),
        i0.ɵqud(402653184, 3, { panelEL: 0 }), i0.ɵqud(671088640, 4, { multiContainerEL: 0 }), i0.ɵqud(671088640, 5, { dropdownButton: 0 }), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(),
            i0.ɵeld(0, null, null, 19, 'span', [], null, null, null, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef,
            i0.Renderer], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
        i0.ɵpod({ 'ui-autocomplete ui-widget': 0, 'ui-autocomplete-dd': 1, 'ui-autocomplete-multiple': 2 }),
        i0.ɵdid(278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef,
            i0.Renderer], { ngStyle: [0, 'ngStyle'] }, null), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AutoComplete_1)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(),
            i0.ɵand(16777216, null, null, 1, null, View_AutoComplete_2)),
        i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AutoComplete_7)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(),
            i0.ɵand(16777216, null, null, 1, null, View_AutoComplete_8)),
        i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵeld(0, [[3, 0], ['panel', 1]], null, 4, 'div', [['class', 'ui-autocomplete-panel ui-widget-content ui-corner-all ui-shadow']], [[4, 'display', null], [4, 'width', null], [4, 'max-height', null]], null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AutoComplete_9)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(),
            i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n    ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.styleClass;
        var currVal_1 = _ck(_v, 8, 0, true, _co.dropdown, _co.multiple);
        _ck(_v, 7, 0, currVal_0, currVal_1);
        var currVal_2 = _co.style;
        _ck(_v, 9, 0, currVal_2);
        var currVal_3 = !_co.multiple;
        _ck(_v, 12, 0, currVal_3);
        var currVal_4 = _co.multiple;
        _ck(_v, 14, 0, currVal_4);
        var currVal_5 = _co.loading;
        _ck(_v, 16, 0, currVal_5);
        var currVal_6 = _co.dropdown;
        _ck(_v, 18, 0, currVal_6);
        var currVal_10 = _co.panelVisible;
        _ck(_v, 23, 0, currVal_10);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_7 = (_co.panelVisible ? 'block' : 'none');
        var currVal_8 = (_co.appendTo ? 'auto' : '100%');
        var currVal_9 = _co.scrollHeight;
        _ck(_v, 20, 0, currVal_7, currVal_8, currVal_9);
    });
}
exports.View_AutoComplete_0 = View_AutoComplete_0;
function View_AutoComplete_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 5, 'p-autoComplete', [], [[2, 'ui-inputwrapper-filled', null], [2, 'ui-inputwrapper-focus',
                null]], null, null, View_AutoComplete_0, exports.RenderType_AutoComplete)),
        i0.ɵprd(5120, null, i7.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i1.AutoComplete]), i0.ɵprd(512, null, i6.DomHandler, i6.DomHandler, []),
        i0.ɵprd(512, null, i8.ObjectUtils, i8.ObjectUtils, []), i0.ɵdid(14073856, null, 1, i1.AutoComplete, [i0.ElementRef, i6.DomHandler, i0.Renderer2,
            i8.ObjectUtils, i0.ChangeDetectorRef, i0.IterableDiffers], null, null), i0.ɵqud(603979776, 1, { templates: 1 })], function (_ck, _v) {
        _ck(_v, 4, 0);
    }, function (_ck, _v) {
        var currVal_0 = i0.ɵnov(_v, 4).filled;
        var currVal_1 = i0.ɵnov(_v, 4).focus;
        _ck(_v, 0, 0, currVal_0, currVal_1);
    });
}
exports.View_AutoComplete_Host_0 = View_AutoComplete_Host_0;
exports.AutoCompleteNgFactory = i0.ɵccf('p-autoComplete', i1.AutoComplete, View_AutoComplete_Host_0, { minLength: 'minLength', delay: 'delay',
    style: 'style', styleClass: 'styleClass', inputStyle: 'inputStyle', inputId: 'inputId',
    inputStyleClass: 'inputStyleClass', placeholder: 'placeholder', readonly: 'readonly',
    disabled: 'disabled', maxlength: 'maxlength', required: 'required', size: 'size',
    appendTo: 'appendTo', autoHighlight: 'autoHighlight', forceSelection: 'forceSelection',
    type: 'type', field: 'field', scrollHeight: 'scrollHeight', dropdown: 'dropdown',
    dropdownMode: 'dropdownMode', multiple: 'multiple', tabindex: 'tabindex', dataKey: 'dataKey',
    emptyMessage: 'emptyMessage', immutable: 'immutable', suggestions: 'suggestions' }, { completeMethod: 'completeMethod', onSelect: 'onSelect', onUnselect: 'onUnselect', onFocus: 'onFocus',
    onBlur: 'onBlur', onDropdownClick: 'onDropdownClick', onClear: 'onClear', onKeyUp: 'onKeyUp' }, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovV29ya3NwYWNlL3ByaW1lbmcvc3JjL2FwcC9jb21wb25lbnRzL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovV29ya3NwYWNlL3ByaW1lbmcvc3JjL2FwcC9jb21wb25lbnRzL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUudHMiLCJuZzovLy9DOi9Xb3Jrc3BhY2UvcHJpbWVuZy9zcmMvYXBwL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS50cy5BdXRvQ29tcGxldGUuaHRtbCIsIm5nOi8vL0M6L1dvcmtzcGFjZS9wcmltZW5nL3NyYy9hcHAvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLnRzLkF1dG9Db21wbGV0ZV9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuICAgICAgICA8c3BhbiBbbmdDbGFzc109XCJ7J3VpLWF1dG9jb21wbGV0ZSB1aS13aWRnZXQnOnRydWUsJ3VpLWF1dG9jb21wbGV0ZS1kZCc6ZHJvcGRvd24sJ3VpLWF1dG9jb21wbGV0ZS1tdWx0aXBsZSc6bXVsdGlwbGV9XCIgW25nU3R5bGVdPVwic3R5bGVcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiPlxuICAgICAgICAgICAgPGlucHV0ICpuZ0lmPVwiIW11bHRpcGxlXCIgI2luIFthdHRyLnR5cGVdPVwidHlwZVwiIFthdHRyLmlkXT1cImlucHV0SWRcIiBbbmdTdHlsZV09XCJpbnB1dFN0eWxlXCIgW2NsYXNzXT1cImlucHV0U3R5bGVDbGFzc1wiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIFthdHRyLnJlcXVpcmVkXT1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cIid1aS1pbnB1dHRleHQgdWktd2lkZ2V0IHVpLXN0YXRlLWRlZmF1bHQgdWktY29ybmVyLWFsbCB1aS1hdXRvY29tcGxldGUtaW5wdXQnXCIgW3ZhbHVlXT1cImlucHV0RmllbGRWYWx1ZVwiXG4gICAgICAgICAgICAoY2xpY2spPVwib25JbnB1dENsaWNrKCRldmVudClcIiAoaW5wdXQpPVwib25JbnB1dCgkZXZlbnQpXCIgKGtleWRvd24pPVwib25LZXlkb3duKCRldmVudClcIiAoa2V5dXApPVwib25LZXl1cCgkZXZlbnQpXCIgKGZvY3VzKT1cIm9uSW5wdXRGb2N1cygkZXZlbnQpXCIgKGJsdXIpPVwib25JbnB1dEJsdXIoJGV2ZW50KVwiIChjaGFuZ2UpPVwib25JbnB1dENoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgW2F0dHIuc2l6ZV09XCJzaXplXCIgW2F0dHIubWF4bGVuZ3RoXT1cIm1heGxlbmd0aFwiIFthdHRyLnRhYmluZGV4XT1cInRhYmluZGV4XCIgW3JlYWRvbmx5XT1cInJlYWRvbmx5XCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgID48dWwgKm5nSWY9XCJtdWx0aXBsZVwiICNtdWx0aUNvbnRhaW5lciBjbGFzcz1cInVpLWF1dG9jb21wbGV0ZS1tdWx0aXBsZS1jb250YWluZXIgdWktd2lkZ2V0IHVpLWlucHV0dGV4dCB1aS1zdGF0ZS1kZWZhdWx0IHVpLWNvcm5lci1hbGxcIiBbbmdDbGFzc109XCJ7J3VpLXN0YXRlLWRpc2FibGVkJzpkaXNhYmxlZCwndWktc3RhdGUtZm9jdXMnOmZvY3VzfVwiIChjbGljayk9XCJtdWx0aUluLmZvY3VzKClcIj5cbiAgICAgICAgICAgICAgICA8bGkgI3Rva2VuICpuZ0Zvcj1cImxldCB2YWwgb2YgdmFsdWVcIiBjbGFzcz1cInVpLWF1dG9jb21wbGV0ZS10b2tlbiB1aS1zdGF0ZS1oaWdobGlnaHQgdWktY29ybmVyLWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVpLWF1dG9jb21wbGV0ZS10b2tlbi1pY29uIGZhIGZhLWZ3IGZhLWNsb3NlXCIgKGNsaWNrKT1cInJlbW92ZUl0ZW0odG9rZW4pXCIgKm5nSWY9XCIhZGlzYWJsZWRcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIXNlbGVjdGVkSXRlbVRlbXBsYXRlXCIgY2xhc3M9XCJ1aS1hdXRvY29tcGxldGUtdG9rZW4tbGFiZWxcIj57e2ZpZWxkID8gb2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YSh2YWwsIGZpZWxkKTogdmFsfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJzZWxlY3RlZEl0ZW1UZW1wbGF0ZTsgY29udGV4dDogeyRpbXBsaWNpdDogdmFsfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidWktYXV0b2NvbXBsZXRlLWlucHV0LXRva2VuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjbXVsdGlJbiBbYXR0ci50eXBlXT1cInR5cGVcIiBbYXR0ci5pZF09XCJpbnB1dElkXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW2F0dHIucGxhY2Vob2xkZXJdPVwiKHZhbHVlJiZ2YWx1ZS5sZW5ndGggPyBudWxsIDogcGxhY2Vob2xkZXIpXCIgW2F0dHIudGFiaW5kZXhdPVwidGFiaW5kZXhcIiAoaW5wdXQpPVwib25JbnB1dCgkZXZlbnQpXCIgIChjbGljayk9XCJvbklucHV0Q2xpY2soJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGtleWRvd24pPVwib25LZXlkb3duKCRldmVudClcIiAoa2V5dXApPVwib25LZXl1cCgkZXZlbnQpXCIgKGZvY3VzKT1cIm9uSW5wdXRGb2N1cygkZXZlbnQpXCIgKGJsdXIpPVwib25JbnB1dEJsdXIoJGV2ZW50KVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIFtuZ1N0eWxlXT1cImlucHV0U3R5bGVcIiBbY2xhc3NdPVwiaW5wdXRTdHlsZUNsYXNzXCI+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWxcbiAgICAgICAgICAgID48aSAqbmdJZj1cImxvYWRpbmdcIiBjbGFzcz1cInVpLWF1dG9jb21wbGV0ZS1sb2FkZXIgZmEgZmEtY2lyY2xlLW8tbm90Y2ggZmEtc3BpbiBmYS1md1wiPjwvaT48YnV0dG9uICNkZEJ0biB0eXBlPVwiYnV0dG9uXCIgcEJ1dHRvbiBpY29uPVwiZmEtZncgZmEtY2FyZXQtZG93blwiIGNsYXNzPVwidWktYXV0b2NvbXBsZXRlLWRyb3Bkb3duXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiaGFuZGxlRHJvcGRvd25DbGljaygkZXZlbnQpXCIgKm5nSWY9XCJkcm9wZG93blwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiAjcGFuZWwgY2xhc3M9XCJ1aS1hdXRvY29tcGxldGUtcGFuZWwgdWktd2lkZ2V0LWNvbnRlbnQgdWktY29ybmVyLWFsbCB1aS1zaGFkb3dcIiBbc3R5bGUuZGlzcGxheV09XCJwYW5lbFZpc2libGUgPyAnYmxvY2snIDogJ25vbmUnXCIgW3N0eWxlLndpZHRoXT1cImFwcGVuZFRvID8gJ2F1dG8nIDogJzEwMCUnXCIgW3N0eWxlLm1heC1oZWlnaHRdPVwic2Nyb2xsSGVpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwidWktYXV0b2NvbXBsZXRlLWl0ZW1zIHVpLWF1dG9jb21wbGV0ZS1saXN0IHVpLXdpZGdldC1jb250ZW50IHVpLXdpZGdldCB1aS1jb3JuZXItYWxsIHVpLWhlbHBlci1yZXNldFwiICpuZ0lmPVwicGFuZWxWaXNpYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHN1Z2dlc3Rpb25zOyBsZXQgaWR4ID0gaW5kZXhcIiBbbmdDbGFzc109XCJ7J3VpLWF1dG9jb21wbGV0ZS1saXN0LWl0ZW0gdWktY29ybmVyLWFsbCc6dHJ1ZSwndWktc3RhdGUtaGlnaGxpZ2h0JzooaGlnaGxpZ2h0T3B0aW9uPT1vcHRpb24pfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJoaWdobGlnaHRPcHRpb249b3B0aW9uXCIgKG1vdXNlbGVhdmUpPVwiaGlnaGxpZ2h0T3B0aW9uPW51bGxcIiAoY2xpY2spPVwic2VsZWN0SXRlbShvcHRpb24pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFpdGVtVGVtcGxhdGVcIj57e2ZpZWxkID8gb2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShvcHRpb24sIGZpZWxkKSA6IG9wdGlvbn19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIml0ZW1UZW1wbGF0ZTsgY29udGV4dDogeyRpbXBsaWNpdDogb3B0aW9uLCBpbmRleDogaWR4fVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XCJub1Jlc3VsdHMgJiYgZW1wdHlNZXNzYWdlXCIgY2xhc3M9XCJ1aS1hdXRvY29tcGxldGUtbGlzdC1pdGVtIHVpLWNvcm5lci1hbGxcIj57e2VtcHR5TWVzc2FnZX19PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAiLCI8cC1hdXRvQ29tcGxldGU+PC9wLWF1dG9Db21wbGV0ZT4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ0VZO01BQUE7TUFBQTtNQUFBO01BQUE7VUFBQTtJQUFBO0lBQUE7SUFFQTtNQUFBO01BQUE7SUFBQTtJQUErQjtNQUFBO01BQUE7SUFBQTtJQUEwQjtNQUFBO01BQUE7SUFBQTtJQUE4QjtNQUFBO01BQUE7SUFBQTtJQUEwQjtNQUFBO01BQUE7SUFBQTtJQUErQjtNQUFBO01B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
//# sourceMappingURL=autocomplete.ngfactory.js.map