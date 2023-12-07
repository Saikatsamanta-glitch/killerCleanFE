import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Cancel = ({ userInfo, paymentInfo }) => {
  const history = useNavigate();

  useEffect(() => {
    // Function to send email
    const sendCancelEmail = async () => {
      try {
        const templateParams = {
          user_name: userInfo.user_name,
          emailid: userInfo.emailid,
          address: userInfo.address,
          date_and_time: paymentInfo.date_and_time,
          service_type: paymentInfo.service_type,
          purchased_service: paymentInfo.purchased_service,
          total_amount: paymentInfo.total_amount,
        };

        // Replace 'your_cancel_service_id' and 'your_cancel_template_id' with the actual values from EmailJS
        const result = await emailjs.send(
          'service_lrzlb67',
          'your_cancel_template_id',
          templateParams,
          'lO680sw9k9xiPwwsB' // Replace with your user ID from EmailJS
        );

        console.log(result);
      } catch (error) {
        console.error('Error sending cancel email:', error);
      }
    };

    // Send cancel email after a delay
    const emailTimer = setTimeout(() => {
      sendCancelEmail();
    }, 2000); // Adjust the delay as needed

    // Redirect to home after another delay
    const redirectTimer = setTimeout(() => {
      history('/home');
    }, 10000); // Adjust the delay as needed

    // Clear timers when the component is unmounted
    return () => {
      clearTimeout(emailTimer);
      clearTimeout(redirectTimer);
    };
  }, [userInfo, paymentInfo, history]);

  return (
    <div className='h-[185px] flex justify-center items-center '>
      <h1 className='text-red-700 font-bold text-5xl'>Payment Cancelled!</h1>
    </div>
  );
};

export default Cancel;