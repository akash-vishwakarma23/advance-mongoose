const express = require('express');
const userModel = require('./models/user');
const app = express();

const users = [
    {
      username: "john_doe",
      nmae: "John Doe",
      email: "john.doe@example.com",
      password: "john123",
      age: "28",
      isMarried: false
    },
    {
      username: "jane_smith",
      nmae: "Jane Smith",
      email: "jane.smith@example.com",
      password: "jane456",
      age: "32",
      isMarried: true
    },
    {
      username: "sam_brown",
      nmae: "Sam Brown",
      email: "sam.brown@example.com",
      password: "sam789",
      age: "25",
      isMarried: false
    },
    {
      username: "lucy_martin",
      nmae: "Lucy Martin",
      email: "lucy.martin@example.com",
      password: "lucy123",
      age: "30",
      isMarried: true
    },
    {
      username: "peter_parker",
      nmae: "Peter Parker",
      email: "peter.parker@example.com",
      password: "peter123",
      age: "22",
      isMarried: false
    },
    {
      username: "tony_stark",
      nmae: "Tony Stark",
      email: "tony.stark@example.com",
      password: "ironman456",
      age: "40",
      isMarried: true
    },
    {
      username: "steve_rogers",
      nmae: "Steve Rogers",
      email: "steve.rogers@example.com",
      password: "captainamerica789",
      age: "37",
      isMarried: false
    },
    {
      username: "bruce_wayne",
      nmae: "Bruce Wayne",
      email: "bruce.wayne@example.com",
      password: "batman123",
      age: "35",
      isMarried: false
    },
    {
      username: "clark_kent",
      nmae: "Clark Kent",
      email: "clark.kent@example.com",
      password: "superman456",
      age: "33",
      isMarried: true
    },
    {
      username: "diana_prince",
      nmae: "Diana Prince",
      email: "diana.prince@example.com",
      password: "wonderwoman789",
      age: "28",
      isMarried: false
    },
    {
      username: "natasha_romanoff",
      nmae: "Natasha Romanoff",
      email: "natasha.romanoff@example.com",
      password: "blackwidow123",
      age: "31",
      isMarried: false
    },
    {
      username: "barry_allen",
      nmae: "Barry Allen",
      email: "barry.allen@example.com",
      password: "flash456",
      age: "26",
      isMarried: false
    },
    {
      username: "arthur_curry",
      nmae: "Arthur Curry",
      email: "arthur.curry@example.com",
      password: "aquaman789",
      age: "34",
      isMarried: true
    },
    {
      username: "hal_jordan",
      nmae: "Hal Jordan",
      email: "hal.jordan@example.com",
      password: "greenlantern123",
      age: "29",
      isMarried: false
    },
    {
      username: "oliver_queen",
      nmae: "Oliver Queen",
      email: "oliver.queen@example.com",
      password: "greenarrow456",
      age: "33",
      isMarried: true
    }
  ];

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.get('/', function(req, res) {
    res.send('Welcome to my API');
})

app.get('/users', async function(req, res) {
    // let data = await userModel.find({age : 20})     normal ese likkhte hai
    let data = await userModel.find({age : {$eq : 30}}) //in  eq operator in mongoose
    res.send(data);
})

app.listen(3000);
