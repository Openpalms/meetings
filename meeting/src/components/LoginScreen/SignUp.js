import React, { useState } from 'react';
import { useFormik } from 'formik';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
  setAge,
  setIsLogined,
} from '../../redux/loginSlice';

const LoginScreen = (props) => {
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(true);
  const [signUp, setsignUp] = useState(false);
  const setLogedInUser = () => {
    dispatch(setIsLogined());
  };
  const setLoginFirstName = (text) => {
    dispatch(setFirstName(text));
  };
  const setLoginLastName = (text) => {
    dispatch(setLastName(text));
  };
  const setLoginEmail = (text) => {
    dispatch(setEmail(text));
  };
  const setLoginPassword = (text) => {
    dispatch(setPassword(text));
  };
  const setLoginAge = (text) => {
    dispatch(setAge(text));
  };

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Must be 20 characters or less';
    }
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 5) {
      errors.password = 'Must be 5 characters or more';
    }
    if (!values.age) {
      errors.age = 'Required';
    } else if (values.age < 16) {
      errors.age = 'Must be at least 16 years ';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      age: '',
    },
    validate,
    onSubmit: (values) => {
      const { firstName, lastName, email, password, age } = values;
      axios
        .post('http://127.0.0.1:3001/sign-up', {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          age: age,
        })
        .then((response) => {
          if (response.data === 'This email is already in base') {
            setSuccess(false);
          } else if (response.data === 'ok') {
            setsignUp(true);
            setLogedInUser(true);
            setLoginFirstName(firstName);
            setLoginLastName(lastName);
            setLoginEmail(email);
            setLoginPassword(password);
            setLoginAge(age);
          }
        })
        .finally(() =>
          setTimeout(() => {
            setSuccess(true);
          }, 5000)
        );
    },
  });

  return (
    <div>
      <div className="container-fluid">
        <Card>
          <Card.Body className="bg-light ">
            {success === false ? (
              <>
                <h1 className="text-center redalert">👋 Oops!</h1>
                <h4>Email is already in base</h4>
              </>
            ) : (
              <>
                <h1 className="text-center">👋 Hello!</h1>
                <h4>let's get to know each other a bit better</h4>
              </>
            )}
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  name="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  placeholder="Enter your name"
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="redalert">{formik.errors.firstName}</div>
                ) : null}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  name="lastName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  placeholder="Enter your last name"
                  onBlur={formik.handleBlur}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="redalert">{formik.errors.lastName}</div>
                ) : null}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicAge">
                <Form.Label>age</Form.Label>
                <Form.Control
                  name="age"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.age}
                  placeholder="Enter your age"
                  onBlur={formik.handleBlur}
                />
                {formik.touched.age && formik.errors.age ? (
                  <div className="redalert">{formik.errors.age}</div>
                ) : null}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  placeholder="Enter email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="redalert">{formik.errors.email}</div>
                ) : null}
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="redalert">{formik.errors.password}</div>
                ) : null}
              </Form.Group>
              <Form.Group className="mb-3" controlId="RememberMe">
                <Form.Check type="checkbox" label="Remember Me" />
              </Form.Group>
              <div className="container text-center">
                <div className="row">
                  <div className="col-md-4">
                    <Button variant="outline-dark" type="submit">
                      Submit
                    </Button>
                  </div>
                  <div className="col">
                    <Button
                      variant="outline-dark"
                      onClick={() => props.setIsUser(true)}
                    >
                      Go back
                    </Button>
                  </div>
                </div>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default LoginScreen;
