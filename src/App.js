import { Typography, Container } from "@material-ui/core";
import { sortBy } from "lodash";
import moment from "moment";
import { useEffect, useState } from "react";

import { getCountries, getReportByCountry } from "./apis";

import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";
import "moment/locale/vi";

import "@fontsource/roboto";

moment.locale("vi");

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [report, setReport] = useState([]);

  useEffect(() => {
    getCountries().then((res) => {
      const countries = sortBy(res.data, "Country");
      setCountries(countries);
      setSelectedCountryId("VN");
    });
  }, []);

  const handleOnChange = (e) => {
    setSelectedCountryId(e.target.value);
  };

  useEffect(() => {
    if (selectedCountryId) {
      const selectedCountry = countries.find(
        (country) => country.ISO2 === selectedCountryId
      );
      //call api
      getReportByCountry(selectedCountry.Slug).then((res) => {
        res.data.pop();
        setReport(res.data);
      });
    }
  }, [countries, selectedCountryId]);

  return (
    <Container style={{ marginTop: 10 }}>
      <Typography variant="h3" component="h3">
        Số liệu COVID-19
      </Typography>
      <Typography>{moment().format("LLL")}</Typography>
      <CountrySelector
        value={selectedCountryId}
        countries={countries}
        handleOnChange={handleOnChange}
      />
      <Highlight report={report} />
      <Summary selectedCountryId={selectedCountryId} report={report} />
    </Container>
  );
}

export default App;
