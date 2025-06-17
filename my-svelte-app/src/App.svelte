<script>
  import Navbar from "./components/Navbar.svelte";
  import Home from "./components/Home.svelte";
  import Footer from "./components/Footer.svelte";
  import { slide } from "svelte/transition";

  let currentForm = '';

  const openForm = (formType) => {
    currentForm = formType;
  };

  const closeForm = () => {
    currentForm = '';
  };
</script>


<Navbar on:navigate={(e) => openForm(e.detail)}/>


<main>
  <Home />
</main>
<Footer />

<style>
 
</style>
