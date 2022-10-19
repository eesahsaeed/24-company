
import React, {useEffect, useState} from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";
import {Badge, ListGroup} from "react-bootstrap";
/*import {API} from "aws-amplify";
import {onCreateOrder, onCreatePurchase} from "../../../graphql/subscriptions";
import {listPurchasesWithItems, listPurchases} from "../../../graphql/queries";
import OrderRow from "./OrderRow";*/

function Orders() {
  const [purchases, setPurchases] = useState([]);

  /*useEffect(() => {
    fetchOrders();
    console.log("purchases", purchases);

    API.graphql({
      query: onCreateOrder,
    }).subscribe({
      next: fetchOrders
      
      data => {
        let purchase = data.value.data.onCreatePurchase;
        let tempPurchases = [...purchases];
        tempPurchases.unshift(purchase);
        console.log("purchases", purchases);
        console.log("tempPurchases", tempPurchases);

        setPurchases(tempPurchases);
      }
    })
  }, [])*/

  /*function fetchOrders(){
    API.graphql({
      query: listPurchasesWithItems
    }).then(data => {
      let val = data.data.listPurchases.items.reverse();
      val.sort((a, b) => Number(new Date(b.updatedAt)) - Number(new Date(a.updatedAt)))
      console.log(val);
      setPurchases(val);
    }).catch(err => {
      console.error(err);
    })
  }

  function updateOrders(item, index){
    let tempOrders = [...purchases];
    tempOrders[index] = item;
    setPurchases(tempOrders);
  }*/

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Order Table</CardTitle>
              </CardHeader>
              <CardBody style={{overflow: "hidden"}}>
                <ListGroup>
                  <ListGroup.Item>
                    <Row>
                      <Col><span>Email</span></Col>
                      <Col sm={5}><span>Address</span></Col>
                      <Col><span>Status</span></Col>
                      <Col><span>Price</span></Col>
                    </Row>
                  </ListGroup.Item>
                  {/*purchases.map((purchase, i) => (
                    <OrderRow purchase={purchase} key={i} index={i} updateOrders={updateOrders}/>
                  ))*/}
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Orders;
