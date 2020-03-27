let $companyInput = $("#company-input");
let $searchBtn = $("#search-btn");
let $searchHistory = $("#search-history");

const IEXCLOUD_API_URL = "https://sandbox.iexapis.com/stable/stock/";
const NEWS_API_URL = "";

const IEXCLOUD_API_KEY = "pk_60b39c1bb2af498f8fbca8d0930e9880";
const NEWS_API_KEY = "";

let keywords = ["coronavirus", "covid", "pandemic"];

let searchHistory =
  JSON.parse(window.localStorage.getItem("searchHistory")) || [];

displaySearchHistory();

function formatName(name) {
  let formattedName = "";
  for (let i = 0; i < name.length; i++) {
    if (
      i === 0 ||
      name[i - 1] === " " ||
      name[i - 1] === "-" ||
      name[i - 1] === "."
    ) {
      formattedName += name[i].toUpperCase();
    } else {
      formattedName += name[i].toLowerCase();
    }
  }
  return formattedName;
}

function displaySearchHistory() {
  $searchHistory.empty();

  let listItems = "";

  for (let i = 0; i < searchHistory.length; i++) {
    listItems += `
      <li>
        <a>
          ${searchHistory[i]}
        </a>
      </li>`;
  }

  $searchHistory.append($.parseHTML(listItems));
}

// TODO
function getStockSymbol(companyName) {
  return stockSymbol;
}

// TODO
function getStockPrice(stockSymbol) {
  return stockPrice;
}

// TODO
function getNewsStories() {}

// TODO
function displayStockPrice() {}

// TODO
function displayNewsStory() {}

$searchBtn.on("click", function(event) {
  event.preventDefault();
  let companyName = formatName($companyInput.val().trim());

  $companyInput.val("");

  if (companyName) {
    console.log(companyName);

    if (!searchHistory.includes(companyName)) {
      searchHistory.push(companyName);
    }

    window.localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }

  displaySearchHistory();
  // TODO: Add get and display function calls
});
