function toggleInfo(button) {
    const infoBlock = button.nextElementSibling;
    if (infoBlock.style.display === "none" || infoBlock.style.display === "") {
        infoBlock.style.display = "block";
    } else {
        infoBlock.style.display = "none";
    }
}

function editItem(event) {
    event.preventDefault();
    const listItem = event.target.parentElement;
    const currentText = listItem.firstChild.textContent.trim();
    
    const newText = prompt("Edit item:", currentText);
    if (newText !== null) {
        listItem.firstChild.textContent = newText;
        listItem.firstChild.appendChild(event.target); // Keep the edit link in place
    }
}

function goToTodoList() {
    const username = document.getElementById('username').value;
    if (username) {
        localStorage.setItem('username', username); // Store username in localStorage
        window.location.href = 'do-to-list.html'; // Redirect to do-to-list.html
    } else {
        alert('Please enter your username.');
    }
}

function displayWelcomeMessage() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('welcome-message').textContent = `Hi ${username}, 
        make 
        your 
        to-do 
        list 
        for 
        this 
        week.`;
    }
}

