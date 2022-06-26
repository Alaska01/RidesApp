import React from "react";
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterRidesByStates } from '../slice/ridesSlice';

function RidesStateLists() {

  const dispatch = useDispatch();
  const { ridesData } = useSelector((store) => store);

  useEffect(() => {
    dispatch(filterRidesByStates(ridesData.data))
  }, [ridesData.data.length])

  // function filterStates() {
  //   dispatch(filterRidesByStates(ridesData.data))
  // }

  console.log('RidesData', ridesData)

  return (
    <>
      {/* <h1>Hello Rides By State</h1>
      <button type='button' onClick={filterStates}>RidesStateList Test</button> */}
    </>
  );
}

export default RidesStateLists;