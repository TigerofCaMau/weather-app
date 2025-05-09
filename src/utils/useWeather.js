import { useEffect, useState } from "react";
import { fetchWeatherData } from "./weatherService";
import { infoItems } from "./info";

const API_KEY = import.meta.env.VITE_API_KEY;

export const useWeather = () => {
    const [country, setCountry] = useState({});
    const [input, setInput] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchWeather = async () => {
        setLoading(true);
        try {
            const data = await fetchWeatherData(input, API_KEY);
            setCountry(data);
            setError(data.cod === "404");
        } catch (err) {
            console.error(err);
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const handleForm = (e) => {
        e.preventDefault();
        if (input) fetchWeather();
        setInput("");
    };

    useEffect(() => {
        setError(country?.cod?.toString() === "404");
    }, [country]);

    return {
        country,
        input,
        setInput,
        handleForm,
        infoItem: infoItems(country),
        error,
        loading,
    };
};