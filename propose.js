// Function to redirect to the chat page
function startChat() {
    // Redirect the user to the chat page directly
    window.location.href = 'user2.html'; // Replace 'user2.html' with the actual chat page URL
}

// Function to handle decline action
function decline() {
    alert("You have declined the offer.");
    // Redirect after declining
    window.location.href = 'user2.html'; // Replace 'user2.html' with the actual URL to redirect after decline
}
