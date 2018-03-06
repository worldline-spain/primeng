/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
define(["require", "exports", "@angular/core", "./button", "@angular/common"], function (require, exports, i0, i1, i2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ButtonModuleNgFactory = i0.ɵcmf(i1.ButtonModule, [], function (_l) {
        return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(512, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(512, i1.ButtonModule, i1.ButtonModule, [])]);
    });
    var styles_Button = [];
    exports.RenderType_Button = i0.ɵcrt({ encapsulation: 2, styles: styles_Button,
        data: {} });
    function View_Button_1(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 2, 'span', [], null, null, null, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef,
                i0.Renderer], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null), i0.ɵpod({ 'ui-clickable': 0,
                'ui-button-icon-left': 1, 'ui-button-icon-right': 2 })], function (_ck, _v) {
            var _co = _v.component;
            var currVal_0 = _co.icon;
            var currVal_1 = _ck(_v, 2, 0, true, (_co.iconPos === 'left'), (_co.iconPos === 'right'));
            _ck(_v, 1, 0, currVal_0, currVal_1);
        }, null);
    }
    function View_Button_0(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 9, 'button', [], [[1, 'type', 0], [8, 'style',
                    2], [8, 'disabled', 0]], [[null, 'click'], [null, 'focus'], [null,
                    'blur']], function (_v, en, $event) {
                var ad = true;
                var _co = _v.component;
                if (('click' === en)) {
                    var pd_0 = (_co.onClick.emit($event) !== false);
                    ad = (pd_0 && ad);
                }
                if (('focus' === en)) {
                    var pd_1 = (_co.onFocus.emit($event) !== false);
                    ad = (pd_1 && ad);
                }
                if (('blur' === en)) {
                    var pd_2 = (_co.onBlur.emit($event) !== false);
                    ad = (pd_2 && ad);
                }
                return ad;
            }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers,
                i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0, 'klass'], ngClass: [1,
                    'ngClass'] }, null), i0.ɵpod({ 'ui-button ui-widget ui-state-default ui-corner-all': 0,
                'ui-button-icon-only': 1, 'ui-button-text-icon-left': 2, 'ui-button-text-icon-right': 3,
                'ui-button-text-only': 4, 'ui-button-text-empty': 5, 'ui-state-disabled': 6 }), (_l()(),
                i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Button_1)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null),
            (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 1, 'span', [['class', 'ui-button-text ui-clickable']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', ''])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n    ']))], function (_ck, _v) {
            var _co = _v.component;
            var currVal_3 = _co.styleClass;
            var currVal_4 = _ck(_v, 3, 0, true, (_co.icon && !_co.label), ((_co.icon && _co.label) && (_co.iconPos === 'left')), ((_co.icon && _co.label) && (_co.iconPos === 'right')), (!_co.icon && _co.label), (!_co.icon && !_co.label), _co.disabled);
            _ck(_v, 2, 0, currVal_3, currVal_4);
            var currVal_5 = _co.icon;
            _ck(_v, 6, 0, currVal_5);
        }, function (_ck, _v) {
            var _co = _v.component;
            var currVal_0 = _co.type;
            var currVal_1 = _co.style;
            var currVal_2 = _co.disabled;
            _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
            var currVal_6 = (_co.label || 'ui-btn');
            _ck(_v, 9, 0, currVal_6);
        });
    }
    exports.View_Button_0 = View_Button_0;
    function View_Button_Host_0(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'p-button', [], null, null, null, View_Button_0, exports.RenderType_Button)),
            i0.ɵdid(49152, null, 0, i1.Button, [], null, null)], null, null);
    }
    exports.View_Button_Host_0 = View_Button_Host_0;
    exports.ButtonNgFactory = i0.ɵccf('p-button', i1.Button, View_Button_Host_0, { type: 'type', iconPos: 'iconPos', icon: 'icon', label: 'label', disabled: 'disabled',
        style: 'style', styleClass: 'styleClass' }, { onClick: 'onClick', onFocus: 'onFocus',
        onBlur: 'onBlur' }, []);
});
//# sourceMappingURL=button.ngfactory.js.map