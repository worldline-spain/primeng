/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './growl';
import * as i2 from '@angular/common';
import * as i3 from '../dom/domhandler';
import * as i4 from '../common/messageservice';
export const GrowlModuleNgFactory:i0.NgModuleFactory<i1.GrowlModule> = i0.ɵcmf(i1.GrowlModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,([] as any[])],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(4608,
          i2.NgLocalization,i2.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(512,i2.CommonModule,
          i2.CommonModule,([] as any[])),i0.ɵmpd(512,i1.GrowlModule,i1.GrowlModule,
          ([] as any[]))]);
    });
const styles_Growl:any[] = ([] as any[]);
export const RenderType_Growl:i0.RendererType2 = i0.ɵcrt({encapsulation:2,styles:styles_Growl,
    data:{}});
function View_Growl_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,[['msgel',1]],(null as any),22,'div',[['aria-live',
      'polite'],['class','ui-growl-item-container ui-state-highlight ui-corner-all ui-shadow']],
      (null as any),[[(null as any),'click'],[(null as any),'mouseenter']],(_v,en,
          $event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.onMessageClick(_v.context.index)) !== false);
          ad = (pd_0 && ad);
        }
        if (('mouseenter' === en)) {
          const pd_1:any = ((<any>_co.onMessageHover(_v.context.index)) !== false);
          ad = (pd_1 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,[i0.IterableDiffers,
      i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,'klass'],ngClass:[1,
      'ngClass']},(null as any)),i0.ɵpod({'ui-growl-message-info':0,'ui-growl-message-warn':1,
      'ui-growl-message-error':2,'ui-growl-message-success':3}),(_l()(),i0.ɵted((null as any),
      ['\n                '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),17,'div',
      [['class','ui-growl-item']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['\n                     '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),0,'div',[['class','ui-growl-icon-close fa fa-close']],
          (null as any),[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.remove(_v.context.index,i0.ɵnov(_v,0))) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                     '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),2,'span',[['class','ui-growl-image fa fa-2x']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      i0.ɵdid(278528,(null as any),0,i2.NgClass,[i0.IterableDiffers,i0.KeyValueDiffers,
          i0.ElementRef,i0.Renderer],{klass:[0,'klass'],ngClass:[1,'ngClass']},(null as any)),
      i0.ɵpod({'fa-info-circle':0,'fa-exclamation-circle':1,'fa-close':2,'fa-check':3}),
      (_l()(),i0.ɵted((null as any),['\n                     '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),6,'div',[['class','ui-growl-message']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n                        '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          1,'span',[['class','ui-growl-title']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['',''])),(_l()(),
          i0.ɵted((null as any),['\n                        '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),0,'p',([] as any[]),[[8,'innerHTML',1]],(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n                     '])),(_l()(),i0.ɵted((null as any),['\n                     '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),0,'div',[['style','clear: both;']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),i0.ɵted((null as any),
          ['\n            ']))],(_ck,_v) => {
    const currVal_0:any = 'ui-growl-item-container ui-state-highlight ui-corner-all ui-shadow';
    const currVal_1:any = _ck(_v,2,0,(_v.context.$implicit.severity == 'info'),(_v.context.$implicit.severity == 'warn'),
        (_v.context.$implicit.severity == 'error'),(_v.context.$implicit.severity == 'success'));
    _ck(_v,1,0,currVal_0,currVal_1);
    const currVal_2:any = 'ui-growl-image fa fa-2x';
    const currVal_3:any = _ck(_v,10,0,(_v.context.$implicit.severity == 'info'),(_v.context.$implicit.severity == 'warn'),
        (_v.context.$implicit.severity == 'error'),(_v.context.$implicit.severity == 'success'));
    _ck(_v,9,0,currVal_2,currVal_3);
  },(_ck,_v) => {
    const currVal_4:any = _v.context.$implicit.summary;
    _ck(_v,15,0,currVal_4);
    const currVal_5:any = _v.context.$implicit.detail;
    _ck(_v,17,0,currVal_5);
  });
}
export function View_Growl_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[i0.ɵqud(402653184,1,{containerViewChild:0}),(_l()(),i0.ɵted((null as any),
      ['\n        '])),(_l()(),i0.ɵeld(0,[[1,0],['container',1]],(null as any),6,'div',
      ([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
      i0.ɵdid(278528,(null as any),0,i2.NgClass,[i0.IterableDiffers,i0.KeyValueDiffers,
          i0.ElementRef,i0.Renderer],{klass:[0,'klass'],ngClass:[1,'ngClass']},(null as any)),
      i0.ɵdid(278528,(null as any),0,i2.NgStyle,[i0.KeyValueDiffers,i0.ElementRef,
          i0.Renderer],{ngStyle:[0,'ngStyle']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n            '])),(_l()(),i0.ɵand(16777216,(null as any),(null as any),
          1,(null as any),View_Growl_1)),i0.ɵdid(802816,(null as any),0,i2.NgForOf,
          [i0.ViewContainerRef,i0.TemplateRef,i0.IterableDiffers],{ngForOf:[0,'ngForOf']},
          (null as any)),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵted((null as any),
          ['\n    ']))],(_ck,_v) => {
    var _co:i1.Growl = _v.component;
    const currVal_0:any = _co.styleClass;
    const currVal_1:any = 'ui-growl ui-widget';
    _ck(_v,3,0,currVal_0,currVal_1);
    const currVal_2:any = _co.style;
    _ck(_v,4,0,currVal_2);
    const currVal_3:any = _co.value;
    _ck(_v,7,0,currVal_3);
  },(null as any));
}
export function View_Growl_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'p-growl',([] as any[]),
      (null as any),(null as any),(null as any),View_Growl_0,RenderType_Growl)),i0.ɵprd(512,
      (null as any),i3.DomHandler,i3.DomHandler,([] as any[])),i0.ɵdid(4636672,(null as any),
      0,i1.Growl,[i0.ElementRef,i3.DomHandler,i0.IterableDiffers,[2,i4.MessageService]],
      (null as any),(null as any))],(_ck,_v) => {
    _ck(_v,2,0);
  },(null as any));
}
export const GrowlNgFactory:i0.ComponentFactory<i1.Growl> = i0.ɵccf('p-growl',i1.Growl,
    View_Growl_Host_0,{life:'life',style:'style',styleClass:'styleClass',immutable:'immutable',
        autoZIndex:'autoZIndex',baseZIndex:'baseZIndex',value:'value',sticky:'sticky'},
    {onClick:'onClick',onHover:'onHover',onClose:'onClose',valueChange:'valueChange'},
    ([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovV29ya3NwYWNlL3ByaW1lbmcvc3JjL2FwcC9jb21wb25lbnRzL2dyb3dsL2dyb3dsLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1dvcmtzcGFjZS9wcmltZW5nL3NyYy9hcHAvY29tcG9uZW50cy9ncm93bC9ncm93bC50cyIsIm5nOi8vL0M6L1dvcmtzcGFjZS9wcmltZW5nL3NyYy9hcHAvY29tcG9uZW50cy9ncm93bC9ncm93bC50cy5Hcm93bC5odG1sIiwibmc6Ly8vQzovV29ya3NwYWNlL3ByaW1lbmcvc3JjL2FwcC9jb21wb25lbnRzL2dyb3dsL2dyb3dsLnRzLkdyb3dsX0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiXG4gICAgICAgIDxkaXYgI2NvbnRhaW5lciBbbmdDbGFzc109XCIndWktZ3Jvd2wgdWktd2lkZ2V0J1wiIFtuZ1N0eWxlXT1cInN0eWxlXCIgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIj5cbiAgICAgICAgICAgIDxkaXYgI21zZ2VsICpuZ0Zvcj1cImxldCBtc2cgb2YgdmFsdWU7bGV0IGkgPSBpbmRleFwiIGNsYXNzPVwidWktZ3Jvd2wtaXRlbS1jb250YWluZXIgdWktc3RhdGUtaGlnaGxpZ2h0IHVpLWNvcm5lci1hbGwgdWktc2hhZG93XCIgYXJpYS1saXZlPVwicG9saXRlXCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J3VpLWdyb3dsLW1lc3NhZ2UtaW5mbyc6bXNnLnNldmVyaXR5ID09ICdpbmZvJywndWktZ3Jvd2wtbWVzc2FnZS13YXJuJzptc2cuc2V2ZXJpdHkgPT0gJ3dhcm4nLFxuICAgICAgICAgICAgICAgICAgICAndWktZ3Jvd2wtbWVzc2FnZS1lcnJvcic6bXNnLnNldmVyaXR5ID09ICdlcnJvcicsJ3VpLWdyb3dsLW1lc3NhZ2Utc3VjY2Vzcyc6bXNnLnNldmVyaXR5ID09ICdzdWNjZXNzJ31cIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25NZXNzYWdlQ2xpY2soaSlcIiAobW91c2VlbnRlcik9XCJvbk1lc3NhZ2VIb3ZlcihpKVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1ncm93bC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWktZ3Jvd2wtaWNvbi1jbG9zZSBmYSBmYS1jbG9zZVwiIChjbGljayk9XCJyZW1vdmUoaSxtc2dlbClcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidWktZ3Jvd2wtaW1hZ2UgZmEgZmEtMnhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydmYS1pbmZvLWNpcmNsZSc6bXNnLnNldmVyaXR5ID09ICdpbmZvJywnZmEtZXhjbGFtYXRpb24tY2lyY2xlJzptc2cuc2V2ZXJpdHkgPT0gJ3dhcm4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmEtY2xvc2UnOm1zZy5zZXZlcml0eSA9PSAnZXJyb3InLCdmYS1jaGVjayc6bXNnLnNldmVyaXR5ID09ICdzdWNjZXNzJ31cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWktZ3Jvd2wtbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1aS1ncm93bC10aXRsZVwiPnt7bXNnLnN1bW1hcnl9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIFtpbm5lckhUTUxdPVwibXNnLmRldGFpbFwiPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImNsZWFyOiBib3RoO1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICIsIjxwLWdyb3dsPjwvcC1ncm93bD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ0VZO01BQUE7TUFBQTtnQkFBQTtRQUFBO1FBQUE7UUFHUTtVQUFBO1VBQUE7UUFBQTtRQUE0QjtVQUFBO1VBQUE7UUFBQTtRQUhwQztNQUFBLHVDQUFBO2tEQUFBO01BQUEsa0NBQ0k7TUFBQSwwREFFaUU7TUFBQSx5QkFDakU7TUFBQTtNQUFBLGdCQUEyQjtNQUN0QjtVQUFBO1lBQUE7WUFBQTtZQUE2QztjQUFBO2NBQUE7WUFBQTtZQUE3QztVQUFBLGdDQUE2RTtNQUM3RTtVQUFBO2FBQUE7bUNBQUE7YUFDRztNQUN5Riw0REFDNUY7VUFBQTtVQUFBLDBEQUE4QjtVQUFBLGlDQUMzQjtVQUFBO1VBQUEsOEJBQTZCLHdDQUFzQjtpQkFBQSxnREFDbkQ7VUFBQTtVQUFBLDRDQUFnQztVQUFBLDhCQUM3QjtNQUNOO1VBQUE7TUFBZ0MsdURBQy9CO1VBQUE7SUFkMEM7SUFDaEQ7UUFBQTtJQURKLFdBQW9ELFVBQ2hELFNBREo7SUFNZTtJQUNIO1FBQUE7SUFESCxXQUFNLFVBQ0gsU0FESDs7SUFJZ0M7SUFBQTtJQUMxQjtJQUFILFlBQUcsU0FBSDs7OztnRUFieEI7TUFBQSxpQkFDUTtNQUFBO2FBQUE7bUNBQUE7YUFBQTtxQkFBQSx5Q0FBd0Y7VUFBQSxxQkFDcEY7VUFBQSxzQ0FBQTtVQUFBO1VBQUEsZUFlTSwrQ0FDSjtVQUFBOztJQWpCNkQ7SUFBbkQ7SUFBaEIsV0FBbUUsVUFBbkQsU0FBaEI7SUFBaUQ7SUFBakQsV0FBaUQsU0FBakQ7SUFDZ0I7SUFBWixXQUFZLFNBQVo7Ozs7b0JDRlo7TUFBQTtNQUFBLGdFQUFBO01BQUE7TUFBQTtJQUFBOzs7Ozs7OyJ9
