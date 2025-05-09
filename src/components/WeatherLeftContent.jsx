import { getFormattedDays } from "../utils/getFormattedDate";
import { getWeatherIcon, formatTemperature, getWeatherDescription } from "../utils/weatherUtils";

const WeatherLeftContent = ({ handleCountry }) => {
    const { dayName, fullDate } = getFormattedDays();
    const weather = handleCountry.weather;
    const temp = handleCountry.main?.temp;

    return (
        <div className="default-info">
            <h2 className="default-day">{dayName}</h2>
            <span className="default-date">{fullDate}</span>
            <div className="icons">
                <img
                    className="image"
                    src={getWeatherIcon(weather)}
                    alt="weather-icon"
                />
                <h2 className="degree">{formatTemperature(temp)}</h2>
                <h3 className="weather-description">{getWeatherDescription(weather)}</h3>
            </div>
        </div>
    );
};

export default WeatherLeftContent;
