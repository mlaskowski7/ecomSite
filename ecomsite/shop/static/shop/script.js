// console.log("working");
// let cart;

// if(localStorage.getItem('cart') == null){
//     cart = {};
// } else{
//     cart = JSON.parse(localStorage.getItem('cart'));
// }

// $(document).on('click','.atc', (event) =>{
//     console.log('atc clicked essa');
//     let item_id = event.target.id.toString();
//     console.log(item_id);

//     if(cart[item_id] != undefined){
//         cart[item_id] += 1;
//     } else{
//         cart[item_id] = 1;
//     }
//     console.log(cart);
//     localStorage.setItem('cart', JSON.stringify(cart));
//     document.getElementById("cart").innerHTML = "Cart (" + Object.keys(cart).length + ")";
    
// });