let img1 = document.getElementById('output-img1');
let img2 = document.getElementById('output-img2');
let button = document.getElementById('input-search');
let radio1 = document.getElementById('input-radio1');
let radio2 = document.getElementById('input-radio2');
let outputDiv = document.getElementById('output-div');
let messageDiv = document.createElement('div');

button.addEventListener('click', () => {
    // Reset images and message
    img1.style.display = 'none';
    img2.style.display = 'none';
    messageDiv.textContent = '';

    // Make the images visible based on the selected radio button
    if (radio1.checked) {
        img1.style.display = 'block';
        messageDiv.textContent = 'Steak';
    } else if (radio2.checked) {
        img2.style.display = 'block';
        messageDiv.textContent = 'Vada-Paw';
    } else {
        messageDiv.textContent = 'Please select one of the food options';
    }

    // Append the message to the output-div
    outputDiv.appendChild(messageDiv);

    // Show the sidebar
    document.getElementById('sidebar').classList.add('show');
});