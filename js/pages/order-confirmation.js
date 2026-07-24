document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const orderId = params.get('id');
  const order = JSON.parse(localStorage.getItem('ouf_last_order') || 'null');

  if (!order || (orderId && order.id !== orderId)) {
    document.getElementById('order-content')?.classList.add('hidden');
    document.getElementById('order-empty')?.classList.remove('hidden');
    return;
  }

  document.getElementById('order-id').textContent = order.id;
  document.getElementById('order-total').textContent = OUF.formatPrice(order.total);
  const orderDate = order.timestamp ? new Date(order.timestamp) : (order.date ? new Date(order.date) : new Date());
  document.getElementById('order-date').textContent = orderDate.toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  const list = document.getElementById('order-items');
  order.items.forEach(item => {
    const li = document.createElement('li');
    li.className = 'flex justify-between font-body-md text-secondary py-2 border-b border-outline-variant/20';
    li.innerHTML = `<span>${item.name} × ${item.qty}</span><span>${OUF.formatPrice(item.price * item.qty)}</span>`;
    list.appendChild(li);
  });
});
