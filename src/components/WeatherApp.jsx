import { useWeather } from '../utils/useWeather';
import WeatherLeftContent from './WeatherLeftContent';
import WeatherForm from './WeatherForm';
import WeatherInfo from './WeatherInfo';

const API_KEY = import.meta.env.VITE_API_KEY;

const WeatherApp = () => {
    const { country, input, setInput, handleForm, infoItem, error, loading } = useWeather();

    return (
        <div className="weather-container">
            <div className="weather-wrapper">
                <div className="weather-img">
                    <WeatherLeftContent handleCountry={country} />
                </div>

                <div className="weather-content">
                    <WeatherForm
                        input={input}
                        setInput={setInput}
                        handleForm={handleForm}
                    />
                    <WeatherInfo
                        infoItem={infoItem}
                        error={error}
                        loading={loading}
                    />
                </div>
            </div>
        </div>
    );
};

export default WeatherApp;