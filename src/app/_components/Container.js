import React from "react";

function Container({ children, ...props }) {
  return (
    <div className="max-w-screen-xl mx-auto m-auto " {...props}>
      {children}
    </div>
  );
}

export default Container;

