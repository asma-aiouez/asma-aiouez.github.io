"use strict"

let addProduct = document.getElementById("addProduct");
addProduct.addEventListener("click", function(event) {
    let productNumber = document.getElementById("productNumber");
    let quantity = document.getElementById("quantity");
    let name = document.getElementById("name");
    let unitPrice = document.getElementById("unitPrice");
    let select = document.getElementById("supplier")
    let date = document.getElementById("date");
    alert("Product Number: "+productNumber.value
         +" - Quantity: "+quantity.value
         +" - Name: "+name.value
         +" - Unit Price: "+unitPrice.value
         +" - Supplier: "+select.options[select.selectedIndex].text
         +" - Date: "+date.value
         );
})