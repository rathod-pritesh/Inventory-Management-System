<script>
  import imsImage from "../assets/Inventory_Management_System.jpeg";
</script>

<!-- Main Section -->
<section id="home" class="px-5 bg-light">
  <div class="text-content">
    <div class="container">
      <div class="row align-items-center">
        <!-- Left Image -->
        <div class="col-md-6 mb-4 mb-md-0 text-center">
          <img
            src={imsImage}
            alt="Inventory Management System"
            class="img-fluid rounded shadow"
            style="max-height: 400px;"
          />
        </div>

        <!-- Right Content -->
        <div class="col-md-6 text-center text-md-start">
          <h1 class="display-5 fw-bold mb-3">
            Welcome to <span class="text-primary">Invenza</span>
          </h1>

          <p class="text-muted mb-4">
            <strong>Invenza</strong> is an advanced Inventory Management System designed
            to streamline and simplify how businesses handle their stock, resources,
            and operations. Whether you're managing a small warehouse or a large-scale
            enterprise, Invenza empowers you with real-time inventory tracking, intelligent
            analytics, and collaborative tools — all within a user-friendly and secure
            platform.
          </p>
          <a href="#dashboard" class="btn btn-primary btn-lg px-4"
            >Go to Dashboard</a
          >
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  section#home {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
</style>
