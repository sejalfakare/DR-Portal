import React from 'react';

const SuccessStep = ({ navigateToDashboard }) => {
    return (
        <div className="success-step-container">
            <div className="success-icon">✅</div>
            <h1>Verification Submitted!</h1>
            <p>
                Thank you for registering. Your profile has been submitted to our
                admin team for verification.
            </p>
            <p>
                You will receive an email once your account is approved.
                You can then log in.
            </p>
            <button 
                onClick={navigateToDashboard} // This prop comes from the parent
                className="btn btn-primary"
                style={{marginTop: '2rem'}}
            >
                Back to Login
            </button>
        </div>
    );
};

export default SuccessStep;