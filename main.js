/*
 HAPPECT MAIN JS FILE.
*/
/*
    HOW WE WORK SCRIPTS 
*/
/*
 ! GLOBAL VARIABLES 
*/
const defaultTransitionDuration = 230; // milliseconds
const body = document.getElementsByTagName('body')[0];

SmoothScroll({ 
    stepSize          : 120,
    animationTime     : 600,    // [ms]
    keyboardSupport   : true,   // option
    arrowScroll       : 125,    // [px]
    accelerationDelta : 50, 
    accelerationMax   : 3,
    pulseScale       : 4   
});
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
    document.getElementsByTagName('html')[0].classList.add('no-scroll');
    if(window.innerHeight < 700) {
        header.classList = 'no-header';
    }
}

function hideForm() {
    document.querySelector('.contact-form-wrapper-show').classList = 'contact-form-wrapper-hide';
    document.querySelector('.contact-button').style.display = 'block';
    document.querySelector('.close-form').style.display = 'none';
    contactFormButton.removeEventListener('click', hideForm);
    contactFormButton.addEventListener('click', showForm);
    document.getElementById('contact-name').blur();
    document.getElementsByTagName('html')[0].classList.remove('no-scroll');
    if(window.innerHeight < 700) {
        header.classList = 'happect-header';
    }
    setTimeout(function(){
        document.querySelector('.contact-form-wrapper-hide').style.display = 'none';
    }, defaultTransitionDuration);
}
contactFormButton.addEventListener('click', showForm);

// getting the way of answering 
let mailOption = document.getElementById('contact-email');
let telegramOption = document.getElementById('contact-telegram');
let viberOption = document.getElementById('contact-viber');

function getAnswerWay(form, name, appendix = '') {
    let val;
    // get list of radio buttons
    let options = form.elements[name];

    for (let i = 0; i < options.length; i++) {
        if(options[i].checked) {
            val = options[i].value;
        }
    }
    if(val == 'telegram') {
        document.getElementById(appendix + 'client-telegram').style.display='block';
        document.getElementById(appendix + 'client-viber').style.display='none';
        document.getElementById(appendix + 'client-email').style.display='none';
        document.getElementById(appendix + 'client-telegram').required = true;
        document.getElementById(appendix + 'client-viber').required = false;
        document.getElementById(appendix + 'client-email').required = false;
    } else if(val == 'mail') {
        document.getElementById(appendix + 'client-email').style.display='block';
        document.getElementById(appendix + 'client-telegram').style.display='none';
        document.getElementById(appendix + 'client-viber').style.display='none';
        document.getElementById(appendix + 'client-email').required = true;
        document.getElementById(appendix + 'client-telegram').required = false;
        document.getElementById(appendix + 'client-viber').required = false;
    } else if(val == 'viber') {
        document.getElementById(appendix + 'client-viber').style.display='block';
        document.getElementById(appendix + 'client-telegram').style.display='none';
        document.getElementById(appendix + 'client-email').style.display='none';
        document.getElementById(appendix + 'client-viber').required = true;
        document.getElementById(appendix + 'client-telegram').required = false;
        document.getElementById(appendix + 'client-email').required = false;
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

let chosenLanguageButton = document.querySelector('.chosen-language');


function showLanguageChoice() { 
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
        document.querySelector('.language-list-hidden').style.display = 'none';
    }, 50);
}

chosenLanguageButton.addEventListener('click', showLanguageChoice);

// ! MAIN FORM

let mainMailOption, mainTelegramOption, mainViberOption;
mainMailOption = document.getElementById('main-contact-email');
mainTelegramOption = document.getElementById('main-contact-telegram');
mainViberOption = document.getElementById('main-contact-viber');

mainMailOption.addEventListener('click', mainFormChooseAnswerMethod);
mainTelegramOption.addEventListener('click', mainFormChooseAnswerMethod);
mainViberOption.addEventListener('click', mainFormChooseAnswerMethod);

function mainFormChooseAnswerMethod() {
    getAnswerWay(document.querySelector('.main-form'), 'main-contact-way', 'main-');
}
