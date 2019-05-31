import React from "react";
import { Link } from "@reach/router";
import { classesEndpoint } from "../../constants/config.js";

import "./ClassEditor.css";

class ClassEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { classes: [], isLoaded: true };
  }

  componentDidMount() {
    fetch(classesEndpoint)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            classes: result,
            isLoaded: true
          });
          console.log(this.state.classes);
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
        {this.state.classes.map(singleClass => {
          return (
            <div>
              <Link to={`/class/${singleClass.classId}`}>
                <h3>{`${singleClass.level.join("/")} ${
                  singleClass.discipline
                } ${singleClass.ages.join("/")} - ${singleClass.location}`}</h3>
              </Link>
              <h4>{singleClass.hours}</h4>
              <h4>{singleClass.location}</h4>
              <div style={{ backgroundColor: "red" }}>
                {singleClass.terms.map(term => {
                  return (
                    <div>
                      <div>{`Date: ${term.termName} Price: $${
                        term.termPrice
                      } CAD`}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ClassEditor;
