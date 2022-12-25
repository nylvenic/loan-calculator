const calculateBtn = document.querySelector('#calculateBtn');
const monthlyPayment = document.querySelector('#monthlyPayment');
const totalPayment = document.querySelector('#totalPayment');
const totalInterest = document.querySelector('#totalInterest');

calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const loanAmount = document.querySelector('#loanAmount').value;
    const interestRate = document.querySelector('#interestRate').value;
    const years = document.querySelector('#years').value;

    calculate(loanAmount, interestRate, years);
});

function calculate(loanAmount, interestRate, years) {
    loanAmount = parseFloat(loanAmount);
    interestRate = parseFloat(interestRate);
    years = parseFloat(years);
    const interestRateFloat = interestRate / 100;
    const interestResult = loanAmount * interestRateFloat * years;
    const totalPaymentResult = loanAmount + interestResult;
    const monthlyPaymentResult = totalPaymentResult / (years * 12);

    monthlyPayment.value = monthlyPaymentResult;
    totalPayment.value = totalPaymentResult;
    totalInterest.value = interestResult;
}