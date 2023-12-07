import React, { useState, useEffect, useRef } from "react";
import { CFormCheck } from "@coreui/react";
import emailjs from '@emailjs/browser';
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Tabs } from "flowbite-react";
import { Accordion } from "flowbite-react";
import {
  Label,
  Select,
  Tooltip,
  TextInput,
  Checkbox,
  Textarea,
  Button,
} from "flowbite-react";
import { FaRegCalendarDays } from "react-icons/fa6";
import { selectExtras } from "../data";
import DayTimePicker from "@mooncake-dev/react-day-time-picker";
import PopularQuestions from "./PopularQuestions";
import fakeRequest from "./EmailSender";
import { useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import { loadStripe } from "@stripe/stripe-js";

export default function BookForm() {
  const [isScheduling, setIsScheduling] = useState(false);
  const [isScheduled, setIsScheduled] = useState(false);
  const [scheduleErr, setScheduleErr] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setTablet] = useState(window.innerWidth < 1024);
  // Add these state variables at the beginning of your functional component

  const [selectedFrequency, setSelectedFrequency] = useState("Weekly");
  const [selectedBedrooms, setSelectedBedrooms] = useState(0);
  const [selectedBathrooms, setSelectedBathrooms] = useState(1);
  const [selectedSqft, setSelectedSqft] = useState("1 - 999 Sq Ft");
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [address, setAddress] = useState("");
  const [apt, setApt] = useState("");
  const [price, setPrice] = useState(0);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = (data) => console.log(data);

  // Define your pricing logic
  const calculatePrice = useCallback(() => {
    // Replace this with your actual pricing logic based on selected options
    const basePrice = 50; // Replace with your base price
    let freqPrice;
    if (selectedFrequency === "One-time") {
      freqPrice = 40;
    } else if (selectedFrequency === "Weekly") {
      freqPrice = 30;
    } else if (selectedFrequency === "Every other week") {
      freqPrice = 25;
    } else if (selectedFrequency === "Every 4 weeks") {
      freqPrice = 20;
    } else {
      freqPrice = 0;
    }
    const bedroomsPrice = selectedBedrooms * 10; // Replace with your bedrooms pricing logic
    const bathroomsPrice = selectedBathrooms * 5; // Replace with your bathrooms pricing logic
    let sqftPrice;
    if (selectedSqft === "1 - 999 Sq Ft") {
      sqftPrice = 8;
    } else if (selectedSqft === "1000 - 1499 Sq Ft") {
      sqftPrice = 16;
    } else if (selectedSqft === "1500 - 1999 Sq Ft") {
      sqftPrice = 24;
    } else if (selectedSqft === "2000 - 2499 Sq Ft") {
      sqftPrice = 32;
    } else if (selectedSqft === "2500 - 2999 Sq Ft") {
      sqftPrice = 40;
    } else if (selectedSqft === "3000 - 3499 Sq Ft") {
      sqftPrice = 48;
    } else if (selectedSqft === "3500 - 3999 Sq Ft") {
      sqftPrice = 56;
    } else if (selectedSqft === "4000 - 4499 Sq Ft") {
      sqftPrice = 72;
    } else if (selectedSqft === "4500 - 4999 Sq Ft") {
      sqftPrice = 80;
    } else if (selectedSqft === "5000 - 5499 Sq Ft") {
      sqftPrice = 88;
    } else if (selectedSqft === "5500 - 5999 Sq Ft") {
      sqftPrice = 96;
    } else {
      sqftPrice = 0;
    } // Replace with your sqft pricing logic
    const extrasPrice = selectedExtras.length * 5; // Replace with your extras pricing logic

    const totalPrice =
      basePrice +
      freqPrice +
      bedroomsPrice +
      bathroomsPrice +
      sqftPrice +
      extrasPrice;

    setPrice(totalPrice);
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
  const handleFrequencyChange = (event) => {
    setSelectedFrequency(event.target.value);
  };

  const handleAptChange = (event) => {
    setApt(event.target.value);
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
  // mobile and tablet view
  useEffect(() => {
    // Update isMobile when the window is resized
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setTablet(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScheduled = (date) => {
    setIsScheduling(true);
    setScheduleErr("");
    fakeRequest(date)
      .then((json) => {
        setScheduleErr("");
        setIsScheduled(true);
        console.log("fake response: ", json);
        console.log(json.scheduled)
      })
      .catch((err) => {
        setScheduleErr(err);
      })
      .finally(() => {
        setIsScheduling(false);
      });
  };
//email sending function
const form = useRef();

  const sendEmail = () => {
    emailjs.sendForm('service_lrzlb67', 'template_0qic7ra', form.current, 'lO680sw9k9xiPwwsB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  //payment
  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51JuieFSBsceWQO10Z6CPtqodHeO5xiUWcaWjxgbBmcyjIJmvfHe1NrvXjgyAzkjoiiuJLw65gsGmu8pFehjlxIXo00EsFRruol"
    );

    const body = [{
        price:price
    }];
    console.log(body)
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
        ref={form}
        onSubmit={
         ()=>{
          handleSubmit(onSubmit);
          sendEmail();
         }
        }
        className=" xl:max-xxl:w-[800px] xxl:w-[1500px]  lg:max-xl:w-[570px] max-lg:w-full z-0 "
      >
        <div className=" w-full bg-white border  p-4 rounded-lg mb-5">
          {/* Frequency section */}
          <div className="border-b w-full py-4 lg:p-4">
            <h1 className="text-[#11263c] max-xxl:text-2xl xxl:text-6xl font-semibold mb-4">
              Frequency{" "}
            </h1>
            <div className="xl:space-x-3 lg:space-x-4 lg:-ml-4 xl:-ml-3 max-sm:flex max-sm:flex-col md:max-lg:flex md:max-lg:flex-col space-y-3">
              {/* Radio buttons for frequency */}
              <CFormCheck
                button={{ color: "secondary" }}
                type="radio"
                name="frequency"
                id="option1"
                autoComplete="off"
                label="One-time"
                value="One-time"
                checked={selectedFrequency === "One-time"}
                onChange={handleFrequencyChange}
              />
              <CFormCheck
                button={{ color: "secondary" }}
                type="radio"
                name="frequency"
                id="option2"
                autoComplete="off"
                label="Weekly"
                value="Weekly"
                checked={selectedFrequency === "Weekly"}
                onChange={handleFrequencyChange}
                defaultChecked
              />
              <CFormCheck
                button={{ color: "secondary" }}
                type="radio"
                name="frequency"
                id="option3"
                autoComplete="off"
                label="Every other week"
                value="Every other week"
                checked={selectedFrequency === "Every other week"}
                onChange={handleFrequencyChange}
              />
              <CFormCheck
                button={{ color: "secondary" }}
                type="radio"
                name="frequency"
                id="option4"
                autoComplete="off"
                label="Every 4 weeks"
                value="Every 4 weeks"
                checked={selectedFrequency === "Every 4 weeks"}
                onChange={handleFrequencyChange}
              />
            </div>
          </div>
          {/* Service Type section */}
          <div className="border-b w-full py-4 lg:p-4">
            <h1 className="text-[#11263c] max-xxl:text-2xl xxl:text-6xl font-semibold mb-4">
              Service Type
            </h1>
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:max-xl:gap-x-5 xxl:gap-x-8  gap-y-8">
              {/* Bedrooms dropdown */}

              <div className="flex flex-col justify-center">
                <div className="mb-2 block">
                  <Label
                    htmlFor="bedrooms"
                    value="Bedrooms"
                    className="lg:text-base text-xl xxl:text-3xl font-semibold -ml-6"
                  />
                </div>
                <Select
                  id="bedrooms"
                  required
                  className="max-md:w-full xl:w-[320px] xxl:w-full"
                  value={selectedBedrooms}
                  onChange={handleBedroomsChange}
                >
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Select>
              </div>
              <div className="flex flex-col items-start justify-center">
                <div className="mb-2 block">
                  <Label
                    htmlFor="bathrooms"
                    value="Bathrooms"
                    className="lg:text-base text-xl xxl:text-3xl font-semibold -ml-6"
                  />
                </div>
                <Select
                  id="bathrooms"
                  required
                  className="w-full xl:w-[320px] xxl:w-full"
                  value={selectedBathrooms}
                  onChange={handleBathroomsChange}
                >
                  <option>1</option>
                  <option>1.5</option>
                  <option>2</option>
                  <option>2.5</option>
                  <option>3</option>
                  <option>3.5</option>
                  <option>4</option>
                  <option>4.5</option>
                  <option>5</option>
                  <option>5.5</option>
                  <option>6</option>
                  <option>6.5</option>
                  <option>7</option>
                  <option>7.5</option>
                </Select>
              </div>
              {/* Sq Ft dropdown */}
              <div className="flex flex-col items-start justify-center">
                <div className="mb-2 block">
                  <Label
                    htmlFor="sqft"
                    value="Sq Ft"
                    className="lg:text-base text-xl xxl:text-3xl font-semibold -ml-6"
                  />
                </div>
                <Select
                  id="sqft"
                  required
                  className="w-full xl:w-[320px] xxl:w-full"
                  value={selectedSqft}
                  onChange={handleSqftChange}
                >
                  <option>1 - 999 Sq Ft</option>
                  <option>1000 - 1499 Sq Ft</option>
                  <option>1500 - 1999 Sq Ft</option>
                  <option>2000 - 2499 Sq Ft</option>
                  <option>2500 - 2999 Sq Ft</option>
                  <option>3000 - 3499 Sq Ft</option>
                  <option>3500 - 3999 Sq Ft</option>
                  <option>4000 - 4499 Sq Ft</option>
                  <option>4500 - 4999 Sq Ft</option>
                  <option>5000 - 5499 Sq Ft</option>
                  <option>5500 - 5999 Sq Ft</option>
                </Select>
              </div>
              
            </div>
          </div>
          {/* Extras section */}
          <div className="border-b w-full py-4 lg:p-4">
            <h1 className="text-[#11263c] max-xxl:text-2xl xxl:text-6xl font-semibold mb-4">
              Select Extras{" "}
            </h1>
            <div className="grid xxl:grid-cols-6 xl:max-xxl:grid-cols-5 lg:max-xl:grid-cols-4 md:max-lg:grid-cols-3 max-ms:grid-cols-1 max-mm:grid-cols-1 max-ml:grid-cols-1 grid-cols-2 xxl:gap-10 lg:max-xxl:gap-3 max-lg:gap-2">
              {/* Checkboxes for extras */}
              {selectExtras.map((v, index) => (
                <div className="flex flex-col items-center">
                  <CFormCheck
                    key={v.id}
                    button={{ color: "light" }}
                    id={v.label}
                    autoComplete="off"
                    label={
                      <img
                        src={v.img}
                        alt=""
                        className="h-12 w-12 max-sm:h-16 max-sm:w-16 md:max-lg:h-16 md:max-lg:w-16 xxl:h-16 xxl:w-16 "
                      />
                    }
                    value={v.label}
                    onChange={handleExtrasChange}
                    checked={selectedExtras.includes(v.label)}
                  />
                  <div className="flex items-center ">
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
                </div>
              ))}
            </div>
          </div>
          {/* Customer Details */}
          <div className="border-b w-full py-4 lg:p-4">
            <h1 className="text-[#11263c] max-xxl:text-2xl xxl:text-6xl font-semibold mb-4">
              Customer Details{" "}
            </h1>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div>
                <Controller
                  name="FirstName"
                  rules={{
                    required: "First Name is Required",
                  }}
                  control={control}
                  render={({ field }) => (
                    <div>
                      <div className="mb-2 block -ml-6">
                        <Label
                          htmlFor="firstName"
                          value="First Name"
                          className="text-[17px] xxl:text-3xl font-semibold"
                        />
                      </div>
                      <TextInput
                        id="firstName"
                        type="text"
                        required
                        name="to_name"
                        sizing="md"
                        {...field}
                        placeholder="Ex: James"
                      />
                    </div>
                  )}
                />
                {errors?.FirstName?.message && 
        <span className="text-red-500 text-xs ml-0.5 font-medium">
                    {errors?.FirstName?.message}
                  </span>
                }
              </div>
              <div>
                <Controller
                  name="LastName"
                  rules={{
                    required: "Last Name is Required",
                  }}
                  control={control}
                  render={({ field }) => (
                    <>
                      <div className="mb-2 block -ml-6">
                        <Label
                          htmlFor="lastName"
                          value="Last Name"
                          className="text-[17px] xxl:text-3xl font-semibold"
                        />
                      </div>
                      <TextInput
                        id="lastName"
                        type="text"
                        sizing="md"
                        required
                        {...field}
                        placeholder="Ex: Lee"
                      />
                    </>
                  )}
                />
                {errors?.LastName?.message && (
                  <span className="text-red-500 text-xs ml-0.5 font-medium">
                    {errors?.LastName?.message}
                  </span>
                )}
              </div>
              <div>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email ID is Required",
                    pattern: {
                      value:
                        /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                      message: "Email ID is invaild",
                    },
                  }}
                  render={({ field }) => (
                    <>
                      <div className="mb-2 block -ml-6">
                        <Label
                          htmlFor="email"
                          value="Email Address"
                          className="text-[17px] xxl:text-3xl font-semibold"
                        />
                      </div>
                      <TextInput
                        id="email"
                        type="email"
                        {...field}
                        sizing="md"
                        name="user_email"
                        error={Boolean(errors?.email?.message)}
                        placeholder="Ex: example@xyz.com"
                      />
                    </>
                  )}
                />
                {errors?.email?.message && (
                  <span className="text-red-500 text-xs ml-0.5 font-medium">
                    {errors?.email?.message}
                  </span>
                )}
              </div>
              <div>
                <div className="mb-2 block -ml-6">
                  <Label
                    htmlFor="secemail"
                    value="Secondary Email Address"
                    className="text-[17px] xxl:text-3xl font-semibold"
                  />
                </div>
                <TextInput
                  id="secemail"
                  type="email"
                  sizing="md"
                  className=""
                  placeholder="Ex: example@xyz.com"
                />
              </div>
              <div>
                <Controller
                  name="tel"
                  control={control}
                  rules={{
                    required: "Phone No. is Required",
                    pattern: {
                      value: /^[0-9+ ]+$/,
                      message: "Phone No. is invaild",
                    },
                  }}
                  render={({ field }) => (
                    <>
                      <div className="mb-2 block -ml-6">
                        <Label
                          htmlFor="tel"
                          value="Phone No"
                          className="text-[17px] xxl:text-3xl font-semibold"
                        />
                      </div>
                      <TextInput
                        id="tel"
                        type="tel"
                        sizing="md"
                        {...field}
                        error={Boolean(errors?.tel?.message)}
                        placeholder="Phone No."
                      />
                    </>
                  )}
                />
                {errors?.tel?.message && (
                  <span className="text-red-500 text-xs ml-0.5 font-medium">
                    {errors?.tel?.message}
                  </span>
                )}
              </div>
              <div>
                <div className="mb-2 block -ml-6">
                  <Label
                    htmlFor="sectel"
                    value="Secondary Phone No"
                    className="text-[17px] xxl:text-3xl font-semibold"
                  />
                </div>
                <TextInput
                  id="sectel"
                  type="tel"
                  sizing="md"
                  className=""
                  placeholder="Phone No."
                />
              </div>
              <div className="flex items-center">
                <Checkbox id="check" className="h-6 w-6" />
                <Label
                  htmlFor="check"
                  className="-ml-5 xxl:text-3xl  max-lg:text-lg"
                >
                  Send me reminders about my booking via text message
                </Label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 my-4">
              <div>
                <Controller
                  name="address"
                  control={control}
                  render={({ field }) => (
                    <>
                      <div className="mb-2 block -ml-6">
                        <Label
                          htmlFor="address"
                          value="Address"
                          className="text-[17px] xxl:text-3xl font-semibold"
                        />
                      </div>
                      <TextInput
                        id="address"
                        type="text"
                        {...field}
                        sizing="md"
                        placeholder="Type Address"
                        name="address"
                      />
                    </>
                  )}
                />
                {errors?.address?.message && (
                  <span className="text-red-500 text-xs ml-0.5 font-medium">
                    {errors?.address?.message}
                  </span>
                )}
              </div>
              <div>
                <div>
              <Controller
              name="apt"
              control={control}
              render={({ field }) => (
                <>
                <div className="mb-2 block -ml-6">
                  <Label
                    htmlFor="apt"
                    value="Apt No"
                    className="text-[17px] xxl:text-3xl font-semibold"
                  />
                </div>
                <TextInput
                  id="apt"
                  type="text"
                  sizing="md"
                  {...field}
                  placeholder="#"
                 
                />
                </>
                  )}
                 
                />
              </div>
              </div>
            </div>
          </div>
          {/* Service Provider */}
          <div className="border-b w-full py-4 lg:p-4">
            <h1 className="text-[#11263c] max-xxl:text-2xl xxl:text-6xl font-semibold mb-4">
              Select Service Provider
            </h1>
            <div className="">
              <DayTimePicker
                timeSlotSizeMinutes={60}
                isLoading={isScheduling}
                isDone={isScheduled}
                err={scheduleErr}
                onConfirm={handleScheduled}

              />
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
              <CFormCheck
                button={{ color: "secondary" }}
                type="radio"
                name="keyinfo"
                id="athome"
                autoComplete="off"
                label="Someone Will Be At Home"
                defaultChecked
              />
              <CFormCheck
                button={{ color: "secondary" }}
                type="radio"
                name="keyinfo"
                id="hidekeys"
                autoComplete="off"
                label="I Will Hide The Keys"
              />
              <div className="flex items-center">
                <Checkbox id="provider" className="h-6 w-6" />
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
                    htmlFor="note"
                    value="Would You Like To Add Any Notes?"
                    className="lg:text-[17px] max-lg:text-lg xxl:text-2xl font-semibold"
                  />
                </div>
                <Textarea
                  id="note"
                  rows={6}
                  placeholder="Special Notes Or Instructions"
                />
              </div>
            </div>
          </div>
          {/* Coupon Code */}
          <div className="border-b w-full py-4 lg:p-4">
            <Tabs aria-label="Default Tabs" style="default">
              <Tabs.Item active title="Coupon Code">
                <form className="grid grid-cols-1 gap-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Label
                        htmlFor="email1"
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
                        id="base"
                        type="text"
                        placeholder="Enter Coupon Code"
                        required
                      />
                      <Button>Apply</Button>
                    </div>
                  </div>
                </form>
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
            {" "}
            <FaRegCalendarDays className="mr-2" /> Save Booking{" "}
          </Button>
        </div>
      </form>
      {/* Booking Summary and Questions */}
      <div className="flex flex-col items-center">
        
          <div className="card max-lg:fixed lg:sticky lg:top-[150px] max-lg:bottom-2 max-lg:left-0 max-lg:right-0 max-lg:mx-auto  z-10 w-[95%] lg:max-xxl:w-[350px] xxl:w-[500px] mb-16">
            <Accordion activeIndex={0} className="max-xxl:p-2 xxl:p-10">
              <Accordion.Panel>
                <Accordion.Title className="mb-6 font-bold text-lg xxl:text-3xl text-[#11263c]">
                  <div className="flex items-center justify-between">
                  Booking Summary
                  <div className="flex flex-col max-lg:block lg:hidden justify-between items-center">
                      <h1 className="text-2xl xxl:text-4xl text-orange-500">
                        ${price}
                      </h1>
                    </div>
                  </div>
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
                        ${price}
                      </h1>
                    </div>
                    <div className="flex justify-between items-center">
                      <h1 className="text-2xl xxl:text-4xl text-orange-500">
                        TOTAL
                      </h1>
                      <h1 className="text-2xl xxl:text-4xl text-orange-500">
                        ${price}
                      </h1>
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        
        <PopularQuestions />
      </div>
    </div>
  );
}
