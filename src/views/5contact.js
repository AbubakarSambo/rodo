import React from "react";
import contactrightbg from "../images/thank-you-bg.jpg";
import signed from "./../images/signature-white.png";

const Contact = () => {
  return (
    <section
      id="contact"
      className="banner style1 orient-right content-align-left image-position-right onload-image-fade-in onload-content-fade-right"
    >
      <div id="contact-left" className="content">
        <div className="row">
          <div className="container">
            <div className="text-ml title brush cr">BE PART OF OUR JOURNEY</div>

            <div className="text-sm font-weight-bold sub-title cb">
              Stay tuned and follow us <br />
              to receive our latest updates.
            </div>
          </div>
        </div>

        <div className="row">
          <div className="container">
            {/* <form className="contact-form"> */}
            {/* <div className="cr v-text text-s hidden-md hidden-sm"> CONTACT US </div>	  */}
            <div>
              <a href="mailto:talkto.proseeds@gmail.com" className="action-btn">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                &nbsp;Email Us
              </a>
            </div>
            <div>
              <a href="tel:+2348159329864" className="action-btn">
                <i className=" fa fas fa-phone" aria-hidden="true"></i>&nbsp;Call Us
              </a>
            </div>
            <div>
              <a href="https://wa.me/2348159329864" className="action-btn">
                <i className=" fa fas fa-whatsapp" aria-hidden="true"></i>
                &nbsp;Whatsapp Us
              </a>
            </div>
            <div className="contact-social-icon-container d-flex justify-content-around my-3">
              <div className="list-inline-item">
                <span className="cw">
                  <a href="https://www.facebook.com/rodozee">
                    <i className=" fa fas fa-facebook-f"></i>
                  </a>
                </span>
              </div>
              <div className="list-inline-item">
                <span className="cw">
                  <a href="https://www.twitter.com/_rodozee">
                    <i className=" fa fas fa-twitter"></i>
                  </a>
                </span>
              </div>
              <div className="list-inline-item">
                <span className="cw">
                  <a href="http://www.instagram.com/rodozee">
                    <i className=" fa fas fa-instagram"></i>
                  </a>
                </span>
              </div>
            </div>
            {/* </form> */}
          </div>
        </div>
      </div>

      <div id="contact-right" className="content" style={{ backgroundImage: "url(" + contactrightbg + ") " }}>
        <div className="container">
          <div className="row">
            <div className="text-ml title brush cw">THANK YOU!</div>

            <div className="text-sm font-weight-bold cw text">
              <p>Thank you so much for taking the time to visit our website. Everything we do, we do delicately, with you in mind. </p>
              <p>Because of this, we make sure that our products (and our website) are carefully crafted and cleaned to keep you satisfied. </p>
              For all the support you give us, big and small, we want to say, from Rodo to you, a very heartfelt Thank you. <br />
              <br />
              <div className="signature push-right">
                Signed
                <img src={signed} alt="Signature placeholder" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
