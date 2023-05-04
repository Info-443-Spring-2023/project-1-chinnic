import React, { useState } from 'react'; //import React Component
import { Link, Outlet } from 'react-router-dom';
import { Nav, Navbar } from "react-bootstrap";

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

    const handleClick = () => {
        props.filterCallback(bldgSelected, floorSelected, locationSelected);
    }

    // Returns a unique array of options for a specific filtered value
    function createUniqueOptions(valueType) {
        const allOptions = props.data
            .map(item => item[valueType]);  // map to get an array of only the specific value type

        const uniqueOptions = [...new Set(allOptions)]; // creates Set for unique values, then back to array

        return uniqueOptions.map((valueType) => {
            return <option key={valueType} value={valueType}>{valueType}</option>;
        })
    }

    // Array of buildings
    const buildings = createUniqueOptions("building");

    // Array of floors
    const floors = createUniqueOptions("floor");

    // Array of locations
    const locations = createUniqueOptions("location");

    return (
        <div><Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" name="navbar">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="hamburger" />
            <Navbar.Collapse id="responsive-navbar-nav navBar">
                <Nav className="mr-auto">
                    <select id="buildingSelect" className="navDropDown" onChange={changeBldg} data-testid="select building">
                        <option value="">Building</option>
                        {buildings}
                    </select>
                    <select id="floorSelect" className="navDropDown" onChange={changeFloor} data-testid="select floor">
                        <option value="">Floor</option>
                        {floors}
                    </select>
                    <select id="locationSelect" className="navDropDown" onChange={changeLocation} data-testid="select location">
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