const form = document.getElementById('form');
const submit = document.getElementById('submit');
const modal = document.querySelector('.modal');
const email__input = document.getElementById('email__input');
const email__states = document.getElementById('email__states');



const showError = ( message )=> {
    email__states.innerText = message;
    email__states.classList.add('email__error-states');
    email__input.classList.add('invalid');
}

const isValidEmail = (email)=> {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  if(email__input.value === '') {
        showError('Email is required');        /* call function */
    } else if (!isValidEmail(email__input.value)) {
        showError('Email is not valid');
    } else {
        showSuccess(email__input.value , 'Avalible email');
    }

});

const showSuccess = (emailVerified , message)=> {
    modal.classList.add('active');
    const modal__email = modal.querySelector('.modal__email');
    modal__email.innerText = emailVerified;
    email__input.classList.add('valid');
    email__states.innerText = message;
    email__states.classList.add('email__succes-states');
}

const hideModal = ()=> {
    modal.classList.toggle('active');
}
// const modal__button = document.querySelector('.button__modal button');
const modal__button = document.getElementById('modal-closer');
modal__button.addEventListener('click',hideModal);
console.log(modal__button);