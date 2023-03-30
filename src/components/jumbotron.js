import React from "react";

const Jumbotron = ({ children }) => {

  return (
    <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 flex items-center py-10">
      <div className=" mx-auto max-w-md w-full">
          <h1 className="text-white text-center font-bold text-2xl ml-8">
            Search for Images
            <span role="img" aria-label="camera" className="ml-8">
              📸
            </span>
          </h1>
          {children}
          </div>
        </div>
  );
};

export default Jumbotron;
