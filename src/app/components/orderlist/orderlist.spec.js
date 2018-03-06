define(["require", "exports", "@angular/core/testing", "./orderlist", "@angular/platform-browser/animations"], function (require, exports, testing_1, orderlist_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('OrderList', function () {
        var orderlist;
        var fixture;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    animations_1.NoopAnimationsModule
                ],
                declarations: [
                    orderlist_1.OrderList
                ]
            });
            fixture = testing_1.TestBed.createComponent(orderlist_1.OrderList);
            orderlist = fixture.componentInstance;
        });
    });
});
//# sourceMappingURL=orderlist.spec.js.map