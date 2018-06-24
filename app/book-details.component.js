"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var book_service_1 = require('./book.service');
var BookDetailsComponent = (function () {
    function BookDetailsComponent(route, bookservice) {
        this.route = route;
        this.bookservice = bookservice;
    }
    //populate the page by the corresponding book id
    BookDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['Id'];
            var book = _this.bookservice.getBook(_this.id)
                .then(function (res) {
                _this.book = res.json();
            });
        });
    };
    BookDetailsComponent = __decorate([
        core_1.Component({
            selector: 'books-details',
            templateUrl: '/app/view/book-details.component.html',
            providers: [book_service_1.BookService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, book_service_1.BookService])
    ], BookDetailsComponent);
    return BookDetailsComponent;
}());
exports.BookDetailsComponent = BookDetailsComponent;
//# sourceMappingURL=book-details.component.js.map