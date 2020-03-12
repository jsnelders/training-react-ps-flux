import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage()
{
    return (
        <>
            <div className="jumbotron">
                <h1>Page Not Found</h1>
            </div>

            <p>
                <Link to="/" className="btn btn-primary">Back to Home</Link>
            </p>
        </>
    );
}

export default NotFoundPage;