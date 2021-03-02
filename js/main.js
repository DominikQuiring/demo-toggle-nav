/* Step 1: query (search) the document and select the element 
the user will click on to make the nav show and hide*/
const button = document.querySelector('.hamburger-btn');

/* Step 2: place a click even on the button */

button.addEventListener('click', () => {
    /* When the button is clicked, grab the nav element
    and add the class name */
    document.querySelector('nav').classList.toggle('show-nav');
});

/* note: when place a class name inside the classList method do not include
the . (period) it will already expect a class name*/