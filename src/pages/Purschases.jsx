import React, { useEffect } from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPurschasesThunk } from "../store/slices/purschases.slice";

const Purschases = () => {
  const dispacth = useDispatch();

  const purschases = useSelector((state) => state.purschases);
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);

// const cardProductImg = products.filter(productL => productL[0]?.id === product.id)
// console.log(cardProductImg);


  useEffect(() => {
    dispacth(getPurschasesThunk());
  }, []);

  return (
    <div >
      <h1>My Purschases </h1>
        <ListGroup>
        {purschases.map((purschase) => 
          <div style={{marginTop: "2rem"}} key={purschase.id}>
            <ListGroup.Item style={{width:"15rem", borderRadius:"1rem 1rem 0rem 0rem"}}>{purschase.createdAt}</ListGroup.Item>
            <div style={{widht:"55rem",margin:"0 auto"}}>
              {purschase.cart.products.map((product) => 
                <Card key={product.id} style={{ width: "100%" }}>
                  <Card.Img variant="top" />
                  <Card.Body onClick={() => navigate(`/product/${product.id}`)}>
                    <Card.Title>Mis compras</Card.Title>
                    <Card.Text
                        style={{ cursor: "pointer", width: "80%" }}>
                        Entregado el {purschase.createdAt}
                    </Card.Text>
                    <Card.Text
                        style={{ cursor: "pointer", width: "80%" }}>
                        {product.title}
                    </Card.Text>
                    <Card.Text
                        style={{ cursor: "pointer", width: "80%" }}>
                        Price: ${product.price} 
                    </Card.Text>
                    <Button variant="primary">Buy again</Button>
                  </Card.Body>
                </Card>
              )}
            </div>
          </div>
        )}
      </ListGroup>
    </div>
  );
};

export default Purschases;
