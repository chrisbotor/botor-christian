function calculateLoan() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
    const loanTerm = parseFloat(document.getElementById('loanTerm').value) * 12;

    // Calculate monthly payment using the formula for loan amortization
    const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));

    if (isFinite(monthlyPayment)) {
        document.getElementById('result').innerHTML = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
    } else {
        document.getElementById('result').innerHTML = 'Please enter valid values';
    }
}
