import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [name, setName] = useState("");
  //we have taken the name of the variables from the model of 'email-Js'
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailChecking = () =>{
    let mail = document.getElementById('not-email');
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    //we check with a regex if the email address is valid
    //first part: you can pass anything you want, second part: there is a @ third part you need a point at all costs
    if(email.match(regex)){
    //is this email match with the regex
      mail.style.display = 'none'; 
      return true;
      //and you return us true
    }else{
      mail.style.display = 'block';
      mail.style.animation = 'animationError 1s';
      //to remove the message at some point
      setTimeout(()=>{
        mail.style.animation ='none';
      }, 1000)
      return false;
      //with false we won't be able to go to the sendFeedBack
    }
  };

  const messageNotSent = (message) =>{
    const formMessage =  document.querySelector(".form-message");
    //form message will specify whether the message was sent or display an error message
    formMessage.innerHTML = message;
    formMessage.style.opacity="1";
    document.getElementById('name').classList.add('error');
    document.getElementById('email').classList.add('error');
    document.getElementById('message').classList.add('error');
  }

  const successfullySent = () =>{
    const formMessage =  document.querySelector(".form-message");
    formMessage.innerHTML="Your message has been sent !";
    formMessage.style.color = "rgb(26, 156, 0)";
    formMessage.style.opacity= "1";

    document.getElementById('name').classList.remove('error');
    document.getElementById('email').classList.remove('error');
    document.getElementById('message').classList.remove('error');

    setTimeout(()=>{
      formMessage.style.opacity ='0';
    }, 6000)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    //a preventDefault( ) -> so that everything is well put in the states
    if(name && emailChecking() && message){
      sendFeedback("template_z9lhp9i", {
        //this is what we send to email js
        // its like a name : name
        name,
        company,
        phone,
        email,
        message,
      });
    }
    else{
      messageNotSent("Please fill in the required fields correctly *");
    }

  };

  const sendFeedback = (templateId, variables) => {
    //the function 'sendFeedack' will send the data and it will be updated with our state
    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        successfullySent();
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
         messageNotSent("An error has occurred, please try again.")
         )
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