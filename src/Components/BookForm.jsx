import React, { useState, useEffect, useCallback } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Accordion,
  Tabs,
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
  serviceTypeData,
  selectExtras,
  customerDetailsData,
  pricingConfig,
  slots,
} from "../data";
import PopularQuestions from "./PopularQuestions";
import { loadStripe } from "@stripe/stripe-js";

export default function BookForm() {
  const [selectedFrequency, setSelectedFrequency] = useState("Weekly");
  const [selectedBedrooms, setSelectedBedrooms] = useState(0);
  const [selectedBathrooms, setSelectedBathrooms] = useState(1);
  const [selectedSqft, setSelectedSqft] = useState("");
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [selectedKey, setSelectedKey] = useState(""); // State for radio buttons
  const [keepKeyChecked, setKeepKeyChecked] = useState(false); // State for checkbox
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
  const [totalCost, setTotalCost] = useState(null);
  const [pricingStandard, setPricingStandard] = useState("standard");
  const [availableBathrooms, setAvailableBathrooms] = useState(["1", "2"]);

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
    // Update available bathrooms based on selected bedrooms
    updateAvailableBathrooms();
  }, [bedroomValue, pricingStandard]);

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

  // Define your pricing logic
  const calculatePrice = useCallback(() => {
    const freqPrice = pricingConfig.frequency[selectedFrequency] || 0;
    const bedroomsPrice = selectedBedrooms * pricingConfig.bedrooms;
    const bathroomsPrice = selectedBathrooms * pricingConfig.bathrooms;
    const sqftPrice = pricingConfig.sqft[selectedSqft] || 0;
    const extrasPrice = selectedExtras.length * pricingConfig.extras;

    const selectedPricing = pricingConfig[pricingStandard];
    const bedrooms = parseInt(bedroomValue);
    const bathrooms = parseInt(bathroomValue);

    if (
      selectedPricing &&
      selectedPricing[bedrooms] &&
      selectedPricing[bedrooms][bathrooms]
    ) {
      setTotalCost(selectedPricing[bedrooms][bathrooms]);
    } else {
      setTotalCost(null);
    }

    const subtotal =
      freqPrice + bedroomsPrice + bathroomsPrice + sqftPrice + extrasPrice;

    // Assuming taxRate is your tax rate (e.g., 10%)
    const taxRate = 0.1;
    const taxAmount = subtotal * taxRate;
    const totalPrice = subtotal + taxAmount;
    setPrice(totalPrice);
    setTaxAmount(taxAmount);
  }, [
    selectedFrequency,
    selectedBedrooms,
    selectedBathrooms,
    selectedSqft,
    selectedExtras,
  ]);

  // Update the price whenever the selected options change
  useEffect(() => {
    calculatePrice();
  }, [calculatePrice]);

  // Update the state when user makes selections

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

  useEffect(() => {
    // Calculate and set the total cost whenever the pricing standard changes
    calculateTotalCost();
  }, [pricingStandard, bedroomValue, bathroomValue]);


  const handleFrequencyChange = (event) => {
    setSelectedFrequency(event.target.value);
  };

  const handleBedroomsChange = (event) => {
    setSelectedBedrooms(parseInt(event.target.value));
  };

  const handleBathroomsChange = (event) => {
    setSelectedBathrooms(parseInt(event.target.value));
  };

  const handleSqftChange = (event) => {
    setSelectedSqft(event.target.value);
  };

  const handleExtrasChange = (event) => {
    const extra = event.target.value;
    setSelectedExtras((prevExtras) =>
      prevExtras.includes(extra)
        ? prevExtras.filter((item) => item !== extra)
        : [...prevExtras, extra]
    );
  };

  const handleRadioChange = (event) => {
    setSelectedKey(event.target.id);
    // You can also call handleChange or perform any other actions here
  };

  const handleCheckboxChange = (event) => {
    setKeepKeyChecked(event.target.checked);
    // You can also call handleChange or perform any other actions here
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
    console.log("first")
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

    console.log(formData);
    localStorage.setItem("formData", JSON.stringify(formData));
    localStorage.setItem("selectedFrequency", selectedFrequency);
    localStorage.setItem("selectedBedrooms", selectedBedrooms);
    localStorage.setItem("selectedBathrooms", selectedBathrooms);
    localStorage.setItem("selectedSqft", selectedSqft);
    localStorage.setItem("selectedExtras", selectedExtras);
    localStorage.setItem("selectedDate", selectedDate);
    localStorage.setItem("selectedTime", selectedTime);
    localStorage.setItem("price", price);
  };
  //payment
  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_live_51OB8RyA2dcJCHvz14zYzvwFYSvnbt222V0OttLJZSfwG0UgrfFdgF7LwsF5X4H42xlcy3jTjnZI23EL3SneYQpk700hVvfroBJ"
    );
    const body = [
      {
        Name: formData.firstName + " " + formData.lastName,
        Frequency: selectedFrequency,
        Bathrooms: selectedBathrooms,
        Bedrooms: selectedBedrooms,
        Sqft: selectedSqft,
        Extras: selectedExtras,
        price: price,
        Email: formData.email,
      },
    ];
    console.log(body);
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "http://localhost:7000/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );
    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
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
          {/* Frequency section */}
          <div className="border-b w-full py-4 lg:p-4">
            <h1 className="text-[#11263c] max-xxl:text-2xl xxl:text-6xl font-semibold mb-4">
              Frequency{" "}
            </h1>
            <div className="xl:space-x-3 lg:space-x-4 lg:-ml-4 xl:-ml-3 max-sm:flex max-sm:flex-col md:flex lg:flex-wrap md:items-center md:max-lg:flex-col max-lg:space-y-3">
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
                    onChange={handleFrequencyChange}
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
          {/* Service Type section */}
          <div className="border-b w-full py-4 lg:p-4">
            <h1 className="text-[#11263c] max-xxl:text-2xl xxl:text-6xl font-semibold mb-4">
              Service Type
            </h1>
            <div className="pl-2  space-x-5 rounded-2xl">
              <button className="w-20 h-10 bg-gray-300" onClick={handleStandardClick}>Standard</button>
              <button className="w-20 h-10 bg-gray-300" onClick={handleDeepClick}>Deep</button>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:max-xl:gap-x-5 xxl:gap-x-8  gap-y-8">
              {serviceTypeData.map((serviceType) => (
                <div
                  key={serviceType.id}
                  className="flex flex-col items-start justify-center"
                >
                  <div className="mb-2 block">
                    <label
                      htmlFor={serviceType.id}
                      className="lg:text-base text-xl xxl:text-3xl font-semibold -ml-6"
                    >
                      {serviceType.label}
                    </label>
                  </div>
                  <select
                    id={serviceType.id}
                    required
                    className="w-full xl:w-[320px] xxl:w-full"
                    value={
                      serviceType.id === "bedrooms"
                        ? selectedBedrooms
                        : serviceType.id === "bathrooms"
                        ? selectedBathrooms
                        : selectedSqft
                    }
                    onChange={
                      serviceType.id === "bedrooms"
                        ? handleBedroomsChange
                        : serviceType.id === "bathrooms"
                        ? handleBathroomsChange
                        : handleSqftChange
                    }
                  >
                    {serviceType.options.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
              ))}
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
                <div className="flex flex-col items-center">
                  <div
                    key={v.id}
                    onChange={handleExtrasChange}
                    checked={selectedExtras.includes(v.label)}
                    className="border flex items-center justify-center  rounded-md border-[#ced5d8] overflow-hidden peer"
                  >
                    <input
                      type="checkbox"
                      name={v.label}
                      id={v.label}
                      value={v.label}
                      className="peer hidden"
                    />
                    <label
                      htmlFor={v.label}
                      className=" extras peer-checked:bg-[#52616b] p-2 peer-checked:bg-opacity-60 "
                    >
                      <img
                        src={v.img}
                        alt=""
                        className="h-12 w-12 max-sm:h-16 max-sm:w-16 md:max-lg:h-16  md:max-lg:w-16 xxl:h-16 xxl:w-16 peer-checked:bg-[#52616b] peer-checked:bg-opacity-60"
                      />
                    </label>
                    {/* <TextInput
                      type="checkbox"
                      className="btn btn-light"
                      id={v.label}
                      autoComplete="off"
                    /> */}
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
                        required={
                          detail.id !== "secemail" &&
                          detail.id !== "sectel" &&
                          detail.id !== "apt"
                        }
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
              Select Service Provider
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
                  <label className="font-medium text-lg mb-6">
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
                    <label className="font-medium">Selected Date:</label>
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
                    <label className="font-medium">Selected Time:</label>
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
          {/* Key Info */}
          <div className="border-b w-full py-4 lg:p-4">
            <h1 className="text-[#11263c] max-xxl:text-2xl xxl:text-3xl mb-3 font-semibold">
              Key Information & Job Notes
            </h1>
            <p className="max-xxl:text-sm xxl:text-2xl text-[#52616b] mb-4">
              You can turn this description off or modify it at anytime.
            </p>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4">
              <div className="max-lg:w-full flex justify-center items-center">
                <input
                  type="radio"
                  defaultChecked
                  name="key"
                  id="keyinfo"
                  className="hidden peer"
                  onChange={handleRadioChange}
                />
                <label
                  htmlFor="keyinfo"
                  className="p-2 cursor-pointer text-center text-[#11263c]  bg-[#e5ecf2] rounded-lg w-full peer-checked:text-white peer-checked:bg-[#ced5d8]"
                >
                  Someone Will Be At Home
                </label>
              </div>
              <div className="max-lg:w-full flex justify-center items-center">
                <input
                  type="radio"
                  name="key"
                  id="provider"
                  className="hidden peer"
                  onChange={handleRadioChange}
                />
                <label
                  htmlFor="provider"
                  className="p-2 cursor-pointer text-center text-[#11263c]  bg-[#e5ecf2] rounded-lg w-full peer-checked:text-white peer-checked:bg-[#ced5d8]"
                >
                  I Will Hide The Keys
                </label>
              </div>
              <div className="flex items-center">
                <Checkbox
                  id="provider"
                  className="h-6 w-6"
                  onChange={handleCheckboxChange}
                />
                <Label
                  htmlFor="provider"
                  className="-ml-5 xxl:text-3xl max-lg:text-lg"
                >
                  Keep Key With Provider
                </Label>
              </div>
            </div>
            <div className="my-4">
              <div className="w-full">
                <div className="mb-2 block -ml-6">
                  <Label
                    htmlFor="note"
                    value="Customer Note For Provider"
                    className="lg:text-[17px] max-lg:text-lg xxl:text-2xl font-semibold"
                  />
                </div>
                <Textarea
                  id="note"
                  rows={5}
                  placeholder="Special Notes and Instructions"
                  onChange={(e) => handleChange("note", e.target.value)}
                />
              </div>
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
          {/* Coupon Code */}
          <div className="border-b w-full py-4 lg:p-4">
            <Tabs aria-label="Default Tabs" style="default">
              <Tabs.Item active title="Coupon Code">
                <div className="grid grid-cols-1 gap-4">
                  <div className="mb-2 flex items-center">
                    <Label
                      htmlFor="coupon"
                      value="Enter Coupon Code"
                      className="text-lg -ml-6"
                    />
                    <Tooltip
                      content="Please enter in your coupon code before adding in any gift card or referral credits. If you do not place in the coupon code first and apply a gift card or referral credit, you will be forced to reinput the gift card and/or referral credits."
                      arrow={false}
                      className="w-48 border bg-white  text-black font-normal text-center "
                    >
                      <IoMdInformationCircleOutline className="-ml-4 xxl:text-xl" />
                    </Tooltip>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <TextInput
                      id="coupon"
                      type="text"
                      placeholder="Enter Coupon Code"
                      onChange={(e) => handleChange("coupon", e.target.value)}
                    />
                    <Button>Apply</Button>
                  </div>
                </div>
              </Tabs.Item>
            </Tabs>
          </div>
        </div>
        {/* Payment */}
        <div className="flex flex-col items-start mb-4">
          <div className="flex items-center mb-4">
            <Checkbox id="agree" className="h-6 w-6" />
            <Label
              htmlFor="agree"
              className="-ml-5 xxl:text-5xl text-[#52616b] font-normal max-xxl:text-lg"
            >
              I affirm that I have read and agree to the Terms of Service and
              Privacy Policy.
            </Label>
          </div>
          <p className="mb-4 text-[#52616b]">
            By entering any information, you affirm you have read and agree to
            the Terms of Service and Privacy Policy.
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
            value="Send"
            className="w-full p-2 bg-[#ced5d8] border-[#ced5d8] hover:bg-transparent"
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
                          Bedrooms
                        </td>
                        <td>:</td>
                        <td className="text-[#11263c] xxl:text-xl">
                          {selectedBedrooms}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-sm xxl:text-xl text-[#6c757d]">
                          Bathrooms
                        </td>
                        <td>:</td>
                        <td className="text-[#11263c] xxl:text-xl">
                          {selectedBathrooms}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-sm xxl:text-xl text-[#6c757d]">
                          Sq Ft
                        </td>
                        <td>:</td>
                        <td className="text-[#11263c] xxl:text-xl">
                          {selectedSqft}
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
