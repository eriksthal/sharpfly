import React from "react";
import { withStyles } from "@material-ui/core/styles";

import "./ShowOff.css";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

function ShowOff(props) {
  return (
    <div>
      Our annual recital will take place on the following date:
      <div style={{ display: "flex" }}>
        <div>
          <h2>Recital 2020</h2>
          <h3>May 19 - 24, 2020</h3>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(ShowOff);
