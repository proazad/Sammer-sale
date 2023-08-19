function addToCart(data) {
    // Current / Clicked Product Name 
    const itemName = data.childNodes[3].childNodes[3].innerText;
    // Current / Clicked Product Price  
    const itemPriceText = data.childNodes[3].childNodes[5].innerText.split(' ');
    const itemPrice = textToFloat(itemPriceText);
    addItemInCart(itemName);
    calculateSubTotalPrice(itemPrice);
}

function addItemInCart(name) {
    // Get Shopping Cart Existin all Element 
    const shoppingCartAllProducts = getElement('shopping-list');
    // Create New P Tag Element 
    const createPtag = createNewElement('p');
    //Add Some Class in Shopping Items 
    createPtag.setAttribute('class', 'text-xl font-medium my-2');

    // Count Shopping Cart Existing Product 
    const shoppingNumber = shoppingCartAllProducts.childElementCount + 1;
    // Add InnerText in New P Element 
    createPtag.innerText = shoppingNumber + "." + " " + name;
    //Append P Element in the Shopping Cart
    shoppingCartAllProducts.appendChild(createPtag);
}
function calculateSubTotalPrice(newItemPrice) {
    const subTotalElement = getElement('sub-total-price');
    const oldSubTotlaPrice = textToFloat(subTotalElement.innerText);
    const newSubTotalPrice = newItemPrice + oldSubTotlaPrice;
    const twoDigit = newSubTotalPrice.toFixed(2);
    subTotalElement.innerText = twoDigit;
}
