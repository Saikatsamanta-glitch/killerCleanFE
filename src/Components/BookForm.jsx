import React, { useState } from "react";
import { CFormCheck } from "@coreui/react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import {
  Label,
  Select,
  Tooltip,
  TextInput,
  Checkbox,
  Textarea,
} from "flowbite-react";
import { selectExtras } from "../data";
import DayTimePicker from "@mooncake-dev/react-day-time-picker";
export default function BookForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [check, setCheck] = useState("");

  const [touchedFields, setTouchedFields] = useState({});
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
    <div className="flex items-center ">
      {/* Booking form container */}
      <div className=" w-[800px] rounded-lg p-4 z-0 bg-white border">
        {/* Frequency section */}
        <div className="border-b w-full p-4">
          <h1 className="text-[#11263c] text-base mb-4">Frequency </h1>
          <div className="space-x-3 -ml-3">
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
        <div className="border-b w-full p-8">
          <h1 className="text-[#11263c] text-2xl font-semibold mb-4">
            Service Type
          </h1>
          <div className="grid grid-cols-2 gap-y-8">
            {/* Bedrooms dropdown */}
            <div className="flex flex-col justify-center">
              <div className="mb-2 block">
                <Label
                  htmlFor="bedrooms"
                  value="Bedrooms"
                  className="text-base font-semibold -ml-6"
                />
              </div>
              <Select id="bedrooms" required className="w-[320px]">
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
                  className="text-base font-semibold -ml-6"
                />
              </div>
              <Select id="bathrooms" required className="w-[320px]">
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
                  className="text-base font-semibold -ml-6"
                />
              </div>
              <Select id="sqft" required className="w-[320px]">
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
        <div className="border-b w-full p-4">
          <h1 className="text-[#11263c] text-2xl font-semibold mb-4">
            Select Extras{" "}
          </h1>
          <div className="grid grid-cols-5 gap-3">
            {/* Checkboxes for extras */}
            {selectExtras.map((v, index) => (
              <div className="flex flex-col items-center">
                <CFormCheck
                  key={v.id}
                  button={{ color: "light" }}
                  id={v.label}
                  autoComplete="off"
                  label={<img src={v.img} alt="" className=" h-12 w-12 " />}
                />
                <div className="flex items-center ">
                  <Label
                    htmlFor={v.label}
                    value={v.label}
                    className="text-xs text-center px-0 pt-2 font-medium"
                  />
                  {v.tooltip ? (
                    <Tooltip
                      content={v.tooltip}
                      arrow={false}
                      className="w-48 border bg-white  text-black font-normal text-center "
                    >
                      <IoMdInformationCircleOutline className="mt-2 ml-1" />
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
        <div className="border-b w-full p-4">
          <h1 className="text-[#11263c] text-2xl font-semibold mb-4">
            Select Service Provider
          </h1>
          <div className="">
            <DayTimePicker timeSlotSizeMinutes={60} />
          </div>
        </div>
        {/* Customer Details */}
        <div className="border-b w-full p-4">
          <h1 className="text-[#11263c] text-2xl font-semibold mb-4">
            Customer Details{" "}
          </h1>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="mb-2 block -ml-6">
                <Label
                  htmlFor="firstName"
                  value="First Name"
                  className="text-[17px] font-semibold"
                />
              </div>
              <TextInput
                id="firstName"
                type="text"
                sizing="md"
                required
                className="w-[320px]"
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
                  className="text-[17px] font-semibold"
                />
              </div>
              <TextInput
                id="lastName"
                type="text"
                sizing="md"
                required
                className="w-[320px]"
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
                  className="text-[17px] font-semibold"
                />
              </div>
              <TextInput
                id="email"
                type="email"
                sizing="md"
                required
                className="w-[320px]"
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
                  className="text-[17px] font-semibold"
                />
              </div>
              <TextInput
                id="base"
                type="email"
                sizing="md"
                className="w-[320px]"
                placeholder="Ex: example@xyz.com"
              />
            </div>
            <div>
              <div className="mb-2 block -ml-6">
                <Label
                  htmlFor="tel"
                  value="Phone No"
                  className="text-[17px] font-semibold"
                />
              </div>
              <TextInput
                id="tel"
                type="tel"
                sizing="md"
                required
                className="w-[320px]"
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
                  className="text-[17px] font-semibold"
                />
              </div>
              <TextInput
                id="base"
                type="tel"
                sizing="md"
                className="w-[320px]"
                placeholder="Phone No."
              />
            </div>
            <div className="flex items-center">
              <Checkbox
                id="check"
                value={check}
                onChange={(e) => handleInputChange(e, setCheck)}
              />
              {isFieldRequired("check", check) && (
                <div className="text-red-600">This field is required</div>
              )}
              <Label htmlFor="check" className="-ml-5">
                Send me reminders about my booking via text message
              </Label>
            </div>
          </div>
          <div className="grid grid-cols-2 my-4">
            <div>
              <div className="mb-2 block -ml-6">
                <Label
                  htmlFor="base"
                  value="Address"
                  className="text-[17px] font-semibold"
                />
              </div>
              <TextInput
                id="base"
                type="text"
                sizing="md"
                required
                className="w-[320px]"
                placeholder="Type Address"
              />
            </div>
            <div>
              <div className="mb-2 block -ml-6">
                <Label
                  htmlFor="base"
                  value="Apt No"
                  className="text-[17px] font-semibold"
                />
              </div>
              <TextInput
                id="base"
                type="text"
                sizing="md"
                required
                className="w-[320px]"
                placeholder="#"
              />
            </div>
          </div>
        </div>
        {/* Key Info */}
        <div className="border-b w-full p-4">
          <h1 className="text-[#11263c] text-2xl mb-3 font-semibold">
            Key Information & Job Notes
          </h1>
          <p className="text-sm text-[#52616b] mb-4">You can turn this description off or modify it at anytime.</p>
          <div className="grid grid-cols-2 gap-4">
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
              <Checkbox id="provider" />
              <Label htmlFor="provider" className="-ml-5">
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
                  className="text-[17px] font-semibold"
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
        <div className="border-b w-full p-4">
          <h1 className="text-[#11263c] text-2xl font-semibold mb-4">
            Special Notes Or Instructions
          </h1>
          
          <div className="my-4">
            <div className="w-full">
              <div className="mb-2 block -ml-6">
                <Label
                  htmlFor="note"
                  value="Would You Like To Add Any Notes?"
                  className="text-[17px] font-semibold"
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
      </div>
      {/* Booking Summary and Questions */}
      <div>
        <div>

        </div>
      </div>
    </div>
  );
}
//
//In this code, I have added comments to explain the purpose of each section. The comments are conc
