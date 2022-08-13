//All Sections
const dashBoard = document.querySelectorAll('.dash');
//Courses
const dashCourse = document.querySelector('#dashCourse');
const dashCourseBtn = document.querySelector('#dashCourseBtn')
//My Students
const dashMyStudents = document.querySelector('#dashMyStudents');
const dashMyStudentsBtn = document.querySelector('#dashMyStudentsBtn');
//Assignment
const dashAssignment = document.querySelector('#dashAssignment');
const dashAssignmentBtn = document.querySelector('#dashAssignmentBtn');
//Quiz
const dashQuiz = document.querySelector('#dashQuiz');
const dashQuizBtn = document.querySelector('#dashQuizBtn');
//Evaluation
const dashEvaluation = document.querySelector('#dashEvaluation');
const dashEvaluationBtn = document.querySelector('#dashEvaluationBtn');
//Profile
const dashProfile = document.querySelector('#dashProfile');
const dashProfileBtn = document.querySelector('#dashProfileBtn');


const hide = () => {
    dashBoard.forEach(element => {
    element.style.display = 'none';
    });
};

const displayCourse = () => {
    hide();
    dashCourse.style.display = '';
};

const displayMyStudents = () => {
    hide();
    dashMyStudents.style.display = '';
};

const displayAssignment = () => {
    hide();
    dashAssignment.style.display = '';
};

const displayQuiz = () => {
    hide();
    dashQuiz.style.display = '';
};

const displayEvaluation = () => {
    hide();
    dashEvaluation.style.display = '';
};

const displayProfile = () => {
    hide();
    dashProfile.style.display = '';
};

const displayLogout = () => {
    hide();
    dashLogout.style.display = '';
};


dashCourseBtn.addEventListener('click', displayCourse);
dashMyStudentsBtn.addEventListener('click', displayMyStudents);
dashAssignmentBtn.addEventListener('click', displayAssignment);
dashQuizBtn.addEventListener('click', displayQuiz);
dashEvaluationBtn.addEventListener('click', displayEvaluation);
dashProfileBtn.addEventListener('click', displayProfile);



