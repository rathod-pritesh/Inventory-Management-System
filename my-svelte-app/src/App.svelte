<script>
  import Navbar from "./components/Navbar.svelte";
  import Home from "./components/Home.svelte";
  import Footer from "./components/Footer.svelte";
  import Products from "./components/Products.svelte";
  import CurrentStock from "./components/CurrentStock.svelte";
  import StockIn from "./components/StockIn.svelte";
  import StockOut from "./components/StockOut.svelte";
  import AddSupplier from "./components/AddSupplier.svelte";
  import SupplierList from "./components/SupplierList.svelte";
  import PurchaseOrders from "./components/PurchaseOrders.svelte";
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
  <Products />
  <CurrentStock />
  <StockIn />
  <StockOut />
  <SupplierList />
  <AddSupplier />
  <PurchaseOrders />
</main>
<Footer />

<style>
 
</style>
