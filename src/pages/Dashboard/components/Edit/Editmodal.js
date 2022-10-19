
import React, {useState} from "react";
import {Button, Modal, Card, Form} from "react-bootstrap";
import {
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";
import PuffLoader from "react-spinners/PuffLoader";
import Input from "../Input/InputField";
import {API, Storage} from "aws-amplify";
import {v4 as uuid} from "uuid";

function EditModal(props) {
  const [values, setValues] = useState(props.menu);
  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [categoryError, setCategoryError] = useState(false);
  const [categoryErrorMessage, setCategoryErrorMessage] = useState("");
  const [priceError, setPriceError] = useState(false);
  const [priceErrorMessage, setPriceErrorMessage] = useState("");
  const [imageError, setImageError] = useState(false);
  const [imageErrorMessage, setImageErrorMessage] = useState("");
  const [descriptionError, setDescriptionError] = useState(false);
  const [descriptionErrorMessage, setDescriptionErrorMessage] = useState("");
  const [tempImage, setTempImage] = useState(props.menu.image);
  const [color, setColor] = useState("#ff0000");
  
  const override = {
    display: "block",
    margin: "0 auto",
  };

  function handleChange(e){
    let name = e.target.name;

    switch (name){
      case "menuName":
        setNameError(false);
        break;

      case "price":
        setPriceError(false);
        break;

      case "image":
        setImageError(false);
        break;

      case "description":
        setDescriptionError(false);
        break;
    }

    if (name === "image"){
      setValues({...values, image: e.target.files[0]});
    } else {
      setValues({...values, [name]: e.target.value});
    }
  }

  function validate(){
    let valid = true;

    if (!values.menuName){
      valid = false;
      setNameError(true);
      setNameErrorMessage("Please enter a valid name")
    }

    if (!values.price){
      valid = false;
      setPriceError(true);
      setPriceErrorMessage("Please specify a price")
    } else {
      let regex = /^\d+$/;
      let match = regex.test(values.price);
      if (match){
        valid =true;
      } else {
        valid = false;
        setPriceError(true);
        setPriceErrorMessage("Please specify a valid price")
      }
    }

    if (!values.image){
      valid = false;
      setImageError(true);
      setImageErrorMessage("Please import an image")
    }

    if (!values.description){
      valid = false;
      setDescriptionError(true);
      setDescriptionErrorMessage("Please type in description")
    }

    return valid;
  }
  
  function handleSubmit(e){
    e.preventDefault();
    let valid = validate();
    
    if (valid){
      setLoading(true);
      console.log(values);

      async function saveMenu(){
        try{
          if (values.image.name){
            let img = await Storage.remove(tempImage.key);
            console.log(img);
            let imageKey = await Storage.put(`${uuid()}-${values.image.name}`, values.image);
            let data = await API.put("grillzapi", "/menus", {body: {...values, image: imageKey}});
            setLoading(false);
            props.onHide();
            console.log(data);
          } else {
            let data = await API.put("grillzapi", "/menus", {body: {...values}});
            setLoading(false);
            props.onHide();
            console.log(data);
          }
        } catch(err){
          console.log(err);
        }
      }

      saveMenu();
    }
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Menu
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md="12">
            <Card>
              <CardBody style={{overflow: "hidden"}}>
                <Form onSubmit={handleSubmit}>
                  {loading && <div className="spinner-container">
                    <div style={{marginTop: "200px"}}>
                      <PuffLoader color={color} loading={loading} cssOverride={override} size={100}/>
                    </div>
                  </div>}
                  <Input 
                    name="menuName" 
                    type="text"
                    placeholder="Name"
                    onChange={handleChange}
                    label="Name"
                    required={true}
                    error={nameError}
                    errorMessage={nameErrorMessage}
                    value={values.menuName}/> 

                  <Input 
                    name="category" 
                    type="select"
                    placeholder="Category"
                    onChange={handleChange}
                    label="Category"
                    required={true}
                    error={categoryError}
                    errorMessage={categoryErrorMessage}
                    value={values.category}
                  >
                    <option value="Burgers">Burger</option>
                    <option value="Spiced Chicken">Spiced Chicken</option>
                    <option value="Tasty Sides">Tasty Sides</option>
                    <option value="Sweet Treats">Sweet Treats</option>
                    <option value="Best Choice">Best Choice</option>
                  </Input>

                  <Input 
                    name="price" 
                    type="text"
                    placeholder="Price"
                    onChange={handleChange}
                    label="Price"
                    required={true}
                    error={priceError}
                    errorMessage={priceErrorMessage}
                    value={values.price}/>

                  <Input 
                    name="image" 
                    type="file"
                    placeholder="Image"
                    onChange={handleChange}
                    label="Image"
                    required={true}
                    error={imageError}
                    errorMessage={imageErrorMessage}/>
                  
                  <Input 
                    name="description" 
                    type="textarea"
                    placeholder="Leave a comment here"
                    onChange={handleChange}
                    label="Price"
                    required={true}
                    error={descriptionError}
                    errorMessage={descriptionErrorMessage}
                    value={values.description}/>

                  <Button variant="danger" type="submit" onSubmit={handleSubmit}>
                    Submit
                  </Button>
                  <Button onClick={props.onHide}>Close</Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

function Edit({menu}) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="dark" className="ms-5" onClick={() => setModalShow(true)}>
        Edit
      </Button>

      <EditModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        menu={menu}
      />
    </>
  );
}

export default Edit;
