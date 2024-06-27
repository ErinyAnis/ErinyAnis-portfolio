import { MdOutlineMail } from "react-icons/md";
import { PiMessengerLogo } from "react-icons/pi";
import { IoLogoWhatsapp } from "react-icons/io5";
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
                href="https://wa.me/201227523105"
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
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
