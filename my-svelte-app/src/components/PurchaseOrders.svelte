<script>
  let orders = [
    { id: "PO001", supplier: "ABC Traders", date: "2025-06-01", status: "Pending" },
    { id: "PO002", supplier: "Global Supplies", date: "2025-06-10", status: "Received" },
  ];
</script>

<section id="purchaseorders">
<div class="container mt-4">
  <h3 class="mb-3">Purchase Orders</h3>
  <table class="table table-bordered table-hover">
    <thead class="table-light">
      <tr>
        <th>Order ID</th>
        <th>Supplier</th>
        <th>Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {#each orders as order}
        <tr>
          <td>{order.id}</td>
          <td>{order.supplier}</td>
          <td>{order.date}</td>
          <td>
            <span class="badge bg-{order.status === 'Pending' ? 'warning' : 'success'}">
              {order.status}
            </span>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

</section>