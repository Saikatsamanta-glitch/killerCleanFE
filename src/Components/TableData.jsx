import React from "react";
import Table from "react-bootstrap/Table";
// import { BathroomCleaningData } from "../data";
const TableData = (props) => {
  return (
    <div className="flex justify-center mt-10 mb-20 shadow-lg">
      <Table striped bordered className="mx-10 text-center mb-20">
        <thead className="items-center">
          <tr>
            <th></th>
            <th>Standard Clean</th>
            <th>Deep Clean</th>
            <th>Move In/Move Out</th>
          </tr>
        </thead>
        <tbody>
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
