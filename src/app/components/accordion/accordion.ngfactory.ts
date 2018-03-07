/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './accordion';
import * as i2 from '@angular/common';
import * as i3 from '../common/shared';
export const AccordionModuleNgFactory:i0.NgModuleFactory<i1.AccordionModule> = i0.ɵcmf(i1.AccordionModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,([] as any[])],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(4608,
          i2.NgLocalization,i2.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(512,i2.CommonModule,
          i2.CommonModule,([] as any[])),i0.ɵmpd(512,i3.SharedModule,i3.SharedModule,
          ([] as any[])),i0.ɵmpd(512,i1.AccordionModule,i1.AccordionModule,([] as any[]))]);
    });
const styles_Accordion:any[] = ([] as any[]);
export const RenderType_Accordion:i0.RendererType2 = i0.ɵcrt({encapsulation:2,styles:styles_Accordion,
    data:{}});
export function View_Accordion_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),5,'div',[['role','presentation']],(null as any),
      (null as any),(null as any),(null as any),(null as any))),i0.ɵdid(278528,(null as any),
      0,i2.NgClass,[i0.IterableDiffers,i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],
      {klass:[0,'klass'],ngClass:[1,'ngClass']},(null as any)),i0.ɵdid(278528,(null as any),
      0,i2.NgStyle,[i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{ngStyle:[0,'ngStyle']},
      (null as any)),(_l()(),i0.ɵted((null as any),['\n            '])),i0.ɵncd((null as any),
      0),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵted((null as any),
      ['\n    ']))],(_ck,_v) => {
    var _co:i1.Accordion = _v.component;
    const currVal_0:any = _co.styleClass;
    const currVal_1:any = 'ui-accordion ui-widget ui-helper-reset';
    _ck(_v,2,0,currVal_0,currVal_1);
    const currVal_2:any = _co.style;
    _ck(_v,3,0,currVal_2);
  },(null as any));
}
export function View_Accordion_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'p-accordion',
      ([] as any[]),(null as any),(null as any),(null as any),View_Accordion_0,RenderType_Accordion)),
      i0.ɵdid(1228800,(null as any),1,i1.Accordion,[i0.ElementRef,i0.ChangeDetectorRef],
          (null as any),(null as any)),i0.ɵqud(603979776,1,{tabList:1})],(null as any),
      (null as any));
}
export const AccordionNgFactory:i0.ComponentFactory<i1.Accordion> = i0.ɵccf('p-accordion',
    i1.Accordion,View_Accordion_Host_0,{multiple:'multiple',style:'style',styleClass:'styleClass',
        expandIcon:'expandIcon',collapseIcon:'collapseIcon',lazy:'lazy',activeIndex:'activeIndex'},
    {onClose:'onClose',onOpen:'onOpen'},['*']);
const styles_AccordionTab:any[] = ([] as any[]);
export const RenderType_AccordionTab:i0.RendererType2 = i0.ɵcrt({encapsulation:2,styles:styles_AccordionTab,
    data:{'animation':[{type:7,name:'tabContent',definitions:[{type:0,name:'hidden',
        styles:{type:6,styles:{height:'0'},offset:(null as any)},options:(undefined as any)},
        {type:0,name:'visible',styles:{type:6,styles:{height:'*'},offset:(null as any)},
            options:(undefined as any)},{type:1,expr:'visible <=> hidden',animation:{type:4,
            styles:(null as any),timings:'400ms cubic-bezier(0.86, 0, 0.07, 1)'},options:(null as any)}],
        options:{}}]}});
function View_AccordionTab_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'span',[['class',
      'ui-accordion-header-text']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['\n                    ','\n                ']))],
      (null as any),(_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = _co.header;
        _ck(_v,1,0,currVal_0);
      });
}
function View_AccordionTab_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[i0.ɵncd((null as any),0),(_l()(),i0.ɵand(0,(null as any),(null as any),
      0))],(null as any),(null as any));
}
function View_AccordionTab_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'div',[['class',
      'ui-accordion-content ui-widget-content']],(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                '])),
      i0.ɵncd((null as any),1),(_l()(),i0.ɵted((null as any),['\n            ']))],
      (null as any),(null as any));
}
export function View_AccordionTab_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),15,'div',[['class','ui-accordion-header ui-state-default ui-corner-all']],
      (null as any),(null as any),(null as any),(null as any),(null as any))),i0.ɵdid(278528,
      (null as any),0,i2.NgClass,[i0.IterableDiffers,i0.KeyValueDiffers,i0.ElementRef,
          i0.Renderer],{klass:[0,'klass'],ngClass:[1,'ngClass']},(null as any)),i0.ɵpod({'ui-state-active':0,
      'ui-state-disabled':1}),(_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),
      i0.ɵeld(0,(null as any),(null as any),10,'a',[['href','#'],['role','tab']],[[1,
          'id',0],[1,'aria-controls',0],[1,'aria-expanded',0]],[[(null as any),'click'],
          [(null as any),'keydown.space']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:i1.AccordionTab = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.toggle($event)) !== false);
          ad = (pd_0 && ad);
        }
        if (('keydown.space' === en)) {
          const pd_1:any = ((<any>_co.toggle($event)) !== false);
          ad = (pd_1 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),1,'span',[['class','ui-accordion-toggle-icon']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      i0.ɵdid(278528,(null as any),0,i2.NgClass,[i0.IterableDiffers,i0.KeyValueDiffers,
          i0.ElementRef,i0.Renderer],{klass:[0,'klass'],ngClass:[1,'ngClass']},(null as any)),
      (_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),i0.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_AccordionTab_1)),i0.ɵdid(16384,
          (null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},
          (null as any)),(_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),
          i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_AccordionTab_2)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵted((null as any),
          ['\n        '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),6,'div',[['class',
          'ui-accordion-content-wrapper'],['role','region']],[[1,'id',0],[24,'@tabContent',
          0],[1,'aria-hidden',0],[1,'aria-labelledby',0]],[[(null as any),'@tabContent.done']],
          (_v,en,$event) => {
            var ad:boolean = true;
            var _co:i1.AccordionTab = _v.component;
            if (('@tabContent.done' === en)) {
              const pd_0:any = ((<any>_co.onToggleDone($event)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,
          [i0.IterableDiffers,i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,
              'klass'],ngClass:[1,'ngClass']},(null as any)),i0.ɵpod({'ui-accordion-content-wrapper-overflown':0}),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_AccordionTab_3)),i0.ɵdid(16384,
          (null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},
          (null as any)),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵted((null as any),
          ['\n    ']))],(_ck,_v) => {
    var _co:i1.AccordionTab = _v.component;
    const currVal_0:any = 'ui-accordion-header ui-state-default ui-corner-all';
    const currVal_1:any = _ck(_v,3,0,_co.selected,_co.disabled);
    _ck(_v,2,0,currVal_0,currVal_1);
    const currVal_5:any = 'ui-accordion-toggle-icon';
    const currVal_6:any = (_co.selected? _co.accordion.collapseIcon: _co.accordion.expandIcon);
    _ck(_v,8,0,currVal_5,currVal_6);
    const currVal_7:boolean = !_co.hasHeaderFacet;
    _ck(_v,11,0,currVal_7);
    const currVal_8:any = _co.hasHeaderFacet;
    _ck(_v,14,0,currVal_8);
    const currVal_13:any = 'ui-accordion-content-wrapper';
    const currVal_14:any = _ck(_v,20,0,(!_co.selected || _co.animating));
    _ck(_v,19,0,currVal_13,currVal_14);
    const currVal_15:any = (_co.lazy? _co.selected: true);
    _ck(_v,23,0,currVal_15);
  },(_ck,_v) => {
    var _co:i1.AccordionTab = _v.component;
    const currVal_2:any = _co.id;
    const currVal_3:any = (_co.id + '-content');
    const currVal_4:any = _co.selected;
    _ck(_v,5,0,currVal_2,currVal_3,currVal_4);
    const currVal_9:any = (_co.id + '-content');
    const currVal_10:any = (_co.selected? 'visible': 'hidden');
    const currVal_11:boolean = !_co.selected;
    const currVal_12:any = _co.id;
    _ck(_v,18,0,currVal_9,currVal_10,currVal_11,currVal_12);
  });
}
export function View_AccordionTab_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'p-accordionTab',
      ([] as any[]),(null as any),(null as any),(null as any),View_AccordionTab_0,
      RenderType_AccordionTab)),i0.ɵdid(180224,(null as any),1,i1.AccordionTab,[i1.Accordion],
      (null as any),(null as any)),i0.ɵqud(603979776,1,{headerFacet:1})],(null as any),
      (null as any));
}
export const AccordionTabNgFactory:i0.ComponentFactory<i1.AccordionTab> = i0.ɵccf('p-accordionTab',
    i1.AccordionTab,View_AccordionTab_Host_0,{header:'header',selected:'selected',
        disabled:'disabled'},{selectedChange:'selectedChange'},['p-header','*']);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovV29ya3NwYWNlL3ByaW1lbmcvc3JjL2FwcC9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24ubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovV29ya3NwYWNlL3ByaW1lbmcvc3JjL2FwcC9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24udHMiLCJuZzovLy9DOi9Xb3Jrc3BhY2UvcHJpbWVuZy9zcmMvYXBwL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi50cy5BY2NvcmRpb24uaHRtbCIsIm5nOi8vL0M6L1dvcmtzcGFjZS9wcmltZW5nL3NyYy9hcHAvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLnRzLkFjY29yZGlvbl9Ib3N0Lmh0bWwiLCJuZzovLy9DOi9Xb3Jrc3BhY2UvcHJpbWVuZy9zcmMvYXBwL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi50cy5BY2NvcmRpb25UYWIuaHRtbCIsIm5nOi8vL0M6L1dvcmtzcGFjZS9wcmltZW5nL3NyYy9hcHAvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLnRzLkFjY29yZGlvblRhYl9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cIid1aS1hY2NvcmRpb24gdWktd2lkZ2V0IHVpLWhlbHBlci1yZXNldCdcIiBbbmdTdHlsZV09XCJzdHlsZVwiIFtjbGFzc109XCJzdHlsZUNsYXNzXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICAiLCI8cC1hY2NvcmRpb24+PC9wLWFjY29yZGlvbj4iLCJcbiAgICAgICAgPGRpdiBjbGFzcz1cInVpLWFjY29yZGlvbi1oZWFkZXIgdWktc3RhdGUtZGVmYXVsdCB1aS1jb3JuZXItYWxsXCIgW25nQ2xhc3NdPVwieyd1aS1zdGF0ZS1hY3RpdmUnOiBzZWxlY3RlZCwndWktc3RhdGUtZGlzYWJsZWQnOmRpc2FibGVkfVwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBbYXR0ci5pZF09XCJpZFwiIFthdHRyLmFyaWEtY29udHJvbHNdPVwiaWQgKyAnLWNvbnRlbnQnXCIgcm9sZT1cInRhYlwiIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwic2VsZWN0ZWRcIiAoY2xpY2spPVwidG9nZ2xlKCRldmVudClcIiAoa2V5ZG93bi5zcGFjZSk9XCJ0b2dnbGUoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidWktYWNjb3JkaW9uLXRvZ2dsZS1pY29uXCIgW25nQ2xhc3NdPVwic2VsZWN0ZWQgPyBhY2NvcmRpb24uY29sbGFwc2VJY29uIDogYWNjb3JkaW9uLmV4cGFuZEljb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1aS1hY2NvcmRpb24taGVhZGVyLXRleHRcIiAqbmdJZj1cIiFoYXNIZWFkZXJGYWNldFwiPlxuICAgICAgICAgICAgICAgICAgICB7e2hlYWRlcn19XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInAtaGVhZGVyXCIgKm5nSWY9XCJoYXNIZWFkZXJGYWNldFwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgW2F0dHIuaWRdPVwiaWQgKyAnLWNvbnRlbnQnXCIgY2xhc3M9XCJ1aS1hY2NvcmRpb24tY29udGVudC13cmFwcGVyXCIgW0B0YWJDb250ZW50XT1cInNlbGVjdGVkID8gJ3Zpc2libGUnIDogJ2hpZGRlbidcIiAoQHRhYkNvbnRlbnQuZG9uZSk9XCJvblRvZ2dsZURvbmUoJGV2ZW50KVwiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7J3VpLWFjY29yZGlvbi1jb250ZW50LXdyYXBwZXItb3ZlcmZsb3duJzogIXNlbGVjdGVkfHxhbmltYXRpbmd9XCIgXG4gICAgICAgICAgICByb2xlPVwicmVnaW9uXCIgW2F0dHIuYXJpYS1oaWRkZW5dPVwiIXNlbGVjdGVkXCIgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cImlkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWktYWNjb3JkaW9uLWNvbnRlbnQgdWktd2lkZ2V0LWNvbnRlbnRcIiAqbmdJZj1cImxhenkgPyBzZWxlY3RlZCA6IHRydWVcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgIiwiPHAtYWNjb3JkaW9uVGFiPjwvcC1hY2NvcmRpb25UYWI+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ0FBLCtDQUNRO01BQUE7TUFBQSxpRUFBQTtNQUFBO01BQUEsZ0VBQUE7TUFBQTtNQUFBLGVBQXFILDBEQUNqSDtNQUFBLEdBQXlCLCtDQUN2QjtNQUFBOztJQUZzRTtJQUF2RTtJQUFMLFdBQTRFLFVBQXZFLFNBQUw7SUFBMEQ7SUFBMUQsV0FBMEQsU0FBMUQ7Ozs7b0JDRFI7TUFBQTthQUFBO1VBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDSWdCO01BQUE7TUFBQSxnQkFBK0Q7OztRQUFBO1FBQUE7Ozs7MkJBRy9EOzs7O29CQU1KO01BQUE7TUFBQSw4QkFBbUY7YUFDL0Usa0JBQXlCOzs7O29CQWR6QywrQ0FDUTtNQUFBO01BQUEsK0VBQUE7TUFBQTtxQkFBQSxrRUFBZ0U7TUFBQSx3QkFBdUUsbURBQ25JO2FBQUE7VUFBQTtVQUFBO1FBQUE7UUFBQTtRQUE2RztVQUFBO1VBQUE7UUFBQTtRQUF5QjtVQUFBO1VBQUE7UUFBQTtRQUF0STtNQUFBLGdDQUF1SztNQUNuSztVQUFBO2FBQUE7bUNBQUE7TUFBbUgsdURBQ25IO1VBQUEseUVBQUE7VUFBQTtVQUFBLGVBRU8sdURBQ1A7aUJBQUE7YUFBQTtVQUFBLHdCQUFrRTtNQUNsRSwrQ0FDRjtVQUFBLGlCQUNOO1VBQUE7VUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFzSDtjQUFBO2NBQUE7WUFBQTtZQUF0SDtVQUFBLHVDQUFBO1VBQUE7Y0FBQSxzREFDSTtNQUN5RSxtREFDekU7VUFBQSx5RUFBQTtVQUFBO1VBQUEsZUFFTSwrQ0FDSjtVQUFBOztJQWZEO0lBQTJEO0lBQWhFLFdBQUssVUFBMkQsU0FBaEU7SUFFYztJQUFpQztJQUF2QyxXQUFNLFVBQWlDLFNBQXZDO0lBQ3VDO0lBQXZDLFlBQXVDLFNBQXZDO0lBRzhCO0lBQTlCLFlBQThCLFNBQTlCO0lBR3lCO0lBQzdCO0lBREosWUFBaUMsV0FDN0IsVUFESjtJQUd3RDtJQUFwRCxZQUFvRCxVQUFwRDs7O0lBWFk7SUFBZTtJQUFrRDtJQUE3RSxXQUFZLFVBQWUsVUFBa0QsU0FBN0U7SUFRQztJQUFpRTtJQUVwRDtJQUErQjtJQUZqRCxZQUFLLFVBQWlFLFdBRXBELFdBQStCLFVBRmpEOzs7O29CQ1ZSO01BQUE7NkJBQUEsVUFBQTtNQUFBOzs7OzsifQ==