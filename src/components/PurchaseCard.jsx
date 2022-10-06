import React from "react";
import { useSelector } from "react-redux";
import { Button, Card, CardImg, ListGroup, ListGroupItem } from "react-bootstrap";

const PurchaseCard = ({ product, purschase }) => {

  const products = useSelector((state) => state.products);
  const productImg = products.find((productG, index) => productG.id === product.id);
  // console.log(productImg)
  return (

      <Card style={{ width: "100%" }}>

        <Card.Body>
          <Card.Title>Mis compras</Card.Title>
          <Card.Text style={{ cursor: "pointer", width: "80%" }}>
            Entregado el {purschase.createdAt}
          </Card.Text>
          <Card.Text style={{ cursor: "pointer", width: "80%" }}>
            {product.title}
          </Card.Text>
          <Card.Text style={{ cursor: "pointer", width: "80%" }}>
            Price: ${product.price}
          </Card.Text>
          <CardImg style={{ objectFit: "contain" }} src={productImg?.productImgs[0]} />
          <Button
            onClick={() => navigate(`/product/${product.id}`)}
            style={{ backgroundColor: "#00247A", border: "none" }}
          >
            Buy again
          </Button>
        </Card.Body>
      </Card>

  );
};

export default PurchaseCard;
