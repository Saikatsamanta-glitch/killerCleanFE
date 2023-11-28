import React from "react";
import Table from "react-bootstrap/Table";
// import { BathroomCleaningData } from "../data";
const TableData = (props) => {
  return (
    <div className="flex justify-center  shadow-lg">
      <Table striped bordered className=" max-sm:w-[400px] sm:max-md:w-[400px] md:max-lg:w-[700px] lg:w-[900px] text-center ">
        <thead className="items-center text-sm lg:text-base">
          <tr>
            <th></th>
            <th>Standard Clean</th>
            <th>Deep Clean</th>
            <th>Move In/Move Out</th>
          </tr>
        </thead>
        <tbody className="items-center text-sm lg:text-base">
          {props.data.map((taskData, index) => (
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
        {/* <tbody>
          {BathroomCleaningData.map((taskData, index) => (
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
        </tbody> */}
      </Table>
    </div>
  );
};

export default TableData;
