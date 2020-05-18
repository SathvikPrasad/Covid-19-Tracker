const get_covid_details = require("./get_covid_details");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.get("/:country", (req, res) => {
  console.log("recieved query for " + req.params.country);

  get_covid_details(req.params.country, (data) => {
    console.log(data);
    res.json(data);
    console.log("sent the data");
  });
});

app.listen(5000);

// #main_table_countries_today > tbody:nth-child(2) > tr > td.sorting_1
