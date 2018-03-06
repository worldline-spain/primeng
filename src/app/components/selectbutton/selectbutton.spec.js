define(["require", "exports", "@angular/core/testing", "@angular/platform-browser", "./selectbutton", "@angular/platform-browser/animations"], function (require, exports, testing_1, platform_browser_1, selectbutton_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('SelectButton', function () {
        var selectButton;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    selectbutton_1.SelectButton
                ]
            });
            fixture = testing_1.TestBed.createComponent(selectbutton_1.SelectButton);
            selectButton = fixture.componentInstance;
        });
        it('should display the label', function () {
            selectButton.options = [{ label: 'Apartment', value: 'Apartment' }, { label: 'House', value: 'House' }, { label: 'Studio', value: 'Studio' }];
            fixture.detectChanges();
            var labelEl = fixture.debugElement.query(platform_browser_1.By.css('.ui-selectbutton')).children[0];
            expect(labelEl.nativeElement.querySelector('.ui-button-text').textContent).toContain('Apartment');
        });
        it('should display the active when click', testing_1.fakeAsync(function () {
            selectButton.options = [{ label: 'Apartment', value: 'Apartment' }, { label: 'House', value: 'House' }, { label: 'Studio', value: 'Studio' }];
            fixture.detectChanges();
            var activeEl = fixture.nativeElement.querySelector('.ui-selectbutton').children[0];
            activeEl.click();
            fixture.detectChanges();
            var active = fixture.nativeElement.querySelector('.ui-state-active').children[0];
            expect(active.textContent).toContain('Apartment');
        }));
    });
});
//# sourceMappingURL=selectbutton.spec.js.map