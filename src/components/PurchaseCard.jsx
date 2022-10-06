import React from "react";
import { useSelector } from "react-redux";
import { Button, Card, CardImg, ListGroup, ListGroupItem } from "react-bootstrap";

const PurchaseCard = ({ product, purschase }) => {

  const products = useSelector((state) => state.products);
  const productImg = products.find((productG, index) => productG.id === product.id);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(purschase.createdAt)

  return (

    <Card style={{ width: "100%" }}>

      <Card.Body className="probandoagain">
        <Card.Title>Product</Card.Title>
        <Card.Text style={{ cursor: "pointer", width: "80%" }}>
          delivered on {date.toLocaleDateString(undefined, options)}
        </Card.Text>
        <Card.Text style={{ cursor: "pointer", width: "80%" }}>
          {product.title}
        </Card.Text>
        <Card.Text style={{ cursor: "pointer", width: "80%" }}>
          Price: ${product.price}
        </Card.Text>
        <div className="otrodiv">
          <div className="purschase-img" style={{ backgroundImage: `url(${productImg?.productImgs[0]})` }}></div>
        </div>

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
