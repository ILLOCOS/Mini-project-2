//Assign Variables to html elements
const loginBtn = document.querySelector('#loginBtn'); //Modal
const loginBtnMain = document.querySelector('#loginBtnMain'); //NavBar
const logoutBtn = document.querySelector('#logoutBtn')
const logoutBtnMain = document.querySelector('#logoutBtnMain'); //NavBar
const signUpBtn = document.querySelector('#signUpBtn'); //Modal
const signUpBtnMain = document.querySelector('#signUpBtnMain'); //NavBar

//Button containers
const loginBtnMainContainer = document.querySelector('#loginBtnMainContainer');
const logoutBtnMainContainer = document.querySelector('#logoutBtnMainContainer');
const dashboardBtnMain = document.querySelector('#dashBtnMain')//Dashboard link in navbar

//Retrieve user login details
const storedUsers = JSON.parse(window.localStorage.getItem('details'));
const userEmail = window.localStorage.getItem('userEmail');
const currentUser = JSON.parse(window.localStorage.getItem('isIn'));



const login = () => {

  //Get email and password login inputs
  const loginPasswordInput = document.querySelector('#loginPassword').value;
  const loginEmailInput = document.querySelector('#loginEmailInput').value;
  const storedUsers = JSON.parse(window.localStorage.getItem('details'));

  //Validation Procedure
  // Search users obj in local storage and compare email and password
  if (loginEmailInput in storedUsers && loginPasswordInput == storedUsers[loginEmailInput][3]) {

    //Store user email
    window.localStorage.setItem('userEmail', loginEmailInput);
    const userEmail = window.localStorage.getItem('userEmail');

    const isIn = {};
    isIn[userEmail] = [storedUsers[userEmail][0],storedUsers[userEmail][1], storedUsers[userEmail][2]];

    const isInStr = JSON.stringify(isIn);
    window.localStorage.setItem('isIn', isInStr);

    const currentUser = JSON.parse(window.localStorage.getItem('isIn'));
    const loginForm = document.querySelector('#loginBtn');
    const currentUserRole = currentUser[userEmail][2];
    
    if (currentUserRole == "Student") {
      loginForm.action = 'dashboard.html';
    } else {
        if (currentUserRole == "Instructor") {
          loginForm.action = "DashboardInstructor.html";
        } else {
          loginForm.action = "index.html";
        }
      };
  } else {
    alert('Invalid email or password. Please try again.');
  };

};



//Remove user sign in
const logout = () => {
    window.localStorage.removeItem('isIn');
    window.localStorage.removeItem('userEmail');
    loginBtnMainContainer.style.display = '';
    logoutBtnMainContainer.style.display = 'none';
    window.location.href = "index.html";
};



//Hide Login and SignUp button once logged in
if (currentUser != null) {
    loginBtnMainContainer.style.display = 'none';
    logoutBtnMainContainer.style.display = '';
    dashboardBtnMain.style.display = '';
    // Update NavBar dashboard link based on user role
    const currentUserRole = currentUser[userEmail][2];
    if (currentUserRole == 'Instructor') {
      dashboardBtnMain.href = "DashboardInstructor.html";
    };
    
  };



// Validation Message
const emailDuplicateCheck = () => {
  const emailInput = document.querySelector('#signUpEmailInput');
  const emailCheckMsg = document.querySelector('#emailCheck');
  const users = {...storedUsers,};

  if (emailInput.value in users) {
    emailCheckMsg.innerHTML = 'This email is already in use. Please try another one.';

  } else {
    emailCheckMsg.innerHTML = null;
  };
};

const passwordStrengthCheck = () => {
  const passwordCheckMsg = document.querySelector('#passwordCheck');
  const passwordInput = document.querySelector('#signUpPassword');
  const passwordValue = passwordInput.value;
  const matchesNumbers = passwordValue.match(/[0-9]/g) || [];
  const matchesSpecial = passwordValue.match(/[^0-9a-zA-Z\s]/g) || [];

  if (passwordValue.length < 8) {
    passwordCheckMsg.innerHTML = 'At least 8 characters';
  } else {
    
      if (matchesNumbers.length == 0) {
        passwordCheckMsg.innerHTML = 'At least one number';
    } else {

        if (matchesSpecial.length == 0) {
          passwordCheckMsg.innerHTML = 'At least one special character';
        } else {
            passwordCheckMsg.innerHTML = null;
        };
    };
  };
};

const confirmPassword = () => {
  const confirmPasswordCheckMsg = document.querySelector('#confirmPasswordCheck');
  const confirmPasswordValue = document.querySelector('#confirmPassword').value;
  const passwordValue = document.querySelector('#signUpPassword').value;

  if (confirmPasswordValue != passwordValue) {
    confirmPasswordCheckMsg.innerHTML = 'Password does not match';
  } else {
    confirmPasswordCheckMsg.innerHTML = null;
  };
};

const emailInput = document.querySelector('#signUpEmailInput');
const passwordInput = document.querySelector('#signUpPassword');
const confirmPasswordInput = document.querySelector('#confirmPassword');

emailInput.addEventListener('input', emailDuplicateCheck);
passwordInput.addEventListener('input', passwordStrengthCheck);
confirmPasswordInput.addEventListener('input', confirmPassword);



//Record user sign up details
const storeDetails = () => {

  const users = {...storedUsers,};

  const firstNameValue = document.querySelector('#firstName').value;
  const lastNameValue = document.querySelector('#lastName').value;
  const roleValue = document.querySelector('#signUpRole').value;
  const emailValue = document.querySelector('#signUpEmailInput').value;
  const passwordValue = document.querySelector('#signUpPassword').value;
  

  
  if (emailValue in users) {
    alert('This email is already in use. Please try a different one.')
  } else {
      users[emailValue] = [firstNameValue, lastNameValue, roleValue, passwordValue];

      const userList = JSON.stringify(users);

      window.localStorage.setItem('details', userList);

      //Auto Login after Sign Up
      window.localStorage.setItem('userEmail', emailValue);
      const userEmail = window.localStorage.getItem('userEmail');

      const isIn = {};
      isIn[userEmail] = [firstNameValue, lastNameValue, roleValue];

      const isInStr = JSON.stringify(isIn);
      window.localStorage.setItem('isIn', isInStr);

      const currentUser = JSON.parse(window.localStorage.getItem('isIn'));
      const signUpForm = document.querySelector('#signUpBtn'); //disregard the 'Btn' part
      const currentUserRole = currentUser[userEmail][2];
      
      if (currentUserRole == "Student") {
        signUpForm.action = 'dashboard.html';
      } else {
          if (currentUserRole == "Instructor") {
            signUpForm.action = "DashboardInstructor.html";
          } else {
            signUpForm.action = "index.html";
          }
        };

      }
};



//Show navbar courses on hover
const showDropdown = () => {
  const navDropdown = document.querySelector('#navDropdown');
  const navDropdownMenu = document.querySelector('#navDropdownMenu');

  navDropdown.classList.add('show');
  navDropdownMenu.classList.add('show');
  navDropdown.ariaExpanded = 'true';
};

const hideDropdown = () => {
navDropdown.classList.remove('show');
navDropdownMenu.classList.remove('show');
navDropdown.ariaExpanded = 'false';
};



//Event Listeners
navDropdown.addEventListener('mouseover', showDropdown);
navDropdown.addEventListener('mouseout', hideDropdown);

loginBtn.addEventListener('submit', login);
logoutBtn.addEventListener('click', logout);
logoutBtnMain.addEventListener('click', logout);

signUpBtn.addEventListener('submit', storeDetails);

console.log('Current User: ' + userEmail);
console.log(storedUsers);
console.log(currentUser);
// window.localStorage.removeItem('details');
// window.localStorage.removeItem('isIn');
// window.localStorage.removeItem('userEmail')