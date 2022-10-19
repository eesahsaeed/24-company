
import React from "react";
import {Form, FloatingLabel} from "react-bootstrap";

export default function Input({
  name, 
  type,
  placeholder,
  label,
  onChange,
  error,
  errorMessage,
  children,
  value = "",
  multiple = false
}){

  if (type === "textarea"){
    return (
      <Form.Group controlId="formBasicPassword" className="mb-3">
        <Form.Control
            as="textarea"
            placeholder={placeholder} 
            className={error ? "border-danger" : ""}
            style={{ height: '200px' }} onChange={onChange} name={name}/>
        {error && <Form.Label className="text-danger">{errorMessage}</Form.Label>}
      </Form.Group>
    )
  }

  if (type === "select"){
    return (
      <Form.Group className="mb-3">
        <Form.Select className={error ? "border-danger" : ""} type={type} placeholder={placeholder} onChange={onChange} name={name} defaultValue={value}>
          {children}
        </Form.Select>
        {error && <Form.Label className="text-danger">{errorMessage}</Form.Label>}
      </Form.Group>
    )
  }

  return (
    <Form.Group className="mb-3">
      <Form.Control className={error ? "border-danger" : ""} name={name} type={type} placeholder={placeholder} onChange={onChange} defaultValue={value} multiple={multiple}/>
        {error && <Form.Label className="text-danger">{errorMessage}</Form.Label>}
    </Form.Group>
  )
}
