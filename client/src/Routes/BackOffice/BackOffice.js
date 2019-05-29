import React from "react";
import StudentLookup from "../../components/StudentLookup/StudentLookup";
import ClassEditor from "../../components/ClassEditor/ClassEditor";

import "./BackOffice.css";

class BackOffice extends React.Component {
  render() {
    return (
      <div className="container">
        <StudentLookup />
        <ClassEditor />
      </div>
    );
  }
}

export default BackOffice;
