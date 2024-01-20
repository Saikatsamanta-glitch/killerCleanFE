import React from 'react'
import call from '../Images/phone-call.png' 
const Phone = () => {
  const handlephone = () => {
    const phoneNumber = '951-877-5077';
    window.location.href = `tel:${phoneNumber}`;
  };
  
  const buttonStyle = {
    position: 'fixed',
    left: '10px', // Adjust the left position as needed
    bottom: '50%',
    transform: 'translateY(50%)',
    border: 'none',
    cursor: 'pointer',
  };

  const imgStyle = {
    width: '40px', // Adjust the width as needed
    height: '40px', // Adjust the height as needed
  };

  return (
    // <button className="call-button" onClick={handlephone}>
    //   <img src="/public/resources/phone-call.png" alt="" />
    // </button>
    <div style={buttonStyle} >
      <button onClick={handlephone}>
      <img src={call} alt="call" style={imgStyle} />
      </button>
    </div>
  );
};

export default Phone;
