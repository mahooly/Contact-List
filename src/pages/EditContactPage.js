import React, {useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import ContactForm from "../components/ContactForm";

const EditContactPage = () => {
    let { uid } = useParams();
    const existingContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    const contact = existingContacts.find((existingContact) => existingContact.uid === uid);
    let navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleSubmit = (updatedContact) => {
        const updatedContacts = existingContacts.map(contact =>
            contact.id === updatedContact.id ? updatedContact : contact
        );
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
        navigate('/');
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <h3 className="text-center mb-4">Edit Contact</h3>
                            <ContactForm
                                initialContact={contact}
                                errors={errors}
                                setErrors={setErrors}
                                onSubmit={handleSubmit}
                                buttonText="Edit Contact"
                                isEditable={false}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditContactPage;
