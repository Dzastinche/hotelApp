import React from "react";

const Infobox = ({ boxInfo }) => {
  const { background, text, buttonCollors } = boxInfo;
  return (
    <div className={`${background} " p-6 rounded-lg shadow-md"`}>
      <h2 className="text-2xl font-bold">{text.headText}</h2>
      <p className="mt-2 mb-4">{text.contentText}</p>
      <a
        href="/properties.html"
        className={`inline-block ${buttonCollors.background} text-white rounded-lg px-4 py-2 ${buttonCollors.hover}`}
      >
        {text.buttonText}
      </a>
    </div>
  );
};

export default Infobox;
