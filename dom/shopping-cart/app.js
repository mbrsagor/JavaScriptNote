// phone price handaler
const phoneIncrease = document.getElementById('phone-increase');
phoneIncrease.addEventListener('click', function () {
    productPriceHandler('phone', true);
})

const phoneDecrease = document.getElementById('phone-decrease');
phoneDecrease.addEventListener('click', function () {
    productPriceHandler('phone', false);
});



// case price handaler
const caseIncrease = document.getElementById('case-increase');
caseIncrease.addEventListener('click', function () {
    productPriceHandler('case', true);
})

const caseDecrease = document.getElementById('case-decrease');
caseDecrease.addEventListener('click', function () {
    productPriceHandler('case', false);
});

function productPriceHandler(product, isIncrease) {
    const productCounter = document.getElementById(product + '-counter');
    const counterNumber = parseFloat(productCounter.value);
    let counterIncreaseValue = counterNumber;
    if (isIncrease == true) {
        counterIncreaseValue = counterNumber + 1;
    }
    if (isIncrease == false && counterNumber>0) {
        counterIncreaseValue = counterNumber - 1;
    }
    productCounter.value = counterIncreaseValue;
    const productPrice = document.getElementById(product + '-price');
    let increasePrice = productPrice;
    if (product == 'phone') {
        increasePrice = counterIncreaseValue * 1219;
    }
    if (product =='case') {
        increasePrice = counterIncreaseValue * 59;
    }
    productPrice.innerText = increasePrice;

    calculation();
}


function calculation() {
    const phonePrice = getInputPrice('phone');
    const casePrice = getInputPrice('case');
    const total = phonePrice + casePrice;
    document.getElementById('total-price').innerText = total;
    const tax = Math.round(total * .1);
    document.getElementById('total-tax').innerText = tax;
    const grandTotal = total + tax;
    document.getElementById('final-price').innerText = grandTotal;
}


function getInputPrice(product) {
    const productPrice = document.getElementById(product + '-price');
    const productPriceNumber = parseFloat(productPrice.innerText);
    return productPriceNumber;
}
