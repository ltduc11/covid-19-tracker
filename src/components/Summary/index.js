import { Grid } from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";
import HighMaps from "../Charts/HighMaps";
import LineChart from "../Charts/LineChart";

function Summary({ report, selectedCountryId }) {
  const [mapData, setMapData] = useState({});

  useEffect(() => {
    if (selectedCountryId) {
      const selectedCountryIdLowerCase = selectedCountryId.toLowerCase();
      // axios
      //   .get(
      //     `https://code.highcharts.com/mapdata/countries/${selectedCountryIdLowerCase}/${selectedCountryIdLowerCase}-all.geo.json`
      //   )
      import(
        `@highcharts/map-collection/countries/${selectedCountryIdLowerCase}/${selectedCountryIdLowerCase}-all.geo.json`
      )
        .then((res) => setMapData(res))
        .catch((err) => console.error({ err }));
    }
  }, [selectedCountryId]);

  return (
    <Grid container spacing={3}>
      <Grid item sm={8} xs={12}>
        <LineChart data={report} />
      </Grid>
      <Grid item sm={4} xs={12}>
        <HighMaps mapData={mapData} />
      </Grid>
    </Grid>
  );
}

export default Summary;
