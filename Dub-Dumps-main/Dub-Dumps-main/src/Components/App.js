import React, { useState, useEffect } from 'react'; //import React Component
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate as navigateTo } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import SignIn from './SignIn.js';
import BathroomPage from './BathroomPage.js'
import HomePage from './HomePage.js';
import Header from './Header.js';
import Footer from './Footer.js';
import BathroomList from './BathroomList.js';
import StructuredSearch from './StructuredSearch.js';

function App(props) {
  const nullUser = { userId: null, userName: null };

  const [currentUser, setCurrentUser] = useState(nullUser);
  const [displayedData, setData] = useState(props.data);

  useEffect(() => {

    const auth = getAuth();

    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) { //is defined, so "logged in"
        firebaseUser.userId = firebaseUser.uid;
        setCurrentUser(firebaseUser);
      }
      else { //not defined, so logged out
        setCurrentUser(nullUser);
      }
    });
  })

  const loginUser = (userObject) => {
    setCurrentUser(userObject);
  }

  function applyFilter(bldgName, floorName, locationSelected) {
    let fullData = props.data;
    let bldgCards = fullData
    if (bldgName !== '') {
      bldgCards = bldgCards.filter(card => (card.building === bldgName))
    }
    if (floorName !== '') {
      bldgCards = bldgCards.filter(card => (card.floor === floorName))
    }
    if (locationSelected !== '') {
      bldgCards = bldgCards.filter(card => (card.location === locationSelected))
    }
    setData(bldgCards);
  }

  return (
    <>
      <Router>
        <Header currentUser={currentUser} />
        <Routes>
          <Route path="signin" element={
            <SignIn currentUser={currentUser} loginFunction={loginUser} />
          } />
          <Route path='home' element={<HomePage />} />
          <Route path='search' element={<StructuredSearch data={props.data} filterCallback={applyFilter} />} >
            <Route path='/search/br:bathroomID' element={<BathroomPage data={props.data} currentUser={currentUser} />} />
            <Route index element={<BathroomList data={displayedData} />} />
          </Route>
          <Route path='*' element={<Navigate to="/home" />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;

