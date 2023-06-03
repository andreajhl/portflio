import React, { useState } from 'react';
import Image from 'next/image';
import { Modal, Carousel } from 'react-bootstrap';
import './styles.scss';

const CustomModal = ({ textBtn, photosCarousels, customClass, children }) => {
  const [modalShow, setModalShow] = useState(false);

  const handleModalClose = () => setModalShow(false);
  const handleModalOpen = () => setModalShow(true);

  return (
    <div className="custon-modal">
      <button
        className={customClass}
        onClick={handleModalOpen}
      >
        {textBtn}
      </button>
      <Modal
        centered
        size="lg"
        show={modalShow}
        onHide={handleModalClose}
        aria-labelledby="custom-modal"
      >
        <Modal.Body>
          <Carousel
            controls={false}
            indicators={true}
            className="custon-modal__carousel"
          >
            {
              photosCarousels.map((photo, index) => (
                <Carousel.Item key={index} className="custon-modal__carousel-item">
                  <Image
                    className="custon-modal__carousel-item-img"
                    src={photo.url}
                    alt={photo.alt}
                    fill={true}
                  />
                </Carousel.Item>
              ))
            }
          </Carousel>
          <div>{children}</div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CustomModal;
