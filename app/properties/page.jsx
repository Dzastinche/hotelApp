"use client";
import React, { useEffect } from "react";

import Propertycard from "@/components/propertycard";

const PropertiesPage = async () => {
  let properties = [];
  console.log("esim", properties);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/properties`)
      .then((el) => el.json())
      .then((el) => (properties = el));
  }, [properties]);
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map((el) => {
            return <Propertycard property={el}></Propertycard>;
          })}
        </div>
      </div>
    </section>
  );
};

export default PropertiesPage;
