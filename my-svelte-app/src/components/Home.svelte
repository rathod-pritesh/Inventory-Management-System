<script>
  import IMS from "../assets/IMS.png";

  let imageRef;

  function handleMouseEnter() {
    imageRef.style.transform = "scale(1.05)";
    imageRef.style.transition = "transform 0.3s ease";
  }

  function handleMouseLeave() {
    imageRef.style.transform = "scale(1)";
  }
</script>

<section id="home">
  <div class="home-section bg-lightblue">
    <!-- Image Section -->
    <div class="image-container">
      <div class="image-wrapper">
        <img
          src={IMS}
          alt="Inventory System"
          class="ims-image"
          bind:this={imageRef}
          on:mouseenter={handleMouseEnter}
          on:mouseleave={handleMouseLeave}
        />
      </div>
    </div>

    <!-- Welcome Text -->
    <div class="text-content text-center px-4 py-5">
      <h2 class="fw-bold mb-3">
        Welcome to <span class="text-primary">Invenza</span>
      </h2>
      <p class="lead text-muted">
        Effortlessly manage your <strong>stock</strong>,
        <strong>suppliers</strong>, <strong>customers</strong>, and
        <strong>orders</strong>. Invenza is built for
        <em>efficiency</em>, <em>scalability</em>, and powerful
        <u>inventory tracking</u>
        & <u>reporting</u>.
      </p>
    </div>

    <!-- Features Section -->
    <div class="container-fluid py-5 feature-section">
      <div class="container">
        <div class="card shadow-lg border-0">
          <div class="card-body py-4">
            <h3 class="card-title text-center fw-bold mb-4 text-primary">
              Why Choose <span class="text-dark">Our System?</span>
            </h3>
            <ul class="list-group list-group-flush fs-5">
              <li class="list-group-item list-hover">⚡ Fast & Reliable</li>
              <li class="list-group-item list-hover">🧭 Easy to Use UI</li>
              <li class="list-group-item list-hover">📊 Integrated Reporting</li>
              <li class="list-group-item list-hover">👥 Multi-user Access</li>
              <li class="list-group-item list-hover">🏢 Ideal for SMEs, Warehouses & Shops</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>

<!-- Divider -->
<hr
  style="border: none; height: 2px; background-color: #555; box-shadow: 0 2px 5px rgba(0,0,0,0.2); width: 70%; margin: 2rem auto;"
/>

<style>
  /* Overall section background */
  .home-section {
  background-color: #f1f3f6;
  padding-bottom: 3rem;
}


  .ims-image {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .ims-image:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  }

  .image-wrapper {
    max-width: 600px;
    margin: 30px auto;
    text-align: center;
  }

  .text-content:hover {
    background-color: #ffffff;
    transition: background-color 0.4s ease;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }

  .list-hover {
    transition: background-color 0.3s ease, transform 0.2s ease;
  }

  .list-hover:hover {
    background-color: #e7f3ff;
    transform: translateX(5px);
    cursor: pointer;
  }

  .feature-section {
    background-color: #e9edf2;
  }

  @media (min-width: 768px) {
    .card {
      border-radius: 16px;
    }
  }
</style>
