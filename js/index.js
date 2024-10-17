

var navbarSupportedContent = document.querySelector('#navbarSupportedContent');
var signinEmail = document.querySelector('#signinEmail');
var signinPassword = document.querySelector('#signinPassword');
var sininmessage = document.querySelector('#sininmessage');

var Login =document.querySelector('#Login');
var signlink = document.querySelector('.signlink');
var incorrect= document.querySelector('#incorrect');

var error= document.querySelector('.error');

var signupName = document.querySelector('#signupName');
var signupEmail = document.querySelector('#signupEmail');
var signupPassword = document.querySelector('#signupPassword');
var SignUpBtn = document.querySelector('#SignUp');
var exist= document.querySelector('#exist');
var sucess= document.querySelector('#sucess');
var signupmessg = document.querySelector('#signupmessg');

var Logout= document.querySelector('#Logout');


// var username = document.querySelector('#username');
var PING_IFRAME_FORM_DETECTION = document.querySelector('#PING_IFRAME_FORM_DETECTION');
var navlink = document.querySelector('.nav-link');
var navbartoggler= document.querySelector('.navbar-toggler');

var userName = localStorage.getItem('loginUser');

var loginSystem;

if(localStorage.getItem('informationUser') == null) {

  loginSystem=[];
}else{
  loginSystem= JSON.parse(localStorage.getItem('informationUser'))
}


SignUpBtn?.addEventListener('click' , function SignUp(){
  if(check()== false && isExist()== false){
    
    var Register ={
      name: signupName.value,
      yourEmail: signupEmail.value,
      yourPassword: signupPassword.value,
  
    }
  
    loginSystem.push(Register)
    localStorage.setItem('informationUser' , JSON.stringify(loginSystem))
    clear()
    sucess.classList.replace('d-none' , 'd-block')

  }


} )

function clear(){
  signupName.value="";
  signupEmail.value="";
  signupPassword.value="";

  signupName.classList.remove('is-valid' , 'is-invalid');
  signupEmail.classList.remove('is-valid' , 'is-invalid');
  signupPassword.classList.remove('is-valid' , 'is-invalid');
}

function validateForm(element) {
  if(element.value==""){
    element.classList.remove('is-invalid','is-valid')
    exist.classList.replace('d-block' ,'d-none')
    return false
  }
  var regex= {
    signupName:/^[A-z]{1,}$/,
    signupEmail:/^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    signupPassword:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    signinEmail:/^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    signinPassword:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    // signupPassword:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-z\d]{8,}$/,

  }

  if(regex[element.id].test(element.value)){
    element.classList.add('is-valid')
    element.classList.remove('is-invalid')
    // exist.classList.replace('d-block' , 'd-none')
  }else{
    element.classList.add('is-invalid')
    element.classList.remove('is-valid')
    // exist.classList.replace('d-none' , 'd-block')
  }
console.log(input)

}

signupName?.addEventListener('input',function (){
  validateForm(signupName)
})

signupEmail?.addEventListener('input',function (){
  validateForm(signupEmail)
})
signupPassword?.addEventListener('input',function (){
  validateForm(signupPassword)
})

signinEmail?.addEventListener('input',function (){
  validateForm(signinEmail)
})

signinPassword?.addEventListener('input',function (){
  validateForm(signinPassword)
})



function isExist(){
  for(let i=0 ; i < loginSystem.length ; i++){
    if (loginSystem[i].yourEmail == signupEmail.value){
      exist.classList.replace('d-none' , 'd-block')
    return true
    }
    
  }
  exist.classList.replace('d-block' , 'd-none')
    return false

  
}

function check(){
  if(signupName.value =="" || signupEmail.value =="" || signupPassword.value =="") {
    signupmessg.classList.replace('d-none' , 'd-block')
    sucess.classList.replace('d-block' , 'd-none')
    return true
  }
else{
  signupmessg.classList.replace('d-block' , 'd-none')
    return false

}
}

Login?.addEventListener('click',function login() {
  var userfound = false
  for (let i= 0; i< loginSystem.length; i++) {
    if(loginSystem[i].yourEmail == signinEmail.value && loginSystem[i].yourPassword == signinPassword.value ){
      localStorage.setItem('loginUser', loginSystem[i].name)
      window.location.href ='home.html'
      userfound =true
    }
    
  }
  if(userfound==false){
    error.classList.replace('d-none', 'd-block')
  }
  else{
    error.classList.replace('d-block', 'd-none')
  }
  
})




function checkB(){
  if( signinEmail.value =="" || signinPassword.value =="") {
    sininmessage.classList.replace('d-none' , 'd-block')
    sucess.classList.replace('d-block' , 'd-none')
    return true
  }
else{
  sininmessage.classList.replace('d-block' , 'd-none')
    return false

}
}


// function welcome(){
//   document.getElementById('welcome').innerHTML=' welcome ' + userName
// }
// window.addEventListener('load', welcome)


Logout?.addEventListener('click' , function Logout(){
  if (Logout) {
    
  }
  localStorage.removeItem('loginUser')
  window.location.href='login.html'
})
















function checkLogin() {
  // var user = localStorage.getItem('loginUser');
  if (sessionStorage.getItem('loggedIn') === 'true') {
    return true;
  } else {
    return false;
  }
}
const loginRequiredPaths = ['/home.html', '/cart.html'];

function redirectIfNotLoggedIn(path) {
  if (!checkLogin() && loginRequiredPaths.includes(path)) {
    window.location.href = '/index.html';
  }
  redirectIfNotLoggedIn('/home.html');


redirectIfNotLoggedIn('/cart.html');
}




window.onload = function() {
  if (!checkLogin() && window.location.pathname === '/home.html' || window.location.pathname === '/cart.html') {
    window.location.href = '/index.html';
  }
}















function login(){

    var useremail = signinEmail.value;
    var pass = signinPassword.value;
    if(useremail == signupEmail.value && pass == signupPassword.value) {
    console.log(Login);
        locate="new11.html"
        return false;
    } else {
      incorrect.classList.replace("d-none", "d-block");
        // return false;
        if(signinEmail.value === '' || signinPassword === ''){
          incorrect.classList.replace("d-none", "d-block");
          Login.onclick = function() {
            var p = incorrect;
            var output = error;
            p.appendChild(document.createTextNode("All inputs is required"+"\n"));
            output.appendChild(p);
            
        };

        }
        }
        
    }










Login?.addEventListener('click', function login(){
  let error =[];
  if(signinEmail.value === '' || signinPassword === ''){
    incorrect.classList.replace("d-none", "d-block");
  }
    // if (error.length > 0){
    //   event.preventDefault();
    //   error.innerHTML = error.join('br');
    // }
   
})









function showmenu()
{
    var x = document.getElementById('navbarSupportedContent');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
navbartoggler?.addEventListener("click",function logout() {
navlink.classList.replace("d-none", "d-block");

});



let allProducts=[];

 async function getProducts(){
let response = await fetch(`https://ecommerce.routemisr.com/api/v1/products`);
let data = await response.json();

allProducts= data.data;
console.log(  allProducts );

  display();
}
getProducts();

function display(){

  var cartoona= ``;
  for (let i = 0; i < allProducts.length; i++) {
    cartoona+=`  <div id="thing" class="col-lg-3">
      <img src="${allProducts[i].imageCover}" class="w-100" alt="${allProducts[i].title.split(' ').slice(0,2).join(' ')}">
        <button class="bg-warning w-100 h-11  add-to-cart-button hover:bg-slate-600" data-id="${allProducts[i]._id}" > Add to cart</button>
      <h5>${allProducts[i].title.split(' ').slice(0,2).join(' ')}</h5>
    </div>`
    
  }
    document.querySelector('.row').innerHTML = cartoona;
  
setupAddToCartButtons();

}









function setupAddToCartButtons() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
  addToCartButtons.forEach(button => {
    button?.addEventListener('click', () => {
      const data_id = button.getAttribute('data_id');
      window.location.href = `cart.html?_id=${data_id}`;
    });
  });
}


// function getProductIdFromUrl() {
//   const queryString = window.location.search;
//   const urlParams = new URLSearchParams(queryString);
//   return urlParams.get('_id');
// }

// const productId = getProductIdFromUrl();
// console.log('Product ID:', productId); // Here you can use this ID to fetch product details or add it to the cart
















// // Shopping Cart
// let cart = JSON.parse(localStorage.getItem('cart')) || [];

// function addToCart(productId) {
//   const product = products.find(p => p.id === productId);
//   cart.push(product);
//   localStorage.setItem('cart', JSON.stringify(cart));
//   alert('Product added to cart');
// }

// function displayCart() {
//   const cartItemsContainer = document.getElementById('cartItems');
//   const totalPriceElement = document.getElementById('totalPrice');
//   cartItemsContainer.innerHTML = '';
//   let totalPrice = 0;

//   cart.forEach(item => {
//       const cartItemDiv = document.createElement('div');
//       cartItemDiv.classList.add('flex', 'justify-between', 'items-center', 'mb-4', 'bg-white', 'p-4', 'rounded-lg', 'shadow-md');
//       cartItemDiv.innerHTML = `
//           <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-md">
//           <div>
//               <h3 class="text-xl font-bold">${item.name}</h3>
//               <p class="text-gray-700">$${item.price.toFixed(2)}</p>
//           </div>
//           <button class="bg-red-500 text-white px-4 py-2 rounded-md" onclick="removeFromCart(${item.id})">Remove</button>
//       `;
//       cartItemsContainer.appendChild(cartItemDiv);
//       totalPrice += item.price;
//   });

//   totalPriceElement.textContent = totalPrice.toFixed(2);
// }

// function removeFromCart(productId) {
//   cart = cart.filter(item => item.id !== productId);
//   localStorage.setItem('cart', JSON.stringify(cart));
//   displayCart();
// }

// if (window.location.pathname.includes('cart.html')) {
//   displayCart();
// }








































// function displayProducts() {
//   const productsContainer = document.getElementById('productsContainer');
//   products.forEach(product => {
//       const productDiv = document.createElement('div');
//       productDiv.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-md');
//       productDiv.innerHTML = `
//           <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover mb-4 rounded-md">
//           <h3 class="text-xl font-bold mb-2">${product.name}</h3>
//           <p class="text-gray-700 mb-2">${product.description}</p>
//           <p class="text-gray-800 font-bold mb-4">$${product.price.toFixed(2)}</p>
//           <button class="bg-green-500 text-white px-4 py-2 rounded-md" onclick="addToCart(${product.id})">Add to Cart</button>
//       `;
//       productsContainer.appendChild(productDiv);
//   });
// }

// if (window.location.pathname.includes('home.html')) {
//   displayProducts();
// }








