import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { studentsEndpoint } from "../../constants/config";
import Icon from "@material-ui/core/Icon";
import RegisteredClassesTable from "../RegisteredClassesTable/RegisteredClassesTable";
import Spinner from "../Spinner/Spinner";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Paper from "@material-ui/core/Paper";

import "./StudentLookup.css";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

class StudentLookup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      students: [],
      loading: "loaded",
      queryType: "id",
      filteredStudents: []
    };
  }

  componentDidMount() {
    this.setState({ loading: "loading" });
    fetch(studentsEndpoint)
      .then(res => res.json())
      .then(
        result => {
          if (result.length > 0) {
            this.setState({
              students: result,
              loading: "loaded",
              filteredStudents: result
            });
          } else {
            this.setState({ students: [], loading: "no-results" });
          }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({ students: [], loading: "loaded" });
        }
      );
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleQueryTypeChange(event) {
    this.setState({ queryType: event.target.value });
  }

  renderStudent(student) {
    if (student) {
      return (
        <div style={{ display: "flex" }}>
          <Paper className="student-lookup__student-info">
            <div>First Name: {student.firstName}</div>
            <div>Last Name: {student.lastName}</div>
            <div>Street {student.streetAddress}</div>
            <div>City: {student.city}</div>
            <div>Postal Code:{student.postalCode}</div>
          </Paper>
          {this.renderRegisteredClasses(student)}
        </div>
      );
    }
  }

  renderRegisteredClasses(student) {
    if (student.classes) {
      return <RegisteredClassesTable registeredClasses={student.classes} />;
    }
  }

  handleFetchStudent() {
    this.setState({ loading: "loading" });
    // fetch(
    //   getStudentEndpoint +
    //     `?id=${this.state.name}&queryType=${this.state.queryType}`
    // )
    //   .then(res => res.json())
    //   .then(
    //     result => {
    //       if (result.length > 0) {
    //         this.setState({
    //           students: result,
    //           loading: "loaded",
    //           filteredStudents: result
    //         });
    //       } else {
    //         this.setState({ students: [], loading: "no-results" });
    //       }
    //     },
    //     // Note: it's important to handle errors here
    //     // instead of a catch() block so that we don't swallow
    //     // exceptions from actual bugs in components.
    //     error => {
    //       this.setState({ students: [], loading: "loaded" });
    //     }
    //   );
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="student-lookup__container">
        <div>
          <h2>Search for a student</h2>
        </div>
        <div className="student-lookup__search-container">
          <TextField
            id="standard-name"
            label="Name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleNameChange.bind(this)}
            margin="normal"
          />
          <Button
            variant="contained"
            className="student-lookup__search-button"
            color="primary"
            onClick={this.handleFetchStudent.bind(this)}
          >
            <Icon className={classes.icon} style={{ color: "#fff" }}>
              search
            </Icon>
          </Button>
        </div>
        <div>
          <RadioGroup
            aria-label="queryType"
            name="queryType"
            className={classes.group}
            value={this.state.queryType}
            onChange={this.handleQueryTypeChange.bind(this)}
            style={{ flexDirection: "row" }}
          >
            <FormControlLabel value="id" control={<Radio />} label="Id" />
            <FormControlLabel value="name" control={<Radio />} label="Name" />
          </RadioGroup>
        </div>

        <div
          className={
            this.state.loading === "loading"
              ? "student-lookup__show student-lookup__loading"
              : "student-lookup__hide"
          }
        >
          <Spinner />
        </div>
        <div
          className={
            this.state.loading === "no-results" ? "" : "student-lookup__hide"
          }
        >
          No search results. Try again
        </div>
        <div
          className={
            this.state.loading === "loading"
              ? "student-lookup__search-results student-lookup__hide"
              : "student-lookup__search-results"
          }
        >
          {this.state.filteredStudents.map(student => {
            return this.renderStudent(student);
          })}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(StudentLookup);
