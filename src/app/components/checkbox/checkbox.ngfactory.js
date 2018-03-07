/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
define(["require", "exports", "@angular/core", "./checkbox", "@angular/common", "@angular/forms"], function (require, exports, i0, i1, i2, i3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CheckboxModuleNgFactory = i0.ɵcmf(i1.CheckboxModule, [], function (_l) {
        return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(512, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(512, i1.CheckboxModule, i1.CheckboxModule, [])]);
    });
    var styles_Checkbox = [];
    exports.RenderType_Checkbox = i0.ɵcrt({ encapsulation: 2, styles: styles_Checkbox,
        data: {} });
    function View_Checkbox_1(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 3, 'label', [['class',
                    'ui-chkbox-label']], [[1, 'for', 0]], [[null, 'click']], function (_v, en, $event) {
                var ad = true;
                var _co = _v.component;
                if (('click' === en)) {
                    var pd_0 = (_co.onClick($event, i0.ɵnov(_v.parent, 7), true) !== false);
                    ad = (pd_0 && ad);
                }
                return ad;
            }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers,
                i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0, 'klass'], ngClass: [1,
                    'ngClass'] }, null), i0.ɵpod({ 'ui-label-active': 0, 'ui-label-disabled': 1,
                'ui-label-focus': 2 }), (_l()(), i0.ɵted(null, ['', '']))], function (_ck, _v) {
            var _co = _v.component;
            var currVal_1 = 'ui-chkbox-label';
            var currVal_2 = _ck(_v, 2, 0, _co.checked, _co.disabled, _co.focused);
            _ck(_v, 1, 0, currVal_1, currVal_2);
        }, function (_ck, _v) {
            var _co = _v.component;
            var currVal_0 = _co.inputId;
            _ck(_v, 0, 0, currVal_0);
            var currVal_3 = _co.label;
            _ck(_v, 3, 0, currVal_3);
        });
    }
    function View_Checkbox_0(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 19, 'div', [], null, null, null, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0,
                    'klass'], ngClass: [1, 'ngClass'] }, null), i0.ɵdid(278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { ngStyle: [0, 'ngStyle'] }, null), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 5, 'div', [['class', 'ui-helper-hidden-accessible']], null, null, null, null, null)), (_l()(),
                i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, [['cb', 1]], null, 2, 'input', [['type', 'checkbox']], [[1, 'id', 0], [8, 'name', 0], [8, 'value',
                    0], [8, 'checked', 0], [8, 'disabled', 0], [1, 'tabindex', 0]], [[null, 'focus'],
                [null, 'blur'], [null, 'change']], function (_v, en, $event) {
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
                if (('change' === en)) {
                    var pd_2 = (_co.handleChange($event) !== false);
                    ad = (pd_2 && ad);
                }
                return ad;
            }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers,
                i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { ngClass: [0, 'ngClass'] }, null),
            i0.ɵpod({ 'ui-state-focus': 0 }), (_l()(), i0.ɵted(null, ['\n            '])),
            (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 7, 'div', [['class', 'ui-chkbox-box ui-widget ui-corner-all ui-state-default']], null, [[null, 'click']], function (_v, en, $event) {
                var ad = true;
                var _co = _v.component;
                if (('click' === en)) {
                    var pd_0 = (_co.onClick($event, i0.ɵnov(_v, 7), true) !== false);
                    ad = (pd_0 && ad);
                }
                return ad;
            }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0,
                    'klass'], ngClass: [1, 'ngClass'] }, null), i0.ɵpod({ 'ui-state-active': 0,
                'ui-state-disabled': 1, 'ui-state-focus': 2 }), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 2, 'span', [['class', 'ui-chkbox-icon ui-clickable']], null, null, null, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null), i0.ɵpod({ 'fa fa-check': 0 }),
            (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(),
                i0.ɵand(16777216, null, null, 1, null, View_Checkbox_1)),
            i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0,
                    'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n    ']))], function (_ck, _v) {
            var _co = _v.component;
            var currVal_0 = _co.styleClass;
            var currVal_1 = 'ui-chkbox ui-widget';
            _ck(_v, 2, 0, currVal_0, currVal_1);
            var currVal_2 = _co.style;
            _ck(_v, 3, 0, currVal_2);
            var currVal_9 = _ck(_v, 9, 0, _co.focused);
            _ck(_v, 8, 0, currVal_9);
            var currVal_10 = 'ui-chkbox-box ui-widget ui-corner-all ui-state-default';
            var currVal_11 = _ck(_v, 14, 0, _co.checked, _co.disabled, _co.focused);
            _ck(_v, 13, 0, currVal_10, currVal_11);
            var currVal_12 = 'ui-chkbox-icon ui-clickable';
            var currVal_13 = _ck(_v, 18, 0, _co.checked);
            _ck(_v, 17, 0, currVal_12, currVal_13);
            var currVal_14 = _co.label;
            _ck(_v, 23, 0, currVal_14);
        }, function (_ck, _v) {
            var _co = _v.component;
            var currVal_3 = _co.inputId;
            var currVal_4 = _co.name;
            var currVal_5 = _co.value;
            var currVal_6 = _co.checked;
            var currVal_7 = _co.disabled;
            var currVal_8 = _co.tabindex;
            _ck(_v, 7, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);
        });
    }
    exports.View_Checkbox_0 = View_Checkbox_0;
    function View_Checkbox_Host_0(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 2, 'p-checkbox', [], null, null, null, View_Checkbox_0, exports.RenderType_Checkbox)),
            i0.ɵprd(5120, null, i3.NG_VALUE_ACCESSOR, function (p0_0) {
                return [p0_0];
            }, [i1.Checkbox]), i0.ɵdid(49152, null, 0, i1.Checkbox, [i0.ChangeDetectorRef], null, null)], null, null);
    }
    exports.View_Checkbox_Host_0 = View_Checkbox_Host_0;
    exports.CheckboxNgFactory = i0.ɵccf('p-checkbox', i1.Checkbox, View_Checkbox_Host_0, { value: 'value', name: 'name', disabled: 'disabled',
        binary: 'binary', label: 'label', tabindex: 'tabindex', inputId: 'inputId', style: 'style',
        styleClass: 'styleClass', formControl: 'formControl' }, { onChange: 'onChange' }, []);
});
//# sourceMappingURL=checkbox.ngfactory.js.map