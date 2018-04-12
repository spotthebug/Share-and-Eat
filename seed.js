var db = require('./models');
var faker = require('faker');
var axios = require('axios');

db.MenuItem.remove({},function(){
  db.Restaurant.remove({}, function(err, restaurants) {
  console.log('removed all restaurants');
  axios.get("https://api.eatstreet.com/publicapi/v1/restaurant/search?method=both&street-address=225+Bush+Street,+San+Francisco&access-token=21842944f2051268")
  .then(function(response){
      for (var i = 0; i < 15; i ++) {
            db.Restaurant.create({
              name: response.data.restaurants[i].name,
              location: response.data.restaurants[i].streetAddress + response.data.restaurants[i].city,
              mealOfTheDay: response.data.restaurants[i].foodTypes[1],
              image: response.data.restaurants[i].logoUrl,
            }, function(err, created) {
                console.log(created)
                for (var j = 0; j < 2; j++) {
                    db.MenuItem.create({
                    menuItemType: "Appetizer",
                    itemName: faker.commerce.productName(),
                    description: faker.lorem.paragraph(),
                    price: Math.floor(Math.random() * (10 - 6) + 6),
                    restaurant: created
                })

                db.MenuItem.create({
                menuItemType: "Main Course",
                itemName: faker.lorem.word(),
                description: faker.lorem.paragraph(),
                price: Math.floor(Math.random() * (20 - 10) + 10),
                restaurant: created
                })

                db.MenuItem.create({
                menuItemType: "Dessert",
                itemName: faker.lorem.word(),
                description: faker.lorem.paragraph(),
                price: Math.floor(Math.random() * (10 - 6) + 6),
                restaurant: created
             })

            }

            })
        }
      })
    })
})

