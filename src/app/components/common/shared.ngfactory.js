/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
define(["require", "exports", "@angular/core", "./shared", "@angular/common"], function (require, exports, i0, i1, i2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SharedModuleNgFactory = i0.ɵcmf(i1.SharedModule, [], function (_l) {
        return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(512, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(512, i1.SharedModule, i1.SharedModule, [])]);
    });
    var styles_Header = [];
    exports.RenderType_Header = i0.ɵcrt({ encapsulation: 2, styles: styles_Header,
        data: {} });
    function View_Header_0(_l) {
        return i0.ɵvid(0, [i0.ɵncd(null, 0)], null, null);
    }
    exports.View_Header_0 = View_Header_0;
    function View_Header_Host_0(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'p-header', [], null, null, null, View_Header_0, exports.RenderType_Header)),
            i0.ɵdid(49152, null, 0, i1.Header, [], null, null)], null, null);
    }
    exports.View_Header_Host_0 = View_Header_Host_0;
    exports.HeaderNgFactory = i0.ɵccf('p-header', i1.Header, View_Header_Host_0, {}, {}, ['*']);
    var styles_Footer = [];
    exports.RenderType_Footer = i0.ɵcrt({ encapsulation: 2, styles: styles_Footer,
        data: {} });
    function View_Footer_0(_l) {
        return i0.ɵvid(0, [i0.ɵncd(null, 0)], null, null);
    }
    exports.View_Footer_0 = View_Footer_0;
    function View_Footer_Host_0(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'p-footer', [], null, null, null, View_Footer_0, exports.RenderType_Footer)),
            i0.ɵdid(49152, null, 0, i1.Footer, [], null, null)], null, null);
    }
    exports.View_Footer_Host_0 = View_Footer_Host_0;
    exports.FooterNgFactory = i0.ɵccf('p-footer', i1.Footer, View_Footer_Host_0, {}, {}, ['*']);
    var styles_Column = [];
    exports.RenderType_Column = i0.ɵcrt({ encapsulation: 2, styles: styles_Column,
        data: {} });
    function View_Column_0(_l) {
        return i0.ɵvid(0, [], null, null);
    }
    exports.View_Column_0 = View_Column_0;
    function View_Column_Host_0(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 3, 'p-column', [], null, null, null, View_Column_0, exports.RenderType_Column)),
            i0.ɵdid(1097728, null, 2, i1.Column, [], null, null),
            i0.ɵqud(603979776, 1, { templates: 1 }), i0.ɵqud(335544320, 2, { template: 0 })], null, null);
    }
    exports.View_Column_Host_0 = View_Column_Host_0;
    exports.ColumnNgFactory = i0.ɵccf('p-column', i1.Column, View_Column_Host_0, { field: 'field', colId: 'colId', sortField: 'sortField', filterField: 'filterField',
        header: 'header', footer: 'footer', sortable: 'sortable', editable: 'editable', filter: 'filter',
        filterMatchMode: 'filterMatchMode', filterType: 'filterType', excludeGlobalFilter: 'excludeGlobalFilter',
        rowspan: 'rowspan', colspan: 'colspan', scope: 'scope', style: 'style', styleClass: 'styleClass',
        exportable: 'exportable', headerStyle: 'headerStyle', headerStyleClass: 'headerStyleClass',
        bodyStyle: 'bodyStyle', bodyStyleClass: 'bodyStyleClass', footerStyle: 'footerStyle',
        footerStyleClass: 'footerStyleClass', hidden: 'hidden', expander: 'expander', selectionMode: 'selectionMode',
        filterPlaceholder: 'filterPlaceholder', filterMaxlength: 'filterMaxlength', frozen: 'frozen',
        resizable: 'resizable' }, { sortFunction: 'sortFunction' }, []);
    var styles_Row = [];
    exports.RenderType_Row = i0.ɵcrt({ encapsulation: 2, styles: styles_Row,
        data: {} });
    function View_Row_0(_l) {
        return i0.ɵvid(0, [], null, null);
    }
    exports.View_Row_0 = View_Row_0;
    function View_Row_Host_0(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 2, 'p-row', [], null, null, null, View_Row_0, exports.RenderType_Row)), i0.ɵdid(49152, null, 1, i1.Row, [], null, null), i0.ɵqud(603979776, 1, { columns: 1 })], null, null);
    }
    exports.View_Row_Host_0 = View_Row_Host_0;
    exports.RowNgFactory = i0.ɵccf('p-row', i1.Row, View_Row_Host_0, {}, {}, []);
    var styles_HeaderColumnGroup = [];
    exports.RenderType_HeaderColumnGroup = i0.ɵcrt({ encapsulation: 2,
        styles: styles_HeaderColumnGroup, data: {} });
    function View_HeaderColumnGroup_0(_l) {
        return i0.ɵvid(0, [], null, null);
    }
    exports.View_HeaderColumnGroup_0 = View_HeaderColumnGroup_0;
    function View_HeaderColumnGroup_Host_0(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 2, 'p-headerColumnGroup', [], null, null, null, View_HeaderColumnGroup_0, exports.RenderType_HeaderColumnGroup)), i0.ɵdid(49152, null, 1, i1.HeaderColumnGroup, [], null, null), i0.ɵqud(603979776, 1, { rows: 1 })], null, null);
    }
    exports.View_HeaderColumnGroup_Host_0 = View_HeaderColumnGroup_Host_0;
    exports.HeaderColumnGroupNgFactory = i0.ɵccf('p-headerColumnGroup', i1.HeaderColumnGroup, View_HeaderColumnGroup_Host_0, { frozen: 'frozen' }, {}, []);
    var styles_FooterColumnGroup = [];
    exports.RenderType_FooterColumnGroup = i0.ɵcrt({ encapsulation: 2,
        styles: styles_FooterColumnGroup, data: {} });
    function View_FooterColumnGroup_0(_l) {
        return i0.ɵvid(0, [], null, null);
    }
    exports.View_FooterColumnGroup_0 = View_FooterColumnGroup_0;
    function View_FooterColumnGroup_Host_0(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 2, 'p-footerColumnGroup', [], null, null, null, View_FooterColumnGroup_0, exports.RenderType_FooterColumnGroup)), i0.ɵdid(49152, null, 1, i1.FooterColumnGroup, [], null, null), i0.ɵqud(603979776, 1, { rows: 1 })], null, null);
    }
    exports.View_FooterColumnGroup_Host_0 = View_FooterColumnGroup_Host_0;
    exports.FooterColumnGroupNgFactory = i0.ɵccf('p-footerColumnGroup', i1.FooterColumnGroup, View_FooterColumnGroup_Host_0, { frozen: 'frozen' }, {}, []);
});
//# sourceMappingURL=shared.ngfactory.js.map