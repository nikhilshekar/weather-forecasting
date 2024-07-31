import React from "react";
import getImageURL from "../utilities/imageUtility";

const TodaysForecast = ({ data }) => {
  return (
    <>
      <div className="sub-heading">Today's Forecast</div>
      <div className="d-flex flex-wrap justify-content-evenly m-2">
        {data && data?.map((item, index) => (
          <div className="card bg-transparent p-3 px-4 mt-1" key={index}>
            <div className="fs-6">{item.time}</div>
            <div>
              <img
                src={getImageURL(item.icon + ".png")}
                alt=""
                width={32}
                height={32}
              />
            </div>
            <div className="fw-bold">{item.temperature}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodaysForecast;
