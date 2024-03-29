import React, { Fragment, useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoutes } from "../store/actions/nextTripAction";

function TripPlanner() {
  const [inputTextVal, setInputTextVal] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRoutes());
  }, []);

  return (
    <Fragment>
      {inputTextVal}
      <div role="list">
        <div>
          {(filteredList?.length &&
            filteredList.map((route, index) => {
              return (
                <div className="departure-list" key={index}>
                  <span>{route.route_label}</span>
                </div>
              );
            })) || <div />}
        </div>
      </div>
    </Fragment>
  );
}

export default TripPlanner;
