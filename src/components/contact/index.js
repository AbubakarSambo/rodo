import React from "react";
import "./contact.scss";
import styled from "styled-components";
import signature from "../../assets/signature.png";

const Input = styled.input`
  line-height: 2rem;
  width: 100%;
  padding: 1rem;
  border-color: #c04355;
  font-size: 1.3rem;
  margin: 1rem 0rem;
`;
const Textarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border-color: #c04355;
  font-size: 1.3rem;
  margin: 1rem 0rem;
`;
const Button = styled.div`
  background-color: #c04355;
  width: 8rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  color: #fff;
  text-transform: uppercase;
`;

const Contact = () => {
  return (
    <div className="contact">
      <div className="col1">
        <h2>Thank you</h2>
        <p>
          <span className="letter">
            Thank you so much for taking the time to visit our website.
            Everything we do, we do delicately, with you in mind.
          </span>
          <br />
          <span className="letter">
            Because of this, we make sure that our products (and our website)
            are carefully crafted and cleaned to keep you satisfied.
          </span>
          <br />
          <span className="letter">
            For all the support you give us, big and small, we want to say, from
            Rodo to you, a very heartfelt Thank you.
          </span>
          <br />
          Signed
        </p>
        <img src={signature} alt="Rodo signature" width={150} />
      </div>
      <div className="col2">
        <h3>Be a part of our journey</h3>
        <Input placeholder="Name" />
        <Input placeholder="Email Address" />
        <Textarea name="message" rows="10" cols="30" placeholder="Message" />
        <Button> Submit</Button>
      </div>
    </div>
  );
};

export default Contact;
