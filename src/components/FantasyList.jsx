import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import data from '../jsons/fantasy.json';



class FantasyList extends Component {
  render() {

  const books = data;
    return (

   <div className="row list-books">
       {books.map(book=> {
           return(
            
               <div className="col-sm-6 col-md-3 col-lg-3">
                   <Card>
                       <Card.Img src={book.img} />
                       </Card>
                   <Card.Body>
                       <Card.Title>{book.title}</Card.Title>
                       <Card.Text>{Card.Category}</Card.Text>
                       <div className="footerCard">
                           <span>${book.price}</span>
                           <Button>Add to cart</Button>
                       </div>
                      
                   </Card.Body>
                  
                   </div>
           )
       })}
   </div>
    )

  }
}
export default FantasyList;