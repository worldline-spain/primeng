define(["require", "exports", "@angular/core", "@angular/common", "../dom/domhandler", "@angular/router"], function (require, exports, core_1, common_1, domhandler_1, router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MegaMenu = (function () {
        function MegaMenu(el, domHandler, renderer) {
            this.el = el;
            this.domHandler = domHandler;
            this.renderer = renderer;
            this.orientation = 'horizontal';
            this.autoZIndex = true;
            this.baseZIndex = 0;
        }
        MegaMenu.prototype.onItemMouseEnter = function (event, item, menuitem) {
            if (menuitem.disabled) {
                return;
            }
            if (this.hideTimeout) {
                clearTimeout(this.hideTimeout);
                this.hideTimeout = null;
            }
            this.activeItem = item;
            if (menuitem.items) {
                var submenu = item.children[0].nextElementSibling;
                if (submenu) {
                    if (this.autoZIndex) {
                        submenu.style.zIndex = String(this.baseZIndex + (++domhandler_1.DomHandler.zindex));
                    }
                    if (this.orientation === 'horizontal') {
                        submenu.style.top = this.domHandler.getOuterHeight(item.children[0]) + 'px';
                        submenu.style.left = '0px';
                    }
                    else if (this.orientation === 'vertical') {
                        submenu.style.top = '0px';
                        submenu.style.left = this.domHandler.getOuterWidth(item.children[0]) + 'px';
                    }
                }
            }
        };
        MegaMenu.prototype.onItemMouseLeave = function (event, link) {
            var _this = this;
            this.hideTimeout = setTimeout(function () {
                _this.activeItem = null;
            }, 1000);
        };
        MegaMenu.prototype.itemClick = function (event, item) {
            if (item.disabled) {
                event.preventDefault();
                return;
            }
            if (!item.url) {
                event.preventDefault();
            }
            if (item.command) {
                item.command({
                    originalEvent: event,
                    item: item
                });
            }
            this.activeItem = null;
        };
        MegaMenu.prototype.getColumnClass = function (menuitem) {
            var length = menuitem.items ? menuitem.items.length : 0;
            var columnClass;
            switch (length) {
                case 2:
                    columnClass = 'ui-g-6';
                    break;
                case 3:
                    columnClass = 'ui-g-4';
                    break;
                case 4:
                    columnClass = 'ui-g-3';
                    break;
                case 6:
                    columnClass = 'ui-g-2';
                    break;
                default:
                    columnClass = 'ui-g-12';
                    break;
            }
            return columnClass;
        };
        return MegaMenu;
    }());
    MegaMenu.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'p-megaMenu',
                    template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\"\n            [ngClass]=\"{'ui-megamenu ui-widget ui-widget-content ui-corner-all':true,'ui-megamenu-horizontal': orientation == 'horizontal','ui-megamenu-vertical': orientation == 'vertical'}\">\n            <ul class=\"ui-megamenu-root-list\">\n                <ng-template ngFor let-category [ngForOf]=\"model\">\n                    <li *ngIf=\"category.separator\" class=\"ui-menu-separator ui-widget-content\">\n                    <li *ngIf=\"!category.separator\" #item [ngClass]=\"{'ui-menuitem ui-corner-all':true,'ui-menuitem-active':item==activeItem}\"\n                        (mouseenter)=\"onItemMouseEnter($event, item, category)\" (mouseleave)=\"onItemMouseLeave($event, item)\">\n   \n                        <a *ngIf=\"!category.routerLink\" [href]=\"category.url||'#'\" [attr.target]=\"category.target\" [attr.title]=\"category.title\" [attr.id]=\"category.id\" (click)=\"itemClick($event, category)\"\n                            [ngClass]=\"{'ui-menuitem-link ui-corner-all':true,'ui-state-disabled':category.disabled}\" [ngStyle]=\"category.style\" [class]=\"category.styleClass\">\n                            <span class=\"ui-menuitem-icon fa fa-fw\" *ngIf=\"category.icon\" [ngClass]=\"category.icon\"></span>\n                            <span class=\"ui-menuitem-text\">{{category.label}}</span>\n                            <span *ngIf=\"category.items\" class=\"ui-submenu-icon fa fa-fw\" [ngClass]=\"{'fa-caret-down':orientation=='horizontal','fa-caret-right':orientation=='vertical'}\"></span>\n                        </a>\n                        <a *ngIf=\"category.routerLink\" [routerLink]=\"category.routerLink\" [queryParams]=\"category.queryParams\" [routerLinkActive]=\"'ui-state-active'\" [routerLinkActiveOptions]=\"category.routerLinkActiveOptions||{exact:false}\" \n                            [attr.target]=\"category.target\" [attr.title]=\"category.title\" [attr.id]=\"category.id\"\n                            (click)=\"itemClick($event, category)\" [ngClass]=\"{'ui-menuitem-link ui-corner-all':true,'ui-state-disabled':child.disabled}\" [ngStyle]=\"child.style\" [class]=\"child.styleClass\">\n                            <span class=\"ui-menuitem-icon fa fa-fw\" *ngIf=\"category.icon\" [ngClass]=\"category.icon\"></span>\n                            <span class=\"ui-menuitem-text\">{{category.label}}</span>\n                        </a>\n\n                        <div class=\"ui-megamenu-panel ui-widget-content ui-corner-all ui-shadow\" *ngIf=\"category.items\">\n                            <div class=\"ui-g\">\n                                <ng-template ngFor let-column [ngForOf]=\"category.items\">\n                                    <div [class]=\"getColumnClass(category)\">\n                                        <ng-template ngFor let-submenu [ngForOf]=\"column\">\n                                            <ul class=\"ui-megamenu-submenu\">\n                                                <li class=\"ui-widget-header ui-megamenu-submenu-header ui-corner-all\">{{submenu.label}}</li>\n                                                <ng-template ngFor let-item [ngForOf]=\"submenu.items\">\n                                                    <li *ngIf=\"item.separator\" class=\"ui-menu-separator ui-widget-content\">\n                                                    <li *ngIf=\"!item.separator\" class=\"ui-menuitem ui-corner-all\">\n                                                        <a *ngIf=\"!item.routerLink\" [href]=\"item.url||'#'\" class=\"ui-menuitem-link ui-corner-all\" [attr.target]=\"item.target\" [attr.title]=\"item.title\" [attr.id]=\"item.id\"\n                                                            [ngClass]=\"{'ui-state-disabled':item.disabled}\" (click)=\"itemClick($event, item)\">\n                                                            <span class=\"ui-menuitem-icon fa fa-fw\" *ngIf=\"item.icon\" [ngClass]=\"item.icon\"></span>\n                                                            <span class=\"ui-menuitem-text\">{{item.label}}</span>\n                                                        </a>\n                                                        <a *ngIf=\"item.routerLink\" [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams\" [routerLinkActive]=\"'ui-state-active'\" \n                                                            [routerLinkActiveOptions]=\"item.routerLinkActiveOptions||{exact:false}\" class=\"ui-menuitem-link ui-corner-all\" \n                                                             [attr.target]=\"item.target\" [attr.title]=\"item.title\" [attr.id]=\"item.id\"\n                                                            [ngClass]=\"{'ui-state-disabled':item.disabled}\" (click)=\"itemClick($event, item)\">\n                                                            <span class=\"ui-menuitem-icon fa fa-fw\" *ngIf=\"item.icon\" [ngClass]=\"item.icon\"></span>\n                                                            <span class=\"ui-menuitem-text\">{{item.label}}</span>\n                                                        </a>\n                                                    </li>\n                                                </ng-template>\n                                            </ul>\n                                        </ng-template>\n                                    </div>\n                                </ng-template>\n                            </div>\n                        </div>\n                    </li>\n                </ng-template>\n                <li class=\"ui-menuitem ui-menuitem-custom ui-corner-all\" *ngIf=\"orientation === 'horizontal'\">\n                    <ng-content></ng-content>\n                </li>\n            </ul>\n        </div>\n    ",
                    providers: [domhandler_1.DomHandler]
                },] },
    ];
    /** @nocollapse */
    MegaMenu.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: domhandler_1.DomHandler, },
        { type: core_1.Renderer2, },
    ]; };
    MegaMenu.propDecorators = {
        'model': [{ type: core_1.Input },],
        'style': [{ type: core_1.Input },],
        'styleClass': [{ type: core_1.Input },],
        'orientation': [{ type: core_1.Input },],
        'autoZIndex': [{ type: core_1.Input },],
        'baseZIndex': [{ type: core_1.Input },],
    };
    exports.MegaMenu = MegaMenu;
    var MegaMenuModule = (function () {
        function MegaMenuModule() {
        }
        return MegaMenuModule;
    }());
    MegaMenuModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, router_1.RouterModule],
                    exports: [MegaMenu, router_1.RouterModule],
                    declarations: [MegaMenu]
                },] },
    ];
    /** @nocollapse */
    MegaMenuModule.ctorParameters = function () { return []; };
    exports.MegaMenuModule = MegaMenuModule;
});
//# sourceMappingURL=megamenu.js.map