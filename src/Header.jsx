import React from "react";
import joker from "/joker.png";

const Header = () => {
  return (
    <div className=" mb-8 bg-[#a025c8]  text-white text-xl font-medium">
      <div className="flex p-2 items-center">
        <div className="w-16 h-16">
          <img src={joker} alt="joker" className="w-full h-full" />
        </div>
        <span>MemeGenerator</span>
      </div>
    </div>
  );
};

export default Header;
