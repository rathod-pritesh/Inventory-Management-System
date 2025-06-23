<script>
  // Product data array
  let products = [
    {
      id: 1,
      name: "Sneakers",
      category: "Footwear",
      brand: "Nike",
      description: "White Casual Sneakers for Men",
      image: "images/Product1.jpg",
      stock: 15,
      cost: 2000,
      price: 2999,
      discount: 10,
      tax: 12,
      sku: "NK-SNEAK-WHT-42",
    },
    {
      id: 2,
      name: "Girls T-Shirts",
      category: "Clothing",
      brand: "H&M",
      description: "Printed Cotton T-shirt for Women",
      image: "images/Product2.jpg",
      stock: 40,
      cost: 350,
      price: 599,
      discount: 12,
      tax: 5,
      sku: "HM-TS-WMN-08",
    },
    {
      id: 3,
      name: "Smart Watch",
      category: "Wearables",
      brand: "Fire-Boltt",
      description: "Bluetooth Smart Watch with Heart Rate Monitor",
      image: "images/Product3.jpg",
      stock: 20,
      cost: 1500,
      price: 2099,
      discount: 7,
      tax: 18,
      sku: "FB-SW-BLK-01",
    },
    {
      id: 4,
      name: "Headphones",
      category: "Electronics",
      brand: "Boat",
      description: "Wireless Bluetooth Headphones with Mic",
      image: "images/Product4.jpg",
      stock: 40,
      cost: 1200,
      price: 1799,
      discount: 10,
      tax: 18,
      sku: "BT-HP-BLU-05",
    },
    {
      id: 5,
      name: "OnePlus Smart Phone",
      category: "Mobile Phones",
      brand: "OnePlus",
      description: '6.6" Display, 6000mAh Battery',
      image: "images/Product5.jpg",
      stock: 0,
      cost: 20000,
      price: 22500,
      discount: 5,
      tax: 18,
      sku: "OP-11R-5G-128",
    },
    {
      id: 6,
      name: "T-Shirts for Boys",
      category: "Clothing",
      brand: "Roadster",
      description: "Casual Round Neck T-shirt for Men",
      image: "images/Product6.jpg",
      stock: 50,
      cost: 300,
      price: 499,
      discount: 10,
      tax: 5,
      sku: "RD-TS-MEN-10",
    },
    {
      id: 7,
      name: "Jeans for Boys",
      category: "Apparel",
      brand: "Levi's",
      description: "Slim Fit Blue Denim Jeans for Men",
      image: "images/Product7.jpg",
      stock: 30,
      cost: 1800,
      price: 2299,
      discount: 8,
      tax: 5,
      sku: "LV-JN-SLM-32",
    },
    {
      id: 8,
      name: "Shirts for Boys",
      category: "Clothing",
      brand: "Arrow",
      description: "Formal Cotton Shirt for Men",
      image: "images/Product8.jpg",
      stock: 35,
      cost: 850,
      price: 1199,
      discount: 5,
      tax: 5,
      sku: "AR-SH-FRM-40",
    },
    {
      id: 9,
      name: "Bluetooth Speaker",
      category: "Electronics",
      brand: "JBL",
      description: "Portable Waterproof Bluetooth Speaker",
      image: "images/Product9.jpg",
      stock: 18,
      cost: 2200,
      price: 3299,
      discount: 12,
      tax: 18,
      sku: "JBL-SPK-BLK",
    },
  ];

  let searchTerm = "";
  let selectedCategory = "All";
  let selectedBrand = "All";
  let stockStatus = "All";

  //Get Unique categories and brands for filters
  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const brand = ["All", ...new Set(products.map((p) => p.brand))];

  //Filter products based on search and filters
  $: filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesBrand =
      selectedBrand === "All" || product.brand === selectedBrand;

    let matchesStock = true;
    if (stockStatus === "In Stock") {
      matchesStock = product.stock > 5;
    } else if (stockStatus === "Low Stock") {
      matchesStock = product.stock > 0 && product.stock <= 5;
    } else if (stockStatus === "Out of Stock") {
      matchesStock = product.stock === 0;
    }

    return matchesSearch && matchesCategory && matchesBrand && matchesStock;
  });

  function addToFavorites(productId) {
    console.log(`Added product ${productId} to favorites`);
  }
</script>

<section id="products">
  <div class="container">
    
      <h2 class="text-primary mb-3 mb-md-0">
        <i class="fas fa-boxes me-2"></i>Product Inventory
      </h2>

    <!-- Product Count -->
    <div class="mb-3">
      <span class="badge bg-light text-dark">
        Showing {filteredProducts.length} of {products.length} products
      </span>
    </div>

    <!-- Product Grid -->
    {#if filteredProducts.length === 0}
      <div class="text-center py-5">
        <i class="fas fa-box-open fa-3x text-muted mb-3"></i>
        <h5 class="text-muted">No Products found</h5>
        <p class="text-muted">Try adjusting your search or filters</p>
        <button
          class="btn btn-sm btn-outline-primary"
          on:click={() => {
            searchTerm = "";
            selectedCategory = "All";
            selectedBrand = "All";
            stockStatus = "All";
          }}
          >Reset Filters
        </button>
      </div>
    {:else}
      <div class="row">
        {#each filteredProducts as product}
          <div class="col-xl-4 col-lg-6 col-md-6 mb-4">
            <div class="card h-100 shadow-sm product-card">
              <!-- Product image with status badge -->
              <div class="position-relative">
                <img
                  src={product.image}
                  alt={product.name}
                  class="card-img-top product-image"
                  on:error={() => {
                    product.image =
                      "https://via.placeholder.com/300x200?text=No+Image";
                  }}
                />
                <div class="position-absolute top-0 end-0 m-2">
                  {#if product.stock == 0}
                    <span class="badge bg-danger">Out of Stock</span>
                  {:else if product.stock <= 5}
                    <span class="badge bg-warning text-dark">Low Stock</span>
                  {:else}
                    <span class="badge bg-success">InStock</span>
                  {/if}
                </div>
              </div>

              <!-- Product Body -->
              <div class="card-body d-flex flex-column">
                <div
                  class="d-flex justify-content-between align-items-start mb-2"
                >
                  <h5 class="card-title mb-0">{product.name}</h5>
                  <button
                    class="btn btn-sm btn-outline-danger p-1"
                    aria-label="Add to favorites"
                    on:click={() => addToFavorites(product.id)}
                    ><i class="far fa-heart"></i>
                  </button>
                </div>

                <div class="mb-2">
                  <span class="badge bg-light text-dark me-1"
                    >{product.category}</span
                  >
                  <span class="badge bg-light text-dark me-1"
                    >{product.brand}</span
                  >
                  <p class="card-text small text-muted mb-3">
                    {product.description}
                  </p>

                  <!-- Pricing Info -->
                  <div class="bg-light p-2 rounded mb-3">
                    <div class="d-flex justify-content-between">
                      <span>Cost:</span>
                      <span>₹{product.cost.toLocaleString()}</span>
                    </div>
                    <div class="d-flex justify-content-between">
                      <span>Price:</span>
                      <span>₹{product.price.toLocaleString()}</span>
                    </div>
                    <div class="d-flex justify-content-between">
                      <span>Profit:</span>
                      <span
                        class={product.price - product.cost > 0
                          ? "text-success"
                          : "text-danger"}
                      >
                        ₹{(product.price - product.cost).toLocaleString()}
                        ({Math.round(
                          ((product.price - product.cost) / product.cost) * 100,
                        )}%)
                      </span>
                    </div>
                  </div>
                  <!-- Stock Info -->
                  <div class="d-flex justify-content-between small mb-3">
                    <div>
                      <span class="text-muted">Stock:</span>
                      {product.stock > 0
                        ? `${product.stock} unites`
                        : "Restock Soon"}
                    </div>
                  </div>
                  <span class="text-muted">SKU:</span>
                  {product.sku}
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="mt-auto d-flex justify-content-between">
                <div class="btn-group">
                  <button
                    class="btn btn-sm btn-outline-primary"
                    title="view"
                    aria-label="View product"
                  >
                    <i class="fas fa-eye"></i>
                  </button>
                  <button
                    class="btn btn-sm btn-outline-primary"
                    title="edit"
                    aria-label="Edit product"
                  >
                    <i class="fas fa-edit"></i>
                  </button>
                  <button
                    class="btn btn-sm btn-outline-danger"
                    title="delete"
                    aria-label="Delete product"
                  >
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </div>
                <button
                  class="btn btn-sm btn-success"
                  disabled={product.stock === 0}
                  ><i class="fas fa-cart-plus me-1"></i> Sell
                </button>
              </div>
            </div>
          </div>
        {/each}
      </div>
    {/if}

    <!-- Pagination -->
    <nav aria-label="Product pagination" class="mt-4">
      <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <a href="#" class="page-link" tabindex="-1">Previous</a>
        </li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</section>

<style>
  .product-card {
    transition:
      transform 0.2s,
      box-shadow 0.2s;
    border-radius: 10px;
    overflow: hidden;
  }
  .product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  .product-image {
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s;
  }
  .product-card:hover .product-image {
    transform: scale(1.03);
  }
</style>
