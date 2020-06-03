import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import data from '../jsons/fantasy.json';



class FantasyList extends Component {
  render() {

  const books = data;
    return (

   <div className="row">
       {books.map(book=> {
           return(
               <div className="col-3">
                   <Card>
                       <Card.Img src={book.img} />
                   </Card>
                   <Card.Body>
                       <Card.Title>{book.title}</Card.Title>
                       <Card.Text>{Card.Category}</Card.Text>
                       <div>
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