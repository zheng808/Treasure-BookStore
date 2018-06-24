var books = [];

function getBookListJson(){
    
     $.ajax({
        url:"https://www.googleapis.com/books/v1/volumes?q=" + "Harry Potter" ,
        dataType:"json",
        success: function(data){
            for(var i =0; i<data.items.length; i++){
              //add the response to a book object
              books.push(new book(data.items[i].volumeInfo.title, data.items[i].volumeInfo.authors, 
                                  data.items[i].volumeInfo.imageLinks.smallThumbnail));
            }
            //populatelist();
            return this.books;
        },
        error: function(e) {
            console.log('API calls failed');
        },
        type: 'GET'
    });
    
}


//populate the html for booklist 
function populatelist(){
    for(var i=0; i<books.length; i++){
        console.log(books[i].title);
        var appenditem = ('<li class="list-group-item">' + books[i].title + '</li>');
         $("#booklist .title-section").append(appenditem);
    }
   
}

//create a book object to the store all necessary data
function book(title, author, thumbail){
    this.title = title;
    this.author = author;
    this.thumbail = thumbail;
}

