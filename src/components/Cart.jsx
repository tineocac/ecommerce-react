import React, { useEffect } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCarThunk, getPurschasesThunk } from '../store/slices/cart.slice';

const Cart = ({ showCart, handleCloseCart }) => {

    const cart = useSelector(state => state.cart)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCarThunk())
    }, [])

    return (
        <Offcanvas show={showCart} onHide={handleCloseCart} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {
                    cart.map(product =>
                        <li key={product.id}>
                            <Link to={`/product/${product.productsInCart.productId}`}>{product.title}</Link>
                        </li>)
                }

            </Offcanvas.Body>
            <Button onClick={() => dispatch(getPurschasesThunk())}>Buy</Button>
        </Offcanvas>
    );
};

export default Cart;