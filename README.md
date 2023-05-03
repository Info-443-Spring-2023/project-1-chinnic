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

- 1. First, the user is directed to the sign in page when they click the sign in button.
   - a. If the user has login information that is new and not in the backend database, they are prompted to create an account.
   - b. If not a new account, they are successfully logged in.
  
- 2. The user is then directed to the home page. Here, they can check out the map to find nearby buildings with bathrooms from their location. 
- 3. The user clicks the Find A Bathroom button, directing them to the Search Page.
- 4. Here, the user can filter by their search criteria in the filter navigation bar, and then presses the "Search!" button. 
  - a. If the filters do not make sense and/or do not find any matching bathroom data, no results will show up and they must search again.
- 5. Once results do show up, users can select the bathroom card of their choice from the bathroom list provided from the filtered search.
- 6. After using the bathroom, users can then rate the bathroom by clicking out of 5 stars in the bathroom page.
- 7. The backend database will then remember the user's rating for that specific bathroom.


# Automated Tests

All the tests I have written are in the "tests" folder of the project repository. Included in that file are a few intial tests I did to ensure that the code and dependencies are running correctly. The main architectual element I focused my tests on was the **StructuredSearch** component, which are .

In order to run the tests:

1. On the command line or terminal, navigate to the **"Dub-Dumps-main"** folder in the repository.
2. Run `npm install` to install any dependencies needed for testing.
3. Run `npm test` for standard testing, or alternatively, run `jest --coverage` to get a code coverage report.

| <img src="/images/testcoverage.png" width=85% height=85%> |
|:--:| 
| *Figure : Code Testing Coverage Report* |
