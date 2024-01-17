/* eslint-disable react/prop-types */
import React from "react";
import Table from "react-bootstrap/Table";
// import { BathroomCleaningData } from "../data";
const TableData = (props) => {
  return (
    <div className="flex justify-center w-full shadow-lg">
      <Table striped bordered className=" max-ms:w-[280px] ms:max-mm:w-[300px]  mm:w-[350px] ml:w-[380px] sm:max-md:w-[400px] md:max-lg:w-[700px] lg:w-[900px] text-center ">
        <thead className="items-center text-[13px] lg:text-base">
          <tr>
            <td></td>
            <td>Standard Clean</td>
            <td>Deep Clean</td>
            <td>Move In/Move Out</td>
          </tr>
        </thead>
        <tbody className="items-center text-sm lg:text-base">
          {props?.data?.map((taskData) => (
            <tr key={taskData.id}>
              <td>{taskData.task}</td>
              <td>
                {taskData.standardClean ? (
                  <i className="fi fi-bs-check"></i>
                ) : (
                  <i className="fi fi-br-cross-small"></i>
                )}
              </td>
              <td>
                {taskData.deepClean ? (
                  <i className="fi fi-bs-check"></i>
                ) : (
                  <i className="fi fi-br-cross-small"></i>
                )}
              </td>
              <td>
                {taskData.moveInOut ? (
                  <i className="fi fi-bs-check"></i>
                ) : (
                  <i className="fi fi-br-cross-small"></i>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableData;
