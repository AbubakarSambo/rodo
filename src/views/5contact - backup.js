import React, { Component } from "react";
import contactrightbg from "./../images/thank-you-bg.jpg";
import signed from "./../images/signature-white.jpg";

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="container">
          <div className="row">
            <div id="contact-left" className="col-md-6 push-right">
              <div className="row">
                <div className="container">
                  <div className="text-ml title brush cr">BE PART OF OUR JOURNEY</div>

                  <div className="text-sm font-weight-bold sub-title cb">
                    Stay tuned and subscribe <br />
                    to receive our latest updatses.
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="container">
                  <form className="contact-form">
                    <div className="cr v-text text-s hidden-md hidden-sm"> CONTACT US </div>
                    <input type="tel" name="phone" placeholder="Phone number" required="required" />
                    <input type="email" name="email" placeholder="Email address" required="required" />
                    <textarea name="message" placeholder="Message (Optional)" />

                    <input type="submit" value="SUBMIT" />
                  </form>
                </div>
              </div>
            </div>

            <div id="contact-right" className="col-md-6 push-right" style={{ backgroundImage: "url(" + contactrightbg + ") " }}>
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
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
