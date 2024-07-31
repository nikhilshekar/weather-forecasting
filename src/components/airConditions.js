export default function AirCondtions({ data }) {
  return (
    <>
      <div className="sub-heading">Air Conditions</div>
      <div className="d-flex justify-content-around flex-wrap gap-3 align-items-center mx-4 my-1 mb-5">
        <div className="fw-bold">
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-between">
              <i className="fa-solid fa-temperature-low mt-1 me-1"></i>
              <span>Real Feel</span>
            </div>
            <div className="fw-bold">{data && Math.round(data.main.feels_like) + "\u00B0C"}</div>
          </div>
        </div>
        <div className="fw-bold">
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-between gap-1">
              <i className="fa-solid fa-wind mt-1"></i>
              <span>Wind</span>
            </div>
            <div>{data && data.wind.speed + " m/s"}</div>
          </div>
        </div>
        <div className="fw-bold">
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-between">
              <i className="fa-solid fa-cloud mt-1 me-1"></i>
              <span>Clouds</span>
            </div>
            <div>{data && data.clouds.all + "%"}</div>
          </div>
        </div>
        <div className="fw-bold">
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-between">
              <i className="fa-solid fa-droplet mt-1 me-1"></i>
              <span>Humidity</span>
            </div>
            <div>{data && data.main.humidity + "%"}</div>
          </div>
        </div>
      </div>
    </>
  );
}
