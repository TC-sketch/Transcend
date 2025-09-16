document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const pickup = form.pickup.value;
  const dropoff = form.dropoff.value;
  const passengers = form.passengers.value;
  const hours = form.hours.value;
  const returnTrip = form.returnTrip.checked ? "Yes" : "No";
  const additional = form.additional.value;

  const message = `Hello, I would like to request a quote with the following details:
  - Pickup Location: ${pickup}
  - Drop-off Location: ${dropoff}
  - Passengers: ${passengers}
  - Hours Required: ${hours}
  - Return Trip: ${returnTrip}
  - Additional Info: ${additional}`;

  const whatsappLink = `https://wa.me/447301905072?text=${encodeURIComponent(message)}`;
  window.open(whatsappLink, "_blank");
});
