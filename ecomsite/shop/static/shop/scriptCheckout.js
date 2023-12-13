let cart;
if(localStorage.getItem('cart')==null){
    cart = {};
} else{
    cart = JSON.parse(localStorage.getItem('cart'));
}

let total = 0;
for(item in cart){
    let name = cart[item][1];
    let quantity = cart[item][0];
    let price = cart[item][2];
    total += price;

    let itemString = `<li class="list-group-item justify-content-between"><span>${name}(${quantity})</span><span class ="badge-warning badge-pill">$ ${price}</span></>`;
    $('#item_list').append(itemString);
}
let totalPrice =`<li class="list-group-item d-flex justify-content-between align-items-center"><b>Your Total</b> <b>$${total}</b></li>`;
$('#item_list').append(totalPrice);
$('#total').val(total);


$('#items').val(JSON.stringify(cart));
