import styled from "styled-components";
import LightenDarkenColor from "../utility/LightenDarken";
import { useState } from "react";
import { send } from "emailjs-com";
import { emailSettings } from "../config/emailSettings";

const ContactSection = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding-bottom: 4.8rem 0 12.8rem 0;
  margin-bottom: 9.6rem;
  @media (max-width: 71em) {
    margin: 0 3.2rem;
  }
`;

const Contact = styled.div`
  padding: 4.8rem 6.4rem 6.4rem 6.4rem;
  background-color: ${({ theme }) => theme.primary};
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.15);
  border-radius: 11px;
  background-image: linear-gradient(
    to right bottom,
    ${({ theme }) => theme.primary},
    ${({ theme }) => LightenDarkenColor(theme.secondary, -20)}
  );
  overflow: hidden;
  *:focus {
    outline: none;
    box-shadow: 0 0 0 0.8rem rgba(253, 242, 233, 0.5);
  }
`;

const ContactTextBox = styled.div`
  color: ${({ theme }) => theme.alternateText};
`;

const ContactHeading = styled.h1`
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.5px;
  font-size: 4.4rem;
  line-height: 1.2;
  color: ${({ theme }) => theme.alternateText};
  margin-bottom: 5.2rem;
  text-align: center;
`;

const ContactForm = styled.form`
  label {
    display: block;
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 1.2rem;
  }
  input,
  select {
    width: 100%;
    padding: 1.2rem;
    font-size: 1.8rem;
    font-family: inherit;
    color: ${({ theme }) => theme.alternateText};
    border: none;
    background-color: ${({ theme }) => theme.alternateText};
    border-radius: 9px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
  input::placeholder {
    color: #aaa;
  }
  textarea::placeholder {
    color: #aaa;
  }
`;

const ContactDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3.2rem;
  row-gap: 2.4rem;
  margin-bottom: 2.2rem;
  label {
    color: ${({ theme }) => theme.alternateText};
  }
  @media (max-width: 59em) {
    grid-template-columns: 1fr;
  }
`;

const ContactText = styled.textarea`
  height: 12.6rem;
  width: 100%;
  padding: 1.2rem;
  font-size: 1.8rem;
  font-family: inherit;
  color: ${({ theme }) => theme.alternateText};
  border: none;
  background-color: ${({ theme }) => theme.alternateText};
  border-radius: 9px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const MessageDetails = styled.div`
  margin-bottom: 2.2rem;
  label {
    color: ${({ theme }) => theme.alternateText};
  }
`;

const SubmitButton = styled.button`
  display: inline-block;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
  padding: 1.6rem 3.2rem;
  border-radius: 9px;
  border: none;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.3s;
  background-color: ${({ theme }) => theme.tertiary};
  color: ${({ theme }) => theme.alternateText};
  align-self: end;
  padding: 1.2rem;
`;

export default function ContactUs() {
  const [fullName, setFullName] = useState("");
  const [replyEmail, setReplyEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    var toSend = {
      from_name: fullName,
      message: message,
      reply_to: replyEmail,
      to_name: emailSettings.appName,
      accessToken: emailSettings.accessToken,
    };
    send(
      emailSettings.serviceId,
      emailSettings.templateId,
      toSend,
      emailSettings.userId
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };
  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };
  const handleReplyEmailChange = (e) => {
    setReplyEmail(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <>
      <ContactSection id="contact">
        <Contact>
          <ContactTextBox>
            <ContactHeading>Contact Us</ContactHeading>
          </ContactTextBox>
          <ContactForm onSubmit={onSubmit}>
            <ContactDetails>
              <div>
                <label for="fullname">Full Name</label>
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  placeholder="John Smith"
                  onChange={handleFullNameChange}
                  value={fullName}
                  required
                />
              </div>
              <div>
                <label for="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="me@example.com"
                  onChange={handleReplyEmailChange}
                  value={replyEmail}
                  required
                />
              </div>
            </ContactDetails>
            <MessageDetails>
              <label for="message">Message</label>
              <ContactText
                id="message"
                name="message"
                placeholder="How can we help?"
                onChange={handleMessageChange}
                value={message}
              ></ContactText>
            </MessageDetails>
            <SubmitButton type="submit">Submit</SubmitButton>
          </ContactForm>
        </Contact>
      </ContactSection>
    </>
  );
}
