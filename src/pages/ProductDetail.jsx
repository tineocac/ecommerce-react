import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {

    const { id } = useParams();
    const productList = useSelector(state => state.products)

    const productDetail = productList.find(product => product.id === Number(id))
    const infoProduct = productList.filter(product => product.category.id === productDetail.category.id)

    return (
        <Row>
            <Col>
                <h1>This is the product number: <b>{id}</b></h1>
                <h2>{productDetail?.title}</h2>
                <img src={productDetail?.productImgs[0]} alt="" />
                <p>{infoProduct[id]?.description}</p>
            </Col>
           
            <Col lg={3}>
                {
                    infoProduct.map(info =>
                        <li key={info.id}>
                            <Link to={`/product/${info.id}`}>{info.title}</Link>
                        </li>)
                }
            </Col>
        </Row>
    );
};

export default ProductDetail;