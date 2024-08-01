//Activity 3 - Grouping and Capturing
//Task 5

function extractPhoneNumberParts(phoneNumber) {
    const regex = /(\(\d{3}\)|\d{3})[-\s]?(\d{3})[-\s]?(\d{4})/;

    const match = phoneNumber.match(regex);
    if (match) {
        const [_, areaCode, centralOfficeCode, lineNumber] = match;
        console.log('Area Code:', areaCode);
        console.log('Central Office Code:', centralOfficeCode);
        console.log('Line Number:', lineNumber);
    } else {
        console.log('Invalid phone number format.');
    }
}

// Example usage:
const phoneNumber1 = '(123) 456-7890';
const phoneNumber2 = '987-654-3210';

extractPhoneNumberParts(phoneNumber1);
extractPhoneNumberParts(phoneNumber2);

//Task 6
function extractEmailParts(email) {
    const regex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)$/;

    const match = email.match(regex);
    if (match) {
        const [_, username, domain] = match;
        console.log('Username:', username);
        console.log('Domain:', domain);
    } else {
        console.log('Invalid email address format.');
    }
}

// Example usage:
const emailAddress = 'aniket.paul618@gmail.com';
extractEmailParts(emailAddress);
