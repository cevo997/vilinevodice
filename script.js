// Opcionalno: Zatvori popup ako klikneš izvan forme
window.onclick = function(event) {
    if (event.target === document.getElementById('reservationForm')) {
        document.getElementById('reservationForm').style.display = 'none';
    }
}
