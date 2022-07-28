// ITERATION 1

function updateSubtotal(product) {
  // Steps 1 & 2
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  // Step 3
  const subtotal = Number(price * quantity);
  // Step 4
  const subtotalElement = product.querySelector('.subtotal span');
  // Step 5
  subtotalElement.innerHTML = subtotal;
  return subtotal;
}
// console.log('Calculating subtotal, yey!');

  //... your code goes here


  function calculateAll() {
    // code in the following two lines is added just for testing purposes.
    // it runs when only iteration 1 is completed. at later point, it can be removed.
    const singleProduct = document.querySelector('.product');
    updateSubtotal(singleProduct);
    // end of test
  
    // ITERATION 2
    //... your code goes here
    const productList = document.querySelectorAll('.product');
  
    let total = 0;
    productList.forEach((singleProduct) => {
      total += updateSubtotal(singleProduct);
    });
  
    // ITERATION 3
    //... your code goes here
    const totalValue = document.querySelector('#total-value span');
    totalValue.innerHTML = total;
  }

// ITERATION 4
let myTarget = document.querySelector(".btn btn-remove")

function removeProduct(event) {
  const target = event.currentTarget;

  productList.forEach((product) => {
    console.log(product.id);
  });


 // console.log('The target in remove is:', target);

  updateSubtotal()
  calculateAll()
  //... your code goes here
}


// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
 