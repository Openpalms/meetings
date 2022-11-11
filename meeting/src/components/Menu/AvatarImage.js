import { useState } from 'react';
import Avatar from 'react-avatar-edit';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { setAvatar as setUserPageAvatar } from '../../redux/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
const AvatarImage = () => {
  const test = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const [src, setSrc] = useState(null);
  const setUserAvatar = (code) => {
    dispatch(setUserPageAvatar(code));
  };
  const [avatar, setAvatar] = useState(false);
  const [preview, setPreview] = useState(null);

  const onAvatarUpdate = () => {
    axios
      .post('http://127.0.0.1:3001/sign-up/image', {
        email: test.email,
        image: preview,
      })
      .then((response) => {
        setUserAvatar(preview);
      });
  };

  const onClose = () => {
    setAvatar(false);
    onAvatarUpdate();
  };
  const onCrop = (view) => {
    setPreview(view);
  };
  return (
    <div>
      <Container>
        <Row>
          <Col>
            {preview ? (
              <img src={preview} alt="avatar" draggable="false" />
            ) : test.avatar[0] === undefined ? (
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqRyIiwYCq4s-fZi1zdmyfSuIPUvg9EyZ_Q&usqp=CAU"
                alt="avatar "
                className="rounded-circle w-50"
                draggable="false"
              />
            ) : (
              <img src={test.avatar} alt="MainAvatar" draggable="false" />
            )}
          </Col>
          <Col>
            {avatar === false ? (
              <Button variant="outline-light" onClick={() => setAvatar(true)}>
                Setup new avatar
              </Button>
            ) : (
              <Avatar
                imageWidth={100}
                width={150}
                height={150}
                onCrop={onCrop}
                onClose={onClose}
                src={src}
                exportAsSquare={true}
                exportSize={100}
                label="Set your avatar!"
                labelStyle={{ color: 'white' }}
              />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AvatarImage;
