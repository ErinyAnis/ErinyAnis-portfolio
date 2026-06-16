import { MdOutlineMail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import Form from "./Form";

import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="main-title text-center">
          <h5>Get In Touch</h5>
          <h2>Contact Me</h2>
        </div>

        <div className="contact__container row g-4 gx-lg-5">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="contact__options d-flex flex-column gap-3">
              <a
                href="mailto:erinyanis88@gmail.com"
                target="_blank"
                className="contact__option"
                rel="noreferrer"
              >
                <div className="contact__option-icon-box">
                  <MdOutlineMail />
                </div>
                <div className="contact__option-text">
                  <h4>Email</h4>
                  <h5>erinyanis88@gmail.com</h5>
                </div>
              </a>

              <a
                href="https://wa.me/201227523105"
                target="_blank"
                className="contact__option"
                rel="noreferrer"
              >
                <div className="contact__option-icon-box">
                  <IoLogoWhatsapp />
                </div>
                <div className="contact__option-text">
                  <h4>WhatsApp</h4>
                  <h5>+20 122 752 3105</h5>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/eriny-anis"
                target="_blank"
                className="contact__option"
                rel="noreferrer"
              >
                <div className="contact__option-icon-box">
                  <BsLinkedin />
                </div>
                <div className="contact__option-text">
                  <h4>LinkedIn</h4>
                  <h5>Eriny Anis</h5>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-8">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
