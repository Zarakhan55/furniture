function getCookie(name) {
    let cookieArr = document.cookie.split(";");
    for(let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        if(name === cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

// Function to set cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

// Check for cookie consent
if (!getCookie('cookieConsent')) {
    document.getElementById('cookieConsent').style.display = 'block';
}

// Accept cookies
document.getElementById('acceptCookies').onclick = function() {
    setCookie('cookieConsent', 'accepted', 30); // Cookie expires in 30 days
    document.getElementById('cookieConsent').style.display = 'none';
}

//signin
function signin() {
    alert("Sign in functionality will go here!");

 window.location.href = 'signin.html'; 
}

//cart

    let cartItems = 0; // Initialize cart items count

    function updateCartCount() {
        const cartCountElement = document.getElementById('cartCount');
        cartCountElement.textContent = `(${cartItems})`;

        if (cartItems === 0) {
            cartCountElement.style.color = 'red'; // Change color if empty
        } else {
            cartCountElement.style.color = 'black';
        }
    }

    function addItemToCart() {
        cartItems++; // Increment item count
        updateCartCount(); // Update the displayed count
    }

    updateCartCount(); 
//hero sildes
let currentIndex = 0;
const cards = document.querySelectorAll('.card');

function showSlide(index, direction) {
    cards.forEach((card, i) => {
        card.classList.remove('active', 'card-enter', 'card-exit', 'card-enter-active', 'card-exit-active');
        
        if (i === index) {
            card.classList.add('active', 'card-enter');
            setTimeout(() => {
                card.classList.add('card-enter-active');
            }, 0); // Trigger the transition
        } else if (i === (index + direction + cards.length) % cards.length) {
            card.classList.add('card-exit');
            setTimeout(() => {
                card.classList.add('card-exit-active');
            }, 0); // Trigger the transition
        }
    });
}

function changeSlide(direction) {
    const prevIndex = currentIndex;
    currentIndex = (currentIndex + direction + cards.length) % cards.length; // Wrap around

    showSlide(currentIndex, direction);
}


//ROTATE THE PRA
showSlide(currentIndex);

function animate_string(className) {
    var element = document.getElementsByClassName(className)[0];
    var textNode = element.getElementsByTagName('p')[0].childNodes[0]; 

    var text = textNode.data;

    setInterval(function () {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 100); 
}

animate_string('msg1');

//feedback
