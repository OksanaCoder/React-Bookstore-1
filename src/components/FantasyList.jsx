import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import data from '../jsons/fantasy.json';
import { FaCartPlus } from 'react-icons/fa';


class FantasyList extends Component {
  render() {

  const books = data;
    return (
<div className="container list-books">
   <div className="row">
       
       {books.map(book=> {
           return(
             
               <div className="col-sm-6 col-md-3 col-lg-2 ">
                   <Card>
                       <Card.Img src={book.img}/>
                    </Card>
                   <Card.Body>
                       <Card.Title className='title-size'>{book.title}</Card.Title>
                       <Card.Text>{Card.Category}</Card.Text>
                       <div className="footerCard">
                           <span>${book.price}</span>
                           <Button className='btn-add'><FaCartPlus /></Button>
                       </div>
                      
                   </Card.Body>
                  
                   </div>
           )
       })}
   </div>
   </div>
    )

  }
}
export default FantasyList;