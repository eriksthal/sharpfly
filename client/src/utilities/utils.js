export const getTermFromClass = (selectedClasses, classId) => {
  let term = `None-${classId}`;
  selectedClasses.forEach(selectedClass => {
    if (selectedClass.classId === classId) {
      term = `${selectedClass.term}-${classId}-${selectedClass.classPrice}-${selectedClass.classDiscipline}`;
      return;
    }
  });
  return term;
};

export const findClassIdinArrayOfClasses = (classId, arrayOfClasses) => {
  const filteredClasses = arrayOfClasses.filter(singleClass => {
    return classId === singleClass.classId;
  });
  return filteredClasses;
};

export const findTermNameinArrayOfTerms = (termId, arrayOfTerms) => {
  const filteredTerms = arrayOfTerms.filter(singleTerm => {
    return termId.toString() === singleTerm.termId.toString();
  });
  return filteredTerms;
};

export const getPrice = selectedClasses => {
  let price = 0;
  selectedClasses.forEach(singleClass => {
    price = +price + +singleClass.classPrice;
  });
  return parseFloat(price).toFixed(2);
};

export const filterClassesForUniforms = selectedClasses => {
  let filteredClasses = [];
  selectedClasses.forEach(singleClass => {
    if (filteredClasses.indexOf(singleClass.classDiscipline) === -1) {
      filteredClasses.push(singleClass.classDiscipline);
    }
  });
  return filteredClasses;
};
