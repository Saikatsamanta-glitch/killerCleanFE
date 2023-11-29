import React, { useState, useEffect } from "react";
import { CFormCheck } from "@coreui/react";
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
  Radio,
} from "flowbite-react";
import { Link } from "react-router-dom";
import { selectExtras } from "../data";
import DayTimePicker from "@mooncake-dev/react-day-time-picker";
import PopularQuestions from "./PopularQuestions";
import fakeRequest from "./EmailSender";
export default function BookForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [check, setCheck] = useState("");
  const [touchedFields, setTouchedFields] = useState({});
  // const [checked, setChecked] = useState(false);
  const [isScheduling, setIsScheduling] = useState(false);
  const [isScheduled, setIsScheduled] = useState(false);
  const [scheduleErr, setScheduleErr] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setTablet] = useState(window.innerWidth < 1024);

  const [selectedOptions, setSelectedOptions] = useState({
    frequency: "Weekly",
    bedrooms: 0,
    bathrooms: 1,
    sqft: "1 - 999 Sq Ft",
  });

  const [selectedExtras, setSelectedExtras] = useState([]);

  // Function to handle changes in selected options
  const handleOptionChange = (event) => {
    const { name, value } = event.target;
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));
  };

  // Function to handle changes in selected extras
  const handleExtrasChange = (extraId) => {
    // Toggle the selected state of the extra
    setSelectedExtras((prevExtras) => {
      if (prevExtras.includes(extraId)) {
        return prevExtras.filter((id) => id !== extraId);
      } else {
        return [...prevExtras, extraId];
      }
    });
  };

  // Function to calculate the booking summary dynamically
  const calculateBookingSummary = () => {
    // Calculate the total based on selected options and extras
    // You can customize this based on your pricing logic
    const basePrice = 87.2;
    const extrasPrice = selectedExtras.length * 10; // Assuming each extra costs $10
    const totalPrice = basePrice + extrasPrice;

    return {
      basePrice,
      extrasPrice,
      totalPrice,
    };
  };

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
      })
      .catch((err) => {
        setScheduleErr(err);
      })
      .finally(() => {
        setIsScheduling(false);
      });
  };

  const handleInputChange = (event, setStateFunction) => {
    const { value, name } = event.target;
    setStateFunction(value);

    // Mark the field as touched
    setTouchedFields((prevTouchedFields) => ({
      ...prevTouchedFields,
      [name]: true,
    }));
  };
  const isFieldEmpty = (value) => value.trim() === "";

  const isFieldRequired = (field, value) => {
    return touchedFields[field] && isFieldEmpty(value);
  };
  return (
    <div className="flex flex-col lg:flex-row items-center py-14 lg:items-start justify-evenly px-2 lg:px-10 w-full">
      {/* Booking form container */}
      <div className=" xl:max-xxl:w-[800px] xxl:w-[1500px]  lg:max-xl:w-[570px] w-full rounded-lg p-4 z-0 bg-white border mb-5 ">
        <form action="">
          {/* Frequency section */}
          <div className="border-b w-full py-4 lg:p-4">
            <h1 className="text-[#11263c] text-3xl xxl:text-6xl font-semibold mb-4">
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
              />
              <CFormCheck
                button={{ color: "secondary" }}
                type="radio"
                name="frequency"
                id="option2"
                autoComplete="off"
                label="Weekly"
                defaultChecked
              />
              <CFormCheck
                button={{ color: "secondary" }}
                type="radio"
                name="frequency"
                id="option3"
                autoComplete="off"
                label="Every other week"
              />
              <CFormCheck
                button={{ color: "secondary" }}
                type="radio"
                name="frequency"
                id="option4"
                autoComplete="off"
                label="Every 4 weeks"
              />
            </div>
          </div>
          {/* Service Type section */}
          <div className="border-b w-full py-4 lg:p-4">
            <h1 className="text-[#11263c] text-3xl xxl:text-6xl font-semibold mb-4">
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
            <h1 className="text-[#11263c] max-xxl:text-3xl xxl:text-6xl font-semibold mb-4">
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
          {/* Service Provider */}
          <div className="border-b w-full py-4 lg:p-4">
            <h1 className="text-[#11263c] text-3xl xxl:text-6xl font-semibold mb-4">
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
          {/* Customer Details */}
          <div className="border-b w-full py-4 lg:p-4">
            <h1 className="text-[#11263c] text-3xl xxl:text-6xl font-semibold mb-4">
              Customer Details{" "}
            </h1>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
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
                  sizing="md"
                  required
                  className=""
                  placeholder="Ex: James"
                  value={firstName}
                  onChange={(e) => handleInputChange(e, setFirstName)}
                />
                {isFieldRequired("firstName", firstName) && (
                  <div className="text-red-600">This field is required</div>
                )}
              </div>
              <div>
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
                  className=""
                  placeholder="Ex: Lee"
                  value={lastName}
                  onChange={(e) => handleInputChange(e, setLastName)}
                />
                {isFieldRequired("lastName", lastName) && (
                  <div className="text-red-600">This field is required</div>
                )}
              </div>

              <div>
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
                  sizing="md"
                  required
                  className=""
                  placeholder="Ex: example@xyz.com"
                  value={email}
                  onChange={(e) => handleInputChange(e, setEmail)}
                />
                {isFieldRequired("email", email) && (
                  <div className="text-red-600">This field is required</div>
                )}
              </div>
              <div>
                <div className="mb-2 block -ml-6">
                  <Label
                    htmlFor="base"
                    value="Secondary Email Address"
                    className="text-[17px] xxl:text-3xl font-semibold"
                  />
                </div>
                <TextInput
                  id="base"
                  type="email"
                  sizing="md"
                  className=""
                  placeholder="Ex: example@xyz.com"
                />
              </div>
              <div>
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
                  required
                  className=""
                  placeholder="Phone No."
                  value={tel}
                  onChange={(e) => handleInputChange(e, setTel)}
                />
                {isFieldRequired("tel", tel) && (
                  <div className="text-red-600">This field is required</div>
                )}
              </div>
              <div>
                <div className="mb-2 block -ml-6">
                  <Label
                    htmlFor="base"
                    value="Secondary Phone No"
                    className="text-[17px] xxl:text-3xl font-semibold"
                  />
                </div>
                <TextInput
                  id="base"
                  type="tel"
                  sizing="md"
                  className=""
                  placeholder="Phone No."
                />
              </div>
              <div className="flex items-center">
                <Checkbox
                  id="check"
                  className="h-6 w-6"
                  value={check}
                  onChange={(e) => handleInputChange(e, setCheck)}
                />
                {isFieldRequired("check", check) && (
                  <div className="text-red-600">This field is required</div>
                )}
                <Label
                  htmlFor="check"
                  className="-ml-5 xxl:text-3xl  max-lg:text-lg"
                >
                  Send me reminders about my booking via text message
                </Label>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 my-4">
              <div>
                <div className="mb-2 block -ml-6">
                  <Label
                    htmlFor="base"
                    value="Address"
                    className="text-[17px] xxl:text-3xl font-semibold"
                  />
                </div>
                <TextInput
                  id="base"
                  type="text"
                  sizing="md"
                  required
                  className=""
                  placeholder="Type Address"
                />
              </div>
              <div>
                <div className="mb-2 block -ml-6">
                  <Label
                    htmlFor="base"
                    value="Apt No"
                    className="text-[17px] xxl:text-3xl font-semibold"
                  />
                </div>
                <TextInput
                  id="base"
                  type="text"
                  sizing="md"
                  required
                  className=""
                  placeholder="#"
                />
              </div>
            </div>
          </div>
          {/* Key Info */}
          <div className="border-b w-full py-4 lg:p-4">
            <h1 className="text-[#11263c] text-3xl xxl:text-3xl mb-3 font-semibold">
              Key Information & Job Notes
            </h1>
            <p className="text-sm xxl:text-2xl text-[#52616b] mb-4">
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
                  required
                  rows={5}
                  placeholder="Special Notes and Instructions"
                />
              </div>
            </div>
          </div>
          <div className="border-b w-full py-4 lg:p-4">
            <h1 className="text-[#11263c] text-2xl xxl:text-3xl font-semibold mb-4">
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
                  required
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
          {/* Payment */}
        </form>
      </div>
      {/* Booking Summary and Questions */}
      <div className="flex flex-col items-center">
        {isMobile || isTablet ? (
          <div className="fixed bottom-2 box-content  w-[94%] m-auto left-3 right-3 z-20">
            <Accordion className=" shadow-lg border rounded-none">
              <Accordion.Panel>
                <Accordion.Title className="w-full">
                  <div className="grid grid-cols-2 items-center gap-x-6 md:gap-x-[350px] px-2 w-full">
                    <h1 className="font-bold text-lg xxl:text-3xl text-[#11263c]">
                      Booking Summary
                    </h1>
                    <div className="flex flex-col justify-between items-center">
                      <h1 className="text-2xl xxl:text-4xl text-orange-500">
                        $87.20
                      </h1>
                      <h1 className="text-2xl xxl:text-4xl text-orange-500">
                        $87.20
                      </h1>
                    </div>
                  </div>
                </Accordion.Title>
                <Accordion.Content className="bg-white">
                  <div className="border-y  bg-white ">
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
                          <td className="text-[#11263c] xxl:text-xl">Weekly</td>
                        </tr>
                        <tr>
                          <td className="text-sm xxl:text-xl text-[#6c757d]">
                            Bedrooms
                          </td>
                          <td>:</td>
                          <td className="text-[#11263c] xxl:text-xl">0</td>
                        </tr>
                        <tr>
                          <td className="text-sm xxl:text-xl text-[#6c757d]">
                            Bathrooms
                          </td>
                          <td>:</td>
                          <td className="text-[#11263c] xxl:text-xl">1</td>
                        </tr>
                        <tr>
                          <td className="text-sm xxl:text-xl text-[#6c757d]">
                            Sq Ft
                          </td>
                          <td>:</td>
                          <td className="text-[#11263c] xxl:text-xl">
                            1-999 Sq Ft
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="p-2 mt-2 mb-2">
                    <div className="flex justify-between items-center">
                      <h1 className="text-lg xxl:text-xl text-[#6c757d]">
                        Total Before Tax
                      </h1>
                      <h1 className="text-lg xxl:text-xl text-[#6c757d]">
                        $87.20
                      </h1>
                    </div>
                    <div className="flex justify-between items-center">
                      <h1 className="text-2xl xxl:text-4xl text-orange-500">
                        TOTAL
                      </h1>
                      <h1 className="text-2xl xxl:text-4xl text-orange-500">
                        $87.20
                      </h1>
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        ) : (
          <div className="card w-full lg:max-xxl:w-[350px] xxl:w-[500px] mb-16">
            <Accordion activeIndex={0} className="max-xxl:p-5 xxl:p-10">
              <Accordion.Panel>
                <Accordion.Title className="mb-6 font-bold text-lg xxl:text-3xl text-[#11263c]">
                  Booking Summary
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
                          <td className="text-[#11263c] xxl:text-xl">Weekly</td>
                        </tr>
                        <tr>
                          <td className="text-sm xxl:text-xl text-[#6c757d]">
                            Bedrooms
                          </td>
                          <td>:</td>
                          <td className="text-[#11263c] xxl:text-xl">0</td>
                        </tr>
                        <tr>
                          <td className="text-sm xxl:text-xl text-[#6c757d]">
                            Bathrooms
                          </td>
                          <td>:</td>
                          <td className="text-[#11263c] xxl:text-xl">1</td>
                        </tr>
                        <tr>
                          <td className="text-sm xxl:text-xl text-[#6c757d]">
                            Sq Ft
                          </td>
                          <td>:</td>
                          <td className="text-[#11263c] xxl:text-xl">
                            1 - 999 Sq Ft
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="p-2 mt-2 mb-2">
                    <div className="flex justify-between items-center">
                      <h1 className="text-lg xxl:text-xl text-[#6c757d]">
                        Total Before Tax
                      </h1>
                      <h1 className="text-lg xxl:text-xl text-[#6c757d]">
                        $87.20
                      </h1>
                    </div>
                    <div className="flex justify-between items-center">
                      <h1 className="text-2xl xxl:text-4xl text-orange-500">
                        TOTAL
                      </h1>
                      <h1 className="text-2xl xxl:text-4xl text-orange-500">
                        $87.20
                      </h1>
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        )}
        <PopularQuestions />
      </div>
    </div>
  );
}
