import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// We'll create these components in the next step
import AccountCreationStep from '../components/AccountCreationStep.jsx';
import SuccessStep from '../components/SuccessStep.jsx';

// We'll also create this CSS file
// This is the correct path
import "../index.css";

function DoctorSignup() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1
        firstName: '', lastName: '', email: '', mobile: '', password: '',
        confirmPassword: '',
        // Step 2
        title: 'Dr.', regNumber: '', council: '', regYear: '',
        specializations: '', qualifications: '', clinicName: '',
        address1: '', city: '', state: '',
        // File inputs and checkbox
        medLicense: null, photoId: null, profilePicture: null, terms: false,
    });

    const navigate = useNavigate();

    const nextStep = () => setStep(prev => prev + 1);

    const handleChange = (e) => {
        const { id, value, type, checked, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: type === 'checkbox' ? checked : files ? files[0] : value,
        }));
    };

    const getProgressWidth = () => {
        if (step === 1) return '33.33%';
        if (step === 2) return '66.66%';
        if (step === 3) return '100%';
        return '33.33%';
    };

    const renderStep = () => {
        switch (step) {
            case 1:
            case 2:
                return (
                    <AccountCreationStep
                        step={step}
                        nextStep={nextStep}
                        handleChange={handleChange}
                        formData={formData}
                        progressWidth={getProgressWidth()}
                    />
                );
            case 3:
                // Pass the navigate function to handle the redirect
                return <SuccessStep navigateToDashboard={() => navigate('/dashboard')} />;
            default:
                return <div>Form completed!</div>;
        }
    };

    return (
        <div className="signup-background">
            <div className="signup-container">
                {renderStep()}
            </div>
        </div>
    );
}

export default DoctorSignup;