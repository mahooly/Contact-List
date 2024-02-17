import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const ContactForm = ({initialContact, errors, setErrors, onSubmit, buttonText, isEditable}) => {
    const [contact, setContact] = useState(initialContact || {
        email: '',
        firstName: '',
        lastName: ''
    });

    useEffect(() => {
        setContact(initialContact);
    }, [initialContact]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setContact(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validate = () => {
        let tempErrors = {};
        tempErrors.email = contact.email ? "" : "Email is required.";
        if (!contact.firstName) {
            tempErrors.firstName = "First name is required.";
        } else if (contact.firstName.length < 3) {
            tempErrors.firstName = "First name must be at least 3 characters.";
        } else if (contact.firstName.length > 25) {
            tempErrors.firstName = "First name must be at most 25 characters.";
        } else {
            tempErrors.firstName = "";
        }

        if (contact.lastName && contact.lastName.length < 2) {
            tempErrors.lastName = "Last name must be at least 2 characters.";
        } else if (contact.lastName && contact.lastName.length > 30) {
            tempErrors.lastName = "Last name must be at most 30 characters.";
        } else {
            tempErrors.lastName = "";
        }
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === ""); // Returns true if all errors are empty, indicating no errors
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onSubmit(contact);
        }
    };

    const handleBlur = (e) => {
        const {name, value} = e.target;
        setContact({...contact, [name]: value.trim()});
    };

    let navigate = useNavigate();

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control"
                    value={contact.email}
                    onChange={handleChange}
                    readOnly={!isEditable}
                />
                {errors.email && <div className="text-danger">{errors.email}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input id="firstName" name="firstName" type="text" className="form-control"
                       value={contact.firstName} minLength="3" maxLength="25"
                       onChange={handleChange}
                       onBlur={handleBlur}/>
                {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input id="lastName" name="lastName" type="text" className="form-control"
                       value={contact.lastName}
                       minLength="2" maxLength="30" onChange={handleChange} onBlur={handleBlur}/>
                {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
            </div>
            <button type="submit" className="btn btn-primary me-2">{buttonText}</button>
            <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>Cancel
            </button>
        </form>);
};

export default ContactForm;
