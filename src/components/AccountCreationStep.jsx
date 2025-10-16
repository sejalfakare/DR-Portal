import React from 'react';

const AccountCreationStep = ({ step, nextStep, handleChange, formData, progressWidth }) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
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
                    <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                        Create Account & Verify Email
                    </button>
                </>
            );
        }

        if (step === 2) {
            return (
                <>
                    <h1>Complete Your Professional Profile</h1>
                    <p className="subtitle">Step 2 of 3: Credentials & Practice Info</p>
                     <fieldset className="form-section">
                        <legend className="section-title">Professional Credentials</legend>
                        <div className="form-grid">
                            <div className="form-group"><label htmlFor="title">Title</label><select id="title" className="form-select" required value={formData.title} onChange={handleChange}><option value="Dr.">Dr.</option><option value="Prof.">Prof.</option></select></div>
                            <div className="form-group"><label htmlFor="regNumber">NMC / State Registration No.</label><input type="text" id="regNumber" className="form-input" required value={formData.regNumber} onChange={handleChange} /></div>
                            <div className="form-group"><label htmlFor="council">Registering Council</label><input type="text" id="council" className="form-input" placeholder="e.g., Maharashtra Medical Council" required value={formData.council} onChange={handleChange}/></div>
                            <div className="form-group"><label htmlFor="regYear">Year of Registration</label><input type="number" id="regYear" className="form-input" placeholder="YYYY" min="1950" max="2025" required value={formData.regYear} onChange={handleChange}/></div>
                            <div className="form-group full-width"><label htmlFor="specializations">Specialization(s)</label><input type="text" id="specializations" className="form-input" placeholder="e.g., Cardiology, Dermatology" required value={formData.specializations} onChange={handleChange}/></div>
                            <div className="form-group full-width"><label htmlFor="qualifications">Qualifications / Degrees</label><input type="text" id="qualifications" className="form-input" placeholder="e.g., MBBS, MD, DM" required value={formData.qualifications} onChange={handleChange}/></div>
                        </div>
                    </fieldset>
                    <fieldset className="form-section">
                        <legend className="section-title">Information</legend>
                        <div className="form-grid">
                            <div className="form-group full-width"><label htmlFor="clinicName">Clinic/Hospital Name</label><input type="text" id="clinicName" className="form-input" required value={formData.clinicName} onChange={handleChange}/></div>
                            <div className="form-group full-width"><label htmlFor="address1">Address Line 1</label><input type="text" id="address1" className="form-input" required value={formData.address1} onChange={handleChange}/></div>
                            <div className="form-group"><label htmlFor="city">City</label><input type="text" id="city" className="form-input" required value={formData.city} onChange={handleChange}/></div>
                            <div className="form-group"><label htmlFor="state">State</label><input type="text" id="state" className="form-input" required value={formData.state} onChange={handleChange}/></div>
                        </div>
                    </fieldset>
                    <fieldset className="form-section">
                        <legend className="section-title">Document Upload</legend>
                        <p className="upload-info">Allowed file types: PDF, JPG, PNG. Max size: 5MB.</p>
                        <div className="form-grid">
                            <div className="form-group"><label className="upload-label" htmlFor="medLicense"><span className="upload-icon">📄</span> Upload Medical License <span className="upload-text">{formData.medLicense ? formData.medLicense.name : 'Click to select file'}</span><input type="file" id="medLicense" className="file-input" required onChange={handleChange} /></label></div>
                            <div className="form-group"><label className="upload-label" htmlFor="photoId"><span className="upload-icon">🆔</span> Upload Government Photo ID <span className="upload-text">{formData.photoId ? formData.photoId.name : 'Click to select file'}</span><input type="file" id="photoId" className="file-input" required onChange={handleChange} /></label></div>
                        </div>
                    </fieldset>
                    <div className="form-group full-width profile-picture-group"><label htmlFor="profilePicture">Profile Picture (Optional)</label><input type="file" id="profilePicture" className="form-input" onChange={handleChange} /></div>
                    <div className="checkbox-group"><input type="checkbox" id="terms" required checked={formData.terms} onChange={handleChange} /><label htmlFor="terms">I agree to the <a href="/#">Terms of Service</a> and <a href="/#">Privacy Policy</a>.</label></div>
                    <button type="submit" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>Submit for Verification</button>
                </>
            );
        }
        return null;
    };

    return (
        <div className="form-step">
            <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: progressWidth }}></div>
            </div>
            <form onSubmit={handleSubmit}>
                {renderStepContent()}
            </form>
        </div>
    );
};

export default AccountCreationStep;