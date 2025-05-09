export const getFormattedDays = () => {
    const Days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const day = new Date();
    const dayName = Days[day.getDay()];
    const month = day.toLocaleString("default", {month: "long"});
    const date = day.getDate();
    const year = day.getFullYear();

    const fullDate = `${date} ${month} ${year}`;

    return { dayName, fullDate };
};