# INFO443 Project 1

For this project, I decided to use my previous project from INFO340 called **Dub Dumps**. It was originally created by me and my team working on the final project for the class. The project is a React app that simulates a website for UW students looking for the nearest avaliable bathrooms on campus, with login authentication, filtering, and map capabilities.

# Code Structure Analysis

## Architectual Elements

| <img src="/images/umlcomponent.png" width=80% height=80%> |
|:--:| 
| *Figure 1: UML Component Diagram of Dub Dumps components* |

Figure 1 depicts a component diagram for the Dub Dumps web app. The component diagram is useful in allowing anyone to tell what each component's purpose is and the relationship it has with other components. The components and how they are related are as follows:

- **App:** The application is initiated with app, which renders the React web app and the following components (with the Routes to each other). 

  - App renders the two following constant components onto the document (on all pages):
    - **Header:** Consists of the Dub Dumps logo, the current user's profile picture, and the sign in/out button which sends the user to the Sign-In page.
    - **Footer:** Consists of links such as About Us, Services, Contact Us, as well as a team description. Most of these links have no functionality (for simplicity sake in the project) and lead back to the home page when clicked.
      - **FooterStyles:** Imported and utilized by Footer component for styling. 
      
  - These are the following pages rendered by App:
    - **SignIn:** Accessed by the sign in/out button from the Header, this component renders the page for a user to sign into the web app, using their Google account or regular email account.
    - **HomePage:** The Home page is what is first shown when the web app is rendered. The component renders a link to the search page and a map.
      - **Map:** Renders a map through the use of iFrames from a map created by SnazzyMaps.
    - **StructuredSearch:** The Search page renders the filtering navigation bar, and a list of all Bathroom Cards.
      - **BathroomCard:** The specific card of that bathroom with its picture, building, floor, and location.
    - **BathroomPage:** The component renders a more detailed page of a specific bathroom card, with all its information.
      - **StarRating:** Required by Bathroom Page, this component renders the star rating function that users can use to rate the bathrooms and save that data in the user's account (although currently, it is buggy and doesn't save).
    
    
## Process Flows

| <img src="/images/umlactivity.png" width=70% height=70%> |
|:--:| 
| *Figure 2: UML Activity Diagram of a typical activity flow for a Dub Dumps user* |

Figure 2 depicts an activity diagram for the Dub Dumps web app. The activity diagram is useful in allowing anyone to see how a typical user may interact with the components and how well it flows. The activity flow for a user that wants to find a bathroom on campus and rate it is as follows:

- 1. First, the user is directed to the sign in page when they click the sign in button located on the Header component.
   - a. If the user has login information that is new and not in the backend database, they are prompted to create an account.
   - b. If not a new account, they are successfully logged in.
  
- 2. The user is then directed to the home page. Here, they can check out the map to find nearby buildings with bathrooms from their location. 
- 3. The user clicks the Find A Bathroom button, directing them to the Search Page.
- 4. Here, the user can filter by their search criteria in the filter navigation bar, and then presses the "Search!" button. 
  - a. If the filters do not make sense and/or do not find any matching bathroom data, no results will show up and they must search again.
- 5. Once results do show up, users can select the bathroom card of their choice from the bathroom list provided from the filtered search.
- 6. After using the bathroom, users can then rate the bathroom by clicking out of 5 stars in the bathroom page.
- 7. The backend database will then remember the user's rating for that specific bathroom.

# Architecture Assessment / Refactoring

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
*Figure 3: StructuredSearch function located in its respective component*

Figure 3 above depicts the original code of the *_StructuredSearch_* function written in the **StructuredSearch** component. This is the function that takes the user's bathroom criteria in the filter navigation bar and filters for valid bathroom cards. 

## Code Smells
There are a couple code smells when looking at the `StructuredSearch` function. These include:

### Duplicated Code
    ...
    
    // Array of floors
      let uniqueFloors = new Set();
      for (let i = 0; i < props.data.length; i++) {
          uniqueFloors.add(props.data[i].floor)
      }
      uniqueFloors = Array.from(uniqueFloors);

      const floors = uniqueFloors.map((floor) => {
          return <option key={floor} value={floor}>{floor}</option>
      })
      
    ...
*Figure 4: Example of duplicated code while creating unique arrays*

In the most obvious code smell, we can see that the `StructuredSearch` function repeats the same code to create a unique array of options (referenced in Figure 4) three times: one for the buildings, one for the floors, and one for the locations of the bathrooms. Having this reused code destroys the readability of the codebase and also may affect performance as well. To counteract this, I wrote a new function to create a unique array for all three value options, without having repeat code, depicted in Figure 5 below. 

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

*Figure 5: Refactored solution of a single unique options array function*

In this refactoring solution, function `createUniqueOptions` takes in any value type as a parameter. The function then takes `props.data` and uses Javascript's native function `.map()` to only get the specific value type listed in the parameter. Next, in order to only have it contain unique values, it is changed into a Set before using the Spread operator `...` to expand it into an array again. After that, the function maps these unique values into an array of options, returning it. Finally, the function is called by all three value types.

### Loops

The refactoring solution from Figure 5 also takes care of another code smell, Loops. Initially, the original code uses a for loop to loop through every single data in `props.data`, adding its specific value to the initial array. This can be seen in Figure 6 below:
      
     ...
     
     // Array of Locations
     let uniqueLocations = new Set();
     for (let i = 0; i < props.data.length; i++) {
         uniqueLocations.add(props.data[i].location)
     }
     uniqueLocations = Array.from(uniqueLocations);
      
     ...
*Figure 6: An example of a for loop used in the initial filtering code*

Along with this code happening three times in the original code, this type of looping is very inefficient and can cause performance issues if the array is large. I refactored into the solution `createUniqueOptions` (as seen in Figure 5) with Figure 7 inside it below:

    ...
    
    let uniqueOptions = props.data
            .map(item => item[valueType]);  // map to get an array of only the specific value type

        uniqueOptions = [...new Set(uniqueOptions)];

    ...
*Figure 7: Mapping and creating Set after to fix looping issues*

In this solution, I used Javascript's `.map()` method to map out only the speciifc value type, instead of using a for loop. This makes it slightly easier to read and also more efficient as mapping is faster than using a for loop. Then, I turn it into a Set and back again to an array after the mapping, which makes more sense logically to do so than the original code (having it swapped). This only takes one line as well, compared to the original code's two lines (and it not being next to each other), which improves readability.

### Speculative Generality

Within the StructuredSearch component, there is also the code smell of speculative generality. More specifically, it is unused parameters. These are seen in Figure 8 below:

    ...
    import { Nav, Navbar, NavDropdown } from "react-bootstrap";
    ...
    const handleClick = evt => {
        props.filterCallback(bldgSelected, floorSelected, locationSelected);
    }
    ...
*Figure 8: Examples of lines with unused parameters*    

The first line is an import statement for `react-bootstrap`, and the function never actually uses the variable `NavDropdown`. The second line is the `handleCLick` function, which calls the callback function when the button on the filtering navigation bar is clicked. In this case, however, `evt` is declared but never used. This is fixed, as seen in Figure 9 below:

    ...
    import { Nav, Navbar } from "react-bootstrap";
    ...
    const handleClick = () => {
        props.filterCallback(bldgSelected, floorSelected, locationSelected);
    }
    ...
*Figure 9: Taking out unused parameters*

In the first line, `NavDropdown` is completely deleted from the import statement, since the code does not need it and does not use it. Similarly, I took out `evt` and made the function `handleClick` take an empty parameter, which still does its job but doesn't have an unused variable anymore.

## Documentation and Readability



# Automated Tests

All the tests I have written are in the "tests" folder of the project repository. Included in that file are a few intial tests I did to ensure that the code and dependencies are running correctly. The main architectual element I focused my tests on was the **StructuredSearch** component, which are .

In order to run the tests:

1. On the command line or terminal, navigate to the **"Dub-Dumps-main"** folder in the repository.
2. Run `npm install` to install any dependencies needed for testing.
3. Run `npm test` for standard testing, or alternatively, run `jest --coverage` to get a code coverage report.

| <img src="/images/testcoverage.png" width=85% height=85%> |
|:--:| 
| *Figure : Code Testing Coverage Report* |
