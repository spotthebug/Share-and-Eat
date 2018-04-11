var db = require('./models');
var faker = require('faker');
var axios = require('axios');

// var restaurantsList = [
//   {
//     name: "Shizen Izakaya",
//     location: "San Francisco",
//     mealOfTheDay: "Avocado Sushi",
//     image: "https://images.unsplash.com/photo-1517833969405-d4a24c2c8280?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=337939573212db4973e772dae9fa6cef&auto=format&fit=crop&w=1050&q=80"
//   },
//   {
//     name: "Mc Donalds",
//     location: "San Francisco",
//     mealOfTheDay: "Combo Meal with Fries",
//     image: "https://images.unsplash.com/photo-1495753379358-73c76ccd644b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2b202656251c223750e8ad9bd73c5f58&auto=format&fit=crop&w=1410&q=80"
//   },
//   {
//     name: "Dish Dash",
//     location: "San Francisco",
//     mealOfTheDay: "Mezze Platter",
//     image: "https://images.unsplash.com/photo-1485962093642-5f4386e84429?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=647dbee7e0465ee26745f31a59c9b086&auto=format&fit=crop&w=634&q=80"
//   },
//   {
//     name: "Pomodoro",
//     location: "Fremont",
//     mealOfTheDay: "Margarhita Pizza",
//     image: "https://images.unsplash.com/photo-1507273026339-31b655f3752d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3befe2072b0c78855d51065cc2465f3d&auto=format&fit=crop&w=634&q=80"
//   },
//   {
//     name: "Sala Thai",
//     location: "Fremont",
//     mealOfTheDay: "Massaman Curry",
//     image: "https://images.unsplash.com/photo-1517358873910-2619c8be2b3c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=684fe4f1fde792a030e6dcfaa3986dc8&auto=format&fit=crop&w=634&q=80"
//   }
// ]

db.Restaurant.remove({}, function(err, restaurants) {
  console.log('removed all restaurants');
  axios.get("https://api.eatstreet.com/publicapi/v1/restaurant/search?method=both&street-address=225+Bush+Street,+San+Francisco&access-token=21842944f2051268")
  .then(function(response){
      for (var i = 0; i < 15; i ++) {
            db.Restaurant.create({
              name: response.data.restaurants[i].name,
              location: response.data.restaurants[i].streetAddress + response.data.restaurants[i].city,
              mealOfTheDay: response.data.restaurants[i].foodTypes[1],
              image: response.data.restaurants[i].logoUrl
            })
      }
    });
    console.log('recreated all restaurants');
    console.log("created", restaurants.length, "restaurants");
});

restaurantsId = [];
db.Restaurant.find({}, function(err, data) {
      data.forEach(function(restaurant) {
        restaurantsId.push(restaurant._id)
      })
  });

db.Menu.remove({}, function(err, menu) {
  console.log('removed all menu references');
  for (var i = 0; i < 15; i ++) {
    db.Menu.create({
      restaurant: restaurantsId[i]
    })
  }
  console.log('recreated each restaurants menu');
  });

menusId = [];
db.Menu.find({}, function(err, data) {
      data.forEach(function(menu) {
        menusId.push(menu._id)
      })
});

db.MenuItem.remove({}, function(err, item) {
  console.log('removed all menu items');
  for (var i = 0; i < 5; i ++) {
    db.MenuItem.create({
        menuItemType: "Appetizer",
        itemName: faker.commerce.productName(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (10 - 6) + 6),
        menu: menusId[0]
    })

    db.MenuItem.create({
        menuItemType: "Main Course",
        itemName: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (20 - 10) + 10),
        menu: menusId[0]
    })

    db.MenuItem.create({
        menuItemType: "Dessert",
        itemName: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (10 - 6) + 6),
        menu: menusId[0]
    })

    db.MenuItem.create({
        menuItemType: "Appetizer",
        itemName: faker.commerce.productName(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (10 - 8) + 8),
        menu: menusId[1]
    })

    db.MenuItem.create({
        menuItemType: "Main Course",
        itemName: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (25 - 15) + 15),
        menu: menusId[1]
    })

    db.MenuItem.create({
        menuItemType: "Dessert",
        itemName: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (12 - 9) + 9),
        menu: menusId[1]
    })

    db.MenuItem.create({
        menuItemType: "Appetizer",
        itemName: faker.commerce.productName(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (10 - 6) + 6),
        menu: menusId[2]
    })

    db.MenuItem.create({
        menuItemType: "Main Course",
        itemName: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (18 - 12) + 12),
        menu: menusId[2]
    })

    db.MenuItem.create({
        menuItemType: "Dessert",
        itemName: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (10 - 6) + 6),
        menu: menusId[2]
    })

    db.MenuItem.create({
        menuItemType: "Appetizer",
        itemName: faker.commerce.productName(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (10 - 8) + 8),
        menu: menusId[3]
    })

    db.MenuItem.create({
        menuItemType: "Main Course",
        itemName: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (25 - 15) + 15),
        menu: menusId[3]
    })

    db.MenuItem.create({
        menuItemType: "Dessert",
        itemName: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (12 - 9) + 9),
        menu: menusId[3]
    })

    db.MenuItem.create({
        menuItemType: "Appetizer",
        itemName: faker.commerce.productName(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (10 - 6) + 6),
        menu: menusId[4]
    })

    db.MenuItem.create({
        menuItemType: "Main Course",
        itemName: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (18 - 12) + 12),
        menu: menusId[4]
    })

    db.MenuItem.create({
        menuItemType: "Dessert",
        itemName: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (10 - 6) + 6),
        menu: menusId[4]
    })

    db.MenuItem.create({
        menuItemType: "Appetizer",
        itemName: faker.commerce.productName(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (10 - 8) + 8),
        menu: menusId[5]
    })

    db.MenuItem.create({
        menuItemType: "Main Course",
        itemName: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (25 - 15) + 15),
        menu: menusId[5]
    })

    db.MenuItem.create({
        menuItemType: "Dessert",
        itemName: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (12 - 9) + 9),
        menu: menusId[5]
    })

    db.MenuItem.create({
        menuItemType: "Appetizer",
        itemName: faker.commerce.productName(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (10 - 7) + 7),
        menu: menusId[6]
    })

    db.MenuItem.create({
        menuItemType: "Main Course",
        itemName: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (22 - 14) + 14),
        menu: menusId[6]
    })

    db.MenuItem.create({
        menuItemType: "Dessert",
        itemName: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (11 - 7) + 7),
        menu: menusId[6]
    })

    db.MenuItem.create({
        menuItemType: "Appetizer",
        itemName: faker.commerce.productName(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (10 - 8) + 8),
        menu: menusId[7]
    })

    db.MenuItem.create({
        menuItemType: "Main Course",
        itemName: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (25 - 15) + 15),
        menu: menusId[7]
    })

    db.MenuItem.create({
        menuItemType: "Dessert",
        itemName: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (12 - 9) + 9),
        menu: menusId[7]
    })

    db.MenuItem.create({
        menuItemType: "Appetizer",
        itemName: faker.commerce.productName(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (7 - 4) + 4),
        menu: menusId[8]
    })

    db.MenuItem.create({
        menuItemType: "Main Course",
        itemName: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (12 - 9) + 9),
        menu: menusId[8]
    })

    db.MenuItem.create({
        menuItemType: "Dessert",
        itemName: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (6 - 4) + 4),
        menu: menusId[8]
    })

    db.MenuItem.create({
        menuItemType: "Appetizer",
        itemName: faker.commerce.productName(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (7 - 4) + 4),
        menu: menusId[9]
    })

    db.MenuItem.create({
        menuItemType: "Main Course",
        itemName: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (12 - 9) + 9),
        menu: menusId[9]
    })

    db.MenuItem.create({
        menuItemType: "Dessert",
        itemName: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (6 - 4) + 4),
        menu: menusId[9]
    })

    db.MenuItem.create({
        menuItemType: "Appetizer",
        itemName: faker.commerce.productName(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (10 - 7) + 7),
        menu: menusId[10]
    })

    db.MenuItem.create({
        menuItemType: "Main Course",
        itemName: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (13 - 9) + 9),
        menu: menusId[10]
    })

    db.MenuItem.create({
        menuItemType: "Dessert",
        itemName: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (7 - 5) + 5),
        menu: menusId[10]
    })

    db.MenuItem.create({
        menuItemType: "Appetizer",
        itemName: faker.commerce.productName(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (7 - 4) + 4),
        menu: menusId[11]
    })

    db.MenuItem.create({
        menuItemType: "Main Course",
        itemName: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (12 - 9) + 9),
        menu: menusId[11]
    })

    db.MenuItem.create({
        menuItemType: "Dessert",
        itemName: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (6 - 4) + 4),
        menu: menusId[11]
    })

    db.MenuItem.create({
        menuItemType: "Appetizer",
        itemName: faker.commerce.productName(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (10 - 7) + 7),
        menu: menusId[12]
    })

    db.MenuItem.create({
        menuItemType: "Main Course",
        itemName: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (22 - 14) + 14),
        menu: menusId[12]
    })

    db.MenuItem.create({
        menuItemType: "Dessert",
        itemName: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (11 - 7) + 7),
        menu: menusId[12]
    })

    db.MenuItem.create({
        menuItemType: "Appetizer",
        itemName: faker.commerce.productName(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (10 - 7) + 7),
        menu: menusId[13]
    })

    db.MenuItem.create({
        menuItemType: "Main Course",
        itemName: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (22 - 14) + 14),
        menu: menusId[13]
    })

    db.MenuItem.create({
        menuItemType: "Dessert",
        itemName: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (11 - 7) + 7),
        menu: menusId[13]
    })

    db.MenuItem.create({
        menuItemType: "Appetizer",
        itemName: faker.commerce.productName(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (10 - 7) + 7),
        menu: menusId[14]
    })

    db.MenuItem.create({
        menuItemType: "Main Course",
        itemName: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (13 - 9) + 9),
        menu: menusId[14]
    })

    db.MenuItem.create({
        menuItemType: "Dessert",
        itemName: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (7 - 5) + 5),
        menu: menusId[14]
    })

    db.MenuItem.create({
        menuItemType: "Appetizer",
        itemName: faker.commerce.productName(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (10 - 7) + 7),
        menu: menusId[15]
    })

    db.MenuItem.create({
        menuItemType: "Main Course",
        itemName: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (13 - 9) + 9),
        menu: menusId[15]
    })

    db.MenuItem.create({
        menuItemType: "Dessert",
        itemName: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * (7 - 5) + 5),
        menu: menusId[15]
    })
  }
  console.log('recreated menu items');
  });
