import React, { useState, useEffect } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import {
  Accordion,
  Label,
  Tooltip,
  TextInput,
  Checkbox,
  Textarea,
  Button,
} from "flowbite-react";
import { FaRegCalendarDays } from "react-icons/fa6";
import {
  frequencyData,
  selectExtras,
  customerDetailsData,
  pricingConfig,
  slots,
} from "../data";
import PopularQuestions from "./PopularQuestions";
import { loadStripe } from "@stripe/stripe-js";

export default function BookForm() {
  const [selectedFrequency, setSelectedFrequency] = useState("Onetime");
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [price, setPrice] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(true);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [bedroomValue, setBedroomValue] = useState("");
  const [bathroomValue, setBathroomValue] = useState("");
  const [availableBathrooms, setAvailableBathrooms] = useState(["1", "2"]);
  const [pricingStandard, setPricingStandard] = useState("standard");
  const [isChecked, setIsChecked] = useState(false);
  const [totalServiceInfo, setTotalServiceInfo] = useState("");
  const [subTotal, setSubTotal] = useState(0);

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: undefined,
    }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updateAvailableBathrooms = () => {
    const selectedPricing = pricingConfig[pricingStandard];
    const bedrooms = parseInt(bedroomValue);
    if (selectedPricing && selectedPricing[bedrooms]) {
      const bathrooms = Object.keys(selectedPricing[bedrooms]);
      setAvailableBathrooms(bathrooms);
    } else {
      setAvailableBathrooms([]);
    }
  };
  

  useEffect(() => {
    const freqPrice = pricingConfig.frequency[selectedFrequency] || 0;
    const selectedPricing = pricingConfig[pricingStandard];
    const bedrooms = parseInt(bedroomValue, 10) || 0;
    const bathrooms = parseInt(bathroomValue, 10) || 0;
    const extrasPrice = selectedExtras.length * pricingConfig.extras;
    const memorizedRooms = selectedPricing?.[bedrooms]?.[bathrooms] || 0;
    const subtotal = freqPrice + extrasPrice + memorizedRooms;
    const taxAmount = subtotal * 0.1;
     
    const totalService = pricingConfig.totalService[selectedFrequency] || 1;
    const totalServiceInfo = totalService;

    const subvalue = pricingConfig.subvalue[selectedFrequency] || 1;
    const finaltotal = subtotal * subvalue; 

    const totalPrice = finaltotal + taxAmount;   
    setSubTotal(subtotal);
    setPrice(totalPrice);
    setTotalServiceInfo(totalServiceInfo);
    setTaxAmount(taxAmount);
    updateAvailableBathrooms();
  }, [
    selectedFrequency,
    pricingStandard,
    bedroomValue,
    bathroomValue,
    selectedExtras,
  ]);

  const handleBedroomChange = (event) => {
    setBedroomValue(event.target.value);
  };

  const handleBathroomChange = (event) => {
    setBathroomValue(event.target.value);
  };

  const handleStandardClick = () => {
    setPricingStandard("standard");
  };

  const handleDeepClick = () => {
    setPricingStandard("deep");
  };

  const handleExtrasChange = (event) => {
    const extra = event.target.value;
    setSelectedExtras((prevExtras) =>
      prevExtras.includes(extra)
        ? prevExtras.filter((item) => item !== extra)
        : [...prevExtras, extra]
    );
  };

  const toggleSubmitButton = () => {
    setIsChecked(!isChecked);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
    setShowTimePicker(true);
  };
  const handleTimeChange = (time) => {
    setSelectedTime(time);
    setShowDatePicker(false);
    setShowTimePicker(false);
  };
  const handleFormSubmit = () => {
    let newErrors = {};
    // Perform validation
    customerDetailsData.forEach((detail) => {
      if (detail.required && !formData[detail.id]) {
        newErrors[detail.id] = `${detail.label} is required`;
      }
    });
    // Update errors state
    setErrors(newErrors);
    // If there are errors, display an alert
    if (Object.keys(newErrors).length > 0) {
      alert("Please fill in all required fields.");
      return;
    }
    localStorage.setItem("formData", JSON.stringify(formData));
    localStorage.setItem("selectedFrequency", selectedFrequency);
    localStorage.setItem("bedromvalues", bedroomValue);
    localStorage.setItem("bathroomvalues", bathroomValue);
    localStorage.setItem("selectedExtras", selectedExtras);
    localStorage.setItem("selectedDate", selectedDate);
    localStorage.setItem("selectedTime", selectedTime);
    localStorage.setItem("price", price);
  };
  //payment
  const makePayment = async () => {
    const stripe = await loadStripe("pk_live_51OB8RyA2dcJCHvz14zYzvwFYSvnbt222V0OttLJZSfwG0UgrfFdgF7LwsF5X4H42xlcy3jTjnZI23EL3SneYQpk700hVvfroBJ");
    const body = [
      {
        Name: formData.firstName + " " + formData.lastName,
        Frequency: selectedFrequency,
        bedrooms: bedroomValue,
        bathrooms: bathroomValue,
        Extras: selectedExtras,
        price: price,
        Email: formData.email,
        Address: formData.address,
        Contact_Number1: formData.tel,
        Contact_Number2: formData.sectel,
      },
    ];
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "https://killerclean.onrender.com/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );
    const session = await response.json();
    stripe.redirectToCheckout({
      sessionId: session.id,
    });
  };

  return (
    <div className="flex flex-col lg:flex-row items-center py-14 lg:items-start justify-evenly px-2 lg:px-10 w-full">
      {/* Booking form container */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFormSubmit();
          makePayment();
        }}
        className=" xl:max-xxl:w-[800px] xxl:w-[1500px]  lg:max-xl:w-[570px] max-lg:w-full z-0 "
      >
        <div className=" w-full bg-white border  p-4 rounded-lg mb-5">
          <div className="border-b w-full py-4 lg:p-4">
            <h1 className="text-[#11263c] max-xxl:text-2xl xxl:text-6xl font-semibold mb-4">
              Frequency{" "}
            </h1>
            <div className="xl:space-x-3 lg:space-x-4 lg:-ml-4 xl:ml-0 max-sm:flex max-sm:flex-col md:flex lg:flex-wrap md:items-center md:max-lg:flex-col max-lg:space-y-3">
              {/* Radio buttons for frequency */}

              {frequencyData.map((frequency) => (
                <div
                  key={frequency.value}
                  className="max-lg:w-full flex justify-center items-center"
                >
                  <input
                    type="radio"
                    name="frequency"
                    id={frequency.value}
                    value={frequency.value}
                    className="hidden peer"
                    checked={selectedFrequency === frequency.value}
                    onChange={(event) => {
                      setSelectedFrequency(event.target.value);
                    }}
                  />
                  <label
                    htmlFor={frequency.value}
                    className="p-2 cursor-pointer text-center text-[#11263c]  bg-[#e5ecf2] rounded-lg w-full peer-checked:text-white peer-checked:bg-[#ced5d8]"
                  >
                    {frequency.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="border-b w-full  lg:p-4">
            <h1 className="text-[#11263c] max-xxl:text-2xl xxl:text-6xl font-semibold mb-4">
              Service Type{" "}
            </h1>
            <div className="space-x-8 rounded-2xl max-sm:flex justify-center">
              <button
                type="button"
                className={`w-20 h-10 rounded-md ${
                  pricingStandard === "standard"
                    ? "bg-sky-400 text-white"
                    : "bg-[#E5ECF2] "
                }`}
                onClick={handleStandardClick}
              >
                Standard
              </button>
              <button
                type="button"
                className={`w-20 h-10 rounded-md ${
                  pricingStandard === "deep"
                    ? "bg-sky-400 text-white"
                    : "bg-[#E5ECF2]"
                }`}
                onClick={handleDeepClick}
              >
                Deep
              </button>
            </div>
            <div className="max-md:space-y-5 lg:space-y-5 m-2">
              <label className="text-[17px] xxl:text-3xl font-semibold ">Bedroom:<select className="w-44 ml-3 border-[#ced5d8] " value={bedroomValue} onChange={handleBedroomChange}>
                  <option value="">Select Bedroom</option>
                  {pricingConfig[pricingStandard]?.bedrooms.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="text-[17px] xxl:text-3xl font-semibold">Bathroom:<select className="w-44 ml-3 border-[#ced5d8] " value={bathroomValue} onChange={handleBathroomChange}>
                  <option value="">Select Bathroom</option>
                  {availableBathrooms.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
          {/* Extras section */}
          <div className="border-b w-full py-4 lg:p-4">
            <h1 className="text-[#11263c] max-xxl:text-2xl xxl:text-6xl font-semibold mb-4">
              Select Extras{" "}
            </h1>
            <div className="grid xxl:grid-cols-6 xl:max-xxl:grid-cols-5 lg:max-xl:grid-cols-4 md:max-lg:grid-cols-3 max-ms:grid-cols-1 max-mm:grid-cols-1 max-ml:grid-cols-1 grid-cols-2 xxl:gap-10 lg:max-xxl:gap-3 max-lg:gap-2">
              {/* Checkboxes for extras */}
              {selectExtras.map((v) => (
                <div key={v} className="flex flex-col items-center">
                <div
                key={v.id}
                className={`border flex items-center justify-center rounded-md border-[#ced5d8] overflow-hidden ${selectedExtras.includes(v.label) ? 'bg-[#52616b] peer-checked:bg-opacity-60' : ''}`}
              >
                <input
                  type="checkbox"
                  name={v.label}
                  id={v.label}
                  value={v.label}
                  checked={selectedExtras.includes(v.label)}
                  onChange={handleExtrasChange}
                  className="peer hidden"
                />
                <label
                  htmlFor={v.label}
                  className="extras p-2"
                >
                  <img
                    src={v.img}
                    alt=""
                    className="h-12 w-12 max-sm:h-16 max-sm:w-16 md:max-lg:h-16 md:max-lg:w-16 xxl:h-16 xxl:w-16"
                  />
                </label>
              </div>
              
                  <div className="flex items-center">
                    <Label
                      htmlFor={v.label}
                      value={v.label}
                      className="text-xs text-center px-0 pt-2 xxl:text-2xl font-medium"
                    />
                    {v.tooltip ? (
                      <Tooltip
                        content={v.tooltip}
                        arrow={false}
                        className="w-48 border bg-white  text-black font-normal text-center "
                      >
                        <IoMdInformationCircleOutline className="mt-2 ml-1 xxl:text-xl" />
                      </Tooltip>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="text-xs text-center xxl:text-2xl font-medium">
                    ({v.price})
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Customer Details */}
          <div className="border-b w-full py-4 lg:p-4">
            <h1 className="text-[#11263c] max-xxl:text-2xl xxl:text-6xl font-semibold mb-4">
              Customer Details{" "}
            </h1>
            <div className="grid max-md:grid-cols-1 md:grid-cols-2 gap-4">
              {customerDetailsData.map((detail) => (
                <div
                  key={detail.id}
                  className={
                    detail.type === "checkbox"
                      ? "md:col-span-2"
                      : "grid max-md:grid-cols-1 gap-4"
                  }
                >
                  <div className="mb-2 block -ml-6">
                    {detail.type !== "checkbox" && (
                      <Label
                        htmlFor={detail.id}
                        value={detail.label}
                        className={`text-[17px] xxl:text-3xl font-semibold ${
                          detail.type === "checkbox"
                            ? "-ml-5 xxl:text-3xl max-lg:text-lg"
                            : ""
                        }`}
                      />
                    )}
                  </div>
                  {detail.type === "checkbox" ? (
                    <div className="flex items-center">
                      <input
                        id={detail.id}
                        type={detail.type}
                        className="h-6 w-6 rounded"
                        onChange={(e) =>
                          handleChange(detail.id, e.target.checked)
                        }
                      />
                      {detail.label && (
                        <label
                          htmlFor={detail.id}
                          className="-ml-5 xxl:text-3xl max-lg:text-lg font-medium"
                        >
                          {detail.label}
                        </label>
                      )}
                    </div>
                  ) : (
                    <>
                      <TextInput
                        id={detail.id}
                        type={detail.type}
                        sizing="md"
                        required={detail.id !== "sectel"}
                        placeholder={detail.placeholder}
                        onChange={(e) =>
                          handleChange(detail.id, e.target.value)
                        }
                        className="mb-2"
                      />
                      {errors[detail.id] && (
                        <p className="text-red-500">{errors[detail.id]}</p>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Service Provider */}
          <div className="border-b w-full py-4 lg:p-4">
            <h1 className="text-[#11263c] max-xxl:text-2xl xxl:text-6xl font-semibold mb-4">
              Choose Service Date
            </h1>
            <div>
              {showDatePicker && (
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="EEE MMM d yyyy"
                  isClearable
                  inline
                  minDate={new Date()}
                  className="w-full"
                />
              )}

              {showTimePicker && (
                // Replace this with your time picker component
                <div className="flex flex-col w-full">
                  <label htmlFor="selectTime" className="font-medium text-lg mb-6">
                    Select Time:
                  </label>
                  {/* Your time picker component goes here */}
                  {/* Example: */}
                  <div className="flex flex-col items-center w-full">
                    <div className="flex flex-wrap items-center w-full justify-around mb-6">
                      {slots.map((time) => (
                        <Button
                          outline
                          key={time}
                          selected={selectedTime}
                          onChange={handleTimeChange}
                          onClick={() => handleTimeChange(time)}
                          className="text-black mb-2 "
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                    <Button
                      onClick={() => {
                        setShowDatePicker(true);
                        setShowTimePicker(false);
                      }}
                      outline
                      className="w-32"
                    >
                      Go Back
                    </Button>
                  </div>
                </div>
              )}
              {selectedDate && selectedTime && (
                <div className="flex items-center w-full max-md:flex-col ">
                  <div className="mb-4 flex items-center">
                    <label htmlFor="selectedDate" className="font-medium">Selected Date:</label>
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => {
                        setSelectedDate(date);
                      }}
                      dateFormat="EEE MMM d yyyy"
                      isClearable
                      minDate={new Date()}
                      className="w-48"
                    />
                  </div>
                  <div className="mb-4 flex items-center">
                    <label htmlFor="selectedTime" className="font-medium">Selected Time:</label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-48"
                    >
                      {slots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="border-b w-full py-4 lg:p-4">
            <h1 className="text-[#11263c] max-xxl:text-2xl xxl:text-3xl font-semibold mb-4">
              Special Notes Or Instructions
            </h1>

            <div className="my-4">
              <div className="w-full">
                <div className="mb-2 block -ml-6">
                  <Label
                    htmlFor="special"
                    value="Would You Like To Add Any Notes?"
                    className="lg:text-[17px] max-lg:text-lg xxl:text-2xl font-semibold"
                  />
                </div>
                <Textarea
                  id="special"
                  rows={6}
                  placeholder="Special Notes Or Instructions"
                  onChange={(e) => handleChange("special", e.target.value)}
                />
              </div>
            </div>
          </div>
      
        </div>
        {/* Payment */}
        <div className="flex flex-col items-start mb-4">
          <div className="flex items-center mb-4">
            <Checkbox
              id="agree"
              className="h-6 w-6"
              onChange={toggleSubmitButton}
            />
            <Label
              htmlFor="agree"
              className="-ml-5 xxl:text-5xl text-[#52616b] font-normal max-xxl:text-lg"
            >
              I affirm that I have read and agree to the Terms of Service and Privacy Policy .
            </Label>
          </div>
          <p className="mb-4 text-[#52616b]">
            By entering any information, you affirm you have read and agree to
            the <Link to='/terms_policy#termsofservice' className="text-blue-400">Terms of Service</Link> and 
            <Link to='/terms_policy' className="text-blue-400"> Privacy Policy</Link>.
          </p>
          <div className="flex items-center mb-4">
            <span className="text-[#52616b]">
              Your card is charged AFTER the appointment is completed.
            </span>
            <span>
              <Tooltip
                content=" By clicking 'Save Booking' you agree to our terms of service and privacy policy."
                arrow={false}
                className="w-48 border bg-white  text-black font-normal text-center "
              >
                <span>
                  <IoMdInformationCircleOutline className=" ml-1 text-[#52616b] xxl:text-xl" />
                </span>
              </Tooltip>
            </span>
          </div>
          <Button
            type="submit"
            id="submitBtn"
            value="Send"
            disabled={!isChecked}
            style={{
              cursor: isChecked ? "pointer" : "not-allowed",
              backgroundColor: isChecked ? "#155E75" : "#ccc",
              border: "none",
              color: isChecked ? "white" : "#666",
            }}
            className="w-full p-2 bg-[#ced5d8] border-[#ced5d8]"
          >
            <FaRegCalendarDays className="mr-2" /> Save Booking
          </Button>
        </div>
      </form>
      {/* Booking Summary and Questions */}
      <div className="flex flex-col items-center">
        <div className="card z-10  max-lg:w-full lg:max-xxl:w-[350px] xxl:w-[500px] mb-16">
          <Accordion className="max-xxl:p-2 xxl:p-10 w-full">
            <Accordion.Panel className="w-full">
              <Accordion.Title className="mb-6 font-bold w-full flex justify-between items-center text-lg xxl:text-3xl text-[#11263c]">
                Booking Summary
                <h1 className="text-2xl xxl:text-4xl text-orange-500">
                  ${price.toFixed(2)}
                </h1>
              </Accordion.Title>
              <Accordion.Content>
                <div className="border-y">
                  <table className="text-base max-xxl:border-spacing-4 xxl:border-spacing-8 border-separate">
                    <tbody>
                      <tr>
                        <td className="text-sm xxl:text-xl text-[#6c757d]">
                          Industry
                        </td>
                        <td>:</td>
                        <td className="text-[#11263c] xxl:text-xl">
                          Home Cleaning
                        </td>
                      </tr>
                      <tr>
                        <td className="text-sm xxl:text-xl text-[#6c757d]">
                          Service
                        </td>
                        <td>:</td>
                        <td className="text-[#11263c] xxl:text-xl">
                          Flat Rate Service
                        </td>
                      </tr>
                      <tr>
                        <td className="text-sm xxl:text-xl text-[#6c757d]">
                          Frequency
                        </td>
                        <td>:</td>
                        <td className="text-[#11263c] xxl:text-xl">
                          {selectedFrequency}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-sm xxl:text-xl text-[#6c757d]">
                          Total Services
                        </td>
                        <td>:</td>
                        <td className="text-[#11263c] xxl:text-xl">
                          {totalServiceInfo}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-sm xxl:text-xl text-[#6c757d]">
                          Bedrooms
                        </td>
                        <td>:</td>
                        <td className="text-[#11263c] xxl:text-xl">
                          {bedroomValue}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-sm xxl:text-xl text-[#6c757d]">
                          Bathrooms
                        </td>
                        <td>:</td>
                        <td className="text-[#11263c] xxl:text-xl">
                          {bathroomValue}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-sm xxl:text-xl text-[#6c757d]">
                          Cost
                        </td>
                        <td>:</td>
                        <td className="text-[#11263c] xxl:text-xl font-bold">
                        ${subTotal.toFixed(2)}
                        </td>
                      </tr>
                      {selectedExtras.length > 0 && (
                        <tr>
                          <td className="text-sm xxl:text-xl text-[#6c757d]">
                            Extras
                          </td>
                          <td>:</td>
                          <td className="text-[#11263c] xxl:text-xl">
                            {selectedExtras.join(", ")}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="p-2 mt-2 mb-2">
                  <div className="flex justify-between items-center">
                    <h1 className="text-lg xxl:text-xl text-[#6c757d]">
                      Total Before Tax
                    </h1>
                    <h1 className="text-lg xxl:text-xl text-[#6c757d]">
                      ${price.toFixed(2) - taxAmount.toFixed(2)}
                    </h1>
                  </div>
                  <div className="flex justify-between items-center">
                    <h1 className="text-lg xxl:text-xl text-[#6c757d]">
                      Tax (10%)
                    </h1>
                    <h1 className="text-lg xxl:text-xl text-[#6c757d]">
                      ${taxAmount.toFixed(2)}
                    </h1>
                  </div>
                  <div className="flex justify-between items-center">
                    <h1 className="text-2xl xxl:text-4xl text-orange-500">
                      TOTAL
                    </h1>
                    <h1 className="text-2xl xxl:text-4xl text-orange-500">
                      ${price.toFixed(2)}
                    </h1>
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <PopularQuestions />
        {/* <p>Scheduled Date and Time: {scheduledDateTime.toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}</p> */}
      </div>
    </div>
  );
}
