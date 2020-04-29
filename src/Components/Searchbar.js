import React, {useState} from "react";
import searchimg from '../images/search.png'
import {searchProductByName} from "../Action/action"
import { connect } from "react-redux";
import {  Modal } from 'react-bootstrap';

function Searchbar(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    //  Search Wrapper Area Start 
    <div className="search-nav test">

    
    
    <a  onClick={ handleShow}><img src={searchimg} alt="" /> Search</a>

    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Search a product</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    
        <div className="search-close">
            <i className="fa fa-close" aria-hidden="true"></i>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="search-content">
                        <form action="#" method="get">
                            <input type="search" name="search" id="search" placeholder="Search.."  onChange={(event)=>props.searchProductByName(event.target.value)&&handleClose()}/>
                            <button type="submit"><img src={searchimg} alt=""/></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    
       </Modal.Body>
    <Modal.Footer>
     
    </Modal.Footer>
  </Modal>
  </div>
  );
}

export default connect(null,{searchProductByName})(Searchbar) 