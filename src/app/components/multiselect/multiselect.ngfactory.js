/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
define(["require", "exports", "@angular/core", "./multiselect", "@angular/common", "../common/shared", "@angular/forms", "../dom/domhandler", "../utils/objectutils"], function (require, exports, i0, i1, i2, i3, i4, i5, i6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MultiSelectModuleNgFactory = i0.ɵcmf(i1.MultiSelectModule, [], function (_l) {
        return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(512, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(512, i3.SharedModule, i3.SharedModule, []), i0.ɵmpd(512, i1.MultiSelectModule, i1.MultiSelectModule, [])]);
    });
    var styles_MultiSelect = [];
    exports.RenderType_MultiSelect = i0.ɵcrt({ encapsulation: 2, styles: styles_MultiSelect,
        data: {} });
    function View_MultiSelect_1(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 15, 'div', [['class',
                    'ui-chkbox ui-widget']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                        '])),
            (_l()(), i0.ɵeld(0, null, null, 3, 'div', [['class', 'ui-helper-hidden-accessible']], null, null, null, null, null)),
            (_l()(), i0.ɵted(null, ['\n                            '])), (_l()(), i0.ɵeld(0, [['cb', 1]], null, 0, 'input', [['readonly', 'readonly'], ['type', 'checkbox']], [[8, 'checked', 0]], null, null, null, null)),
            (_l()(), i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵeld(0, null, null, 7, 'div', [['class', 'ui-chkbox-box ui-widget ui-corner-all ui-state-default']], null, [[null, 'click']], function (_v, en, $event) {
                var ad = true;
                var _co = _v.component;
                if (('click' === en)) {
                    var pd_0 = (_co.toggleAll($event, i0.ɵnov(_v, 4)) !== false);
                    ad = (pd_0 && ad);
                }
                return ad;
            }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0,
                    'klass'], ngClass: [1, 'ngClass'] }, null), i0.ɵpod({ 'ui-state-active': 0 }),
            (_l()(), i0.ɵted(null, ['\n                            '])), (_l()(), i0.ɵeld(0, null, null, 2, 'span', [['class', 'ui-chkbox-icon ui-clickable']], null, null, null, null, null)),
            i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers,
                i0.ElementRef, i0.Renderer], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
            i0.ɵpod({ 'fa fa-check': 0 }), (_l()(), i0.ɵted(null, ['\n                        '])),
            (_l()(), i0.ɵted(null, ['\n                    ']))], function (_ck, _v) {
            var _co = _v.component;
            var currVal_1 = 'ui-chkbox-box ui-widget ui-corner-all ui-state-default';
            var currVal_2 = _ck(_v, 9, 0, _co.isAllChecked());
            _ck(_v, 8, 0, currVal_1, currVal_2);
            var currVal_3 = 'ui-chkbox-icon ui-clickable';
            var currVal_4 = _ck(_v, 13, 0, _co.isAllChecked());
            _ck(_v, 12, 0, currVal_3, currVal_4);
        }, function (_ck, _v) {
            var _co = _v.component;
            var currVal_0 = _co.isAllChecked();
            _ck(_v, 4, 0, currVal_0);
        });
    }
    function View_MultiSelect_2(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 5, 'div', [['class',
                    'ui-multiselect-filter-container']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                        '])),
            (_l()(), i0.ɵeld(0, [[3, 0], ['filterInput', 1]], null, 0, 'input', [['class',
                    'ui-inputtext ui-widget ui-state-default ui-corner-all'], ['role', 'textbox'],
                ['type', 'text']], [[1, 'placeholder', 0]], [[null, 'input']], function (_v, en, $event) {
                var ad = true;
                var _co = _v.component;
                if (('input' === en)) {
                    var pd_0 = (_co.onFilter($event) !== false);
                    ad = (pd_0 && ad);
                }
                return ad;
            }, null, null)), (_l()(), i0.ɵted(null, ['\n                        '])),
            (_l()(), i0.ɵeld(0, null, null, 0, 'span', [['class', 'fa fa-fw fa-search']], null, null, null, null, null)),
            (_l()(), i0.ɵted(null, ['\n                    ']))], null, function (_ck, _v) {
            var _co = _v.component;
            var currVal_0 = _co.filterPlaceHolder;
            _ck(_v, 2, 0, currVal_0);
        });
    }
    function View_MultiSelect_4(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null)), (_l()(),
                i0.ɵted(null, ['', '']))], null, function (_ck, _v) {
            var currVal_0 = _v.parent.context.$implicit.label;
            _ck(_v, 1, 0, currVal_0);
        });
    }
    function View_MultiSelect_5(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 0, null, null, null, null, null, null, null))], null, null);
    }
    function View_MultiSelect_3(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 27, 'li', [['class',
                    'ui-multiselect-item ui-corner-all']], [[4, 'display', null]], [[null,
                    'click']], function (_v, en, $event) {
                var ad = true;
                var _co = _v.component;
                if (('click' === en)) {
                    var pd_0 = (_co.onItemClick($event, _v.context.$implicit.value) !== false);
                    ad = (pd_0 && ad);
                }
                return ad;
            }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers,
                i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0, 'klass'], ngClass: [1,
                    'ngClass'] }, null), i0.ɵpod({ 'ui-state-highlight': 0 }), (_l()(), i0.ɵted(null, ['\n                            '])), (_l()(), i0.ɵeld(0, null, null, 15, 'div', [['class', 'ui-chkbox ui-widget']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                                '])),
            (_l()(), i0.ɵeld(0, null, null, 3, 'div', [['class', 'ui-helper-hidden-accessible']], null, null, null, null, null)),
            (_l()(), i0.ɵted(null, ['\n                                    '])), (_l()(),
                i0.ɵeld(0, [['itemcb', 1]], null, 0, 'input', [['readonly', 'readonly'],
                    ['type', 'checkbox']], [[8, 'checked', 0], [1, 'aria-label', 0]], [[null,
                        'focus'], [null, 'blur']], function (_v, en, $event) {
                    var ad = true;
                    var _co = _v.component;
                    if (('focus' === en)) {
                        var pd_0 = ((_co.focusedItemCheckbox = i0.ɵnov(_v, 8)) !== false);
                        ad = (pd_0 && ad);
                    }
                    if (('blur' === en)) {
                        var pd_1 = ((_co.focusedItemCheckbox = null) !== false);
                        ad = (pd_1 && ad);
                    }
                    return ad;
                }, null, null)), (_l()(), i0.ɵted(null, ['\n                                '])),
            (_l()(), i0.ɵted(null, ['\n                                '])), (_l()(),
                i0.ɵeld(0, null, null, 7, 'div', [['class', 'ui-chkbox-box ui-widget ui-corner-all ui-state-default']], null, null, null, null, null)),
            i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers,
                i0.ElementRef, i0.Renderer], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
            i0.ɵpod({ 'ui-state-active': 0, 'ui-state-focus': 1 }), (_l()(), i0.ɵted(null, ['\n                                    '])), (_l()(), i0.ɵeld(0, null, null, 2, 'span', [['class', 'ui-chkbox-icon ui-clickable']], null, null, null, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef,
                i0.Renderer], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
            i0.ɵpod({ 'fa fa-check': 0 }), (_l()(), i0.ɵted(null, ['\n                                '])),
            (_l()(), i0.ɵted(null, ['\n                            '])), (_l()(), i0.ɵted(null, ['\n                            '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MultiSelect_4)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null),
            (_l()(), i0.ɵted(null, ['\n                            '])), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_MultiSelect_5)), i0.ɵdid(540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0,
                    'ngTemplateOutletContext'], ngTemplateOutlet: [1, 'ngTemplateOutlet'] }, null), i0.ɵpod({ $implicit: 0, index: 1 }), (_l()(), i0.ɵted(null, ['\n                        ']))], function (_ck, _v) {
            var _co = _v.component;
            var currVal_1 = 'ui-multiselect-item ui-corner-all';
            var currVal_2 = _ck(_v, 2, 0, _co.isSelected(_v.context.$implicit.value));
            _ck(_v, 1, 0, currVal_1, currVal_2);
            var currVal_5 = 'ui-chkbox-box ui-widget ui-corner-all ui-state-default';
            var currVal_6 = _ck(_v, 13, 0, _co.isSelected(_v.context.$implicit.value), (_co.focusedItemCheckbox === i0.ɵnov(_v, 8)));
            _ck(_v, 12, 0, currVal_5, currVal_6);
            var currVal_7 = 'ui-chkbox-icon ui-clickable';
            var currVal_8 = _ck(_v, 17, 0, _co.isSelected(_v.context.$implicit.value));
            _ck(_v, 16, 0, currVal_7, currVal_8);
            var currVal_9 = !_co.itemTemplate;
            _ck(_v, 22, 0, currVal_9);
            var currVal_10 = _ck(_v, 26, 0, _v.context.$implicit, _co.i);
            var currVal_11 = _co.itemTemplate;
            _ck(_v, 25, 0, currVal_10, currVal_11);
        }, function (_ck, _v) {
            var _co = _v.component;
            var currVal_0 = (_co.isItemVisible(_v.context.$implicit) ? 'block' : 'none');
            _ck(_v, 0, 0, currVal_0);
            var currVal_3 = _co.isSelected(_v.context.$implicit.value);
            var currVal_4 = _v.context.$implicit.label;
            _ck(_v, 8, 0, currVal_3, currVal_4);
        });
    }
    function View_MultiSelect_0(_l) {
        return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { containerViewChild: 0 }), i0.ɵqud(402653184, 2, { panelViewChild: 0 }), i0.ɵqud(671088640, 3, { filterInputChild: 0 }), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, [[1, 0], ['container', 1]], null, 54, 'div', [], null, [[null, 'click']], function (_v, en, $event) {
                var ad = true;
                var _co = _v.component;
                if (('click' === en)) {
                    var pd_0 = (_co.onMouseclick($event, i0.ɵnov(_v, 11)) !== false);
                    ad = (pd_0 && ad);
                }
                return ad;
            }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers,
                i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0, 'klass'], ngClass: [1,
                    'ngClass'] }, null), i0.ɵpod({ 'ui-multiselect ui-widget ui-state-default ui-corner-all': 0,
                'ui-state-focus': 1, 'ui-state-disabled': 2 }), i0.ɵdid(278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { ngStyle: [0, 'ngStyle'] }, null),
            (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 3, 'div', [['class', 'ui-helper-hidden-accessible']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, [['in', 1]], null, 0, 'input', [['readonly', 'readonly'], ['type', 'text']], [[1, 'id', 0], [8, 'disabled', 0], [1,
                    'tabindex', 0]], [[null, 'focus'], [null, 'blur'], [null,
                    'keydown']], function (_v, en, $event) {
                var ad = true;
                var _co = _v.component;
                if (('focus' === en)) {
                    var pd_0 = (_co.onInputFocus($event) !== false);
                    ad = (pd_0 && ad);
                }
                if (('blur' === en)) {
                    var pd_1 = (_co.onInputBlur($event) !== false);
                    ad = (pd_1 && ad);
                }
                if (('keydown' === en)) {
                    var pd_2 = (_co.onInputKeydown($event) !== false);
                    ad = (pd_2 && ad);
                }
                return ad;
            }, null, null)), (_l()(), i0.ɵted(null, ['\n            '])),
            (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 4, 'div', [['class', 'ui-multiselect-label-container']], [[8, 'title',
                    0]], null, null, null, null)), (_l()(),
                i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 1, 'label', [['class', 'ui-multiselect-label ui-corner-all']], null, null, null, null, null)),
            (_l()(), i0.ɵted(null, ['', ''])), (_l()(), i0.ɵted(null, ['\n            '])),
            (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 6, 'div', [], null, null, null, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { ngClass: [0,
                    'ngClass'] }, null), i0.ɵpod({ 'ui-multiselect-trigger ui-state-default ui-corner-right': 0 }),
            (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 1, 'span', [['class', 'ui-clickable']], null, null, null, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n            '])),
            (_l()(), i0.ɵeld(0, [[2, 0], ['panel', 1]], null, 29, 'div', [], [[4,
                    'display', null]], [[null, 'click']], function (_v, en, $event) {
                var ad = true;
                var _co = _v.component;
                if (('click' === en)) {
                    var pd_0 = ((_co.panelClick = true) !== false);
                    ad = (pd_0 && ad);
                }
                return ad;
            }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers,
                i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { ngClass: [0, 'ngClass'] }, null),
            i0.ɵpad(2), i0.ɵdid(278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef,
                i0.Renderer], { ngStyle: [0, 'ngStyle'] }, null), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 14, 'div', [['class', 'ui-widget-header ui-corner-all ui-multiselect-header ui-helper-clearfix']], null, null, null, null, null)),
            i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers,
                i0.ElementRef, i0.Renderer], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
            i0.ɵpod({ 'ui-multiselect-header-no-toggleall': 0 }), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MultiSelect_1)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(),
                i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MultiSelect_2)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n                    '])),
            (_l()(), i0.ɵeld(0, null, null, 3, 'a', [['class', 'ui-multiselect-close ui-corner-all'],
                ['href', '#']], null, [[null, 'click']], function (_v, en, $event) {
                var ad = true;
                var _co = _v.component;
                if (('click' === en)) {
                    var pd_0 = (_co.close($event) !== false);
                    ad = (pd_0 && ad);
                }
                return ad;
            }, null, null)), (_l()(), i0.ɵted(null, ['\n                        '])),
            (_l()(), i0.ɵeld(0, null, null, 0, 'span', [['class', 'fa fa-close']], null, null, null, null, null)),
            (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵted(null, ['\n                '])),
            (_l()(), i0.ɵeld(0, null, null, 7, 'div', [['class', 'ui-multiselect-items-wrapper']], null, null, null, null, null)),
            (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 4, 'ul', [['class', 'ui-multiselect-items ui-multiselect-list ui-widget-content ui-widget ui-corner-all ui-helper-reset']], [[4, 'max-height', null]], null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                        '])),
            (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MultiSelect_3)),
            i0.ɵdid(802816, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef,
                i0.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵted(null, ['\n                '])),
            (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n    ']))], function (_ck, _v) {
            var _co = _v.component;
            var currVal_0 = _co.styleClass;
            var currVal_1 = _ck(_v, 6, 0, true, _co.focus, _co.disabled);
            _ck(_v, 5, 0, currVal_0, currVal_1);
            var currVal_2 = _co.style;
            _ck(_v, 7, 0, currVal_2);
            var currVal_8 = _ck(_v, 22, 0, true);
            _ck(_v, 21, 0, currVal_8);
            var currVal_9 = 'ui-clickable';
            var currVal_10 = _co.dropdownIcon;
            _ck(_v, 25, 0, currVal_9, currVal_10);
            var currVal_12 = _ck(_v, 30, 0, 'ui-multiselect-panel ui-widget ui-widget-content ui-corner-all ui-shadow', (_co.panelStyleClass || ''));
            _ck(_v, 29, 0, currVal_12);
            var currVal_13 = _co.panelStyle;
            _ck(_v, 31, 0, currVal_13);
            var currVal_14 = 'ui-widget-header ui-corner-all ui-multiselect-header ui-helper-clearfix';
            var currVal_15 = _ck(_v, 35, 0, !_co.showToggleAll);
            _ck(_v, 34, 0, currVal_14, currVal_15);
            var currVal_16 = _co.showToggleAll;
            _ck(_v, 38, 0, currVal_16);
            var currVal_17 = _co.filter;
            _ck(_v, 41, 0, currVal_17);
            var currVal_19 = _co.options;
            _ck(_v, 54, 0, currVal_19);
        }, function (_ck, _v) {
            var _co = _v.component;
            var currVal_3 = _co.inputId;
            var currVal_4 = _co.disabled;
            var currVal_5 = _co.tabindex;
            _ck(_v, 11, 0, currVal_3, currVal_4, currVal_5);
            var currVal_6 = _co.valuesAsString;
            _ck(_v, 14, 0, currVal_6);
            var currVal_7 = _co.valuesAsString;
            _ck(_v, 17, 0, currVal_7);
            var currVal_11 = (_co.overlayVisible ? 'block' : 'none');
            _ck(_v, 28, 0, currVal_11);
            var currVal_18 = (_co.scrollHeight || 'auto');
            _ck(_v, 51, 0, currVal_18);
        });
    }
    exports.View_MultiSelect_0 = View_MultiSelect_0;
    function View_MultiSelect_Host_0(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 5, 'p-multiSelect', [], [[2, 'ui-inputwrapper-filled', null], [2, 'ui-inputwrapper-focus',
                    null]], null, null, View_MultiSelect_0, exports.RenderType_MultiSelect)),
            i0.ɵprd(5120, null, i4.NG_VALUE_ACCESSOR, function (p0_0) {
                return [p0_0];
            }, [i1.MultiSelect]), i0.ɵprd(512, null, i5.DomHandler, i5.DomHandler, []),
            i0.ɵprd(512, null, i6.ObjectUtils, i6.ObjectUtils, []), i0.ɵdid(13877248, null, 1, i1.MultiSelect, [i0.ElementRef, i5.DomHandler, i0.Renderer2,
                i6.ObjectUtils, i0.ChangeDetectorRef], null, null), i0.ɵqud(603979776, 1, { templates: 1 })], function (_ck, _v) {
            _ck(_v, 4, 0);
        }, function (_ck, _v) {
            var currVal_0 = i0.ɵnov(_v, 4).filled;
            var currVal_1 = i0.ɵnov(_v, 4).focus;
            _ck(_v, 0, 0, currVal_0, currVal_1);
        });
    }
    exports.View_MultiSelect_Host_0 = View_MultiSelect_Host_0;
    exports.MultiSelectNgFactory = i0.ɵccf('p-multiSelect', i1.MultiSelect, View_MultiSelect_Host_0, { scrollHeight: 'scrollHeight', defaultLabel: 'defaultLabel',
        style: 'style', styleClass: 'styleClass', panelStyle: 'panelStyle', panelStyleClass: 'panelStyleClass',
        inputId: 'inputId', disabled: 'disabled', filter: 'filter', filterPlaceHolder: 'filterPlaceHolder',
        overlayVisible: 'overlayVisible', tabindex: 'tabindex', appendTo: 'appendTo', dataKey: 'dataKey',
        displaySelectedLabel: 'displaySelectedLabel', maxSelectedLabels: 'maxSelectedLabels',
        selectedItemsLabel: 'selectedItemsLabel', showToggleAll: 'showToggleAll', resetFilterOnHide: 'resetFilterOnHide',
        dropdownIcon: 'dropdownIcon', optionLabel: 'optionLabel', options: 'options' }, { onChange: 'onChange',
        onFocus: 'onFocus', onBlur: 'onBlur', onPanelShow: 'onPanelShow', onPanelHide: 'onPanelHide' }, []);
});
//# sourceMappingURL=multiselect.ngfactory.js.map