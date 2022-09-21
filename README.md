<div id="top" align="center">
  <h1>Express API</h1>
  <p>A simple and improved api with <a href="https://expressjs.com">ExpressJS</a>.</p>
</div>

<div align="center">
  <img alt="Language" src="https://img.shields.io/badge/Language-javascript-yellow.svg?style=for-the-badge"/>
  <img alt="PyVersion" src="https://img.shields.io/badge/Node.JS_version-16.x-green.svg?style=for-the-badge&logo=node.JS"/>
</div>

<div id="glossary">
  <h2>📚 | Glossary</h2>
  <ul>
    <li><a href="#dependencies">Dependencies</a></li>
    <li><a href="#howToStart">How to Start</a></li>
    <li><a href="#routes">Routes</a></li>
    <li><a href="#controllersModels">Controllers & Models</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#author">Author</a></li>
  </ul>
</div>

<div id="dependencies">
  <h2>🗃 | Dependecies</h2>
  <table>
    <tr>
      <th>Dependencie</th>
      <th>Version</th>
    </tr>
    <tr>
      <td>cookie-parser</td>
      <td>~1.4.4</td>
    </tr>
    <tr>
      <td>cors,</td>
      <td>^2.8.5</td>
    </tr>
    <tr>
      <td>dotenv</td>
      <td>^16.0.2</td>
    </tr>
    <tr>
      <td>express</td>
      <td>~4.16.1</td>
    </tr>
    <tr>
      <td>morgan</td>
      <td>~1.9.0</td>
    </tr>
    <tr>
      <td>nodemon</td>
      <td>^2.0.2</td>
    </tr>
  </table>
</div>

<div id="howToStart"></div>

## ❓ | How to Start?

First let's clone the repository.

```shell
$ git clone https://github.com/Ahosall/express-api-template.git
```

Go to the directory where the project was cloned and we will install the dependencies.

```shell
$ npm install
```

To start the project there are two ways:

- Production:

  ```shell
  $ npm start
  ```

- Development:
  ```shell
  $ npm run dev
  ```

<div id="routes"></div>

## 📶 | Routes

I made some changes in the structure of both the code and the folders. The routes are in the src > routes folder. To keep a pattern of files I made a treatment to get the first name of the file.

> Example:
>
> `clients.route.js`

The route in the middle of the names is not mandatory, it's just a way of organizing :>

The code inside each file follows the following structure:

```JS
module.exports = [
   {
     path: "/", // Path of the route
     method: "GET", // Method to execute the route
     router: (req, res) => { // Where the magic happens~
         res.json({message: "Hiii, world!"})
     },
   },
]
```

I did it this way to avoid having to import the router function from express... and to maintain a greater view. :>

<div id="controllersModels"></div>

## 🛂 | Controllers & Models

Well, controllers and models follow the same patterns as always, feel free to create an issue with a new way of programming! :>

If you find bugs, report them in the issues. \\(￣︶￣\*\\)

## 🔰 | License

This project is licensed under the <a href="./license">MIT License</a>!

---

<div align="center">
  Made with 🤍 by <a href="https://github.com/Ahosall">Ahosall (Feh's)</a>!
  <br>
  All forms of contact are on my profile!
</div>
<br>
<div align="center">
  <a href="#top">
    <img alt="Language" src="https://img.shields.io/badge/Back_to_the_TOP-blue.svg?style=for-the-badge"/>
  </a>
</div>
