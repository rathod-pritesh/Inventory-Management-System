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
  :global(::-webkit-scrollbar) {
    width: 10px;
  }

  :global(::-webkit-scrollbar-track) {
    background: #fff;
  }

  :global(::-webkit-scrollbar-thumb) {
    background: linear-gradient(to bottom, #ffc107, #ffb300, #ffa000);
    border-radius: 10px;
  }

  :global(::-webkit-scrollbar-thumb:hover) {
    background: linear-gradient(to bottom, #ffa000, #ffb300, #ffc107);
  }
</style>
