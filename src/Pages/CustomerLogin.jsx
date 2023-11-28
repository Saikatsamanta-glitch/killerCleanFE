import React,{useState} from "react";
import { Link } from "react-router-dom";
import { Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { BsKey } from "react-icons/bs";

const CustomerLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  const [showEmailHelperText, setShowEmailHelperText] = useState(false);
  const [showPasswordHelperText, setShowPasswordHelperText] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    const isEmailValid = email.trim() !== '';
    const isPasswordValid = password.trim() !== '';

    setShowEmailHelperText(!isEmailValid);
    setShowPasswordHelperText(!isPasswordValid);

    setIsFormValid(isEmailValid && isPasswordValid);

    if (isFormValid) {
      // If the form is valid, you can submit the form or perform other actions
      // Add your form submission logic here
    }
  };
  return (
    <div
      className="w-screen p-24 flex flex-col items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://dp3d2hb4975es.cloudfront.net/assets/images/login-signup-bg.jpg')",
      }}
    >
      <div className="min-h-[450px] ">
        <h1 className="text-center lg:max-xxl:text-3xl text-[24px] xxl:text-5xl font-semibold mb-3">Sign In</h1>
        <p className="text-center mb-5 text-sm xxl:text-xl">
          Sign in to track your bookings, reschedule, edit and more.
        </p>
        <form>
          <div className="form-group mb-4 ml-6">
            <Label className="mb-3 text-gray-600 xxl:text-2xl" for="exampleInputEmail1">
              Sign In Through Your Email
            </Label>
            <TextInput
              type="email"
                // className="form-control h-12 w-[550px] rounded-[4px] border-gray-300 placeholder:text-gray-300 placeholder:text-sm"
              id="email4"
              icon={HiMail}
              placeholder="Ex:example@xyz.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}

            />
            {showEmailHelperText && (
          <div className="text-red-500 border-red-500" color="failure">This field should not be empty.</div>
        )}
          </div>
          <div className="form-group mb-4 ml-6">
            <TextInput
              type="password"
              //   className="form-control h-12 w-[550px] rounded-[4px] border-gray-300 placeholder:text-gray-300 placeholder:text-sm"
              id="passward"
              icon={BsKey}
              placeholder="Password"
              value={password}
          onChange={(e) => setPassword(e.target.value)}
            />
            {showPasswordHelperText && (
          <div className="text-red-500 border-red-500">This field should not be empty.</div>
        )}
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              onClick={validateForm}
              className={`btn w-28 h-12 font-bold xxl:text-xl ${
                isFormValid ? 'bg-[#ced5d8] text-white' : 'bg-gray-400 text-gray-700'
              } mb-4 ml-6`}
              disabled={!isFormValid}
            >
              Sign In
            </button>
            <Link href="" className="mr-6 text-gray-500 xxl:text-xl">
              Forget Passward ?
            </Link>
          </div>
          <p className="ml-6 text-gray-500 xxl:text-xl">
            New? <Link className="text-[#00D0FF]">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CustomerLogin;
