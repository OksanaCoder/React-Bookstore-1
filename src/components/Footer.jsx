import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { FaBeer, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
const Foot = () => {

    return (
        <Card.Footer className="d-flex justify-content-between align-items-center text-white foot">
            <div className="d-flex align-items-center">
            <img className="logo" src="https://cdn0.iconfinder.com/data/icons/education-148/595/SVG-EDUCATION-11-512.png" />
            <span>Wise up</span>
            </div>
     
         <div className="marg">
           <FaFacebook />
            <FaTwitter/>
            <FaInstagram/>   
         </div>
            
           
            <div className='right'>
     
                <p>Address:
               <br></br>
               1133 Broadway, New York, NY 10010
                </p>
            </div>
    
        </Card.Footer>
    )
}


export default Foot;