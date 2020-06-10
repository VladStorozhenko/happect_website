/*
 HAPPECT MAIN JS FILE.
*/
/*
 ! GLOBAL VARIABLES 
*/
const defaultTransitionDuration = 230; // milliseconds
const body = document.getElementsByTagName('body')[0];
/*
 Header scripts 
*/
let header = document.querySelector('.happect-header');

window.addEventListener('scroll', changeHeaderOnScroll);

function changeHeaderOnScroll() {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.background = '#231F20';
    } else {
        header.style.background = '#3A3A3A';
    }
}

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
    document.querySelector('.contact-form-wrapper-show').style.display = 'block';
}

function hideForm() {
    document.querySelector('.contact-form-wrapper-show').classList = 'contact-form-wrapper-hide';
    document.querySelector('.contact-button').style.display = 'block';
    document.querySelector('.close-form').style.display = 'none';
    contactFormButton.removeEventListener('click', hideForm);
    contactFormButton.addEventListener('click', showForm);
    setTimeout(function(){
        document.querySelector('.contact-form-wrapper-hide').style.display = 'none';
    }, defaultTransitionDuration);
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
// default language
let defaultLang = 'EN';
let defaultLangPrefix = 'en';

function defineLanguage() {
    // TODO: ADD LINKS TO APPROPRIATE PAGES
    if(userLang.includes('ru')) {
        return 'RU';
    } else if(userLang.includes('en')) {
        return 'EN';
    } else if(userLang.includes('uk')) {
        return 'UA';
    } else {
        return defaultLang;
    }
 }
 defineLanguage();

let chosenLanguageButton = document.querySelector('.chosen-language');
chosenLanguageButton.innerHTML = defineLanguage();


function showLanguageChoice() { 
    switch (userLang) {
        case 'ru':
            document.querySelector('.language-ru').style.display = 'none';
            break;
        case 'en':
            document.querySelector('.language-en').style.display = 'none';
            break;
        case 'uk': 
            document.querySelector('.language-ua').style.display = 'none';
            break;
        default: 
            document.querySelector(`.language-${defaultLangPrefix}`).style.display = 'none'
    }
    document.querySelector('.language-list-hidden').classList = 'language-list-shown';
    chosenLanguageButton.removeEventListener('click', showLanguageChoice);
    chosenLanguageButton.addEventListener('click', hideLanguageChoice);
    document.querySelector('.language-list-shown').style.display = 'block';
}

function hideLanguageChoice() {
    document.querySelector('.language-list-shown').classList = 'language-list-hidden';
    chosenLanguageButton.removeEventListener('click', hideLanguageChoice);
    chosenLanguageButton.addEventListener('click', showLanguageChoice);
    setTimeout(function(){
        switch (userLang) {
            case 'ru':
                document.querySelector('.language-ru').style.display = 'block';
                break;
            case 'en':
                document.querySelector('.language-en').style.display = 'block';
                break;
            case 'uk': 
                document.querySelector('.language-ua').style.display = 'block';
                break;
            default: 
                document.querySelector(`.language-${defaultLangPrefix}`).style.display = 'block'
        }
        document.querySelector('.language-list-hidden').style.display = 'none';
    }, 50);
}

chosenLanguageButton.addEventListener('click', showLanguageChoice);