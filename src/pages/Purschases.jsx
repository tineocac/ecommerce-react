import React, { useEffect } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPurschasesThunk } from '../store/slices/purschases.slice';


const Purschases = () => {

    const dispacth = useDispatch();

    const purschases = useSelector(state => state.purschases)

    const navigate = useNavigate();

    useEffect(() => {
        dispacth(getPurschasesThunk())
    }, [])

    return (
        <div>
            <h1>This is my Purschases component</h1>
            <ListGroup>
                {
                    purschases.map(purschase =>
                        <div key={purschase.id}>
                            <ListGroup.Item >
                                {purschase.createdAt}
                            </ListGroup.Item>
                            <div>
                                {
                                   purschase.cart.products.map(
                                    product => 
                                    <p key={product.id} onClick={ () => navigate(`/product/${product.id}`)} style={{cursor: 'pointer', width: 'fit-content'}}>
                                        {product.title}
                                    </p>
                                   )
                                }
                            </div>
                        </div>
                    )
                }
            </ListGroup>
        </div>
    );
};

export default Purschases;