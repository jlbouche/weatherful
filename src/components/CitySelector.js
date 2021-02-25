import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';


export default function CitySelector({onSearch}){
    const [city, setCity] = useState('');

    function onKeyDown(event){
        if (event.keyCode === 13) {
            onSearch();
        }
    }

    return (
        <>
            <Row>
                <Col>
                <h1>Search your city:</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={4} className="text-center">
                    <FormControl
                        placeholder="Enter city name"
                        onChange={(event) => setCity(event.target.value)}
                        value={city}
                        onKeyDown={onKeyDown}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                <Button onClick={onSearch}>Check Weather</Button>
                </Col>
            </Row>
        </>
    )
}