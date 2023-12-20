import React, { useState } from "react";

const Contact = () => {
    const [openItem, setOpenItem] = useState(null);

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
          us at <span className="text-gray-500 font-semibold"> 951-877-5077.</span>
        </p>
      </div>

      <div className="flex flex-col sm:max-md:flex-col lg:max-xxl:flex-row justify-center mt-16 lg:max-xxl:gap-1 lg:max-xxl:px-12 md:max-lg:mx-5">
        <div className="">
          <form className=" lg:max-xl:w-[550px] lg:max-xxl:w-[850px]  bg-white rounded-lg max-sm:px-5 md:max-xxl:px-10 py-10 md:max-xxl:flex md:max-xxl:flex-col shadow-md mx-4 ">
            <h2 className="text-[21px] xl:max-xxl:text-[24px] mb-4">What Is Your Request?</h2>
            <div>
              <h3 className="font-bold">Name</h3>
              <input
                className="mt-2 mb-4 w-full h-14 rounded-md  border-gray-300 placeholder:text-gray-300 placeholder:text-sm"
                type="text"
                placeholder="Joe"
              />
            </div>
            <div>
              <h3 className="font-bold">Phone Number</h3>
              <input
                className="mt-2 mb-4 w-full h-14 rounded-md  border-gray-300 placeholder:text-gray-300 placeholder:text-sm"
                type="text"
                placeholder="(123)456-7890"
              />
            </div>
            <div>
              <h3 className="font-bold">Email</h3>
              <input
                className="mt-2 mb-4 w-full h-14 rounded-md  border-gray-300 placeholder:text-gray-300 placeholder:text-sm"
                type="email"
                placeholder="joes@example.com"
              />
            </div>
            <div>
              <h3 className="font-bold">What Are You Looking For?</h3>
              <div className="mt-2 mb-4 w-full h-14 rounded-md  border-gray-300 placeholder:text-gray-300 placeholder:text-sm">
                <select className="mt-2 mb-4 w-full h-14 rounded-md  border-gray-300 placeholder:text-gray-300 placeholder:text-sm">
                  <option value="select option">Select</option>
                  <option value="option1">Cancel the booking</option>
                  <option value="option2">Reschedule the booking</option>
                  <option value="option3">Change the booking</option>
                </select>
              </div>
            </div>
            <div>
              <h3 className="font-bold">
                Have you tried our services before ?
              </h3>
              <label className="mt-2 mb-4  ">
                <input
                  className="-ml-7 md:max-xxl:-ml-7 mr-2 h-6 w-6 border-gray-300"
                  type="radio"
                  name="contactMethod"
                  value="email"
                />
                Yes
                {/* </label>
              <label> */}
                <input
                  className="ml-2  mr-2 h-6 w-6 border-gray-300"
                  type="radio"
                  name="contactMethod"
                  value="phone"
                />
                No
              </label>
            </div>
            <div>
              <h3 className="font-bold">Additional Notes?</h3>
              <textarea
                className="mt-2 mb-4 w-full rounded-md border-gray-300 placeholder:text-gray-300 placeholder:text-sm"
                rows="4"
                placeholder="Please provide anything extra here."
              ></textarea>
            </div>
            <hr className="my-2" />
            <div className="py-4">
              <h1 className="text-2xl mb-4">Help Our Company</h1>
              <h3 className="font-bold mb-4">How Did You Hear About Us?</h3>
              <div className="gap-y-4">
                
                  <input
                    className="h-6 w-6 mb-2 border-gray-300 rounded-[4px]"
                    type="checkbox"
                    name="additionalInfo"
                    id="fb"
                  />
                  <label htmlFor="fb " className="-ml-6 mb-2">Facebook </label>
                
                  <input
                    className="h-6 w-6 mb-2 border-gray-300 rounded-[4px]"
                    type="checkbox"
                    name="additionalInfo"
                    id="google"
                  />
                <label htmlFor="google" className="-ml-6 mb-2">Google</label>
                  
                  <input
                    className="h-6 w-6 mb-2 border-gray-300 rounded-[4px]"
                    type="checkbox"
                    name="additionalInfo"
                    id="yelp"
                  />
                  <label htmlFor="yelp" className="-ml-6 mb-2">Yelp </label>
                  
                  <input
                    className="h-6 w-6 mb-2 border-gray-300 rounded-[4px]"
                    type="checkbox"
                    name="additionalInfo"
                    id="frnd"
                  />
                  <label htmlFor="frnd" className="-ml-6 mb-2"> Friend </label>
                  
                  <input
                    className="h-6 w-6 mb-2 lg:max-xl:ml-[6px] border-gray-300 rounded-[4px]"
                    type="checkbox"
                    name="additionalInfo"
                    id="thumb"
                  />
                  <label htmlFor="thumb" className="-ml-6 lg:max-xl:-ml-6 mb-2"> Thumbtack </label>
                
              </div>
            </div>
          </form>
          <div className=" mx-4 mt-2 mb-10 text-[#52616b] text-sm">
            <h2>
              By entering any information, you affirm you have read and agree to
              the Terms of Service and Privacy Policy.
            </h2>
            <button
              className="h-14 w-full rounded-md bg-gray-300 mt-4  text-white font-semibold md:max-xxl:text-lg"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
        <div className="md:max-xxl:w-[400px] h-[250px] bg-white rounded-lg flex flex-col mx-4 px-4 py-4 mb-28 shadow-md">
          <h2 className="mb-4 font-bold">Popular Questions</h2>
          <div className="flex flex-col">
            {[
              "How do I use this form?",
              "Where can I find pricing?",
              "Where can I find availability?",
            ].map((question, index) => (
              <div className="mb-4" key={index} style={{ display: "inline-block"}}>
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
