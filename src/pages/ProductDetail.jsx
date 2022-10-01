import React from 'react';
import { useState } from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import productdetail from '../assets/css/productdetail.css'

const ProductDetail = () => {
    const [showDescription, setShowDescription]= useState(false);

    const { id } = useParams();
    const productList = useSelector(state => state.products)

    const productDetail = productList.find(product => product.id === Number(id))
    const infoProduct = productList.filter(product => product.category.id === productDetail.category.id)
    
   return (
        <Row className='general-container'>
            <Col className='first-col'>
                {/* <h1>This is the product number: <b>{id}</b></h1> */}
                <h1>{productDetail?.title}</h1>

                <div className='principal-img-container'>
               
                    <Col  className='img-options-list sm'>
                        {productDetail?.productImgs.map( (img) =>(
                            <Row className='img-options-container' key={img}>
                                <img className='img-options' src={img}/>
                            </Row>
                            ))
                        }
                    </Col>
                <img className='principal-img' src={productDetail?.productImgs[0]} alt="" />
                </div>
                {
                    showDescription ? 
                    <>
                    <button className='show-info-details' onClick={()=>setShowDescription(!showDescription)}>Description <i className="fa-solid fa-chevron-down"></i></button>
                    <p className='description'>{infoProduct[id]?.description}</p> 
                    </> : <button className='show-info-details' onClick={()=>setShowDescription(!showDescription)}>Description <i className="fa-solid fa-chevron-down"></i></button>
                
                }
            </Col>

            <Col lg={2} >
                <ListGroup className="(mt-1)">
                    {
                        infoProduct.map(info =>
                            <ListGroup.Item  action key={info.id}>
                                <Link to={`/product/${info.id}`}>
                                    <img className='img-fluid' src={info.productImgs?.[0]} alt="product-img" />
                                    {info.title}</Link>
                            </ListGroup.Item>
                        )
                    }
                </ListGroup>

            </Col>
        </Row>
    );
};

export default ProductDetail;