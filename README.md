# champmol
A full-stack app beginning to track the manuscripts made by and for the monks of the Chartreuse de Champmol

# Overview

Manuscripts of the Chartreuse de Champmol is an full-stack application that stores and allows people to create records of manuscripts made by and for the monks of the Chartreuse de Champmol. Since the library was broken and scattered all over the world, beginning in the early nineteenth century, leaves, fragments, and codices can be anywhere. Now it's time to start keeping track!


# Component Hierarchy


src

|\_\_ App.js/

|\_\_ Main/

|\_\_Main.jsx

|\_\_Main.css

|\_\_ components/

|\_\_Header/

|\_\_Header.jsx

|\_\_Header.css

|\_\_ Nav/

|\_\_Nav.jsx

|\_\_Header.css

|\_\_ Login/

|\_\_Login.jsx

|\_\_Login.css

|\_\_ Register/

|\_\_Register.jsx

|\_\_Register.css

|\_\_Items/

|\_\_ CreateItem/

|\_\_ CreateItem.jsx

|\_\_ CreateItem.css

|\_\_ ShowItems/

|\_\_ ShowItems.jsx

|\_\_ ShowItems.css

|\_\_ Item/

|\_\_ Item.jsx

|\_\_ Item.css

|\_\_ UpdateItem/

|\_\_ UpdateItem.jsx

|\_\_ UpdateItem.jsx

|\_\_ DeleteItem/

|\_\_ DeleteItem.jsx

|\_\_ DeleteItem.css

|\_\_Users/

|\_\_ CreateUser/

|\_\_ CreateUser.jsx

|\_\_ CreateUser.css

|\_\_ ShowUser/

|\_\_ ShowUser.jsx

|\_\_ ShowUser.css

|\_\_ UpdateUser/

|\_\_ UpdateUser.jsx

|\_\_ UpdateUser.jsx

|\_\_ DeleteUser/

|\_\_ DeleteUser.jsx

|\_\_ DeleteUser.css

|\_\_Comments/

|\_\_ CreateComments/

|\_\_ CreateComments.jsx

|\_\_ CreateComments.css

|\_\_ ShowComments/

|\_\_ ShowComments.jsx

|\_\_ ShowComments.css

|\_\_ UpdateComments/

|\_\_ UpdateComments.jsx

|\_\_ UpdateComments.jsx

|\_\_ DeleteComments/

|\_\_ DeleteComments.jsx

|\_\_ DeleteComments.css

|\_\_ services/

|\_\_api-helper.js

|\_\_manuscripts.js

|\_\_users.js

|\_\_comments.js


# Component Tree

https://whimsical.com/manuscripts-app-Jrv5KgT9uHmCorCZDN5oZ3

![Imgur](https://i.imgur.com/xwBeMnC.png)

# Component Breakdown

| Component      | Type       | state | props | description                                                                                           |
|----------------|------------|-------|-------|-------------------------------------------------------------------------------------------------------|
| Header         | functional | n     | n     | The header will contain the navigation and logo.                                                      |
| Nav            | functional | y     | n     | The navigation will provide a link to about, register, login, and search                              |
| Main           | functional | y     | y     | The main will render the site using cards in flexbox and house the methods to be passed as props.     |
| Login/register | functional | n     | y     | The user will be able to register for and login into their account.                                   |
| Manuscripts    | functional | n     | y     | The tiles will render the manuscript images via props.                                                |
| User           | functional | n     | y     | The user will be able to create their account and access a profile.                                   |
| Comments       | functional | n     | y     | The comments will render with new manuscript information, images, and descriptions provided by users. |


# Frontend
# Wireframes

![Imgur](https://i.imgur.com/xvfYBNr.png)

![Imgur](https://i.imgur.com/i9WmiC5.png)

![Imgur](https://i.imgur.com/0iP7ys9.png)

![Imgur](https://i.imgur.com/1jhTPMw.png)

# Time estimates


| Task                  | Priority | Est Time | Time Invested | Actual Time |
|-----------------------|----------|----------|---------------|-------------|
| Add Signup/Login Form | L        | 2        | tbd           | tbd         |
| create front-end crud | H        | 20       | tbd           | tbd         |
| Create back-end crud  | H        | 12       | tbd           | tbd         |
| Create seed data      | M        | 6        | tbd           | tbd         |
| Add-front-end css     | L        | 14       | tbd           | tbd         |
| Post-MVP              | H        | 25       | tbd           | tbd         |
| QA and testing        | M        | 6        | tbd           | tbd         |
| Deployment            | H        | 4        | tbd           | tbd         |
| Total                 |          | 89       | tbd           | tbd         |



# Server Back End ERD Model

![Imgur](https://i.imgur.com/Igh0fXy.png)

# Post-MVP

*Implement full CRUD on the User and Comments components
*Include authentication for Users
*Advanced CSS with hovers and possible changes varying state

# Code showcase

# Code issues and resolutions
