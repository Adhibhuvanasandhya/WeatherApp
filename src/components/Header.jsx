
import React from "react";

const Header = ({ currentTime }) => {
  return (
    <div className="items-center">
      <h1 className="text-4xl font-bold animate-bounce">Weather App</h1>
      <p className="text-xl">{currentTime}</p>
    </div>
  );
};

export default Header;
