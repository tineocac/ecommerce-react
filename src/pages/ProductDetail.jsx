import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Carousel, Col, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

import productdetail from "../assets/css/productdetail.css";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const [showDescription, setShowDescription] = useState(false);

  const { id } = useParams();
  const productList = useSelector((state) => state.products);
  const isLoading = useSelector((state) => state.isLoading);
  const productDetail = productList.find(
    (product) => product.id === Number(id)
  );
  const infoProduct = productList.filter(
    (product) => product.category.id === productDetail.category.id
  );
  // console.log(productList);
  // console.log(productDetail);
  console.log(infoProduct);

  return (
    <Row>
      {/* ===== PRODUCT DETAIL ====== */}
      <Col >
        <h1 className="product-name">{productDetail?.title}</h1>

        {/* ===== OTHER IMAGES PRODUCT DETAIL (small images) ===== */}
        <Carousel className="carousel-container">
          {productDetail?.productImgs.map((img) => (
            <Carousel.Item className="carousel-item" key={img}>
              <img className="d-block w-100" src={img} alt="First slide" />
            </Carousel.Item>
          ))}
        </Carousel>

        {/* ====== DESCRIPTION ====== 
          */}
        {showDescription ? (
          <>
            <button
              className="show-info-details"
              onClick={() => setShowDescription(!showDescription)}
            >
              {" "}
              Description
              <i className="fa-solid fa-chevron-up"></i>
            </button>
            <div className="description-container">
              <p>{infoProduct[0]?.description}</p>
              <span>
                {" "}
                {productDetail.status === "active" ? (
                  <strong>Stock: Available</strong>
                ) : (
                  <strong>Stock: 0</strong>
                )}
              </span>
            </div>
          </>
        ) : (
          <button
            className="show-info-details"
            onClick={() => setShowDescription(!showDescription)}
          >
            Description <i className="fa-solid fa-chevron-down"></i>
          </button>
        )}
      </Col>
      {/* ====== PRODUCTS RELATED ======
      Col, Container, ListGroup,*/
      }
      <Col lg={2}>
        <p>Products related </p>
        <ListGroup>
          {
            infoProduct.map((info) => (
              <ListGroup.Item key={info.id}
                onClick={() => setChangeImg(info.productImgs?.[0])}
                to={`/product/${info.id}`} >

                <div style={{ backgroundImage: `url(${info.productImgs?.[0]})` }}>
                </div>

                <p className="products-related-name">{info.title}</p>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default ProductDetail;
