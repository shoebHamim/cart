const items=document.querySelectorAll('.item')
const addedItemBody=document.querySelector('.added-item-body')
items.forEach(item => {
  const name=item.querySelectorAll('td')[0].innerText
  const price=item.querySelectorAll('td')[1].innerText
  const button=item.querySelectorAll('td')[2].querySelector('button')
  button.addEventListener('click',()=>{
    addToCartTable(name,price)
  })
});


const addToCartTable = (name, price) => {
  let row = document.createElement('tr');
  row.className = "added-item";
  let nameCell = row.insertCell();
  let priceCell = row.insertCell();
  let buttonCell = row.insertCell();
  nameCell.textContent = name;
  priceCell.textContent = price;
  let button = document.createElement('button');
  button.textContent = 'Remove From Cart';
  button.addEventListener('click', () => {

    row.remove();
  });
  buttonCell.appendChild(button);
  addedItemBody.appendChild(row);
}










