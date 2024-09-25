"use client";
import React, { useEffect, useState } from "react";

import Propertycard from "@/components/propertycard";
import { useSelector } from "react-redux";

const PropertiesPage = () => {
  const propertiesFromStore = useSelector((store) => store.allOFters);
  let [properties, addproperties] = useState([]);

  useEffect(() => {
    if (propertiesFromStore) {
      addproperties(propertiesFromStore);
    }
  }, [propertiesFromStore]);

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {!properties ||
            properties.map((el, i) => {
              return <Propertycard key={i} property={el}></Propertycard>;
            })}
        </div>
      </div>
    </section>
  );
};

export default PropertiesPage;
