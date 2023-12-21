import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
const Success = () => {
  const storedFormData = localStorage.getItem("formData");
  const frequency = localStorage.getItem("selectedFrequency");
  const bedrooms = localStorage.getItem("selectedBedrooms");
  const bathrooms = localStorage.getItem("selectedBathrooms");
  const sqft = localStorage.getItem("selectedSqft");
  const extras = localStorage.getItem("selectedExtras");
  const date = localStorage.getItem("selectedDate");
  const time = localStorage.getItem("selectedTime");
  const price = localStorage.getItem("price");
  const formData = storedFormData ? JSON.parse(storedFormData) : {};

  // Access formData properties as needed
  const { firstName, lastName, email /* ...other form properties */ } =
    formData;
  const history = useNavigate();
  useEffect(() => {
    console.log("Props in Success component:");

    // Function to send email
    const sendEmail = () => {
      emailjs
        .send(
          "service_8gev85f",
          "template_vg72bqo",
          {
            from_name: "Killer Clean",
            to_name: firstName + " " + lastName,
            user_email: email,
            selectedFrequency: frequency,
            selectedBathrooms: bathrooms,
            selectedBedrooms: bedrooms,
            selectedExtras: extras,
            selectedSqft: sqft,
            scheduledDateTime: new Date(date).toLocaleDateString('en-US', { dateStyle: 'full' }) +" "+ "at"  +' ' + time,
            price: price,
            // other template variables
          },
          "CidetvyEOA_jCWCZs"
        )
        .then(
          (response) => {
            console.log("Email sent successfully:", response);
          },
          (error) => {
            console.error("Email sending failed:", error);
          }
        );
    };

    // Send email after a delay
    const emailTimer = setTimeout(() => {
      sendEmail();
    }, 2000); // Adjust the delay as needed

    // Redirect to home after another delay
    const redirectTimer = setTimeout(() => {
      history("/");
    }, 10000); // Adjust the delay as needed

    // Clear timers when the component is unmounted
    return () => {
      // clearTimeout(emailTimer);
      // clearTimeout(redirectTimer);
    };
  }, [history, formData]);
  console.log(formData);
  return (
    <div className="text-center flex items-center justify-center flex-col">
      <h2 className="text-3xl font-bold mb-4 text-green-500">
        Booking Successful!
      </h2>
      <div className="mb-4">
        <p>
          Thank you, {firstName + " " + lastName}! Your booking has been
          confirmed. An email with the details has been sent to {email}.
        </p>
      </div>
      <div className="mb-4">
        <p>
          <strong>Booking Details:</strong>
        </p>
        <p>
          Frequency: {frequency}
          <br />
          Bathrooms: {bathrooms}
          <br />
          Bedrooms: {bedrooms}
          <br />
          Extras: {extras}
          <br />
          Sq Ft: {sqft}
          <br />
          Scheduled Date and Time:{" "}
          {`${new Date(date).toLocaleDateString('en-US', { dateStyle: 'full' })} ${time}`}
          <br />
          Total Price: ${price}
        </p>
      </div>
      <p className="text-gray-600">
        A confirmation email has been sent to {email}.
      </p>
    </div>
  );
};

export default Success;
