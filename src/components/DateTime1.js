import React from "react";

function DateTime1() {
  let a = "03/13/2022 01:01 AM"
  const date = new Date();
  let date2 = Date.parse(a)
  let date3 = new Date(date2);
  const [month, day, year] = [date3.getMonth(), date3.getDate(), date3.getFullYear()];
  const [month1, day1, year1] = [date.getMonth(), date3.getDate(), date3.getFullYear()];
  console.log("Time", date, date2, date3, 'Month', month, day, year)
  console.log("Time", 'Month1', month1, day1, year1)
  return (
    <>
      <h1>Date Time</h1>
    </>
  );
}

export default DateTime1;