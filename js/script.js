
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
    const errorMsg = getElement('error');
    const succesMsg = getElement('success');
    const userInputCoupon = couponElement.value;
    const totalElement = getElement('sub-total-price');
    const totalPrice = totalElement.innerText;
    const grandTotalElement = getElement("grand-total-price");
    const discountElement = getElement("discount-amount");
    if ('' === userInputCoupon) {
        errorMsg.innerText = 'Field Must not be empty !';
        succesMsg.innerText='';
    }
    else if (coupon === userInputCoupon) {
        const discountAmount = ((textToFloat(totalPrice) / 20) * 100);
        const twodigitdiscountPrice = discountAmount.toFixed(2);
        discountElement.innerText = twodigitdiscountPrice;
        const withDicountGrandTotal = textToFloat(totalPrice) - twodigitdiscountPrice;
        const twoDigitGrandPrice = withDicountGrandTotal.toFixed(2);
        grandTotalElement.innerText = twoDigitGrandPrice;
        succesMsg.innerText = 'Congrates your Coupon is applied!';
        errorMsg.innerText = '';
        couponElement.value ='';
    }
    else {
        errorMsg.innerText = 'Sorry! This coupon code is not valid !';
        couponElement.value ='';
        succesMsg.innerText='';
    }
}
/**
 * Discount Button Enabled 
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

document.getElementById("go-home").addEventListener("click", function () {
    window.location.reload();
});