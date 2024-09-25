import React from "react";
import "@/assets/style.css";
import Navigation from "../components/head";
import Headcomponent from "../components/headcomponent";
import "@/public/style.scss";
import App from "@/components/app";
import ProviderPage from "@/components/provider";
import Recentproperties from "../components/recentproperties";
export const metadata = {
  title: "Pulse][Properties",
  description: "Pulse app",
  keywords: "travel",
};
const HomeLayout = async ({ children }) => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/properties`);

  const result = await data.json();

  return (
    <html lang="en">
      <body>
        <ProviderPage>
          <App data={result.properties}>
            <Navigation></Navigation>
            <Headcomponent></Headcomponent>
            <main>{children}</main>
            <Recentproperties data={result.properties}></Recentproperties>
          </App>
        </ProviderPage>
      </body>
    </html>
  );
};

export default HomeLayout;
