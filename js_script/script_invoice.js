window.onload = function() {
// Get the value from localStorage
    var invoice_value = localStorage.getItem('invoice-paid');
    console.log(invoice_value);
// Display the value on the page
    var output = document.querySelector(".cart-items");
    output.innerHTML = invoice_value.replaceAll(",","");

// Get the value from localStorage
    var noOfItem_value = localStorage.getItem('noOfItem');
    console.log(noOfItem_value);
// Display the value on the page
    output = document.querySelector(".noOfItems");
    output.innerHTML = noOfItem_value;

// Get the value from localStorage
    var total_value = localStorage.getItem('total');
    console.log(total_value);
// Display the value on the page
    output = document.querySelector(".total");
    output.innerHTML = total_value;
};


