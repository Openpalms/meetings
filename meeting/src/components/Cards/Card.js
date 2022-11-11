import s from './Card.module.css';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import Loader from '../Common/loader';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { likeUser, skipUser, updateCounter } from '../../redux/cardSlice';

const UserCard = () => {
  const counter = useSelector((state) => state.cards.counter);
  const loginState = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const [data, setData] = useState({});

  const addUserCounter = () => {
    dispatch(likeUser(data[counter]));
    dispatch(updateCounter());
    axios.post('http://127.0.0.1:3001/auth/liked', {
      email: loginState.email,
      liked: data[counter]._id,
    });
  };
  const dislikeUser = () => {
    dispatch(skipUser(data[counter]));
    dispatch(updateCounter());
  };
  useEffect(() => {
    if (data.length === undefined) {
      axios
        .get('http://127.0.0.1:3001/auth/users', {
          params: {
            email: loginState.email,
            liked: loginState.liked,
          },
        })
        .then(
          (response) => {
            setData(response.data);
          },
          [data]
        );
    }
  });
  return (
    <div className="shadow-lg p-3 mb-5 bg-body rounded">
      <Card style={{ width: '18rem' }}>
        {data.length === undefined ? (
          <Loader />
        ) : counter >= data.length ? (
          <Loader />
        ) : (
          <>
            <Carousel className="h-50">
              <Carousel.Item>
                {data.length > 0 && data[counter].image !== undefined ? (
                  <img
                    className={`d-block w-100 ${s.img}`}
                    src={data[counter].image}
                    alt="First slide"
                  />
                ) : (
                  <img
                    className={`d-block w-100 ${s.img}`}
                    src="https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif"
                    alt="First slide"
                  />
                )}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className={`d-block w-100 ${s.img}`}
                  src="https://image.shutterstock.com/image-vector/no-image-available-like-missing-260nw-1811092264.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
            <Card.Body className="bg-light">
              <Card.Title>
                {data.length > 0 && counter <= data.length
                  ? data[counter].firstName + ' ' + data[counter].lastName
                  : 'Hello'}
              </Card.Title>
              <Card.Text>
                Description: <br />
                {data.length > 0 && counter <= data.length
                  ? data[counter].descriptiton
                  : 'Description here'}
              </Card.Text>
              <div className="container">
                <div className="row align-items-start">
                  <div className="col">
                    <button
                      type="button"
                      className="btn btn-outline-secondary float-left me-md-3"
                      onClick={dislikeUser}
                    >
                      Skip
                    </button>
                  </div>
                  <div className="col">
                    <button
                      type="button"
                      className="btn btn-outline-secondary float-left me-md-3"
                      onClick={addUserCounter}
                    >
                      Meet
                    </button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </>
        )}
      </Card>
    </div>
  );
};
export default UserCard;
