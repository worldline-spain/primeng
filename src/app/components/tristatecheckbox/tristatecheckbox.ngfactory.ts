/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './tristatecheckbox';
import * as i2 from '@angular/common';
import * as i3 from '@angular/forms';
export const TriStateCheckboxModuleNgFactory:i0.NgModuleFactory<i1.TriStateCheckboxModule> = i0.ɵcmf(i1.TriStateCheckboxModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,([] as any[])],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(4608,
          i2.NgLocalization,i2.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(512,i2.CommonModule,
          i2.CommonModule,([] as any[])),i0.ɵmpd(512,i1.TriStateCheckboxModule,i1.TriStateCheckboxModule,
          ([] as any[]))]);
    });
const styles_TriStateCheckbox:any[] = ([] as any[]);
export const RenderType_TriStateCheckbox:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_TriStateCheckbox,data:{}});
function View_TriStateCheckbox_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'label',[['class',
      'ui-chkbox-label']],[[1,'for',0]],[[(null as any),'click']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>_co.onClick($event,i0.ɵnov((<any>_v.parent),7))) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,[i0.IterableDiffers,
      i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,'klass'],ngClass:[1,
      'ngClass']},(null as any)),i0.ɵpod({'ui-label-active':0,'ui-label-disabled':1,
      'ui-label-focus':2}),(_l()(),i0.ɵted((null as any),['','']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_1:any = 'ui-chkbox-label';
    const currVal_2:any = _ck(_v,2,0,(_co.value != (null as any)),_co.disabled,_co.focus);
    _ck(_v,1,0,currVal_1,currVal_2);
  },(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.inputId;
    _ck(_v,0,0,currVal_0);
    const currVal_3:any = _co.label;
    _ck(_v,3,0,currVal_3);
  });
}
export function View_TriStateCheckbox_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),17,'div',([] as any[]),(null as any),(null as any),
      (null as any),(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,
      [i0.IterableDiffers,i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,
          'klass'],ngClass:[1,'ngClass']},(null as any)),i0.ɵdid(278528,(null as any),
      0,i2.NgStyle,[i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{ngStyle:[0,'ngStyle']},
      (null as any)),(_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),3,'div',[['class','ui-helper-hidden-accessible']],
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['\n                '])),(_l()(),i0.ɵeld(0,[['input',1]],
      (null as any),0,'input',[['readonly',''],['type','text']],[[1,'id',0],[8,'name',
          0],[1,'tabindex',0],[8,'disabled',0]],[[(null as any),'keyup'],[(null as any),
          'keydown'],[(null as any),'focus'],[(null as any),'blur']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:i1.TriStateCheckbox = _v.component;
        if (('keyup' === en)) {
          const pd_0:any = ((<any>_co.onKeyup($event)) !== false);
          ad = (pd_0 && ad);
        }
        if (('keydown' === en)) {
          const pd_1:any = ((<any>_co.onKeydown($event)) !== false);
          ad = (pd_1 && ad);
        }
        if (('focus' === en)) {
          const pd_2:any = ((<any>_co.onFocus()) !== false);
          ad = (pd_2 && ad);
        }
        if (('blur' === en)) {
          const pd_3:any = ((<any>_co.onBlur()) !== false);
          ad = (pd_3 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),7,'div',[['class','ui-chkbox-box ui-widget ui-corner-all ui-state-default']],
          (null as any),[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i1.TriStateCheckbox = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.onClick($event,i0.ɵnov(_v,7))) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,
          [i0.IterableDiffers,i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,
              'klass'],ngClass:[1,'ngClass']},(null as any)),i0.ɵpod({'ui-state-active':0,
          'ui-state-disabled':1,'ui-state-focus':2}),(_l()(),i0.ɵted((null as any),
          ['\n                '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),2,
          'span',[['class','ui-chkbox-icon fa ui-clickable']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),i0.ɵdid(278528,(null as any),
          0,i2.NgClass,[i0.IterableDiffers,i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],
          {klass:[0,'klass'],ngClass:[1,'ngClass']},(null as any)),i0.ɵpod({'fa-check':0,
          'fa-close':1}),(_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),
          i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵted((null as any),['\n        '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_TriStateCheckbox_1)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n    ']))],(_ck,
      _v) => {
    var _co:i1.TriStateCheckbox = _v.component;
    const currVal_0:any = _co.styleClass;
    const currVal_1:any = 'ui-chkbox ui-tristatechkbox ui-widget';
    _ck(_v,2,0,currVal_0,currVal_1);
    const currVal_2:any = _co.style;
    _ck(_v,3,0,currVal_2);
    const currVal_7:any = 'ui-chkbox-box ui-widget ui-corner-all ui-state-default';
    const currVal_8:any = _ck(_v,12,0,(_co.value != (null as any)),_co.disabled,_co.focus);
    _ck(_v,11,0,currVal_7,currVal_8);
    const currVal_9:any = 'ui-chkbox-icon fa ui-clickable';
    const currVal_10:any = _ck(_v,16,0,(_co.value == true),(_co.value == false));
    _ck(_v,15,0,currVal_9,currVal_10);
    const currVal_11:any = _co.label;
    _ck(_v,21,0,currVal_11);
  },(_ck,_v) => {
    var _co:i1.TriStateCheckbox = _v.component;
    const currVal_3:any = _co.inputId;
    const currVal_4:any = _co.name;
    const currVal_5:any = _co.tabindex;
    const currVal_6:any = _co.disabled;
    _ck(_v,7,0,currVal_3,currVal_4,currVal_5,currVal_6);
  });
}
export function View_TriStateCheckbox_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'p-triStateCheckbox',
      ([] as any[]),(null as any),(null as any),(null as any),View_TriStateCheckbox_0,
      RenderType_TriStateCheckbox)),i0.ɵprd(5120,(null as any),i3.NG_VALUE_ACCESSOR,
      (p0_0:any) => {
        return [p0_0];
      },[i1.TriStateCheckbox]),i0.ɵdid(49152,(null as any),0,i1.TriStateCheckbox,[i0.ChangeDetectorRef],
      (null as any),(null as any))],(null as any),(null as any));
}
export const TriStateCheckboxNgFactory:i0.ComponentFactory<i1.TriStateCheckbox> = i0.ɵccf('p-triStateCheckbox',
    i1.TriStateCheckbox,View_TriStateCheckbox_Host_0,{disabled:'disabled',name:'name',
        tabindex:'tabindex',inputId:'inputId',style:'style',styleClass:'styleClass',
        label:'label'},{onChange:'onChange'},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovV29ya3NwYWNlL3ByaW1lbmcvc3JjL2FwcC9jb21wb25lbnRzL3RyaXN0YXRlY2hlY2tib3gvdHJpc3RhdGVjaGVja2JveC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Xb3Jrc3BhY2UvcHJpbWVuZy9zcmMvYXBwL2NvbXBvbmVudHMvdHJpc3RhdGVjaGVja2JveC90cmlzdGF0ZWNoZWNrYm94LnRzIiwibmc6Ly8vQzovV29ya3NwYWNlL3ByaW1lbmcvc3JjL2FwcC9jb21wb25lbnRzL3RyaXN0YXRlY2hlY2tib3gvdHJpc3RhdGVjaGVja2JveC50cy5UcmlTdGF0ZUNoZWNrYm94Lmh0bWwiLCJuZzovLy9DOi9Xb3Jrc3BhY2UvcHJpbWVuZy9zcmMvYXBwL2NvbXBvbmVudHMvdHJpc3RhdGVjaGVja2JveC90cmlzdGF0ZWNoZWNrYm94LnRzLlRyaVN0YXRlQ2hlY2tib3hfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCJcbiAgICAgICAgPGRpdiBbbmdTdHlsZV09XCJzdHlsZVwiIFtuZ0NsYXNzXT1cIid1aS1jaGtib3ggdWktdHJpc3RhdGVjaGtib3ggdWktd2lkZ2V0J1wiIFtjbGFzc109XCJzdHlsZUNsYXNzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWktaGVscGVyLWhpZGRlbi1hY2Nlc3NpYmxlXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0ICNpbnB1dCB0eXBlPVwidGV4dFwiIFthdHRyLmlkXT1cImlucHV0SWRcIiBbbmFtZV09XCJuYW1lXCIgW2F0dHIudGFiaW5kZXhdPVwidGFiaW5kZXhcIiByZWFkb25seSBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiAoa2V5dXApPVwib25LZXl1cCgkZXZlbnQpXCIgKGtleWRvd24pPVwib25LZXlkb3duKCRldmVudClcIiAoZm9jdXMpPVwib25Gb2N1cygpXCIgKGJsdXIpPVwib25CbHVyKClcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpLWNoa2JveC1ib3ggdWktd2lkZ2V0IHVpLWNvcm5lci1hbGwgdWktc3RhdGUtZGVmYXVsdFwiIChjbGljayk9XCJvbkNsaWNrKCRldmVudCxpbnB1dClcIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsndWktc3RhdGUtYWN0aXZlJzp2YWx1ZSE9bnVsbCwndWktc3RhdGUtZGlzYWJsZWQnOmRpc2FibGVkLCd1aS1zdGF0ZS1mb2N1cyc6Zm9jdXN9XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1aS1jaGtib3gtaWNvbiBmYSB1aS1jbGlja2FibGVcIiBbbmdDbGFzc109XCJ7J2ZhLWNoZWNrJzp2YWx1ZT09dHJ1ZSwnZmEtY2xvc2UnOnZhbHVlPT1mYWxzZX1cIj48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInVpLWNoa2JveC1sYWJlbFwiIChjbGljayk9XCJvbkNsaWNrKCRldmVudCxpbnB1dClcIlxuICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieyd1aS1sYWJlbC1hY3RpdmUnOnZhbHVlIT1udWxsLCAndWktbGFiZWwtZGlzYWJsZWQnOmRpc2FibGVkLCAndWktbGFiZWwtZm9jdXMnOmZvY3VzfVwiXG4gICAgICAgICAgICAgICAqbmdJZj1cImxhYmVsXCIgW2F0dHIuZm9yXT1cImlucHV0SWRcIj57e2xhYmVsfX08L2xhYmVsPlxuICAgICIsIjxwLXRyaVN0YXRlQ2hlY2tib3g+PC9wLXRyaVN0YXRlQ2hlY2tib3g+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ1VRO01BQUE7SUFBQTtJQUFBO0lBQStCO01BQUE7TUFBQTtJQUFBO0lBQS9CO0VBQUEsdUNBQUE7a0RBQUE7TUFBQSxrQ0FDTztNQUFBLHFCQUNtQzs7SUFGbkM7SUFDQTtJQURQLFdBQU8sVUFDQSxTQURQOzs7SUFFcUI7SUFGckIsV0FFcUIsU0FGckI7SUFFMEM7SUFBQTs7OztvQkFabEQsK0NBQ1E7TUFBQTtNQUFBLG1EQUFBO01BQUE7VUFBQSxzREFBQTtNQUFBO01BQUEsZUFBZ0csbURBQzVGO01BQUE7TUFBQSx3RUFBeUM7YUFBQSx3Q0FDckM7TUFBQTtVQUFBO1VBQUE7UUFBQTtRQUFBO1FBQXNIO1VBQUE7VUFBQTtRQUFBO1FBQTBCO1VBQUE7VUFBQTtRQUFBO1FBQThCO1VBQUE7VUFBQTtRQUFBO1FBQW9CO1VBQUE7VUFBQTtRQUFBO1FBQWxNO01BQUEsZ0NBQW9OO01BQ2xOLG1EQUNOO1VBQUE7VUFBQTtZQUFBO1lBQUE7WUFBb0U7Y0FBQTtjQUFBO1lBQUE7WUFBcEU7VUFBQSx1Q0FBQTtVQUFBO2NBQUEsc0RBQ0k7VUFBQSwyQ0FBZ0c7VUFBQSx5QkFDaEc7VUFBQTtVQUFBLG1EQUFBO1VBQUE7VUFBQSxnRUFBNkM7VUFBQSxlQUFvRSxtREFDL0c7aUJBQUEsZ0NBQ0o7TUFDTjthQUFBO1VBQUEsd0JBRTJEOzs7SUFYZ0I7SUFBcEQ7SUFBdkIsV0FBMkUsVUFBcEQsU0FBdkI7SUFBSztJQUFMLFdBQUssU0FBTDtJQUlTO0lBQ0Q7SUFESixZQUFLLFVBQ0QsU0FESjtJQUVVO0lBQXVDO0lBQTdDLFlBQU0sVUFBdUMsVUFBN0M7SUFLRDtJQUZQLFlBRU8sVUFGUDs7O0lBUGtDO0lBQW9CO0lBQWM7SUFBb0M7SUFBaEcsV0FBMEIsVUFBb0IsVUFBYyxVQUFvQyxTQUFoRzs7OztvQkNIaEI7TUFBQTtpQ0FBQTtNQUFBO1FBQUE7TUFBQSxnQ0FBQTtNQUFBOzs7OzsifQ==