/* document.getElementById('test-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the input values
    const dj_number = document.getElementById('dj').value;

    // Display the values
    console.log('DJ number:', dj_number);
}); */

// $(document).ready(function() {
//     $('#dj-form').on('submit', function(event) {
//         event.preventDefault(); // Prevent the default form submission

//         // Get the input values
//         let dj_number = $('#dj').val();

//         dj_number = dj_number * 5;

//         // Display the values
//         console.log('DJ number:', dj_number);
//     });

//     $('#toy-form').on('submit', function(event) {
//         event.preventDefault(); // Prevent the default form submission

//         // Get the input values
//         let toy_number = $('#toy').val();

//         toy_number = toy_number * 3;

//         // Display the values
//         console.log('toy number:', toy_number);
//     });
// });

const products = [
    { name: "DJ onboard", price: 2500, id: 1, quantity: 1,},
    { name: "water-toy", price: 120, id: 2, quantity: 1,},
    { name: "catering-onboard", price: 500, id: 3, quantity: 1, },
    { name: "asian-style", price: 900, id: 4, quantity: 1, },
    { name: "mediterranean-style", price: 300, id: 5, quantity: 1, },
    { name: "continental-style", price: 100, id: 6, quantity: 1,},
  ];
  
let cart = [];

const productsHTML = products.map(
    (product) => `<h2 class="product-name">${product.name}</h2><strong>$${product.price}</strong>
                  <button class="service-button" id=${product.id}>Add to Cart</button>`);

for (let i = 0; i <= productsHTML.length-1; i++) {
  const queryname = `.service-${products[i].id}`;
  const result = document.querySelector(queryname);
  result.innerHTML = productsHTML[i];
}

let num = document.querySelectorAll(".service-button").length;
for (let i = 0; i < num; i++) {
  document.querySelectorAll(".service-button")[i].addEventListener("click", function (e) {
    addToCart(products, parseInt(e.target.id));
  });
}

function addToCart(products, id){
    const product = products.find((product) => product.id === id);
    const cartProduct = cart.find((product) => product.id === id);
    if (cartProduct != undefined && product.id == cartProduct.id) {
      incrItem(id);
    } else {
      cart.unshift(product);
    }
    updateCart();
    getTotal(cart);
};

function incrItem(id) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i] && cart[i].id == id) {
        cart[i].quantity += 1;
      }
    }
    updateCart();
    getTotal(cart);
}

function decrItem(id) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == id && cart[i].quantity > 1) {
        cart[i].quantity -= 1;
      }
    }
    updateCart();
    getTotal(cart);
}

function deleteItem(id) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        cart[i].quantity = 1;
        cart.splice(i, 1);
      }
    }
    updateCart();
    getTotal(cart);
}

function updateCart() {
  const cartHTML = cart.map(
    (item) => `<div class="cart-item">
                <h3>${item.name}</h3>
                <div class="cart-detail"><div class="mid">
                    <button onclick={decrItem(${item.id})}>-</button>
                    <p>${item.quantity}</p>
                    <button onclick={incrItem(${item.id})}>+</button>
                </div>
                <p>$${item.price}</p>
                <button onclick={deleteItem(${item.id})} class="cart-product" id=${item.id}>D</button></div>
               </div>`
);

  const cartItems = document.querySelector(".cart-items");
  cartItems.innerHTML = cartHTML.join("");
}

function getTotal(cart) {
    let { totalItem, cartTotal } = cart.reduce(
      (total, cartItem) => {
        total.cartTotal += cartItem.price * cartItem.quantity;
        total.totalItem += cartItem.quantity;
        return total;
      },
      { totalItem: 0, cartTotal: 0 }
    );
    const totalItemsHTML = document.querySelector(".noOfItems");
    totalItemsHTML.innerHTML = `${totalItem} items`;
    const totalAmountHTML = document.querySelector(".total");
    totalAmountHTML.innerHTML = `$${cartTotal}`;
  }
