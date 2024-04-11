import React from "react";
import "@/assets/style.css";
import Navigation from "../components/head";
export const metadata = {
  title: "Pulse][Properties",
  description: "Pulse app",
  keywords: "travel",
};
const HomeLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navigation></Navigation>
        {children}
      </body>
    </html>
  );
};

export default HomeLayout;
