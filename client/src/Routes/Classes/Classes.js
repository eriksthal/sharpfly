import React from "react";
import { classByIdEndpoint } from "../../constants/config.js";

import "./Classes.css";

class Classes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleClass: {
        discipline: "",
        location: "",
        level: [],
        terms: [],
        ages: []
      }
    };
  }
  componentDidMount() {
    fetch(`${classByIdEndpoint}?id=${this.props.classId}`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            singleClass: result.pop(),
            isLoaded: true
          });
          console.log(this.state.singleClass);
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
  render() {
    return (
      <div>
        <h3>{`${this.state.singleClass.level.join("/")} ${
          this.state.singleClass.discipline
        } ${this.state.singleClass.ages.join("/")} - ${
          this.state.singleClass.location
        }`}</h3>
        <h4>{this.state.singleClass.hours}</h4>
        <h4>{this.state.singleClass.location}</h4>
        <div>
          {this.state.singleClass.terms.map(term => {
            return (
              <div key={term.termId}>
                <div>{`Date: ${term.termName} Price: $${
                  term.termPrice
                } CAD`}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Classes;
