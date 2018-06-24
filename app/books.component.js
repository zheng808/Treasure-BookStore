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
var BooksComponent = (function () {
    function BooksComponent(bookService) {
        this.bookService = bookService;
    }
    //populate the list from service
    BooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookService.getBooks().toPromise().then(function (res) {
            _this.books = res.json().items;
        }).catch(function (x) {
            console.log("api failed");
        });
    };
    //delete the corresponding book
    BooksComponent.prototype.deleteBook = function (event) {
        //getting id from the delete button
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var value = idAttr.nodeValue;
        //remove the corresponding book
        $("#" + value).remove();
    };
    //search the book name
    BooksComponent.prototype.searchBook = function () {
        var _this = this;
        //call the getBooks from service
        this.bookService.getBooks(this.searchTerm).toPromise().then(function (res) {
            _this.books = res.json().items;
        }).catch(function (x) {
            console.log("api failed");
        });
    };
    //add the searched books from dropdown
    BooksComponent.prototype.addBook = function () {
        var _this = this;
        this.bookService.getBooks(this.addTerm).toPromise().then(function (res) {
            _this.addedBooks = res.json().items;
            console.log(_this.addedBooks);
            //display the search dropdown list
            $("#searchdropdown").show();
            $("#addInputfield").hide();
        }).catch(function (x) {
            console.log("api failed");
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BooksComponent.prototype, "searchTerm", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BooksComponent.prototype, "addTerm", void 0);
    BooksComponent = __decorate([
        core_1.Component({
            selector: 'books',
            templateUrl: '/app/view/booklist.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [book_service_1.BookService]
        }), 
        __metadata('design:paramtypes', [book_service_1.BookService])
    ], BooksComponent);
    return BooksComponent;
}());
exports.BooksComponent = BooksComponent;
//# sourceMappingURL=books.component.js.map