import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Success = ({ userInfo, paymentInfo }) => {
  const history = useHistory();

  useEffect(() => {
    // Function to send email
    const sendEmail = async () => {
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

        // Replace 'your_service_id' and 'your_template_id' with the actual values from EmailJS
        const result = await emailjs.send(
          'your_service_id',
          'your_template_id',
          templateParams,
          'your_user_id' // Replace with your user ID from EmailJS
        );

        console.log(result);
      } catch (error) {
        console.error('Error sending email:', error);
      }
    };

    // Send email after a delay
    const emailTimer = setTimeout(() => {
      sendEmail();
    }, 2000); // Adjust the delay as needed

    // Redirect to home after another delay
    const redirectTimer = setTimeout(() => {
      history.push('/home');
    }, 4000); // Adjust the delay as needed

    // Clear timers when the component is unmounted
    return () => {
      clearTimeout(emailTimer);
      clearTimeout(redirectTimer);
    };
  }, [userInfo, paymentInfo, history]);

  return (
    <div>
      <h1 className='text-Success'>Success!</h1>
      <p>Sending email and redirecting to home in 4 seconds...</p>
    </div>
  );
};

export default Success;
