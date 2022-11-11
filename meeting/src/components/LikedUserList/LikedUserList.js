import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../Common/loader';
import Messanger from '../Messanger/Messanger';
const LikedUserList = () => {
  const liked = useSelector((state) => state.login.liked[0]);
  const likedCard = useSelector((state) => state.cards.users);
  const [userMap, setUserMap] = useState();
  useEffect(() => {
    if (liked !== undefined && liked.length > 0 && userMap === undefined) {
      axios
        .get('http://127.0.0.1:3001/auth/list', {
          params: {
            id: liked,
          },
        })
        .then(async (response) => {
          setUserMap(response.data);
        });
    } else if (likedCard.length > 0) {
      setUserMap(likedCard);
    }
  }, [userMap, liked, likedCard]);

  return (
    <>
      <Row xs={1} md={4} className="g-4 ">
        {userMap === undefined ? (
          <Loader />
        ) : (
          userMap.map((item) => (
            <LikedUserCard
              key={item._id}
              name={item.firstName + ' ' + item.lastName}
              description={item.descriptiton}
              image={
                item.image ? item.image : 'https://www.blexar.com/avatar.png'
              }
            />
          ))
        )}
      </Row>
    </>
  );
};
const LikedUserCard = (props) => {
  return (
    <>
      <Col className="m-5">
        <Card
          className="container-fluid likedUserListAnimation"
          style={{ width: '15rem', height: '25rem', display: 'inline-block' }}
        >
          <Card.Img
            variant="top"
            draggable="false"
            src={props.image}
            className="w-100 h-50"
          />
          <hr />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            {props.description.length < 25 ? (
              <Card.Text> {props.description}</Card.Text>
            ) : (
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>description</Accordion.Header>
                  <Accordion.Body>{props.description}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            )}
            <Messanger />
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default LikedUserList;
