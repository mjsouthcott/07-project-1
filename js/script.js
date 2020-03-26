let $cityInput = $("#city-input");
let $countryInput = $("#country-input");
let $searchBtn = $("#search-btn");
let $searchHistory = $("#search-history");

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
function getLocationCoords() {}

// TODO
function getTweets() {}

// TODO
function getNewsStories() {}

// TODO
function displayTweet() {}

// TODO
function displayNewsStory() {}

$searchBtn.on("click", function(event) {
  event.preventDefault();
  let cityName = formatName($cityInput.val().trim());
  let countryName = formatName($countryInput.val().trim());
  let locationName = "";

  $cityInput.val("");
  $countryInput.val("");

  if (countryName) {
    if (cityName && countryName) {
      locationName = `${cityName}, ${countryName}`;
    } else {
      locationName = countryName;
    }

    console.log(locationName);

    if (!searchHistory.includes(locationName)) {
      searchHistory.push(locationName);
    }

    window.localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }

  displaySearchHistory();
  // TODO: Add get and display function calls
});
