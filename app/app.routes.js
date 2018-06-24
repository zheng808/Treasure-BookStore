"use strict";
var router_1 = require('@angular/router');
var books_component_1 = require('./books.component');
var book_details_component_1 = require('./book-details.component');
var routes = [
    { path: '#', redirectTo: '/books', pathMatch: 'full' },
    { path: '', redirectTo: '/books', pathMatch: 'full' },
    { path: 'books', component: books_component_1.BooksComponent },
    { path: 'book-details/:Id', component: book_details_component_1.BookDetailsComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map