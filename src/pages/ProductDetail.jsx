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
  return (
    <Row  >
      <Col className="details" >
        {/* <h1>This is the product number: <b>{id}</b></h1> */}
       
        <h1>{productDetail?.title}</h1>

        <Row >

          <Col className="related-items" lg={3} ml-1 >
            
            {productDetail?.productImgs.map((img) => (
              <Row className="views"
               key={img}
                style={{ backgroundImage:`url(${img})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', width: "80px", height:"90px"}}>
              </Row>
            ))}
          </Col>
          <Col className="principal-img"  >
          <Container 
          style={{backgroundImage:`url(${productDetail?.productImgs[0]})`, backgroundSize:"contain", width:"100px", height:"250px", backgroundRepeat:"no-repeat" }}>
          </Container>
          </Col>
        </Row>

        {/* Description */}
        {showDescription ? (
          <>
            <button
             className="show-info-details"
              onClick={() => setShowDescription(!showDescription)}
            >
              Description <i className="fa-solid fa-chevron-down"></i>
            </button>
            <p>{infoProduct[0]?.description}</p>
            <span> {productDetail.status === "active" ?  <strong>Stock: Available</strong>  : <strong>Stock: 0</strong>}
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

{/* related */}
      <Col className="products-related-container" lg={2}>
        <ListGroup >
            <p className="products-related-title">Products related </p>
          {infoProduct.map((info) => (
            <ListGroup.Item action key={info.id}>
              <Link
              className="list-group-text" to={`/product/${info.id}`}>
                <img
               style={{width:"60px", height:"150px"}}
                  className="img-fluid"
                  src={info.productImgs?.[0]}
                  alt="product-img"
                />
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
