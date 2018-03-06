/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
define(["require", "exports", "@angular/core", "./inputswitch", "@angular/common", "@angular/forms", "../dom/domhandler"], function (require, exports, i0, i1, i2, i3, i4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InputSwitchModuleNgFactory = i0.ɵcmf(i1.InputSwitchModule, [], function (_l) {
        return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(512, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(512, i1.InputSwitchModule, i1.InputSwitchModule, [])]);
    });
    var styles_InputSwitch = [];
    exports.RenderType_InputSwitch = i0.ɵcrt({ encapsulation: 2, styles: styles_InputSwitch,
        data: {} });
    function View_InputSwitch_0(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 25, 'div', [], null, [[null,
                    'click']], function (_v, en, $event) {
                var ad = true;
                var _co = _v.component;
                if (('click' === en)) {
                    var pd_0 = (_co.toggle($event, i0.ɵnov(_v, 24)) !== false);
                    ad = (pd_0 && ad);
                }
                return ad;
            }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers,
                i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0, 'klass'], ngClass: [1,
                    'ngClass'] }, null), i0.ɵpod({ 'ui-inputswitch ui-widget ui-widget-content ui-corner-all': 0,
                'ui-state-disabled': 1, 'ui-inputswitch-checked': 2, 'ui-state-focus': 3 }), i0.ɵdid(278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { ngStyle: [0,
                    'ngStyle'] }, null), (_l()(), i0.ɵted(null, ['\n            '])),
            (_l()(), i0.ɵeld(0, null, null, 4, 'div', [['class', 'ui-inputswitch-off']], null, null, null, null, null)),
            (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 1, 'span', [['class', 'ui-inputswitch-offlabel']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', ''])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 4, 'div', [['class', 'ui-inputswitch-on']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])),
            (_l()(), i0.ɵeld(0, null, null, 1, 'span', [['class', 'ui-inputswitch-onlabel']], null, null, null, null, null)),
            (_l()(), i0.ɵted(null, ['', ''])), (_l()(), i0.ɵted(null, ['\n            '])),
            (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 2, 'div', [], null, null, null, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { ngClass: [0,
                    'ngClass'] }, null), i0.ɵpod({ 'ui-inputswitch-handle ui-state-default': 0,
                'ui-state-focus': 1 }), (_l()(), i0.ɵted(null, ['\n            '])),
            (_l()(), i0.ɵeld(0, null, null, 3, 'div', [['class', 'ui-helper-hidden-accessible']], null, null, null, null, null)),
            (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, [['in',
                    1]], null, 0, 'input', [['aria-live', 'polite'], ['readonly', 'readonly'],
                ['type', 'checkbox']], [[1, 'aria-label', 0], [1, 'aria-labelledby', 0], [1, 'id',
                    0], [1, 'tabindex', 0]], [[null, 'focus'], [null, 'blur']], function (_v, en, $event) {
                var ad = true;
                var _co = _v.component;
                if (('focus' === en)) {
                    var pd_0 = (_co.onFocus($event) !== false);
                    ad = (pd_0 && ad);
                }
                if (('blur' === en)) {
                    var pd_1 = (_co.onBlur($event) !== false);
                    ad = (pd_1 && ad);
                }
                return ad;
            }, null, null)), (_l()(), i0.ɵted(null, ['\n            '])),
            (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n    ']))], function (_ck, _v) {
            var _co = _v.component;
            var currVal_0 = _co.styleClass;
            var currVal_1 = _ck(_v, 3, 0, true, _co.disabled, _co.checked, _co.focused);
            _ck(_v, 2, 0, currVal_0, currVal_1);
            var currVal_2 = _co.style;
            _ck(_v, 4, 0, currVal_2);
            var currVal_5 = _ck(_v, 20, 0, true, _co.focused);
            _ck(_v, 19, 0, currVal_5);
        }, function (_ck, _v) {
            var _co = _v.component;
            var currVal_3 = _co.offLabel;
            _ck(_v, 9, 0, currVal_3);
            var currVal_4 = _co.onLabel;
            _ck(_v, 15, 0, currVal_4);
            var currVal_6 = _co.ariaLabel;
            var currVal_7 = _co.ariaLabelledBy;
            var currVal_8 = _co.inputId;
            var currVal_9 = _co.tabindex;
            _ck(_v, 24, 0, currVal_6, currVal_7, currVal_8, currVal_9);
        });
    }
    exports.View_InputSwitch_0 = View_InputSwitch_0;
    function View_InputSwitch_Host_0(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 3, 'p-inputSwitch', [], null, null, null, View_InputSwitch_0, exports.RenderType_InputSwitch)),
            i0.ɵprd(5120, null, i3.NG_VALUE_ACCESSOR, function (p0_0) {
                return [p0_0];
            }, [i1.InputSwitch]), i0.ɵprd(512, null, i4.DomHandler, i4.DomHandler, []),
            i0.ɵdid(12632064, null, 0, i1.InputSwitch, [i0.ElementRef, i4.DomHandler], null, null)], null, null);
    }
    exports.View_InputSwitch_Host_0 = View_InputSwitch_Host_0;
    exports.InputSwitchNgFactory = i0.ɵccf('p-inputSwitch', i1.InputSwitch, View_InputSwitch_Host_0, { onLabel: 'onLabel', offLabel: 'offLabel',
        disabled: 'disabled', style: 'style', styleClass: 'styleClass', tabindex: 'tabindex',
        inputId: 'inputId', ariaLabelTemplate: 'ariaLabelTemplate' }, { onChange: 'onChange' }, []);
});
//# sourceMappingURL=inputswitch.ngfactory.js.map