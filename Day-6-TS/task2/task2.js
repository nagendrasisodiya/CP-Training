function addToCart(product, price) {
    var cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push({ name: product, price: price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Okay go pay");
}
function displayCart() {
    var cart = JSON.parse(localStorage.getItem("cart") || "[]");
    var cartDiv = document.getElementById("cart-items");
    var totalDiv = document.getElementById("total");
    if (cartDiv && totalDiv) {
        cartDiv.innerHTML = "<h2>Items in Cart:</h2>";
        var total_1 = 0;
        cart.forEach(function (item) {
            cartDiv.innerHTML += "<p>".concat(item.name, " - ").concat(item.price, "</p>");
            total_1 += item.price;
        });
        totalDiv.innerText = "Total:" + total_1;
    }
}
function clearCart() {
    localStorage.removeItem("cart");
    var cartDiv = document.getElementById("cart-items");
    var totalDiv = document.getElementById("total");
    if (cartDiv && totalDiv) {
        cartDiv.innerHTML = "<h2>Cart is now empty.</h2>";
        totalDiv.innerText = "";
    }
}
if (document.getElementById("cart-items")) {
    displayCart();
}
