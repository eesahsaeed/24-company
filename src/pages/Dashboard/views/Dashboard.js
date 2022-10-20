
import React from "react";

import {
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Table, 
} from "reactstrap";
import {Button, Card} from "react-bootstrap";

import food1 from "../assets/img/food-1.jpg";
import food2 from "../assets/img/food-2.jpg";
import food3 from "../assets/img/food-3.jpg";
import food4 from "../assets/img/food-4.jpg";
import food5 from "../assets/img/food-5.jpg";
import food6 from "../assets/img/food-6.jpg";

function Dashboard() {
  return (
    <>
      <div className="content">
        <Row>
          <Col>
            <Card>
              <CardBody>
                <h3>Dashboard Coming Soon...</h3>
                 
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
