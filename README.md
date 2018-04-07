# Share-and-Eat

Share-and-Eat is a web application that allows users to order food from different restaurants. 

### So what is different about Share Eats?
It allows users to Pay it forward, meaning that users can buy meal for the homeless and needy. Anyone in need of food can walk in the restaurant and pick up the food paid forward by generous users like you.

### MVP:
- An About Page that gives users instructions on using the Website, information about the app’s mission and why they should be using the app
- A Homepage that displays all the restaurants that a user can order from
- User can click on the restaurant of choice and see details about their menu
- On the Menu page, the user will be able to select the items and specify the quantity
- Once user has confirmed the order, a confirmation message will display on the page 
- User will have to sign up /login to be able to order food through the app

### Stretch Goals:
- Implement Payment functionality using Stripe / Apple Pay / Android Pay
- Send text or email notification confirming the order details
- Integrating Google Maps API, so that user can conveniently find directions to the restaurant through the app
- Provide seperate login functionality for admin

### User Stories

#### A User would be anyone who likes to eat and share

A user should be able to:
- See the site-wide header on every page with:
  A link to "Log Out" if they're logged in.
  Links to "Log In" and "Sign Up" if they're logged out.
  
- Navigate to "/" and see a page with:
  Header
  All Restaurants
  Footer
  
User functionality: 
- Allow users to Sign up for an account.
- Log in to their account if they already have one.
- Be redirected to the home page after logging in

- On the home page, allow users to click on the title of any restaurant and be redirected to a "show" page for that restaurant
- Navigate to "/restaurants/1/menu" and see a page with:
  Menu details that give description and type of food
  Allow user to select a menu item and specify quantity 
  Once the user confirms the order, a modal should pop up confirming the order


### CRUD

#### User
- Create new User
- Authenticate existing User

Stretch: 
- Edit User Profile
- Delete User Profile

#### Restaurant
- Create new Restaurant

Stretch: 
- Edit Restaurant 
- Delete Restaurant 

#### Menu
- Create new Menu

Stretch: 
- Edit Menu 
- Delete Menu

#### Order
- Create new Order
- Delete Order

Stretch: 
- Edit Order 

#### Validations & Authorization
- A user CANNOT save invalid data to the database, according to the following rules:
- View an error message when form validations fail, for the following validations:
  A user CANNOT sign up with an email (or username) that is already in use.
  Password should be greater than 6 characters
  
A user is authorized to perform certain actions on the site, according to the following rules:
A user MUST be logged in to create/update/delete an order.
A user may only edit their own profile and edit/delete their own orders.

### Wireframes
https://docs.google.com/document/d/18kH7IsJjUxW0jkQ8ef-YTk-QK3OjgCXnET7H-npbTe4/edit?usp=sharing

### Entity Relationship Diagram
https://www.lucidchart.com/invitations/accept/6a0d0ac0-f448-4377-934a-fa6cf10aa172
