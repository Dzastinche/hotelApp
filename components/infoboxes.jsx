import React from "react";
import Infobox from "./infobox";

const Infoboxes = () => {
  return (
    <div className="container-xl lg:container m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Infobox
          boxInfo={{
            background: "bg-gray-100",
            text: {
              headText: "For Renters",
              contentText:
                "Find your dream rental property. Bookmark properties and contact owners",
              buttonText: "Browse Properties",
            },
            buttonCollors: { background: "bg-black", hover: "bg-gray-700" },
          }}
        ></Infobox>
        <Infobox
          boxInfo={{
            background: "bg-blue-100",
            text: {
              headText: "For Property Owners",
              contentText:
                "List your properties and reach potential tenants. Rent as an airbnbor long term",
              buttonText: "Add Property",
            },
            buttonCollors: { background: "bg-blue-500", hover: "bg-blue-600" },
          }}
        ></Infobox>
      </div>
    </div>
  );
};

export default Infoboxes;
