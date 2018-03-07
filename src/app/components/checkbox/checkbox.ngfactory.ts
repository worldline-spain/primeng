/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './checkbox';
import * as i2 from '@angular/common';
import * as i3 from '@angular/forms';
export const CheckboxModuleNgFactory:i0.NgModuleFactory<i1.CheckboxModule> = i0.ɵcmf(i1.CheckboxModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,([] as any[])],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(4608,
          i2.NgLocalization,i2.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(512,i2.CommonModule,
          i2.CommonModule,([] as any[])),i0.ɵmpd(512,i1.CheckboxModule,i1.CheckboxModule,
          ([] as any[]))]);
    });
const styles_Checkbox:any[] = ([] as any[]);
export const RenderType_Checkbox:i0.RendererType2 = i0.ɵcrt({encapsulation:2,styles:styles_Checkbox,
    data:{}});
function View_Checkbox_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'label',[['class',
      'ui-chkbox-label']],[[1,'for',0]],[[(null as any),'click']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>_co.onClick($event,i0.ɵnov((<any>_v.parent),7),true)) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,[i0.IterableDiffers,
      i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,'klass'],ngClass:[1,
      'ngClass']},(null as any)),i0.ɵpod({'ui-label-active':0,'ui-label-disabled':1,
      'ui-label-focus':2}),(_l()(),i0.ɵted((null as any),['','']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_1:any = 'ui-chkbox-label';
    const currVal_2:any = _ck(_v,2,0,_co.checked,_co.disabled,_co.focused);
    _ck(_v,1,0,currVal_1,currVal_2);
  },(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.inputId;
    _ck(_v,0,0,currVal_0);
    const currVal_3:any = _co.label;
    _ck(_v,3,0,currVal_3);
  });
}
export function View_Checkbox_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),19,'div',([] as any[]),(null as any),(null as any),
      (null as any),(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,
      [i0.IterableDiffers,i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,
          'klass'],ngClass:[1,'ngClass']},(null as any)),i0.ɵdid(278528,(null as any),
      0,i2.NgStyle,[i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{ngStyle:[0,'ngStyle']},
      (null as any)),(_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),5,'div',[['class','ui-helper-hidden-accessible']],
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['\n                '])),(_l()(),i0.ɵeld(0,[['cb',1]],
      (null as any),2,'input',[['type','checkbox']],[[1,'id',0],[8,'name',0],[8,'value',
          0],[8,'checked',0],[8,'disabled',0],[1,'tabindex',0]],[[(null as any),'focus'],
          [(null as any),'blur'],[(null as any),'change']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:i1.Checkbox = _v.component;
        if (('focus' === en)) {
          const pd_0:any = ((<any>_co.onFocus($event)) !== false);
          ad = (pd_0 && ad);
        }
        if (('blur' === en)) {
          const pd_1:any = ((<any>_co.onBlur($event)) !== false);
          ad = (pd_1 && ad);
        }
        if (('change' === en)) {
          const pd_2:any = ((<any>_co.handleChange($event)) !== false);
          ad = (pd_2 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,[i0.IterableDiffers,
      i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{ngClass:[0,'ngClass']},(null as any)),
      i0.ɵpod({'ui-state-focus':0}),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),7,'div',[['class','ui-chkbox-box ui-widget ui-corner-all ui-state-default']],
          (null as any),[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i1.Checkbox = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.onClick($event,i0.ɵnov(_v,7),true)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,
          [i0.IterableDiffers,i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,
              'klass'],ngClass:[1,'ngClass']},(null as any)),i0.ɵpod({'ui-state-active':0,
          'ui-state-disabled':1,'ui-state-focus':2}),(_l()(),i0.ɵted((null as any),
          ['\n                '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),2,
          'span',[['class','ui-chkbox-icon ui-clickable']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),i0.ɵdid(278528,(null as any),
          0,i2.NgClass,[i0.IterableDiffers,i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],
          {klass:[0,'klass'],ngClass:[1,'ngClass']},(null as any)),i0.ɵpod({'fa fa-check':0}),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵted((null as any),
          ['\n        '])),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),
          i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_Checkbox_1)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n    ']))],(_ck,
      _v) => {
    var _co:i1.Checkbox = _v.component;
    const currVal_0:any = _co.styleClass;
    const currVal_1:any = 'ui-chkbox ui-widget';
    _ck(_v,2,0,currVal_0,currVal_1);
    const currVal_2:any = _co.style;
    _ck(_v,3,0,currVal_2);
    const currVal_9:any = _ck(_v,9,0,_co.focused);
    _ck(_v,8,0,currVal_9);
    const currVal_10:any = 'ui-chkbox-box ui-widget ui-corner-all ui-state-default';
    const currVal_11:any = _ck(_v,14,0,_co.checked,_co.disabled,_co.focused);
    _ck(_v,13,0,currVal_10,currVal_11);
    const currVal_12:any = 'ui-chkbox-icon ui-clickable';
    const currVal_13:any = _ck(_v,18,0,_co.checked);
    _ck(_v,17,0,currVal_12,currVal_13);
    const currVal_14:any = _co.label;
    _ck(_v,23,0,currVal_14);
  },(_ck,_v) => {
    var _co:i1.Checkbox = _v.component;
    const currVal_3:any = _co.inputId;
    const currVal_4:any = _co.name;
    const currVal_5:any = _co.value;
    const currVal_6:any = _co.checked;
    const currVal_7:any = _co.disabled;
    const currVal_8:any = _co.tabindex;
    _ck(_v,7,0,currVal_3,currVal_4,currVal_5,currVal_6,currVal_7,currVal_8);
  });
}
export function View_Checkbox_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'p-checkbox',([] as any[]),
      (null as any),(null as any),(null as any),View_Checkbox_0,RenderType_Checkbox)),
      i0.ɵprd(5120,(null as any),i3.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i1.Checkbox]),i0.ɵdid(49152,(null as any),0,i1.Checkbox,[i0.ChangeDetectorRef],
          (null as any),(null as any))],(null as any),(null as any));
}
export const CheckboxNgFactory:i0.ComponentFactory<i1.Checkbox> = i0.ɵccf('p-checkbox',
    i1.Checkbox,View_Checkbox_Host_0,{value:'value',name:'name',disabled:'disabled',
        binary:'binary',label:'label',tabindex:'tabindex',inputId:'inputId',style:'style',
        styleClass:'styleClass',formControl:'formControl'},{onChange:'onChange'},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovV29ya3NwYWNlL3ByaW1lbmcvc3JjL2FwcC9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1dvcmtzcGFjZS9wcmltZW5nL3NyYy9hcHAvY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC50cyIsIm5nOi8vL0M6L1dvcmtzcGFjZS9wcmltZW5nL3NyYy9hcHAvY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC50cy5DaGVja2JveC5odG1sIiwibmc6Ly8vQzovV29ya3NwYWNlL3ByaW1lbmcvc3JjL2FwcC9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94LnRzLkNoZWNrYm94X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiXG4gICAgICAgIDxkaXYgW25nU3R5bGVdPVwic3R5bGVcIiBbbmdDbGFzc109XCIndWktY2hrYm94IHVpLXdpZGdldCdcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpLWhlbHBlci1oaWRkZW4tYWNjZXNzaWJsZVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCAjY2IgdHlwZT1cImNoZWNrYm94XCIgW2F0dHIuaWRdPVwiaW5wdXRJZFwiIFtuYW1lXT1cIm5hbWVcIiBbdmFsdWVdPVwidmFsdWVcIiBbY2hlY2tlZF09XCJjaGVja2VkXCIgKGZvY3VzKT1cIm9uRm9jdXMoJGV2ZW50KVwiIChibHVyKT1cIm9uQmx1cigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J3VpLXN0YXRlLWZvY3VzJzpmb2N1c2VkfVwiIChjaGFuZ2UpPVwiaGFuZGxlQ2hhbmdlKCRldmVudClcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbYXR0ci50YWJpbmRleF09XCJ0YWJpbmRleFwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWktY2hrYm94LWJveCB1aS13aWRnZXQgdWktY29ybmVyLWFsbCB1aS1zdGF0ZS1kZWZhdWx0XCIgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50LGNiLHRydWUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsndWktc3RhdGUtYWN0aXZlJzpjaGVja2VkLCd1aS1zdGF0ZS1kaXNhYmxlZCc6ZGlzYWJsZWQsJ3VpLXN0YXRlLWZvY3VzJzpmb2N1c2VkfVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidWktY2hrYm94LWljb24gdWktY2xpY2thYmxlXCIgW25nQ2xhc3NdPVwieydmYSBmYS1jaGVjayc6Y2hlY2tlZH1cIj48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInVpLWNoa2JveC1sYWJlbFwiIChjbGljayk9XCJvbkNsaWNrKCRldmVudCxjYix0cnVlKVwiIFxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsndWktbGFiZWwtYWN0aXZlJzpjaGVja2VkLCAndWktbGFiZWwtZGlzYWJsZWQnOmRpc2FibGVkLCAndWktbGFiZWwtZm9jdXMnOmZvY3VzZWR9XCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImxhYmVsXCIgW2F0dHIuZm9yXT1cImlucHV0SWRcIj57e2xhYmVsfX08L2xhYmVsPlxuICAgICIsIjxwLWNoZWNrYm94PjwvcC1jaGVja2JveD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDV1E7TUFBQTtJQUFBO0lBQUE7SUFBK0I7TUFBQTtNQUFBO0lBQUE7SUFBL0I7RUFBQSx1Q0FBQTtrREFBQTtNQUFBLGtDQUNRO01BQUEscUJBQ21DOztJQUZwQztJQUNDO0lBRFIsV0FBTyxVQUNDLFNBRFI7OztJQUVzQjtJQUZ0QixXQUVzQixTQUZ0QjtJQUUyQztJQUFBOzs7O29CQWJuRCwrQ0FDUTtNQUFBO01BQUEsbURBQUE7TUFBQTtVQUFBLHNEQUFBO01BQUE7TUFBQSxlQUE4RSxtREFDMUU7TUFBQTtNQUFBLHdFQUF5QzthQUFBLHdDQUNyQztNQUFBO1VBQUE7VUFBQTtRQUFBO1FBQUE7UUFBaUc7VUFBQTtVQUFBO1FBQUE7UUFBMEI7VUFBQTtVQUFBO1FBQUE7UUFDcEY7VUFBQTtVQUFBO1FBQUE7UUFEdkM7TUFBQSx1Q0FBQTtrREFBQTthQUNBLHVCQUF3SDtNQUN0SCxtREFDTjtVQUFBO1VBQUE7WUFBQTtZQUFBO1lBQW9FO2NBQUE7Y0FBQTtZQUFBO1lBQXBFO1VBQUEsdUNBQUE7VUFBQTtjQUFBLHNEQUNZO1VBQUEsMkNBQThGO1VBQUEseUJBQ3RHO1VBQUE7VUFBQSxtREFBQTtVQUFBO1VBQUEsZ0VBQTBDO01BQTJDLG1EQUNuRjtVQUFBLGlCQUNKLCtDQUNOO2lCQUFBO2FBQUE7VUFBQSx3QkFFNEQ7OztJQVpIO0lBQWxDO0lBQXZCLFdBQXlELFVBQWxDLFNBQXZCO0lBQUs7SUFBTCxXQUFLLFNBQUw7SUFHUTtJQURBLFdBQ0EsU0FEQTtJQUdDO0lBQ087SUFEWixZQUFLLFdBQ08sVUFEWjtJQUVVO0lBQW9DO0lBQTFDLFlBQU0sV0FBb0MsVUFBMUM7SUFLQTtJQUZSLFlBRVEsVUFGUjs7O0lBUm1DO0lBQW9CO0lBQWM7SUFBZ0I7SUFDTjtJQUFzQjtJQUQ3RixXQUEyQixVQUFvQixVQUFjLFVBQWdCLFVBQ04sVUFBc0IsU0FEN0Y7Ozs7b0JDSGhCO01BQUE7YUFBQTtRQUFBO01BQUEsd0JBQUE7VUFBQTs7Ozs7In0=