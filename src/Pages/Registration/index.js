import React from "react";

const Registration = () => {
  return (
    <>
      <h2 className="heading">Registration</h2>
      <p className="para">
        Fee structure is given at below table. The registration fee can be paid by one of the given
        payment modes. The authors may pay using core banking from their bank accounts.
      </p>
      <p className="para">Please note that only one paper is covered by 1 author registration.</p>
      <p className="para">
        <b>Normal paper is 5 pages</b> and &nbsp;
        <b>each extra page costs US$ 40/page (strickly applied)</b>
      </p>
      <p className="para">
        Authors with multiple papers need to pay extra 100 US$ charge for each extra paper with 5
        pages.
      </p>
      <p className="para">
        Registration Fee includes; Conference Kit, Tea/coffee, Banquet Dinner and Transport from /to
        airport with scheduled buses.
      </p>
      <p className="para">
        Accommodation will be provided at subsidised rates during registration if requested.
      </p>
      <p className="para">Unregistered papers will not be included in proceedings.</p>
      <p className="para">
        <b>Registration Fees:</b>
        <table className="table">
          <tr>
            <th>Category</th>
            <th>Indian Authors</th>
            <th>Foreigners</th>
          </tr>
          <tr>
            <td>Member IEEE</td>
            <td>Rs. 4500</td>
            <td>200 USD</td>
          </tr>
          <tr>
            <td>Non Member</td>
            <td>Rs. 5000</td>
            <td>250 USD</td>
          </tr>
          <tr>
            <td>Students Ph.D.</td>
            <td>Rs. 4000</td>
            <td>175 USD</td>
          </tr>
          <tr>
            <td>Students UG/PG</td>
            <td>Rs. 3500</td>
            <td>150 USD</td>
          </tr>
          <tr>
            <td>Institute Registration</td>
            <td>Rs. 1000</td>
            <td>350 USD</td>
          </tr>
          <tr>
            <td>Extra proceedings</td>
            <td>Rs. 500</td>
            <td>50 USD</td>
          </tr>
          <tr>
            <td>Attendee/Co-author (with registration Kit)</td>
            <td>Rs. 1500</td>
            <td>125 USD</td>
          </tr>
          <tr>
            <td>Companion (no kit) /Attending with authors</td>
            <td>Rs. 1000</td>
            <td>75 USD</td>
          </tr>
        </table>
        <b>Note:</b> All fees are base fee and need to be added 18% GST while paying.
      </p>
      <p className="para">
        Conference participants who pay their registration fees will be able to benefit from
        accommodation pricing as listed in <b>"Accommodation"</b> section.
      </p>
      <p className="para">Accommodation will be provided on reduced fee.</p>
      <p className="para">
        Hostel Accommodation is also available for Rs. 200 per person perday having single bed in a
        room.
      </p>
      <p className="para">
        <b>PAYMENT MODES:</b>
        <br />
        <b>
          Credit card / debit card / Money transfer Transfer charges of payments will be paid by the
          participants
        </b>
      </p>
      <p className="para">Any enquiries can be forwarded to:</p>
    </>
  );
};

export default Registration;
