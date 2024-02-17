import "../styles/base.scss";
import React, {useEffect, useState} from "react";
import {PencilSquare, TrashFill, Plus} from 'react-bootstrap-icons';
import {useNavigate} from "react-router-dom";

const MainPage = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        // Retrieve contacts from localStorage
        const storedContacts = localStorage.getItem('contacts');

        // Parse stored contacts JSON, or initialize to an empty array if not found
        const contactsArray = storedContacts ? JSON.parse(storedContacts) : [];

        setContacts(contactsArray);
    }, []);

    let navigate = useNavigate();
    const deleteContact = (email) => {
        if (window.confirm(`Are you sure you want to delete the contact with email: ${email}?`)) {
            const updatedContacts = contacts.filter(contact => contact.email !== email);
            setContacts(updatedContacts);
            localStorage.setItem('contacts', JSON.stringify(updatedContacts));
        }
    };

    return (
        <div className="container mt-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Contacts ({contacts.length})</h2>
                <div className="d-flex align-items-center">
                    <button className="btn btn-primary me-2" onClick={() => navigate('/add-contact')}>
                        <Plus size={20} className="me-2"/>
                        Add New
                    </button>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
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
                                <button className="btn btn-link p-0" onClick={() => navigate(`edit-contact/${contact.uid}`)}
                                        title="Edit">
                                    <PencilSquare className="text-primary me-2"/>
                                </button>
                                <button className="btn btn-link p-0" onClick={() => deleteContact(contact.email)}
                                        title="Delete">
                                    <TrashFill className="text-danger"/>
                                </button>
                            </td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
            <div className="row g-0 align-items-center pb-4">
                <div className="col-sm-6">
                    <div><p className="mb-sm-0">Showing 1 to 10 of 57 entries</p></div>
                </div>
                <div className="col-sm-6">
                    <div className="float-sm-end">
                        <ul className="pagination mb-sm-0">
                            <li className="page-item disabled">
                                <a href="#" className="page-link"><i className="mdi mdi-chevron-left"></i></a>
                            </li>
                            <li className="page-item active"><a href="#" className="page-link">1</a></li>
                            <li className="page-item"><a href="#" className="page-link">2</a></li>
                            <li className="page-item"><a href="#" className="page-link">3</a></li>
                            <li className="page-item"><a href="#" className="page-link">4</a></li>
                            <li className="page-item"><a href="#" className="page-link">5</a></li>
                            <li className="page-item">
                                <a href="#" className="page-link"><i className="mdi mdi-chevron-right"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>)
};

export default MainPage;