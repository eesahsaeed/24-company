
import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import {getUrl} from "../../../../helper/urlHelper";

export default function DlModal({id, name}){
  const [showModal, setShowModal] = useState(false);
  const [fullName, setFullName] = useState(name.replace(" ", "_"));
  const [ready, setReady] = useState(false);
  const [cv, setCv] = useState({});

  function saveByteArray(reportName, byte, contentType) {
    var blob = new Blob([byte], {type: contentType});
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    var fileName = reportName;
    link.download = fileName;
    link.click();
  };

  function download(){
    async function getCV(){
      try{
        let response = await fetch(`${getUrl()}/applications/cv/${fullName}-${id}`, {
          method: "GET",
          headers: {
            "Accept": "application/json"
          }
        })

        let rs = await response.json();

        var sampleArr = new Uint8Array(rs.data.data);
        saveByteArray(fullName, sampleArr, rs.contentType);
      } catch(err){
        console.log(err);
      } 
    }

    let t = getCV();
  }

  return (
    <>      
      <button className='download-btn' onClick={() => setShowModal(true)}>
        {fullName}'s CV
      </button>

      {showModal && <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-10 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-center w-screen">
                    <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-title">Download CV</h3>
                    <div className="mt-2" style={{margin: "0px auto"}}>
                      <button 
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={download}>
                        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>}
    </>
  );
};

/**function DownloadModal({id, name}){
  const [show, setShow] = useState(false);
  const [fullName, setFullName] = useState(name.replace(" ", "_"));
  const [ready, setReady] = useState(false);
  const [cv, setCv] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function saveByteArray(reportName, byte, contentType) {
    var blob = new Blob([byte], {type: contentType});
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    var fileName = reportName;
    link.download = fileName;
    link.click();
  };

  function download(){
    async function getCV(){
      try{
        let response = await fetch(`${getUrl()}/applications/cv/${fullName}-${id}`, {
          method: "GET",
          headers: {
            "Accept": "application/json"
          }
        })

        let rs = await response.json();

        var sampleArr = new Uint8Array(rs.data.data);
        saveByteArray(fullName, sampleArr, rs.contentType);
      } catch(err){
        console.log(err);
      } 
    }

    let t = getCV();
  }

  return (
    <>
      <button className='download-btn' onClick={handleShow}>
        {fullName}'s CV
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{fullName}'s CV</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button style={{width: "100%"}} onClick={download}>Download</Button>
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
} */
