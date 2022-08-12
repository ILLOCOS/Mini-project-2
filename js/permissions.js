//function that will store to localStorage if the user has signed-in

const loginBtn = document.querySelector('#loginBtn'); //Modal
const loginBtnMain = document.querySelector('#loginBtnMain'); //NavBar
const logoutBtn = document.querySelector('#logoutBtn')
const logoutBtnMain = document.querySelector('#logoutBtnMain'); //NavBar
const signUpBtn = document.querySelector('#signUpBtn'); //Modal
const signUpBtnMain = document.querySelector('#signUpBtnMain'); //NavBar

//Button containers
const loginBtnMainContainer = document.querySelector('#loginBtnMainContainer');
const logoutBtnMainContainer = document.querySelector('#logoutBtnMainContainer');

//Record that user has signed in
const login = () => {
   window.localStorage.setItem('isIn', 'true');
};

//Remove user sign in
const logout = () => {
    window.localStorage.removeItem('isIn');
    loginBtnMainContainer.style.display = '';
    logoutBtnMainContainer.style.display = 'none';
    window.location.href = "index.html";
};

loginBtn.addEventListener('click', login);

logoutBtn.addEventListener('click', logout);
logoutBtnMain.addEventListener('click', logout);

const dashboardBtnMain = document.querySelector('#dashBtnMain')//Dashboard link in navbar

//Hide Login and SignUp button once logged in
const userStatus = window.localStorage.getItem('isIn');

if (userStatus == 'true') {
    loginBtnMainContainer.style.display = 'none';
    logoutBtnMainContainer.style.display = '';
    dashboardBtnMain.style.display = '';
};

