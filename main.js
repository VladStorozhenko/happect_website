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
    document.getElementById('contact-name').focus();
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

/*
 Language switcher scripts 
*/
let userLang = navigator.language || navigator.userLanguage;

function defineLanguage() {
    // TODO: ADD LINKS TO APPROPRIATE PAGES
    if(userLang.includes('ru')) {
        return 'RU';
    } else if(userLang.includes('en')) {
        return 'EN';
    } else if(userLang.includes('uk')) {
        return 'UA';
    } else {
        return 'EN';
    }
 }
 defineLanguage();

let chosenLanguageButton = document.querySelector('.chosen-language');
chosenLanguageButton.innerHTML = defineLanguage();


function showLanguageChoice() {
    if(userLang.includes('ru')) {
        document.querySelector('.language-ru').parentElement.removeChild(document.querySelector('.language-ru'));
    } else if(userLang.includes('en')) {
        document.querySelector('.language-en').parentElement.removeChild(document.querySelector('.language-en'));
    } else if(userLang.includes('uk')) {
        document.querySelector('.language-ua').parentElement.removeChild(document.querySelector('.language-ua'));
    } else {
        document.querySelector('.language-en').parentElement.removeChild(document.querySelector('.language-en'));
    }
    document.querySelector('.language-list').style.display = 'block';
}

chosenLanguageButton.addEventListener('click', showLanguageChoice);