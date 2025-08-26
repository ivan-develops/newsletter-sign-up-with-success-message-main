const submit = document.getElementById('submit');
const modal = document.querySelector('.modal');
const modal__button = document.querySelector('.button__modal');

// onsubmit form
const form = document.getElementById('form');
function handleSubmit(e) {
  e.preventDefault() // prevent the default behaviour
}

form.addEventListener('submit', handleSubmit);
//


const showModal = ()=> {
    modal.classList.toggle('active');
}

const hideModal = ()=> {
    modal.classList.toggle('active');
}

submit.addEventListener( 'click' , showModal );
modal__button.addEventListener( 'click' , hideModal );