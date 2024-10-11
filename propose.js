// Function to redirect to the chat page
function startChat() {
    document.getElementById("chatButton").onclick = function() {
        window.location.href = 'http://localhost:3000/user2.html';
    };
    // window.location.href = 'http://localhost:5500/user1.html'; // Replace 'chat.html' with the actual chat page URL
}

// Function to handle decline action
function decline() {
    alert("You have declined the offer.");
    window.location.href = 'user1.html'; // Replace 'home.html' with the URL to redirect after decline
}
