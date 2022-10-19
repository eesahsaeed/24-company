
import React, {useState} from "react";
import {Modal, Button} from "react-bootstrap";
import {API, Storage} from "aws-amplify";

function DeleteModal({menu}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function deleteMenu(){
    try{
      let img = await Storage.remove(menu.image.key);
      let data = await API.del("grillzapi", "/menus", {body: {...menu}});
      console.log(data);
    } catch(err){
      console.log(err);
    }
  }

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Remove
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete {menu.menuName}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => {
            deleteMenu();
            handleClose();
          }}>
            Delete
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
