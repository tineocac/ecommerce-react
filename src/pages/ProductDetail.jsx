import React from "react";
import { useState } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import productdetail from "../assets/css/productdetail.css";

const ProductDetail = () => {
  const [showDescription, setShowDescription] = useState(false);

  const { id } = useParams();
  const productList = useSelector((state) => state.products);

  const productDetail = productList.find(
    (product) => product.id === Number(id)
  );
  const infoProduct = productList.filter(
    (product) => product.category.id === productDetail.category.id
  );
  console.log(productList);

  const [changeImg, setChangeImg] = useState(productDetail?.productImgs[0]);
  console.log(changeImg);
  console.log(productDetail);

  return (
    <Row>

      {/* ===== PRODUCT DETAIL ====== */}
      <Col className="details">
        <h1 className="product-name">{productDetail?.title}</h1>

        <Row>
          {/* ===== OTHER IMAGES PRODUCT DETAIL (small images) ===== */}
          <Col xs={12} md={4} lg={2} ml-1>
            {productDetail?.productImgs.map((img) => (
              <Row
                className="views"
                onClick={() => setChangeImg(img)}
                key={img}>
                <img className="img-views" src={img}/>
              </Row>
            ))}
          </Col>

          {/* ===== PRINCIPAL IMAGE PRODUCT ====== */}
          <Col >
            <Container className="principal-img">
              <img style={{objetfit:"contain"}} src={changeImg}/>
            </Container>
          </Col>
        </Row>

        {/* ====== DESCRIPTION ====== */}
        {showDescription ? (
          <>
            <button
              className="show-info-details"
              onClick={() => setShowDescription(!showDescription)}
            >
              Description <i className="fa-solid fa-chevron-up"></i>
            </button>
            <p>{infoProduct[0]?.description}</p>
            <span>
              {" "}
              {productDetail.status === "active" ? (
                <strong>Stock: Available</strong>
              ) : (
                <strong>Stock: 0</strong>
              )}
            </span>
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

      {/* ====== PRODUCTS RELATED ======*/}
      <Col className="products-related-container" lg={2}>
        <ListGroup>
          <p className="products-related-title">Products related </p>
          {infoProduct.map((info) => (
            <ListGroup.Item action key={info.id}>
              
              <Link style={{textDecoration:"none"}} onClick={() => setChangeImg(info.productImgs?.[0])}  to={`/product/${info.id}`}>
              <div className="products-related">
                <img className="imgs-related" src={info.productImgs?.[0]}/>
              </div>
                <p className="products-related-name">
                {info.title}
                  </p>
              </Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>

    </Row>
  );
};

export default ProductDetail;
