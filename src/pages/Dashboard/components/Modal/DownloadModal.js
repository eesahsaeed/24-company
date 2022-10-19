
import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import {getUrl} from "../../../../helper/urlHelper";

export default function DownloadModal({id, name}){
  const [show, setShow] = useState(false);
  const [fullName, setFullName] = useState(name.replace(" ", "_"));
  const [cv, setCv] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    async function getCV(){
      try{
        let response = await fetch(`${getUrl()}/applications/cv/${fullName}-${id}`, {
          method: "GET",
          headers: {
            "Accept": "application/json"
          }
        })

        let rs = await response.json();
        setCv(rs);
      } catch(err){
        console.log(err);
      } 
    }

    let t = getCV();
  }, [])

  function base64ToArrayBuffer(base64) {
    var binaryString = window.atob(base64);
    var binaryLen = binaryString.length;
    var bytes = new Uint8Array(binaryLen);
    
    for (var i = 0; i < binaryLen; i++) {
      var ascii = binaryString.charCodeAt(i);
      bytes[i] = ascii;
    }

    return bytes;
  }

  function saveByteArray(reportName, byte) {
    var blob = new Blob([byte], {type: cv.contentType});
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    var fileName = reportName;
    link.download = fileName;
    link.click();
  };

  function download(){
    console.log(cv.data);
    var sampleArr = new Uint8Array(cv.data.data);
    saveByteArray(fullName, sampleArr);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Download CV
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Download CV</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/**<a href={`${getUrl()}/applications/cv/${fullName}-${id}`} download>Download</a> */}
          <Button onClick={download}>Download</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
