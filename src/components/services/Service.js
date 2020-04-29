import React from "react";

function showData() {
  console.log("Test component");
}

const Service = props => {
  const { serviceData } = props;
  return (
    <div>
      <h3>
        {serviceData.name} <i onClick={showData} className="fa fa-rocket" />
      </h3>
      <p>{serviceData.description}</p>
    </div>
  );
};

export default Service;
