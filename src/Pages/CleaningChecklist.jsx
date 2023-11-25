import React from "react";
import { Tabs } from "flowbite-react";
import TableData from "../Components/TableData";
import { BathroomCleaningData, BedroomAndCommonAreaCleaningData, KitchenCleaningData } from "../data";

const CleaningChecklist = () => {
  return (
    <div className="px-32 mt-10">
      <h1 className="text-[42px] text-[#014584] font-semibold text-center mb-4">
        Cleaning Checklist
      </h1>
      <div className=" w-[1200px shadow-lg bg-white">
        <div className="flex flex-row justify-evenly pt-7">
          <Tabs aria-label="Pills" style="pills">
            <Tabs.Item active title="KITCHEN">
            <TableData data={KitchenCleaningData} />
            </Tabs.Item>
            <Tabs.Item title="BATHROOM">
            <TableData data={BathroomCleaningData} />
            </Tabs.Item>
            <Tabs.Item title="BEDROOM & COMMON AREA">
            <TableData data={BedroomAndCommonAreaCleaningData} />
            </Tabs.Item>
          </Tabs>
        </div>
        
      </div>
    </div>
  );
};

export default CleaningChecklist;
