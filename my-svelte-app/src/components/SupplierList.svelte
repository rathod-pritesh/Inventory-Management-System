<script>
  // Dummy data – replace with API call if needed
  let suppliers = [
    { id: 1, name: "ABC Traders", contact: "abc@traders.com", phone: "9876543210" },
    { id: 2, name: "Global Supplies", contact: "info@global.com", phone: "9123456789" },
  ];
</script>

<section id="supplierlist">
  <div class="container mt-4">
    <h3 class="mb-3">Suppliers List</h3>
    <table class="table table-bordered table-striped">
      <thead class="table-light">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Contact Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {#each suppliers as supplier, index}
          <tr>
            <td>{index + 1}</td>
            <td>{supplier.name}</td>
            <td>{supplier.contact}</td>
            <td>{supplier.phone}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</section>