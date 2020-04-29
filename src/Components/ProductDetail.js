import React from 'react'
import {connect} from "react-redux"
import Sidebar from './Sidebar'
import Footer from './Footer'

function ProductDetail(props) {
    const productDescription = props.description.filter(product => (product.id === parseInt(props.match.params.id)))   

    return (
        
        <div>
           
            <div class="single-product-area section-padding-100 clearfix">
            <div class="container-fluid">


                <div class="row">
                <div className="col-lg-3 col-12"> <Sidebar /></div>
                    <div class="col-12 col-lg-5">
                        <div class="single_product_thumb">
                            <div id="product_details_slider" class="carousel slide" data-ride="carousel">
                                <img src='' />
                           
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class="single_product_desc">
                            {/* <!-- Product Meta Data --> */}
                            <div class="product-meta-data">
                                <div class="line"></div>
                                <p class="product-price">$</p>
                                <a href="product-details.html">
                                    <h6> </h6>
                                </a>
                                {/* <!-- Ratings & Review --> */}
                                <div class="ratings-review mb-15 d-flex align-items-center justify-content-between">
                                    <div class="ratings">
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    
                                </div>
                                {/* <!-- Avaiable --> */}
                                <p class="avaibility"><i class="fa fa-circle"></i> In Stock</p>
                            </div>

                            <div class="short_overview my-5">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?</p>
                            </div>

                            {/* <!-- Add to Cart Form --> */}
                            <form class="cart clearfix" method="post">
                                <div class="cart-btn d-flex mb-50">
                                    <p>Qty</p>
                                    <div class="quantity">
                                        <span class="qty-minus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty > 1 ) effect.value--;return false;"><i class="fa fa-caret-down" aria-hidden="true"></i></span>
                                        <input type="number" class="qty-text" id="qty" step="1" min="1" max="300" name="quantity" value="1"/>
                                        <span class="qty-plus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i class="fa fa-caret-up" aria-hidden="true"></i></span>
                                    </div>
                                </div>
                                <button type="submit" name="addtocart" value="5" class="amado-btn">Add to cart</button>
                            </form>

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
        description : state.data
    }
)

export default connect(mapStateToProps) (ProductDetail)
