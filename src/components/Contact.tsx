import React, { useState, useEffect } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '../context/active-section-context';

const ContactForm: React.FC = () => {

    const { ref, inView } = useInView();
    const { setActiveSection } = useActiveSectionContext();

    useEffect(() => {
        if (inView) {
            setActiveSection('Contact');
        }
    }, [inView, setActiveSection]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Send the email using Email.js
        try {
            const templateParams = {
                from_name: formData.name,
                to_email: 'v.ferna.saez@gmail.com', // Replace with your email address
                message: formData.message,
            };
            console.log(templateParams);

            const response = await emailjs.send(
                'default_service',
                'template_5acvm8a',
                templateParams,
                'VH8WS39dyhIX2tU6R');

            console.log('Email sent successfully!', response);
            // Optionally, you can reset the form after successful submission
            setFormData({
                name: '',
                email: '',
                message: '',
            });
        } catch (error) {
            console.error('Error sending email:', error);
        }
    }


    return (
        <motion.section
            id='contact'
            ref={ref}
            className='grid w-full text-center bg-slate-100 px-12 sm:px-96 '
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <div className='grid pb-12 gap-4'>
                <h1 className="font-semibold pb-9">Kontakt aufnehmen </h1>
                <p className='text-slate-700'>
                    Bitte kontaktieren Sie uns direkt unter<a className='underline' href='mailto:v.ferna.saez@gmail.com'> v.ferna.saez@gmail.com</a> oder über dieses Formular.
                </p>
                <form
                    className='grid pt-12 pb-12 gap-4 text-center bg-slate-100 '
                    onSubmit={handleSubmit}>

                    <input
                        className='h-14 px-4 rounded-lg border border-slate-950 transition-all'
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        maxLength={500}
                        placeholder='Your name'
                    />
                    <input
                        className='h-14 px-4 rounded-lg border border-slate-950 transition-all'
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        maxLength={500}
                        placeholder='Your email'
                    />
                    <textarea className='h-52 py-2 px-4 my-3 rounded-lg border border-slate-950  transition-all'
                        placeholder='Your message'
                        required
                        maxLength={5000}
                        name='message'
                        value={formData.message}
                        onChange={handleChange} />

                    <button
                        type='submit'
                        className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-slate-900 text-slate-50 rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-slate-950 '
                    >
                        Submit{' '} <FaPaperPlane className='group-hover:translate-x-1 group-hover:-translate-y-1 text-xs opacity-70 transition-all' />{' '}
                    </button>
                </form>
            </div>
        </motion.section>
    );
};

export default ContactForm