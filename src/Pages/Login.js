import React from 'react'
import Sidebar from '../Components/Sidebar';

function Login() {
    return (
        <div>
           
           
            <div className="cart-table-area section-padding-100">
            <div className="container-fluid">
                <div className="row">
                <Sidebar />
                    <div className="col-12 col-lg-8">
                        <div className="checkout_details_area mt-50 clearfix">

                            <div className="cart-title">
                                <h2>Checkout</h2>
                            </div>

                            <form action="#" method="post">
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <input type="text" className="form-control" id="first_name" value="" placeholder="First Name" required=""/>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <input type="text" className="form-control" id="last_name" value="" placeholder="Last Name" required=""/>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <input type="text" className="form-control" id="company" placeholder="Company Name" value=""/>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <input type="email" className="form-control" id="email" placeholder="Email" value=""/>
                                    </div>
                                 
                                    <div className="col-12 mb-3">
                                        <input type="text" className="form-control mb-3" id="street_address" placeholder="Address" value=""/>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <input type="text" className="form-control" id="city" placeholder="Town" value=""/>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <input type="text" className="form-control" id="zipCode" placeholder="Zip Code" value=""/>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <input type="number" className="form-control" id="phone_number" min="0" placeholder="Phone No" value=""/>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <textarea name="comment" className="form-control w-100" id="comment" cols="30" rows="10" placeholder="Leave a comment about your order"></textarea>
                                    </div>

                                    <div className="col-12">
                                        <div className="custom-control custom-checkbox d-block mb-2">
                                            <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                                            <label className="custom-control-label" for="customCheck2">Create an accout</label>
                                        </div>
                                        <div className="custom-control custom-checkbox d-block">
                                            <input type="checkbox" className="custom-control-input" id="customCheck3"/>
                                            <label className="custom-control-label" for="customCheck3">Ship to a different address</label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
        
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login
