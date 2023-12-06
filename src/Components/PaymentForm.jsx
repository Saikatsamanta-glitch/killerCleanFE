import React from "react";
import { Accordion } from "flowbite-react";

const Products = ({
  price,
  selectedFrequency,
  selectedBedrooms,
  selectedBathrooms,
  selectedSqft,
  selectedExtras,
}) => {
  return (
    <div className="w-[94%] m-auto left-3 right-3 z-20">
      <Accordion collapseAll className="shadow-lg border rounded-none">
        <Accordion.Panel>
          <Accordion.Title className="w-full">
            <div className="grid grid-cols-2 items-center gap-x-6 md:gap-x-[350px] px-2 w-full">
              <h1 className="font-bold text-lg xxl:text-3xl text-[#11263c]">
                Booking Summary
              </h1>
              <div className="flex flex-col justify-between items-center">
                <h1 className="text-2xl xxl:text-4xl text-orange-500">
                  ${price}
                </h1>
                <h1 className="text-2xl xxl:text-4xl text-orange-500">
                  ${price}
                </h1>
              </div>
            </div>
          </Accordion.Title>
          <Accordion.Content className="bg-white">
            <div className="border-y  bg-white ">
              <table className="text-base max-xxl:border-spacing-4 xxl:border-spacing-8 border-separate">
                <tbody>
                  {/* Include the relevant details from your props */}
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
                    <td className="text-sm xxl:text-xl text-[#6c757d]">Sq Ft</td>
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
                <h1 className="text-lg xxl:text-xl text-[#6c757d]">${price}</h1>
              </div>
              <div className="flex justify-between items-center">
                <h1 className="text-2xl xxl:text-4xl text-orange-500">TOTAL</h1>
                <h1 className="text-2xl xxl:text-4xl text-orange-500">${price}</h1>
              </div>
            </div>
          </Accordion.Content>
          <button>Pay Now</button>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Products;
