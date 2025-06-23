<script>
    let product = "";
    let quantity = "";
    let reason = "Sold";
    let date = new Date().toISOString().split("T")[0];

    function removeStock() {
        alert(`Stock Out: ${product} - ${quantity} (${reason})`);
    }
</script>

<section id="stockout" class="container mb-5">
    <div class="card border-danger shadow">
        <div class="card-header bg-danger text-white">
            <h2 class="h5 mb-0">
                <i class="fas fa-arrow-up me-2"></i>Stock Out
            </h2>
        </div>
        <div class="card-body">
            <form on:submit|preventDefault={removeStock}>
                <div class="mb-3">
                    <label for="productOut" class="form-label">Product Name/ID</label>
                    <input
                        id="productOut"
                        class="form-control"
                        bind:value={product}
                        placeholder="Enter product name or ID"
                        required
                    />
                </div>
                
                <div class="row mb-3">
                    <div class="col-md-6">
                        <label for="quantityOut" class="form-label">Quantity</label>
                        <input
                            id="quantityOut"
                            class="form-control"
                            type="number"
                            bind:value={quantity}
                            min="1"
                            placeholder="0"
                            required
                        />
                    </div>
                    <div class="col-md-6">
                        <label for="reasonOut" class="form-label">Reason</label>
                        <select id="reasonOut" class="form-select" bind:value={reason}>
                            <option value="Sold">Sold</option>
                            <option value="Damaged">Damaged</option>
                            <option value="Used Internally">Used Internally</option>
                        </select>
                    </div>
                </div>
                
                <div class="mb-4">
                    <label for="dateOut" class="form-label">Date</label>
                    <input 
                        id="dateOut" 
                        class="form-control" 
                        type="date" 
                        bind:value={date} 
                    />
                </div>
                
                <button class="btn btn-danger w-100 py-2" type="submit">
                    <i class="fas fa-minus-circle me-2"></i>Remove from Inventory
                </button>
            </form>
        </div>
    </div>
</section>