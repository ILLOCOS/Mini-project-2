//To be pasted to other pages except index.html (These are the markers)

//<!--External JS-->
//<script src="/js/melTemplates.js"></script>

// Insert Templates
const insertTemplates = () => {
    //Create Variables for Templates
    const header = `
    <!--Header-->
    <div class="container-fluid ">
        <div class="row align-items-center" style="background-color: #064273;">
        <div class="col-md-9 px-4" style="color:#def3f6;">
            <span>contact:</span>
            <a style="color:#def3f6;" href="tel: +639272468324">(+63) 9-BRAINTECH</a>
            <span class="px-2">||</span>
            <span>email to:</span>
            <a href="mailto: helpdesk@braintech.tk" style="color:#def3f6;">helpdesk@braintech.tk</a>
        </div>
        <div class="col-md-3 px-4 py-1 text-end" style="display:block;" id="loginBtnMainContainer">
            <button type="button" class="btn btn-outline-light me-2" style="font-size: 0.7rem;" data-bs-toggle="modal" data-bs-target="#modalLogin" id="loginBtnMain">Login</button>
            <button type="button" class="btn btn-primary me-2" style="font-size: 0.7rem;" data-bs-toggle="modal" data-bs-target="#modalSignUp" id="signUpBtnMain">Sign-Up</button>
        </div>
        <div class="col-md-3 px-4 py-1 text-end" style="display:none;" id="logoutBtnMainContainer">
          <button type="button" class="btn btn-outline-light me-2" style="font-size: 0.7rem;" id="logoutBtnMain">Logout</button>
        </div>
        </div>
    </div>

    <!--Nav bar-->
    <nav class="navbar navbar-expand-lg navbar-light sticky-top">
        <img src="/media/tomBrandlogo.png" alt="logo" height="50px">
        <a class="navbar-brand mx-1 px-0" href="#"><strong>Brain</strong><b>Tech</b></a>  		
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Collection of nav links, forms, and other content for toggling -->
        <div id="navbarCollapse" class="collapse navbar-collapse justify-content-start">
            <div class="navbar-nav mx-auto">
                <a href="index.html" class="nav-item nav-link text-dark active">Home</a>
                <a href="AboutUs.html" class="nav-item nav-link text-dark">About</a>			

                <div class="nav-item dropdown">
                    <a href="#" class="nav-item nav-link dropdown-toggle text-dark" data-toggle="dropdown">Courses</a>
                    <div class="dropdown-menu">					
                        <a href="ComputerBasics.html" class="dropdown-item" aria-controls="offcanvasScrolling">Computer Basics</a>
                        <a href="#" class="dropdown-item">Photoshop</a>
                        <a href="#" class="dropdown-item">Graphic Design</a>
                        <a href="#" class="dropdown-item">Digital Marketing</a>
                    </div>
                </div>
                <a href="dashboard.html" class="nav-item nav-link text-dark" style="display:none;" id="dashBtnMain">Dashboard</a>
                <a href="#" class="nav-item nav-link text-dark">Contact</a>
            </div>

            <div class="navbar-nav ms-auto">
                <div class="navbar-form-wrapper">
                    <form class="navbar-form form-inline">
                        <div class="input-group search-box me-3">						
                            <form class="mb-3 mb-lg-0" role="search">
                                <input type="search" class="form-control rounded-2" placeholder="Search..." aria-label="Search">
                            </form>
                            <div class="input-group-append">
                                <span class="input-group-text">
                                    <i class="fa fa-search"></i>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="showHide p-0 pt-2">
                <a href="#" class="me-4 text-reset"><img src="/media/facebook.png" class="icons"></a>
                <a href="#" class="me-4 text-reset"><img src="/media/instagram.png" class="icons"></a>
                <a href="#" class="me-4 text-reset"><img src="/media/twitter.png" class="icons"></a>
                <a href="#" class="me-4 text-reset"><img src="/media/google.png" class="icons"></a>
                <a href="#" class="me-4 text-reset"><img src="/media/github.png" class="icons"></a>
                </div>
            </div>		
        </div>
    </nav>

    <!--Sidebar-->
    <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Computer Basics</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Lesson 1 : Introduction
            </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong><a href="ComputerBasics.html">1. About This tutorial</a></strong><br> Learn what's covered in this free course.
            </div>
            </div>

            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong><a href="ComputerBasics.html#cB2">2. What is Computer</a></strong><br> Learn what is computer  is and how it functions
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Lesson 2 : Hardware Basics
            </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong ><a href="ComputerBasics3.html">3. Basic parts of a Computer</a></strong><br> Learn the basic parts of computer, including the monitor, computer case, and keyboard.
            </div>
            </div>

            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong ><a href="ComputerBasics4.html">4. Buttons and Ports on a Computer</a></strong><br> Learn the various ports and buttons on a computer.
            </div>
            </div>

            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong ><a href="ComputerBasics5.html">5. Inside a Computer</a></strong><br> Learn what's inside a computer.
            </div>
            </div>

            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong ><a href="ComputeBasics6.html">6. Laptop Computers</a></strong><br> Learn more about laptop computers and how they differ from traditional desktop computers.
            </div>
            </div>

            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong ><a href="ComputeBasics7.html">7. Mobile Devices</a></strong><br> Learn how mobile devices work.
            </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Lesson 3 : Software basics
            </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong ><a href="ComputerBasics8.html">8. Understanding operating Systems</a></strong><br> Get a better understanding of operating systems and how they functions.
            </div>
            </div>

            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong ><a href="ComputerBasics9.html">9. Understanding Applications</a></strong><br> Better understand applications and how they work.
            </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                Lesson 4 : Using a Computer
            </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong ><a href="ComputeBasics10.html">10. Setting Up a Computer</a></strong><br> Learn how to set up a computer
            </div>
            </div>

            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong ><a href="ComputeBasics11.html">11. Getting Started with your First Computer</a></strong><br> Get started with your first computer.
            </div>
            </div>

            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong ><a href="#">12. Getting to Know the OS</a></strong><br> Get to know your computer's operating system.
            </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                Lesson 5 : Using the  Internet
            </button>
            </h2>
            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong ><a href="#">13. Connecting to the Intenet</a></strong><br> Learn how to get online and start using the internet.
            </div>
            </div>

            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong ><a href="#">14. Getting Started with the Internet</a></strong><br> Learn how to get started with and navigate the internet.
            </div>
            </div>

            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong ><a href="#">15. Unterstanding the Cloud</a></strong><br> Gain a greater understanding of the cloud and how it works.
            </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header" id="headingSix">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
                Lesson 6 : Safety and Maintenance
            </button>
            </h2>
            <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong ><a href="#">16. Keeping your Computer Clean</a></strong><br> Use this tips to keep your computer clean.
            </div>
            </div>

            <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong ><a href="#">17. Protecting your Computer</a></strong><br> Employ these strategies to keep your computer well protected from threats.
            </div>
            </div>

            <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong ><a href="#">18. Creating a Safe Workspace</a></strong><br> Learn tips for creating a safe space at work.
            </div>
            </div>

            <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong ><a href="#">19. Basic Troubleshooting Techniques</a></strong><br> Learn these basic troubleshooting techniques.
            </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header" id="headingSeven">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseThree">
                Lesson 7 : Extras
            </button>
            </h2>
            <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong ><a href="#">20. How to Use Your Computer's Bulit-in Help</a></strong><br> Learn how to use your computer's built-in help function.
            </div>
            </div>

            <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong ><a href="#">21. Learning a New Program</a></strong><br> Use this tips for learning a new program, whatever it may be.
            </div>
            </div>

            <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong ><a href="#">22. Bringing Your files with You</a></strong><br> Learn how you can bring your computer files and folders with you whatever you go.
            </div>
            </div>

            <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong ><a href="#">23. Using Accessibility Features</a></strong><br> Here's how to use your computer's various accessibility functions.
            </div>
            </div>
        </div>

        </div>
    </div>
    </div>
    `;

    const footer = `
    <!-- Footer -->
    <footer class="text-center text-lg-start bg-light text-muted">
      <!-- Section: Social media -->
      <section
        class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <!-- Left -->
        <div class="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <!-- Left -->
    
        <!-- Right -->
        <div>
          <a href="#" class="me-4 text-reset"><img src="/media/facebook.png" class="icons"></a>
          <a href="#" class="me-4 text-reset"><img src="/media/instagram.png" class="icons"></a>
          <a href="#" class="me-4 text-reset"><img src="/media/twitter.png" class="icons"></a>
          <a href="#" class="me-4 text-reset"><img src="/media/google.png" class="icons"></a>
          <a href="#" class="me-4 text-reset"><img src="/media/github.png" class="icons"></a>
        </div>
        <!-- Right -->

      </section>
      <!-- Section: Social media -->
    
      <!-- Section: Links  -->
      <section class="myfooter">
        <div class="container text-center text-md-start mt-5">
          <!-- Grid row -->
          <div class="row mt-3 " style="text-align: center;">
              <!-- Grid column -->
              <div class="col-sm-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <!-- Content -->
                <h6 class="text-uppercase fw-bold mb-4 ">
                  <i class="fas fa-gem me-3"></i><img src="media/tomBrandlogo.png" alt="logo" height="75px">
                </h6>
                <p>
                <b>BrainTech</b><br>
                <i> “Striving for excellence motivates you.” <br>-Harriet Braiker</i>
                </p>
              </div>
              <!-- Grid column -->

              <!-- Grid column -->
              <div class="col-sm-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <!-- Links -->
                <h6 class="text-uppercase fw-bold mb-4">
                  Page
                </h6>
                <p>
                  <a href="#" class="text-reset">Home</a>
                </p>
                <p>
                  <a href="#" class="text-reset">About</a>
                </p>
                <p>
                  <a href="#" class="text-reset">Contact</a>
                </p>
                <p>
                  <a href="#" class="text-reset">News</a>
                </p>
              </div>
      
              <!-- Grid column -->
              <div class="footercourses col-sm-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <!-- Links -->
                <h6 class="text-uppercase fw-bold mb-4">
                  Courses
                </h6>
                <p>
                  <a href="#" class="text-reset">Computer Basics</a>
                </p>
                <p>
                  <a href="#" class="text-reset">Photoshop</a>
                </p>
                <p>
                  <a href="#" class="text-reset">Graphic Design</a>
                </p>
                <p>
                  <a href="#" class="text-reset">Digital Marketing</a>
                </p>
              </div>
              <!-- Grid column -->
        
              <!-- Grid column -->
              <div class="col-sm-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <!-- Links -->
                <h6 class="text-uppercase fw-bold mb-4">
                  Contact
                </h6>
                <p><i class="fa-phone-alt"></i> Pampanga, San Fernando 2010, Phil</p>
                <p>
                  <i class="fa-phone-alt"></i>
                  BrainTech@e-Learning.com
                </p>
                <p><i class="fa-phone-alt"></i> + 01 654 345</p>
                <p><i class="fa-phone-alt"></i> + 03 435 455</p>
              </div>
              <!-- Grid column -->
          </div>
        </div>
      </section>
    <!-- Copyright -->
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
      © 2022 Copyright:
      <a class="text-reset fw-bold" href="#" style="text-decoration:none ;">BrainTech</a>
      <div id="logoutBtn" style="display:none;"></div><!--Placeholder only please don't delete-->
    </div>
    <!-- Copyright -->
    </footer>

<!--Template Source Section ▼ -->

<!--SignUp-->
<div class="modal fade" tabindex="-1" role="dialog" id="modalSignUp">
  <div class="modal-dialog">
    <div class="modal-content rounded-4 shadow">
      <div class="modal-header pt-5 px-5 pb-0 border-bottom-0">
        <div>
          <h2 class="fw-bold mb-2">Sign up for free</h2>
          <h5>and start learning today!</h5>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body p-5 pt-0">
        <form class="">
          <div class="form-floating mb-3">
            <input type="email" class="form-control rounded-3" id="signUpEmailInput" placeholder="name@example.com">
            <label for="signUpEmailInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control rounded-3" id="signUpPassword" placeholder="Password">
            <label for="signUpPassword">Password</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control rounded-3" id="floatingConfirmPassword" placeholder="confirmPassword">
            <label for="floatingConfirmPassword">Confirm Password</label>
          </div>
          <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign up</button>
          <small class="text-muted">By clicking Sign up, you agree to the <a href='#'>terms of use.</a></small>
          <hr class="my-4">
          <h2 class="fs-5 fw-bold mb-3">Or use a third-party</h2>
          <button class="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
          <a href="#" class="me-4 text-reset pt-2"><i class="fa fa-facebook"></i></a>
            Sign up with Facebook
          </button>
          <button class="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
              <a href="#" class="me-4 text-reset pt-2"><i class="fa fa-github"></i></a>
            Sign up with GitHub
          </button>
          <button class="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
              <a href="#" class="me-4 text-reset pt-2"><i class="fa fa-google-plus"></i></a>
            Sign up with Google
          </button>
          <hr>
          <p class="text-center">Already have an account? <a href='#modalLogin' data-bs-toggle="modal">Sign-in</a></p>
        </form>
      </div>
    </div>
  </div>
</div>

<!--Login-->
<div class="modal fade" tabindex="-1" role="dialog" id="modalLogin">
  <div class="modal-dialog">
    <div class="modal-content rounded-4 shadow">
      <div class="modal-header pt-5 px-5 pb-0 border-bottom-0">
        <div>
          <h2 class="fw-bold mb-2">Sign-In</h2>
          <h5>Continue learning today!</h5>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body p-5 pt-0">
        <form class="" action="/dashboard.html">
          <div class="form-floating mb-3">
            <input type="email" class="form-control rounded-3" id="loginEmailInput" placeholder="name@example.com" required="@">
            <label for="loginEmailInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control rounded-3" id="loginPassword" placeholder="Password" required>
            <label for="loginPassword">Password</label>
          </div>
          <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit" id="loginBtn">Sign In</button>
          <hr class="my-4">
          <p class="text-center">New to BrainTech? <a href=#modalSignUp data-bs-toggle="modal">Create an Account</a></p>
        </form>
      </div>
    </div>
  </div>
</div>
    `;

    //Insert Header
    const insertHeader = document.querySelector("body");
    insertHeader.insertAdjacentHTML("afterbegin", header);

    //Insert Footer
    const insertFooter = document.querySelector("body");
    insertFooter.insertAdjacentHTML("beforeend", footer);
};

insertTemplates();

const showSidebar = () => {
  const sidebarList = document.getElementById('offcanvasScrolling').classList;
  sidebarList.add('show');
};

