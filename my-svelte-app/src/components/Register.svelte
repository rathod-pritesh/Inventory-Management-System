<script>
  document.addEventListener("click", (event) => {
    // @ts-ignore
    const button = event.target.closest(".toggle-password");
    if (button) {
      const input = button.previousElementSibling;
      if (input && input instanceof HTMLInputElement) {
        const isPassword = input.type === "password";
        input.type = isPassword ? "text" : "password";
        const icon = isPassword ? "eye-slash" : "eye";
        button.innerHTML = `<i class="fas fa-${icon}"></i>`;
      }
    }
  });
</script>

<!-- Register Modal -->
    <div
      class="modal fade"
      id="registerModal"
      tabindex="-1"
      aria-labelledby="registerModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content animate__animated animate__fadeInUp bg-light text-dark">
          <div class="modal-header">
            <h5 class="modal-title" id="registerModalLabel">
              <i class="fas fa-user-plus form-title-icon"></i> Join Invenza 
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
              <h4>Create Your Account</h4>
              <p class="text-muted">Start managing your Inventory today</p>
            </div>
            <form id="registerForm">
              <div class="mb-3">
                <label for="username" class="form-label"><i class="fas fa-user"></i> Username</label>
                <input
                  type="text"
                  class="form-control border-primary"
                  id="username"
                  placeholder="Choose a username"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label"><i class="fas fa-envelope"></i> Email</label>
                <input
                  type="email"
                  class="form-control border-primary"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label"><i class="fas fa-lock"></i>  Password</label>
                <div class="input-group">
                  <input
                    type="password"
                    class="form-control border-primary"
                    id="password"
                    placeholder="Create a password"
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
                <small class="text-muted">
                  Password must be at least 8 characters with letters, numbers and special characters
                </small>
              </div>
              <div class="mb-3">
                <label for="confirmPassword" class="form-label"><i class="fas fa-shield-alt"></i> Confirm Password</label>
                <input
                  type="password"
                  class="form-control border-primary"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  required
                />
              </div>
              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" id="termsCheck" required>
                <label class="form-check-label" for="termsCheck">
                  I agree to the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>
                </label>
              </div>
              <button type="submit" class="btn btn-primary w-100">
                <i class="fas fa-envelope-check"></i> Verify Email
              </button>
              <div class="text-center mt-3">
                Already have an account?
                <a
                  href="#login"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                  data-bs-dismiss="modal"
                  >Login</a
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>