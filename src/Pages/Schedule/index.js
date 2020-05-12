import React from "react";

const Schedule = () => {
  return (
    <>
      <h2 className="heading">Important Dates/Schedule</h2>
      <p className="para">
        <table className="table">
          <tr>
            <th>Task</th>
            <th>Date</th>
            <th>Remarks</th>
          </tr>
          <tr>
            <td>Paper Submission Open</td>
            <td>01-03-2020</td>
            <td>Submission page on cicn.in or edas.info</td>
          </tr>
          <tr>
            <td>Last date of Paper Submission</td>
            <td>30-06-2020</td>
            <td></td>
          </tr>
          <tr>
            <td>Last date of Notification</td>
            <td>15-07-2020</td>
            <td></td>
          </tr>
          <tr>
            <td>Last Date of Registration</td>
            <td>30-07-2020</td>
            <td></td>
          </tr>
          <tr>
            <td>Last date of Final paper Submission</td>
            <td>15-08-2020</td>
            <td></td>
          </tr>
          <tr>
            <td>Conference Dates</td>
            <td>25 & 26-09-2020</td>
            <td></td>
          </tr>
        </table>
      </p>
    </>
  );
};

export default Schedule;
