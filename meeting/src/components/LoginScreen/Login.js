import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {
  setFirstName,
  setLastName,
  setEmail,
  setAge,
  setIsLogined,
  setAvatar,
  setLiked,
  setDescription,
} from '../../redux/loginSlice';

const Login = (props) => {
  const [login, setLogin] = useState('');
  const [disabledButton, setdisabledButton] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
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
  const setLoginAge = (text) => {
    dispatch(setAge(text));
  };
  const setUserAvatar = (code) => {
    dispatch(setAvatar(code));
  };
  const setUserLikes = (id) => {
    dispatch(setLiked(id));
  };
  const setUsersetDescription = (desc) => {
    dispatch(setDescription(desc));
  };

  const setUserProfileData = (data) => {
    setLoginFirstName(data.firstName);
    setLoginLastName(data.lastName);
    setLoginEmail(data.email);
    setLoginAge(data.age);
    setUserAvatar(data.image);
    setUserLikes(data.liked);
    setUsersetDescription(data.descriptiton);
  };
  const onSubmit = async () => {
    setdisabledButton(true);
    axios
      .get('http://127.0.0.1:3001/sign-up', {
        params: {
          login: login,
          password: password,
        },
      })
      .then((response) => {
        if (response.data === 'error') {
          setError(true);
          setdisabledButton(false);
        } else {
          setUserProfileData(response.data[0]);
          setError(false);
          setLogedInUser(true);
          setdisabledButton(false);
        }
      })
      .finally(() =>
        setTimeout(() => {
          setError(false);
        }, 4000)
      );
  };
  return (
    <>
      <Card style={{ width: '100%' }} className={error ? 'error' : 'success'}>
        <Card.Body className="bg-light ">
          <h1 className="text-center">
            {' '}
            {!error
              ? '👋 Welcome!'
              : 'Email or pass is not correct, please try again'}{' '}
          </h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>Login</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter your name"
                name="user[name]"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="RememberMe">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
          </Form>
        </Card.Body>
        <div className="container">
          <div className="row">
            <div className="col">
              <button
                type="submit"
                onClick={onSubmit}
                className="btn btn-outline-dark"
                value="Submit"
                disabled={disabledButton}
              >
                Log in
              </button>
            </div>
            <div className="col ">
              <button
                type="submit"
                onClick={() => props.setIsUser(false)}
                className="btn btn-outline-dark"
                value="Submit"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Login;
