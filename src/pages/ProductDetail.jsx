import { useEffect, useState, React } from "react";
import { Carousel, Col, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import productdetail from "../assets/css/productdetail.css";
import { Link, useNavigate, useParams } from "react-router-dom";

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
const navigate =  useNavigate();

  // console.log(productList);
  // console.log(productDetail);
  console.log(infoProduct);

  return (
    <Row>
      {/* ===== PRODUCT DETAIL ====== */}
      <Col >
        <h1 className="product-name">{productDetail?.title}</h1>

        {/* ===== OTHER IMAGES PRODUCT DETAIL (small images) ===== */}
        <Carousel style={{backgroundColor:"white", borderRadius:"1rem",filter: "drop-shadow(5px 5px 5px rgba(5, 7, 12, 1))"}} fade className="carousel-container">
          {productDetail?.productImgs.map((img) => (
            <Carousel.Item 
            className="carousel-item" key={img}>
              <div style={{margin:" 0 auto",width: "500px", height:"350px", backgroundImage:`url(${img})`, backgroundRepeat:"no-repeat", backgroundSize:"contain",
            backgroundPosition:"center"}}>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* ====== DESCRIPTION ====== 
          */}
          <>
            <button
              className="show-info-details"
            >
              {" "}
              Description
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
       
      </Col>
      {/* ====== PRODUCTS RELATED ======
      Col, Container, ListGroup,*/
      }
      <Col style={{borderRadius:"1rem", filter: "drop-shadow(5px 5px 5px rgba(5, 7, 12, 1))", margin:"0rem  auto 2rem"}} lg={3} md={4}>
        <p className="product-realted-title">Products related </p>
        <ListGroup>
          {
            infoProduct.map((info) => (
              <Link style={{textDecoration:"none"}} key={info.id}
              to={`/product/${info.id}`} >
              <ListGroup.Item >

                <div style={{ backgroundImage: `url(${info.productImgs?.[0]})`, margin:" 0 auto", width: "100px", height:"150px", backgroundRepeat:"no-repeat", backgroundSize:"contain",
            backgroundPosition:"center" }}>
                </div>

                <p className="products-related-name">{info.title}</p>
              </ListGroup.Item>
              </Link>
            ))}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default ProductDetail;
