import getImageURL from "../utilities/imageUtility";

export default function CurrentWeather({ data, cityValue }) {
  return (
    <>
      <div className="sub-heading">Current Weather</div>
      <div className="d-flex justify-content-around align-items-center gap-1 flex-wrap mb-5">
        <div className=" fw-bolder mx-2">
          {cityValue && cityValue.city + ", " + cityValue.country}
        </div>
        <div className="mx-2">
          <div className="fw-bolder">
            {data &&
              Math.round(data.main.temp) + "\u00B0C"}
          </div>
          <div className="text-capitalize fw-normal">
            {data && data.weather[0].description}
          </div>
        </div>
        <div className="mx-2">
          {data ? (
            <img
              className=""
              alt="Weather"
              src={getImageURL(data.weather[0].icon+".png")}
              width={64}
              height={64}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}
