var infoForm= document.querySelector(".infoForm");
var nameInput= document.querySelector("#name");
var desriptionInput= document.querySelector("#description");
var priceInput= document.querySelector("#price");

console.log(infoForm);


var products =[];
infoForm.onsubmit= function(e) {
    e.preventDefault();

    var product = {
        name:nameInput.value,
        price:desriptionInput.value,
        description: priceInput.value
    };
 
    products.push(product);
   
    printData();
   
}
function printData() {
    var data =``;
    for (var i=0; i<products.length;i++) {
        data+=`
        <tr>
            <td>${products[i].name}</td>
            <td>${products[i].price}</td>
            <td>${products[i].description}</td>
        </tr>
        `;
    }
    console.log(data);
    document.querySelector("tbody").innerHTML=data;
}