export const getWeatherIcon = (weather) => {
    return weather
        ? `https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`
        : `https://openweathermap.org/img/wn/10d@4x.png`;
};

export const formatTemperature = (temp) => {
    return temp ? `${Math.round(temp - 275.15)}°C` : "25°C";
};

export const getWeatherDescription = (description) => {
    return description ? description[0].description : "Overcast Clouds";
};