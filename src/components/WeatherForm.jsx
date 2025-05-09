const WeatherForm = ({ input, setInput, handleForm }) => (
    <form
        className="form"
        onSubmit={handleForm}
    >
        <input 
            className="search-field"
            type="text"
            placeholder="Search Location"
            onChange={(e) => setInput(e.target.value)}
            value={input}
        />
        <button className="search-btn">Search</button>
    </form>
);

export default WeatherForm;