// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');


  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  

  let priceValue = parseFloat(price.innerHTML)
  let quantityValue = quantity.valueAsNumber
  let subtotalValue = priceValue * quantityValue

  const subtotal = product.querySelector('.subtotal span')

  subtotal.innerHTML = subtotalValue.toFixed(2)

  return subtotalValue
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  let singleProduct = document.querySelector('.product')
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  const products = document.getElementsByClassName('product')
  let total = 0
  for (let i = 0; i < products.length; i++) {
    const subtotal = updateSubtotal(products[i])
    total += subtotal
  }


  // ITERATION 3

  let totalProducts = document.querySelector('#total-value span')
  totalProducts.innerHTML = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget
  console.log('The target in remove is:', target)

  const RowToRemove = target.closest('.product')
  RowToRemove.remove();

  let total = 0;
  const products = document.querySelectorAll('.product')
  products.forEach((product) => {
    const subtotal = updateSubtotal(product)
    total += subtotal
  })

  const totalProducts = document.querySelector('.total-value')
  totalProducts.innerHTML = total;
}

const removeButtons = document.querySelectorAll('.btn.btn-remove')
removeButtons.forEach((button) => {
  button.addEventListener('click', removeProduct)
})


// ITERATION 5

function createProduct() {
  //... your code goes here
  const newName = document.querySelector('.name input').value
  const newPrice = parseFloat(document.querySelector('.price input').value)
  const newRow = document.createElement('tr')
  newRow.classList.add('product')

  newRow.innerHTML = `
    <td class="name">
      <span>${newName}</span>
    </td>
    <td class="price">$<span>${newPrice.toFixed(2)}</span></td>
    <td class="quantity">
      <input type="number" min="0" value="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `
  newRow.querySelector('.btn-remove').addEventListener('click', removeProduct)

  const table = document.querySelector('#cart tbody')
  table.appendChild(newRow)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)

  //... your code goes here
  const createProductBtn = document.getElementById('create')
  createProductBtn.addEventListener('click', createProduct)
  
});
