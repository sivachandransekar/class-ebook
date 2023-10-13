class Book{
    constructor(title,author,year){
        this.title=title;
        this.author=author;
        this.year=year;
    }
    details(){
       console.log(this.title,this.author,this.year)
    }
}
let book1=new Book("INDINA","gowri",1999);
 
class Ebook extends Book{
    constructor(title,author,year,price){
        super(title,author,year)
        this.price=price;
    }
    details(){
        console.log(this.title,this.author,this.year,this.price)
    }
}
let book2=new Book("Crime story","unnimukuthan",2023,300);
book2.details();

let book3=new Book("cycle death","siva",2000,800);
book3.details();
