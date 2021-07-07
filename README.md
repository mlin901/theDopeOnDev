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