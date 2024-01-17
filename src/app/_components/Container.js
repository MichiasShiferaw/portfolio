import React from "react";

function Container({ children, ...props }) {
  return (
    <div className="max-w-screen-lg mx-auto m-auto " {...props}>
      {children}
    </div>
  );
}

export default Container;
