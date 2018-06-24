import { Component,OnInit, trigger,state,style,transition,animate } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from './book.service';
import { BookModel }     from './book.model';

@Component({
    selector:'books-details',
    templateUrl : '/app/view/book-details.component.html',
    providers: [BookService]
})
export class BookDetailsComponent implements OnInit{
    
    constructor(private route: ActivatedRoute, private bookservice: BookService){ 
    }

    book : any;
    id:any;
    
    //populate the page by the corresponding book id
    ngOnInit(){
         this.route.params.subscribe(params => {
            this.id = params['Id'];   
            let book = this.bookservice.getBook(this.id)
            .then(res => {  
                this.book= res.json() ; 
            });
      });
 
    }
}