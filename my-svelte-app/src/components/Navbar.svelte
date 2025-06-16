<!-- src/components/Navbar.svelte -->
<script>
  let isOpen = false;

  function toggleNavbar() {
    isOpen = !isOpen;
  }
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="inventory">IMS</a>
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button class="navbar-toggler" type="button" on:click={toggleNavbar}>
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class={"collapse navbar-collapse " + (isOpen ? "show" : "")}>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" href="home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="dashboard">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
