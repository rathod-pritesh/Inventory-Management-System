<script>
  
  import Login from "./Login.svelte";
  import Register from "./Register.svelte";
  
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand px-5 fs-2" style="color:#f8f9fa;" href="invenza"
    ><i class="fas fa-warehouse me-2"></i>Invenza</a
  >
  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ms-5">
      <li class="nav-item ps-2">
        <a class="nav-link active text-light" aria-current="page" href="#home"
          ><i class="fas fa-home me-1"></i>Home</a
        >
      </li>
      <li class="nav-item ps-2">
        <a class="nav-link text-light" href="#products"
          ><i class="fas fa-boxes me-1"></i>Products</a
        >
      </li>
      <li class="nav-item dropdown ps-2">
        <a
          class="nav-link dropdown-toggle text-light"
          href="#inventory"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          ><i class="fas fa-clipboard-list me-1"></i>Inventory</a
        >
        <ul class="dropdown-menu">
          <li>
            <a href="#currentstock" class="dropdown-item text-dark"
              ><i class="fas fa-box-open me-2"></i>Current Stock</a
            >
          </li>
          <li>
            <a href="#stockin" class="dropdown-item text-dark"
              ><i class="fas fa-arrow-down me-2"></i>Stock In</a
            >
          </li>
          <li>
            <a href="#stockout" class="dropdown-item text-dark"
              ><i class="fas fa-arrow-up me-2"></i>Stock Out</a
            >
          </li>
        </ul>
      </li>
      <li class="nav-item ps-2">
        <a class="nav-link text-light" href="#orders"
          ><i class="fas fa-shopping-cart me-1"></i>Orders</a
        >
      </li>
      <li class="nav-item dropdown ps-2">
        <a
          class="nav-link dropdown-toggle text-light"
          href="#suppliers"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"><i class="fas fa-truck me-1"></i>Suppliers</a
        >
        <ul class="dropdown-menu">
          <li>
            <a href="#supplierlist" class="dropdown-item text-dark"
              ><i class="fas fa-list me-2"></i>Supplier List</a
            >
          </li>
          <li>
            <a href="#addsupplier" class="dropdown-item text-dark"
              ><i class="fas fa-plus-circle me-2"></i>Add Supplier</a
            >
          </li>
          <li>
            <a href="#purchaseorders" class="dropdown-item text-dark"
              ><i class="fas fa-file-invoice me-2"></i>Purchase Orders</a
            >
          </li>
        </ul>
      </li>
      <li class="nav-item ps-2">
        <a class="nav-link text-light" href="#customers"
          ><i class="fas fa-users me-1"></i>Customers</a
        >
      </li>
      <li class="nav-item ps-2">
        <a class="nav-link text-light" href="#reports"
          ><i class="fas fa-chart-line me-1"></i>Reports</a
        >
      </li>
    </ul>

    <div class="ms-auto d-flex gap-2">
      <!-- Login Button -->
      <button
        class="btn btn-outline-warning px-4 py-2 m-2 fw-semibold"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
        ><i class="fas fa-sign-in-alt me-1"></i>
        Login
      </button>

      <!-- Register Button -->
      <button
        class="btn btn-warning m-2 text-dark fw-semibold py-2 px-4"
        data-bs-toggle="modal"
        data-bs-target="#registerModal"
        ><i class="fas fa-user-plus me-1"></i>
        Register
      </button>
    </div>
  </div>
</nav>
<Login />
<Register />

<style>
  .navbar-dark .navbar-toggler {
  border-color: rgba(255, 255, 255, 0.6); /* Optional border */
}
  .navbar-brand:hover,.dropdown-item:hover,
  .nav-link:hover {
    color: #ffc107 !important;
  }

  .me-1 {
    margin-right: 0.25rem;
  }
  .me-2 {
    margin-right: 0.5rem;
  }

  .btn {
  font-family: 'Poppins', sans-serif;
  border-radius: 0.4rem;
}

.btn i {
  font-size: 0.9rem;
}

</style>
