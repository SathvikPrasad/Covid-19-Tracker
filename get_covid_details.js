const Nightmare = require("nightmare");
const cheerio = require("cheerio");
const nightmare = Nightmare();
const get_covid_details = (country, callback) => {
  const url = `https://www.worldometers.info/coronavirus/country/${country}`;
  console.log(url);

  nightmare
    .goto(url)
    .wait("body")
    .evaluate(() => document.querySelector("body").innerHTML)
    .then((response) => {
      let data = getData(response);
      callback({ ...data, country });
    })
    .catch((err) => {
      console.log(err);
    });
};
let getData = (html) => {
  const $ = cheerio.load(html);
  let total = {
    total_cases: "",
    total_deaths: "",
    total_recovred: "",
  };
  $("#maincounter-wrap > div > span").each((i, e) => {
    i === 0 ? (total.total_cases = $(e).text()) : null;
    i === 1 ? (total.total_deaths = $(e).text()) : null;
    i === 2 ? (total.total_recovred = $(e).text()) : null;
  });
  return total;
};
module.exports = get_covid_details;

// get_covid_details("us", (data) => {
//   console.log(data);
// });
