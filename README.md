# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./Screenshot_1)

### Links

- Solution URL: [https://github.com/ivan-develops/newsletter-sign-up-with-success-message-main](https://github.com/ivan-develops/newsletter-sign-up-with-success-message-main)
- Live Site URL: [https://ivan-develops.github.io/newsletter-sign-up-with-success-message-main/](https://ivan-develops.github.io/newsletter-sign-up-with-success-message-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript functions

### What I learned

The button to close modal. It didn't let me close modal, it didn't works, even though the function and the listener are correct.
```
const modal__button = document.querySelector('.modal__button');
```
I finally tried changing the `.querySelector()` to `.getElementById()` and it worked.
```
const modal__button = document.getElementById('modal-closer');
```
It's more direct and secure when you know the element exists and is unique. It also avoids the risk of returning if the class is misspelled or the DOM hasn't rendered it yet.

### Useful resources

- Pixel Perfect Pro - You can trace the design image from the browser

## Author

- Website - [https://github.com/ivan-develops](https://github.com/ivan-develops)
- LinkedIn - [@ivanvargaso](https://www.linkedin.com/in/ivanvargaso/)
- Frontend Mentor - [@ivan-develops](https://www.frontendmentor.io/profile/ivan-develops)