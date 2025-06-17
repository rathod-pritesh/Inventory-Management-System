<!-- Login Modal -->
    <div
      class="modal fade"
      id="loginModal"
      tabindex="-1"
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content animate__animated animate__fadeInUp">
          <div class="modal-header">
            <h5 class="modal-title" id="loginModalLabel">
              <i class="bi bi-person-check form-title-icon"></i> Welcome Back
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="text-center mb-4">
              <h4>Login to Your Account</h4>
              <p class="text-muted">Access your projects and continue building</p>
            </div>
            <form id="loginForm">
              <div class="mb-3">
                <label for="loginEmail" class="form-label"><i class="bi bi-envelope"></i> Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="loginEmail"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="loginPassword" class="form-label"><i class="bi bi-lock"></i> Password</label>
                <div class="input-group">
                  <input
                    type="password"
                    class="form-control"
                    id="loginPassword"
                    placeholder="Enter your password"
                    required
                  />
                  <!-- svelte-ignore a11y_consider_explicit_label -->
                  <button
                    class="btn btn-outline-secondary toggle-password"
                    type="button"
                  >
                    <i class="bi bi-eye"></i>
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
              <button type="submit" class="btn btn-warning w-100">
                <i class="bi bi-box-arrow-in-right"></i> Login Now
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