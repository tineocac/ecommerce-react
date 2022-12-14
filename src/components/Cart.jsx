import React, { useEffect } from "react";
import { Button, Offcanvas, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCarThunk, getPurschasesThunk } from "../store/slices/cart.slice";
import { setIsLoading } from "../store/slices/isLoading.slice";

const Cart = ({ showCart, handleCloseCart}) => {
  const cart = useSelector((state) => state.cart);
 
  const products = useSelector((state) => state.products);

  

  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarThunk());
  }, [id]);

  return (
    <Offcanvas show={showCart} onHide={handleCloseCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body style={{margin:"0 auto", }}>
        {cart.map((product) => (
          
            <Card key={product.id} style={{ width: "18rem", margin:"1rem auto"}}>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  ${product.price}
                </Card.Subtitle>

                <Card.Link
                style={{ cursor: "pointer"}}
                  onClick={() => {
                    dispatch(setIsLoading(true));
                    setTimeout(() => dispatch(setIsLoading(false)), 500);
                    handleCloseCart();
                  }}
                  to={`/product/${product.productsInCart.productId}`}
                >
                  Details
                </Card.Link>
                <div className="otrodiv">
                  
          <div className="purschase-img" style={{ backgroundImage: `url(u)` }}></div>
        </div>
              </Card.Body>
            </Card>
        
        ))}
      </Offcanvas.Body>
      <Button onClick={() => dispatch(getPurschasesThunk())}>Buy</Button>
    </Offcanvas>
  );
};

export default Cart;
