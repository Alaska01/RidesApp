import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { getUserData } from "../slice/userSlice";
// import Body from "./Body";
import './User.css'

function User() {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store);
  useEffect(() => {
    dispatch(getUserData());
  }, []);

  console.log(user)
  return (
    <>
      <div className="navigation">
        <div>
          <h1>Edvora</h1>
        </div>

        <div className="sub-navigation">
          <div>
            <h1>{user.userdata.name}</h1>
          </div>
          <div>
            <img src={user.userdata.url} alt={`picture of ${user.userdata.name}`} className="img" />
          </div>

        </div>
      </div>

      <div>
        {/* <Body /> */}
      </div>
    </>
  );
}

export default User;