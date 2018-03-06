define(["require", "exports", "@angular/core/testing", "@angular/platform-browser", "./dialog", "@angular/platform-browser/animations"], function (require, exports, testing_1, platform_browser_1, dialog_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Dialog', function () {
        var dialog;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    dialog_1.Dialog
                ]
            });
            fixture = testing_1.TestBed.createComponent(dialog_1.Dialog);
            dialog = fixture.componentInstance;
        });
        it('should display the header', function () {
            dialog.header = 'PrimeNG Dialog Header';
            fixture.detectChanges();
            var headerEl = fixture.debugElement.query(platform_browser_1.By.css('.ui-dialog-title'));
            expect(headerEl.nativeElement.textContent).toContain('PrimeNG Dialog Header');
        });
        it('should display close icon when closable', function () {
            fixture.detectChanges();
            var closeEl = fixture.debugElement.query(platform_browser_1.By.css('.ui-dialog-titlebar-close'));
            expect(closeEl).not.toBeNull();
        });
        it('should display resizer when resizable', function () {
            fixture.detectChanges();
            var resizeEl = fixture.debugElement.query(platform_browser_1.By.css('.ui-resizable-handle'));
            expect(resizeEl).not.toBeNull();
        });
        it('should be hidden by default', function () {
            fixture.detectChanges();
            expect(fixture.debugElement.children[0].styles.display).toEqual('none');
        });
        it('should add rtl class when rtl is enabled', function () {
            dialog.rtl = true;
            fixture.detectChanges();
            expect(fixture.debugElement.children[0].classes['ui-dialog-rtl']).toEqual(true);
        });
        it('should add draggable class when dragging is enabled', function () {
            fixture.detectChanges();
            expect(fixture.debugElement.children[0].classes['ui-dialog-draggable']).toEqual(true);
        });
        it('should show the dialog when visible is true', function () {
            spyOn(dialog, 'show');
            dialog.visible = true;
            fixture.detectChanges();
            expect(fixture.debugElement.children[0].styles.display).toEqual('block');
            expect(dialog.show).toHaveBeenCalled();
        });
        it('should call hide if visible is true and dialog gets hidden', function () {
            dialog.visible = true;
            fixture.detectChanges();
            spyOn(dialog, 'hide');
            dialog.visible = false;
            fixture.detectChanges();
            expect(fixture.debugElement.children[0].styles.display).toEqual('none');
            expect(dialog.hide).toHaveBeenCalled();
        });
        it('should update visible as false binding when close icon is clicked', function () {
            var show = true;
            dialog.visible = show;
            fixture.detectChanges();
            dialog.visibleChange.subscribe(function (value) { return show = value; });
            var closeEl = fixture.nativeElement.querySelector('.ui-dialog-titlebar-close');
            closeEl.click();
            expect(show).toEqual(false);
        });
    });
});
//# sourceMappingURL=dialog.spec.js.map