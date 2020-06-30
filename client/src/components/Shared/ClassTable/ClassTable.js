import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ClassCard from "../ClassCard/ClassCard";
import { getTermFromClass } from "../../../utilities/utils";

import "./ClassTable.css";

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

function ClassTable(props) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "left"
      }}
    >
      <div className={props.filteredClasses.length > 0 ? "hide" : "show"}>
        <h3>Sorry!</h3>
        <p>We couldn't find any classes, try refining your search criteria.</p>
      </div>
      {props.filteredClasses.map(singleClass => {
        let term = getTermFromClass(props.selectedClasses, singleClass.classId);
        //Since the id is numeric, we need to convert it to string to search for it
        singleClass.classId = singleClass.classId.toString();

        return (
          <div className="class-card__card-container" key={singleClass.classId}>
            <ClassCard
              value={singleClass.classId}
              discipline={singleClass.discipline}
              ages={singleClass.ages}
              selected={term !== `None-${singleClass.classId}`}
              onClick={props.onClassSelect}
              name={singleClass.discipline}
              time={singleClass.hours}
              level={singleClass.level}
              terms={singleClass.terms}
              location={singleClass.location}
              selectedTerm={term}
            />
          </div>
        );
      })}
    </div>
  );
}

ClassTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ClassTable);
