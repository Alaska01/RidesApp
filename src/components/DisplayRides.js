import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import "./DisplayRides.css"
import { currentSelectedStateData, } from "../slice/ridesSlice";
import { generalFilteredData } from "../slice/generalDataSlice";

function DisplayRides() {

  const dispatch = useDispatch();
  const { ridesData } = useSelector((store) => store);
  const { user } = useSelector((store) => store);
  const { generalData } = useSelector((store) => store);
  let station_code_data = user.userdata.station_code

  function RidesDataCompiler() {
    let upcomingRides = []
    let pastRides = []
    let generalDataWay = []
    let currentDate = new Date();
    console.log('upComingRides Function', ridesData.currentStateData)
    console.log('test mike', generalData)

    ridesData.currentStateData.forEach((elem) => {
      // The code Below can replace the code in the condition
      // Date.parse(elem.date) > Date.parse(currentDate)
      if (elem.date.valueOf() > currentDate.valueOf()) {
        return upcomingRides.push(elem)
      } else {
        return pastRides.push(elem)
      }
    })

    generalDataWay = [ridesData.currentStateData, upcomingRides, pastRides]
    useEffect(() => {
      dispatch(generalFilteredData(generalDataWay))
    }, generalDataWay[0], generalDataWay[1], generalDataWay[2])

    console.log('upComing', 'past', generalData)
  }

  RidesDataCompiler()


  function displayRaceDetails() {
    if (ridesData.currentStateData.length > 0) {

      let distanceArr = ridesData.currentStateData.map((el) => {
        return el.station_path.find((elem => elem >= station_code_data)) - station_code_data
      });

      // convert Distance to Object and Sort Below
      const distanceObj = Object.assign({}, [...distanceArr])

      function sortObjectEntries(obj) {
        return Object.entries(obj).sort((a, b) => a[1] - b[1]).map(el => +el[0])
      }

      function sortingValues(obj) {
        return Object.values(obj)
      }

      let sortedValues = sortingValues(sortObjectEntries(distanceObj))
      const sortedDistancesArray = [];
      sortedValues.forEach(function (element, index, array) {
        return sortedDistancesArray.push(ridesData.currentStateData[element])
      })
      console.log('Love Portion', distanceArr, ridesData.currentStateData, 'sorted Array', sortedDistancesArray)

      let display = sortedDistancesArray.map((element, index) => {
        return <div key={index} className="background-display-rides">
          <div >
            <img src={element.map_url} className="image" alt={element.name} />
          </div>
          <div>

            <h4>Ride ID: {element.id}</h4>
            <h4>Origin Station: {element.origin_station_code}</h4>
            <h4>Station_Path: {JSON.stringify(element.station_path)}</h4>
            <h4>Date: {element.date}</h4>
            <h4>Full Year: {Date.parse(element.date)}</h4>
            <h4>Distance: {element.station_path.find((elem => elem >= station_code_data)) - station_code_data} </h4>
            <h4>User Station_Code: {station_code_data}</h4>
          </div>
          <div>
            <h4>{element.city}</h4>
            <h4>{element.state}</h4>
          </div>
        </div>
      })
      console.log('Jack Hamilton', ridesData.currentStateData)
      return display;
    } else {
      return <div className="background-display-rides">
        <h1>Loading ...., try selecting city again if issue persist</h1>
      </div>
    }
  }

  return (
    <>
      <div >
        {displayRaceDetails()}
      </div>

    </>
  );
}

export default DisplayRides;