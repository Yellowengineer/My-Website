

function addToCart(name, price) {
    const product = {
        name: name,
        price: price,
        added: true
    };
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    window.location.href = "cart.html";
}



document.addEventListener("DOMContentLoaded", function() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const cartItemsTable = document.getElementById("cart-items");

    cartItems.forEach(function(cartItem) {
        if (cartItem.added) { // Sadece sepete eklenmiş ürünleri göster
            const row = document.createElement("tr");
            const nameCell = document.createElement("td");
            nameCell.textContent = cartItem.name;
            const priceCell = document.createElement("td");
            priceCell.textContent = cartItem.price;

            row.appendChild(nameCell);
            row.appendChild(priceCell);
            cartItemsTable.appendChild(row);
        }
    });
});
function clearCart() {
    localStorage.removeItem("cartItems");
    // Sepeti temizledikten sonra sayfayı yenilemek için aşağıdaki satırı kullanabilirsiniz
    location.reload();
}






