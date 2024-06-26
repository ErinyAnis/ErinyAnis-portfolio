import { useRef, useState } from 'react';
import { MdOutlineMail } from "react-icons/md";
import { PiMessengerLogo } from "react-icons/pi";
import { IoLogoWhatsapp } from "react-icons/io5";
import emailjs from 'emailjs-com';

import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uizxztp', 'template_gtahosm', form.current, 'J7WDHcyjYEjmoM_k8')
    .then(
      (response) => {
        setMessage('Your message has been sent successfully!');
        setError(null);
        form.current.reset(); // Reset the form fields
      },
      (error) => {
        setError('Failed to send the message. Please try again later.');
        setMessage(null);
      }
    );
  };
  return (
    <section id="contact">
      <div className="container">
        <div className="main-title text-center">
          <h5>Get In Touch</h5>
          <h2>Contact Me</h2>
        </div>

        <div className="contact__container row g-4 gx-lg-5">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="contact__options d-flex flex-column gap-3 flex-wrap">
              <a
                href="mailto:erinyanis88@gmail.com"
                target="_blank"
                className="contact__option"
                rel="noreferrer"
              >
                <article>
                  <MdOutlineMail className="contact__option-icon" />
                  <h4>Email</h4>
                  <h5>erinyanis88@gmail.com</h5>
                  <div className="link">Send a message</div>
                </article>
              </a>

              <a
                href="https://m.me/eriny.anis"
                target="_blank"
                className="contact__option"
                rel="noreferrer"
              >
                <article>
                  <PiMessengerLogo className="contact__option-icon" />
                  <h4>Messenger</h4>
                  <h5>Eriny Anis</h5>
                  <div className="link">Send a message</div>
                </article>
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=201227523105"
                target="_blank"
                className="contact__option"
                rel="noreferrer"
              >
                <article>
                  <IoLogoWhatsapp className="contact__option-icon" />
                  <h4>WhatsApp</h4>
                  <h5>+201227523105</h5>
                  <div className="link">Send a message</div>
                </article>
              </a>
            </div>
          </div>

          <div className="col-lg-8">
            <form ref={form} onSubmit={sendEmail} className="d-flex flex-column gap-3">
              <div>
                <label htmlFor="name">Full Name*</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
              <label htmlFor="message">Message*</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="7"
                placeholder="Message"
                required
              ></textarea>
              </div>
              <button type="submit" className="btn btn-primary m-auto">
                Send Message
              </button>
            </form>

            {message && <div className="alert alert-success mt-3">{message}</div>}
            {error && <div className="alert alert-danger mt-3">{error}</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;