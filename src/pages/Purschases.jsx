
// import { isPropertyDescriptor } from "create";
import React, { useEffect } from "react";
import { Button, Card, CardImg, ListGroup, ListGroupItem } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import PurchaseCard from "../components/PurchaseCard";
import { getPurschasesThunk } from "../store/slices/purschases.slice";

const Purschases = () => {
  const dispacth = useDispatch();

  const purschases = useSelector((state) => state.purschases);
  const navigate = useNavigate();
 
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
                <PurchaseCard purschase={purschase} product={product} key={product.id}/>
              ))}
            </div>
          </div>
        ))}
      </ListGroup>
    </div>
  );
};

export default Purschases;
