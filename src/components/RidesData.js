import React from "react";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRidesData, filterRidesByStates } from '../slice/ridesSlice';

function RidesData() {

  const dispatch = useDispatch();
  const { ridesData } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getRidesData());
  }, []);

  useEffect(() => {
    dispatch(filterRidesByStates())
  }, [])

  return (
    <>
    </>
  );
}

export default RidesData;