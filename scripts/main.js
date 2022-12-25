const calculateBtn = document.querySelector('#calculateBtn');
const monthlyPayment = document.querySelector('#monthlyPayment');
const totalPayment = document.querySelector('#totalPayment');
const totalInterest = document.querySelector('#totalInterest');
const alertWindow = document.querySelector('#alertWindow');
const alertContent = document.querySelector('#alertContent');
const loadingBar = document.querySelector('#loadingBar');
const loadingInner = document.querySelector('#loadingInner');
const progress = document.querySelector('#progress');
const result = document.querySelector('#result');
let initialLoading = 0;
let loadInterval;
let alertTimeout;

calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    initialLoading = 0;
    
    const loanAmount = document.querySelector('#loanAmount').value;
    const interestRate = document.querySelector('#interestRate').value;
    const years = document.querySelector('#years').value;

    if(!loanAmount) {
        createAlert('Please enter a loan amount!');
        return;
    }
    else if(!interestRate) {
        createAlert('Please enter an interest rate!');
        return;
    }
    else if(!years) {
        createAlert("Please enter how long you'll be paying it off!");
        return;
    }
    startLoading();
    calculate(loanAmount, interestRate, years);
});

function toggleResult() {
    if(initialLoading > 1 && initialLoading < 100) {
        result.classList.remove('none');
        result.classList.add('hidden');
    } else if(initialLoading == 100) {
        result.classList.remove('hidden');
    } else {
        result.classList.add('none');
    }
}

function createAlert(msg) {
    clearTimeout(alertTimeout);
    alertContent.textContent = msg;
    alertWindow.classList.remove('none');
    alertTimeout = setTimeout(() => {
        alertWindow.classList.add('none');
    }, 2500);
}

function calculate(loanAmount, interestRate, years) {
    loanAmount = parseFloat(loanAmount);
    interestRate = parseFloat(interestRate);
    years = parseFloat(years);
    const interestRateFloat = interestRate / 100;
    const interestResult = loanAmount * interestRateFloat * years;
    const totalPaymentResult = loanAmount + interestResult;
    const monthlyPaymentResult = totalPaymentResult / (years * 12);

    monthlyPayment.value = monthlyPaymentResult.toFixed(2);
    totalPayment.value = totalPaymentResult.toFixed(2);
    totalInterest.value = interestResult.toFixed(2);
}

function startLoading() {
    loadInterval = setInterval(incrementLoading, 10);
    loadingBar.classList.remove('none');
}

function incrementLoading() {
    toggleResult();
    if(initialLoading < 100) {
        initialLoading++;
    } else {
        clearInterval(loadInterval);
        loadingBar.classList.add('none');
    }
    progress.textContent = `${initialLoading}%`;
    loadingInner.style.width = `${initialLoading}%`;
}