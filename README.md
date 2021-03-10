
# Simbiosis Interview Exercise 1

Using express.js, mysql and sequelize.js
<br />
Backend / DB
<br />
Do a CRUD with the table
<br />
<br />
Users
———
user_id Int
<br />
first_name string(50)
<br />
last_name string(50)
<br />
birthday date
<br />
password char(40)
<br />
gender_id tinyint
<br />
<br />

Genders (2 records Male Female) table Fixed
<br />
_____
gender_id
<br />
Name string(10)
<br />


# Files
Src: Contains all our project where we'll be available to see:
<br />
**Back-End**
<br />
-Controllers
<br />
__UserController: Out principal controller that contains the following methods:
<br />
- index: where our project starts
<br />
- delete: delete a User by ID
<br />
- create: create a User
<br />
- getUser: returns specific User by ID
<br />
- updateUser: updates specific User by ID
<br />
- List: returns all the Users

All of them are neccesary and used inside our project.
<br />
-Models
<br />
__database.js: using Sequelize it allow us connect and sync to our created database (if you don't have one you'll be able to download the .sql file to create yours)
<br />
__User.js: It contains our User object model, help us for retrieving data and make easier manage with Sequelize help.
<br />
-Routes
<br />
__api.js: API's that we used for our project
<br />
__web.js: Web routes for our logic and sequence project
<br />

-server.js: Important information for our express server like port, routes...
<br />
**Front-End**
<br />
-Views
<br />
__ejs
<br />
___index.ejs
<br />
___user.ejs: just add our bootstrap stylesheet and in case that you want to add some stuff like footer
<br />
__js:
<br />
___components
<br />
____User
<br />
_____Edit.js: Modify our user
<br />
_____Form.js: Add new user
<br />
_____List.js: The way that all users are displayed
<br />
____Main.js: Contains basis for our project like Header, Router, Switch and import all our most important User functions (Form, List, Edit)
<br />
____Nav.js: Our beautiful Header
<br />
___services
<br />
____User.js: Use only when it's neccesary using services
<br />
___app.js: starts our project
<br />
<br />
## How to run it?
<br />
First of all run:
<br />
*npm install* 
<br />
<br />
to get all the needed libraries based on our *package.json* file.
In case that you don't have a database you have to create it, you can download and run the *exercise.sql* file. 
<br />
After that you've to generate webpack, based on our *package.json* file, run:
<br />
<br />
*npm start*
<br />
<br />
after that you'll be ready to run project running the following:
<br />
<br />
*npm run dev*
<br />
