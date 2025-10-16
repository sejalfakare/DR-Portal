import React, { useEffect } from 'react';

const SuccessStep = ({ navigateToDashboard }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            // This function is passed from DoctorSignup.jsx and will navigate to '/dashboard'
            navigateToDashboard();
        }, 3000); // 3-second delay

        // Cleanup function to prevent memory leaks
        return () => clearTimeout(timer);
    }, [navigateToDashboard]);

    return (
        <div className="form-step success-container">
            <div className="success-icon">✓</div>
            <h1>Profile Submitted Successfully!</h1>
            <p className="subtitle" style={{ maxWidth: '400px', margin: '1rem auto' }}>
                Our team will review your credentials and activate your account within 24-48 hours. We will notify you by email once your profile is live.
            </p>
        </div>
    );
};

export default SuccessStep;