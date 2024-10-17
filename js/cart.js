// let allProducts=[];

// let cart=[];

// function addToCart(id) {
//   cart.push({...data[id]});
//   displayCart();

  
// }
// addToCart(id);
// // async function getProducts(){
// //   let response = await fetch(`https://ecommerce.routemisr.com/api/v1/products`);
// //   let data = await response.json();
  
// //   allProducts= data.data;
// //   // console.log(  allProducts );
// //   console.log(allProducts.id);
// // }
// // getProducts();

// function displayCart(a){

//   let j=0;
//   if (cart.length==0) {
//     document.querySelector('.cartItems').innerHTML=`<h1>Cart is empty</h1>`
    

  
//   }else{
//     document.querySelector('.cartItems').innerHTML=cart.map((items)=>
//     {
//       let {imageCover , title , price }= items;
//       return(
//         `<div class="cartItem">
//         <div class='row-img'>
//         <img class='rowing' src=${imageCover}>
//         </div>
//         <p style='font-size:12px;'>${title}</p>
//         <h2 style='font-size:15px;'>$ ${price}.00</h2>`+
//         "<i class='fa-solid fa-trash' onclick='deleteElement("+(j++)+")'></i></div>"
        
//       );
//     }).join('');
//   }

// }








function getProductIdFromUrl() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get('id');
}


console.log('_id:', data_id); // تأكيد إننا حصلنا على الـ ID




async function getProductDetails(data_id) {
  try {
    let response = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${data_id}`);
    let productData = await response.json();
    if (response.ok) {
      displayProductDetails(productData);
    } else {
      console.error('Error fetching product details:', productData.message);
    }
  } catch (error) {
    console.error('Network error:', error);
  }
}

function displayProductDetails(product) {
  // هنا تحط الكود لعرض بيانات المنتج في الصفحة
  const productContainer = document.getElementById('cartItems');
  productContainer.innerHTML = `
    <div class="col-lg-3">
      <img src="${product.imageCover}" class="w-100" alt="${product.title}">
      <h5>${product.title}</h5>
      <p>${product.description}</p>
      <p>Price: $${product.price}</p>
    </div>
  `;
}

const data_id = getProductIdFromUrl();
if (data_id) {
  getProductDetails(data_id);
} else {
  console.error('Product ID not found in URL');
}
