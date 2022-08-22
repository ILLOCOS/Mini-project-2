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




// Algo for student list
// Store/get student list from backend --> will return an array
// studentList = [{backendArray}, {student info}]
// for data in studentList {
//     let firstName = data.firstname;
//     let lastName = data.lastName;
//     let progress = data.progress;
//     let profilePic = data.img;
//     let studentHTML = `
//              <div>${firstName}</div>
//              <div>${lastName}</div>...

//     mystudent.appendChild(studentHTML)...
// }




const addThis = `<button href="#" class="list-group-item list-group-item-action">
<div class="d-flex w-100 justify-content-between">
  <h5 class="mb-1">List group item heading</h5>
  <small class="text-muted">3 days ago</small>
</div>
<p class="mb-1">Some placeholder content in a paragraph.</p>
<small class="text-muted">And some muted small print.</small>
</button>`;

const studentList = document.querySelector('#myStudentList');
studentList.insertAdjacentHTML('beforeend', addThis);


// Hightlight active element in students list
const btns = studentList.getElementsByClassName("list-group-item");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        let current = studentList.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
  });
}

// Hightlight active element in sidebar dashboard
const dashSidebarContainer = document.getElementById("dashSidebar");
const dashSidebarEl = dashSidebarContainer.getElementsByClassName("rounded");

for (let i = 0; i < dashSidebarEl.length; i++) {
    dashSidebarEl[i].addEventListener("click", function() {
        let current = dashSidebarEl.getElementsByClassName("active2");
        current[0].className = current[0].className.replace(" active2", "");
        this.className += " active2";
  });
}
