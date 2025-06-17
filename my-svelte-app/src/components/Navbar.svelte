<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import Login from './Login.svelte';
  import Register from './Register.svelte';
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand text-warning px-5 fs-2" href="invenza">Invenza</a>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ms-5">
      <li class="nav-item ps-2">
        <a class="nav-link active text-dark" aria-current="page" href="#home"
          >Home</a
        >
      </li>
      <li class="nav-item ps-2">
        <a class="nav-link text-dark" href="#products">Products</a>
      </li>
      <li class="nav-item dropdown ps-2">
        <a
          class="nav-link dropdown-toggle text-dark"
          href="#inventory"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false">Inventory</a
        >
        <ul class="dropdown-menu">
          <li>
            <a href="#currentstock" class="dropdown-item text-dark"
              >Current Stock</a
            >
          </li>
          <li>
            <a href="#stockin" class="dropdown-item text-dark">Stock In</a>
          </li>
          <li>
            <a href="#stockout" class="dropdown-item text-dark">Stock Out</a>
          </li>
        </ul>
      </li>
      <li class="nav-item ps-2">
        <a class="nav-link text-dark" href="#booknow">Orders</a>
      </li>
      <li class="nav-item dropdown ps-2">
        <a
          class="nav-link dropdown-toggle text-dark"
          href="#suppliers"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false">Suppliers</a
        >
        <ul class="dropdown-menu">
          <li>
            <a href="#supplierlist" class="dropdown-item text-dark"
              >Supplier List</a
            >
          </li>
          <li>
            <a href="#addsupplier" class="dropdown-item text-dark"
              >Add Supplier</a
            >
          </li>
          <li>
            <a href="#purchaseorders" class="dropdown-item text-dark"
              >Purchase Orders</a
            >
          </li>
        </ul>
      </li>
      <li class="nav-item ps-2">
        <a class="nav-link text-dark" href="#customers">Customers</a>
      </li>
      <li class="nav-item ps-2">
        <a class="nav-link text-dark" href="#reports">Reports</a>
      </li>
    </ul>

    <div class="ms-auto d-flex gap-2">
      <!-- Login Button -->
      <button
        class="btn btn-outline-warning m-2"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
        Login
      </button>

      <!-- Register Button -->
      <button
        class="btn btn-warning px-4 m-2"
        data-bs-toggle="modal"
        data-bs-target="#registerModal"
      >
        Register
      </button>
    </div>
  </div>
</nav>
<Login />
<Register />
<style>
  .dropdown-item:hover,
  .nav-link:hover {
    color: #ffc107 !important;
  }
</style>
