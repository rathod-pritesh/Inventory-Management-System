<script>
  document.addEventListener("DOMContentLoaded", () =>{
    document.querySelectorAll(".toggle-password").forEach(button =>{
      button.addEventListener("click", () =>{
        const input = button.previousElementSibling;
        
        if(input && input instanceof HTMLInputElement){
          const isPassword = input.type === "password";
          input.type = isPassword ? "text" : "password";
          const icon = isPassword ? "eye-slash" : "eye";
          button.innerHTML = `<i class="fas fa-${icon}"></i>`;
        }
      });
    });
  });
</script>
<!-- Login Modal -->
    <div
      class="modal fade"
      id="loginModal"
      tabindex="-1"
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content animate__animated bg-light text-dark animate__fadeInUp">
          <div class="modal-header">
            <h5 class="modal-title" id="loginModalLabel">
              <i class="fas fa-user-plus form-title-icon"></i> <span class="text-dark">Welcome Back</span> 
            </h5>
            <button
              type="button"
              class="btn-close btn-close-dark"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          
          <div class="modal-body">
            <div class="text-center mb-4">
              <h4>Login to Your Account</h4>
              <p class="text-muted">Access your Inventory</p>
            </div>
            <form id="loginForm">
              <div class="mb-3">
                <label for="loginEmail" class="form-label"><i class="fas fa-envelope"></i> Email</label>
                <input
                  type="email"
                  class="form-control border-primary"
                  id="loginEmail"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="loginPassword" class="form-label"><i class="fas fa-lock"></i> Password</label>
                <div class="input-group">
                  <input
                    type="password"
                    class="form-control border-primary"
                    id="loginPassword"
                    placeholder="Enter your password"
                    required
                  />
                  <!-- svelte-ignore a11y_consider_explicit_label -->
                  <button
                    class="btn btn-outline-secondary toggle-password"
                    type="button"
                  >
                    <i class="fas fa-eye"></i>
                  </button>
                </div>
              </div>
              <div class="d-flex justify-content-between mb-4">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="rememberMe">
                  <label class="form-check-label" for="rememberMe">Remember me</label>
                </div>
                <a href="#forgotpassword" class="text-decoration-none">Forgot Password?</a>
              </div>
              <button type="submit" class="btn btn-primary w-100">
                <i class="fas fa-box-arrow-in-right"></i>  Login Now
              </button>
              <div class="text-center mt-3">
                Don't have an account?
                <a
                  href="#register"
                  data-bs-toggle="modal"
                  data-bs-target="#registerModal"
                  data-bs-dismiss="modal"
                  >Register</a
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

