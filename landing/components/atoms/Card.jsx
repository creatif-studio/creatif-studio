import React from "react";

const Card = ({ children, className }) => {
  return <div className={`rounded-md border ${className}`}>{children}</div>;
};

export default Card;
