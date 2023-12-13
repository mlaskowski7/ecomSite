const cartEl = document.getElementById("cart");
let cart;

if(localStorage.getItem('cart') == null){
    cart = {};
} else{
    cart = JSON.parse(localStorage.getItem('cart'));
}

updateCartDisplay();

$(document).on('click','.atc', (event) =>{
    console.log('atc clicked');
    let item_id = event.target.id.toString();
    console.log(item_id);

    let quantity;
    let name;
    if(cart[item_id] != undefined){
        quantity = cart[item_id][0] + 1;
        cart[item_id][0] = quantity;
        cart[item_id][2] += parseFloat(document.getElementById('price'+item_id).innerHTML);
    } else{
        quantity = 1;
        name = document.getElementById("name"+item_id).innerHTML;
        cart[item_id] =[quantity,name];
        cart[item_id][2] = parseFloat(document.getElementById('price'+item_id).innerHTML);
    }
    console.log(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    displayCart(cart);
    console.log(Object.keys(cart).length);
});


function displayCart(cart){
    let cartString ="";
    cartString += "<h5>This is your cart</h5>";
    var cartIndex = 1;

    for(let x in cart){
        cartString += cartIndex +"."+ cart[x][1]+ " - Quantity: " +cart[x][0] + "</br>";
        cartIndex += 1;
    }
    cartString += "<a href ='/checkout'><button class='btn btn-success' id ='checkout'>Go To Checkout</button></a>";
    cartEl.setAttribute('data-content',cartString);
    $('[data-toggle="popover"]').popover();

}

function updateCartDisplay(){
    cartEl.innerHTML = "Cart (" + Object.keys(cart).length + ")";
}
console.log('working');
console.log("not working");
updateCartDisplay();
displayCart(cart);
