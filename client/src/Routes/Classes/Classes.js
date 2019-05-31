import React from "react";
import { classByIdEndpoint } from "../../constants/config.js";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { addTermEndpoint } from "../../constants/config.js";

import "./Classes.css";

class Classes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classId: "",
      discipline: "",
      level: [],
      ages: [],
      terms: [],
      hours: "",
      location: "",
      termName: "",
      termPrice: ""
    };
  }

  insertTermToDatabase() {
    const newTerm = {
      classId: this.props.classId,
      termName: this.state.termName,
      termPrice: parseFloat(this.state.termPrice),
      termDescription: "6 Months",
      classDuration: 45
    };
    fetch(addTermEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTerm)
    })
      .then(res => res.json())
      .then(
        result => {
          newTerm.termId = result;
          this.addTerm(newTerm);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          return false;
        }
      );
  }

  removeTermFromDatabase(payload) {
    fetch(addTermEndpoint, {
      method: "DELETE",
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
            const newTerms = this.removeTermsFromTerms(
              payload.termId,
              this.state.terms
            );
            this.setState({
              terms: newTerms
            });
          }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          return false;
        }
      );
  }

  removeTermsFromTerms(termId, terms) {
    const filteredTerms = terms.filter(term => {
      return term.termId !== parseInt(termId);
    });
    return filteredTerms;
  }

  addTerm(newTerm) {
    const newTermState = this.state.terms.concat(newTerm);
    this.setState({
      terms: newTermState
    });
    this.setState({ termName: "", termPrice: "" });
  }

  handleTextChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleRemoveTerm(event) {
    const termId = event.currentTarget.id;
    this.removeTermFromDatabase({ termId });
  }

  componentDidMount() {
    fetch(`${classByIdEndpoint}?id=${this.props.classId}`)
      .then(res => res.json())
      .then(
        result => {
          if (result.length === 0) {
            return;
          }
          const singleClass = result.pop();
          this.setState({
            classId: singleClass.classId,
            discipline: singleClass.discipline,
            level: singleClass.level,
            ages: singleClass.ages,
            terms: singleClass.terms,
            hours: singleClass.hours,
            location: singleClass.location,
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

  generateClassLayout() {
    if (!this.state.discipline) {
      return;
    }
    return (
      <div>
        <h3>{`${this.state.level.join("/")} ${
          this.state.discipline
        } ${this.state.ages.join("/")} - ${this.state.location}`}</h3>
        <h4>{this.state.hours}</h4>
        <h4>{this.state.location}</h4>
        <h2>Terms:</h2>
        <div style={{ border: "solid 1px black" }}>
          {this.state.terms.map(term => {
            return (
              <div key={term.termId}>
                <div>{`Date: ${term.termName} Price: $${
                  term.termPrice
                } CAD`}</div>
                <Button
                  id={term.termId}
                  variant="contained"
                  onClick={this.handleRemoveTerm.bind(this)}
                >
                  Remove
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.generateClassLayout()}
        <TextField
          id="termName"
          label="Duration"
          margin="normal"
          placeholder="DD/MM/YYYY-DD/MM/YYYY"
          style={{ width: "280px", marginRight: "10px" }}
          value={this.state.termName}
          onChange={this.handleTextChange.bind(this)}
        />
        <TextField
          id="termPrice"
          label="Term Price"
          margin="normal"
          value={this.state.termPrice}
          onChange={this.handleTextChange.bind(this)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={this.insertTermToDatabase.bind(this)}
        >
          Edit
        </Button>
      </div>
    );
  }
}

export default Classes;
