<script>
    let product = "";
    let quantity = "";
    let supplier = "";
    let date = new Date().toISOString().split("T")[0];

    function addStock() {
        alert(`Stock In: ${product} - ${quantity}`);
    }
</script>

<section id="stockin" class="container mb-5">
    <div class="card border-success shadow">
        <div class="card-header bg-success text-white">
            <h2 class="h5 mb-0">
                <i class="fas fa-arrow-down me-2"></i>Stock In
            </h2>
        </div>
        <div class="card-body">
            <form on:submit|preventDefault={addStock}>
                <div class="mb-3">
                    <label for="productIn" class="form-label">Product Name/ID</label>
                    <input
                        id="productIn"
                        class="form-control"
                        bind:value={product}
                        placeholder="Enter product name or ID"
                        required
                    />
                </div>
                
                <div class="row mb-3">
                    <div class="col-md-6">
                        <label for="quantityIn" class="form-label">Quantity</label>
                        <input
                            id="quantityIn"
                            class="form-control"
                            type="number"
                            bind:value={quantity}
                            min="1"
                            placeholder="0"
                            required
                        />
                    </div>
                    <div class="col-md-6">
                        <label for="supplierIn" class="form-label">Supplier</label>
                        <input
                            id="supplierIn"
                            class="form-control"
                            bind:value={supplier}
                            placeholder="Supplier name"
                        />
                    </div>
                </div>
                
                <div class="mb-4">
                    <label for="dateIn" class="form-label">Date</label>
                    <input 
                        id="dateIn" 
                        class="form-control" 
                        type="date" 
                        bind:value={date} 
                    />
                </div>
                
                <button class="btn btn-success w-100 py-2" type="submit">
                    <i class="fas fa-plus-circle me-2"></i>Add to Inventory
                </button>
            </form>
        </div>
    </div>
</section>