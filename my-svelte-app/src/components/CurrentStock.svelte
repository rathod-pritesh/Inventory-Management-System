<script>
  let search = "";
  let inventory = [
    { id: 1, name: "Mouse", category: "Electronics", qty: 20, reorder: 10 },
    { id: 2, name: "Shirt", category: "Clothing", qty: 5, reorder: 15 },
  ];
</script>

<section id="currentstock" class="container mt-5">
  <div class="card shadow-sm">
    <div class="card-header bg-primary text-white">
      <h2 class="h5 mb-0">
        <i class="fas fa-box-open me-2"></i>Current Stock
      </h2>
    </div>
    <div class="card-body">
      <div class="row mb-4">
        <div class="col-md-6">
          <div class="input-group">
            <span class="input-group-text bg-light">
              <i class="fas fa-search"></i>
            </span>
            <input 
              type="text" 
              bind:value={search} 
              placeholder="Search product..." 
              class="form-control"
            />
          </div>
        </div>
      </div>

      <div class="table-responsive">
        <table class="table table-hover table-striped">
          <thead class="table-light">
            <tr>
              <th scope="col" class="w-10">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col" class="text-center">Quantity</th>
              <th scope="col" class="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {#each inventory.filter(item => item.name.toLowerCase().includes(search.toLowerCase())) as item}
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td class="text-center">{item.qty}</td>
                <td class="text-center">
                  {#if item.qty == 0}
                    <span class="badge bg-danger rounded-pill">Out of Stock</span>
                  {:else if item.qty <= item.reorder}
                    <span class="badge bg-warning text-dark rounded-pill">Low Stock</span>
                  {:else}
                    <span class="badge bg-success rounded-pill">In Stock</span>
                  {/if}
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
      
      {#if inventory.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).length === 0}
        <div class="alert alert-info mt-3">
          No products found matching your search.
        </div>
      {/if}
    </div>
  </div>
</section>