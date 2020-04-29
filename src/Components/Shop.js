import React,{useState, useRef} from 'react'
import { Button,Overlay,Popover } from 'react-bootstrap';
import cartimg from '../images/cart.png'
import { connect } from "react-redux";
import {Link} from "react-router-dom"

function Shop(props) {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
  
    const handleClick = (event) => {
      setShow(!show);
      setTarget(event.target);
    };
  
    return (
      <div ref={ref}>
        <Button  className="cart-nav" onClick={handleClick}> <img src={cartimg} alt=""/> Cart Shop </Button>
       
        <Overlay
          show={show}
          target={target}
          placement="bottom"
          container={ref.current}
          containerPadding={20}
        >
          <Popover id="popover-contained">
            <Popover.Title as="h3">Your cart</Popover.Title>
            {props.listcard.map((e) => (
            <Popover.Content>
                  <span style={{width:"100px",height:"100px"}}>{e.title} </span><img style={{width:"100px",height:"100px"}}
            src={e.imgSource}></img>
            </Popover.Content>
             ))}
              <Link to="/cart">  
                 <button className="btn btn-primary"> Continue</button>
             </Link>
          </Popover>
        </Overlay>
      </div>
    );
  
  
}
const mapStatetoProps = (state) => ({
    listcard: state.listCard,
  });
  export default connect(mapStatetoProps)(Shop);
