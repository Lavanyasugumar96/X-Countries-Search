import { useEffect, useState } from "react";
import Card from "./Card";

function Countries({ searchQuery }) {
  const apiEndpoint = "https://restcountries.com/v3.1/all";
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(apiEndpoint)
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {filteredCountries.map((country) => (
        <Card
          key={country.cca3}
          flag={country.flags.png}
          name={country.name.common}
        />
      ))}
      {filteredCountries.length === 0 && (
        <p>No countries found matching "{searchQuery}"</p>
      )}
    </div>
  );
}

export default Countries;