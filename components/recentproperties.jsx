import React from "react";
import properties from "@/assets/properties.json";
import Propertycard from "@/components/propertycard";

const Recentproperties = () => {
  const fewPropertyes = properties
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto ">
        <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          Recent properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fewPropertyes.map((el) => {
            return <Propertycard property={el}></Propertycard>;
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
      </div>
    </section>
  );
};

export default Recentproperties;
