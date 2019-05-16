import { Component } from "react";

export const getTermFromClass = (selectedClasses, classId) => {
    let term = `None-${classId}`; 
    selectedClasses.forEach((selectedClass) => {
        if (selectedClass.classId === classId) {
            term = `${selectedClass.term}-${classId}`;
            return;
        }
    });
    return term;
};

export const fetchIntoState = (endpoint, method = 'GET', headers = {}, payload = {}, key = '', component = this) => {
    fetch(endpoint, {
        method,
        headers,
        body: JSON.stringify(payload)
      })
      .then(res => res.json())
      .then(
        (result) => {
          if(key) {
              component.setState({['key']: result});
          }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      )
};

export const findClassIdinArrayOfClasses = (classId, arrayOfClasses) => {
    const filteredClasses = arrayOfClasses.filter((singleClass)=>{
        return classId === singleClass.classId;
    });
    return filteredClasses.length;
}
