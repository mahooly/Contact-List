import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="text-center">
                <h1>404 - Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
                <Link to="/" className="btn btn-primary">Go to Homepage</Link>
            </div>
        </div>
    );
};

export default NotFound;
