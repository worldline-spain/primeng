/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './message';
import * as i2 from '@angular/common';
export const MessageModuleNgFactory:i0.NgModuleFactory<i1.MessageModule> = i0.ɵcmf(i1.MessageModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,([] as any[])],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(4608,
          i2.NgLocalization,i2.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(512,i2.CommonModule,
          i2.CommonModule,([] as any[])),i0.ɵmpd(512,i1.MessageModule,i1.MessageModule,
          ([] as any[]))]);
    });
const styles_UIMessage:any[] = ([] as any[]);
export const RenderType_UIMessage:i0.RendererType2 = i0.ɵcrt({encapsulation:2,styles:styles_UIMessage,
    data:{}});
function View_UIMessage_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),9,'div',[['aria-live',
      'polite'],['class','ui-message ui-widget ui-corner-all']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,
      [i0.IterableDiffers,i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,
          'klass'],ngClass:[1,'ngClass']},(null as any)),i0.ɵpod({'ui-messages-info':0,
      'ui-messages-warn':1,'ui-messages-error':2,'ui-messages-success':3}),(_l()(),
      i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
      1,'span',[['class','ui-message-icon']],(null as any),(null as any),(null as any),
      (null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,[i0.IterableDiffers,
      i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,'klass'],ngClass:[1,
      'ngClass']},(null as any)),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),1,'span',[['class','ui-message-text']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['',''])),(_l()(),i0.ɵted((null as any),['\n        ']))],
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = 'ui-message ui-widget ui-corner-all';
        const currVal_1:any = _ck(_v,2,0,(_co.severity === 'info'),(_co.severity === 'warn'),
            (_co.severity === 'error'),(_co.severity === 'success'));
        _ck(_v,1,0,currVal_0,currVal_1);
        const currVal_2:any = 'ui-message-icon';
        const currVal_3:any = _co.icon;
        _ck(_v,5,0,currVal_2,currVal_3);
      },(_ck,_v) => {
        var _co:any = _v.component;
        const currVal_4:any = _co.text;
        _ck(_v,8,0,currVal_4);
      });
}
export function View_UIMessage_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵand(16777216,
      (null as any),(null as any),1,(null as any),View_UIMessage_1)),i0.ɵdid(16384,
      (null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},
      (null as any)),(_l()(),i0.ɵted((null as any),['\n    ']))],(_ck,_v) => {
    var _co:i1.UIMessage = _v.component;
    const currVal_0:any = _co.severity;
    _ck(_v,2,0,currVal_0);
  },(null as any));
}
export function View_UIMessage_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'p-message',([] as any[]),
      (null as any),(null as any),(null as any),View_UIMessage_0,RenderType_UIMessage)),
      i0.ɵdid(49152,(null as any),0,i1.UIMessage,([] as any[]),(null as any),(null as any))],
      (null as any),(null as any));
}
export const UIMessageNgFactory:i0.ComponentFactory<i1.UIMessage> = i0.ɵccf('p-message',
    i1.UIMessage,View_UIMessage_Host_0,{severity:'severity',text:'text'},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovV29ya3NwYWNlL3ByaW1lbmcvc3JjL2FwcC9jb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Xb3Jrc3BhY2UvcHJpbWVuZy9zcmMvYXBwL2NvbXBvbmVudHMvbWVzc2FnZS9tZXNzYWdlLnRzIiwibmc6Ly8vQzovV29ya3NwYWNlL3ByaW1lbmcvc3JjL2FwcC9jb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS50cy5VSU1lc3NhZ2UuaHRtbCIsIm5nOi8vL0M6L1dvcmtzcGFjZS9wcmltZW5nL3NyYy9hcHAvY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UudHMuVUlNZXNzYWdlX0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiXG4gICAgICAgIDxkaXYgYXJpYS1saXZlPVwicG9saXRlXCIgY2xhc3M9XCJ1aS1tZXNzYWdlIHVpLXdpZGdldCB1aS1jb3JuZXItYWxsXCIgKm5nSWY9XCJzZXZlcml0eVwiXG4gICAgICAgIFtuZ0NsYXNzXT1cInsndWktbWVzc2FnZXMtaW5mbyc6IChzZXZlcml0eSA9PT0gJ2luZm8nKSxcbiAgICAgICAgICAgICAgICAndWktbWVzc2FnZXMtd2Fybic6IChzZXZlcml0eSA9PT0gJ3dhcm4nKSxcbiAgICAgICAgICAgICAgICAndWktbWVzc2FnZXMtZXJyb3InOiAoc2V2ZXJpdHkgPT09ICdlcnJvcicpLFxuICAgICAgICAgICAgICAgICd1aS1tZXNzYWdlcy1zdWNjZXNzJzogKHNldmVyaXR5ID09PSAnc3VjY2VzcycpfVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1aS1tZXNzYWdlLWljb25cIiBbbmdDbGFzc109XCJpY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1aS1tZXNzYWdlLXRleHRcIj57e3RleHR9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgIiwiPHAtbWVzc2FnZT48L3AtbWVzc2FnZT4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNDUTtNQUFBO01BQUEsbURBQUE7TUFBQTtVQUFBLHNEQUNBO01BQUEscUVBRzBEO2FBQUEsb0NBQ3REO01BQUE7TUFBQSxxQ0FBQTtrREFBQTtNQUFBLDJCQUFzRDtNQUN0RDtVQUFBO01BQThCLHdDQUFlOzs7UUFOekI7UUFDeEI7WUFBQTtRQURBLFdBQXdCLFVBQ3hCLFNBREE7UUFLVTtRQUF3QjtRQUE5QixXQUFNLFVBQXdCLFNBQTlCOzs7UUFDOEI7UUFBQTs7OztvQkFQMUMsK0NBQ1E7TUFBQSxzRUFBQTtNQUFBO01BQUEsZUFPTTs7SUFQNkQ7SUFBbkUsV0FBbUUsU0FBbkU7Ozs7b0JDRFI7TUFBQTthQUFBOzs7OyJ9
