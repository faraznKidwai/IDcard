import React, { useState } from 'react';
import '../styling/style.css';

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        idCardImage: null,
    });

    const [preview, setPreview] = useState(null);

    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({
                ...prev,
                idCardImage: file,
            }));
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formPayload = new FormData();
        formPayload.append('firstName', formData.firstName);
        formPayload.append('lastName', formData.lastName);
        formPayload.append('email', formData.email);
        formPayload.append('phone', formData.phone);
        formPayload.append('address', formData.address);
        formPayload.append('city', formData.city);
        formPayload.append('postalCode', formData.postalCode);
        formPayload.append('idCardImage', formData.idCardImage);

        try {
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                body: formPayload,
            });
            const result = await response.json();
            console.log('Success:', result);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h2>ID Card Form</h2>

            <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleTextChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleTextChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleTextChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleTextChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="address">Address *</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleTextChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="city">City *</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleTextChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="postalCode">Postal Code *</label>
                <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleTextChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="idCardImage">ID Card Image *</label>
                <input
                    type="file"
                    id="idCardImage"
                    name="idCardImage"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                />
                {preview && <img src={preview} alt="Preview" className="image-preview" />}
            </div>

            <button type="submit" className="submit-btn">Submit</button>
        </form>
    );
};

export default Form;