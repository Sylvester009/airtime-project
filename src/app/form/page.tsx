"use client";
import { useEffect, useState } from "react";

type Country = {
  cca3: string;
  name: {
    common: string;
  };
};

export default function Form() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [country, setCountry] = useState("");
  const [numberDisabled, setNumberDisabled] = useState(true);
  const [amountDisabled, setAmountDisabled] = useState(true);

  useEffect(() => {
    // Fetch list of countries
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data: Country[]) => {
        const sortedCountries = data.sort((a: Country, b: Country) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedCountries);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  useEffect(() => {
    // Enable number and amount input when a country is selected
    setNumberDisabled(country === "");
    setAmountDisabled(country === "");
  }, [country]);

  return (
    <>
      <section className="form-section" id="formSection">
        <h2 className="form-title">Get Your Airtime Here</h2>
        <form>
          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <select
              id="countrySelect"
              name="country"
              title="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country.cca3} value={country.name.common}>
                  {country.name.common}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="number">Phone Number:</label>
            <input
              type="tel"
              id="number"
              name="number"
              disabled={numberDisabled}
            />
          </div>
          <div className="form-group">
            <label htmlFor="provider">Service Provider:</label>
            <select id="provider" name="provider">
              <option value="">Select provider</option>
              <option>MTN NG</option>
              <option>GLO</option>
              <option>Airtel</option>
              <option>9Mobile</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              id="amount"
              name="amount"
              disabled={amountDisabled}
            />
          </div>
          <button type="submit">Purchase</button>
        </form>
      </section>
    </>
  );
}
