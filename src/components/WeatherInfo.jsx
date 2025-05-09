import InfoItem from "./InfoItem"

const WeatherInfo = ({ infoItem, error, loading }) => {
    if (loading) {
        return (
            <div className="loading-container">
                <div className="loading"></div>
            </div>
        );
    }
    
    return (
        <div className="day-info">
            {infoItem.map((item) => (
                <InfoItem
                    key={item.title}
                    title={item.title}
                    value={item.value}
                />
            ))}
            {error && <div>Please enter valid country or city</div>}
        </div>
    );
};

export default WeatherInfo;