import { Component,OnInit, Input } from '@angular/core'; 
import { ROUTER_DIRECTIVES } from '@angular/router';

import { BookService } from './book.service';
declare var jQuery:any;
declare var $:any;


@Component({
    selector:'books',
    templateUrl : '/app/view/booklist.html' ,
    
    directives: [ROUTER_DIRECTIVES] ,
    providers: [BookService]    
})



export class BooksComponent implements OnInit {
  
    books: any[] ;
    addedBooks: any[];
    
    @Input() searchTerm;
    @Input() addTerm;
    

    constructor(private bookService: BookService) {}

    //populate the list from service
    ngOnInit(){
        this.bookService.getBooks().toPromise().then(res=>{
            this.books= res.json().items; 
            console.log(this.books);
        }).catch(x=>{ 
            console.log("api failed"); 
        });
    }
    
        
    //add the searched books from dropdown
    addBook(){
        this.bookService.getBooks(this.addTerm).toPromise().then(res=>{
                this.addedBooks=res.json().items; 
                console.log(this.addedBooks);
            //display the search dropdown list
            $("#searchdropdown").show();
            $("#addInputfield").hide();
         
            }).catch(x=>{ 
                console.log("api failed"); 
            });
    }
    
    //delete the corresponding book
    deleteBook(event){
        //getting id from the delete button
         var target = event.target || event.srcElement || event.currentTarget;
         var idAttr = target.attributes.id;
         var value = idAttr.nodeValue;
        //remove the corresponding book
         $("#" + value).remove();
    }
    
    
    //search the book name
    searchBook(){
        //call the getBooks from service
        this.bookService.getBooks(this.searchTerm).toPromise().then(res=>{
                this.books=res.json().items; 
            }).catch(x=>{ 
                console.log("api failed"); 
            });
    }
    
    //incremeting the like count for each book
    incrementLike(event){
         var target = event.target || event.srcElement || event.currentTarget;
         var idAttr = target.attributes.id;
         var value = idAttr.nodeValue;
         var count = parseInt($("#" + value + " #countnumber").html());
         console.log(count);
         $("#" + value + " #countnumber").html(count+1);
    }

}

