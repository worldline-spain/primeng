define(["require", "exports", "@angular/core/testing", "./gmap", "@angular/platform-browser/animations"], function (require, exports, testing_1, gmap_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('GMap', function () {
        var gmap;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    gmap_1.GMap
                ]
            });
            fixture = testing_1.TestBed.createComponent(gmap_1.GMap);
            gmap = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=gmap.spec.js.map