"use strict";
/*
    1- Task: Create a Program to Calculate Student Grades
    
    Breakdown:

•	Declare two variables for the exam scores, e.g., englishMarks and urduMarks, and assign them
    values.
•	Calculate the average of the two exams using the formula: (englishMarks + urduMarks) / 2
•	Use if-else conditionals to determine the student's grade based on the average score.
•	For example, if the average score is greater than or equal to 80, assign grade "A", if it is
    than or equal to 70 and less than 80, assign grade "B", and so on until grade "F" for a score below 60.
•	Display the grade to the user as output.

*/
let englishMarks = 90;
let urduMarks = 70;
const grades = (engMarks, urduMarks) => {
    let average = (engMarks + urduMarks) / 2;
    let grade = "";
    if (average >= 80 && average <= 100) {
        grade = "A";
    }
    else if (average >= 70 && average <= 80) {
        grade = "B";
    }
    else if (average >= 60 && average <= 70) {
        grade = "C";
    }
    else if (average < 60) {
        grade = "F";
    }
    else {
        grade = "Please specify your English and Urdu marks";
    }
    return grade;
};
console.log(grades(englishMarks, urduMarks));
