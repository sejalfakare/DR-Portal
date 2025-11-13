import React, { useState } from 'react'; // 1. Import useState for local error

// 2. Accept the new props from the parent (DoctorSignup.jsx)
const AccountCreationStep = ({ 
    step, 
    nextStep, 
    handleChange, 
    formData, 
    progressWidth,
    handleSubmit,  // The REAL submit function from the parent
    isLoading,     // The loading state from the parent
    error          // The error message from the parent
}) => {
    
    // 3. We'll use this for a local password-match error
    const [localError, setLocalError] = useState('');

    // 4. This new function handles the Step 1 button
    const handleStep1Submit = () => {
        // Simple password match validation
        if (formData.password !== formData.confirmPassword) {
            setLocalError('Passwords do not match.');
            return; // Stop
        }
        // If passwords match, clear local error and go to next step
        setLocalError('');
        nextStep();
    };

    const renderStepContent = () => {
        if (step === 1) {
            return (
                <>
                    <h1>Join as a Healthcare Professional</h1>
                    <p className="subtitle">Step 1 of 3: Create Your Account</p>
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" className="form-input" required value={formData.firstName} onChange={handleChange} />
                        </div>
                        {/* ... (all your other Step 1 fields are perfect) ... */}
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" className="form-input" required value={formData.lastName} onChange={handleChange} />
                        </div>
                        <div className="form-group full-width">
                            <label htmlFor="email">Professional Email Address</label>
                            <input type="email" id="email" className="form-input" required value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="form-group full-width">
                            <label htmlFor="mobile">Mobile Number</label>
                            <input type="tel" id="mobile" className="form-input" required value={formData.mobile} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Create Password</label>
                            <input type="password" id="password" className="form-input" required value={formData.password} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" id="confirmPassword" className="form-input" required value={formData.confirmPassword} onChange={handleChange} />
                        </div>
                    </div>

                    {/* 5. This button NO LONGER submits the form. It's a 'button'. */}
                    <button 
                        type="button" 
                        className="btn btn-primary" 
                        style={{ marginTop: '1rem' }}
                        onClick={handleStep1Submit} // It calls our new Step 1 function
                    >
                        Create Account & Verify Email
                    </button>

                    {/* Show local password error */}
                    {localError && <p className="signup-error-message" style={{marginTop: '1rem'}}>{localError}</p>}
                </>
            );
        }

        if (step === 2) {
            return (
                <>
                    <h1>Complete Your Professional Profile</h1>
                    <p className="subtitle">Step 2 of 3: Credentials & Practice Info</p>
                    
                    {/* ... (All your fieldsets and fields are perfect) ... */}
                    <fieldset className="form-section">
                        <legend className="section-title">Professional Credentials</legend>
                        <div className="form-grid">
                             {/* ... (title, regNumber, council, regYear, specializations, qualifications) ... */}
                             {/* ... these are all correct ... */}
                        </div>
                    </fieldset>
                    <fieldset className="form-section">
                        <legend className="section-title">Practice Information</legend>
                        <div className="form-grid">
                             {/* ... (clinicName, address1, city, state) ... */}
                             {/* ... these are all correct ... */}
                        </div>
                    </fieldset>

                    <fieldset className="form-section">
                        <legend className="section-title">Document Upload</legend>
                        <p className="upload-info">Allowed file types: PDF, JPG, PNG. Max size: 5MB.</p>
                        <div className="form-grid">
                            <div className="form-group">
                                <label className="upload-label" htmlFor="medicalLicense">
                                    <span className="upload-icon">📄</span> Upload Medical License
                                    <span className="upload-text">{formData.medicalLicense ? formData.medicalLicense.name : 'Click to select a file'}</span>
                                    {/* 6. CRITICAL FIX: id must match backend ('medicalLicense') */}
                                    <input type="file" id="medicalLicense" className="file-input" required onChange={handleChange} />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="upload-label" htmlFor="governmentId">
                                    <span className="upload-icon">🆔</span> Upload Government Photo ID
                                    <span className="upload-text">{formData.governmentId ? formData.governmentId.name : 'Click to select a file'}</span>
                                    {/* 7. CRITICAL FIX: id must match backend ('governmentId') */}
                                    <input type="file" id="governmentId" className="file-input" required onChange={handleChange} />
                                </label>
                            </div>
                        </div>
                    </fieldset>
                    
                    {/* ... (profilePicture, terms checkbox) ... */}
                    
                    {/* 8. This button is now smart. It also is NOT a submit type. */}
                    <button 
                        type="button" 
                        className="btn btn-primary" 
                        style={{ marginTop: '1.5rem' }}
                        onClick={handleSubmit} // Calls the PARENT's submit function
                        disabled={isLoading} // Disables when loading
                    >
                        {isLoading ? 'Submitting...' : 'Submit for Verification'}
                    </button>
                </>
            );
        }
        return null; // Should not happen
    };

    return (
        <div className="form-step">
            <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: progressWidth }}></div>
            </div>
            
            {/* 9. We remove the onSubmit from the form tag */}
            <form>
                {renderStepContent()}
            </form>

            {/* 10. This shows the GLOBAL error from the parent (e.g., from backend) */}
            {error && (
                <p className="signup-error-message" style={{marginTop: '1rem'}}>
                    {error}
                </p>
            )}
        </div>
    );
};

export default AccountCreationStep;