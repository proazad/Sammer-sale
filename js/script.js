function addToCart(data) {
    // Current / Clicked Product Name 
    const itemName = data.childNodes[3].childNodes[3].innerText;
    // Current / Clicked Product Price  
    const itemPriceText = data.childNodes[3].childNodes[5].innerText.split(' ');
    const itemPrice = textToFloat(itemPriceText);
    addItemInCart(itemName);
    calculateTotalPrice(itemPrice);
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
function calculateTotalPrice(newItemPrice) {
    const subTotalElement = getElement('sub-total-price');
    const oldSubTotalPrice = textToFloat(subTotalElement.innerText);
    const newSubTotalPrice = newItemPrice + oldSubTotalPrice;
    const twoDigit = newSubTotalPrice.toFixed(2);
    subTotalElement.innerText = twoDigit;
    /**
     * Calcula Grand Total Price
     */

    const grandTotalElement = getElement("grand-total-price");
    const oldGrandTotalPrice = textToFloat(grandTotalElement);
    const newGrandTotal = newSubTotalPrice.toFixed(2);
    grandTotalElement.innerText = newGrandTotal;
    
      

}
