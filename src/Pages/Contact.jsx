import React, { useState } from "react";
import emailjs from '@emailjs/browser';



const inputs = [
  { 
    id: "name", 
    label: "Name", 
    placeholder: "joe", 
    type: "text" 
  },
  {
    id: "phn",
    label: "Phone Number",
    placeholder: "(123)456-7890",
    type: "tel",
  },
  {
    id: "email",
    label: "Email",
    placeholder: "joes@example.com",
    type: "email",
  },
];
const checkboxData = [
  { id: "fb", label: "Facebook", value: "Facebook" },
  { id: "google", label: "Google", value: "Google" },
  { id: "yelp", label: "Yelp", value: "Yelp" },
  { id: "frnd", label: "Friend", value: "Friend" },
  { id: "thumb", label: "Thumbtack", value: "Thumbtack" },
];

const Contact = () => {
  const [openItem, setOpenItem] = useState(null);
  const [formData, setFormData] = useState({ 
    name: "",
    phn: "",
    email: "",
    message: "",
    triedServices: "",
});

  const handleChange = (field,value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phn || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
  };


  const templateParams = {
    // Define your EmailJS template parameters here
    // For example:
    subject: "Contact Form Submission",
    name: formData.name,
    phoneNumber: formData.phn,
    email: formData.email,
    message:formData.msg,
    // Add other form fields as needed
  };

  emailjs
      .send(
        "service_lrzlb67",
        "template_0aggqif",
        templateParams,
        "lO680sw9k9xiPwwsB"
      )
      .then(
        (response) => {
          console.log("EmailJS Success:", response);
        },
        (error) => {
          console.error("EmailJS Error:", error);
        }
      );

    
  const handleClick = (index) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === index ? null : index));
  };

  return (
    <div className="w-screen  ">
      <div
        className=" h-[270px] bg-cover bg-center flex flex-col text-center px-9 justify-center "
        style={{
          backgroundImage:
            "url('https://dp3d2hb4975es.cloudfront.net/assets/images/banner-bg.jpg')",
        }}
      >
        <p className="text-[26px] md:max-xxl:text-[38px] font-semibold xl:max-xxl:font-bold mb-3 md:max-xxl:mb-10">
          We Will Be In Touch Within 24 Hours
        </p>
        <p className="text-[14px] text-[#52616b] md:max-xxl:px-20 xl:max-xxl:text-[15px]">
          You can fill out this form and we will give you a custom quote with
          more detailed information. If you need to call us please reach out to
          us at &nbsp;<a href="tel:+19518775077">
          <br/>
            <span className="text-gray-500 font-semibold">
              +1&nbsp; 951-877-5077.
            </span>
          </a>
        </p>
      </div>

      <div className="flex flex-col sm:max-md:flex-col lg:max-xxl:flex-row justify-center mt-16 lg:max-xxl:gap-1 lg:max-xxl:px-12 md:max-lg:mx-5">
        <div className="mb-10">
          <form name="form"
            onSubmit={handleFormSubmit}
            className=" lg:max-xl:w-[550px] lg:max-xxl:w-[850px]  bg-white rounded-lg max-sm:px-5 md:max-xxl:px-10 py-10 md:max-xxl:flex md:max-xxl:flex-col shadow-md mx-4 "
          >
            <h2 className="text-[21px] xl:max-xxl:text-[24px] mb-4">
              What Is Your Request?
            </h2>

            {inputs.map((input) => (
              <div key={input.id}>
                <label className="font-bold -ml-6" >{input.label}</label>
                <input
                  className="mt-2 mb-4 w-full h-14 rounded-md  border-gray-300 placeholder:text-gray-300 placeholder:text-sm"
                  type={input.type}
                  placeholder={input.placeholder}
                  onChange={(e) =>
                    handleChange(input.id, e.target.value)
                  }
                />
              </div>
            ))}
            <div>
              <label className="font-bold -ml-6">
                What Are You Looking For?
              </label>
              <div className="mt-2 mb-4 w-full h-14 rounded-md  border-gray-300 placeholder:text-gray-300 placeholder:text-sm">
                <select onChange={()=>handleChange()} className="mt-2 mb-4 w-full h-14 rounded-md  border-gray-300 placeholder:text-gray-300 placeholder:text-sm">
                  <option value="select option">Select</option>
                  <option value="option1">Cancel the booking</option>
                  <option value="option2">Reschedule the booking</option>
                  <option value="option3">Change the booking</option>
                </select>
              </div>
            </div>
            <div>
              <h3 className="font-bold">Have you tried our services before?</h3>
              <label className="mt-2 mb-4">
                <input
                  className="-ml-7 md:max-xxl:-ml-7 mr-2 h-6 w-6 border-gray-300"
                  type="radio"
                  name="triedServices"
                  value="yes"
                  onChange={(e) => handleChange("triedServices", e.target.value)}
                />
                Yes
              </label>
              <label>
                <input
                  className="ml-2 mr-2 h-6 w-6 border-gray-300"
                  type="radio"
                  name="triedServices"
                  value="no"
                  onChange={(e) => handleChange("triedServices", e.target.value)}
                />
                No
              </label>
            </div>

            <div>
              <label className="font-bold -ml-6">Additional Notes?</label>
              <textarea
                id="msg"
                className="mt-2 mb-4 w-full rounded-md border-gray-300 placeholder:text-gray-300 placeholder:text-sm"
                rows="4"
                placeholder="Please provide anything extra here."
                
              ></textarea>
            </div>
            <hr className="my-2" />
            <div className="py-4">
              <h1 className="text-2xl mb-4">Help Our Company</h1>
              <h3 className="font-bold mb-4">How Did You Hear About Us?</h3>
              <div className="gap-y-4 ml:flex items-center flex-wrap">
                {checkboxData.map((checkbox) => (
                  <div key={checkbox.id} className="flex items-center">
                    <input
                      className="h-6 w-6 mb-2 border-gray-300 rounded-[4px]"
                      type="checkbox"
                      name="heardAbout"
                      id={checkbox.id}
                    />
                    <label htmlFor={checkbox.id} className={`-ml-6 mb-2`}>
                      {checkbox.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className=" mx-4 mt-2 mb-10 text-[#52616b] text-sm">
              <h2>
                By entering any information, you affirm you have read and agree
                to the Terms of Service and Privacy Policy.
              </h2>
              <button
                className="h-14 w-full rounded-md bg-gray-300 mt-4  text-white font-semibold md:max-xxl:text-lg"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="md:max-xxl:w-[400px] h-[250px] bg-white rounded-lg flex flex-col mx-4 px-4 py-4 mb-28 shadow-md">
          <h2 className="mb-4 font-bold">Popular Questions</h2>
          <div className="flex flex-col">
            {[
              "How do I use this form?",
              "Where can I find pricing?",
              "Where can I find availability?",
            ].map((question, index) => (
              <div
                className="mb-4"
                key={index}
                style={{ display: "inline-block" }}
              >
                <button onClick={() => handleClick(index)}>
                  <i
                    className={`fi ${
                      openItem === index
                        ? "fi-ss-angle-down"
                        : "fi-ss-angle-right"
                    }`}
                  ></i>
                  {question}
                </button>
                {openItem === index && (
                  <p className="ml-3 mt-2 text-gray-400 text-sm">
                    {index === 0
                      ? "You can submit your request and we will be in touch within 48 hours."
                      : index === 1
                      ? "To get pricing you can use the 'Book Now' option on the site instead."
                      : "You can find that from the 'Book Now' form on this website."}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
