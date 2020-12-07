# Remazing HR-Challenge-react

## AdobeXd Mockup
- Web app layout <br>(as it simulates a web-app software I didn't create mobile optimated styles)
![Mockup](src/images/mockupRemazing.png)

## Setup
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- For styling I used styled-components

## Server
- For mocking the clients data into a JSON I installed the JSON-Dev-dependencies: <br>`npm install -D json-server`
- The data is saved in the db.json file and listen on port 4000 (configured in package.json)


## How to run the Scripts

- To start the server, you can run in the project directory: 

### `npm run fake-api`


- In the project directory, you can run:

### `npm start`

- It runs the app in the development mode.
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- The page will reload if you make edits.
- You would also see any lint errors in the console (though I hope that there will be none).

______________________________________________

### Justification of Technology / mechanism of choice:

- To tackle part two of the challenge, I decided to use the JavaScript library React, because this is what I learned during my web-development-bootcamp. The Vue.js framework looks quite similar - but since I'm in my final bootcamp-project I didn't have the time to learn it in parallel.
- For mocking the client data into the application I created a JSON-Server. This is how I could realistically simulate an API without having to program the backend (which of course could have done MongoDB for me. In my capstone-project I use PHP (Symfony-Framework) in the backend, with MySQL as database to implement my own Rest-API.)
