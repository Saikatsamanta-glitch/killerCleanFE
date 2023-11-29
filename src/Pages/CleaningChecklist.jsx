import React from "react";
import { Tabs } from "flowbite-react";
import TableData from "../Components/TableData";
import {
  BathroomCleaningData,
  BedroomAndCommonAreaCleaningData,
  KitchenCleaningData,
} from "../data";
const tab = {
  tabitem: {
    base: "flex items-center justify-center p-1 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:outline-none",
    styles: {
      default: {
        base: "rounded-t-lg",
        active: {
          on: "bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",
          off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300",
        },
      },
    },
  },
};
const CleaningChecklist = () => {
  return (
    <div className=" sm:px-32 px-2 mt-10 ">
      <h1 className="md:max-xxl:text-[42px] text-[32px] text-[#014584] font-semibold text-center mb-4">
        Cleaning Checklist
      </h1>
      <div className="flex justify-center shadow-lg bg-white">
        <div className="flex flex-row justify-evenly items-center  pt-7">
          <Tabs
            aria-label="Pills"
            style="pills"
            className="flex items-center justify-center"
            theme={tab}
          >
            <Tabs.Item active title="KITCHEN" className="p-0" >
              <TableData data={KitchenCleaningData} />
            </Tabs.Item>
            <Tabs.Item title="BATHROOM" className="p-0">
              <TableData data={BathroomCleaningData} />
            </Tabs.Item>
            <Tabs.Item title="BEDROOM & COMMON AREA" className="p-0">
              <TableData data={BedroomAndCommonAreaCleaningData} />
            </Tabs.Item>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CleaningChecklist;
