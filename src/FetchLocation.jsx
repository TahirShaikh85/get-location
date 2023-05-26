import React, { useState } from 'react';

const FetchLocation = () => {
    const [locationData, setLocationData] = useState([]);

    const fetchLocations = async () => {
        try {
            const serverUrl = 'https://wt-significant-honduras-direct.trycloudflare.com/api/getLocation';
            const response = await fetch(serverUrl);
            const data = await response.json();

            setLocationData(data);
        } catch (error) {
            console.log('Error while fetching location data:', error);
        }
    };

    const fetchLocationInfo = (latitude, longitude) => {
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.table(data.address);
            })
            .catch(() => {
                console.log('Error occurred while fetching location information');
            });
    };

    return (
        <div>
            <button className="btn btn-primary" onClick={fetchLocations}>
                Fetch Locations
            </button>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Latitude</th>
                        <th scope="col">Longitude</th>
                    </tr>
                </thead>
                <tbody>
                    {locationData.map((location, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{location.latitude}</td>
                            <td>{location.longitude}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FetchLocation;
