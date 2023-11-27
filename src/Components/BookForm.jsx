import React from "react";
import { CFormCheck } from "@coreui/react";
export default function BookForm() {
  return (
    <div>
      <div className=" w-[900px]  rounded-lg p-4 z-0 bg-white border">
        <div className="border-b w-full p-4">
          <h1 className="text-[#11263c] mb-4">Frequency </h1>
          <div className="space-x-3 -ml-3">
            <CFormCheck
              button={{ color: "secondary" }}
              type="radio"
              name="options"
              id="option1"
              autoComplete="off"
              label="One-time"
            />
            <CFormCheck
              button={{ color: "secondary" }}
              type="radio"
              name="options"
              id="option2"
              autoComplete="off"
              label="Weekly"
              defaultChecked
            />
            <CFormCheck
              button={{ color: "secondary" }}
              type="radio"
              name="options"
              id="option3"
              autoComplete="off"
              label="Every other week"
            />
            <CFormCheck
              button={{ color: "secondary" }}
              type="radio"
              name="options"
              id="option4"
              autoComplete="off"
              label="Every 4 weeks"
            />
            </div>
        </div>
      </div>
    </div>
  );
}
