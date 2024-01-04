import React from "react";

const Header = () => {
 
const today = new Date()
const date = today.getDate().toString().padStart(2 , '0')
const year = today.getFullYear();
// Get month name
const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const month = monthNames[today.getMonth()];
// Get day name
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const day = dayNames[today.getDay()];

  return (
    <div className=" flex p-10 justify-between ">
      <div className="flex">
        <div className="text-5xl">{date}</div>
        <div className="pt-3 pl-2">
          <span className="block text-xs font-bold ">{month}</span>
          <span className="block text-xs">{year}</span>
        </div>
      </div>
      <div className="mt-3">{day.toUpperCase()}</div>
      {/* <div className="text-xl font-bold">{date}</div>
      <div className="text-lg">{day}</div> */}
    </div>
  );
};

export default Header;
