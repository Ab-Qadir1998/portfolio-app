import React from "react";
import "./Contact.css";
import TitleHeading from "../TitleHeading/TitleHeading";
import { ImLocation2 } from "react-icons/im";
import { BsFillEnvelopeOpenFill } from "react-icons/bs";
import { FaPhoneVolume } from "react-icons/fa";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dn8wogf",
        "template_ado8b1c",
        form.current,
        "user_EG8ZTkuiusyZG2JQQgB5r"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact__wrapper">
      <TitleHeading coloredTitle="Get In" title="Touch" backTitle="Contact" />
      <div className="contact__info">
        <div className="info">
          <h3 className="app__headsidetext">DON'T BE SHY !</h3>
          <p className="p__poppins">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <ul className="contact__info-list">
            <li>
              <ImLocation2 /> <span>Karachi, Pakistan</span>
            </li>
            <li>
              <BsFillEnvelopeOpenFill />{" "}
              <span>
                <a href="mailto:qadir1998.khan@gmail.com">
                  qadir1998.khan@gmail.com
                </a>
              </span>
            </li>
            <li>
              <FaPhoneVolume />{" "}
              <span>
                <a href="tel:03020324082">03020324082</a>
              </span>
            </li>
          </ul>
        </div>
        <div className="contact__form">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-row">
              <input type="text" placeholder="Your Name" name="user_name" />
              <input type="email" placeholder="Your Email" name="user_email" />
            </div>
            <div>
              <input type="text" placeholder="Subject" />
            </div>
            <div>
              <textarea placeholder="Your Message" name="message"></textarea>
            </div>
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
