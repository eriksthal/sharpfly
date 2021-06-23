export const getTermFromClass = (selectedClasses, classId) => {
  let term = `None-${classId}`;
  selectedClasses.forEach((selectedClass) => {
    if (selectedClass.classId === classId) {
      term = `${selectedClass.term}-${classId}-${selectedClass.classPrice}-${
        selectedClass.classDiscipline
      }`;
      return;
    }
  });
  return term;
};

export const findClassIdinArrayOfClasses = (classId, arrayOfClasses) => {
  const filteredClasses = arrayOfClasses.filter((singleClass) => {
    return classId === singleClass.classId;
  });
  return filteredClasses;
};

export const findTermNameinArrayOfTerms = (termId, arrayOfTerms) => {
  const filteredTerms = arrayOfTerms.filter((singleTerm) => {
    return termId.toString() === singleTerm.termId.toString();
  });
  return filteredTerms;
};

export const getPrice = (selectedClasses) => {
  let price = 0;
  selectedClasses.forEach((singleClass) => {
    price = +price + +singleClass.classPrice;
  });
  return parseFloat(price).toFixed(2);
};

export const filterClassesForUniforms = (selectedClasses) => {
  let filteredClasses = [];
  selectedClasses.forEach((singleClass) => {
    if (filteredClasses.indexOf(singleClass.classDiscipline) === -1) {
      filteredClasses.push(singleClass.classDiscipline);
    }
  });
  return filteredClasses;
};

//MIGHT REFACTOR LATER TO ADD MULTIPLE SPECIAL CLASSES
export const findSpecialClasses = (selectedClasses, specialClasses) => {
  // If there's no special classes, it returns 0
  // If there's only one class and it is special, it returns 1
  // If there's multiple classes and they are special, it return 1
  // If there's multiple classes and one is special, it returns 2
  let response;
  let areSpecial = true;
  if (
    selectedClasses.length === 1 &&
    specialClasses.indexOf(selectedClasses[0].classDiscipline) > -1
  ) {
    response = 1;
  } else if (selectedClasses.length > 1) {
    selectedClasses.forEach((singleClass) => {
      if (specialClasses.indexOf(singleClass.classDiscipline) === -1) {
        // Validates if all the classes are special or if it is a combination
        areSpecial = false;
      }
    });
    if (areSpecial) {
      response = 1;
    } else {
      response = 2;
    }
  } else {
    response = 0;
  }
  return response;
};
