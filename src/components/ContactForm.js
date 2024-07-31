import React, { useState } from 'react';
import * as contactFormStyle from './styles/ContactForm.module.scss';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        message: '',
        subject: '', // Add a new input text for subject
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Convert formData object to URL-encoded string
        const formBody = Object.keys(formData).map(key =>
            encodeURIComponent(key) + '=' + encodeURIComponent(formData[key])
        ).join('&');

        try {
            const response = await fetch('/contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formBody,
            });

            const responseText = await response.text();
            console.log('Response:', responseText);

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({
                    name: '',
                    email: '',
                    number: '',
                    message: '',
                    subject: '', // Reset the subject field
                });
                setError(null);
            } else {
                setIsSubmitted(false);
                setError('Failed to send message');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setIsSubmitted(false);
            setError('Failed to send message');
        }
    };

    return (
        <form className={contactFormStyle.contact_form} onSubmit={handleSubmit}>
            <input 
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                className={contactFormStyle.half}
                value={formData.email}
                onChange={handleChange}
                required
            />
            <input
                type="tel"
                name="number"
                placeholder="Contact No."
                className={contactFormStyle.half}
                value={formData.number}
                onChange={handleChange}
                required
            />
            <input 
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
            />
            <textarea 
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
            ></textarea>
            <button type="submit">SEND</button>
            {isSubmitted && <p>Thank you for your message!</p>}
            {error && <p>{error}</p>}
        </form>
    );
}

export default ContactForm;
