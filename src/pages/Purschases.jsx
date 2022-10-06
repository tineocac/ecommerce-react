
// import { isPropertyDescriptor } from "create";
import React, { useEffect } from "react";
import { Button, Card, CardImg, ListGroup, ListGroupItem } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getPurschasesThunk } from "../store/slices/purschases.slice";

const Purschases = () => {
  const dispacth = useDispatch();

  const purschases = useSelector((state) => state.purschases);
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);
  const {id} = useParams();

//  console.log(products)
 


  useEffect(() => {
    dispacth(getPurschasesThunk());
  }, []);

  return (
    <div>
      <h1>My Purschases </h1>
      <ListGroup>
        {purschases.map((purschase) => (
          <div style={{ marginTop: "2rem" }} key={purschase.cartId}>
            <ListGroup.Item
              style={{ width: "15rem", borderRadius: "1rem 1rem 0rem 0rem" }}
            >
              <strong>Pedido Realizado
                </strong>  :{purschase.createdAt}
            </ListGroup.Item>
            <div style={{ widht: "55rem", margin: "0 auto" }}>
              {purschase.cart.products.map((product) => (
                <Card key={product.id} style={{ width: "100%" }}>
                  <Card.Body >
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
                    {/* {
                    products.find((productG, index)=>{ productG.id === product.id
                      return(
                        <img src={productG.productImgs?.[index]}/>
                      )
                    }) 
                    
                  } */}
                    
                    <Button onClick={() => navigate(`/product/${product.id}`)} style={{backgroundColor:"#00247A", border:"none"}}>Buy again</Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </ListGroup>
    </div>
  );
};

export default Purschases;
