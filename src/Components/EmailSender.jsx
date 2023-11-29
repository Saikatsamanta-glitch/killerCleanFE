import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
function fakeRequest(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Uncomment below to trigger error:
        // return reject('Error: KABOOM!');
        resolve({
          status: 'ok',
          scheduled: data
        });
      }, 2e3);
    });
  }
export default fakeRequest;