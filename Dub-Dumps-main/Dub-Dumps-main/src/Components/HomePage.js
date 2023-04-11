import React from 'react'; //import React Component
import Map from './Map.js';
import { Link } from 'react-router-dom';

export default function HomePage(props) {
    return (
        <div>
            <Link className="map-link" to="/search">
                <h2 className="map-title">Find a Bathroom!</h2>
            </Link>
            <Map />
        </div>
    )
}