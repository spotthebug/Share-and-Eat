var db = require('./models');
var faker = require('faker');

var restaurantsList = [
  {
    name: "Shizen Izakaya",
    location: "San Francisco",
    mealOfTheDay: "Avocado Sushi",
    image: "https://images.unsplash.com/photo-1517833969405-d4a24c2c8280?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=337939573212db4973e772dae9fa6cef&auto=format&fit=crop&w=1050&q=80"
  },
  {
    name: "Mc Donalds",
    location: "San Francisco",
    mealOfTheDay: "Combo Meal with Fries",
    image: "https://images.unsplash.com/photo-1495753379358-73c76ccd644b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2b202656251c223750e8ad9bd73c5f58&auto=format&fit=crop&w=1410&q=80"
  },
  {
    name: "Dish Dash",
    location: "San Francisco",
    mealOfTheDay: "Mezze Platter",
    image: "https://images.unsplash.com/photo-1485962093642-5f4386e84429?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=647dbee7e0465ee26745f31a59c9b086&auto=format&fit=crop&w=634&q=80"
  },
  {
    name: "Pomodoro",
    location: "Fremont",
    mealOfTheDay: "Margarhita Pizza",
    image: "https://images.unsplash.com/photo-1507273026339-31b655f3752d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3befe2072b0c78855d51065cc2465f3d&auto=format&fit=crop&w=634&q=80"
  },
  {
    name: "Sala Thai",
    location: "Fremont",
    mealOfTheDay: "Massaman Curry",
    image: "https://images.unsplash.com/photo-1517358873910-2619c8be2b3c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=684fe4f1fde792a030e6dcfaa3986dc8&auto=format&fit=crop&w=634&q=80"
  }
]

db.Restaurant.remove({}, function(err, restaurants) {
  console.log('removed all restaurants');
  db.Restaurant.create(restaurantsList, function(err, restaurants){
     if (err) {
      console.log(err);
      return;
    }
  console.log('recreated all restaurants');
    console.log("created", restaurants.length, "restaurants");
  })
});