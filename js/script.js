
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
    // Get Sub Total Button 
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
    const discountButton = document.querySelector('#discount-btn');
    const purchaseBtn = document.querySelector('#purchase');
    if (newSubTotalPrice > 0 ) {
        purchaseBtn.removeAttribute('disabled');
    }
    if(newSubTotalPrice>200){
        discountButton.removeAttribute('disabled');
    }

}

let isAppliedCoupon = false;
function discountCalculation(data) {
    const coupon = "SELL200";
    const couponElement = data.previousElementSibling;

    const errorMsg = getElement('error');
    const successMsg = getElement('success');
    const userInputCoupon = couponElement.value;

    const totalElement = getElement('sub-total-price');

    const totalPrice = totalElement.innerText;

    const grandTotalElement = getElement("grand-total-price");
    const discountElement = getElement("discount-amount");

    if ('' === userInputCoupon) {
        errorMsg.innerText = 'Field Must not be empty !';
        successMsg.innerText = '';
    } else if (isAppliedCoupon) {
        successMsg.innerText = '';
        errorMsg.innerText = 'Sorry! Your Coupon is already applied!';
        couponElement.value = '';
    }
    else if (coupon === userInputCoupon && !isAppliedCoupon) {

        const discountAmount = ((textToFloat(totalPrice) * 20) / 100);

        const twodigitdiscountPrice = discountAmount.toFixed(2);

        discountElement.innerText = twodigitdiscountPrice;

        const withDicountGrandTotal = textToFloat(totalPrice) - twodigitdiscountPrice;

        const twoDigitGrandPrice = withDicountGrandTotal.toFixed(2);

        grandTotalElement.innerText = twoDigitGrandPrice;

        successMsg.innerText = 'Congrates your Coupon is applied!';
        errorMsg.innerText = '';
        couponElement.value = '';
        isAppliedCoupon = true;
    }
    else {
        errorMsg.innerText = 'Sorry! This coupon code is not valid !';
        couponElement.value = '';
        successMsg.innerText = '';
    }
}
/**
 * Discount Button Enabled 
 * purchase Button Enabeld Disabled
*/
const subTotalElement = getElement('sub-total-price');
const subTotalPrice2 = parseFloat(subTotalElement.innerText);
const button = document.querySelector('#discount-btn');

if (subTotalPrice2 > 200) {
    button.removeAttribute('disabled');
}
const purchaseBtn = document.querySelector('#purchase');
if (subTotalPrice2 > 0) {
    purchaseBtn.removeAttribute('disabled');
}

document.getElementById("go-home").addEventListener("click", function () {
    window.location.reload();
});