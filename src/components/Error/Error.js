import React from 'react';

const Error = () => {
    const styles = {
        border: '1px solid #ced4da',
        padding: '4rem',
        background: '#F9A51A',
        borderRadius: '1rem'
    }
    return (
        <div className="error text-center mt-5">
            <div className="container">
                <div className="col-lg-8 mx-auto col-md-12">
                    <div className="content-area" style={styles}>
                        <h1 style={{ fontSize: '5rem', fontWeight: 'bold' }}>404</h1>
                        <h4>Page not found</h4>
                        <p>The Page you are looking for doesn't exist an other error occurred.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;