# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Extra challenges](#extra-challenges)
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

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Extra challenges

As an extra challenge I will do the following things:

- Add smooth animations for better interactivity.
- Make the game accessible according to WCAG 2.1 standards, things like color contrast, clear element focus and the correct screen reader contexts.

### Screenshot

![social-preview-image](https://user-images.githubusercontent.com/3909046/188659932-70509658-5214-410e-a5b1-dec7c02d6778.png)

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/astro-wcag-accessibility-css-animations-and-vanilla-javascript-yYt6kptml_)
- [Live Site URL](https://markteekman.github.io/advice-generator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- WCAG 2.1 best practices
- CSS Animations
- Vanilla JavaScript
- Fetch API
- [Animations.css library](https://animate.style/)
- [Astro](https://astro.build) - Astro Static Site Generator
- [Accessible Astro Starter](https://github.com/markteekman/accessible-astro-starter) - My own starter template for Astro

### What I learned

- I wanted to try out a CSS Animations library for a change, instead of writing it myself. I used [Animations.css](https://animate.style/) for this project. I really like the library, it's easy to use and has a lot of animations to choose from. I used the `bounceIn` animation for the dice icon and the `fadeIn` animation for the advice text.

- I had a problem in Firefox that I couldn't get the latest quote, which seemed to have something to do with caching. I solved this by adding a `no-store` option to the fetch request.

```js
fetch('https://api.adviceslip.com/advice', { cache: 'no-store' })
```

### Continued development

Nothing at the moment.

### Useful resources

- [Animations.css](https://animate.style/) - This is a great library for CSS animations. It has a lot of animations to choose from and is easy to use.
- [Stack Overflow](https://stackoverflow.com/questions/29246444/fetch-how-do-you-make-a-non-cached-request) - This is a great resource for finding solutions to problems. I used it to find a solution for the Firefox caching problem.

## Author

- [Personal Website](https://www.markteekman.nl)
- [Frontend Mentor Profile](https://www.frontendmentor.io/profile/markteekman)
- [LinkedIn Profile](https://nl.linkedin.com/in/markteekman)
- [Twitter Profile](https://twitter.com/MarkTeekman)
- [GitHub Repositories](https://github.com/markteekman)
- [NPM Packages](https://www.npmjs.com/~markteekman)
- [CodePen Creations](https://codepen.io/markteekman)
