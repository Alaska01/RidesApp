import React from "react";
import "./Body.css"
import SecondNavigation from "./SecondNavigation";
import RidesStateLists from './RidesStateLists';
import DisplayRides from "./DisplayRides";

function Body() {
  return (
    <>
      <div className="body">
        <SecondNavigation />
        <RidesStateLists />
        <DisplayRides />
      </div>
    </>
  );
}

export default Body;