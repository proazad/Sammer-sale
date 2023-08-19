
/**
 * Calcula Grand Total Price
 */
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
    const grandTotalElement = getElement("grand-total-price");
    const oldGrandTotalPrice = textToFloat(grandTotalElement);
    const newGrandTotal = newSubTotalPrice.toFixed(2);
    grandTotalElement.innerText = newGrandTotal;

    /**
 * Dicount Button Enabled 
 * purchase Button Enabeld Disabled
*/
    const button = document.querySelector('#discount-btn');
    if (newSubTotalPrice < 200) {
        button.setAttribute('disabled', true);
    } else {
        button.removeAttribute('disabled');
    }

    const purchaseBtn = document.querySelector('#purchase');
    if (newSubTotalPrice <= 0) {
        purchaseBtn.setAttribute('disabled', true);
    } else {
        purchaseBtn.removeAttribute('disabled');
    }

}



function discountCalculation(data) {
    const coupon = "SELL200";
    const couponElement = data.previousElementSibling;

    const userInputCoupon = couponElement.value;
    const totalElement = getElement('sub-total-price');
    const totalPrice = totalElement.innerText;
    const grandTotalElement = getElement("grand-total-price");
    const discountElement = getElement("discount-amount");
    if (coupon === userInputCoupon) {
        const discountAmount = ((textToFloat(totalPrice) * 20) / 100);
        discountElement.innerText = "20% OFF  " + discountAmount;
        const withDicountGrandTotal = textToFloat(totalPrice) - discountAmount;
        grandTotalElement.innerText = withDicountGrandTotal;
    } else {
        alert("Invalid Coupon Code !!");
    }
}
/**
 * Dicount Button Enabled 
 * purchase Button Enabeld Disabled
*/
const subTotalElement = getElement('sub-total-price');
const subTotalPrice2 = parseFloat(subTotalElement.innerText);
const button = document.querySelector('#discount-btn');
if (subTotalPrice2 < 200) {
    button.setAttribute('disabled', true);
} else {
    button.removeAttribute('disabled');
}
const purchaseBtn = document.querySelector('#purchase');
if (subTotalPrice2 <= 0) {
    purchaseBtn.setAttribute('disabled', true);
} else {
    purchaseBtn.removeAttribute('disabled');
}
