
import React, {useState, useEffect} from "react";
import {Badge, Container, Row, Col, ListGroup} from "react-bootstrap";
import {updatePurchase} from "../../../graphql/mutations";
import {onCreateOrder} from "../../../graphql/subscriptions";
import {getOrdersFromPurchase} from "../../../graphql/queries";
import {API} from "aws-amplify";

export default function OrderRow({purchase, index, updateOrders}){
  const [dropDown, setDropDown] = useState(false);
  const [orders, setOrders] = useState(purchase.orders);

  function handleClick(e){
    e.preventDefault();

    if (!purchase.checked){
      let newPurchase = {...purchase};
      newPurchase.checked = true;
      delete newPurchase.orders;
      delete newPurchase.createdAt;
      delete newPurchase.updatedAt;
      
      API.graphql({
        query: updatePurchase,
        variables: {
          input: newPurchase
        }
      }).then(v => {
        updateOrders(v.data.updatePurchase, index);
      })
    }
    
    setDropDown(!dropDown);
  }

  return (
    <>
        <ListGroup.Item onClick={handleClick} style={{cursor: "pointer"}} className={purchase.checked ? "" : "checkered"}>
          <Row>
            <Col>{purchase.email}</Col>
            <Col sm={5}>{purchase.address}</Col>
            <Col><Badge bg="danger">{purchase.status}</Badge></Col>
            <Col>${purchase.price}</Col>
          </Row>
            {dropDown && orders && orders.items.map((item, i) => (
              <Container className="bg-light" key={i}>
                <Row>
                  <Col>
                    {item.menuName}
                  </Col>
                  <Col>
                    x{item.quantity}
                  </Col>
                  <Col className="text-right">
                    ${item.price}
                  </Col>
                  <hr/>
                </Row>
              </Container>
            ))}
        </ListGroup.Item>
    </>
  )
}
