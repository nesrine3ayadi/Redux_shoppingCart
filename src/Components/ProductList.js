import React from "react"
import  {connect}  from "react-redux"
import SingleProduct from "./SingleProduct"



function ProductList (props)
{
    const filtrdData = props.products.filter(product => product.title.toLowerCase().includes(props.search.toLowerCase()) )
   return (
       <div className="products-catagories-area clearfix row">
           <div className="amado-pro-catagory clearfix gallery">
           {filtrdData.map(product =>( <SingleProduct product={product}/>))}
           </div>
          
       </div>
   )
}
const mapStateToProps = state =>
({
     products:state.data,
     search:state.keyWord
})
export default connect(mapStateToProps)(ProductList)