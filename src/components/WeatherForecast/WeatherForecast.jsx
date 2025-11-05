import './WeatherForecast.css';


const DailyWeatherItem = ({day}) => {
    return (
        <div className="weather">
            <h2>{day.day}</h2>
            <img src={day.img} alt={day.imgAlt} />
            <p><span>conditions: </span>{day.conditions}</p>
            <p><span>time: </span>{day.time}</p>
        </div>
    );
};

export default DailyWeatherItem; 



