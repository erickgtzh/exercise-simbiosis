# Simbiosis Interview Exercise 1

Using express.js, mysql and sequelize.js
Backend / DB
Do a CRUD with the table
Users
———
user_id Int
first_name string(50)
last_name string(50)
birthday date
password char(40)
gender_id tinyint


Genders (2 records Male Female) table Fixed
_____
gender_id
Name string(10)


# Files

Src: Contains all our project where we'll be available to see:
**Back-End**
-Controllers
__UserController: Out principal controller that contains the following methods:
- index: where our project starts
- delete: delete a User by ID
- create: create a User
- getUser: returns specific User by ID
- updateUser: updates specific User by ID
- List: returns all the Users

All of them are neccesary and used inside our project.

-Models
__database.js: using Sequelize it allow us connect and sync to our created database (if you don't have one you'll be able to download the .sql file to create yours)
__User.js: It contains our User object model, help us for retrieving data and make easier manage with Sequelize help.

-Routes
__api.js: API's that we used for our project
__web.js: Web routes for our logic and sequence project

-server.js: Important information for our express server like port, routes...

**Front-End**
-Views
__ejs
___index.ejs
___user.ejs: just add our bootstrap stylesheet and in case that you want to add some stuff like footer
__js:
___components
____User
_____Edit.js: Modify our user
_____Form.js: Add new user
_____List.js: The way that all users are displayed
____Main.js: Contains basis for our project like Header, Router, Switch and import all our most important User functions (Form, List, Edit)
____Nav.js: Our beautiful Header
___services
____User.js: Use only when it's neccesary using services
___app.js: starts our project


## How to run it?
First of all run 
*npm install* 
to get all the needed libraries based on our *package.json* file.
In case that you don't have a database you have to create it, you can download and run the *exercise.sql* file.
After that you've to generate webpack, based on our *package.json* file, run:
*npm start*
after that you'll be ready to run project running the following:
*npm run dev*
