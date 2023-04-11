import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'; //import React Component
import { Link, Outlet } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

export function StructuredSearch(props) {
    const [bldgSelected, setBldg] = useState('');
    const [floorSelected, setFloor] = useState('');
    const [locationSelected, setLocation] = useState('');

    const changeBldg = evt => {
        setBldg(evt.target.value);
    }

    const changeFloor = evt => {
        setFloor(evt.target.value);
    }

    const changeLocation = evt => {
        setLocation(evt.target.value);
    }

    const handleClick = evt => {
        props.filterCallback(bldgSelected, floorSelected, locationSelected);
    }

    // Array of buildings
    let uniqueBuildings = new Set();
    for (let i = 0; i < props.data.length; i++) {
        uniqueBuildings.add(props.data[i].building)
    }
    uniqueBuildings = Array.from(uniqueBuildings);
    const buildings = uniqueBuildings.map((building) => {
        return <option key={building} value={building}>{building}</option>
    })

    // Array of floors
    let uniqueFloors = new Set();
    for (let i = 0; i < props.data.length; i++) {
        uniqueFloors.add(props.data[i].floor)
    }
    uniqueFloors = Array.from(uniqueFloors);

    const floors = uniqueFloors.map((floor) => {
        return <option key={floor} value={floor}>{floor}</option>
    })

    // Array of Locations
    let uniqueLocations = new Set();
    for (let i = 0; i < props.data.length; i++) {
        uniqueLocations.add(props.data[i].location)
    }
    uniqueLocations = Array.from(uniqueLocations);

    const locations = uniqueLocations.map((location) => {
        return <option key={location} value={location}>{location}</option>
    })


    return (
        <div><Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="hamburger" />
            <Navbar.Collapse id="responsive-navbar-nav navBar">
                <Nav className="mr-auto">
                    <select id="buildingSelect" className="navDropDown" onChange={changeBldg} >
                        <option value="">Building</option>
                        {buildings}
                    </select>
                    <select id="floorSelect" className="navDropDown" onChange={changeFloor} >
                        <option value="">Floor</option>
                        {floors}
                    </select>
                    <select id="locationSelect" className="navDropDown" onChange={changeLocation} >
                        <option value="">Location</option>
                        {locations}
                    </select>
                    <div className="col-auto">
                        <Link to="/search" id="submitButton" type="submit" className="btn btn-warning" onClick={handleClick}>Search!</Link>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
            <Outlet />
        </div >
    )
}

export default StructuredSearch;