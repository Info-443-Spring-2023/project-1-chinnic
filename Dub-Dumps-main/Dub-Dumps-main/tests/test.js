import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate as navigateTo } from 'react-router-dom';
import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'

import BathroomPage from '../src/Components/BathroomPage.js'
import HomePage from '../src/Components/HomePage.js';
import Header from '../src/Components/Header.js';
import Footer from '../src/Components/Footer.js';
import BathroomList from '../src/Components/BathroomList.js';
import StructuredSearch from '../src/Components/StructuredSearch.js';

afterEach(() => {
    cleanup(); // Resets the DOM after each test suite
})

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];

test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  });

  
it('renders the home page', () => {
    const component = renderer.create(
        <Router>
            <HomePage></HomePage>
        </Router>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});


describe('Find A Bathroom! Component',() => {
    
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
        expect(text).toHaveTextContent("Find a Bathroom!"); 
    })
})
