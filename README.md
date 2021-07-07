# theDopeOnDev

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The Dope on Dev is a blog site application based on Node.js, Handlebars.js, and other technologies. It is deployed on Heroku: 

  [https://secure-ridge-69918.herokuapp.com/login](https://secure-ridge-69918.herokuapp.com/login)

See [Description](#description) below for more information.

## Table of Contents

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Description](#description)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Installation](#installation)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Usage](#usage)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[License](#license)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Contributing](#contributing)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Questions](#questions)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Screenshot](#screenshot)<br/>

## Description

The Dope on Dev site enables you to view, add, and edit blog posts. This app follows the MVC paradigm and uses the following technologies:

- [Node.js](https://nodejs.org/), which is the JavaScript runtime used for the server
- The [mysql2](https://www.npmjs.com/package/mysql2) npm package (a "Node.js driver for MySQL) to interface with the MySQL database
- The [dotenv](https://www.npmjs.com/package/dotenv) npm package to hide user and password information for MySQL
- [Handlebars.js](https://handlebarsjs.com/), which is the templating language used for this app
- [Express.js](https://expressjs.com/), a web framework for Node.js 
  The [express-handlebars](https://www.npmjs.com/package/express-handlebars) npm package, which is a Handlebars view engine for Express.js 
- The [express-session](https://www.npmjs.com/package/express-session) npm package, which is the object-relational management (ORM) component for this app
- [Heroku](https://www.heroku.com), which is the deployment site for this app
- [Sequelize.js](https://sequelize.org/), which is a "promise-based Node.js ORM" for MySQL (and other databases)
- The [bcrypt](https://www.npmjs.com/package/bcrypt) npm package for encrypting/decrypting user passwords
- The [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) npm package, which is a SQL session store for Sequelize.js

The Dope on Dev web app accesses a MySQL database named techblog_db. (On Heroku, the app uses JawsDB for MySQL.) The code to create and use the MySQL database is in /db/schema.sql. Code to seed this database is in the seeds directory, which can be run by using the following command:
```
   node ./seeds/seed.js
```

## Installation 

To install theDopeOnDev project, 

1. Clone this repository.
2. At a command prompt in the root directory for the project, run the following command, which will install the npm packages listed above:
```
   npm install
```
3. Create a MySQL database as describe in [Description](#description) above. The port used for this is 3303 (as defined in server.js).

## Usage 

To run enter the following at a command prompt in the root directory for the project: 
```
npm start    
```

## License

TheDopeOnDev project is covered under The MIT License. Click the license badge below for information on this license:

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contributing

In general, outside contributions are not being accepted since this project is for educational purposes. 

## Questions

Send questions to mjlinder218@gmail.com. 
For more information about the developer, see https://github.com/mlin901.

## Screenshot 

![TeamTracker application screenshot](./resources/TeamTrackerScreenshot.jpg)
* ------> ****Replace createDate with real date mechanism
* ------> ****Add last-edited date?


GIVEN a CMS-style blog site
done |WHEN I visit the site for the first time
     |THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
done |WHEN I click on the homepage option
     |THEN I am taken to the homepage
done |WHEN I click on any other links in the navigation
     |THEN I am prompted to either sign up or sign in
done |WHEN I choose to sign up
     |THEN I am prompted to create a username and password
done |WHEN I click on the sign-up button
     |THEN my user credentials are saved and I am logged into the site
done |WHEN I revisit the site at a later time and choose to sign in
     |THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
done |WHEN I click on the homepage option in the navigation
     |THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
done  |WHEN I click on the logout option in the navigation
      |THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments