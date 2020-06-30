import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import "./InformationReview.css";

function InformationReview(props) {
  let dd, mm, yyyy;
  if (props.birthdate) {
    dd = props.birthdate.getDate();
    mm = props.birthdate.getMonth() + 1;
    yyyy = props.birthdate.getFullYear();

    if (dd < 10) {
      dd = "0" + dd;
    }
  }
  return (
    <div>
      <Paper className="information-review__paper_container" elevation={1}>
        <h2>About you:</h2>
        <p>First Name: {props.firstName}</p>
        <p>Last Name: {props.lastName}</p>
        <p>Birthdate: {dd && mm && yyyy ? `${dd}/${mm}/${yyyy}` : null}</p>
        <p>Street Address: {props.streetAddress}</p>
        <p>City: {props.city}</p>
        <p>Postal Code: {props.postalCode}</p>
        <p>Cell Number: {props.cellNumber}</p>
        <p>Home Number: {props.homeNumber}</p>
        <p>Academic School: {props.academicSchool}</p>
        <p>Parent/Guardian 1 Name: {props.parentOneName}</p>
        <p>Parent/Guardian 1 Number: {props.parentOneNumber}</p>
        <p>Parent/Guardian 2 Name: {props.parentTwoName}</p>
        <p>Parent/Guardian 2 Number: {props.parentTwoNumber}</p>
        <p>Student Email: {props.studentEmail}</p>
        <p>Primary Email: {props.primaryEmail}</p>
        <p>Secondary Email: {props.secondaryEmail}</p>
        <Button
          id={2}
          variant="contained"
          color="primary"
          onClick={props.handleEditPersonalInformation}
        >
          Edit
        </Button>
      </Paper>
    </div>
  );
}

export default InformationReview;
