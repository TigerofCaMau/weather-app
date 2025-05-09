export const infoItems = (country) => [
    { title: "NAME", value: country?.name || "" },
    { title: "TEMPERATURE", value: country?.main?.temp ? Math.round(country.main.temp - 275.15) + "°C" : "" },
    { title: "HUMIDITY", value: country?.main?.humidity ? country.main.humidity + "%" : "" },
    { title: "WIND SPEED", value: country?.wind?.speed ? country.wind.speed + "km/h" : "" },
];