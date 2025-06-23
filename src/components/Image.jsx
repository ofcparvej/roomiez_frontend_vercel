import React, { useState } from "react";

const Image = (props) => {
  return (
    <div>
      <img src={props.prop} alt="Dynamic image" />;
    </div>
  );
};

export default Image;
