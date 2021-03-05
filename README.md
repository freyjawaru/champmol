# champmol
A full-stack app beginning to track the manuscripts made by and for the monks of the Chartreuse de Champmol

# Overview

Manuscripts of the Chartreuse de Champmol is an full-stack application that stores and allows people to create records of manuscripts made by and for the monks of the Chartreuse de Champmol. Since the library was broken and scattered all over the world, beginning in the early nineteenth century, leaves, fragments, and codices can be anywhere. Now it's time to start keeping track!


# Component Hierarchy


src
|__ App.js/
|__ Main/
       |__Main.jsx
       |__Main.css
|__ components/
    |__Header/
       |__Header.jsx
       |__Header.css
    |__ Nav/
       |__Nav.jsx
       |__Header.css
    |__ Login/
       |__Login.jsx
       |__Login.css
    |__ Register/
       |__Register.jsx
       |__Register.css
    |__Items/
       |__ CreateItem/
          |__ CreateItem.jsx
          |__ CreateItem.css
       |__ ShowItems/
          |__ ShowItems.jsx
          |__ ShowItems.css
       |__ Item/
          |__ Item.jsx
          |__ Item.css
       |__ UpdateItem/
          |__ UpdateItem.jsx
          |__ UpdateItem.jsx
       |__ DeleteItem/
          |__ DeleteItem.jsx
          |__ DeleteItem.css
    |__Users/
       |__ CreateUser/
          |__ CreateUser.jsx
          |__ CreateUser.css
       |__ ShowUser/
          |__ ShowUser.jsx
          |__ ShowUser.css
       |__ UpdateUser/
          |__ UpdateUser.jsx
          |__ UpdateUser.jsx
       |__ DeleteUser/
          |__ DeleteUser.jsx
          |__ DeleteUser.css
    |__Comments/
      |__ CreateComments/
          |__ CreateComments.jsx
          |__ CreateComments.css
       |__ ShowComments/
          |__ ShowComments.jsx
          |__ ShowComments.css
       |__ UpdateComments/
          |__ UpdateComments.jsx
          |__ UpdateComments.jsx
       |__ DeleteComments/
          |__ DeleteComments.jsx
          |__ DeleteComments.css
|__ services/
    |__api-helper.js
    |__manuscripts.js
    |__users.js
    |__comments.js



# Component Tree

https://whimsical.com/manuscripts-app-Jrv5KgT9uHmCorCZDN5oZ3

![Imgur](https://i.imgur.com/xwBeMnC.png)

# Component Breakdown

Component	Type	state	props	Description
Header	functional	n	n	The header will contain the navigation and logo.
Nav	functional	y	n	The navigation will provide a link to about, register, login, and search
Main	functional	y	y	The main will render the site using cards in flexbox and house the methods to be passed as props.
Login/Register	functional	n	y	The user will be able to register for and login into their account.
Manuscripts	functional	n	y	The tiles will render the manuscript images via props.
User	functional	n	y	The user will be able to create their account and access a profile.
Comments	functional	n	y	The comments will render with new manuscript information, images, and descriptions provided by users.

# Frontend
# Wireframes

![Imgur](https://i.imgur.com/xvfYBNr.png)

![Imgur](https://i.imgur.com/i9WmiC5.png)

![Imgur](https://i.imgur.com/0iP7ys9.png)

![Imgur](https://i.imgur.com/1jhTPMw.png)

# Time estimates


Task	Priority	Estimated Time	Time Invested	Actual Time
Add Sign Up/Login Form	L	2 hrs	TBD hrs	TBD
Create Front-End CRUD Actions	H	20 hrs	TBD hrs	TBD
Create Back-End CRUD Actions	H	12 hrs	TBD hrs	TBD
Create seed data	M	6 hrs	TBD hrs	TBD
Add Front-End CSS (boilerplate)	L	4 hrs	TBD hrs	TBD
Add Front-End CSS (advanced)	H	12 hrs	TBD hrs	TBD
Post-MVP	M	25 hrs	TBD hrs	TBD
QA & Test application	M	6 hrs	TBD hrs	TBD
Deployment	H	5 hrs	TBD hrs	TBD
TOTAL		73 hrs	TBD hrs	TBD

# Server Back End ERD Model

![Imgur](https://i.imgur.com/Igh0fXy.png)

# Post-MVP

*Implement full CRUD on the User and Comments components
*Include authentication for Users
*Advanced CSS with hovers and possible changes varying state

# Code showcase

# Code issues and resolutions
