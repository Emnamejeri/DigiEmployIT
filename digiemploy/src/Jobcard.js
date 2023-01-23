import React from "react";

function Jobcard(props) {
  return (
    <div>
      <h3>{props.JobTitle}</h3>
      <h6>{props.Department}</h6>
      <h6>{props.Location}</h6>
      <p>{props.Description}</p>
      <p>{props.Salary}</p>
    </div>
  );
}

export default Jobcard;
