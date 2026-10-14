function calculateTotal() {
    const packageSelect = document.getElementById('package-select');
    const basePrice = parseInt(packageSelect.value);

    const geo = document.getElementById('opt-geo').checked ? parseInt(document.getElementById('opt-geo').value) : 0;
    const gen = document.getElementById('opt-gen').checked ? parseInt(document.getElementById('opt-gen').value) : 0;
    const wifi = document.getElementById('opt-wifi').checked ? parseInt(document.getElementById('opt-wifi').value) : 0;

    const totalPrice = basePrice + geo + gen + wifi;

    document.getElementById('total-price').innerText = totalPrice.toLocaleString('uk-UA');
}

function handleFormSubmit(event) {
    event.preventDefault();
    const msg = document.getElementById('form-message');
    msg.style.display = 'block';
    document.getElementById('orderForm').reset();
    calculateTotal();
}
