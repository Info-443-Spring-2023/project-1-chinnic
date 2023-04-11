import React, { useState } from 'react'; //import React Component
import React from 'react';

function App(props) {

  //Your work goes here

  const [displayedData, displayedDataSetter] = useState(props.gameData);

  function applyFilter(nameToFilter, booleanRunners) {
    let gameDataHolder = props.gameData;
    if (nameToFilter == "") {
      displayedDataSetter(gameDataHolder);
    } else {
      let arr = gameDataHolder.filter(game => game.winner == nameToFilter);
      displayedDataSetter(arr);
      if(booleanRunners == true) {
        let arr2 = props.gameData.filter(game => game.runner_up == nameToFilter || game.winner == nameToFilter);
        displayedDataSetter(arr2);
      }
    }
  }
  
  //get sorted list of unique teamNames. reduce array of objects into array of strings, 
  //convert to Set to get uniques, spread back into array, and sort 
  const uniqueTeamNames = [...new Set(props.gameData.reduce((all, current) => {
    return all.concat([current.winner, current.runner_up]);
  }, []))].sort();

  return (
    <nav class="navbar navbar-expand-lg navbar-light">
  <img class="nav-logo" src="./img/logo.png" width="50px" height="50px">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown">
        <a class="nav-category dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" data-bs-toggle="dropdown" aria-expanded="false">
          Building
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <div class="drop-item">
            <input type="checkbox" class="form-check-input" id="dropdownCheck">
            <label class="form-check-label" for="dropdownCheck">
              MGH
            </label>
          </div>
          <div class="drop-item">
            <input type="checkbox" class="form-check-input" id="dropdownCheck">
            <label class="form-check-label" for="dropdownCheck">
              GWN
            </label>
          </div>
          <div class="drop-item">
            <input type="checkbox" class="form-check-input" id="dropdownCheck">
            <label class="form-check-label" for="dropdownCheck">
              KNE
            </label>
          </div>
          <div class="drop-item">
            <input type="checkbox" class="form-check-input" id="dropdownCheck">
            <label class="form-check-label" for="dropdownCheck">
              ODE
            </label>
          </div>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Clear</a>
        </div>
      </li>
      <li class="nav-item dropdown">
          <a class="nav-category dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" data-bs-toggle="dropdown" aria-expanded="false">
            Floor
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <div class="drop-item">
              <input type="checkbox" class="form-check-input" id="dropdownCheck">
              <label class="form-check-label" for="dropdownCheck">
                Basement
              </label>
            </div>
            <div class="drop-item">
              <input type="checkbox" class="form-check-input" id="dropdownCheck">
              <label class="form-check-label" for="dropdownCheck">
                First Floor
              </label>
            </div>
            <div class="drop-item">
              <input type="checkbox" class="form-check-input" id="dropdownCheck">
              <label class="form-check-label" for="dropdownCheck">
                Second Floor
              </label>
            </div>
            <div class="drop-item">
              <input type="checkbox" class="form-check-input" id="dropdownCheck">
              <label class="form-check-label" for="dropdownCheck">
                Third or Higher
              </label>
            </div>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Clear</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-category dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Stall Type
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <div class="drop-item">
              <input type="checkbox" class="form-check-input" id="dropdownCheck">
              <label class="form-check-label" for="dropdownCheck">
                Private Room
              </label>
            </div>
            <div class="drop-item">
              <input type="checkbox" class="form-check-input" id="dropdownCheck">
              <label class="form-check-label" for="dropdownCheck">
                Individual Stall
              </label>
            </div>
            <div class="drop-item">
              <input type="checkbox" class="form-check-input" id="dropdownCheck">
              <label class="form-check-label" for="dropdownCheck">
                Urinal
              </label>
            </div>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Clear</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-category dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Rating  
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <div class="drop-item">
              <input type="checkbox" class="form-check-input" id="dropdownCheck">
              <label class="form-check-label" for="dropdownCheck">
                1 Star
              </label>
            </div>
            <div class="drop-item">
              <input type="checkbox" class="form-check-input" id="dropdownCheck">
              <label class="form-check-label" for="dropdownCheck">
                2 Star
              </label>
            </div>
            <div class="drop-item">
              <input type="checkbox" class="form-check-input" id="dropdownCheck">
              <label class="form-check-label" for="dropdownCheck">
                3 Star
              </label>
            </div>
            <div class="drop-item">
              <input type="checkbox" class="form-check-input" id="dropdownCheck">
              <label class="form-check-label" for="dropdownCheck">
                4 Star
              </label>
            </div>
            <div class="drop-item">
              <input type="checkbox" class="form-check-input" id="dropdownCheck">
              <label class="form-check-label" for="dropdownCheck">
                5 Star
              </label>
            </div>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Clear</a>
          </div>
        </li>

    </ul>
    <form class="form-inline my-2 my-lg-0 search-button">
      <input class="" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
  );
}

export default App;
