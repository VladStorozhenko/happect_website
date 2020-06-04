/*
 HAPPECT MAIN JS FILE.
*/

/*
 Contact form scripts 
*/

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
    } else if(val == 'mail') {
        document.getElementById('client-email').style.display='block';
        document.getElementById('client-telegram').style.display='none';
        document.getElementById('client-viber').style.display='none';
    } else if(val == 'viber') {
        document.getElementById('client-viber').style.display='block';
        document.getElementById('client-telegram').style.display='none';
        document.getElementById('client-email').style.display='none';
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