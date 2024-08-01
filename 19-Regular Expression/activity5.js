//Activity 5 - Practical Application
//Task 9

function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (regex.test(password)) {
        console.log('Valid password!');
    } else {
        console.log('Invalid password. Please ensure it meets the criteria.');
    }
}

// Example usage:
const userPassword = 'MyP@ssword';
validatePassword(userPassword);

//Task 10
function isValidUrl(url) {
    const urlRegex = /^(?:(?:https?|ftp):\/\/)?(?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)+[^\s]*$/i;

    if (urlRegex.test(url)) {
        console.log('Valid URL!');
    } else {
        console.log('Invalid URL. Please check the format.');
    }
}

// Example usage:
const userUrl = 'https://www.google.com';
isValidUrl(userUrl);
