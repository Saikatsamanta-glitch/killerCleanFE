import BookEdit from "../Components/BookEdit";
import React, { useEffect, useState } from "react";
import BookForm from "../Components/BookForm";

export default function Book() {
  return (
    <div className="w-screen book-page bg-white p-[10px]">
      <div className="w-full bg-[#f0f5f9]  ">
        <div className="flex flex-col max-lg:px-4 max-lg:py-4 xl:py-16 lg:py-12 lg:px-[150px] xl:px-[280px]">
          <h1 className="max-sm:text-[32px] sm:max-xxl:text-[44px] mb-4 xxl:text-8xl text-[#11263c] font-bold text-center">
            Book A Cleaning Today
          </h1>
          <p className="lg:text-[15px] text-lg xxl:text-2xl font-medium text-center text-[#52616b] ">
            Enter your information below to secure your appointment! Once your
            booking is confirmed a notification will be sent to your email.
            (<span className="italic">This is a demo booking form</span>).
          </p>
        </div>
        <div>
          <BookForm />
        </div>
      </div>
      <BookEdit />
    </div>
  );
}
