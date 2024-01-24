import React from 'react'
import call from '../Images/phone-call.png' 
const Phone = () => {
  const handlephone = () => {
    const phoneNumber = '951-877-5077';
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div style={{ position: 'fixed', right: '10px', bottom: '50%', margin: '20px', transform: 'translateY(50%)' }}>
      <button    onClick={handlephone}>
      <img src={call} alt="call" style={{ width: '40px', height: '40px' }} />
      </button>
    </div>
  );
};

export default Phone;
