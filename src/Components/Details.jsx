import React, { useEffect, useState } from "react";

export default function Details(props) {
  const [moreInfo, setMoreInfo] = useState(false);

  const MoreDetails = () => {
    console.log("person", props.person);
    return (
      <div>
        <p>
          Date Of Birth: {props.person.dob.date} Age: {props.person.dob.age}
        </p>
      </div>
    );
  };

  return (
    <div>
      {moreInfo && <MoreDetails />}
      <button onClick={() => setMoreInfo(!moreInfo)}>
        {moreInfo ? "Display Less Info" : "Display More Info"}
      </button>
    </div>
  );
}
