import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const DeleteContactModal = ({show, onHide, onDelete, contact}) => {
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Delete Contact</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {`Are you sure you want to delete the contact ${contact.firstName} ${contact.lastName}?`}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Cancel</Button>
                <Button variant="danger" onClick={() => onDelete(contact.email)}>Delete Contact</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteContactModal;
