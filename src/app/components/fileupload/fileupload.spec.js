define(["require", "exports", "@angular/core/testing", "./fileupload", "@angular/platform-browser/animations"], function (require, exports, testing_1, fileupload_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('FileUpload', function () {
        var fileupload;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    fileupload_1.FileUpload
                ]
            });
            fixture = testing_1.TestBed.createComponent(fileupload_1.FileUpload);
            fileupload = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=fileupload.spec.js.map