/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
define(["require", "exports", "@angular/core", "./gmap", "@angular/common"], function (require, exports, i0, i1, i2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GMapModuleNgFactory = i0.ɵcmf(i1.GMapModule, [], function (_l) {
        return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(512, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(512, i1.GMapModule, i1.GMapModule, [])]);
    });
    var styles_GMap = [];
    exports.RenderType_GMap = i0.ɵcrt({ encapsulation: 2, styles: styles_GMap,
        data: {} });
    function View_GMap_0(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'div', [], [[8, 'className', 0]], null, null, null, null)),
            i0.ɵdid(278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef,
                i0.Renderer], { ngStyle: [0, 'ngStyle'] }, null)], function (_ck, _v) {
            var _co = _v.component;
            var currVal_1 = _co.style;
            _ck(_v, 1, 0, currVal_1);
        }, function (_ck, _v) {
            var _co = _v.component;
            var currVal_0 = _co.styleClass;
            _ck(_v, 0, 0, currVal_0);
        });
    }
    exports.View_GMap_0 = View_GMap_0;
    function View_GMap_Host_0(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'p-gmap', [], null, null, null, View_GMap_0, exports.RenderType_GMap)), i0.ɵdid(8699904, null, 0, i1.GMap, [i0.ElementRef, i0.IterableDiffers, i0.ChangeDetectorRef,
                i0.NgZone], null, null)], function (_ck, _v) {
            _ck(_v, 1, 0);
        }, null);
    }
    exports.View_GMap_Host_0 = View_GMap_Host_0;
    exports.GMapNgFactory = i0.ɵccf('p-gmap', i1.GMap, View_GMap_Host_0, { style: 'style', styleClass: 'styleClass', options: 'options', overlays: 'overlays' }, { onMapClick: 'onMapClick', onOverlayClick: 'onOverlayClick', onOverlayDragStart: 'onOverlayDragStart',
        onOverlayDrag: 'onOverlayDrag', onOverlayDragEnd: 'onOverlayDragEnd', onMapReady: 'onMapReady',
        onMapDragEnd: 'onMapDragEnd', onZoomChanged: 'onZoomChanged' }, []);
});
//# sourceMappingURL=gmap.ngfactory.js.map