import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import "../styles/form.scss";
import ContactForm from "../components/ContactForm";

const CreateContactPage = () => {
    let navigate = useNavigate();

    const [contact, setContact] = useState({
        uid: Date.now().toString(36),
        email: '',
        firstName: '',
        lastName: ''
    });
    const [errors, setErrors] = useState({});

    const handleSubmit = (contact) => {
        setContact(contact);
        console.log(contact);
        const existingContacts = JSON.parse(localStorage.getItem('contacts')) || [];
        if (!existingContacts.find((existingContact) => existingContact.email === contact.email)) {
            existingContacts.push(contact);
            localStorage.setItem('contacts', JSON.stringify(existingContacts));
            navigate('/');
        } else {
            setErrors({...errors, email: "Contact with this email already exists"});
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <h3 className="text-center mb-4">Add Contact</h3>
                            <ContactForm
                                initialContact={contact}
                                errors={errors}
                                setErrors={setErrors}
                                onSubmit={handleSubmit}
                                buttonText="Add Contact"
                                isEditable={true}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateContactPage;
