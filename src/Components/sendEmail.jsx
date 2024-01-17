import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lrzlb67', 'template_0qic7ra', form.current, 'public_key')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className='mb-10' ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="to_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Date</label>
      <input type="date" name='schedule_date'/>
      <label>Time</label>
      <input type="time" name='schedule_time'/>
      <label>Address</label>
      <input type="text" name='address'/>
      <label>Appartment</label>
      <input type="text" name='user_apt'/>
      <label>Contact_Number</label>
      <input type="number" name='tel'/>
      <input type="submit" value="Send" />
    </form>
  );
};