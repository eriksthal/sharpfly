import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";
import Icon from "@material-ui/core/Icon";
import { cities } from "../../constants/cities";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

import "./PersonalInformation.css";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  textField: {
    width: "100%"
  }
});

function PersonalInformation(props) {
  const { classes } = props;

  return (
    <div className="personal-information__main-container">
      <Paper className="personal-information__container" elevation={1}>
        <h2>About you</h2>
        <div className="personal-information__form-fields">
          <div className="personal-information__form-row">
            <TextField
              id="first-name"
              label="First Name"
              className={
                classes.textField + " personal-information__spaced-text"
              }
              value={props.firstName}
              onChange={props.handleFirstNameChange}
              margin="normal"
            />
            <TextField
              id="last-name"
              label="Last Name"
              className={classes.textField}
              value={props.lastName}
              onChange={props.handleLastNameChange}
              margin="normal"
            />
          </div>
          <div className="personal-information__form-row-picker">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                id="birthdate"
                margin="normal"
                label="Birthdate"
                disableFuture
                className="personal-information__date-picker"
                openTo="year"
                format={"dd/MM/yyyy"}
                views={["year", "month", "day"]}
                value={props.birthdate}
                onChange={props.handleBirthdateChange}
              />
            </MuiPickersUtilsProvider>
            <Icon
              style={{
                marginLeft: "-20px",
                paddingBottom: "10px",
                fontSize: "20px"
              }}
            >
              date_range
            </Icon>
          </div>
          <div className="personal-information__form-row">
            <TextField
              id="street-address"
              label="Street Address"
              className={classes.textField}
              value={props.streetAddress}
              onChange={props.handleStreetAddressChange}
              margin="normal"
            />
          </div>
          <div className="personal-information__city-postal-code">
            <div className="personal-information__city">
              <InputLabel htmlFor="city-helper">City</InputLabel>
              <Select
                id="city"
                value={props.city}
                onChange={props.handleCityChange}
                placeholder="City"
                input={<Input name="city" id="city-helper" />}
              >
                <MenuItem value={"none"}>
                  <em>Select a city</em>
                </MenuItem>
                {cities.map(city => {
                  return <MenuItem value={city}>{city}</MenuItem>;
                })}
              </Select>
            </div>
            <TextField
              id="postal-code"
              label="Postal Code"
              className={classes.textField}
              value={props.postalCode}
              onChange={props.handlePostalCodeChange}
              margin="normal"
            />
          </div>
          <div className="personal-information__form-row">
            <TextField
              id="cell-number"
              label="Cell Number"
              className={
                classes.textField + " personal-information__spaced-text"
              }
              value={props.cellNumber}
              onChange={props.handleCellNumberChange}
              margin="normal"
            />
            <TextField
              id="home-number"
              label="Home Phone Number"
              className={classes.textField}
              value={props.homeNumber}
              onChange={props.handleHomeNumberChange}
              margin="normal"
            />
          </div>
          <div className="personal-information__form-row">
            <TextField
              id="academic-school"
              label="Academic School"
              className={classes.textField}
              value={props.academicSchool}
              onChange={props.handleAcademicSchoolChange}
              margin="normal"
            />
          </div>
          <div className="personal-information__form-row">
            <TextField
              id="personal-email"
              label="Student email"
              className={classes.textField}
              value={props.studentEmail}
              onChange={props.handleStudentEmailChange}
              margin="normal"
            />
          </div>
          <div className="personal-information__form-row">
            <TextField
              id="primary-email"
              label="Primary email"
              className={classes.textField}
              value={props.primaryEmail}
              onChange={props.handlePrimaryEmailChange}
              margin="normal"
            />
          </div>
          <div className="personal-information__form-row">
            <TextField
              id="secondary-email"
              label="Secondary email"
              className={classes.textField}
              value={props.secondaryEmail}
              onChange={props.handleSecondaryEmailChange}
              margin="normal"
            />
          </div>
          <h2 className="personal-information__heading">
            About your parents or guardians
          </h2>
          <div className="personal-information__form-row">
            <TextField
              id="mom-name"
              label="Parent/Guardian 1 Name"
              className={
                classes.textField + " personal-information__spaced-text"
              }
              value={props.momsName}
              onChange={props.handleMomsNameChange}
              margin="normal"
            />
            <TextField
              id="mom-number"
              label="Parent/Guardian 1 Phone"
              className={classes.textField}
              value={props.momsNumber}
              onChange={props.handleMomsNumberChange}
              margin="normal"
            />
          </div>
          <div className="personal-information__form-row">
            <TextField
              id="dad-name"
              label="Parent/Guardian 2 Name"
              className={
                classes.textField + " personal-information__spaced-text"
              }
              value={props.dadsName}
              onChange={props.handleDadsNameChange}
              margin="normal"
            />
            <TextField
              id="dad-number"
              label="Parent/Guardian 2 Phone"
              className={classes.textField}
              value={props.dadsNumber}
              onChange={props.handleDadsNumberChange}
              margin="normal"
            />
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(PersonalInformation);
