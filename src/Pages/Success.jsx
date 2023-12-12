import React, { useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import FormDataContext from "../FormDataContext";
import emailjs from "@emailjs/browser";
const Success = () => {
  const history = useNavigate();
  const { formData, setFormData } = useContext(FormDataContext);
  useEffect(() => {
    console.log("Props in Success component:", formData);

    const formDataToSend = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      selectedFrequency: formData.selectedFrequency,
      selectedBathrooms: formData.selectedBathrooms,
      selectedBedrooms: formData.selectedBedrooms,
      selectedExtras: formData.selectedExtras,
      selectedSqft: formData.selectedSqft,
      scheduledDateTime: formData.scheduledDateTime,
      price: formData.price,
    };
    // Function to send email
    const sendEmail = () => {
      emailjs
        .send(
          "service_8gev85f",
          "template_vg72bqo",
          {
            from_name: "Killer Clean",
            to_name: formDataToSend.firstName+' '+formDataToSend.lastName,
            user_email: formDataToSend.email,
            selectedFrequency: formDataToSend.selectedFrequency,
            selectedBathrooms: formDataToSend.selectedBathrooms,
            selectedBedrooms: formDataToSend.selectedBedrooms,
            selectedExtras: formDataToSend.selectedExtras,
            selectedSqft: formDataToSend.selectedSqft,
            scheduledDateTime: formDataToSend.scheduledDateTime,
            price: formDataToSend.price,
            // other template variables
          },
          "YL2DYLIDJGvGP1qwG"
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
      clearTimeout(emailTimer);
      clearTimeout(redirectTimer);
    };
  }, [
    history,
    formData,
  ]);

  return (
    <div className="text-center h-[200px] flex items-center justify-center flex-col">
      <h2 className="text-3xl font-bold mb-4 text-green-500">
        Booking Successful!
      </h2>
      <div className="mb-4">
        <p>
          Thank you, {formData.firstName+' '+formData.lastName}! Your booking has been confirmed. An email
          with the details has been sent to {formData.email}.
        </p>
      </div>
      {/* <div className="mb-4">
        <p>
          <strong>Booking Details:</strong>
        </p>
        <p>
          Frequency: {formData.selectedFrequency}
          <br />
          Bathrooms: {formData.selectedBathrooms}
          <br />
          Bedrooms: {formData.selectedBedrooms}
          <br />
          Extras: {formData.selectedExtras}
          <br />
          Sq Ft: {formData.selectedSqft}
          <br />
          Scheduled Date and Time:{" "}
          {new Date(formData.scheduledDateTime).toLocaleString("en-US", {
            dateStyle: "full",
            timeStyle: "short",
          })}
          <br />
          Total Price: ${formData.price}
        </p>
      </div> */}
      <p className="text-gray-600">
        A confirmation email has been sent to {formData.email}.
      </p>
    </div>
  );
};

export default Success;
