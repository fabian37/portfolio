import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './styles/Contact.scss';

interface FormValues {
	name: string;
	email: string;
	message: string;
}

interface FormErrors {
	name: string;
	email: string;
	message: string;
}

const Contact: React.FC = () => {
	const [values, setValues] = useState<FormValues>({
		name: '',
		email: '',
		message: '',
	});
	const [errors, setErrors] = useState<FormErrors>({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = event.target;
		setValues({ ...values, [name]: value });
		setErrors(validateForm({ ...values, [name]: value }));
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const validationErrors = validateForm(values);
		setErrors(validationErrors);
		if (Object.values(errors).some((value) => value.length !== 0)) {
			toast.error('You have errors, please fill in the fields.');
		} else if (values.name == '') {
			toast.error('You have errors, please fill in the fields.');
		} else {
			emailjs
				.send(
					import.meta.env.VITE_SERVICE_ID,
					import.meta.env.VITE_TEMPLATE_ID,
					{
						name: values.name,
						email: values.email,
						message: values.message,
					},
					import.meta.env.VITE_PUBLIC_KEY
				)
				.then((response) => {
					console.log(response);
					toast.success('Your message has been sent.');
				})
				.catch((error) => {
					console.log(error);
					toast.error(
						'There was an error sending your message. Please try again.'
					);
				});
		}
	};

	const validateForm = (values: FormValues): FormErrors => {
		let errors: FormErrors = { name: '', email: '', message: '' };
		if (!values.name) {
			errors.name = 'Please enter your name.';
		}
		if (!values.email) {
			errors.email = 'Please enter your email address.';
		} else if (!/\S+@\S+\.\S+/.test(values.email)) {
			errors.email = 'Please enter a valid email address.';
		}
		if (!values.message) {
			errors.message = 'Please enter a message.';
		}
		return errors;
	};

	return (
		<section className="contact-container" id="contact">
			<h2 className="contact-container__title">
				What's Next?
				<span className="contact-container__title contact-container__title--main">
					Get In Touch
				</span>
			</h2>
			<div className="contact-container__description">
				<p>
					Dropping a line to say hello, ask for my resume or see if we can build
					something amazing together? I'd love to hear from you. Fill in your
					info in the form below and I look forward to hearing from you!
				</p>
			</div>
			<form className="contact-container__form" onSubmit={handleSubmit}>
				<label htmlFor="name">
					Name:{' '}
					{errors.name && (
						<span className="contact-container__error">{errors.name}</span>
					)}
				</label>
				<input
					className={`${
						errors.name && 'contact-container__input--error'
					} contact-container__input`}
					type="text"
					id="name"
					name="name"
					value={values.name}
					onChange={handleChange}
					placeholder="name"
				/>
				<label htmlFor="email">
					Email:{' '}
					{errors.email && (
						<span className="contact-container__error">{errors.email}</span>
					)}
				</label>
				<input
					className={`${
						errors.email && 'contact-container__input--error'
					} contact-container__input`}
					type="text"
					id="email"
					name="email"
					value={values.email}
					onChange={handleChange}
					placeholder="email"
				/>
				<label htmlFor="message">
					Message:{' '}
					{errors.message && (
						<span className="contact-container__error">{errors.message}</span>
					)}
				</label>
				<textarea
					className={`${
						errors.email && 'contact-container__input--error'
					} contact-container__input contact-container__input--message`}
					id="message"
					name="message"
					placeholder="Enter your message..."
					onChange={handleChange}
					value={values.message}
				></textarea>
				<input type="submit" className="contact-container__btn" />
			</form>
			<Toaster toastOptions={{ duration: 4000 }} />
		</section>
	);
};

export default Contact;
