import React from "react";

const ResultTable = () => {
  return (
    <div>
      <table>
        <thead className="table-header">
          <tr className="table-row">
            <td>Name</td>
            <td>Attempts</td>
            <td>Earns Point</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr className="table-body">
            <td>Santu De</td>
            <td>03</td>
            <td>20</td>
            <td>Passed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
