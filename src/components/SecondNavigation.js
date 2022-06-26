import React from "react";
import "./SecondNavigation.css"
import { useSelector, useDispatch } from 'react-redux';
// import RidesData from './RidesData';
import { currentSelectedState, currentSelectedStateData, filteredRidesByCities } from "../slice/ridesSlice";
// import { } from "../slice/generalDataSlice"

function SecondNavigation() {

  const { ridesData } = useSelector((store) => store);
  const dispatch = useDispatch();

  function nearestRides() {

  }

  function upcomingRides() {

  }

  function pastRides() {

  }

  let stateOptions = ridesData.ridesByStates.map((element) => {
    return { value: element, label: element }
  })

  // console.log('From Second Navigation Current State Data', ridesData.currentStateData)

  function handleSelectState(e) {
    dispatch(currentSelectedState(e.target.value))
    if (ridesData.currentState !== "") {
      dispatch(currentSelectedStateData());
    }
    // console.log(e.target.value)
  }

  function handleSelectCity(e) {
    if (ridesData.currentState !== "") {
      dispatch(filteredRidesByCities());
    }
  }

  let selectedState = <select onChange={handleSelectState}>
    {stateOptions.map((option, index) => (
      <option key={`${index}-${option.value}`} value={option.value}>{option.label}</option>
    ))}
  </select>



  return (
    <>
      <div className="second-navigation">
        <div className="rides-navigation">
          <h4 onClick={nearestRides}>Nearest Rides</h4>
          <h4 onClick={upcomingRides}>Upcoming Rides</h4>
          <h4 onClick={pastRides}>Past Rides</h4>
        </div>
        <div>
          <h4>
            Filters
            <br />
            {selectedState}
            <br></br>
            {/* {selectedCity} */}
          </h4>
        </div>
      </div>

    </>
  );
}

export default SecondNavigation;