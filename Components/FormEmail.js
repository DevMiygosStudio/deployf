import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useForm } from "../util/hooks";

function FormEmail() {
  const [errors, setErrors] = useState({});
  const [ismailed, setIsMailed] = useState(false);

  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: "",
    email: "",
    requirement: "",
  });

  const [addUser, { loading }] = useMutation(SUBMIT_FORM_MUTATION, {
    update(proxy, { data: { registerUser: userData } }) {
      setIsMailed(true);
    },

    onError(err) {
      console.log(err.graphQLErrors[0].extensions.errors);
      if (err.graphQLErrors[0].extensions.errors.isEmail) {
        console.log("====================================");
        console.log(err.graphQLErrors[0].extensions.errors.isEmail);
        console.log("====================================");
        setIsMailed(true);
      } else {
        setErrors(err.graphQLErrors[0].extensions.errors);
      }
    },
    variables: values,
  });

  function registerUser() {
    addUser();
  }
  return ismailed ? (
    <div style={{ marginBottom: "2em" }} id="subscribe">
      <h3
        style={{
          textAlign: "center",
          marginBottom: "1.5em",
          marginTop: "3em",
          textTransform: "uppercase",
        }}
      >
        Our Customer Relationship Officer will contact you shortly...!
      </h3>
    </div>
  ) : (
    <div style={{ marginBottom: "2em" }} id="subscribe">
      <h3
        style={{
          textAlign: "center",
          marginBottom: "1.5em",
          marginTop: "3em",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        Enquiry Form
      </h3>
      {!errors ? (
        <div>No error</div>
      ) : (
        <div
          style={{
            marginBottom: "1.5em",
          }}
        >
          <ui>
            {Object.keys(errors).map((key, index) => (
              <li key={index} style={{ listStyle: "none" }}>
                <div
                  style={{
                    backgroundColor: "black",
                    width: "300px",
                    margin: "auto",
                    color: "white",
                    height: "2em",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "0.5em",
                    borderRadius:"10px"
                  }}
                >
                  <h6
                    style={{
                      textAlign: "center",
                      margin: "0",
                      textTransform: "uppercase",
                    }}
                  >
                    {errors[key]}
                  </h6>
                </div>
              </li>
            ))}
          </ui>
        </div>
      )}
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2"></Col>
          <Col md="auto">
            <Form
              onSubmit={onSubmit}
              noValidate
              className={loading ? "loading" : ""}
            >
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder=""
                  name="email"
                  value={values.email}
                  onChange={onChange}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder=""
                  name="username"
                  value={values.username}
                  onChange={onChange}
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Services you seek</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="requirement"
                  value={values.requirement}
                  onChange={onChange}
                />
              </Form.Group>

              <Button
                type="submit"
                style={{
                  marginTop: "1.3em",
                  backgroundColor: "black",
                }}
              >
                Submit
              </Button>
            </Form>
          </Col>
          <Col xs lg="2"></Col>
        </Row>
      </Container>
    </div>
  );
}

const SUBMIT_FORM_MUTATION = gql`
  mutation registerUser(
    $username: String!
    $email: String!
    $requirement: String!
  ) {
    registerUser(
      registerFormInput: {
        username: $username
        email: $email
        requirement: $requirement
      }
    ) {
      email
    }
  }
`;

export default FormEmail;
