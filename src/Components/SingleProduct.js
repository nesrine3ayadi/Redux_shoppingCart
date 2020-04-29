import React from "react";

import {Link} from "react-router-dom"
import {addToCard} from '../Action/action'
import { connect } from "react-redux";


function SingleProduct(props) {
  return (
    
    <div className="single-products-catagory clearfix ">

    <a>
        <img src={props.product.imgSource} alt=""/>
        {/* <!-- Hover Content --> */}
        <div className="hover-content">
            <div className="line"></div>
            <p>From $180</p>
           <Link to={`description/${props.product.id}`}>
           <h4>{props.product.title}</h4>
             </Link> 
            <button href="#" class="btn amado-btn mb-15" onClick={()=>props.addToCard({title:props.product.title,imgSource:props.product.imgSource,price:props.product.price})}>Add to card</button>
        </div>
    </a>
   
</div>
  );
}
export default connect(null, {addToCard}) (SingleProduct);
