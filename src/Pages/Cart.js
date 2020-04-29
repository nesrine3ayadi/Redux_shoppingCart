import React from 'react'
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import  {connect} from "react-redux"
import {removeItem} from '../Action/action'

function Cart(props) {
    return (
        <div style={{width: "100%"}}>
           
            <div className="section-padding-100">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-12">
                        <Sidebar/>
                    </div>
               
                    <div className="col-12 col-lg-6">
                        <div className="cart-title mt-50">
                            <h2>Shopping Cart</h2>
                        </div>

                        <div className="cart-table clearfix">
                            <table className="table table-responsive" tabindex="1" >
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {props.list.map((e)=>(
                                    <tr>
                                        <td className="cart_product_img">
                                            <a href="#"><img src={e.imgSource} alt="Product"/></a>
                                        </td>
                                        <td className="cart_product_desc">
                                            <h5>{e.title}</h5>
                                        </td>
                                        <td className="price">
                                            <span>${e.price}</span>
                                        </td>
                                        <td className="qty">
                                            <div className="qty-btn d-flex">
                                                <p>Qty</p>
                                                <div className="quantity">
                                                    <span className="qty-minus" ><i className="fa fa-minus" aria-hidden="true"></i></span>
                                                    <input type="number" className="qty-text" id="qty" step="1" min="1" max="300" name="quantity" value="1"/>
                                                    <span className="qty-plus" ><i className="fa fa-plus" aria-hidden="true"></i></span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                        <button  onClick={() => props.removeItem(e.id)}>X</button>
                                        </td>
                                    </tr>)
                                    )
                                    }
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="cart-summary">
                            <h5>Cart Total</h5>
                            <ul className="summary-table">
                                
                                <li><span>subtotal:</span> <span>$140.00</span></li>
                                <li><span>delivery:</span> <span>Free</span></li>
                                <li><span>total:</span> <span>$140.00</span></li>
                            </ul>
                            <div className="cart-btn mt-100">
                                <a href="cart.html" className=" amado-btn w-100">Checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    )
}
const mapStateToProps = state =>
(
    {
        list : state.listCard
    }
)
export default connect(mapStateToProps, {removeItem})(Cart)
