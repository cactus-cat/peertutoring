function toggleContent(button) {
    // Get the content box that follows the button
    const contentBox = button.nextElementSibling;
    
    // Toggle the display of the content box
    if (contentBox.style.display === 'none') {
        contentBox.style.display = 'block';
        button.textContent = 'Hide Details';
    } else {
        contentBox.style.display = 'none';
        button.textContent = 'Show Details';
    }
}

function submitAdvice(event) {
    event.preventDefault();
    const password = document.getElementById('advice-password').value;
    const adviceText = document.getElementById('advice-text').value.trim();
    const adviceList = document.getElementById('added-advice-list');

    if (!adviceText) {
        alert('Please enter your advice before submitting.');
        return false;
    }

    const correctPassword = 'tammytutor.';

    if (password !== correctPassword) {
        alert('Incorrect password. Please try again.');
        return false;
    }

    const newAdvice = document.createElement('li');
    newAdvice.textContent = adviceText;
    adviceList.appendChild(newAdvice);

    document.getElementById('advice-form').reset();
    alert('Your advice has been added. Thank you!');
    return false;
}

function loadAdvices() {
    const adviceList = document.getElementById('added-advice-list');
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbxhX9N5l4JU3Z1LK_jZ430fIiHf78yuWtyVIfqXz05e34E3EvJcTg9-9z_1CCGvKoxUMg/exec';
    
    fetch(scriptUrl)
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data.advices)) {
                data.advices.forEach(advice => {
                    const li = document.createElement('li');
                    li.textContent = advice;
                    adviceList.appendChild(li);
                });
            }
        })
        .catch(err => console.error('Failed to load advices', err));
}

document.addEventListener('DOMContentLoaded', loadAdvices);
