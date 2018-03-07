/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './carousel';
import * as i2 from '@angular/common';
import * as i3 from '../common/shared';
import * as i4 from '../dom/domhandler';
export const CarouselModuleNgFactory:i0.NgModuleFactory<i1.CarouselModule> = i0.ɵcmf(i1.CarouselModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,([] as any[])],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(4608,
          i2.NgLocalization,i2.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(512,i2.CommonModule,
          i2.CommonModule,([] as any[])),i0.ɵmpd(512,i3.SharedModule,i3.SharedModule,
          ([] as any[])),i0.ɵmpd(512,i1.CarouselModule,i1.CarouselModule,([] as any[]))]);
    });
const styles_Carousel:any[] = ([] as any[]);
export const RenderType_Carousel:i0.RendererType2 = i0.ɵcrt({encapsulation:2,styles:styles_Carousel,
    data:{}});
function View_Carousel_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'span',[['class',
      'ui-carousel-button ui-carousel-next-button fa fa-arrow-circle-right']],(null as any),
      [[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.onNextNav()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,[i0.IterableDiffers,
      i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,'klass'],ngClass:[1,
      'ngClass']},(null as any)),i0.ɵpod({'ui-state-disabled':0})],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = 'ui-carousel-button ui-carousel-next-button fa fa-arrow-circle-right';
    const currVal_1:any = _ck(_v,2,0,((_co.page === (_co.totalPages - 1)) && !_co.circular));
    _ck(_v,1,0,currVal_0,currVal_1);
  },(null as any));
}
function View_Carousel_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'span',[['class',
      'ui-carousel-button ui-carousel-prev-button fa fa-arrow-circle-left']],(null as any),
      [[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.onPrevNav()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,[i0.IterableDiffers,
      i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,'klass'],ngClass:[1,
      'ngClass']},(null as any)),i0.ɵpod({'ui-state-disabled':0})],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = 'ui-carousel-button ui-carousel-prev-button fa fa-arrow-circle-left';
    const currVal_1:any = _ck(_v,2,0,((_co.page === 0) && !_co.circular));
    _ck(_v,1,0,currVal_0,currVal_1);
  },(null as any));
}
function View_Carousel_4(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'a',[['class',
      'ui-carousel-page-link fa fa-circle-o'],['href','#']],(null as any),[[(null as any),
      'click']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>_co.setPageWithLink($event,_v.context.index)) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,[i0.IterableDiffers,
      i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,'klass'],ngClass:[1,
      'ngClass']},(null as any)),i0.ɵpod({'fa-dot-circle-o':0})],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = 'ui-carousel-page-link fa fa-circle-o';
    const currVal_1:any = _ck(_v,2,0,(_co.page === _v.context.index));
    _ck(_v,1,0,currVal_0,currVal_1);
  },(null as any));
}
function View_Carousel_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),4,'div',[['class',
      'ui-carousel-page-links']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['\n                    '])),(_l()(),
      i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_Carousel_4)),
      i0.ɵdid(802816,(null as any),0,i2.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,
          i0.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n                ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.anchorPageLinks;
    _ck(_v,3,0,currVal_0);
  },(null as any));
}
function View_Carousel_6(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'option',([] as any[]),
      [[8,'value',0],[8,'selected',0]],(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['','']))],(null as any),(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _v.context.$implicit;
    const currVal_1:any = (_co.value == _v.context.$implicit);
    _ck(_v,0,0,currVal_0,currVal_1);
    const currVal_2:any = (_v.context.$implicit + 1);
    _ck(_v,1,0,currVal_2);
  });
}
function View_Carousel_5(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),4,'select',[['class',
      'ui-carousel-dropdown ui-widget ui-state-default ui-corner-left']],[[8,'value',
      0]],[[(null as any),'change']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('change' === en)) {
      const pd_0:any = ((<any>_co.onDropdownChange($event.target.value)) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                    '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_Carousel_6)),
      i0.ɵdid(802816,(null as any),0,i2.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,
          i0.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n                ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_1:any = _co.selectDropdownOptions;
    _ck(_v,3,0,currVal_1);
  },(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.page;
    _ck(_v,0,0,currVal_0);
  });
}
function View_Carousel_8(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'option',([] as any[]),
      [[8,'value',0],[8,'selected',0]],(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['','']))],(null as any),(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _v.context.$implicit;
    const currVal_1:any = (_co.value == _v.context.$implicit);
    _ck(_v,0,0,currVal_0,currVal_1);
    const currVal_2:any = (_v.context.$implicit + 1);
    _ck(_v,1,0,currVal_2);
  });
}
function View_Carousel_7(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),4,'select',[['class',
      'ui-carousel-mobiledropdown ui-widget ui-state-default ui-corner-left']],[[8,
      'value',0],[4,'display',(null as any)]],[[(null as any),'change']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('change' === en)) {
      const pd_0:any = ((<any>_co.onDropdownChange($event.target.value)) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                    '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_Carousel_8)),
      i0.ɵdid(802816,(null as any),0,i2.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,
          i0.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n                ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_2:any = _co.mobileDropdownOptions;
    _ck(_v,3,0,currVal_2);
  },(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.page;
    const currVal_1:any = (_co.shrinked? 'block': 'none');
    _ck(_v,0,0,currVal_0,currVal_1);
  });
}
function View_Carousel_10(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),0,(null as any),
      (null as any),(null as any),(null as any),(null as any),(null as any),(null as any)))],
      (null as any),(null as any));
}
function View_Carousel_9(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),5,'li',[['class',
      'ui-carousel-item ui-widget-content ui-corner-all']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                        '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),2,(null as any),View_Carousel_10)),
      i0.ɵdid(540672,(null as any),0,i2.NgTemplateOutlet,[i0.ViewContainerRef],{ngTemplateOutletContext:[0,
          'ngTemplateOutletContext'],ngTemplateOutlet:[1,'ngTemplateOutlet']},(null as any)),
      i0.ɵpod({$implicit:0}),(_l()(),i0.ɵted((null as any),['\n                    ']))],
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = _ck(_v,4,0,_v.context.$implicit);
        const currVal_1:any = _co.itemTemplate;
        _ck(_v,3,0,currVal_0,currVal_1);
      },(null as any));
}
export function View_Carousel_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[i0.ɵqud(402653184,1,{containerViewChild:0}),i0.ɵqud(402653184,
      2,{viewportViewChild:0}),i0.ɵqud(402653184,3,{itemsViewChild:0}),(_l()(),i0.ɵted((null as any),
      ['\n        '])),(_l()(),i0.ɵeld(0,[[1,0],['container',1]],(null as any),34,
      'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),
      (null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,[i0.IterableDiffers,
      i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,'klass'],ngClass:[1,
      'ngClass']},(null as any)),i0.ɵpod({'ui-carousel ui-widget ui-widget-content ui-corner-all':0}),
      i0.ɵdid(278528,(null as any),0,i2.NgStyle,[i0.KeyValueDiffers,i0.ElementRef,
          i0.Renderer],{ngStyle:[0,'ngStyle']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n            '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),19,'div',
          [['class','ui-carousel-header ui-widget-header ui-corner-all']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n                '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,
          'span',[['class','ui-carousel-header-title']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['',''])),(_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),
          i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_Carousel_1)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n                '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_Carousel_2)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n                '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_Carousel_3)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n                '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_Carousel_5)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n                '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_Carousel_7)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,[[2,0],
          ['viewport',1]],(null as any),7,'div',[['class','ui-carousel-viewport']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),i0.ɵeld(0,[[3,
          0],['items',1]],(null as any),4,'ul',[['class','ui-carousel-items']],[[4,
          'left','px'],[4,'transitionProperty',(null as any)],[4,'transitionDuration',
          (null as any)],[4,'transitionTimingFunction',(null as any)]],(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n                    '])),(_l()(),i0.ɵand(16777216,(null as any),(null as any),
          1,(null as any),View_Carousel_9)),i0.ɵdid(802816,(null as any),0,i2.NgForOf,
          [i0.ViewContainerRef,i0.TemplateRef,i0.IterableDiffers],{ngForOf:[0,'ngForOf']},
          (null as any)),(_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),
          i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵted((null as any),
          ['\n        '])),(_l()(),i0.ɵted((null as any),['\n    ']))],(_ck,_v) => {
    var _co:i1.Carousel = _v.component;
    const currVal_0:any = _co.styleClass;
    const currVal_1:any = _ck(_v,6,0,true);
    _ck(_v,5,0,currVal_0,currVal_1);
    const currVal_2:any = _co.style;
    _ck(_v,7,0,currVal_2);
    const currVal_4:any = (_co.value && _co.value.length);
    _ck(_v,15,0,currVal_4);
    const currVal_5:any = (_co.value && _co.value.length);
    _ck(_v,18,0,currVal_5);
    const currVal_6:any = _co.displayPageLinks;
    _ck(_v,21,0,currVal_6);
    const currVal_7:any = _co.displayPageDropdown;
    _ck(_v,24,0,currVal_7);
    const currVal_8:any = ((_co.responsive && _co.value) && _co.value.length);
    _ck(_v,27,0,currVal_8);
    const currVal_13:any = _co.value;
    _ck(_v,35,0,currVal_13);
  },(_ck,_v) => {
    var _co:i1.Carousel = _v.component;
    const currVal_3:any = _co.headerText;
    _ck(_v,12,0,currVal_3);
    const currVal_9:any = _co.left;
    const currVal_10:any = 'left';
    const currVal_11:any = _co.effectDuration;
    const currVal_12:any = _co.easing;
    _ck(_v,32,0,currVal_9,currVal_10,currVal_11,currVal_12);
  });
}
export function View_Carousel_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'p-carousel',([] as any[]),
      (null as any),(null as any),(null as any),View_Carousel_0,RenderType_Carousel)),
      i0.ɵprd(512,(null as any),i4.DomHandler,i4.DomHandler,([] as any[])),i0.ɵdid(13811712,
          (null as any),1,i1.Carousel,[i0.ElementRef,i4.DomHandler,i0.Renderer2,i0.ChangeDetectorRef],
          (null as any),(null as any)),i0.ɵqud(603979776,1,{templates:1})],(null as any),
      (null as any));
}
export const CarouselNgFactory:i0.ComponentFactory<i1.Carousel> = i0.ɵccf('p-carousel',
    i1.Carousel,View_Carousel_Host_0,{numVisible:'numVisible',firstVisible:'firstVisible',
        headerText:'headerText',circular:'circular',breakpoint:'breakpoint',responsive:'responsive',
        autoplayInterval:'autoplayInterval',effectDuration:'effectDuration',easing:'easing',
        pageLinks:'pageLinks',style:'style',styleClass:'styleClass',value:'value'},
    {onPage:'onPage'},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovV29ya3NwYWNlL3ByaW1lbmcvc3JjL2FwcC9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1dvcmtzcGFjZS9wcmltZW5nL3NyYy9hcHAvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC50cyIsIm5nOi8vL0M6L1dvcmtzcGFjZS9wcmltZW5nL3NyYy9hcHAvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC50cy5DYXJvdXNlbC5odG1sIiwibmc6Ly8vQzovV29ya3NwYWNlL3ByaW1lbmcvc3JjL2FwcC9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLnRzLkNhcm91c2VsX0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiXG4gICAgICAgIDxkaXYgI2NvbnRhaW5lciBbbmdDbGFzc109XCJ7J3VpLWNhcm91c2VsIHVpLXdpZGdldCB1aS13aWRnZXQtY29udGVudCB1aS1jb3JuZXItYWxsJzp0cnVlfVwiIFtuZ1N0eWxlXT1cInN0eWxlXCIgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1jYXJvdXNlbC1oZWFkZXIgdWktd2lkZ2V0LWhlYWRlciB1aS1jb3JuZXItYWxsXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1aS1jYXJvdXNlbC1oZWFkZXItdGl0bGVcIj57e2hlYWRlclRleHR9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVpLWNhcm91c2VsLWJ1dHRvbiB1aS1jYXJvdXNlbC1uZXh0LWJ1dHRvbiBmYSBmYS1hcnJvdy1jaXJjbGUtcmlnaHRcIiAoY2xpY2spPVwib25OZXh0TmF2KClcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsndWktc3RhdGUtZGlzYWJsZWQnOihwYWdlID09PSAodG90YWxQYWdlcy0xKSkgJiYgIWNpcmN1bGFyfVwiICpuZ0lmPVwidmFsdWUmJnZhbHVlLmxlbmd0aFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVpLWNhcm91c2VsLWJ1dHRvbiB1aS1jYXJvdXNlbC1wcmV2LWJ1dHRvbiBmYSBmYS1hcnJvdy1jaXJjbGUtbGVmdFwiIChjbGljayk9XCJvblByZXZOYXYoKVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieyd1aS1zdGF0ZS1kaXNhYmxlZCc6KHBhZ2UgPT09IDAgJiYgIWNpcmN1bGFyKX1cIiAqbmdJZj1cInZhbHVlJiZ2YWx1ZS5sZW5ndGhcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImRpc3BsYXlQYWdlTGlua3NcIiBjbGFzcz1cInVpLWNhcm91c2VsLXBhZ2UtbGlua3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiAoY2xpY2spPVwic2V0UGFnZVdpdGhMaW5rKCRldmVudCxpKVwiIGNsYXNzPVwidWktY2Fyb3VzZWwtcGFnZS1saW5rIGZhIGZhLWNpcmNsZS1vXCIgKm5nRm9yPVwibGV0IGxpbmtzIG9mIGFuY2hvclBhZ2VMaW5rcztsZXQgaT1pbmRleFwiIFtuZ0NsYXNzXT1cInsnZmEtZG90LWNpcmNsZS1vJzpwYWdlPT09aX1cIj48L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCAqbmdJZj1cImRpc3BsYXlQYWdlRHJvcGRvd25cIiBjbGFzcz1cInVpLWNhcm91c2VsLWRyb3Bkb3duIHVpLXdpZGdldCB1aS1zdGF0ZS1kZWZhdWx0IHVpLWNvcm5lci1sZWZ0XCIgW3ZhbHVlXT1cInBhZ2VcIiAoY2hhbmdlKT1cIm9uRHJvcGRvd25DaGFuZ2UoJGV2ZW50LnRhcmdldC52YWx1ZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHNlbGVjdERyb3Bkb3duT3B0aW9uc1wiIFt2YWx1ZV09XCJvcHRpb25cIiBbc2VsZWN0ZWRdPVwidmFsdWUgPT0gb3B0aW9uXCI+e3tvcHRpb24rMX19PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCAqbmdJZj1cInJlc3BvbnNpdmUmJnZhbHVlJiZ2YWx1ZS5sZW5ndGhcIiBjbGFzcz1cInVpLWNhcm91c2VsLW1vYmlsZWRyb3Bkb3duIHVpLXdpZGdldCB1aS1zdGF0ZS1kZWZhdWx0IHVpLWNvcm5lci1sZWZ0XCIgW3ZhbHVlXT1cInBhZ2VcIiAoY2hhbmdlKT1cIm9uRHJvcGRvd25DaGFuZ2UoJGV2ZW50LnRhcmdldC52YWx1ZSlcIlxuICAgICAgICAgICAgICAgICAgICBbc3R5bGUuZGlzcGxheV09XCJzaHJpbmtlZCA/ICdibG9jaycgOiAnbm9uZSdcIj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG1vYmlsZURyb3Bkb3duT3B0aW9uc1wiIFt2YWx1ZV09XCJvcHRpb25cIiBbc2VsZWN0ZWRdPVwidmFsdWUgPT0gb3B0aW9uXCI+e3tvcHRpb24rMX19PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgI3ZpZXdwb3J0IGNsYXNzPVwidWktY2Fyb3VzZWwtdmlld3BvcnRcIj5cbiAgICAgICAgICAgICAgICA8dWwgI2l0ZW1zIGNsYXNzPVwidWktY2Fyb3VzZWwtaXRlbXNcIiBbc3R5bGUubGVmdC5weF09XCJsZWZ0XCIgW3N0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eV09XCInbGVmdCdcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uXT1cImVmZmVjdER1cmF0aW9uXCIgW3N0eWxlLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbl09XCJlYXNpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIHZhbHVlXCIgY2xhc3M9XCJ1aS1jYXJvdXNlbC1pdGVtIHVpLXdpZGdldC1jb250ZW50IHVpLWNvcm5lci1hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtVGVtcGxhdGU7IGNvbnRleHQ6IHskaW1wbGljaXQ6IGl0ZW19XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAiLCI8cC1jYXJvdXNlbD48L3AtY2Fyb3VzZWw+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNJZ0I7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFrRjtVQUFBO1VBQUE7UUFBQTtRQUFsRjtNQUFBLHVDQUFBO2tEQUFBO01BQUEsa0NBQ1E7O0lBREY7SUFDRTtJQURSLFdBQU0sVUFDRSxTQURSOzs7O29CQUVBO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBaUY7VUFBQTtVQUFBO1FBQUE7UUFBakY7TUFBQSx1Q0FBQTtrREFBQTtNQUFBLGtDQUNROztJQURGO0lBQ0U7SUFEUixXQUFNLFVBQ0UsU0FEUjs7OztvQkFHSTtNQUFBO01BQUE7SUFBQTtJQUFBO0lBQVk7TUFBQTtNQUFBO0lBQUE7SUFBWjtFQUFBLHVDQUFBO2tEQUFBO01BQUEsa0NBQStJOztJQUEvRjtJQUErRjtJQUEvSSxXQUFnRCxVQUErRixTQUEvSTs7OztvQkFESjtNQUFBO01BQUEsZ0JBQTZELDJEQUN6RDthQUFBO2FBQUE7NEJBQUEseUNBQTRMO1VBQUE7O0lBQS9GO0lBQTdGLFdBQTZGLFNBQTdGOzs7O29CQUdBO01BQUE7TUFBbUc7O0lBQTlDO0lBQWlCO0lBQXRFLFdBQXFELFVBQWlCLFNBQXRFO0lBQW1HO0lBQUE7Ozs7b0JBRHZHO01BQUE7TUFBQTtJQUFBO0lBQUE7SUFBMEg7TUFBQTtNQUFBO0lBQUE7SUFBMUg7RUFBQSxnQ0FBMks7TUFDdks7YUFBQTs0QkFBQSx5Q0FBd0g7VUFBQTs7SUFBaEg7SUFBUixXQUFRLFNBQVI7OztJQUR1RztJQUEzRyxXQUEyRyxTQUEzRzs7OztvQkFLSTtNQUFBO01BQW1HOztJQUE5QztJQUFpQjtJQUF0RSxXQUFxRCxVQUFpQixTQUF0RTtJQUFtRztJQUFBOzs7O29CQUZ2RztNQUFBO01BQUE7SUFBQTtJQUFBO0lBQTRJO01BQUE7TUFBQTtJQUFBO0lBQTVJO0VBQUEsZ0NBQ2tEO01BQzlDO2FBQUE7NEJBQUEseUNBQXdIO1VBQUE7O0lBQWhIO0lBQVIsV0FBUSxTQUFSOzs7SUFGeUg7SUFDekg7SUFESixXQUE2SCxVQUN6SCxTQURKOzs7O29CQVNRO01BQUE7Ozs7b0JBREo7TUFBQTtNQUFBLDRDQUF3RjtNQUNwRjthQUFBO1VBQUE7YUFBYyxnQkFBNEU7OztRQUE1RTtRQUFBO1FBQWQsV0FBYyxtQkFBZDs7Ozs7dUVBdkJ4QjtNQUFBLGlCQUNRO01BQUE7TUFBQSx1QkFBQTtrREFBQTtNQUFBLGtDQUFnQjthQUFoQjtxQkFBQSx5Q0FBa0k7VUFBQSxxQkFDOUg7VUFBQTtVQUFBLDBEQUErRDtVQUFBLHlCQUMzRDtVQUFBO1VBQUEsNENBQXVDO1VBQUEsVUFBcUIsdURBQzVEO2lCQUFBO2FBQUE7VUFBQSx3QkFDb0g7TUFDcEg7YUFBQTtVQUFBLHdCQUN1RztNQUN2RzthQUFBO1VBQUEsd0JBRU07TUFDTjthQUFBO1VBQUEsd0JBRVM7TUFDVDthQUFBO1VBQUEsd0JBR1M7TUFDUCxtREFDTjtVQUFBO1VBQUE7TUFBNEMsdURBQ3hDO1VBQUE7VUFBQTtVQUFBO1VBQUEsNENBQ2tHO1VBQUEsNkJBQzlGO1VBQUEseUNBQUE7VUFBQTtVQUFBLGVBRUssdURBQ0o7aUJBQUEsb0NBQ0g7VUFBQSxpQkFDSjs7SUExQnVHO0lBQTdGO0lBQWhCLFdBQTZHLFVBQTdGLFNBQWhCO0lBQTJGO0lBQTNGLFdBQTJGLFNBQTNGO0lBSXlGO0lBRGpGLFlBQ2lGLFNBRGpGO0lBR29FO0lBRHBFLFlBQ29FLFNBRHBFO0lBRUs7SUFBTCxZQUFLLFNBQUw7SUFHUTtJQUFSLFlBQVEsU0FBUjtJQUdRO0lBQVIsWUFBUSxTQUFSO0lBUVE7SUFBSixZQUFJLFVBQUo7OztJQW5CbUM7SUFBQTtJQWlCRjtJQUF1QjtJQUNoRDtJQUE0QztJQUR4RCxZQUFxQyxVQUF1QixXQUNoRCxXQUE0QyxVQUR4RDs7OztvQkNwQmhCO01BQUE7YUFBQSxxRUFBQTtVQUFBO1VBQUE7Ozs7Ozs7OyJ9