/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './tabmenu';
import * as i2 from '@angular/common';
import * as i3 from '@angular/router';
import * as i4 from '../dom/domhandler';
export const TabMenuModuleNgFactory:i0.NgModuleFactory<i1.TabMenuModule> = i0.ɵcmf(i1.TabMenuModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,([] as any[])],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(4608,
          i2.NgLocalization,i2.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(512,i2.CommonModule,
          i2.CommonModule,([] as any[])),i0.ɵmpd(512,i3.RouterModule,i3.RouterModule,
          [[2,i3.ɵa],[2,i3.Router]]),i0.ɵmpd(512,i1.TabMenuModule,i1.TabMenuModule,
          ([] as any[]))]);
    });
const styles_TabMenu:any[] = ([] as any[]);
export const RenderType_TabMenu:i0.RendererType2 = i0.ɵcrt({encapsulation:2,styles:styles_TabMenu,
    data:{}});
function View_TabMenu_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'span',[['class',
      'ui-menuitem-icon fa']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,[i0.IterableDiffers,
      i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,'klass'],ngClass:[1,
      'ngClass']},(null as any))],(_ck,_v) => {
    const currVal_0:any = 'ui-menuitem-icon fa';
    const currVal_1:any = (<any>(<any>_v.parent).parent).context.$implicit.icon;
    _ck(_v,1,0,currVal_0,currVal_1);
  },(null as any));
}
function View_TabMenu_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),7,'a',[['class',
      'ui-menuitem-link ui-corner-all']],[[8,'href',4],[1,'target',0],[1,'title',0],
      [1,'id',0]],[[(null as any),'click']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>_co.itemClick($event,(<any>_v.parent).context.$implicit)) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                        '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_TabMenu_3)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n                        '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),1,'span',[['class','ui-menuitem-text']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['',''])),(_l()(),i0.ɵted((null as any),['\n                    ']))],
      (_ck,_v) => {
        const currVal_4:any = (<any>_v.parent).context.$implicit.icon;
        _ck(_v,3,0,currVal_4);
      },(_ck,_v) => {
        const currVal_0:any = ((<any>_v.parent).context.$implicit.url || '#');
        const currVal_1:any = (<any>_v.parent).context.$implicit.target;
        const currVal_2:any = (<any>_v.parent).context.$implicit.title;
        const currVal_3:any = (<any>_v.parent).context.$implicit.id;
        _ck(_v,0,0,currVal_0,currVal_1,currVal_2,currVal_3);
        const currVal_5:any = (<any>_v.parent).context.$implicit.label;
        _ck(_v,6,0,currVal_5);
      });
}
function View_TabMenu_5(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'span',[['class',
      'ui-menuitem-icon fa']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,[i0.IterableDiffers,
      i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,'klass'],ngClass:[1,
      'ngClass']},(null as any))],(_ck,_v) => {
    const currVal_0:any = 'ui-menuitem-icon fa';
    const currVal_1:any = (<any>(<any>_v.parent).parent).context.$implicit.icon;
    _ck(_v,1,0,currVal_0,currVal_1);
  },(null as any));
}
function View_TabMenu_4(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),8,'a',[['class',
      'ui-menuitem-link ui-corner-all']],[[1,'target',0],[1,'title',0],[1,'target',
      0],[8,'href',4]],[[(null as any),'click']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>i0.ɵnov(_v,1).onClick($event.button,$event.ctrlKey,$event.metaKey,
          $event.shiftKey)) !== false);
      ad = (pd_0 && ad);
    }
    if (('click' === en)) {
      const pd_1:any = ((<any>_co.itemClick($event,(<any>_v.parent).context.$implicit)) !== false);
      ad = (pd_1 && ad);
    }
    return ad;
  },(null as any),(null as any))),i0.ɵdid(671744,[[2,4]],0,i3.RouterLinkWithHref,[i3.Router,
      i3.ActivatedRoute,i2.LocationStrategy],{queryParams:[0,'queryParams'],routerLink:[1,
      'routerLink']},(null as any)),(_l()(),i0.ɵted((null as any),['\n                        '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_TabMenu_5)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n                        '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),1,'span',[['class','ui-menuitem-text']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['',''])),(_l()(),i0.ɵted((null as any),['\n                    ']))],
      (_ck,_v) => {
        const currVal_4:any = (<any>_v.parent).context.$implicit.queryParams;
        const currVal_5:any = (<any>_v.parent).context.$implicit.routerLink;
        _ck(_v,1,0,currVal_4,currVal_5);
        const currVal_6:any = (<any>_v.parent).context.$implicit.icon;
        _ck(_v,4,0,currVal_6);
      },(_ck,_v) => {
        const currVal_0:any = (<any>_v.parent).context.$implicit.target;
        const currVal_1:any = (<any>_v.parent).context.$implicit.title;
        const currVal_2:any = i0.ɵnov(_v,1).target;
        const currVal_3:any = i0.ɵnov(_v,1).href;
        _ck(_v,0,0,currVal_0,currVal_1,currVal_2,currVal_3);
        const currVal_7:any = (<any>_v.parent).context.$implicit.label;
        _ck(_v,7,0,currVal_7);
      });
}
function View_TabMenu_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),13,'li',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),i0.ɵdid(278528,
      (null as any),0,i2.NgClass,[i0.IterableDiffers,i0.KeyValueDiffers,i0.ElementRef,
          i0.Renderer],{ngClass:[0,'ngClass']},(null as any)),i0.ɵpod({'ui-tabmenuitem ui-state-default ui-corner-top':0,
      'ui-state-disabled':1,'ui-tabmenuitem-hasicon':2,'ui-state-active':3,'ui-helper-hidden':4}),
      i0.ɵdid(1720320,(null as any),2,i3.RouterLinkActive,[i3.Router,i0.ElementRef,
          i0.Renderer2,i0.ChangeDetectorRef],{routerLinkActiveOptions:[0,'routerLinkActiveOptions'],
          routerLinkActive:[1,'routerLinkActive']},(null as any)),i0.ɵqud(603979776,
          1,{links:1}),i0.ɵqud(603979776,2,{linksWithHrefs:1}),i0.ɵpod({exact:0}),
      (_l()(),i0.ɵted((null as any),['\n                    '])),(_l()(),i0.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_TabMenu_2)),i0.ɵdid(16384,
          (null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},
          (null as any)),(_l()(),i0.ɵted((null as any),['\n                    '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_TabMenu_4)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n                ']))],
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = _ck(_v,2,0,true,_v.context.$implicit.disabled,_v.context.$implicit.icon,
            (_co.activeItem == _v.context.$implicit),(_v.context.$implicit.visible === false));
        _ck(_v,1,0,currVal_0);
        const currVal_1:any = (_v.context.$implicit.routerLinkActiveOptions || _ck(_v,
            6,0,false));
        const currVal_2:any = 'ui-state-active';
        _ck(_v,3,0,currVal_1,currVal_2);
        const currVal_3:boolean = !_v.context.$implicit.routerLink;
        _ck(_v,9,0,currVal_3);
        const currVal_4:any = _v.context.$implicit.routerLink;
        _ck(_v,12,0,currVal_4);
      },(null as any));
}
export function View_TabMenu_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),9,'div',([] as any[]),(null as any),(null as any),
      (null as any),(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,
      [i0.IterableDiffers,i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,
          'klass'],ngClass:[1,'ngClass']},(null as any)),i0.ɵdid(278528,(null as any),
      0,i2.NgStyle,[i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{ngStyle:[0,'ngStyle']},
      (null as any)),(_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),4,'ul',[['class','ui-tabmenu-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all'],
          ['role','tablist']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),
      i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_TabMenu_1)),
      i0.ɵdid(802816,(null as any),0,i2.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,
          i0.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n            '])),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),
          i0.ɵted((null as any),['\n    ']))],(_ck,_v) => {
    var _co:i1.TabMenu = _v.component;
    const currVal_0:any = _co.styleClass;
    const currVal_1:any = 'ui-tabmenu ui-widget ui-widget-content ui-corner-all';
    _ck(_v,2,0,currVal_0,currVal_1);
    const currVal_2:any = _co.style;
    _ck(_v,3,0,currVal_2);
    const currVal_3:any = _co.model;
    _ck(_v,8,0,currVal_3);
  },(null as any));
}
export function View_TabMenu_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'p-tabMenu',([] as any[]),
      (null as any),(null as any),(null as any),View_TabMenu_0,RenderType_TabMenu)),
      i0.ɵprd(4608,(null as any),i4.DomHandler,i4.DomHandler,([] as any[])),i0.ɵdid(49152,
          (null as any),0,i1.TabMenu,([] as any[]),(null as any),(null as any))],(null as any),
      (null as any));
}
export const TabMenuNgFactory:i0.ComponentFactory<i1.TabMenu> = i0.ɵccf('p-tabMenu',
    i1.TabMenu,View_TabMenu_Host_0,{model:'model',activeItem:'activeItem',popup:'popup',
        style:'style',styleClass:'styleClass'},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovV29ya3NwYWNlL3ByaW1lbmcvc3JjL2FwcC9jb21wb25lbnRzL3RhYm1lbnUvdGFibWVudS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Xb3Jrc3BhY2UvcHJpbWVuZy9zcmMvYXBwL2NvbXBvbmVudHMvdGFibWVudS90YWJtZW51LnRzIiwibmc6Ly8vQzovV29ya3NwYWNlL3ByaW1lbmcvc3JjL2FwcC9jb21wb25lbnRzL3RhYm1lbnUvdGFibWVudS50cy5UYWJNZW51Lmh0bWwiLCJuZzovLy9DOi9Xb3Jrc3BhY2UvcHJpbWVuZy9zcmMvYXBwL2NvbXBvbmVudHMvdGFibWVudS90YWJtZW51LnRzLlRhYk1lbnVfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCJcbiAgICAgICAgPGRpdiBbbmdDbGFzc109XCIndWktdGFibWVudSB1aS13aWRnZXQgdWktd2lkZ2V0LWNvbnRlbnQgdWktY29ybmVyLWFsbCdcIiBbbmdTdHlsZV09XCJzdHlsZVwiIFtjbGFzc109XCJzdHlsZUNsYXNzXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJ1aS10YWJtZW51LW5hdiB1aS1oZWxwZXItcmVzZXQgdWktaGVscGVyLWNsZWFyZml4IHVpLXdpZGdldC1oZWFkZXIgdWktY29ybmVyLWFsbFwiIHJvbGU9XCJ0YWJsaXN0XCI+XG4gICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIG1vZGVsXCIgXG4gICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsndWktdGFibWVudWl0ZW0gdWktc3RhdGUtZGVmYXVsdCB1aS1jb3JuZXItdG9wJzp0cnVlLCd1aS1zdGF0ZS1kaXNhYmxlZCc6aXRlbS5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICd1aS10YWJtZW51aXRlbS1oYXNpY29uJzppdGVtLmljb24sJ3VpLXN0YXRlLWFjdGl2ZSc6YWN0aXZlSXRlbT09aXRlbSwndWktaGVscGVyLWhpZGRlbic6IGl0ZW0udmlzaWJsZSA9PT0gZmFsc2V9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtyb3V0ZXJMaW5rQWN0aXZlXT1cIid1aS1zdGF0ZS1hY3RpdmUnXCIgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT1cIml0ZW0ucm91dGVyTGlua0FjdGl2ZU9wdGlvbnN8fHtleGFjdDpmYWxzZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XCIhaXRlbS5yb3V0ZXJMaW5rXCIgW2hyZWZdPVwiaXRlbS51cmx8fCcjJ1wiIGNsYXNzPVwidWktbWVudWl0ZW0tbGluayB1aS1jb3JuZXItYWxsXCIgKGNsaWNrKT1cIml0ZW1DbGljaygkZXZlbnQsaXRlbSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIudGFyZ2V0XT1cIml0ZW0udGFyZ2V0XCIgW2F0dHIudGl0bGVdPVwiaXRlbS50aXRsZVwiIFthdHRyLmlkXT1cIml0ZW0uaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidWktbWVudWl0ZW0taWNvbiBmYVwiIFtuZ0NsYXNzXT1cIml0ZW0uaWNvblwiICpuZ0lmPVwiaXRlbS5pY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1aS1tZW51aXRlbS10ZXh0XCI+e3tpdGVtLmxhYmVsfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XCJpdGVtLnJvdXRlckxpbmtcIiBbcm91dGVyTGlua109XCJpdGVtLnJvdXRlckxpbmtcIiBbcXVlcnlQYXJhbXNdPVwiaXRlbS5xdWVyeVBhcmFtc1wiIGNsYXNzPVwidWktbWVudWl0ZW0tbGluayB1aS1jb3JuZXItYWxsXCIgKGNsaWNrKT1cIml0ZW1DbGljaygkZXZlbnQsaXRlbSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIudGFyZ2V0XT1cIml0ZW0udGFyZ2V0XCIgW2F0dHIudGl0bGVdPVwiaXRlbS50aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1aS1tZW51aXRlbS1pY29uIGZhXCIgW25nQ2xhc3NdPVwiaXRlbS5pY29uXCIgKm5nSWY9XCJpdGVtLmljb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVpLW1lbnVpdGVtLXRleHRcIj57e2l0ZW0ubGFiZWx9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAiLCI8cC10YWJNZW51PjwvcC10YWJNZW51PiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ1N3QjtNQUFBO01BQUEsdUJBQUE7a0RBQUE7TUFBQTtJQUFNO0lBQTRCO0lBQWxDLFdBQU0sVUFBNEIsU0FBbEM7Ozs7b0JBRko7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUEwRjtNQUFBO01BQUE7SUFBQTtJQUExRjtFQUFBLGdDQUM4RTtNQUMxRTthQUFBO1VBQUEsd0JBQWlGO01BQ2pGO1VBQUE7TUFBK0Isd0NBQXFCOztRQURJO1FBQXhELFdBQXdELFNBQXhEOztRQUZ3QjtRQUN4QjtRQUE0QjtRQUEwQjtRQUQxRCxXQUE0QixVQUN4QixVQUE0QixVQUEwQixTQUQxRDtRQUdtQztRQUFBOzs7O29CQUkvQjtNQUFBO01BQUEsdUJBQUE7a0RBQUE7TUFBQTtJQUFNO0lBQTRCO0lBQWxDLFdBQU0sVUFBNEIsU0FBbEM7Ozs7b0JBRko7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUFBO01BQUE7VUFBQTtNQUFBO0lBQUE7SUFBa0k7TUFBQTtNQUFBO0lBQUE7SUFBbEk7RUFBQSx1Q0FBQTsyQ0FBQTtNQUFBLDhCQUMwRDtNQUN0RDthQUFBO1VBQUEsd0JBQWlGO01BQ2pGO1VBQUE7TUFBK0Isd0NBQXFCOztRQUhFO1FBQS9CO1FBQTNCLFdBQTBELFVBQS9CLFNBQTNCO1FBRTREO1FBQXhELFdBQXdELFNBQXhEOztRQURBO1FBQTRCO1FBRGhDO1FBQUE7UUFBQSxXQUNJLFVBQTRCLFVBRGhDLG1CQUFBO1FBR21DO1FBQUE7Ozs7b0JBWnZDO01BQUEsK0VBQUE7TUFBQTtxQkFBQSxnREFDSTtNQUFBO2FBREo7MkNBQUE7VUFBQTtVQUFBLDREQUcrQztNQUF3RSwyREFDbkg7VUFBQSxvRUFBQTtVQUFBO1VBQUEsZUFJSTtNQUNKO2FBQUE7VUFBQSx3QkFJSTs7O1FBWko7WUFBQTtRQURKLFdBQ0ksU0FESjtRQUcrQztZQUFBO1FBQXZDO1FBSFIsV0FHK0MsVUFBdkMsU0FIUjtRQUlPO1FBQUgsV0FBRyxTQUFIO1FBS0c7UUFBSCxZQUFHLFNBQUg7Ozs7b0JBWnBCLCtDQUNRO01BQUE7TUFBQSxtREFBQTtNQUFBO1VBQUEsc0RBQUE7TUFBQTtNQUFBLGVBQStHLG1EQUMzRztNQUFBO1VBQUE7TUFBQSxnQkFBNEcsdURBQ3hHO2FBQUE7YUFBQTs0QkFBQSx5Q0FjSztVQUFBLHFCQUNKLCtDQUNIO2lCQUFBOztJQWxCb0Y7SUFBckY7SUFBTCxXQUEwRixVQUFyRixTQUFMO0lBQXdFO0lBQXhFLFdBQXdFLFNBQXhFO0lBRVk7SUFBSixXQUFJLFNBQUo7Ozs7b0JDSGhCO01BQUE7YUFBQSxzRUFBQTtVQUFBOzs7OzsifQ==
