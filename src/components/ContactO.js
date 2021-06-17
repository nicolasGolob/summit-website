import React, { useState } from 'react';
import './ContactForm.css';



const ContactForm = () => {
  const [name, setName] = useState("");
  //we have taken the name of the variables from the model of 'email-Js'
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    //a preventDefault( ) -> so that everything is well put in the states

    sendFeedback("template_z9lhp9i", {
      //this is what we send to email js
      // its like a name : name
      name,
      company,
      phone,
      email,
      message,
    });
  };

  const sendFeedback = (templateId, variables) => {
    //the function 'sendFeedack' will send the data and it will be updated with our state
    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        console.log('success !');
        //we make an asynchronous function if it works then 'success'
        //and we reset everything to zero
        setName("");
        setCompany("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
      .catch(
        //if there is a problem we catch and display this message
        (err) =>
          document.querySelector('.form-message').innerHTML =
            "An error has occurred, please try again.")
  };

  return (
      <section className="contact-container"> 
        <form className="contact-form">
        <h1>Contact Us</h1>
            <div className="form-content">
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(event) => setName(event.target.value)}
                    placeholder="name *"
                    value={name}
                    autoComplete="off"
                />
                <input
                    type="text"
                    id="company"
                    name="company"
                    onChange={(event) => setCompany(event.target.value)}
                    placeholder="company"
                    value={company}
                />
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="phone"
                    value={phone}
                />
                <div className="email-content">
                <label id="not-email">Invalid Email</label>
                <input
                    type="mail"
                    id="email"
                    name="email"
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="email *"
                    value={email}
                    autoComplete="off"
                />
                </div>
                <textarea
                    id="message"
                    name="message"
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="message *"
                    value={message}
                />
            </div>
            <input
                className="button"
                type="button"
                value="Send Message"
                onClick={handleSubmit}
            />
            <div className="form-message"></div>
        </form>
    </section>
  );
};

export default ContactForm;