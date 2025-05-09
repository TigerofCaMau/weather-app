export const fetchWeatherData = async (city, API_KEY) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    if (!response.ok) throw new Error("Failed to fetch weather data");
    return await response.json();
};