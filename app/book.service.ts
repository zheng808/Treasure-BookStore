import { Injectable } from '@angular/core';
import { Http,Response  } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { BookModel }     from './book.model';


@Injectable()
export class BookService {
 
    private url = 'https://www.googleapis.com/books/v1/volumes'; 
    constructor(private http: Http) {  
    }
     
    getBooks(title:string = 'web development'){
      return this.http.get(this.url+'?q='+title);
    }
 
    getBook(Id: string){
       return this.http.get(this.url+ '/'+Id).toPromise();
    }
 
    private extractData(res: Response) {
      let body = res.json();
      return body.data || { };
    } 
}