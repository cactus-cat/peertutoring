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

    if (!adviceText) {
        alert('Please enter your advice before submitting.');
        return false;
    }

    const correctPassword = 'tammytutor.';

    if (password !== correctPassword) {
        alert('Incorrect password. Please try again.');
        return false;
    }

    // Send to Google Sheet
    const formData = new FormData();
    formData.append('Advice', adviceText);

    const scriptUrl = 'https://script.google.com/macros/s/AKfycbyUffL23URWVE2dLc8t7vSb5lzWSlh1H79Cfumceuta2UJXOKzC-s3yJVUtK14c43wPjw/exec';
    
    fetch(scriptUrl, {
        method: 'POST',
        body: formData
    })
    .then(res => {
        alert('Your advice has been submitted. Thank you!');
        document.getElementById('advice-form').reset();
        loadAdvices(); // Reload the advice list
    })
    .catch(err => {
        console.error('Error submitting advice', err);
        alert('There was an error submitting your advice. Please try again.');
    });

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
