import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Messanger.css';
const Messanger = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            Chat! <br /> coming soon...
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div id="messanger">
            <div className="inner">
              <div className="incoming">
                <p>
                  <span className="bubble">Hi</span>
                </p>
                <p>
                  <span className="icon-wrap">
                    <img
                      src="https://78.media.tumblr.com/968ddf3c3a577cee4aea71670eba89b3/tumblr_p8xcjbZqVX1rj1qg9o2_400.png"
                      alt="avatar"
                    />
                  </span>
                  <span className="bubble">
                    I have a question: can you explain what lorem ipsum is? I
                    see it everywhere!
                  </span>
                </p>
              </div>

              <div className="send">
                <p>
                  <span className="bubble">Oh hi !</span>
                </p>
                <p>
                  <span className="bubble">Sure I can!</span>
                </p>
                <p>
                  <span className="bubble">Give me sec</span>
                </p>
              </div>

              <div className="incoming">
                <p className="dots">
                  <span className="icon-wrap">
                    <img
                      src="https://78.media.tumblr.com/968ddf3c3a577cee4aea71670eba89b3/tumblr_p8xcjbZqVX1rj1qg9o2_400.png"
                      alt="avatar"
                    />
                  </span>
                  <span id="wave" className="bubble">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Messanger;
