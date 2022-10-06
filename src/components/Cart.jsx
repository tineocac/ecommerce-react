import React, { useEffect } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getCarThunk, getPurschasesThunk } from '../store/slices/cart.slice';
import { setIsLoading } from '../store/slices/isLoading.slice';

const Cart = ({ showCart, handleCloseCart }) => {

    const cart = useSelector(state => state.cart)

    const {id} = useParams()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCarThunk())
        
    }, [id])



    return (
        <Offcanvas show={showCart} onHide={handleCloseCart} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {
                    cart.map(product =>
                        <li key={product.id}>
                            <Link onClick={() => {
                                dispatch(setIsLoading(true))
                                setTimeout(() => dispatch(setIsLoading(false)), 500)
                                handleCloseCart() 

                            }
                            } to={`/product/${product.productsInCart.productId}`}>{product.title}</Link>
                        </li>)
                }

            </Offcanvas.Body>
            <Button onClick={() => dispatch(getPurschasesThunk())}>Buy</Button>
        </Offcanvas>
    );
};

export default Cart;