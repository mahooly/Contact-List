import "../styles/base.scss";
import React, {useEffect, useState} from "react";
import {PencilSquare, TrashFill, Plus} from 'react-bootstrap-icons';
import {useNavigate} from "react-router-dom";
import DeleteContactModal from "../components/DeleteContactModal";

const MainPage = () => {
    const [contacts, setContacts] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [toDelete, setToDelete] = useState('');

    useEffect(() => {
        // Retrieve contacts from localStorage
        const storedContacts = localStorage.getItem('contacts');

        // Parse stored contacts JSON, or initialize to an empty array if not found
        const contactsArray = storedContacts ? JSON.parse(storedContacts) : [];

        setContacts(contactsArray);
    }, []);

    let navigate = useNavigate();

    const handleDeleteClick = (contact) => {
        setToDelete(contact);
        setShowDeleteModal(true);
    };
    const deleteContact = (email) => {
        const updatedContacts = contacts.filter(contact => contact.email !== email);
        setContacts(updatedContacts);
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
        setShowDeleteModal(false); // Hide modal after deletion
    };

    return (
        <div className="container mt-3">
            {contacts.length > 0 ? (
                <div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h2>Contacts ({contacts.length})</h2>
                        <button className="btn btn-primary" onClick={() => navigate('/add-contact')}>
                            <Plus size={20} className="me-2"/>
                            Add New
                        </button>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th scope="col"><input type="checkbox"/></th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {contacts.map((contact, index) => (
                                <tr key={index}>
                                    <td><input type="checkbox"/></td>
                                    <td>{contact.firstName}</td>
                                    <td>{contact.lastName}</td>
                                    <td>{contact.email}</td>
                                    <td>
                                        <button className="btn btn-link p-0"
                                                onClick={() => navigate(`edit-contact/${contact.uid}`)}
                                                title="Edit">
                                            <PencilSquare className="text-primary me-2"/>
                                        </button>
                                        <button className="btn btn-link p-0"
                                                onClick={() => handleDeleteClick(contact)}
                                                title="Delete">
                                            <TrashFill className="text-danger"/>
                                        </button>
                                    </td>
                                </tr>))}
                            </tbody>
                        </table>
                    </div>
                    <DeleteContactModal
                        show={showDeleteModal}
                        onHide={() => setShowDeleteModal(false)}
                        onDelete={deleteContact}
                        contact={toDelete}
                    />
                </div>
            ) : (
                <div className="d-flex flex-column align-items-center justify-content-center"
                     style={{minHeight: '200px'}}>
                    <h2 className="mb-3">No contacts</h2>
                    <button className="btn btn-primary" onClick={() => navigate('/add-contact')}>
                        <Plus size={20} className="me-2"/>
                        Add New
                    </button>
                </div>
            )}
        </div>
    );
};

export default MainPage;