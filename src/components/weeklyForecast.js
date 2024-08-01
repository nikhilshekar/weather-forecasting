import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DAYS } from "../utilities/dateConstants";
import getImageURL from "../utilities/imageUtility";

const WeeklyForecast = ({ data }) => {
  console.log(data);
  const getDay = (d) => {
    const date = new Date(d);
    const day = date.getDay();
    return DAYS[day];
  };
  return (
    <>
      <div className="sub-heading">Weekly Forecast</div>
      <div className="d-flex flex-column  mt-3 gap-2 fs-7">
        {data &&
          data.map((item, i) => (
            <div className="card border-light bg-transparent p-2">
              <Row>
                <Col>
                  <span className="fw-bolder"> {getDay(item.date)}</span>
                </Col>
                <Col>
                  <i className="fa-solid fa-temperature-low mt-1 me-2"></i>
                  <span className="fw-bolder">
                    {Math.round(item.temp) + "\u00B0C"}
                  </span>
                </Col>
                <Col>
                  <i className="fa-solid fa-wind mt-1 me-2"></i>
                  <span className="fw-bolder">{item.wind} m/s</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="text-start   ms-lg-5 ms-md-4   ms-sm-4 ">
                    <span>
                      <img
                        src={getImageURL(item.icon)}
                        alt=""
                        width={32}
                        height={32}
                        className="me-2"
                      />
                    </span>
                    <span className="fs-6">{item.description}</span>
                  </div>
                </Col>
                <Col>
                  <i className="fa-solid fa-cloud mt-1 me-2"></i>
                  <span className="fw-bolder">{item.clouds}%</span>
                </Col>
                <Col>
                  <i className="fa-solid fa-droplet mt-1 me-1"></i>
                  <span className="fw-bolder">{item.humidity}%</span>
                </Col>
              </Row>
            </div>
          ))}
      </div>
    </>
  );
};

export default WeeklyForecast;
