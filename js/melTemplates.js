const insertTemplates = () => {
    //Create Variables for Templates
    const header = `
    <!--Header-->
    <div class="container-fluid p-0">
        <div class="row align-items-center" style="background-color: #064273;">
        <div class="col-md-9 px-4" style="color:#def3f6;">
            <span>contact:</span>
            <a style="color:#def3f6;" href="tel: +639272468324">(+63) 9-BRAINTECH</a>
            <span class="px-2">||</span>
            <span>email to:</span>
            <a href="mailto: helpdesk@braintech.tk" style="color:#def3f6;">helpdesk@braintech.tk</a>
        </div>
        <div class="col-md-3 px-4 py-1 text-end">
            <button type="button" class="btn btn-outline-light me-2" style="font-size: 0.7rem;" data-bs-toggle="modal" data-bs-target="#modalSignIn">Sign-In</button>
            <button type="button" class="btn btn-primary" style="font-size: 0.7rem;" data-bs-toggle="modal" data-bs-target="#modalSignUp">Sign-Up</button>
        </div>
        </div>
    </div>

    <!--Nav bar-->
    <nav class="navbar navbar-expand-lg navbar-light sticky-top">
        <img src="Media/tomBrandlogo.png" alt="logo" height="50px">
        <a class="navbar-brand ms-1" href="#"><strong>Brain</strong><b>Tech</b></a>  		
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Collection of nav links, forms, and other content for toggling -->
        <div id="navbarCollapse" class="collapse navbar-collapse justify-content-start">
            <div class="navbar-nav mx-auto">
                <a href="#" class="nav-item nav-link text-dark active">Home</a>
                <a href="#" class="nav-item nav-link text-dark">About</a>			
                <div class="nav-item dropdown">
                    <a href="#" class="nav-item nav-link dropdown-toggle text-dark" data-toggle="dropdown">Courses</a>
                    <div class="dropdown-menu">					
                        <a href="#" class="dropdown-item"data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Computer Basics</a>
                        <a href="#" class="dropdown-item">Microsoft Office</a>
                        <a href="#" class="dropdown-item">Graphic Design</a>
                        <a href="#" class="dropdown-item">Digital Marketing</a>
                    </div>
                </div>
                <a href="#" class="nav-item nav-link text-dark">News</a>
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
                <a href="#" class="me-4 text-reset"><i class="fa fa-facebook"></i></a>
                <a href="#" class="me-4 text-reset"><i class="fa fa-instagram"></i></a>
                <a href="#" class="me-4 text-reset"><i class="fa fa-twitter"></i></a>
                <a href="#" class="me-4 text-reset"><i class="fa fa-google-plus"></i></a>
                <a href="#" class="me-4 text-reset"><i class="fa fa-github"></i></a>
                </div>
            </div>		
        </div>
    </nav>

    `;

    const footer = `lorem2`;

    const modals = `
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
                <small class="text-muted">By clicking Sign up, you agree to the <a href=#>terms of use.</a></small>
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
                <p class="text-center">Already have an account? <a href=#modalSignIn data-bs-toggle="modal">Sign-in</a></p>
              </form>
            </div>
          </div>
        </div>
    </div>

    <!--SignIn-->
    <div class="modal fade" tabindex="-1" role="dialog" id="modalSignIn">
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
              <form class="">
                <div class="form-floating mb-3">
                  <input type="email" class="form-control rounded-3" id="signInEmailInput" placeholder="name@example.com">
                  <label for="signInEmailInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="password" class="form-control rounded-3" id="signInPassword" placeholder="Password">
                  <label for="signInPassword">Password</label>
                </div>
                <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign In</button>
                <hr class="my-4">
                <p class="text-center">New to BrainTech? <a href=#modalSignUp data-bs-toggle="modal">Create an Account</a></p>
              </form>
            </div>
          </div>
        </div>
    </div>

    `;

    //Insert modal templates
    const modalLocation = document.getElementById("modalLoc");
    modalLocation.insertAdjacentHTML("afterend", modals);

    //Insert header
    const headerLocation = document.getElementById("headerLoc");
    headerLocation.insertAdjacentHTML("afterend", header);
};

insertTemplates();