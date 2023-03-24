# ArtMart

![badmath](https://img.shields.io/github/license/abbeydoyle/artmart?color=pink&style=plastic)

An online shop for an artist's work and also where freelance and upcoming artists showcasing their art for consumer’s to view and purchase.

## Description

This project implements the MERN stack to create an art print ecommerce website. React was used to render the front end with TailwindCSS styling, the server  created with GraphQL, Express.js, and Node.js, and the database implemented with MongoDB and Mongoose ODM. Cloudinary was used to host images and Stripe was implemented as a payment platform. Finally, the application was deployed using Heroku. Through mutations and queries, an online shopper can browse art, add things to their own cart while logged in, and checkout with Stripe. All of these features are saved to a user's profile and available upon later login. 

This project allowed five contributors to in turn test the pair programming model, work in branches, and merge each individual coding style into the larger collaboration project. Further, it solidified the working knowledge of node, it's dependencies, Tailwind CSS styling, and introduced the Stripe payment platform.

<!-- Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn? -->

## Table of Contents

<!-- If your README is long, add a table of contents to make it easy for users to find what they need. -->

- [User Story](#userstory)
- [Installation](#installation)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [Tests](#tests)
- [Questions](#questions)

## UserStory

As an art fan<br>
I want to have a website where I can find unique prints from artists<br>
So THAT I can purchase them and display them in my home.<br>

WHEN I first open the app <br>
THEN I see the landing page of art available to purchase<br>
WHEN I view the navbar while not signed in<br>
THEN I see links to login/signup and prints pages<br>
WHEN I view the navbar while signed in<br>
THEN I see links to prints and my cart pages<br>
WHEN I click the login button<br>
THEN I am redirected to a login page with an option to sign up<br>
WHEN I click the prints page<br>
THEN I am redirected to a card portfolio of prints available to purchase<br>
WHEN I click the profile page<br>
THEN I am redirected to a page with my shipping address, email, password, wishlist, and past orders<br>
WHEN I click the view cart page<br>
THEN I see all prints in my cart with thumbnail images, artist info, quantity, individual prices, and a subtotal<br>
WHEN I hit the “add to cart” button while signed in<br>
THEN I am redirected to my cart page where that item is added<br>
WHEN I attempt to checkout without being signed in<br>
THEN I am redirected to log in<br>


## Installation

### Visit The Deployed Application
Follow this [link](https://devartmart.herokuapp.com) to visit the app and create an account by entering a username and password at the main page. Once you're logged in, you can browse the art, create an account, add items to your cart, and checkout! Log back in at any time to see items left in your cart or to make another purchase.

### How to Install Locally
<!-- What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. -->
1. From the GitHub repository, copy code from the <> Code button
2. Clone locally using CLI or VSCode terminal
3. Ensure all necessary technology is installed (mySQL, Node.js)
4. Install dependancies using NPM i
5. Be sure to run Schema.sql through mySQL and start the server before testing
6. Run application in your browser locally using "http://localhost:3001/"
5. Play as you'd like!


<!-- Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ``` -->

## Credits

This webpage was built using UW Trilogy Bootcamp class materials as references.

There are five contributors to this project. Each member along with their contributions are listed below.

- Faruk Ajiya: React, Stripe

- Nathan Cruz: React

- Abigail Doyle: React, Cloudinary, TailwindCSS

- Sylvia Ely: React, Stripe, Models

- Hoon Kim: Apollo, GraphQL, Models


## License

MIT License

Copyright (c) 2022 abbeydoyle

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

<!-- The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/). -->

---

<!-- 🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections. -->

## Badges

![badmath](https://img.shields.io/github/repo-size/abbeydoyle/artmart?color=pink&style=plastic)

![badmath](https://img.shields.io/github/issues-closed-raw/abbeydoyle/artmart?color=pink&style=plastic)

![badmath](https://img.shields.io/github/issues-raw/abbeydoyle/artmart?color=pink&style=plastic)

![badmath](https://img.shields.io/github/license/abbeydoyle/artmart?color=pink&style=plastic)

![badmath](https://img.shields.io/github/commits-since/abbeydoyle/artmart/b4c7322/main?color=pink&style=plastic)

![badmath](https://img.shields.io/github/last-commit/abbeydoyle/artmart?color=pink&style=plastic)

![badmath](https://img.shields.io/maintenance/yes/2023?color=pink&style=plastic)


<!-- ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time. -->

## Features

This page features:

- MERN stack
- React rendering with TailwindCSS styling
- GraphQL with a Node.js and Express.js server
- MongoDB and the Mongoose ODM for the database
- Queries and mutations for retrieving, adding, updating, and deleting data
- Session authentication
- Deployment with Heroku
- Stripe payment process
- Cloudinary image hosting
- Mobile first webpage design
- Navbar with navigation links responsive to the current page open
- Log in, sign up, and log out modals
- Cart specific to each user
- Art specific pages with further information and add to cart capabilities
- Conditional cart rendering based on session and cart length authentication


<!-- If your project has a lot of features, list them here. -->

<!-- ## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer. -->

## Tests

<!-- Go the extra mile and write tests for your application. Then provide examples on how to run them here. -->

- Test the application on various screen sizes to see a mobile-first design
- Scroll on any page and watch the sidebar and navbar stay in postion
- Click any navbar links, including our Logo, to be redirected to the appropriate page
- Sign up as a new user and log in at a later time to view art or checkout with items left in your cart
- Click on any of the art pieces to see further information
- Select a size and add your piece of art to your cart
- Go through the checkout process through Stripe
- View the conditional rendering in your cart by viewing the page in various states (empty cart, logged out, etc.)
- Click out of the modal elements to dismiss them
- Toggle between the log in and sign up modals depending on your needs

## Questions

Feel free to submit pull requests at the repo or send us an email with any questions you have.

GitHub Repo: https://github.com/abbeydoyle/artmart.git

Contributers: Faruk Ajiya, Nathan Cruz, Abigail Doyle, Sylvia Ely, Hoon Kim

Emails: Ajiyafaruk@gmail.com, natecruz9@gmail.com, abigaildoyle3@gmail.com, sylvianne9417@gmail.com, hoael8@gmail.com

GitHub Profiles: https://github.com/Ajiya7, https://github.com/crzn24, https://github.com/abbeydoyle, https://github.com/sely1724, https://github.com/hkim84
