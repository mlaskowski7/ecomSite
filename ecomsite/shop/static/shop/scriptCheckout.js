let cart;
if(localStorage.getItem('cart')==null){
    cart = {};
} else{
    cart = JSON.parse(localStorage.getItem('cart'));
}

for(item in cart){
    let name = cart[item][1];
    let quantity = cart[item][0];

    let itemString = `<li class="list-group-item">${name}(${quantity})</>`;
    $('#item_list').append(itemString);
}