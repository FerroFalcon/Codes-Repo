// requiring modules
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", function(req, res) {
    console.log(req.body.cityName);

        // Fetching the data from an external server
        const query = req.body.cityName;
        const apiKey = "b37bf75fb873fec51ded9b00d92ddd28";
        const unit = "metric";
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;

        https.get(url, function(response) {

            console.log(response.statusCode);
            response.on("data", function(data) {

                // creating JSON object of WeatherData and parsing it to an ACTUAL JavaScrfipt OBJECT
                const weatherData = JSON.parse(data);
                const temp = weatherData.main.temp;
                const weatherDescription = weatherData.weather[0].description;

                const icon =  weatherData.weather[0].icon;
                const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

                res.write("<p>The weather is currently " + weatherDescription + " </p>");
                res.write("<h1>The Temprature in " + query + " is " + temp + " Degrees Celcius</h1>");
                res.write("<img src = " + imageURL + ">");     // setting up the image
                
                res.send();
            });
        });
});


app.listen(3000, function() {
    console.log("Server is running on port 3000");
});