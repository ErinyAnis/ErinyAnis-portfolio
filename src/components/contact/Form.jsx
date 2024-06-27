import { useRef, useState } from "react";
import emailjs from "emailjs-com";

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
      validationErrors.email = "please enter your email";
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
          "service_uizxztp",
          "template_gtahosm",
          form.current,
          "J7WDHcyjYEjmoM_k8"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setMessage("Your message has been sent successfully!");
            setError(null);
            form.current.reset(); // Reset the form fields
            setFormData({
              name: "",
              email: "",
              message: "",
            }); // Reset the form data state
          },
          (error) => {
            console.error("FAILED...", error);
            setError("Failed to send the message. Please try again later.");
            setMessage(null);
          }
        );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="d-flex flex-column gap-3"
      >
        <div>
          <label htmlFor="name">Full Name*</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message">Message*</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="7"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className="error-message">{errors.message}</p>}
        </div>
        <button type="submit" className="btn btn-primary m-auto">
          Send Message
        </button>
      </form>

      {message && <div className="alert alert-success mt-3">{message}</div>}
      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </>
  );
};

export default Form;
