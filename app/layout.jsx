import React from "react";
import HomePage from "./page";

const HomeLayout = ({ children }) => {
  console.log(children);
  return (
    <html lang="en">
      <body>
        <div> HomeLayout {children}</div>
      </body>
    </html>
  );
};

export default HomeLayout;
