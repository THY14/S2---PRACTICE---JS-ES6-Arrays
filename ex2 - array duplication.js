// 1. We are managing a data structure of students -  representing a student with 'firstName' and 'age' properties.
// 2. The 'updateStudentAge' function is supposed to update the age of a student his/her first name
// 3. However, some students have the same first name !
// 4. To fix this bug, we want to add 2 properties : lastName and batch  (given a firstName + lastName + batch we do not expect duplication)

// TODO:
// - Update the data strucure and the functions to manage those new properties
const STUDENTS_DATA = [
  { batch:"Gen9",firstName: "An",lastname:"deny", age: 20 },
  { batch:"Gen7",firstName: "Bình",lastname:"bunleap", age: 22 },
  { batch:"Gen8",firstName: "Cẩm",lastname:"theara", age: 21 },
  { batch:"Gen10",firstName: "An",lastname:"rithea", age: 19 }, // Duplicate first name !
];

/**
 * Update 1 student age, given his/her first name
 * @param {string} firstName - the student first name
 * @param {age} newAge  - the student new age
 */
function updateStudentAge(firstName, newAge,Batch,lastName) {
  let student = STUDENTS_DATA.find((s) => s.firstName === firstName&&s.lastname === lastName&&s.batch === Batch);
  if (student) {
    student.age = newAge;
  }else{
    console.log(`Student ${firstName} ${lastName} not found in batch ${Batch}`);
  }
  

}
// 1 - Update An age to 30
updateStudentAge("An", 30,"Gen9","deny");

// 2 - Print the updated data
console.log(JSON.stringify(STUDENTS_DATA));
