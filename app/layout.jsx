import React from "react";
import "@/assets/style.css";
import Navigation from "../components/head";
import Headcomponent from "../components/headcomponent";
import Infoboxes from "../components/infoboxes";
import "@/public/style.scss";
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
        <Headcomponent></Headcomponent>
        <Infoboxes></Infoboxes>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default HomeLayout;
