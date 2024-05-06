import React from "react";
import Recentproperties from "@/components/recentproperties";
import isConnected from "@/config/database";

const page = () => {
  isConnected();
  return <Recentproperties></Recentproperties>;
};

export default page;
