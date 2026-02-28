interface CartItem {
  name: string;
  price: number;
}

function addToCart(product: string, price: number): void {
  let cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.push({ name: product, price: price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`Okay go pay`);
}

function displayCart(): void {
  let cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
  let cartDiv = document.getElementById("cart-items");
  let totalDiv = document.getElementById("total");

  if (cartDiv && totalDiv) {
    cartDiv.innerHTML = "<h2>Items in Cart:</h2>";
    let total = 0;
    cart.forEach(item => {
      cartDiv.innerHTML += `<p>${item.name} - ${item.price}</p>`;
      total += item.price;
    });
    totalDiv.innerText = "Total:" + total;
  }
}
function clearCart(): void {
  localStorage.removeItem("cart");
  let cartDiv = document.getElementById("cart-items");
  let totalDiv = document.getElementById("total");
  if (cartDiv && totalDiv) {
    cartDiv.innerHTML = "<h2>Cart is now empty.</h2>";
    totalDiv.innerText = "";
  }
}

if (document.getElementById("cart-items")) {
  displayCart();
}
