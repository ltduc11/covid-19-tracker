import { Grid } from "@material-ui/core";
import React from "react";
import HighlightCard from "./HighlightCard";

function Highlight({ report }) {
  const data = report[report.length - 1];
  const summary = [
    {
      title: "Số ca nhiễm",
      count: data ? data.Confirmed : "null",
      type: "confirmed",
    },
    {
      title: "Khỏi",
      count: data ? data.Recovered : "null",
      type: "recovered",
    },
    {
      title: "Tử vong",
      count: data ? data.Deaths : "null",
      type: "deaths",
    },
  ];

  return (
    <Grid container spacing={3}>
      {summary.map((item) => (
        <Grid key={item.title} item sm={4} xs={12}>
          <HighlightCard
            title={item.title}
            count={item.count}
            type={item.type}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default Highlight;
