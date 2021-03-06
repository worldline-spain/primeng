"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./sidebar");
var i2 = require("@angular/common");
var i3 = require("../dom/domhandler");
exports.SidebarModuleNgFactory = i0.ɵcmf(i1.SidebarModule, [], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(512, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(512, i1.SidebarModule, i1.SidebarModule, [])]);
});
var styles_Sidebar = [];
exports.RenderType_Sidebar = i0.ɵcrt({ encapsulation: 2, styles: styles_Sidebar,
    data: { 'animation': [{ type: 7, name: 'panelState', definitions: [{ type: 0, name: 'hidden',
                        styles: { type: 6, styles: { opacity: 0 }, offset: null }, options: undefined },
                    { type: 0, name: 'visible', styles: { type: 6, styles: { opacity: 1 }, offset: null },
                        options: undefined }, { type: 1, expr: 'visible => hidden', animation: { type: 4,
                            styles: null, timings: '300ms ease-in' }, options: null }, { type: 1,
                        expr: 'hidden => visible', animation: { type: 4, styles: null, timings: '300ms ease-out' },
                        options: null }], options: {} }] } });
function View_Sidebar_0(_l) {
    return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { containerViewChild: 0 }), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, [[1, 0], ['container', 1]], null, 13, 'div', [], [[24, '@panelState', 0]], null, null, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers,
            i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0, 'klass'], ngClass: [1,
                'ngClass'] }, null), i0.ɵpod({ 'ui-sidebar ui-widget ui-widget-content ui-shadow': 0,
            'ui-sidebar-active': 1, 'ui-sidebar-left': 2, 'ui-sidebar-right': 3, 'ui-sidebar-top': 4,
            'ui-sidebar-bottom': 5, 'ui-sidebar-full': 6 }), i0.ɵdid(278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { ngStyle: [0, 'ngStyle'] }, null),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 5, 'a', [['href', '#'], ['role', 'button']], null, [[null,
                'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.close($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { ngClass: [0,
                'ngClass'] }, null), i0.ɵpod({ 'ui-sidebar-close ui-corner-all': 0 }),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 0, 'span', [['class', 'fa fa-fw fa-close']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n            '])),
        i0.ɵncd(null, 0), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(),
            i0.ɵted(null, ['\n    ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.styleClass;
        var currVal_2 = _ck(_v, 4, 0, true, _co.visible, (_co.position === 'left'), (_co.position === 'right'), (_co.position === 'top'), (_co.position === 'bottom'), _co.fullScreen);
        _ck(_v, 3, 0, currVal_1, currVal_2);
        var currVal_3 = _co.style;
        _ck(_v, 5, 0, currVal_3);
        var currVal_4 = _ck(_v, 9, 0, true);
        _ck(_v, 8, 0, currVal_4);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = (_co.visible ? 'visible' : 'hidden');
        _ck(_v, 2, 0, currVal_0);
    });
}
exports.View_Sidebar_0 = View_Sidebar_0;
function View_Sidebar_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 2, 'p-sidebar', [], null, null, null, View_Sidebar_0, exports.RenderType_Sidebar)),
        i0.ɵprd(512, null, i3.DomHandler, i3.DomHandler, []), i0.ɵdid(12763136, null, 0, i1.Sidebar, [i0.ElementRef, i3.DomHandler, i0.Renderer2], null, null)], null, null);
}
exports.View_Sidebar_Host_0 = View_Sidebar_Host_0;
exports.SidebarNgFactory = i0.ɵccf('p-sidebar', i1.Sidebar, View_Sidebar_Host_0, { position: 'position', fullScreen: 'fullScreen', appendTo: 'appendTo',
    blockScroll: 'blockScroll', style: 'style', styleClass: 'styleClass', autoZIndex: 'autoZIndex',
    baseZIndex: 'baseZIndex', visible: 'visible' }, { onShow: 'onShow', onHide: 'onHide',
    visibleChange: 'visibleChange' }, ['*']);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovV29ya3NwYWNlL3ByaW1lbmcvc3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Xb3Jrc3BhY2UvcHJpbWVuZy9zcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLnRzIiwibmc6Ly8vQzovV29ya3NwYWNlL3ByaW1lbmcvc3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci50cy5TaWRlYmFyLmh0bWwiLCJuZzovLy9DOi9Xb3Jrc3BhY2UvcHJpbWVuZy9zcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLnRzLlNpZGViYXJfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCJcbiAgICAgICAgPGRpdiAjY29udGFpbmVyIFtuZ0NsYXNzXT1cInsndWktc2lkZWJhciB1aS13aWRnZXQgdWktd2lkZ2V0LWNvbnRlbnQgdWktc2hhZG93Jzp0cnVlLCAndWktc2lkZWJhci1hY3RpdmUnOiB2aXNpYmxlLCBcbiAgICAgICAgICAgICd1aS1zaWRlYmFyLWxlZnQnOiAocG9zaXRpb24gPT09ICdsZWZ0JyksICd1aS1zaWRlYmFyLXJpZ2h0JzogKHBvc2l0aW9uID09PSAncmlnaHQnKSxcbiAgICAgICAgICAgICd1aS1zaWRlYmFyLXRvcCc6IChwb3NpdGlvbiA9PT0gJ3RvcCcpLCAndWktc2lkZWJhci1ib3R0b20nOiAocG9zaXRpb24gPT09ICdib3R0b20nKSwgXG4gICAgICAgICAgICAndWktc2lkZWJhci1mdWxsJzogZnVsbFNjcmVlbn1cIlxuICAgICAgICAgICAgW0BwYW5lbFN0YXRlXT1cInZpc2libGUgPyAndmlzaWJsZScgOiAnaGlkZGVuJ1wiIFtuZ1N0eWxlXT1cInN0eWxlXCIgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIj5cbiAgICAgICAgICAgIDxhIFtuZ0NsYXNzXT1cInsndWktc2lkZWJhci1jbG9zZSB1aS1jb3JuZXItYWxsJzp0cnVlfVwiIGhyZWY9XCIjXCIgcm9sZT1cImJ1dHRvblwiIChjbGljayk9XCJjbG9zZSgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1mdyBmYS1jbG9zZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgIiwiPHAtc2lkZWJhcj48L3Atc2lkZWJhcj4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0VDQUE7TUFBQSxpQkFDUTtNQUFBO01BQUEsdUJBQUE7a0RBQUE7TUFBQSxrQ0FBZ0I7TUFBQTtNQUFBLG1EQUFoQjtNQUFBO01BSTBGLG1EQUN0RjtVQUFBO2NBQUE7WUFBQTtZQUFBO1lBQThFO2NBQUE7Y0FBQTtZQUFBO1lBQTlFO1VBQUEsdUNBQUE7VUFBQTtjQUFBLGtDQUFHO01BQW1HLHVEQUNsRztVQUFBO1VBQUEsNENBQXVDO1VBQUEscUJBQ3ZDO2FBQ0osa0JBQXlCLCtDQUN2QjtpQkFBQTs7SUFMK0Q7SUFKckQ7UUFBQTtJQUFoQixXQUlxRSxVQUpyRCxTQUFoQjtJQUltRDtJQUpuRCxXQUltRCxTQUpuRDtJQUtPO0lBQUgsV0FBRyxTQUFIOzs7SUFEQTtJQUpKLFdBSUksU0FKSjs7OztvQkNEUjtNQUFBO2FBQUEscUVBQUE7VUFBQTtVQUFBOzs7Ozs7In0=
//# sourceMappingURL=sidebar.ngfactory.js.map