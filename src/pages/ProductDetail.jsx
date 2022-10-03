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
          <Col xs={10} md={4} lg={4} ml-1>
            {productDetail?.productImgs.map((img) => (
              <Row
                onClick={() => setChangeImg(img)}
                className="views"
                key={img}
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  width: "80px",
                  height: "90px",
                }}
              ></Row>
            ))}
          </Col>

          {/* ===== PRINCIPAL IMAGE PRODUCT ====== */}
          <Col className="principal-img">
            <Container
              className="main-img"
              style={{
                backgroundImage: `url(${changeImg})`,
                backgroundSize: "contain",
                width: "250px",
                height: "250px",
                backgroundRepeat: "no-repeat",
              }}
            ></Container>
          </Col>
        </Row>

        {/* ====== DESCRIPTION ====== */}
        {showDescription ? (
          <>
            <button
              className="show-info-details"
              onClick={() => setShowDescription(!showDescription)}
            >
              Description <i className="fa-solid fa-chevron-down"></i>
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
              <div className="products-related"
                style={{
                  width: "180px",
                  height: "100px",
                  backgroundImage: `url(${info.productImgs?.[0]})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}
              >
              </div>
              <Link onClick={() => setChangeImg(info.productImgs?.[0])} className="list-group-text" to={`/product/${info.id}`}>
                {info.title}
              </Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>

    </Row>
  );
};

export default ProductDetail;
