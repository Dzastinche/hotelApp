import React from "react";
import properties from "@/assets/properties.json";
import Propertycard from "@/components/propertycard";

const PropertiesPage = () => {
  console.log("da", properties);
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
