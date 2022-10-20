
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
                        <div className="overflow-x-auto relative">
                          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                              <tr>
                                <th scope="col" className="py-3 px-6">
                                  Full Name
                                </th>
                                <th scope="col" className="py-3 px-6">
                                  CV
                                </th>
                                <th scope="col" className="py-3 px-6">
                                  Job Title
                                </th>
                                <th scope="col" className="py-3 px-6">
                                  Level
                                </th>
                                <th scope="col" className="py-3 px-6">
                                  Duration
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {applications.map((application, i) => (
                                <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">{application.applicantFullName}</th>
                                  <td className="py-4 px-6"><DownloadModal id={application._id} name={application.applicantFullName}/></td>
                                  <td className="py-4 px-6">{application.jobTitle}</td>
                                  <td className="py-4 px-6">{application.level}</td>
                                  <td className="py-4 px-6">{formatDistance(new Date(application.date), new Date())} ago</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row> 
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

export default Applications;
