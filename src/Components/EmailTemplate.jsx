import React from "react";
import { selectExtras } from "../data";

export default function EmailTemplate({customerName,totalAmount,selectedFrequency,selectedBathrooms,selectedBedrooms,selectedExtras,selectedSqft,scheduledDateTime}) {
  return (
    <div className="lg:px-20 max-lg:px-5 w-screen">
      <div
        className="flex items-center justify-center flex-col rounded-3xl w-full max-md:px-2 md:p-10"
      >
        <div className="flex items-center justify-center">
          <img
            align="center"
            border="0"
            src="https://i.ibb.co/jwyTYyf/image-7.png"
            alt="Logo"
            title="Logo"
            className="w-[150px] outline-none no-underline inline-block border-none "
          />
        </div>
        <img
          src="https://sparklingclean.siterubix.com/wp-content/uploads/2023/09/pexels-curtis-adams-4320378-2.jpg"
          width={"400px"}
        />
        <h1 className="font-[Montserrat,sans-serif] text-xl font-normal text-center text-[#212c38] break-words ">
          Your Booking has been confirmed!
        </h1>
      </div>
      <div className="py-[30px] bg-[rgb(68,68,68)]">
        <h1 className="text-center text-white font-[Montserrat,sans-serif]">
          BOOKING SUMMARY
        </h1>
        <table className="flex items-center justify-center flex-col text-white text-lg">
          <tbody>
            <tr>
              <td align="right">Frequency:</td>
              <td>{selectedFrequency}</td>
            </tr>
            <tr className="bg-[rgb(61,61,61)]">
              <td align="right">Bedrooms:</td>
              <td>{selectedBedrooms}</td>
            </tr>
            <tr>
              <td align="right">Bathrooms:</td>
              <td>{selectedBathrooms}</td>
            </tr>
            <tr className="bg-[rgb(61,61,61)]">
              <td align="right">Sq Ft:</td>
              <td>{selectedSqft}</td>
            </tr>
            <tr>
              <td align="right">Extras:</td>
              <td>{selectedExtras}</td>
            </tr>
            <tr className="bg-[rgb(61,61,61)]">
              <td align="right">Total Price:</td>
              <td>${totalAmount}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        className="text-[#212c38] font-[Montserrat,sans-serif] max-md:px-2 md:p-5"
      >
        <h1 className="text-xl font-medium">
          Dear{" "}
          <span>
            <strong>{customerName},</strong>
          </span>
        </h1>
        <p>
          {" "}
          We hope this email finds you well. Thank you for choosing our cleaning
          services! We are delighted to confirm your scheduled cleaning
          appointment. Here are the details of your upcoming cleaning session:
          <ul className="font-semibold text-center">
            <li>Date-Time:{scheduledDateTime}</li>
          </ul>
          Our team of experienced and dedicated cleaners will arrive promptly at
          the specified time to ensure your space is left spotless. Please
          ensure that the premises are accessible, and if you have any specific
          instructions or areas of focus, feel free to let us know in advance.
          <br />
          <br />
          If, for any reason, you need to reschedule or cancel your appointment,
          kindly contact us at least 24 hours in advance. This allows us to
          adjust our schedule and accommodate the needs of all our clients.
          <br />
          <br />
          We appreciate your trust in our services and look forward to providing
          you with a clean and comfortable living/work environment.
          <br />
          <br />
          Thank you once again, and if you have any questions or concerns, don't
          hesitate to reach out to us.
          <br />
          <br />
          Kind Regards;
          <br />
          <strong>Killer Clean</strong>
        </p>
      </div>
      <div 
      className="bg-[#263e6a] flex items-center justify-between px-[30px] py-[20px] w-full max-md:flex-col">
        <img src="https://i.ibb.co/0hPGxJy/image-6.png" width="150px" />
        <div className="flex flex-col items-center justify-center">
        <div className="flex  items-center justify-center">
            <a
              href="https://facebook.com/"
              title="Facebook"
              target="_blank"
            >
              <img
                src="https://i.ibb.co/tMRf9s4/image-2.png"
                alt="Facebook"
                title="Facebook"
                width="32"
              />
            </a>
            <a
              href="https://instagram.com/"
              title="Instagram"
              target="_blank"

            >
              <img
                src="https://i.ibb.co/C7tQ5DL/image-1.png"
                alt="Instagram"
                title="Instagram"
                width="32"
                
              />
            </a>
          </div>
          <a
            href="#"
            className="text-white outline-none no-underline block border-none mt-[20px]"
          >
            www.killerclean.com
          </a>
          <div>
            <p >
              <span className="text-white">
                +123-45-7890
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
