import React from "react";
import { Link } from "@reach/router";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

import { getStudentEndpoint } from "../../constants/config.js";

import "./Student.css";

const styles = theme => ({
  root: {
    width: "100%"
  },
  backButton: {
    marginRight: theme.spacing.unit
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  }
});

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      birthdate: "",
      street: "",
      city: "",
      postalCode: "",
      primaryEmail: "",
      secondaryEmail: "",
      studentEmail: "",
      cellNumber: "",
      homeNumber: "",
      academicSchool: "",
      momName: "",
      momNumber: "",
      dadName: "",
      dadNumber: "",
      careCard: "",
      medicalConditions: "",
      familyDoctorName: "",
      familyDoctorNumber: "",
      waiverStudentName: "",
      waiverGuardianName: "",
      agreementName: "",
      agreementNumber: "",
      agreementDate: "",
      isLoaded: true
    };
  }

  componentDidMount() {
    fetch(`${getStudentEndpoint}?queryType=id&id=${this.props.studentId}`, {
      method: "GET",
      headers: { "x-api-key": localStorage.getItem("key") }
    })
      .then(res => res.json())
      .then(
        result => {
          result = result.pop();
          this.setState({
            studentId: result.studentId,
            firstName: result.firstName,
            lastName: result.lastName,
            birthdate: result.birthdate,
            street: result.street,
            city: result.city,
            postalCode: result.postalCode,
            primaryEmail: result.primaryEmail,
            secondaryEmail: result.secondaryEmail,
            studentEmail: result.studentEmail,
            cellNumber: result.cellNumber,
            homeNumber: result.homeNumber,
            academicSchool: result.academicSchool,
            momName: result.momName,
            momNumber: result.momNumber,
            dadName: result.dadName,
            dadNumber: result.dadNumber,
            careCard: result.careCard,
            medicalConditions: result.medicalConditions,
            familyDoctorName: result.familyDoctorName,
            familyDoctorNumber: result.familyDoctorNumber,
            waiverStudentName: result.waiverStudentName,
            waiverGuardianName: result.waiverGuardianName,
            agreementName: result.agreementName,
            agreementNumber: result.agreementNumber,
            agreementDate: result.agreementDate,
            isLoaded: true
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  removeCCInformation(payload) {
    fetch(getStudentEndpoint, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(
        result => {
          if (result.status === 200) {
            this.setState({
              agreementName: "",
              agreementDate: "",
              agreementNumber: ""
            });
          }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({ isLoaded: true });
        }
      );
  }

  handleClearCcInfo() {
    if (
      !window.confirm(
        "By erasing this information you won't be able to recover it"
      )
    ) {
      return;
    }
    if (!window.confirm("Are you sure?")) {
      return;
    }
    this.removeCCInformation({ id: this.state.studentId });
  }

  render() {
    return (
      <div>
        <p>{this.state.firstName}</p>
        <p>{this.state.lastName}</p>
        <p>{this.state.birthdate}</p>
        <p>{this.state.street}</p>
        <p>{this.state.city}</p>
        <p>{this.state.street}</p>
        <p>{this.state.city}</p>
        <p>{this.state.postalCode}</p>
        <p>{this.state.primaryEmail}</p>
        <p>{this.state.secondaryEmail}</p>
        <p>{this.state.studentEmail}</p>
        <p>{this.state.cellNumber}</p>
        <p>{this.state.homeNumber}</p>
        <p>{this.state.academicSchool}</p>
        <p>{this.state.momName}</p>
        <p>{this.state.momNumber}</p>
        <p>{this.state.dadName}</p>
        <p>{this.state.dadNumber}</p>
        <p>{this.state.careCard}</p>
        <p>{this.state.medicalConditions}</p>
        <p>{this.state.familyDoctorName}</p>
        <p>{this.state.familyDoctorNumber}</p>
        <p>{this.state.waiverStudentName}</p>
        <p>{this.state.waiverGuardianName}</p>
        <p>{this.state.agreementName}</p>
        <p>{this.state.agreementNumber}</p>
        <p>{this.state.agreementDate}</p>
        <div className={!this.state.agreementName ? "hide" : "show"}>
          <Button
            variant="contained"
            onClick={this.handleClearCcInfo.bind(this)}
          >
            Wipe CC information
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Student);
