import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cancel = ({ userInfo, paymentInfo }) => {
  const history = useNavigate();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      history('/');
    }, 5000); 
    return () => {
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