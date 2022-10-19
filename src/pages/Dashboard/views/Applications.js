
import React, {useState, useEffect} from "react";

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
import {formatDistance} from 'date-fns';

import DownloadModal from "../components/Modal/DownloadModal";
import {getUrl} from "../../../helper/urlHelper";

function Applications(){
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    async function getApplications(){
      try{
        let response = await fetch(`${getUrl()}/applications/applications`, {
          method: "GET",
          headers: {
            "Accept": "application/json"
          }
        })

        let rs = await response.json();
        setApplications(rs.applications);
      } catch(err){
        console.log(err);
      } 
    }

    let t = getApplications();
  }, []);

  return (
    <>
      <div className="content">
        <Row>
          <Col>
            <Card>
              <CardBody>
                <h3>Applications</h3>
                <Row>
                  <Col sm="12" md="12">
                    <Card>
                      <CardBody style={{overflow: "hidden"}}>
                        <Table responsive>
                          <thead className="text-danger">
                            <tr>
                              <th>Full Name</th>
                              <th>Phone Number</th>
                              <th>Job Title</th>
                              <th>Level</th>
                              <th className="text-right">Duration</th>
                            </tr>
                          </thead>
                          <tbody>
                            {applications.map((application, i) => (
                              <tr key={i}>
                                <td>{application.applicantFullName}</td>
                                <td><DownloadModal id={application._id} name={application.applicantFullName}/></td>
                                <td>{application.jobTitle}</td>
                                <td>{application.level}</td>
                                <td className="text-right">{formatDistance(new Date(application.date), new Date())} ago</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </CardBody>
                    </Card>
                  </Col>
                </Row> 
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fa fa-history" /> Updated 3 minutes ago
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Applications;
