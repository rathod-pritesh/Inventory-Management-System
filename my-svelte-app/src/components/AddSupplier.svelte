<script>
  let supplier = {
    name: '',
    contact: '',
    phone: ''
  };

  function handleSubmit() {
    if (!supplier.name || !supplier.contact || !supplier.phone) {
      alert("All fields are required.");
      return;
    }

    console.log("Supplier Added:", supplier);
    alert("Supplier added successfully!");
    supplier = { name: '', contact: '', phone: '' };
  }
</script>

<section id="addsupplier">
  <div class="container mt-4">
    <h3 class="mb-3">Add Supplier</h3>
    <form on:submit|preventDefault={handleSubmit} class="p-4 border rounded bg-light">
      <div class="mb-3">
        <label class="form-label">Supplier Name</label>
        <input type="text" class="form-control" bind:value={supplier.name} required />
      </div>
      <div class="mb-3">
        <label class="form-label">Contact Email</label>
        <input type="email" class="form-control" bind:value={supplier.contact} required />
      </div>
      <div class="mb-3">
        <label class="form-label">Phone</label>
        <input type="tel" class="form-control" bind:value={supplier.phone} required />
      </div>
      <button type="submit" class="btn btn-primary">Add Supplier</button>
    </form>
  </div>
</section>