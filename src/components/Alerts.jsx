import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const Alerts = ({showSucces, handleCloseSucces}) => {
    return (
        <Modal show={showSucces} onHide={handleCloseSucces} animation={false}>
            <Modal.Header>
                <Modal.Title>Successful login <i className="fa-regular fa-square-check"></i></Modal.Title>
            </Modal.Header>
            <Modal.Body>Enjoy your shopping</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => {
                    handleCloseSucces()
                    location.reload()
                }}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Alerts;