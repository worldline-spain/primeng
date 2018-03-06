/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
define(["require", "exports", "@angular/core", "./schedule", "@angular/common"], function (require, exports, i0, i1, i2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ScheduleModuleNgFactory = i0.ɵcmf(i1.ScheduleModule, [], function (_l) {
        return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(512, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(512, i1.ScheduleModule, i1.ScheduleModule, [])]);
    });
    var styles_Schedule = [];
    exports.RenderType_Schedule = i0.ɵcrt({ encapsulation: 2, styles: styles_Schedule,
        data: {} });
    function View_Schedule_0(_l) {
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
    exports.View_Schedule_0 = View_Schedule_0;
    function View_Schedule_Host_0(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'p-schedule', [], null, null, null, View_Schedule_0, exports.RenderType_Schedule)),
            i0.ɵdid(9420800, null, 0, i1.Schedule, [i0.ElementRef, i0.IterableDiffers], null, null)], function (_ck, _v) {
            _ck(_v, 1, 0);
        }, null);
    }
    exports.View_Schedule_Host_0 = View_Schedule_Host_0;
    exports.ScheduleNgFactory = i0.ɵccf('p-schedule', i1.Schedule, View_Schedule_Host_0, { events: 'events', header: 'header', style: 'style',
        styleClass: 'styleClass', rtl: 'rtl', weekends: 'weekends', hiddenDays: 'hiddenDays',
        fixedWeekCount: 'fixedWeekCount', weekNumbers: 'weekNumbers', businessHours: 'businessHours',
        height: 'height', contentHeight: 'contentHeight', aspectRatio: 'aspectRatio', eventLimit: 'eventLimit',
        defaultDate: 'defaultDate', editable: 'editable', droppable: 'droppable', eventStartEditable: 'eventStartEditable',
        eventDurationEditable: 'eventDurationEditable', defaultView: 'defaultView', allDaySlot: 'allDaySlot',
        allDayText: 'allDayText', slotDuration: 'slotDuration', slotLabelInterval: 'slotLabelInterval',
        snapDuration: 'snapDuration', scrollTime: 'scrollTime', minTime: 'minTime', maxTime: 'maxTime',
        slotEventOverlap: 'slotEventOverlap', nowIndicator: 'nowIndicator', dragRevertDuration: 'dragRevertDuration',
        dragOpacity: 'dragOpacity', dragScroll: 'dragScroll', eventOverlap: 'eventOverlap',
        eventConstraint: 'eventConstraint', locale: 'locale', timezone: 'timezone', timeFormat: 'timeFormat',
        eventRender: 'eventRender', dayRender: 'dayRender', navLinks: 'navLinks', options: 'options' }, { onDayClick: 'onDayClick', onDrop: 'onDrop', onEventClick: 'onEventClick', onEventMouseover: 'onEventMouseover',
        onEventMouseout: 'onEventMouseout', onEventDragStart: 'onEventDragStart', onEventDragStop: 'onEventDragStop',
        onEventDrop: 'onEventDrop', onEventResizeStart: 'onEventResizeStart', onEventResizeStop: 'onEventResizeStop',
        onEventResize: 'onEventResize', onViewRender: 'onViewRender', onViewDestroy: 'onViewDestroy' }, []);
});
//# sourceMappingURL=schedule.ngfactory.js.map