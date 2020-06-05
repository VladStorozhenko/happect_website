/*
 HAPPECT MAIN JS FILE.
*/

/*
 Contact form scripts 
*/
// opening contact form 
let contactFormButton = document.querySelector('.contact-button-wrapper');

function showForm() {
    document.querySelector('.contact-form-wrapper-hide').classList = 'contact-form-wrapper-show';
    document.querySelector('.contact-button').style.display = 'none';
    document.querySelector('.close-form').style.display = 'block';
    contactFormButton.removeEventListener('click', showForm);
    contactFormButton.addEventListener('click', hideForm);
}

function hideForm() {
    document.querySelector('.contact-form-wrapper-show').classList = 'contact-form-wrapper-hide';
    document.querySelector('.contact-button').style.display = 'block';
    document.querySelector('.close-form').style.display = 'none';
    contactFormButton.removeEventListener('click', hideForm);
    contactFormButton.addEventListener('click', showForm);
}
contactFormButton.addEventListener('click', showForm);

// getting the way of answering 
let mailOption = document.getElementById('contact-email');
let telegramOption = document.getElementById('contact-telegram');
let viberOption = document.getElementById('contact-viber');

function getAnswerWay(form, name) {
    let val;
    // get list of radio buttons
    let options = form.elements[name];

    for (let i = 0; i < options.length; i++) {
        if(options[i].checked) {
            val = options[i].value;
        }
    }
    if(val == 'telegram') {
        document.getElementById('client-telegram').style.display='block';
        document.getElementById('client-viber').style.display='none';
        document.getElementById('client-email').style.display='none';
        document.getElementById('client-telegram').required = true;
        document.getElementById('client-viber').required = false;
        document.getElementById('client-email').required = false;
    } else if(val == 'mail') {
        document.getElementById('client-email').style.display='block';
        document.getElementById('client-telegram').style.display='none';
        document.getElementById('client-viber').style.display='none';
        document.getElementById('client-email').required = true;
        document.getElementById('client-telegram').required = false;
        document.getElementById('client-viber').required = false;
    } else if(val == 'viber') {
        document.getElementById('client-viber').style.display='block';
        document.getElementById('client-telegram').style.display='none';
        document.getElementById('client-email').style.display='none';
        document.getElementById('client-viber').required = true;
        document.getElementById('client-telegram').required = false;
        document.getElementById('client-email').required = false;
    }
}

mailOption.addEventListener('click', function() {
    getAnswerWay(document.querySelector('.contact-form'), 'contact-way');
});
telegramOption.addEventListener('click', function() {
    getAnswerWay(document.querySelector('.contact-form'), 'contact-way');
});
viberOption.addEventListener('click', function() {
    getAnswerWay(document.querySelector('.contact-form'), 'contact-way');
});