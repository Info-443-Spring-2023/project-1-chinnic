import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate as navigateTo } from 'react-router-dom';
import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";

import HomePage from '../src/Components/HomePage.js';
import StructuredSearch from '../src/Components/StructuredSearch.js';
import bathroom from '../public/data/bathrooms.json';

// example tests to make sure I was doing it right

describe('Example tests',() => {

    describe('Find A Bathroom! Component',() => {

        it('renders the home page', () => {
            const component = renderer.create(
                <Router>
                    <HomePage></HomePage>
                </Router>
            );
            let tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        });

        test("The text renders", () => {
            render(  
                <Router>
                    <HomePage />
                </Router>
            );
            const text = screen.getByTestId('map-title');
            expect(text).toBeInTheDocument(); 
        })
    
        test("The text content matches", () => {
            render(  
                <Router>
                    <HomePage />
                </Router>
            );
            const text = screen.getByTestId('map-title');
            //expect(text).toHaveTextContent("Find a Bathroom!");
            expect(screen.getByText("Find a Bathroom!")).toBeInTheDocument(); 
        })
    })
})

// 

describe('Structured Searches Component Renders Correctly',() => {
    
    test("navigation search bar renders without errors", () => {
        const callback = jest.fn();
        render(  
            <Router>
                <StructuredSearch data={bathroom} filterCallback={callback} />
            </Router>
        );
        expect(screen.getByRole('navigation')).toBeInTheDocument(); 
    })

    test("snapshot of component renders correctly", () => {
        const callback = jest.fn();
        const component = renderer.create(
            <Router>
                <StructuredSearch data={bathroom} filterCallback={callback} />
            </Router>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})

describe('Default values are correct',() => {
    
    test("Building default value", () => {
        const callback = jest.fn();
        render(  
            <Router>
                <StructuredSearch data={bathroom} filterCallback={callback} />
            </Router>
        );
        expect(screen.getByRole('option', {name: 'Building'}).selected).toBe(true);
    })

    test("Floor default value", () => {
        const callback = jest.fn();
        render(  
            <Router>
                <StructuredSearch data={bathroom} filterCallback={callback} />
            </Router>
        );
        expect(screen.getByRole('option', {name: 'Floor'}).selected).toBe(true);
    })

    test("Location default value", () => {
        const callback = jest.fn();
        render(  
            <Router>
                <StructuredSearch data={bathroom} filterCallback={callback} />
            </Router>
        );
        expect(screen.getByRole('option', {name: 'Location'}).selected).toBe(true);
    })
})


describe('Allows user to change options',() => {
    
    test("Changing building value", () => {
        const callback = jest.fn();
        render(  
            <Router>
                <StructuredSearch data={bathroom} filterCallback={callback} />
            </Router>
        );
        userEvent.selectOptions(
            screen.getByTestId('select building'),
            screen.getByRole('option', {name: 'RAI'}),
        );
        expect(screen.getByRole('option', {name: 'RAI'}).selected).toBe(true);
    })

    test("Changing floor value", () => {
        const callback = jest.fn();
        render(  
            <Router>
                <StructuredSearch data={bathroom} filterCallback={callback} />
            </Router>
        );
        userEvent.selectOptions(
            screen.getByTestId('select floor'),
            screen.getByRole('option', {name: 'Basement'}),
        );
        expect(screen.getByRole('option', {name: 'Basement'}).selected).toBe(true);
    })

    test("Changing location value", () => {
        const callback = jest.fn();
        render(  
            <Router>
                <StructuredSearch data={bathroom} filterCallback={callback} />
            </Router>
        );
        userEvent.selectOptions(
            screen.getByTestId('select location'),
            screen.getByRole('option', {name: 'South'}),
        );
        expect(screen.getByRole('option', {name: 'South'}).selected).toBe(true);
    })
})

describe('Button Works Correctly',() => {

    test("Button renders correctly", () => {
        const callback = jest.fn();
        render(  
            <Router>
                <StructuredSearch data={bathroom} filterCallback={callback} />
            </Router>
        );
        expect(screen.getByRole('link', {name: 'Search!'})).toBeInTheDocument();
    })

    test("Filter callback function called", () => {
        const callback = jest.fn();
        render(  
            <Router>
                <StructuredSearch data={bathroom} filterCallback={callback} />
            </Router>
        );
        userEvent.click(screen.getByRole('link'));
        expect(callback).toBeCalled();
    })
})