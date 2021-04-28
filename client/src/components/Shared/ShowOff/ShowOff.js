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
      <h2>Year-end Recital at the Gateway Theatre (dates TBA)</h2>​{" "}
      <p>
        Dance Co’s Year-End Recital performances occur at the Gateway Theatre in
        Richmond each May. All Dancers in full year programs will perform with
        the exception of beginner acro classes. PLEASE SAVE THE DATE!
      </p>
    </div>
  );
}

export default withStyles(styles)(ShowOff);
