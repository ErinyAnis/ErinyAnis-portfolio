import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = "Please enter your name";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Please enter your email";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      validationErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      validationErrors.message = "Please enter your message";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .sendForm(
          "service_o1ml34u",
          "template_jed0o0p",
          form.current,
          "YC97DvqlHHu8EoXst",
        )
        .then(
          () => {
            setMessage("Your message has been sent successfully!");
            setError(null);
            setFormData({ name: "", email: "", message: "" });
          },
          () => {
            setError("Failed to send the message. Please try again later.");
            setMessage(null);
          },
        );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="contact__form-card">
      <form ref={form} onSubmit={sendEmail} className="contact__form">
        <div className="form__row">
          <input
            type="text"
            name="name"
            id="name"
            placeholder=" "
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="name">Full Name*</label>
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        <div className="form__row">
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" "
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="email">Email*</label>
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form__row form__row--grow">
          <textarea
            name="message"
            id="message"
            placeholder=" "
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <label htmlFor="message">Message*</label>
          {errors.message && <p className="error-message">{errors.message}</p>}
        </div>

        <button type="submit" className="form__submit">
          Send Message
        </button>
        {message && <div className="alert alert-success mt-3">{message}</div>}
        {error && <div className="alert alert-danger mt-3">{error}</div>}
      </form>
    </div>
  );
};

export default Form;
