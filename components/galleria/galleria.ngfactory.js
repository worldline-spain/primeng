"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./galleria");
var i2 = require("@angular/common");
var i3 = require("../dom/domhandler");
exports.GalleriaModuleNgFactory = i0.ɵcmf(i1.GalleriaModule, [], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(512, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(512, i1.GalleriaModule, i1.GalleriaModule, [])]);
});
var styles_Galleria = [];
exports.RenderType_Galleria = i0.ɵcrt({ encapsulation: 2, styles: styles_Galleria,
    data: {} });
function View_Galleria_1(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 5, 'li', [['class',
                'ui-galleria-panel']], [[4, 'width', 'px'], [4, 'height', 'px']], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.clickImage($event, _v.context.$implicit, _v.context.index) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers,
            i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0, 'klass'], ngClass: [1,
                'ngClass'] }, null), i0.ɵpod({ 'ui-helper-hidden': 0 }), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 0, 'img', [['class', 'ui-panel-images']], [[8, 'src', 4], [8, 'alt', 0], [8, 'title', 0]], null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = 'ui-galleria-panel';
        var currVal_3 = _ck(_v, 2, 0, (_v.context.index != _co.activeIndex));
        _ck(_v, 1, 0, currVal_2, currVal_3);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.panelWidth;
        var currVal_1 = _co.panelHeight;
        _ck(_v, 0, 0, currVal_0, currVal_1);
        var currVal_4 = _v.context.$implicit.source;
        var currVal_5 = _v.context.$implicit.alt;
        var currVal_6 = _v.context.$implicit.title;
        _ck(_v, 4, 0, currVal_4, currVal_5, currVal_6);
    });
}
function View_Galleria_3(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, [['frame', 1]], null, 8, 'li', [['class',
                'ui-galleria-frame']], [[4, 'width', 'px'], [4, 'height', 'px'], [4, 'transition', null]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.frameClick(i0.ɵnov(_v, 0)) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers,
            i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0, 'klass'], ngClass: [1,
                'ngClass'] }, null), i0.ɵpod({ 'ui-galleria-frame-active': 0 }), (_l()(), i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵeld(0, null, null, 3, 'div', [['class', 'ui-galleria-frame-content']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                            '])),
        (_l()(), i0.ɵeld(0, null, null, 0, 'img', [['class', 'ui-galleria-frame-image']], [[8, 'src', 4], [8, 'alt', 0], [8, 'title', 0], [4, 'width', 'px'], [4, 'height', 'px']], null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵted(null, ['\n                    ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_3 = 'ui-galleria-frame';
        var currVal_4 = _ck(_v, 2, 0, (_v.context.index == _co.activeIndex));
        _ck(_v, 1, 0, currVal_3, currVal_4);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.frameWidth;
        var currVal_1 = _co.frameHeight;
        var currVal_2 = 'opacity 0.75s ease';
        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);
        var currVal_5 = _v.context.$implicit.source;
        var currVal_6 = _v.context.$implicit.alt;
        var currVal_7 = _v.context.$implicit.title;
        var currVal_8 = _co.frameWidth;
        var currVal_9 = _co.frameHeight;
        _ck(_v, 6, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9);
    });
}
function View_Galleria_2(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 9, 'div', [], null, null, null, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef,
            i0.Renderer], { ngClass: [0, 'ngClass'] }, null), i0.ɵpod({ 'ui-galleria-filmstrip-wrapper': 0 }),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 4, 'ul', [['class', 'ui-galleria-filmstrip'], ['style', 'transition:left 1s']], [[4, 'left', 'px']], null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Galleria_3)), i0.ɵdid(802816, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵted(null, ['\n            ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _ck(_v, 2, 0, true);
        _ck(_v, 1, 0, currVal_0);
        var currVal_2 = _co.images;
        _ck(_v, 7, 0, currVal_2);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.stripLeft;
        _ck(_v, 4, 0, currVal_1);
    });
}
function View_Galleria_4(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 0, 'div', [['class',
                'ui-galleria-nav-prev fa fa-fw fa-chevron-circle-left']], [[4, 'bottom', 'px']], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.clickNavLeft() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = (_co.frameHeight / 2);
        _ck(_v, 0, 0, currVal_0);
    });
}
function View_Galleria_5(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 6, 'div', [['class',
                'ui-galleria-caption'], ['style', 'display:block']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', ''])), (_l()(), i0.ɵeld(0, null, null, 1, 'p', [], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['', ''])), (_l()(), i0.ɵted(null, ['\n            ']))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = ((_co.images[_co.activeIndex] == null) ? null : _co.images[_co.activeIndex].title);
        _ck(_v, 3, 0, currVal_0);
        var currVal_1 = ((_co.images[_co.activeIndex] == null) ? null : _co.images[_co.activeIndex].alt);
        _ck(_v, 5, 0, currVal_1);
    });
}
function View_Galleria_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 21, 'div', [], [[4, 'width', 'px']], null, null, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0,
                'klass'], ngClass: [1, 'ngClass'] }, null), i0.ɵpod({ 'ui-galleria ui-widget ui-widget-content ui-corner-all': 0 }),
        i0.ɵdid(278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef,
            i0.Renderer], { ngStyle: [0, 'ngStyle'] }, null), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 4, 'ul', [['class', 'ui-galleria-panel-wrapper']], [[4, 'width', 'px'], [4, 'height', 'px']], null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Galleria_1)), i0.ɵdid(802816, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(),
            i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Galleria_2)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Galleria_4)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(),
            i0.ɵeld(0, null, null, 0, 'div', [['class', 'ui-galleria-nav-next fa fa-fw fa-chevron-circle-right']], [[4, 'bottom', 'px']], [[null, 'click']], function (_v, en, $event) {
                var ad = true;
                var _co = _v.component;
                if (('click' === en)) {
                    var pd_0 = (_co.clickNavRight() !== false);
                    ad = (pd_0 && ad);
                }
                return ad;
            }, null, null)), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Galleria_5)),
        i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(),
            i0.ɵted(null, ['\n    ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.styleClass;
        var currVal_2 = _ck(_v, 3, 0, true);
        _ck(_v, 2, 0, currVal_1, currVal_2);
        var currVal_3 = _co.style;
        _ck(_v, 4, 0, currVal_3);
        var currVal_6 = _co.images;
        _ck(_v, 9, 0, currVal_6);
        var currVal_7 = _co.showFilmstrip;
        _ck(_v, 13, 0, currVal_7);
        var currVal_8 = (_co.activeIndex !== 0);
        _ck(_v, 16, 0, currVal_8);
        var currVal_10 = (_co.showCaption && _co.images);
        _ck(_v, 21, 0, currVal_10);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.panelWidth;
        _ck(_v, 1, 0, currVal_0);
        var currVal_4 = _co.panelWidth;
        var currVal_5 = _co.panelHeight;
        _ck(_v, 6, 0, currVal_4, currVal_5);
        var currVal_9 = (_co.frameHeight / 2);
        _ck(_v, 18, 0, currVal_9);
    });
}
exports.View_Galleria_0 = View_Galleria_0;
function View_Galleria_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 2, 'p-galleria', [], null, null, null, View_Galleria_0, exports.RenderType_Galleria)),
        i0.ɵprd(512, null, i3.DomHandler, i3.DomHandler, []), i0.ɵdid(12763136, null, 0, i1.Galleria, [i0.ElementRef, i3.DomHandler], null, null)], null, null);
}
exports.View_Galleria_Host_0 = View_Galleria_Host_0;
exports.GalleriaNgFactory = i0.ɵccf('p-galleria', i1.Galleria, View_Galleria_Host_0, { style: 'style', styleClass: 'styleClass', panelWidth: 'panelWidth',
    panelHeight: 'panelHeight', frameWidth: 'frameWidth', frameHeight: 'frameHeight',
    activeIndex: 'activeIndex', showFilmstrip: 'showFilmstrip', autoPlay: 'autoPlay',
    transitionInterval: 'transitionInterval', showCaption: 'showCaption', images: 'images' }, { onImageClicked: 'onImageClicked', onImageChange: 'onImageChange' }, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovV29ya3NwYWNlL3ByaW1lbmcvc3JjL2FwcC9jb21wb25lbnRzL2dhbGxlcmlhL2dhbGxlcmlhLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1dvcmtzcGFjZS9wcmltZW5nL3NyYy9hcHAvY29tcG9uZW50cy9nYWxsZXJpYS9nYWxsZXJpYS50cyIsIm5nOi8vL0M6L1dvcmtzcGFjZS9wcmltZW5nL3NyYy9hcHAvY29tcG9uZW50cy9nYWxsZXJpYS9nYWxsZXJpYS50cy5HYWxsZXJpYS5odG1sIiwibmc6Ly8vQzovV29ya3NwYWNlL3ByaW1lbmcvc3JjL2FwcC9jb21wb25lbnRzL2dhbGxlcmlhL2dhbGxlcmlhLnRzLkdhbGxlcmlhX0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiXG4gICAgICAgIDxkaXYgW25nQ2xhc3NdPVwieyd1aS1nYWxsZXJpYSB1aS13aWRnZXQgdWktd2lkZ2V0LWNvbnRlbnQgdWktY29ybmVyLWFsbCc6dHJ1ZX1cIiBbbmdTdHlsZV09XCJzdHlsZVwiIFtjbGFzc109XCJzdHlsZUNsYXNzXCIgW3N0eWxlLndpZHRoLnB4XT1cInBhbmVsV2lkdGhcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInVpLWdhbGxlcmlhLXBhbmVsLXdyYXBwZXJcIiBbc3R5bGUud2lkdGgucHhdPVwicGFuZWxXaWR0aFwiIFtzdHlsZS5oZWlnaHQucHhdPVwicGFuZWxIZWlnaHRcIj5cbiAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGltYWdlIG9mIGltYWdlcztsZXQgaT1pbmRleFwiIGNsYXNzPVwidWktZ2FsbGVyaWEtcGFuZWxcIiBbbmdDbGFzc109XCJ7J3VpLWhlbHBlci1oaWRkZW4nOmkhPWFjdGl2ZUluZGV4fVwiXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZS53aWR0aC5weF09XCJwYW5lbFdpZHRoXCIgW3N0eWxlLmhlaWdodC5weF09XCJwYW5lbEhlaWdodFwiIChjbGljayk9XCJjbGlja0ltYWdlKCRldmVudCxpbWFnZSxpKVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwidWktcGFuZWwtaW1hZ2VzXCIgW3NyY109XCJpbWFnZS5zb3VyY2VcIiBbYWx0XT1cImltYWdlLmFsdFwiIFt0aXRsZV09XCJpbWFnZS50aXRsZVwiLz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxkaXYgW25nQ2xhc3NdPVwieyd1aS1nYWxsZXJpYS1maWxtc3RyaXAtd3JhcHBlcic6dHJ1ZX1cIiAqbmdJZj1cInNob3dGaWxtc3RyaXBcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJ1aS1nYWxsZXJpYS1maWxtc3RyaXBcIiBzdHlsZT1cInRyYW5zaXRpb246bGVmdCAxc1wiIFtzdHlsZS5sZWZ0LnB4XT1cInN0cmlwTGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgI2ZyYW1lICpuZ0Zvcj1cImxldCBpbWFnZSBvZiBpbWFnZXM7bGV0IGk9aW5kZXhcIiBbbmdDbGFzc109XCJ7J3VpLWdhbGxlcmlhLWZyYW1lLWFjdGl2ZSc6aT09YWN0aXZlSW5kZXh9XCIgY2xhc3M9XCJ1aS1nYWxsZXJpYS1mcmFtZVwiIChjbGljayk9XCJmcmFtZUNsaWNrKGZyYW1lKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGUud2lkdGgucHhdPVwiZnJhbWVXaWR0aFwiIFtzdHlsZS5oZWlnaHQucHhdPVwiZnJhbWVIZWlnaHRcIiBbc3R5bGUudHJhbnNpdGlvbl09XCInb3BhY2l0eSAwLjc1cyBlYXNlJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpLWdhbGxlcmlhLWZyYW1lLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFtzcmNdPVwiaW1hZ2Uuc291cmNlXCIgW2FsdF09XCJpbWFnZS5hbHRcIiBbdGl0bGVdPVwiaW1hZ2UudGl0bGVcIiBjbGFzcz1cInVpLWdhbGxlcmlhLWZyYW1lLWltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoLnB4XT1cImZyYW1lV2lkdGhcIiBbc3R5bGUuaGVpZ2h0LnB4XT1cImZyYW1lSGVpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWktZ2FsbGVyaWEtbmF2LXByZXYgZmEgZmEtZncgZmEtY2hldnJvbi1jaXJjbGUtbGVmdFwiIChjbGljayk9XCJjbGlja05hdkxlZnQoKVwiIFtzdHlsZS5ib3R0b20ucHhdPVwiZnJhbWVIZWlnaHQvMlwiICpuZ0lmPVwiYWN0aXZlSW5kZXggIT09IDBcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1nYWxsZXJpYS1uYXYtbmV4dCBmYSBmYS1mdyBmYS1jaGV2cm9uLWNpcmNsZS1yaWdodFwiIChjbGljayk9XCJjbGlja05hdlJpZ2h0KClcIiBbc3R5bGUuYm90dG9tLnB4XT1cImZyYW1lSGVpZ2h0LzJcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1nYWxsZXJpYS1jYXB0aW9uXCIgKm5nSWY9XCJzaG93Q2FwdGlvbiYmaW1hZ2VzXCIgc3R5bGU9XCJkaXNwbGF5OmJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPGg0Pnt7aW1hZ2VzW2FjdGl2ZUluZGV4XT8udGl0bGV9fTwvaDQ+PHA+e3tpbWFnZXNbYWN0aXZlSW5kZXhdPy5hbHR9fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAiLCI8cC1nYWxsZXJpYT48L3AtZ2FsbGVyaWE+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ0dnQjtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQ2tFO1VBQUE7VUFBQTtRQUFBO1FBRGxFO01BQUEsdUNBQUE7a0RBQUE7TUFBQSxrQ0FBdUUseUJBQ2dDO01BQUEsNkJBQ25HO01BQUE7TUFBQSwwREFBMkY7TUFBQTs7SUFGbEQ7SUFBMEI7SUFBdkUsV0FBNkMsVUFBMEIsU0FBdkU7OztJQUNJO0lBQThCO0lBRGxDLFdBQ0ksVUFBOEIsU0FEbEM7SUFFaUM7SUFBcUI7SUFBa0I7SUFBcEUsV0FBNkIsVUFBcUIsVUFBa0IsU0FBcEU7Ozs7b0JBS0E7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFzSTtVQUFBO1VBQUE7UUFBQTtRQUF0STtNQUFBLHVDQUFBO2tEQUFBO01BQUEsa0NBQW9ELGlDQUN3RDtNQUFBLGlDQUN4RztNQUFBO01BQUEsNENBQXVDO01BQ25DO1VBQUE7VUFBQSwwREFDa0U7VUFBQSxpQ0FDaEU7OztRQUxrRztRQUF4RDtRQUFwRCxXQUE0RyxVQUF4RCxTQUFwRDs7O1FBQ0k7UUFBOEI7UUFBZ0M7UUFEbEUsV0FDSSxVQUE4QixVQUFnQyxTQURsRTtRQUdhO1FBQXFCO1FBQWtCO1FBQ3hDO1FBQThCO1FBRGxDLFdBQUssVUFBcUIsVUFBa0IsVUFDeEMsVUFBOEIsU0FEbEM7Ozs7b0JBTGhCO01BQUEsK0VBQUE7TUFBQTtxQkFBQSxnREFBSztNQUF5RSx1REFDMUU7VUFBQTtVQUFBO01BQXlGLDJEQUNyRjtVQUFBLHFFQUFBO1VBQUE7VUFBQSx1Q0FNSztNQUNKOztJQVRKO0lBQUwsV0FBSyxTQUFMO0lBRW1CO0lBQVgsV0FBVyxTQUFYOzs7SUFEeUQ7SUFBN0QsV0FBNkQsU0FBN0Q7Ozs7b0JBVUo7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFrRTtVQUFBO1VBQUE7UUFBQTtRQUFsRTtNQUFBOztJQUEyRjtJQUEzRixXQUEyRixTQUEzRjs7OztvQkFFQTtNQUFBO01BQUEsNENBQW1GO01BQy9FO1VBQUEsMERBQUk7VUFBQSxVQUFtQztVQUFBO01BQUcsd0NBQWdDOzs7UUFBdEU7UUFBQTtRQUFzQztRQUFBOzs7O29CQXRCMUQsK0NBQ1E7TUFBQTtNQUFBLG1EQUFBO01BQUE7VUFBQSxzREFBSzthQUFMO3FCQUFBLHlDQUFxSjtVQUFBLHFCQUNqSjtVQUFBO1VBQUEsMERBQW9HO1VBQUEseUJBQ2hHO1VBQUEseUNBQUE7VUFBQTtVQUFBLGVBR0ssbURBQ0o7aUJBQUEsb0NBQ0w7VUFBQSx1REFBQTtVQUFBO01BVU0sbURBQ047VUFBQSxxRUFBQTtVQUFBO1VBQUEsZUFBNkosbURBQzdKO2lCQUFBO2NBQUE7Z0JBQUE7Z0JBQUE7Z0JBQW1FO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUFuRTtjQUFBLGdDQUFxSTtNQUNySTthQUFBO1VBQUEsd0JBRU0sK0NBQ0o7aUJBQUE7O0lBdkI0RjtJQUE3RjtJQUFMLFdBQWtHLFVBQTdGLFNBQUw7SUFBZ0Y7SUFBaEYsV0FBZ0YsU0FBaEY7SUFFWTtJQUFKLFdBQUksU0FBSjtJQUtvRDtJQUF4RCxZQUF3RCxTQUF4RDtJQVc2SDtJQUE3SCxZQUE2SCxTQUE3SDtJQUVpQztJQUFqQyxZQUFpQyxVQUFqQzs7O0lBcEJtSDtJQUF2SCxXQUF1SCxTQUF2SDtJQUMwQztJQUE4QjtJQUFwRSxXQUFzQyxVQUE4QixTQUFwRTtJQWtCNkY7SUFBN0YsWUFBNkYsU0FBN0Y7Ozs7b0JDcEJaO01BQUE7YUFBQSxxRUFBQTtVQUFBO1VBQUE7Ozs7Ozs7In0=
//# sourceMappingURL=galleria.ngfactory.js.map