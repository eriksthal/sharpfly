export const getTermFromClass = (selectedClasses, classId) => {
  let term = `None-${classId}`;
  selectedClasses.forEach(selectedClass => {
    if (selectedClass.classId === classId) {
      term = `${selectedClass.term}-${classId}-${selectedClass.classPrice}`;
      return;
    }
  });
  return term;
};

export const findClassIdinArrayOfClasses = (classId, arrayOfClasses) => {
  const filteredClasses = arrayOfClasses.filter(singleClass => {
    return classId === singleClass.classId;
  });
  return filteredClasses.length;
};

export const getPrice = selectedClasses => {
  let price = 0;
  selectedClasses.forEach(singleClass => {
    price += parseInt(singleClass.classPrice);
  });
  return price;
};
