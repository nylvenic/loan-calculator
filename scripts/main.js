const calculateBtn = document.querySelector('#calculateBtn');
const monthlyPayment = document.querySelector('#monthlyPayment');
const totalPayment = document.querySelector('#totalPayment');
const totalInterest = document.querySelector('#totalInterest');
const alertWindow = document.querySelector('#alertWindow');
const alertContent = document.querySelector('#alertContent');
let alertInterval;

calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
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

    calculate(loanAmount, interestRate, years);
});

function createAlert(msg) {
    clearInterval(alertInterval);
    alertContent.textContent = msg;
    alertWindow.classList.remove('hidden');
    alertInterval = setInterval(() => {
        alertWindow.classList.add('hidden');
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