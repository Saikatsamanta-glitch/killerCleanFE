import React from "react";
import OurServices from "../Components/OurServices";

import Tired from "../Components/Tired";
import Welcome from "../Components/Welcome";
export default function Home() {
  return (
    <div className="w-screen">
      <Welcome />
      <Tired />
      <OurServices />
    </div>
  );
}
