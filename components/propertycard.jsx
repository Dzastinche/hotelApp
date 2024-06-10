import React from "react";
import Image from "next/image";
import { IoLocationOutline, IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";
const Propertycard = ({ property }) => {
  const { name, type, rates, beds, baths, location, images, square_feet, _id } =
    property;
  const payingFor = () => {
    if (rates.monthly) {
      return `${rates.monthly.toString()}/mnly`;
    } else if (rates.weekly) {
      return `${rates.weekly.toString()}/wkly`;
    } else {
      return `${rates.nightly.toString()}/ngly`;
    }
  };
  return (
    <div className="rounded-xl shadow-md relative">
      <Image
        src={`/properties/${images[0]}`}
        width={500}
        height={500}
        alt=""
        className="w-full h-auto rounded-t-xl"
      />
      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          <div className="text-gray-600">{type}</div>
          <h3 className="text-xl font-bold">{name}</h3>
        </div>
        <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
          {payingFor()}
        </h3>

        <div className="flex justify-center gap-4 text-gray-500 mb-4">
          <p className="flex pfs">
            <IoBed className="align-self mr-2" />
            {beds}
            <span className="md:hidden lg:inline"> Beds</span>
          </p>
          <p className="flex pfs">
            <FaBath className="align-self" />

            {baths}
            <span className="md:hidden lg:inline"> Baths</span>
          </p>
          <p className="flex pfs">
            <TbRulerMeasure className="align-self pfs" />
            {square_feet} <span className="md:hidden lg:inline"> sqft</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
          {Object.keys(rates).map((el) => {
            const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);
            return (
              <p>
                <i className="fa-solid fa-money-bill"></i> {capitalize(el)}
              </p>
            );
          })}
          {/* <p>
            <i className="fa-solid fa-money-bill"></i> Weekly
          </p> */}
        </div>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            <i className="fa-solid fa-location-dot text-lg text-orange-700"></i>
            <IoLocationOutline className="fa-solid fa-location-dot text-lg text-orange-700" />
            <span className="text-orange-700">{location.city}</span>
          </div>
          <a
            href={`/properties/${_id}`}
            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Propertycard;
