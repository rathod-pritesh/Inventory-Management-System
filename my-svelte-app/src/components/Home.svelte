<script>
  import IMS from "../assets/Inventory_Management_System.jpg";

</script>

<section id="home">
  <div class="home-section">
    <div class="container-fluid">
      <div class="row align-items-center justify-content-center py-5">
        
        <!-- Left Image Section -->
        <div class="col-lg-5 col-md-5">
          <div class="image-container text-center">
            <img
              src={IMS}
              alt="Inventory Management System"
              class="ims-image"
            />
          </div>
        </div>

        <!-- Right Content Section -->
        <div class="col-lg-7 col-md-7">
          <div class="content-wrapper">
            <div class="welcome-content">
              <h2 class="fw-bold mb-4">
                Welcome to <span class="text-primary">Invenza</span>
              </h2>
              <p class="lead text-muted mb-4">
                Transform your business with our comprehensive inventory management solution
              </p>
              <div class="features-list mb-4">
                <div class="feature-item d-flex align-items-center mb-3">
                  <span class="feature-icon me-3">📦</span>
                  <div>
                    <h5 class="mb-1">Smart Inventory Tracking</h5>
                    <p class="text-muted mb-0">Real-time stock monitoring and automated alerts</p>
                  </div>
                </div>
                <div class="feature-item d-flex align-items-center mb-3">
                  <span class="feature-icon me-3">📊</span>
                  <div>
                    <h5 class="mb-1">Advanced Analytics</h5>
                    <p class="text-muted mb-0">Detailed reports and insights for better decisions</p>
                  </div>
                </div>
                <div class="feature-item d-flex align-items-center mb-3">
                  <span class="feature-icon me-3">⚡</span>
                  <div>
                    <h5 class="mb-1">Lightning Fast Performance</h5>
                    <p class="text-muted mb-0">Optimized for speed and reliability</p>
                  </div>
                </div>
              </div>
              <div class="cta-buttons">
                <button class="btn btn-primary btn-lg me-3 px-4">Get Started</button>
                <button class="btn btn-outline-primary btn-lg px-4">Learn More</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Features Section Below -->
    <div class="container-fluid py-5 feature-section">
      <div class="container">
        <div class="card shadow-lg border-0">
          <div class="card-body py-4">
            <h3 class="card-title text-center fw-bold mb-4 text-primary">
              Why Choose <span class="text-dark">Our System?</span>
            </h3>
            <div class="row">
              <div class="col-md-6">
                <ul class="list-group list-group-flush fs-5">
                  <li class="list-group-item list-hover border-0">⚡ Fast & Reliable</li>
                  <li class="list-group-item list-hover border-0">🧭 Easy to Use UI</li>
                  <li class="list-group-item list-hover border-0">📊 Integrated Reporting</li>
                </ul>
              </div>
              <div class="col-md-6">
                <ul class="list-group list-group-flush fs-5">
                  <li class="list-group-item list-hover border-0">👥 Multi-user Access</li>
                  <li class="list-group-item list-hover border-0">🏢 Ideal for SMEs & Warehouses</li>
                  <li class="list-group-item list-hover border-0">🔒 Secure & Scalable</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Divider -->
<hr class="custom-divider" />

<style>
  /* Overall section background */
  .home-section {
    background-color: #FAFAFA;
    padding: 2rem 0;
  }

  /* Content wrapper */
  .content-wrapper {
    padding-left: 2rem;
  }

  /* Welcome content styling */
  .welcome-content h2 {
    font-size: 3rem;
    line-height: 1.2;
    color: #2c3e50;
  }

  .welcome-content .lead {
    font-size: 1.3rem;
    line-height: 1.6;
    color: #6c757d;
  }

  /* Slightly larger image styling */
  .ims-image {
    width: 350px;
    height: auto;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .ims-image:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
  }

  /* Feature items styling */
  .feature-item {
    padding: 1rem 0;
    border-left: 3px solid transparent;
    padding-left: 1rem;
    transition: all 0.3s ease;
  }

  .feature-item:hover {
    border-left-color: #007bff;
    background-color: rgba(0, 123, 255, 0.05);
    border-radius: 8px;
    transform: translateX(5px);
  }

  .feature-icon {
    font-size: 2rem;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 123, 255, 0.1);
    border-radius: 50%;
  }

  .feature-item h5 {
    color: #2c3e50;
    font-weight: 600;
  }

  /* CTA Buttons */
  .cta-buttons .btn {
    border-radius: 25px;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .cta-buttons .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 123, 255, 0.3);
  }

  .cta-buttons .btn-outline-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 123, 255, 0.2);
  }

  /* Features section */
  .feature-section {
    background-color: #FAFAFA;
  }

  .card {
    border-radius: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15) !important;
  }

  /* List hover effects */
  .list-hover {
    transition: background-color 0.3s ease, transform 0.2s ease;
    padding: 0.75rem;
    border-radius: 8px;
  }

  .list-hover:hover {
    background-color: #e7f3ff;
    transform: translateX(8px);
    cursor: pointer;
  }

  /* Custom divider */
  .custom-divider {
    border: none;
    height: 3px;
    background: linear-gradient(90deg, transparent, #007bff, transparent);
    width: 80%;
    margin: 3rem auto;
  }

  /* Responsive adjustments */
  @media (max-width: 991.98px) {
    .content-wrapper {
      padding-left: 1rem;
      margin-top: 2rem;
    }

    .welcome-content h2 {
      font-size: 2.5rem;
      text-align: center;
    }

    .welcome-content .lead {
      text-align: center;
    }

    .ims-image {
      width: 300px;
    }
  }

  @media (max-width: 767.98px) {
    .welcome-content h2 {
      font-size: 2rem;
    }
    
    .welcome-content .lead {
      font-size: 1.1rem;
    }

    .ims-image {
      width: 280px;
    }

    .content-wrapper {
      padding-left: 0;
    }

    .cta-buttons {
      text-align: center;
    }

    .cta-buttons .btn {
      margin-bottom: 1rem;
    }
  }
</style>