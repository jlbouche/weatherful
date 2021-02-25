import React from 'react';
import {Card} from 'react-bootstrap';

export default function WeatherCard({dt, temp_min, temp_max, main, icon}){
    const date = new Date(dt);
    return (
        <Card style={{width: '18rem'}}>
            <Card.Img 
                variant="top" 
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}>
            </Card.Img>
            <Card.Body>
                <Card.Title>{main}</Card.Title>
                <p>
                    {/*turning millisecond datetime into local date time */}
                    {date.toLocaleDateString()} - {date.toLocaleTimeString()}
                </p>
                {/*min temp*/}
                <p>Min: {temp_min}</p>
                {/*max temp*/}
                <p>Max: {temp_max}</p>
            </Card.Body>
        </Card>
    )
}