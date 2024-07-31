import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { fetchCities } from "../api/OpenWeatherService";
import { useState } from "react";

export default function Header({ setCityValue, onSearchChange }) {
  const [citiesList, setCitiesList] = useState([]);

  const onSearch = async (e) => {
    const city = e.target.value;
    if (city.length > 2) {
      try {
        let res = await fetchCities(city);
        setCitiesList(res.data);
        if (res) {
          let result = citiesList.find(
            (item) => city.split(",")[0] === item.city
          );
          if (result) {
            setCityValue({ city: result.city, country: result.countryCode });
            onSearchChange(result.latitude, result.longitude);
          }
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <Row>
      <Col>
        <div className="d-flex justify-content-around align-items-center mb-3 flex-wrap">
          <div className="text-center">
            <strong className=" fs-1 fw-bold">
              <span className="capitalise">T</span>HE{" "}
              <span className="capitalise">W</span>EATHER{" "}
              <span className="capitalise">F</span>
              ORECASTING
            </strong>
          </div>
          <div>
            <input
              type="search"
              className="form-control searchField mt-3"
              list="citieslistOptions"
              placeholder="Search for cities..."
              onChange={onSearch}
            />
            <datalist id="citieslistOptions">
              <option>just</option>
              {citiesList &&
                citiesList.map((city, key) => {
                  return (
                    <option
                      key={key}
                      value={
                        city.name + ", " + city.region + ", " + city.country
                      }
                    />
                  );
                })}
            </datalist>
          </div>
        </div>
      </Col>
    </Row>
  );
}
