function updateClock() {
  const clockElement = document.getElementById("clock");
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0")%12;
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, '0');

  clockElement.textContent = `${hours}  :  ${minutes}  :  ${seconds}`;

  // Define the time range (for example, 09:00 to 17:00)
  const startHour = 0;
  const endHour = 5;

  // Logic to show/hide button or message
  if (now.getHours() >= startHour && now.getHours() < endHour) {
    document.getElementById("nextPageButton").style.display = "inline-block";
    document.getElementById("message").style.display = "none";
  } else {
    document.getElementById("nextPageButton").style.display = "inline-block";
    document.getElementById("message").style.display = "block";
  }
}

// Update clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();

// Function to handle button click
function goToNextPage() {
  document.getElementById("nextPageButton").onclick = function () {
    window.location.href = "propose.html";
  };
}
