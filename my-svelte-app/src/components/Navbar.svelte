<script>
  import { createEventDispatcher, onMount } from "svelte";
  const dispatch = createEventDispatcher();

  // load Bootstrap JS after components mounts
  onMount(() => {
    import("bootstrap");
  });
</script>

<nav
  class="navbar navbar-expand-lg navbar-light bg-light border-bottom px-3 shadow-sm"
>
  <div class="container-fluid">
    <a class="navbar-brand text-warning ps-3 fw-bold" href="#home"
      ><i class="fas fa-warehouse"></i> Invenza</a
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
          <a
            class="nav-link active text-dark"
            aria-current="page"
            href="#home">Home</a
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
              <a href="#stockout" class="dropdown-item text-dark"
                >Stock Out</a
              >
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
        <button
          on:click={() => dispatch('navigate', 'login')}
          class="btn btn-outline-warning me-2"
          >Login</button
        >
        <button
          on:click={() => dispatch('navigate', 'register')}
          class="btn btn-warning"
          >Register</button
        >
      </div>
    </div>
    
  </div>
</nav>

<style>
  nav a.nav-link:hover{
    color: #ffc107;
  }
</style>
