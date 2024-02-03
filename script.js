document.addEventListener('DOMContentLoaded', function () {
    const plans = document.querySelectorAll('.plan');
    const currencySelector = document.getElementById('currency-selector');
    const unitSelector = document.getElementById('unit-selector');

    plans.forEach(plan => {
        plan.addEventListener('click', function () {
            plans.forEach(p => p.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    currencySelector.addEventListener('change', updatePrices);
    unitSelector.addEventListener('change', updatePrices);

    function updatePrices() {
        const selectedCurrency = currencySelector.value;
        const selectedUnit = unitSelector.value;

        plans.forEach(plan => {
            const priceElement = plan.querySelector('.price');
            const currentPrice = priceElement.innerText;
            const updatedPrice = currentPrice.replace(/\$.*/, `${selectedCurrency}/${selectedUnit}`);
            priceElement.innerText = updatedPrice;
        });
    }
});





