import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountCreationStep from '../components/AccountCreationStep.jsx';
import SuccessStep from '../components/SuccessStep.jsx';
import "../index.css"; // Make sure your CSS is imported

function DoctorSignup() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1
        firstName: '', 
        lastName: '', 
        email: '', 
        mobile: '', // Matches frontend form
        password: '',
        confirmPassword: '',
        
        // Step 2
        title: 'Dr.', 
        regNumber: '', // 'medicalRegNumber' in validation
        council: '', // 'registeringCouncil' in validation
        regYear: '', // 'yearOfRegistration' in validation
        specializations: [], // Will be an array
        qualifications: [], // Will be an array
        yearsOfExperience: 0,
        clinicName: '',
        address1: '', 
        city: '', 
        state: '', 
        pincode: '',
        
        // File inputs and checkbox
        medLicense: null, // 'medicalLicense' in backend
        photoId: null, // 'governmentId' in backend
        profilePicture: null, 
        terms: false,
    });

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const nextStep = () => setStep(prev => prev + 1);

    const handleChange = (e) => {
        const { id, value, type, checked, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: type === 'checkbox' ? checked : files ? files[0] : value,
        }));
    };

    // This is the new submit function
    const handleSubmit = async () => {
        setError('');
        setIsLoading(true);

        // --- 1. Validate Passwords ---
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match.');
            setIsLoading(false);
            return;
        }

        // --- 2. Create FormData ---
        const data = new FormData();
        
        // Append all text fields matching the BACKEND validation
        data.append('firstName', formData.firstName);
        data.append('lastName', formData.lastName);
        data.append('email', formData.email);
        data.append('mobileNumber', formData.mobile); // [FIX] 'mobile' -> 'mobileNumber'
        data.append('password', formData.password);
        
        data.append('title', formData.title);
        data.append('medicalRegNumber', formData.regNumber); // [FIX] 'regNumber' -> 'medicalRegNumber'
        data.append('registeringCouncil', formData.council); // [FIX] 'council' -> 'registeringCouncil'
        data.append('yearOfRegistration', formData.regYear); // [FIX] 'regYear' -> 'yearOfRegistration'
        
        // [FIX] Convert comma-separated string to Array
        formData.specializations.split(',').forEach(spec => data.append('specializations', spec.trim()));
        formData.qualifications.split(',').forEach(qual => data.append('qualifications', qual.trim()));
        
        data.append('yearsOfExperience', formData.yearsOfExperience);
        data.append('clinicName', formData.clinicName);
        data.append('address1', formData.address1);
        data.append('city', formData.city);
        data.append('state', formData.state);
        data.append('pincode', formData.pincode);
        data.append('terms', formData.terms);
        
        // Append all file fields matching the BACKEND fileUpload.js
        data.append('medicalLicense', formData.medLicense); // [FIX] 'medLicense' -> 'medicalLicense'
        data.append('governmentId', formData.photoId); // [FIX] 'photoId' -> 'governmentId'
        data.append('profilePicture', formData.profilePicture);
        
        // --- 3. Send to Backend ---
        try {
            const response = await fetch('http://localhost:5000/api/auth/register/doctor', {
                method: 'POST',
                body: data, 
            });

            const resData = await response.json();
            if (!response.ok) {
                // Handle validation errors
                if (resData.errors) {
                    throw new Error(resData.errors.map(err => err.msg).join('\n'));
                }
                throw new Error(resData.message || 'Signup failed');
            }

            // If successful, go to the final step
            nextStep(); 
            
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
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
                        handleSubmit={handleSubmit} // Pass the submit function
                        handleChange={handleChange}
                        formData={formData}
                        progressWidth={getProgressWidth()}
                        isLoading={isLoading}
                        error={error} // Pass error state
                    />
                );
            case 3:
                // Send them to login after success
                return <SuccessStep navigateToDashboard={() => navigate('/login')} />;
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