import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Header from "./components/header";
import CurrentWeather from "./components/currentWeather";
import AirCondtions from "./components/airConditions";
import backgroundVideo from "./assets/background.mp4";
import { useState } from "react";
import { fetchWeatherData } from "./api/OpenWeatherService";
import {
  getTodayForecastWeather,
  transformDateFormat,
  getWeekForecastWeather,
} from "./utilities/dataUtility";
import TodaysForecast from "./components/todaysForecast";
import { ALL_DESCRIPTIONS } from "./utilities/dateConstants";
import WeeklyForecast from "./components/weeklyForecast";
import { BsMoonStarsFill } from "react-icons/bs";

function App() {
  const [cityValue, setCityValue] = useState();
  const [todayWeatherData, setTodayWeatherData] = useState();
  const [weeklyWeatherData, setWeeklyWeatherData] = useState();
  const [todayForecast, setTodayForecast] = useState([]);

  const searchChangeHandler = async (lat, long) => {
    const currentDate = transformDateFormat();
    const date = new Date();
    let dt_now = Math.floor(date.getTime() / 1000);

    try {
      const [todayWeatherResponse, weekForecastResponse] =
        await fetchWeatherData(lat, long);
      const all_today_forecasts_list = getTodayForecastWeather(
        weekForecastResponse,
        currentDate,
        dt_now
      );

      const all_week_forecasts_list = getWeekForecastWeather(
        weekForecastResponse,
        ALL_DESCRIPTIONS
      );

      setTodayWeatherData(todayWeatherResponse);
      setWeeklyWeatherData(all_week_forecasts_list);
      setTodayForecast([...all_today_forecasts_list]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="center">
      <video autoPlay muted loop id="myVideo">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="container p-3">
        <Header
          setCityValue={setCityValue}
          onSearchChange={searchChangeHandler}
        />
        {cityValue ? (
          <Row className=" mt-3">
            <Col sm={12} md={6}>
              <Stack gap={2} className="mx-auto mb-4 text-center fs-5">
                <CurrentWeather cityValue={cityValue} data={todayWeatherData} />
                <AirCondtions data={todayWeatherData} />
                <TodaysForecast data={todayForecast} />
              </Stack>
            </Col>
            <Col sm={12} md={6} className="text-center">
              <WeeklyForecast data={weeklyWeatherData} />
            </Col>
          </Row>
        ) : (
          <div className="d-flex justify-content-center flex-column align-items-center my-5">
            <span className="moon-star">
              <BsMoonStarsFill />
            </span>
            <span className="fw-bold mt-1 text-center">
              Explore current weather data and 6-day forecast of more than
              200,000 cities!
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
