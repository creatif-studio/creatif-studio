import React from "react";

const Container = ({ children, className = "" }) => {
  return (
    <div className={`max-w-container w-full ${className}`}>{children}</div>
  );
};

export default Container;
