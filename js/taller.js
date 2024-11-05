fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    const countryList = document.getElementById("country-list");
    data.forEach((country) => {
      const countryItem = document.createElement("p");
      countryItem.textContent = `País: ${country.name.common}, Capital: ${country.capital}`;
      countryList.appendChild(countryItem);
    });
  })
  .catch((error) => console.error("Error:", error));
