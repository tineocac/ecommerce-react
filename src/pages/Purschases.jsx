
// import { isPropertyDescriptor } from "create";
import React, { useEffect } from "react";
import { Button, Card, CardImg, ListGroup, ListGroupItem } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import PurchaseCard from "../components/PurchaseCard";
import { getPurschasesThunk } from "../store/slices/purschases.slice";
import '../assets/css/purchases.css'

const Purschases = () => {

  const options = { weeday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

  const dispacth = useDispatch();

  const purschases = useSelector((state) => state.purschases);
  const navigate = useNavigate();

  const { id } = useParams();



  useEffect(() => {
    dispacth(getPurschasesThunk());
  }, []);


  return (
    <>
      <i className="fa-solid fa-circle-arrow-left" onClick={() => {
        navigate(-1)
        scrollTo(0, 0)
      }}></i>

      <ListGroup>
        <h1 className="purschases-title">My Purschases </h1>
        {purschases.map((purschase) => {

          const date = new Date(purschase.createdAt)

          return (

            <div style={{ marginTop: "2rem" }} key={purschase.cartId}>

              <ListGroup.Item
                style={{ width: "15rem", borderRadius: "1rem 1rem 0rem 0rem" }}
              >
                <strong>Order placed
                </strong>  :{date.toLocaleDateString(undefined, options)}
              </ListGroup.Item>
              <div style={{ widht: "55rem", margin: "0 auto" }}>
                {purschase.cart.products.map((product) => (
                  <PurchaseCard purschase={purschase} product={product} key={product.id} />
                ))}
              </div>
            </div>

          )


        })}
      </ListGroup>
    </>
  );
};

export default Purschases;
