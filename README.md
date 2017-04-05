

# BurgerSmash is An Express Server App For creating burgers and persisting the data with mySql server to the sql database using handlebars for html presentation.

BurgerSmash is an appliaction to create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. 
This full-stack site will take in results from users' inputs, then make their own burgers with. 
The app will then display the name and a button.

[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

  Fast, unopinionated, minimalist web framework for [node](http://nodejs.org)
  


```js
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
```

## Installation

```bash
$ npm install express
```

## Features

  * Robust routing
  * HTTP helpers (redirection, caching, etc)
  * Executable for generating applications quickly
    
## Docs & Community

  * [Website and Documentation](http://expressjs.com/) - [[website repo](https://github.com/expressjs/expressjs.com)]
  * [#express](https://webchat.freenode.net/?channels=express) on freenode IRC
  * [Github Organization](https://github.com/expressjs) for Official Middleware & Modules
  * Visit the [Wiki](https://github.com/expressjs/express/wiki)
  * [Google Group](https://groups.google.com/group/express-js)
  
## PROJECT SOURCE can be downloaded from http://github.com
[GitHub](https://github.com/VeenaRekhi/BurgerSmash.git)

## AUTHOR -- Veena Rekhi  

## LICENSE -- READ LICENSE 

  
## Application Structure

- This app is following the "MVC" framework with "ORM - Objetc Relational Mapping!"
- `server.js` - The entry point to our application. This file defines our express server and connects it to the web. It also requires the routes and models we'll be using in the application.
- `config/` - This folder contains configuration for files as well as a central location for configuration variables like connection with sql database and orm.
- `routes/` - This folder contains the route definitions for our API. They contain
- `public/` - This folder contains the client side  "static" informartion for our server.
- `db` - This folder contains the stored informartion from the database for our server.
- `layout/` - This folder contains the handlebars structured files with client side  "static" informartion for our server.
- `controllers/` - This folder contains the controller required files.
