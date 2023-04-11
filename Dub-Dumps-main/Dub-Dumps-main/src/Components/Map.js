import React from 'react'; //import React Component

export default function Map(props) {
    return (
        <div>
            <div className="map">
                <iframe title="DUB DUMPS bathroom map" className="map-image" src="https://snazzymaps.com/embed/398528" width="80%" height="550px"></iframe>
                <p>Use our map to find nearby bathrooms!</p>
            </div>
        </div>
    );
}